# Site-wide refinement review

16 October 2026. Implemented locally for review; no commit, push, remote change or deployment.

## Composition and content

- Location: balanced six-column introduction and Google Maps preview at the existing verified coordinates. The official directions link is unchanged. The map loaded successfully in browser inspection.
- Contact: introduction and immediate WhatsApp CTA align with the enquiry form on desktop. On mobile the form follows the introduction, ahead of longer contact details. Existing enquiry fields, validation and message generation remain intact.
- Shared page introductions use a deliberate heading/description grid on desktop and stack on mobile. Existing reading widths, container and spacing tokens are reused.
- Facilities now centres on swimming pool, advance meals, transfers and yacht experiences. Parking was removed from the configuration, FAQ and Facilities metadata; no structured-data parking declarations existed.
- Confident arrangement copy retains concise confirmation of availability, applicable charges and terms. No new rates, schedules, pool-access restrictions, ownership claims or complimentary promotion were introduced.
- The third hero card is Beyond Your Stay and covers all four experiences. Rates stay KES 4,000 and KES 8,000 per night.
- Existing location facts, official tagline, heading punctuation corrections, Montserrat/Poppins, logo and brand colours are preserved.

## Photography and gallery

- 26 unique visible assignments: 21 actual-property photographs and five clearly illustrative photographs. Existing apartment classification is unchanged.
- Four new licensed photographs: Matheus Bertelli yacht cruise (Pexels), Deborah Varrie catamaran (Unsplash), SHVETS production pool (Pexels), Sheelu Cyriac breakfast (Pexels). The existing Farrel Nobel coastal photograph moves to the homepage location section. The old estuary file is retained but inactive.
- Full source URLs, licences, photographers, assignments and classifications are recorded in [photography.md](photography.md) and src/config/media.ts. Commercial use was checked against the source pages and respective licences on 16 October 2026.
- Captions are concise, distinctive and identify illustrations. Detailed credits stay in documentation instead of repeating under each photograph.
- Gallery: three columns where space allows, balanced final rows, two columns on tablets and single columns on small phones. Ordinary photographs use 4:3 frames; the single-image desktop row uses a capped wide frame. Missing actual pool/shared-facility categories keep compact text notices instead of oversized artwork.
- The dependency-free native-dialog viewer provides previous/next controls, arrow keys, Escape, Tab/Shift+Tab focus containment, restored focus and a contained uncropped enlarged photograph. Without JavaScript, each image link opens the enlarged file normally.
- Native Astro AVIF/WebP/JPEG delivery, dimensions, sizes and lazy loading are retained. The hero remains eager/high priority. Enlarged images use up-to-1600px WebP and are requested only when opened. Original photographs were not altered.

## Navigation, motion and mobile

- Homepage header is lightly translucent over the actual hero and becomes solid after scrolling. Internal-page headers start solid. All remain visible while scrolling without changing height.
- Anchor offsets account for the header. Mobile disclosure, outside-click dismissal, Escape and focus restoration are retained.
- New shared Motion component observes section-sized groups once. Content starts visible, with no pending hidden state. Finite entrances, modest photographic hover scaling, card elevation and button feedback respect reduced motion. The official logo is not animated.
- Contact reading order, consistent page gutters, gallery proportions, stacked facility sections and 44px lightbox controls support small phones.

## Validation

- npm run check: 0 errors, 0 warnings, 0 hints; TypeScript passes.
- npm test: all seven enquiry/rate tests pass.
- npm run build: all eight routes generated successfully.
- node tests/seo-build.mjs: all eight routes, links/anchors, metadata, rates, WhatsApp, Maps, FAQ and preview SEO checks pass.
- node tests/refinement-build.mjs: 26 unique placements, unique captions, existing responsive assets, correct yacht messages/location and no public parking, generic tax or design-placeholder wording.
- Headless Chrome: all eight routes inspected at 360, 390, 430, 768, 1024 and 1440px (48 combinations). No horizontal overflow or terminal full stops in headings. Every page's photographs decoded successfully at 390px. Header stayed at top after scrolling on all combinations; all mobile-menu checks passed.
- Focused 390/1440px visual review: homepage, Location, Contact, Facilities, gallery rows, yacht section and FAQ. Corrected single-photo row sizing and small-screen specificity found during review.
- Lightbox: opening, next image by keyboard, focus containment, Escape, focus restoration, viewport containment and controls of at least 44px verified. Header translucency/solid states and anchor clearance verified. Reduced-motion checks confirm no reveal/photo motion or hidden content.
- Browser evidence and local QA scripts are in ignored .astro/sitewide-review/.
- Pricing, site/WhatsApp configuration, enquiry logic, accommodation content and structured-data implementation match the start-of-task hashes.

## Files changed in this refinement

- Components: Media.astro, PageIntro.astro, SiteHeader.astro; added Motion.astro.
- Config: facilities.ts, faqs.ts, media.ts, seo.ts (Facilities metadata only).
- Shared layout/styles: layouts/BaseLayout.astro, styles/global.css.
- Pages: index.astro, location.astro, contact.astro, facilities.astro.
- Features: home/HomeHero.astro; facilities/CoastalExperience.astro and FacilityList.astro; gallery/Gallery.astro; location/LocationPanel.astro.
- Tests: seo-build.mjs and refinement-build.mjs.
- Documentation: photography.md and this review.
- Assets: illustrative-yacht-cruise.jpg, illustrative-catamaran.jpg, illustrative-pool.jpg, illustrative-meals.jpg under src/assets/property/experiences/.

Earlier requested refinements remain in the working tree; this list identifies the current pass rather than claiming ownership of every existing Git change.

## Remaining assets

Verified actual pool, true property exterior, shared cafeteria and Topaz-arranged cruise/Mtwapa Creek photographs remain unavailable. Illustrative sources never enter the actual-property gallery. General interiors remain under Around Topaz until their apartment/shared-use classification is verified.

All 27 HEIC originals remain intact because the external backup archive is unavailable for verification. No safe deletion was possible. Six originals still have no converted counterpart; names and classification notes are in photography.md. No archive was modified and no unnecessary reconversion was performed.
