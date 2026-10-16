export type EnquiryKind = 'general' | 'stay' | 'meals' | 'transfer' | 'yacht';

export interface EnquiryDetails {
  kind?: EnquiryKind;
  apartment?: string;
  /** Formatted rate from the central pricing configuration, never a booking total. */
  nightlyRate?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  meals?: boolean;
  transfer?: boolean;
  pickup?: string;
  destination?: string;
  transferDate?: string;
  transferTime?: string;
  passengers?: string;
}

export const enquiryMessages: Record<EnquiryKind, string> = {
  general: 'I would like to enquire about accommodation and arrangements.',
  stay: 'I would like to ask about apartment availability and current rates.',
  meals: 'I would like to enquire about meal and kitchen arrangements in advance.',
  transfer: 'I would like to enquire about transport or transfer arrangements.',
  yacht:
    'I would like Topaz Apartments to arrange a yacht experience along Mtwapa Creek during my stay. Kindly confirm availability, applicable charges and booking terms. This is a separate arrangement.',
};

/** Accept international formatting without guessing a country or local prefix. */
export function normalizeWhatsAppNumber(value: string | null | undefined): string | null {
  const input = value?.trim();
  if (!input || !/^\+?[\d ()-]+$/.test(input)) return null;
  const digits = input.replace(/\D/g, '');
  return /^[1-9]\d{6,14}$/.test(digits) ? digits : null;
}

export function buildEnquiryMessage(propertyName: string, details: EnquiryDetails = {}): string {
  const field = (label: string, value?: string) =>
    value?.trim() ? `${label}: ${value.trim()}` : undefined;
  return [
    `Hello ${propertyName}, ${enquiryMessages[details.kind ?? 'general']}`,
    field('Apartment', details.apartment),
    field('Advertised nightly accommodation rate', details.nightlyRate),
    field('Intended check-in', details.checkIn),
    field('Intended check-out', details.checkOut),
    field('Guests', details.guests),
    details.meals ? 'Interested in advance meal / kitchen arrangements: yes' : undefined,
    details.transfer ? 'Interested in transport arrangements: yes' : undefined,
    field('Pickup location', details.pickup),
    field('Destination', details.destination),
    field('Preferred transfer date', details.transferDate),
    field('Preferred transfer time (Kenya time, UTC+3)', details.transferTime),
    field('Passengers', details.passengers),
    'Please confirm availability, applicable charges and booking terms. This is an enquiry, not a confirmed reservation.',
  ]
    .filter(Boolean)
    .join('\n');
}

interface WhatsAppEnquiry {
  phoneNumber: string | null | undefined;
  propertyName: string;
  enquiryIdentifier?: string;
  message?: string;
  details?: EnquiryDetails;
}

export function createWhatsAppEnquiryLink({
  phoneNumber,
  propertyName,
  enquiryIdentifier,
  message,
  details = {},
}: WhatsAppEnquiry): string | null {
  const phone = normalizeWhatsAppNumber(phoneNumber);
  if (!phone) return null;
  const text = [
    buildEnquiryMessage(propertyName, {
      ...details,
      apartment: details.apartment ?? enquiryIdentifier,
    }),
    message?.trim(),
  ]
    .filter(Boolean)
    .join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function validateEnquiry(details: EnquiryDetails, today?: string): string | null {
  for (const value of [details.checkIn, details.checkOut, details.transferDate]) {
    if (value && !validDate(value)) return 'Please enter valid dates.';
    if (value && today && value < today) return 'Please select today or a future date.';
  }
  if (details.checkIn && details.checkOut && details.checkOut <= details.checkIn) {
    return 'Check-out must be after check-in.';
  }
  for (const value of [details.guests, details.passengers]) {
    if (value && (!/^[1-9]\d*$/.test(value) || !Number.isSafeInteger(Number(value)))) {
      return 'Please enter a whole number greater than zero for guests or passengers.';
    }
  }
  if (details.transferTime && !/^([01]\d|2[0-3]):[0-5]\d$/.test(details.transferTime))
    return 'Please enter a valid transfer time.';
  return null;
}
