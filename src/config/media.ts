import type { ImageMetadata } from 'astro';

export const galleryCategories = [
  { id: 'one-bedroom', label: 'One-bedroom apartment', number: '01' },
  { id: 'two-bedroom', label: 'Two-bedroom apartment', number: '02' },
  { id: 'pool', label: 'Swimming pool', number: '03' },
  { id: 'facilities', label: 'Shared facilities', number: '04' },
  { id: 'property', label: 'Around Topaz', number: '05' },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]['id'];
export type MediaAspect = 'landscape' | 'portrait' | 'wide' | 'square';
export interface PropertyPhoto {
  id: string;
  category: GalleryCategory | 'experiences';
  src: ImageMetadata;
  alt: string;
  caption?: string;
  order?: number;
  featured?: 'hero' | 'category';
  aspect?: MediaAspect;
  objectPosition?: string;
  attribution?: { name: string; url?: string };
}

// Import approved photos from src/assets/property/ here and add their metadata.
// Empty until authentic photography is supplied. All media views share this list.
export const propertyPhotos: readonly PropertyPhoto[] = [];
/** Licensed experience photos are separate: never used as apartment or property imagery. */
export const experiencePhotos: readonly PropertyPhoto[] = [];
export const heroPhotoId: string | null = null;

export function validatePhotos(photos: readonly PropertyPhoto[]): void {
  const ids = new Set<string>();
  for (const photo of photos) {
    if (!photo.id || ids.has(photo.id) || !photo.alt.trim())
      throw new Error(`Photo needs a unique ID and descriptive alt text: ${photo.id}`);
    if (/\.heic(?:\?|$)/i.test(photo.src.src))
      throw new Error(`Convert HEIC before registering: ${photo.id}`);
    if (photo.order !== undefined && !Number.isFinite(photo.order))
      throw new Error(`Invalid photo order: ${photo.id}`);
    if (photo.attribution?.url && !/^https:\/\//.test(photo.attribution.url))
      throw new Error(`Attribution needs an HTTPS URL: ${photo.id}`);
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
