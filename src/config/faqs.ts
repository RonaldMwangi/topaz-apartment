import { site } from './site';
import { rateLabel } from './pricing';
import { facilities } from './facilities';
const facility = (id: string) => facilities.find((item) => item.id === id)!;

export const faqs = [
  {
    question: 'Where is Topaz Apartments located?',
    answer: site.location.summary,
  },
  { question: 'How far is the beach?', answer: site.location.beachWalk },
  {
    question: 'How much is the one-bedroom apartment?',
    answer: `${rateLabel('one-bedroom')} per night. Contact the reservations team to confirm availability, applicable charges and booking terms.`,
  },
  {
    question: 'How much is the two-bedroom apartment?',
    answer: `${rateLabel('two-bedroom')} per night. Contact the reservations team to confirm availability, applicable charges and booking terms.`,
  },
  {
    question: 'Is there a swimming pool?',
    answer: `Yes. ${facility('pool').description} ${facility('pool').note}`,
  },
{
    question: 'Are meals available?',
    answer: `${facility('meals').description} ${facility('meals').note}`,
  },
  {
    question: 'How do I arrange a transfer?',
    answer: `${facility('transfers').description} ${facility('transfers').note}`,
  },
  {
    question: 'Can I arrange a yacht experience?',
    answer:
      'Let Topaz Apartments arrange a yacht experience along Mtwapa Creek during your stay. Our team will confirm availability, applicable charges and booking terms. Yacht experiences are arranged separately and are not included in accommodation rates.',
  },
  {
    question: 'How can I book?',
    answer: `Select your preferred apartment and contact the reservations team through WhatsApp on ${site.whatsappNumber}. The team will confirm availability and reservation terms directly; sending an enquiry does not confirm a booking.`,
  },
] as const;
