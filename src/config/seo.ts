import { rateLabel, type ApartmentId } from './pricing';

const one = rateLabel('one-bedroom');
const two = rateLabel('two-bedroom');
export const pageSeo: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Topaz Apartments Shanzu | 1 & 2 Bedroom Stays',
    description: `Stay in Shanzu, Mombasa, near the Serena Beach area. One-bedroom apartments at ${one} and two-bedroom apartments at ${two} per night. Enquire on WhatsApp.`,
  },
  '/accommodation/': {
    title: '1 & 2 Bedroom Apartments in Shanzu | Topaz',
    description: `Explore one-bedroom apartments at ${one} and two-bedroom apartments at ${two} per night in Shanzu, Mombasa. Ask about dates and terms on WhatsApp.`,
  },
  '/facilities/': {
    title: 'Pool & Guest Experiences | Topaz Apartments',
    description:
      'Discover the swimming pool and guest experiences at Topaz Apartments, Shanzu. Plan advance meals, transfers and Mtwapa Creek yacht arrangements with our team.',
  },
  '/gallery/': {
    title: 'Apartment & Property Gallery | Topaz Apartments Shanzu',
    description:
      'Explore the Topaz Apartments gallery for one- and two-bedroom stays, pool and shared facilities. Authentic property photography is being prepared.',
  },
  '/location/': {
    title: 'Topaz Apartments Location | Shanzu, Mombasa',
    description:
      'Find Topaz Apartments in Shanzu, near PrideInn and the Serena Beach area. The beach is about 15 minutes’ walk away. Open Google Maps for directions.',
  },
  '/contact/': {
    title: 'Contact Topaz Apartments | WhatsApp Reservations in Shanzu',
    description:
      'Enquire with Topaz Apartments on WhatsApp about apartment dates, rates, advance meals or transfers. Plan your stay in Shanzu, Mombasa directly with the team.',
  },
};
for (const [id, label] of [
  ['one-bedroom', 'One-Bedroom'],
  ['two-bedroom', 'Two-Bedroom'],
] as const satisfies readonly (readonly [ApartmentId, string])[]) {
  pageSeo[`/accommodation/${id}/`] = {
    title: `${label} Apartment in Shanzu | ${rateLabel(id)}`,
    description: `Explore the ${label.toLowerCase()} apartment at Topaz Apartments, Shanzu, Mombasa, at ${rateLabel(id)} per night. Confirm dates, guest arrangements and terms on WhatsApp.`,
  };
}
