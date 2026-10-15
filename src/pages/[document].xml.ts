import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { navigation } from '../config/site';
import { publicOrigin, indexingEnabled } from '../config/publication';

// No sitemap route or placeholder domain is emitted before the origin is verified.
export function getStaticPaths() {
  return indexingEnabled ? [{ params: { document: 'sitemap' } }] : [];
}

export const GET: APIRoute = async () => {
  const apartments = await getCollection('accommodation', ({ data }) => !data.draft);
  const paths = [
    ...navigation.map(({ href }) => href),
    ...apartments.map(({ data }) => `/accommodation/${data.id}/`),
  ];
  const escapeXml = (value: string) =>
    value.replace(
      /[<>&"']/g,
      (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!,
    );
  const urls = paths
    .map((path) => `<url><loc>${escapeXml(new URL(path, publicOrigin!).href)}</loc></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
