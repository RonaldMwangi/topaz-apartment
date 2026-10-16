export const facilities = [
  { id: 'pool', number: '01', title: 'Swimming pool', shortTitle: 'Take a Moment to Unwind',
    description: 'Enjoy time by the swimming pool during your stay at Topaz Apartments.',
    note: 'Contact our team to plan your time by the pool.', enquiryKind: 'general' },
  { id: 'meals', number: '02', title: 'Cafeteria & meal arrangements', shortTitle: 'Make time for a good meal',
    description: 'Arrange meals in advance with our team and make more time for your stay.',
    note: 'Share your preferences before arrival; our team will confirm availability, applicable charges and arrangements.', enquiryKind: 'meals' },
  { id: 'transfers', number: '03', title: 'Transport & transfers', shortTitle: 'Your arrival, thoughtfully planned',
    description: "Let us organise your transfer and help plan your arrival in Shanzu.",
    note: 'Share your pickup, destination and travel details. Our team will confirm availability, applicable charges and booking terms.', enquiryKind: 'transfer' },
  { id: 'yacht', number: '04', title: 'Yacht experiences', shortTitle: 'Discover the coast from the water',
    description: 'Let Topaz Apartments arrange a yacht experience along Mtwapa Creek, tailored to your plans.',
    note: 'Availability, applicable charges and booking terms are confirmed with our team.', enquiryKind: 'yacht' },
] as const;
