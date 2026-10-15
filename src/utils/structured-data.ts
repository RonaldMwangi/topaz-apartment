import { site, navigation } from '../config/site';
import { pageSeo } from '../config/seo';

/** Conservative business type: no hotel classification or VacationRental eligibility assumed. */
export function structuredData(
  origin: string | null,
  path: string,
  photoUrls: readonly string[] = [],
) {
  if (!origin) return null;
  const url = (pathname: string) => new URL(pathname, origin).href;
  if (path === '/')
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': url('/#website'),
          url: url('/'),
          name: site.name,
          inLanguage: site.language,
          publisher: { '@id': url('/#property') },
        },
        {
          '@type': 'LodgingBusiness',
          '@id': url('/#property'),
          name: site.name,
          slogan: site.tagline,
          url: url('/'),
          telephone: site.whatsappNumber,
          description: site.description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: site.location.locality,
            addressRegion: site.location.city,
            addressCountry: 'KE',
            ...(site.location.exactAddress ? { streetAddress: site.location.exactAddress } : {}),
          },
          geo: { '@type': 'GeoCoordinates', ...site.location.coordinates },
          hasMap: site.location.mapsUrl,
          ...(photoUrls.length ? { image: photoUrls.map(url) } : {}),
        },
      ],
    };
  const crumbs = [{ name: 'Home', item: url('/') }];
  if (path.startsWith('/accommodation/') && path !== '/accommodation/')
    crumbs.push({ name: 'Accommodation', item: url('/accommodation/') });
  const name =
    path === '/accommodation/one-bedroom/'
      ? 'One-Bedroom Apartment'
      : path === '/accommodation/two-bedroom/'
        ? 'Two-Bedroom Apartment'
        : (navigation.find((item) => item.href === path)?.label ??
          pageSeo[path]?.title.split(' | ')[0]);
  if (!name) return null;
  crumbs.push({ name, item: url(path) });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      ...crumb,
    })),
  };
}

export const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
