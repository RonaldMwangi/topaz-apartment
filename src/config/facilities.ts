export const facilities = [
  {
    id: 'pool',
    number: '01',
    title: 'Swimming pool',
    shortTitle: 'A moment by the pool',
    description:
      'A swimming pool is part of the property. Ask us about access arrangements for your stay.',
    note: 'Access conditions and any charges are confirmed directly.',
    enquiryKind: 'general',
  },
  {
    id: 'parking',
    number: '02',
    title: 'Ample parking',
    shortTitle: 'Arrive at your own pace',
    description:
      'Ample parking is available at the property. Let us know if you plan to arrive by car.',
    note: 'Parking arrangements and any charges are confirmed directly.',
    enquiryKind: 'general',
  },
  {
    id: 'meals',
    number: '03',
    title: 'Cafeteria & kitchen',
    shortTitle: 'A little planning, a warmer welcome',
    description: 'Meal and kitchen arrangements are available upon advance request.',
    note: 'Please contact the property early so arrangements, availability and costs can be confirmed.',
    enquiryKind: 'meals',
  },
  {
    id: 'transfers',
    number: '04',
    title: 'Transport & transfers',
    shortTitle: 'Your onward journey, considered',
    description: 'Transport and transfers can be arranged upon request, subject to confirmation.',
    note: 'Share your journey details. Arrangements, availability and costs must be confirmed by the property.',
    enquiryKind: 'transfer',
  },
] as const;
