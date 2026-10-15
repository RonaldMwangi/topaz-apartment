interface SiteConfig {
  name: string;
  tagline: string;
  language: string;
  description: string;
  location: {
    locality: string;
    city: string;
    country: string;
    nearby: readonly string[];
    exactAddress: string | null;
    mapsUrl: string;
    coordinates: { latitude: number; longitude: number };
    beachWalk: string;
  };
  /** Verified production origin including https://; null until confirmed. */
  publicOrigin: string | null;
  /** Public WhatsApp Business number in international format; null until verified. */
  whatsappNumber: string | null;
}

export const site: SiteConfig = {
  name: 'Topaz Apartments',
  tagline: 'A Jewel of Coastal Luxury',
  language: 'en',
  description:
    'One- and two-bedroom apartments in Shanzu, Mombasa, near PrideInn and the Serena Beach area.',
  location: {
    locality: 'Shanzu',
    city: 'Mombasa',
    country: 'Kenya',
    nearby: ['PrideInn in Shanzu', 'the Serena Beach area'],
    exactAddress: null,
    mapsUrl: 'https://maps.app.goo.gl/PRfUywz8UmemTPmL6',
    coordinates: { latitude: -3.9649818, longitude: 39.748275 },
    beachWalk: "The beach is approximately 15 minutes’ walk away, depending on the route and walking pace.",
  },
  publicOrigin: process.env.TOPAZ_PUBLIC_ORIGIN || null,
  whatsappNumber: '+254734690690',
};

export const locationLabel = [
  site.location.locality,
  site.location.city,
  site.location.country,
].join(', ');

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/accommodation/', label: 'Accommodation' },
  { href: '/facilities/', label: 'Facilities' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/location/', label: 'Location' },
  { href: '/contact/', label: 'Contact' },
] as const;
