// Run after build: node tests/seo-build.mjs [output-directory] [test-production-origin]
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] ?? 'dist';
const origin = process.argv[3];
const routes = ['/', '/accommodation/', '/accommodation/one-bedroom/', '/accommodation/two-bedroom/', '/facilities/', '/gallery/', '/location/', '/contact/'];
const titles = new Set(), descriptions = new Set();
const decode = text => text.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"').replaceAll('&nbsp;', ' ');
const strip = html => decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ');
for (const route of routes) {
  const html = readFileSync(join(root, route, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, route);
  assert.equal((html.match(/<main(?:\s|>)/g) ?? []).length, 1, route);
  assert.ok(!html.includes('<astro-island'), 'No React hydration');
  const title = decode(html.match(/<title>(.*?)<\/title>/)[1]);
  const description = decode(html.match(/<meta name="description" content="([^"]+)"/)[1]);
  titles.add(title); descriptions.add(description);
  assert.ok(title && description);
  const text = strip(html);
  assert.ok(text.includes('A Jewel of Coastal Luxury'));
  assert.doesNotMatch(text, /free yacht|complimentary (?:yacht|cruise)|September 2026|three-night offer|beachfront|booking is confirmed|WhatsApp pending/i);
  for (const link of html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)) {
    const url = new URL(decode(link[1]));
    assert.equal(url.pathname, '/254734690690', route);
    assert.equal([...url.searchParams].length, 1);
    assert.ok(url.searchParams.get('text').startsWith('Hello Topaz Apartments,'));
    assert.match(url.searchParams.get('text'), /not a confirmed reservation/);
  }
  const amounts = route === '/accommodation/one-bedroom/' ? ['4,000']
    : route === '/accommodation/two-bedroom/' ? ['8,000']
    : ['/', '/accommodation/', '/contact/'].includes(route) ? ['4,000', '8,000'] : [];
  for (const amount of amounts) assert.match(text, new RegExp(`KES\\s*${amount}`));
  for (const match of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
    const href = decode(match[1]);
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const url = new URL(href, `https://test.invalid${route}`);
    const file = join(root, url.pathname, url.pathname.endsWith('/') ? 'index.html' : '');
    assert.ok(existsSync(file), `${route}: ${href}`);
    if (url.hash && file.endsWith('.html')) assert.ok(readFileSync(file, 'utf8').includes(`id="${url.hash.slice(1)}"`), href);
  }
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  if (!origin) {
    assert.match(html, /content="noindex, follow"/);
    assert.doesNotMatch(html, /rel="canonical"|property="og:url"|data-analytics-id=/);
    assert.deepEqual(schemas, []);
  } else {
    assert.match(html, /content="index, follow, max-image-preview:large"/);
    assert.ok(html.includes(`rel="canonical" href="${origin}${route}"`));
    assert.equal(schemas.length, 1);
    if (route === '/') {
      const nodes = schemas[0]['@graph'];
      assert.equal(nodes[0]['@type'], 'WebSite');
      const business = nodes[1];
      assert.equal(business['@type'], 'LodgingBusiness');
      assert.equal(business.telephone, '+254734690690');
      assert.equal(business.hasMap, 'https://maps.app.goo.gl/PRfUywz8UmemTPmL6');
      assert.equal(business.geo.latitude, -3.9649818);
      assert.equal(business.geo.longitude, 39.748275);
      assert.equal(business.address.streetAddress, undefined);
      for (const key of ['aggregateRating', 'review', 'starRating', 'openingHours', 'offers']) assert.equal(business[key], undefined);
    } else {
      assert.equal(schemas[0]['@type'], 'BreadcrumbList');
      schemas[0].itemListElement.forEach((item, index) => {
        assert.equal(item.position, index + 1);
        assert.ok(item.item.startsWith(origin + '/'));
      });
    }
  }
}
assert.equal(titles.size, 8); assert.equal(descriptions.size, 8);
const location = readFileSync(join(root, 'location/index.html'), 'utf8');
assert.ok(location.includes('href="https://maps.app.goo.gl/PRfUywz8UmemTPmL6"'));
assert.match(strip(location), /15 minutes/);
const contact = readFileSync(join(root, 'contact/index.html'), 'utf8');
assert.equal((contact.match(/<details(?:\s|>)/g) ?? []).length, 10);
assert.ok(!existsSync(join(root, 'sitemap.xml')) === !origin);
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
assert.match(robots, /Allow: \//);
assert.ok(robots.includes('Sitemap:') === !!origin);
if (origin) {
  const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 8);
  for (const route of routes) assert.ok(sitemap.includes(`<loc>${origin}${route}</loc>`));
}
console.log(`SEO build verification passed: 8 routes, metadata, headings, links, verified rates/WhatsApp/Maps, FAQs, ${origin ? 'production canonicals, sitemap and parsed factual JSON-LD' : 'preview noindex and conditional metadata'}.`);
