import type { EnquiryKind } from './whatsapp';
import type { ApartmentId } from '../config/pricing';

export interface EnquiryEventContext {
  enquiry_type: EnquiryKind;
  accommodation_type?: ApartmentId;
  cta_location: string;
}

/** Never pass form values, messages, dates, headcounts or destination URLs. */
export function trackEnquiry(context: EnquiryEventContext) {
  document.dispatchEvent(new CustomEvent('topaz:enquiry', { detail: context }));
}
