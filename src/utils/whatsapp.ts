interface WhatsAppEnquiry {
  phoneNumber: string | null | undefined;
  propertyName: string;
  enquiryIdentifier?: string;
  message?: string;
}

/** Return no link for missing or malformed international numbers. */
export function createWhatsAppEnquiryLink({
  phoneNumber,
  propertyName,
  enquiryIdentifier,
  message,
}: WhatsAppEnquiry): string | null {
  if (!phoneNumber || !/^[1-9]\d{6,14}$/.test(phoneNumber)) return null;

  const text = [
    `Hello ${propertyName}, I would like to enquire about accommodation.`,
    enquiryIdentifier ? `Accommodation reference: ${enquiryIdentifier}` : undefined,
    message?.trim(),
  ].filter(Boolean).join('\n');

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
