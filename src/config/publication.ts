import { site } from './site';

/** Build-time configuration. Preview builds must leave TOPAZ_INDEXING_ENABLED unset. */
export function verifiedOrigin(value: string | null): string | null {
  if (!value) return null;
  const url = new URL(value);
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  )
    throw new Error(
      'TOPAZ_PUBLIC_ORIGIN must be a verified HTTPS origin without a path, query or credentials.',
    );
  return url.origin;
}

export const publicOrigin = verifiedOrigin(site.publicOrigin);
export const indexingEnabled = !!publicOrigin && process.env.TOPAZ_INDEXING_ENABLED === 'true';
export const measurementId = /^G-[A-Z0-9]+$/.test(process.env.TOPAZ_GA4_ID ?? '')
  ? process.env.TOPAZ_GA4_ID!
  : null;
export const searchConsoleVerification = process.env.TOPAZ_SEARCH_CONSOLE_VERIFICATION || null;
