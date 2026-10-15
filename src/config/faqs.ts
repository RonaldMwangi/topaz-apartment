import { site } from './site';
import { rateLabel } from './pricing';
import { facilities } from './facilities';
const facility = (id: string) => facilities.find((item) => item.id === id)!;

export const faqs = [
  {
    question: 'Where is Topaz Apartments located?',
    answer: `${site.name} is in Shanzu, Mombasa, near ${site.location.nearby.join(' and ')}.`,
  },
  { question: 'How far is the beach?', answer: site.location.beachWalk },
  {
    question: 'How much is the one-bedroom apartment?',
    answer: `${rateLabel('one-bedroom')} per night. Contact the reservations team to confirm availability, taxes, mandatory charges and applicable terms.`,
  },
  {
    question: 'How much is the two-bedroom apartment?',
    answer: `${rateLabel('two-bedroom')} per night. Contact the reservations team to confirm availability, taxes, mandatory charges and applicable terms.`,
  },
  {
    question: 'Is there a swimming pool?',
    answer: `Yes. ${facility('pool').description} ${facility('pool').note}`,
  },
  {
    question: 'Is parking available?',
    answer: `${facility('parking').description} ${facility('parking').note}`,
  },
  {
    question: 'Are meals available?',
    answer: `${facility('meals').description} ${facility('meals').note}`,
  },
  {
    question: 'Can you arrange transfers?',
    answer: `${facility('transfers').description} ${facility('transfers').note}`,
  },
  {
    question: 'Can I arrange a yacht experience?',
    answer:
      'Ask the team about separately arranged yacht experiences along Mtwapa Creek. Options, schedules and pricing are subject to provider confirmation and are not included in accommodation rates.',
  },
  {
    question: 'How can I book?',
    answer: `Select your preferred apartment and contact the reservations team through WhatsApp on ${site.whatsappNumber}. The team will confirm availability and reservation terms directly; sending an enquiry does not confirm a booking.`,
  },
] as const;
