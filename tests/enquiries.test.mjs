import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeWhatsAppNumber, createWhatsAppEnquiryLink, buildEnquiryMessage, validateEnquiry } from '../src/utils/whatsapp.ts';
import { formatNightlyRate, pricing } from '../src/config/pricing.ts';

test('unconfigured and invalid WhatsApp numbers never produce links', () => {
  for (const value of [null, undefined, '', '0712345678', '00254700000000', '254700000000?x=1', '++254700000000', '1', '1234567890123456']) {
    assert.equal(normalizeWhatsAppNumber(value), null);
    assert.equal(createWhatsAppEnquiryLink({ phoneNumber: value, propertyName: 'Test Property' }), null);
  }
});

test('international formatting is accepted without guessing local prefixes', () => {
  assert.equal(normalizeWhatsAppNumber('+254 (700) 000-000'), '254700000000');
  assert.equal(normalizeWhatsAppNumber('254700000000'), '254700000000');
});

test('stay details, Unicode, punctuation and line breaks survive URL encoding', () => {
  const details = { kind: 'stay', apartment: 'Test Apartment & suite?', checkIn: '2099-01-10', checkOut: '2099-01-14', guests: '3', meals: true, transfer: true };
  const message = 'A question: café, coast & family #1 / 🌴';
  const url = new URL(createWhatsAppEnquiryLink({ phoneNumber: '+254700000000', propertyName: 'Test Property', details, message }));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/254700000000');
  assert.equal(url.hash, '');
  assert.equal([...url.searchParams].length, 1);
  assert.equal(url.searchParams.get('text'), `${buildEnquiryMessage('Test Property', details)}\n${message}`);
  for (const value of [details.apartment, details.checkIn, details.checkOut, 'Guests: 3', 'advance meal', 'transport arrangements']) assert.ok(url.searchParams.get('text').includes(value));
});

test('meal and transfer messages preserve context without reservation claims', () => {
  assert.match(buildEnquiryMessage('Test', { kind: 'meals' }), /in advance/);
  const text = buildEnquiryMessage('Test', { kind: 'transfer', pickup: 'Test pickup', destination: 'Test destination', transferDate: '2099-03-12', transferTime: '13:45', passengers: '2' });
  for (const value of ['Test pickup', 'Test destination', '2099-03-12', '13:45', 'UTC+3', 'Passengers: 2', 'not a confirmed reservation']) assert.ok(text.includes(value));
  assert.doesNotMatch(text, /undefined|null/);
});

test('optional fields stay optional; dates and headcounts are checked', () => {
  assert.equal(validateEnquiry({}), null);
  assert.equal(validateEnquiry({ checkIn: '2099-01-10', checkOut: '2099-01-11' }), null);
  for (const details of [
    { checkIn: '2099-01-10', checkOut: '2099-01-10' },
    { checkIn: '2099-01-10', checkOut: '2099-01-09' },
    { checkIn: '2099-02-30' }, { guests: '-1' }, { guests: '1.5' },
    { passengers: '0' }, { transferTime: '25:70' }, { transferDate: '2000-01-01' },
  ]) assert.ok(validateEnquiry(details, '2099-01-01'));
});

test('rates share one source; unconfigured or invalid amounts never show zero', () => {
  assert.equal(pricing['one-bedroom'].amount, 4000);
  assert.equal(pricing['two-bedroom'].amount, 8000);
  assert.match(formatNightlyRate(pricing['one-bedroom']), /KES\s*4,000/);
  assert.match(formatNightlyRate(pricing['two-bedroom']), /KES\s*8,000/);
  assert.equal(pricing['one-bedroom'].feeAndTaxNote, null);
  assert.equal(pricing['two-bedroom'].feeAndTaxNote, null);
  for (const amount of [null, 0, -1, NaN, Infinity]) assert.equal(formatNightlyRate({ amount, currency: 'KES', basis: 'night' }), null);
  // Arbitrary test amounts are deliberately not property pricing.
  assert.match(formatNightlyRate({ amount: 12345, currency: 'KES', basis: 'night' }), /KES\s*12,345/);
  assert.match(formatNightlyRate({ amount: 12345.5, currency: 'KES', basis: 'night' }), /12,345\.50/);
});

test('official reservation number, apartment rate and yacht context survive encoding', () => {
  for (const [id, apartment] of [['one-bedroom', 'One-Bedroom Apartment'], ['two-bedroom', 'Two-Bedroom Apartment']]) {
    const nightlyRate = formatNightlyRate(pricing[id]);
    const url = new URL(createWhatsAppEnquiryLink({ phoneNumber: '+254734690690', propertyName: 'Topaz Apartments', details: { kind: 'stay', apartment, nightlyRate, checkIn: '2099-04-01', checkOut: '2099-04-03' } }));
    assert.equal(url.pathname, '/254734690690');
    for (const text of [apartment, nightlyRate, '2099-04-01', '2099-04-03', 'not a confirmed reservation']) assert.ok(url.searchParams.get('text').includes(text));
  }
  const message = buildEnquiryMessage('Topaz Apartments', { kind: 'yacht' });
  assert.match(message, /Mtwapa Creek/);
  assert.match(message, /separate arrangement/);
  assert.doesNotMatch(message, /free|complimentary|three.night|September/i);
});
