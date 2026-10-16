# Focused refinement review

Completed locally on 16 October 2026. No commits, pushes, deployment, dependency installation or architectural rebuild.

## Guest information

The homepage, location panel/page, contact page and location FAQ now consistently identify Shanzu, Mombasa, next to Sunset Paradise, near PrideInn, in the Serena Beach area, approximately 15 minutes' walk from the beach. No beachfront or affiliation claim was introduced. The verified Google Maps URL and official WhatsApp number remain unchanged. Existing SEO titles and descriptions are preserved.

Topaz confidently offers to help arrange yacht experiences along Mtwapa Creek. The section, FAQ and encoded WhatsApp message identify Topaz as the coordinator and ask the team to confirm availability, applicable charges and booking terms. No yacht ownership, guaranteed availability, inclusive yacht rate, expired offer or provider-referral wording is used.

Rates remain KES 4,000 and KES 8,000 per night in the unchanged central pricing configuration. Generic tax copy was removed from visible rate notes, collection copy and FAQs. The explicit pricing disclosure field and its conditional rendering remain available. Compact rates no longer repeat a generic paragraph; full rate panels show one concise confirmation note.

## Alignment and mobile

The homepage FAQ uses a balanced 4/8 desktop grid with both columns aligned at the top. Existing section tokens give balanced top/bottom spacing. Accordion rows use fixed number/question/icon columns, consistent separators, reduced padding and aligned answer indentation. On mobile, heading and questions stack with one deliberate gutter and no additional offset. Accessible native details/summary behaviour is preserved.

Hero overlays and obsolete artwork/photography captions were removed. Genuine missing property photography retains a restrained Images coming soon label. Gallery singleton compositions use a wide crop rather than an oversized full-width portrait. Existing containers, branding, typography, navigation and enquiry controls are preserved.

## Photography

All 21 property photographs now have a unique placement in the existing media registry: homepage hero/cards, accommodation listing cards, detail featured photographs, detail galleries and main gallery use different sources. Shared components no longer silently reuse category covers. Captions were made specific and are unique across visible photographs. A decoded-pixel fingerprint audit found no duplicate source photographs under different filenames; the closest images were also clearly distinct compositions.

Two authentic, commercially licensed Unsplash nature photographs are assigned once each to the home/facilities experience sections. Both are explicitly illustrative, never property or Mtwapa Creek photography. Accepted images contain no people, prominent logos, overlays or watermarks. Two yacht candidates were rejected and removed after visual inspection. See [photo provenance, sources and assignments](photography.md) for photographer, source/download URL, licence and placement.

The existing Astro optimisation remains: responsive AVIF/WebP, JPEG fallback, correct intrinsic dimensions/sizes, reserved aspect ratios, source-limited widths, lazy images and priority hero/detail images. No colour filters or unnecessary reconversion were applied.

## HEIC safety

No HEIC was deleted. The documented external backup folder was unavailable, so none satisfied every removal condition. All 27 originals remain unchanged. Twenty-one have usable converted sources; six remain unconverted. [The safety record](photography.md#heic-safety-audit) identifies retained files and classification gaps. No external archive was changed.

Missing actual photographs: pool, parking, building exterior, verified shared kitchen/dining, an arranged yacht and Mtwapa Creek. Four facilities-folder room interiors still require apartment/shared-use classification and remain only in Around Topaz.

## Validation

- Astro/TypeScript: zero errors, warnings or hints.
- Production build: successful, all eight routes.
- Seven existing enquiry tests pass, including stronger assertions for yacht coordination and absence of tax/provider wording.
- Existing SEO verification passes for metadata, routes, links, verified rates, WhatsApp, Maps and FAQs.
- New build audit passes: 23 unique placements, unique captions, responsive asset existence, consistent location/yacht wording and no generic tax/design-placeholder copy.
- Focused Chrome review: all eight routes at 390px and 1440px; additional 360px and 768px checks on homepage, gallery and contact. No horizontal overflow or broken images. Homepage FAQ and mobile menu open/close correctly. Invalid guest counts are rejected and primary form controls meet 44px touch height. Official heading/body font families load.
- Mobile/desktop hero, FAQ, gallery and mobile enquiry screenshots reviewed. Temporary QA browser and production preview are closed after review.

## Files changed in this refinement

- [src/components/Faq.astro](../src/components/Faq.astro)
- [src/components/Media.astro](../src/components/Media.astro)
- [src/config/media.ts](../src/config/media.ts)
- [src/config/site.ts](../src/config/site.ts)
- [src/config/faqs.ts](../src/config/faqs.ts)
- [src/features/accommodation/AccommodationCard.astro](../src/features/accommodation/AccommodationCard.astro)
- [src/features/accommodation/AccommodationDetail.astro](../src/features/accommodation/AccommodationDetail.astro)
- [src/features/accommodation/Rate.astro](../src/features/accommodation/Rate.astro)
- [src/features/gallery/Gallery.astro](../src/features/gallery/Gallery.astro)
- [src/features/facilities/CoastalExperience.astro](../src/features/facilities/CoastalExperience.astro)
- [src/features/location/LocationPanel.astro](../src/features/location/LocationPanel.astro)
- [src/pages/index.astro](../src/pages/index.astro)
- [src/pages/accommodation.astro](../src/pages/accommodation.astro)
- [src/pages/location.astro](../src/pages/location.astro)
- [src/pages/contact.astro](../src/pages/contact.astro)
- [src/utils/whatsapp.ts](../src/utils/whatsapp.ts)
- [tests/enquiries.test.mjs](../tests/enquiries.test.mjs)
- [tests/refinement-build.mjs](../tests/refinement-build.mjs)
- [docs/photography.md](../docs/photography.md)
- [docs/refinement-review.md](../docs/refinement-review.md)
- [src/assets/property/experiences/illustrative-coast.jpg](../src/assets/property/experiences/illustrative-coast.jpg)
- [src/assets/property/experiences/illustrative-estuary.jpg](../src/assets/property/experiences/illustrative-estuary.jpg)
