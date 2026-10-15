# Property and experience photography

Keep the master HEIC archive at `D:\Projects\topaz-photo-library\originals`.
This is outside the website repository. This phase does not move, delete or
process that archive. Some HEIC files already exist in the repository's apartment,
exterior and facilities folders; these are preserved, unregistered and unserved.
Do not import them into Astro or place original archives in `public/`.

## Prepare a curated collection

Select approximately 30–50 approved photographs from the larger archive. Prioritise
one strong landscape hero, representative views of each apartment category, pool,
property exterior and shared facilities. Confirm which apartment each image depicts,
usage rights, accurate captions and privacy permissions. Keep external experience
photographs separate and obtain provider/licensor approval and attribution.

Convert selected originals locally using a trusted HEIC-capable photo editor/exporter
(for example Photos/Preview on a supported device). Export colour-managed sRGB JPEG
sources, auto-orient correctly and inspect sharpness and colour. Keep original files
untouched. A long edge around 2400–3200px usually provides room for responsive crops;
avoid upscaling or repeated recompression. Choose high JPEG quality, visually inspect
the result and remove GPS/private metadata before adding web sources. Never edit a
photo to invent a facility, view or room feature. No conversion dependency is needed
in the website. This phase has not certified a particular local HEIC converter.

Save selected JPEGs with meaningful names in:

| Folder under `src/assets/property/` | Registry category |
| --- | --- |
| `exterior/` | `property` |
| `one-bedroom/` | `one-bedroom` |
| `two-bedroom/` | `two-bedroom` |
| `swimming-pool/` | `pool` |
| `facilities/` | `facilities` |
| `experiences/` | `experiences` (separate registry) |

## Register and assign

Use static imports in `src/config/media.ts`; there is no bulk glob import. Example
only, replace the filename and description with a real approved image:

```ts
import lounge from '../assets/property/one-bedroom/approved-lounge.jpg';
// Add to propertyPhotos:
{
  id: 'one-bedroom-lounge', category: 'one-bedroom', src: lounge,
  alt: 'Describe the actual room, visible furniture and relevant features.',
  caption: 'Approved factual caption', order: 10,
  featured: 'category', aspect: 'landscape', objectPosition: '50% 50%',
}
```

`order` sorts ascending within a category; a `featured: 'category'` image leads its
category. Pick one `featured: 'hero'` property image or set existing `heroPhotoId`
to an approved property ID (the explicit ID takes precedence). Experience images
cannot become the property hero. IDs and descriptive nonempty alt text are checked;
duplicate IDs, registered HEICs and invalid attribution URLs fail early.

Set an apartment record's optional `photoIds` to select its leading image; otherwise
the category's featured/first ordered photo is used. The category gallery displays
all registered photos for that apartment in order. The existing five gallery groups
remain intact. Add external coastal imagery to `experiencePhotos`, with category
`experiences`, optional `attribution: { name, url }` and verified captions. It appears
only in the separate experience section. Never present provider imagery as Topaz
property photography. Home meals use the first shared-facilities image; verify its
caption/context before registration or adjust that explicit selection.

## Delivery and QA

The shared Media component uses Astro Picture to emit AVIF/WebP with JPEG fallback,
responsive widths up to 1600px without upscaling beyond the source, and explicit
intrinsic dimensions. Consistent width sets let identical requests reuse Astro's
image transformations. `sizes` is contextual for gallery and editorial layouts.
Aspect-ratio wrappers reserve space; the registry's `aspect` is used unless a layout
explicitly chooses an editorial crop. `objectPosition` can protect the subject.
Review every crop on mobile and desktop; important room details must remain visible.

Only the main hero/detail-leading photo is eager/high priority; below-fold images
are lazy. The current placeholder state remains labelled abstract artwork. There
are no imported production photos or external image requests until registration.
Source filenames may be public in optimised URLs; exclude personal information.
After registration run build/checks, review AVIF/WebP/JPEG fallback, captions/credits,
hero fetch priority, alt text, source byte sizes and layout shifts. Recheck the
gallery SEO description when authentic photography replaces placeholders.
