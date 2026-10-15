interface SiteConfig {
  name: string;
  language: string;
  description: string;
  location: {
    locality: string;
    city: string;
    country: string;
    nearby: readonly string[];
    exactAddress: string | null;
  };
  /** Verified production origin including https://; null until confirmed. */
  publicOrigin: string | null;
  /** International digits only, without +, spaces or a local leading zero. */
  whatsappNumber: string | null;
}

export const site: SiteConfig = {
  name: 'Topaz Apartment',
  language: 'en',
  description: 'Explore Topaz Apartment in Shanzu, Mombasa, Kenya, near PrideInn Hotel and the beach.',
  location: {
    locality: 'Shanzu',
    city: 'Mombasa',
    country: 'Kenya',
    nearby: ['PrideInn Hotel', 'the beach'],
    exactAddress: null,
  },
  publicOrigin: null,
  whatsappNumber: null,
};

export const locationLabel = [site.location.locality, site.location.city, site.location.country].join(', ');

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/accommodation/', label: 'Accommodation' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/location/', label: 'Location' },
  { href: '/contact/', label: 'Contact' },
] as const;
