# Header, footer and gallery corrections

16 October 2026. Implemented locally for review; no commits, pushes or deployment.

## Header collision

The header previously stayed transparent at every scroll position and sampled the content underneath each control to change text colour. This could not hide the headings, prices and captions passing beneath the navigation.

The existing positioning is retained: the homepage header intentionally overlays the hero, whose spacing already accounts for it; internal-page headers use sticky positioning in the normal document flow. The header has two deliberate states:

- Homepage, 0–32px scroll: transparent with white navigation over the existing photographic hero.
- Homepage beyond 32px: completely opaque white with navy links, the existing red WhatsApp CTA and a subtle separator shadow.
- Internal pages: opaque white immediately, including while scrolling.

A passive listener schedules at most one state check per animation frame and changes the class only when the state crosses the threshold. It replaces per-link background sampling. The background/shadow transition uses the shared 200ms motion token and becomes 0ms under reduced motion. No dimensions or layout properties animate. Existing z-index 20, mobile disclosure, keyboard controls and anchor offsets are retained. The expanded mobile menu remains opaque.

Browser measurements confirm the header stays 112px high at 1440px and 92px at 390px before/after the state change. The H1's document position is unchanged. The scrolled header is rgb(255,255,255), fully concealing content underneath. Internal headers are white at both the top and after scrolling.

## Footer hierarchy

The three-part brand/navigation/contact architecture and 80px cropped official logo are unchanged. Headings now explicitly use 14px Montserrat Semibold with controlled tracking and more separation from links. Links use 14px Poppins Regular with softer readable contrast, 44px minimum touch areas and a small consistent row gap. Supporting copy remains subordinate; the contact number has stronger emphasis.

Shared spacing tokens provide slightly more column separation, clearer tagline/location relationships, main-footer padding and copyright separation. The compact two-column mobile link grid is retained. Final measured height is approximately 369px on desktop and 635px at 390px, allowing breathing space without restoring the former oversized logo/footer.

## Gallery rows

The former six-track grid changed individual card spans and expanded single/odd cards. It is replaced by equal three-column desktop rows using 4:3 image containers throughout.

A reusable galleryPlaceholderCount helper calculates the number of cards required to complete desktop rows. Empty categories receive three cards. GalleryPlaceholder renders neutral, noninteractive HTML/CSS with exactly Image coming soon and a reserved caption-height area matching the photo cards.

| Existing category | Photographs | Placeholders | Total cards |
| --- | ---: | ---: | ---: |
| One-bedroom apartment | 1 | 2 | 3 |
| Two-bedroom apartment | 2 | 1 | 3 |
| Pool inspiration | 1 | 2 | 3 |
| Coastal inspiration | 1 | 2 | 3 |
| Around Topaz | 7 | 2 | 9 |

The shared component also completes the accommodation-detail galleries automatically. It renders all assigned photographs and never repeats, replaces or downloads an image.

Desktop at 1024px and above uses three columns; 600–1023px uses two; below 600px uses one. Placeholder counts are identical at every width, based solely on completing desktop rows. Revised sizes match these fixed column proportions. Native Astro AVIF/WebP/JPEG optimisation, reserved dimensions, lazy loading and source object positions remain intact.

Placeholders have no link, button, tabindex, zoom icon or data-gallery-open attribute. The lightbox continues to contain only the 12 Gallery photographs; previous/next wrap correctly without visiting placeholders.

## Validation

- Astro/TypeScript: 0 errors, 0 warnings, 0 hints.
- Production build: all eight page routes succeed.
- Eight automated tests pass, including explicit placeholder-count cases for 0–7 photographs.
- Existing SEO build audit passes all routes, metadata, links/anchors, rates, WhatsApp and Maps.
- Existing photograph audit passes all 29 unique site-wide assignments and captions, responsive source existence and guest-facing copy checks.
- Focused Chrome review of homepage top/scrolled states, internal-page scrolling, footer and Gallery at 390px and 1440px.
- Gallery additionally checked at 599, 600, 768, 1023 and 1024px: correct 1/2/3 columns, counts, 4:3 containers, exact placeholder wording, no placeholder controls and no horizontal overflow.
- Gallery photographs decode successfully. Lightbox opens, wraps from 1/12 to 12/12, closes with Escape and restores focus. Mobile navigation opens, closes with Escape and restores trigger focus.
- Anchor targets remain below the header; reduced-motion header transitions are 0ms.
- Footer fonts/weights verified in the browser. Official logo dimensions are preserved.
- Git whitespace check passes, accounting for native Windows CRLF line endings.
- Hash comparison confirms media assignments, pricing, WhatsApp logic, enquiry form, accommodation content, business configuration and SEO metadata are unchanged from the start of this pass.

Browser reports and screenshots are in ignored .astro/three-corrections/.

## Files modified

- src/components/SiteHeader.astro
- src/components/SiteFooter.astro
- src/features/gallery/Gallery.astro
- src/components/GalleryPlaceholder.astro (new)
- src/utils/gallery.ts (new)
- tests/gallery.test.mjs (new)
- docs/photography.md (gallery layout note only)
- docs/three-corrections-review.md (this report)

No new images, dependencies or unrelated page changes. No remaining issues were observed in these focused checks.
