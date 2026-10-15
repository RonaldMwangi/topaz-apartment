import type { APIRoute } from 'astro';
import { indexingEnabled, publicOrigin } from '../config/publication';

export const GET: APIRoute = () => new Response(
  indexingEnabled
    ? `User-agent: *\nAllow: /\nSitemap: ${publicOrigin}/sitemap.xml\n`
    // Let crawlers see noindex. A robots disallow alone cannot prevent URL indexing.
    : 'User-agent: *\nAllow: /\n# Preview: HTML pages carry noindex. Protect private previews with hosting authentication.\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
