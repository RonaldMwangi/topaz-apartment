import type { ImageMetadata } from 'astro';
import photo0 from '../assets/hero/topaz-hero-interior.jpg';
import photo1 from '../assets/property/one-bedroom/topaz-1082.jpg';
import photo2 from '../assets/property/one-bedroom/topaz-1139.jpg';
import photo3 from '../assets/property/one-bedroom/topaz-1140.jpg';
import photo4 from '../assets/property/one-bedroom/topaz-1063.jpg';
import photo5 from '../assets/property/one-bedroom/topaz-1159.jpg';
import photo6 from '../assets/property/one-bedroom/topaz-1137.jpg';
import photo7 from '../assets/property/two-bedroom/topaz-1051.jpg';
import photo8 from '../assets/property/two-bedroom/topaz-1126.jpg';
import photo9 from '../assets/property/two-bedroom/topaz-1120.jpg';
import photo10 from '../assets/property/two-bedroom/topaz-1121.jpg';
import photo11 from '../assets/property/two-bedroom/topaz-1143.jpg';
import photo12 from '../assets/property/two-bedroom/topaz-1144.jpg';
import photo13 from '../assets/property/two-bedroom/topaz-1145.jpg';
import photo14 from '../assets/property/exterior/topaz-1043.jpg';
import photo15 from '../assets/property/exterior/topaz-1045.jpg';
import photo16 from '../assets/property/exterior/topaz-1160.jpg';
import photo17 from '../assets/property/facilities/topaz-1056.jpg';
import photo18 from '../assets/property/facilities/topaz-1068.jpg';
import photo19 from '../assets/property/facilities/topaz-1070.jpg';
import photo20 from '../assets/property/facilities/topaz-1095.jpg';
import yachtCruise from '../assets/property/experiences/illustrative-yacht-cruise.jpg';
import catamaran from '../assets/property/experiences/illustrative-catamaran.jpg';
import poolInspiration from '../assets/property/experiences/illustrative-pool.jpg';
import mealInspiration from '../assets/property/experiences/illustrative-meals.jpg';
import galleryPool from '../assets/property/experiences/illustrative-gallery-pool.jpg';
import diningInspiration from '../assets/property/experiences/illustrative-dining.jpg';
import kenyaCoast from '../assets/property/experiences/illustrative-kenya-coast.jpg';
import coastalInspiration from '../assets/property/experiences/illustrative-coast.jpg';

export const galleryCategories = [
  { id: 'one-bedroom', label: 'One-bedroom apartment', number: '01' },
  { id: 'two-bedroom', label: 'Two-bedroom apartment', number: '02' },
  { id: 'pool', label: 'Pool inspiration', number: '03' },
  { id: 'facilities', label: 'Coastal inspiration', number: '04' },
  { id: 'property', label: 'Around Topaz', number: '05' },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]['id'];
export type MediaAspect = 'landscape' | 'portrait' | 'wide' | 'square';
export interface PropertyPhoto {
  id: string;
  category: GalleryCategory | 'experiences';
  src: ImageMetadata;
  /** One guest-facing placement; gallery collections may contain multiple photographs. */
  placement: string;
  alt: string;
  caption?: string;
  order?: number;
  featured?: 'hero' | 'category';
  aspect?: MediaAspect;
  objectPosition?: string;
  attribution?: { name: string; url?: string };
  illustrative?: boolean;
  licence?: { name: string; url: string; verifiedOn: string };
}

// Curated authentic property sources; original HEIC files remain untouched.
// Unclassified room details belong only to Around Topaz, never shared facilities.
export const propertyPhotos: readonly PropertyPhoto[] = [
  {
    "id": "one-living",
    "placement": "home-hero",
    "category": "one-bedroom",
    "src": photo0,
    "alt": "Grey sofa, round coffee table and dining table beside turquoise curtains in the one-bedroom apartment",
    "caption": "Lounge beside turquoise curtains",
    "order": 0,
    "aspect": "portrait",
    "featured": "category",
    "objectPosition": "50% 72%"
  },
  {
    "id": "one-sitting",
    "placement": "gallery:one-bedroom",
    "category": "one-bedroom",
    "src": photo1,
    "alt": "Mustard armchair beside a bed with grey cushions and turquoise curtains in the one-bedroom apartment",
    "caption": "Mustard armchairs beside the sleeping area",
    "order": 1,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "one-bedroom",
    "placement": "home-card:one-bedroom",
    "category": "one-bedroom",
    "src": photo2,
    "alt": "Upholstered double bed with folded towels and turquoise curtains in the one-bedroom apartment",
    "caption": "One-bedroom sleeping space",
    "order": 2,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "one-bed-detail",
    "placement": "detail-featured:one-bedroom",
    "category": "one-bedroom",
    "src": photo3,
    "alt": "Tufted headboard, patterned cushions and folded towels on the one-bedroom double bed",
    "caption": "Tufted headboard and patterned cushions",
    "order": 3,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "one-wardrobe",
    "placement": "collection-card:one-bedroom",
    "category": "one-bedroom",
    "src": photo4,
    "alt": "Bed and fitted dark wardrobe beside a curtained window in the one-bedroom apartment",
    "caption": "Bedroom and storage",
    "order": 4,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "one-kitchen",
    "placement": "detail-gallery:one-bedroom",
    "category": "one-bedroom",
    "src": photo5,
    "alt": "Kitchen counter with hob, microwave, kettle and white cabinets in the one-bedroom apartment",
    "caption": "One-bedroom kitchen",
    "order": 5,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "one-window",
    "placement": "detail-gallery:one-bedroom",
    "category": "one-bedroom",
    "src": photo6,
    "alt": "Folded towels on a bed beside turquoise and sheer curtains in the one-bedroom apartment",
    "caption": "Bedroom by the window",
    "order": 6,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "two-living",
    "placement": "home-card:two-bedroom",
    "category": "two-bedroom",
    "src": photo7,
    "alt": "Seating area, coffee table and dining furniture in the two-bedroom apartment",
    "caption": "Open-plan lounge and dining space",
    "order": 7,
    "aspect": "portrait",
    "featured": "category",
    "objectPosition": "50% 70%"
  },
  {
    "id": "two-dining",
    "placement": "collection-card:two-bedroom",
    "category": "two-bedroom",
    "src": photo8,
    "alt": "Dark wooden dining table and chairs beside curtained windows in the two-bedroom apartment",
    "caption": "Two-bedroom dining area",
    "order": 8,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "two-twin-room",
    "placement": "detail-featured:two-bedroom",
    "category": "two-bedroom",
    "src": photo9,
    "alt": "Two single beds with white linen and red cushions in the two-bedroom apartment",
    "caption": "Twin bedroom",
    "order": 9,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "two-twin-detail",
    "placement": "detail-gallery:two-bedroom",
    "category": "two-bedroom",
    "src": photo10,
    "alt": "Paired single beds beneath wall art in the two-bedroom apartment",
    "caption": "White linen and red cushions",
    "order": 10,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "two-second-room",
    "placement": "detail-gallery:two-bedroom",
    "category": "two-bedroom",
    "src": photo11,
    "alt": "Two beds with folded turquoise towels and curtained windows in the two-bedroom apartment",
    "caption": "Twin beds by the window",
    "order": 11,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "two-bedside",
    "placement": "gallery:two-bedroom",
    "category": "two-bedroom",
    "src": photo12,
    "alt": "Single beds and a wooden bedside table beneath wall art in the two-bedroom apartment",
    "caption": "Twin beds with a wooden bedside table",
    "order": 12,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "two-towels",
    "placement": "gallery:two-bedroom",
    "category": "two-bedroom",
    "src": photo13,
    "alt": "Folded turquoise towels and grey cushions on twin beds in the two-bedroom apartment",
    "caption": "Turquoise towels on white linen",
    "order": 13,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-stairs",
    "placement": "gallery:property",
    "category": "property",
    "src": photo14,
    "alt": "Tiled staircase with dark step edges and a potted plant inside Topaz",
    "caption": "Tiled staircase and interior landing",
    "order": 14,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-door",
    "placement": "gallery:property",
    "category": "property",
    "src": photo15,
    "alt": "Wooden apartment doorway beside a tiled internal landing at Topaz",
    "caption": "Apartment entrance",
    "order": 15,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-corridor",
    "placement": "gallery:property",
    "category": "property",
    "src": photo16,
    "alt": "Bright interior corridor with wooden door frames and wall art at Topaz",
    "caption": "Interior corridor",
    "order": 16,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-kitchen",
    "placement": "gallery:property",
    "category": "property",
    "src": photo17,
    "alt": "White kitchen cabinets, dark counters and a cooker beside a bright window at Topaz",
    "caption": "Kitchen at Topaz",
    "order": 17,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-shower",
    "placement": "gallery:property",
    "category": "property",
    "src": photo18,
    "alt": "Tiled shower area with patterned wall tiles, high windows and a recessed shelf at Topaz",
    "caption": "Bathroom detail",
    "order": 18,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-storage",
    "placement": "gallery:property",
    "category": "property",
    "src": photo19,
    "alt": "Fitted dark wardrobe with drawers, hanging space and a mirrored panel at Topaz",
    "caption": "Fitted storage",
    "order": 19,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  },
  {
    "id": "property-lounge",
    "placement": "gallery:property",
    "category": "property",
    "src": photo20,
    "alt": "Grey sofas, a mustard armchair and a round coffee table in a bright Topaz interior",
    "caption": "Seating beneath pendant lighting",
    "order": 20,
    "aspect": "portrait",
    "objectPosition": "50% 60%"
  }
];
/** Licensed experience photos are separate: never used as apartment or property imagery. */
export const experiencePhotos: readonly PropertyPhoto[] = [
  {
    "id": "coastal-inspiration",
    "category": "experiences",
    "placement": "home-location",
    "src": coastalInspiration,
    "illustrative": true,
    "alt": "Coastal tree branches shading sand and a small rope swing",
    "caption": "Coastal surroundings · illustrative",
    "aspect": "landscape",
    "objectPosition": "50% 65%",
    "attribution": {
      "name": "Farrel Nobel / Unsplash",
      "url": "https://unsplash.com/photos/photo-of-mangrove-by-the-sea-LryiMUHIskE"
    },
    "licence": {
      "name": "Unsplash License",
      "url": "https://unsplash.com/license",
      "verifiedOn": "2026-10-16"
    }
  },
  {
    "id": "home-yacht",
    "category": "experiences",
    "placement": "home-experience",
    "src": yachtCruise,
    "illustrative": true,
    "alt": "Passengers relaxing on a sailing yacht as warm sunset light falls over the sea",
    "caption": "Coastal cruising · illustrative",
    "aspect": "landscape",
    "objectPosition": "50% 50%",
    "attribution": {
      "name": "Matheus Bertelli / Pexels",
      "url": "https://www.pexels.com/photo/party-on-sailboat-at-sunset-15141408/"
    },
    "licence": {
      "name": "Pexels License",
      "url": "https://www.pexels.com/license/",
      "verifiedOn": "2026-10-16"
    }
  },
  {
    "id": "facilities-yacht",
    "category": "experiences",
    "placement": "facilities-experience",
    "src": catamaran,
    "illustrative": true,
    "alt": "White catamaran resting in calm blue coastal water",
    "caption": "Yacht experience · illustrative",
    "aspect": "landscape",
    "objectPosition": "50% 42%",
    "attribution": {
      "name": "Deborah Varrie / Unsplash",
      "url": "https://unsplash.com/photos/a-catamaran-sailboat-anchored-in-calm-blue-water-APiRxkR0mCY"
    },
    "licence": {
      "name": "Unsplash License",
      "url": "https://unsplash.com/license",
      "verifiedOn": "2026-10-16"
    }
  },
  {
    "id": "pool-inspiration",
    "category": "experiences",
    "placement": "facilities-pool",
    "src": poolInspiration,
    "illustrative": true,
    "alt": "Illustrative tropical swimming pool framed by palm leaves, not the Topaz pool",
    "caption": "Swimming pool · illustrative",
    "aspect": "landscape",
    "objectPosition": "50% 100%",
    "attribution": {
      "name": "SHVETS production / Pexels",
      "url": "https://www.pexels.com/photo/resort-with-a-swimming-pool-and-palm-leaves-7565675/"
    },
    "licence": {
      "name": "Pexels License",
      "url": "https://www.pexels.com/license/",
      "verifiedOn": "2026-10-16"
    }
  },
  {
    "id": "meal-inspiration",
    "category": "experiences",
    "placement": "home-meals",
    "src": mealInspiration,
    "illustrative": true,
    "alt": "Illustrative breakfast of eggs, toast, beans and vegetables on a white plate",
    "caption": "Meal inspiration · illustrative",
    "aspect": "landscape",
    "objectPosition": "50% 55%",
    "attribution": {
      "name": "Sheelu Cyriac / Pexels",
      "url": "https://www.pexels.com/photo/top-view-of-breakfast-on-plate-25068361/"
    },
    "licence": {
      "name": "Pexels License",
      "url": "https://www.pexels.com/license/",
      "verifiedOn": "2026-10-16"
    }
  }
,
{
  "id": "gallery-pool-inspiration",
  "category": "experiences",
  "placement": "gallery:pool",
  "src": galleryPool,
  "illustrative": true,
  "alt": "Illustrative coastal resort pool with palm trees and ocean beyond; this is not the Topaz pool",
  "caption": "Coastal pool setting · illustrative",
  "aspect": "landscape",
  "objectPosition": "50% 100%",
  "attribution": {
    "name": "Mwabonje Ringa / Pexels",
    "url": "https://www.pexels.com/photo/tropical-resort-with-palms-and-swimming-pool-near-sea-4300118/"
  },
  "licence": {
    "name": "Pexels License",
    "url": "https://www.pexels.com/license/",
    "verifiedOn": "2026-10-16"
  }
},
{
  "id": "dining-inspiration",
  "category": "experiences",
  "placement": "facilities-meals",
  "src": diningInspiration,
  "illustrative": true,
  "alt": "Illustrative breakfast table with bread, fruit, cheeses and patterned place settings",
  "caption": "A thoughtfully set table · illustrative",
  "aspect": "landscape",
  "objectPosition": "50% 55%",
  "attribution": {
    "name": "yasemin . / Pexels",
    "url": "https://www.pexels.com/photo/table-set-for-breakfast-10560727/"
  },
  "licence": {
    "name": "Pexels License",
    "url": "https://www.pexels.com/license/",
    "verifiedOn": "2026-10-16"
  }
},
{
  "id": "kenya-coast-inspiration",
  "category": "experiences",
  "placement": "gallery:facilities",
  "src": kenyaCoast,
  "illustrative": true,
  "alt": "Illustrative Kenyan coastal shoreline with palm trees, sand and gentle waves; not the beach at Topaz",
  "caption": "Kenyan coastline · illustrative",
  "aspect": "landscape",
  "objectPosition": "50% 65%",
  "attribution": {
    "name": "Lucas Pezeta / Pexels",
    "url": "https://www.pexels.com/photo/scenic-view-of-a-beach-7102295/"
  },
  "licence": {
    "name": "Pexels License",
    "url": "https://www.pexels.com/license/",
    "verifiedOn": "2026-10-16"
  }
}
];
export const heroPhotoId: string | null = 'one-living';

export function validatePhotos(photos: readonly PropertyPhoto[]): void {
  const ids = new Set<string>();
  const sources = new Set<string>();
  for (const photo of photos) {
    if (!photo.id || ids.has(photo.id) || !photo.alt.trim())
      throw new Error(`Photo needs a unique ID and descriptive alt text: ${photo.id}`);
    if (/\.heic(?:\?|$)/i.test(photo.src.src))
      throw new Error(`Convert HEIC before registering: ${photo.id}`);
    if (photo.order !== undefined && !Number.isFinite(photo.order))
      throw new Error(`Invalid photo order: ${photo.id}`);
    if (photo.attribution?.url && !/^https:\/\//.test(photo.attribution.url))
      throw new Error(`Attribution needs an HTTPS URL: ${photo.id}`);
    if (!photo.placement || sources.has(photo.src.src))
      throw new Error(`Photo needs one placement and a unique source: ${photo.id}`);
    if (photo.illustrative && (!photo.licence || !photo.attribution?.url))
      throw new Error(`Illustrative photo needs a licence and source: ${photo.id}`);
    sources.add(photo.src.src);
    ids.add(photo.id);
  }
}
validatePhotos([...propertyPhotos, ...experiencePhotos]);
if (
  propertyPhotos.some((photo) => photo.category === 'experiences') ||
  experiencePhotos.some((photo) => photo.category !== 'experiences')
)
  throw new Error('Keep property and external experience photographs in separate registries.');
if (propertyPhotos.filter((photo) => photo.featured === 'hero').length > 1)
  throw new Error('Choose one featured property hero.');
if (heroPhotoId && !propertyPhotos.some((photo) => photo.id === heroPhotoId))
  throw new Error('heroPhotoId must reference an approved property photograph.');

export const heroPhoto =
  propertyPhotos.find((photo) => photo.id === heroPhotoId) ??
  propertyPhotos.find((photo) => photo.featured === 'hero');

export function photosForCategory(category: GalleryCategory): PropertyPhoto[] {
  return propertyPhotos
    .filter((photo) => photo.category === category)
    .sort(
      (a, b) =>
        Number(b.featured === 'category') - Number(a.featured === 'category') ||
        (a.order ?? 0) - (b.order ?? 0),
    );
}

export function photosForPlacement(placement: string): PropertyPhoto[] {
  return [...propertyPhotos, ...experiencePhotos]
    .filter(photo => photo.placement === placement)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
export function photoForPlacement(placement: string): PropertyPhoto | undefined {
  return photosForPlacement(placement)[0];
}
