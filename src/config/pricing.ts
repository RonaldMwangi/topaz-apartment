export type ApartmentId = 'one-bedroom' | 'two-bedroom';

export interface ApartmentRate {
  amount: number | null;
  currency: 'KES';
  basis: 'night';
  specialRateNote?: string;
  /** Publication review: null until tax inclusivity and mandatory charges are confirmed. */
  feeAndTaxNote?: string | null;
  validityNote?: string;
  terms?: readonly string[];
}

/** The single rate source. Enter only approved nightly amounts, never estimates. */
export const pricing: Record<ApartmentId, ApartmentRate> = {
  'one-bedroom': {
    amount: 4000,
    currency: 'KES',
    basis: 'night',
    feeAndTaxNote: null,
  },
  'two-bedroom': {
    amount: 8000,
    currency: 'KES',
    basis: 'night',
    feeAndTaxNote: null,
  },
};

export function formatNightlyRate(rate: ApartmentRate): string | null {
  if (rate.amount === null || !Number.isFinite(rate.amount) || rate.amount <= 0) return null;
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: rate.currency,
    currencyDisplay: 'code',
    minimumFractionDigits: Number.isInteger(rate.amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(rate.amount);
}

export const rateLabel = (id: ApartmentId) => formatNightlyRate(pricing[id]);
