# Facilities, footer, navigation and gallery review

16 October 2026. Completed locally for review. No commit, push, remote change or deployment.

## Refinements

- Facilities and Gallery use an opt-in editorial PageIntro treatment: a smaller display heading, vertically balanced supporting copy and controlled spacing. Other page introductions retain their existing presentation.
- The pool retains its editorial text-left/photo-right composition, existing approved illustrative photograph, accurate arrangement copy and CTA. Equal columns and shared spacing now connect it more naturally to the next section.
- The sparse bordered meal panel is replaced by an aligned editorial row with a dining photograph, Good food, thoughtfully arranged heading and Arrange Your Meals WhatsApp CTA. Advance meal/kitchen arrangements and confirmation of applicable charges remain clear. No menu or included meals are promised.
- Footer: compact three-column desktop composition, combined two-column navigation/accommodation list, concise brand/location and immediate contact. Mobile has a brand row, two-column links, compact contact row and full-width WhatsApp action. Measured final height: approximately 332px at 1440px and 598px at 390px, including copyright/directions. The prior large square logo and decorative/reference marks are absent.
- The existing official 332×358 PNG crop is reused at an 80px displayed height in the footer. Pixel comparison confirms it exactly matches the x118/y103 crop of the original supplied JPEG. No artwork or colours changed. The original source remains intact. No approved horizontal/vector/transparent variation is available.
- Closed navigation has a fully transparent background, zero border and no shadow, both initially and while scrolling. Homepage navigation overlays the actual hero. Internal headers remain sticky and preserve their existing space in the document. Native anchor offsets remain intact.
- Context sampling changes individual controls between white and navy text to suit the underlying section, with restrained local text shadows. A gradient inside the hero image supports the light text; it is not a header background panel. Sampling is limited to navigation controls and scheduled at most once per animation frame when scrolling/resizing. There are no continuous animations or dependencies.
- Expanded mobile navigation retains its readable solid surface, Escape/outside-click dismissal and focus restoration. The official logo's small opaque image canvas is retained; this local image background is the only closed-header exception because no approved transparent source exists.
- Gallery now has 12 photographs and no empty sections/messages. Unsupported Shared facilities becomes Coastal inspiration; the pool category is Pool inspiration. Both use labelled illustrative photography. Actual apartment and Around Topaz categories remain verified property photographs.
- Gallery introduction removes future-photo wording and sits closer to category navigation. Existing balanced grid, ratios, native responsive optimisation and accessible lightbox remain. Enlarged illustrative photographs explicitly state that they are not Topaz property photography.

## New photographs

All three selected images are local 1800px-wide Pexels downloads, with source pages and [Pexels License](https://www.pexels.com/license/) checked on 16 October 2026. The licence permits commercial website/marketing use. All are illustrative; no image claims to document the Topaz pool, cafeteria or beach access. Full download URLs and metadata are in photography.md and the central registry.

| Photographer | Original source | Local filename / assignment |
| --- | --- | --- |
| Mwabonje Ringa | https://www.pexels.com/photo/tropical-resort-with-palms-and-swimming-pool-near-sea-4300118/ | illustrative-gallery-pool.jpg / Gallery pool inspiration |
| yasemin . | https://www.pexels.com/photo/table-set-for-breakfast-10560727/ | illustrative-dining.jpg / Facilities advance meals |
| Lucas Pezeta | https://www.pexels.com/photo/scenic-view-of-a-beach-7102295/ | illustrative-kenya-coast.jpg / Gallery coastal inspiration |

The pool source is identified as Watamu, Kenya and contains a small background figure. It is not presented as a Topaz facility or model endorsement. A more strongly coloured pool candidate was rejected and not retained. No AI imagery, hotlinks, heavy filters or new processing dependency was introduced.

The site has 29 unique visible photographs: 21 actual property photographs and eight illustrative images. None repeats across routes. Native Astro AVIF/WebP sources, JPEG fallback, sizes, dimensions, reserved ratios, lazy loading and hero priority remain unchanged.

## Validation

- Astro/TypeScript: 0 errors, 0 warnings, 0 hints.
- Production build: all eight page routes succeed.
- Seven enquiry/rate tests pass.
- SEO build audit passes all eight routes, metadata, links/anchors, preview indexing settings, pricing, WhatsApp and Maps.
- Media audit passes 29 unique visible assignments, unique captions and responsive asset existence; no public parking, generic tax or obsolete design-placeholder copy.
- Chrome review: homepage, Facilities and Gallery inspected across 360, 390, 430, 768, 1024 and 1440px. No horizontal overflow. All images on the three affected pages decode successfully at 390px.
- Focused 390/1440px screenshots reviewed for page introductions, pool, meals, gallery additions, hero navigation and footer. Final footer/header changes received targeted checks at all six widths.
- Closed header computed background remains rgba(0,0,0,0), border 0 and shadow none. Sticky top remains 0 after scrolling. Desktop hero links and mobile hero trigger use white text; light sections use navy. Open mobile menu has a solid surface, closes with Escape and restores focus.
- Gallery illustrative image opens with an explicit classification caption; Escape closes it. Existing lightbox keyboard/focus behavior is retained.
- Pixel-exact logo crop verification passes.
- Hash comparison confirms pricing, business configuration, WhatsApp logic, enquiry form source, accommodation content, structured data and SEO configuration are unchanged from the start of this pass.
- Evidence and local QA scripts: ignored .astro/final-polish/.

## Changed files

- src/components/BrandIdentity.astro
- src/components/PageIntro.astro
- src/components/SiteFooter.astro
- src/components/SiteHeader.astro
- src/config/media.ts
- src/pages/facilities.astro
- src/pages/gallery.astro
- src/features/gallery/Gallery.astro
- src/features/home/HomeHero.astro
- tests/refinement-build.mjs
- docs/photography.md and this report
- Three new JPEGs under src/assets/property/experiences/, listed above

Existing earlier refinements remain in the working tree. This list describes this pass only.

## Remaining limitations

Actual Topaz pool, communal cafeteria and true exterior photographs are still unavailable. Their illustrative replacements are clearly distinguished and never categorised as actual property photography. General interiors remain in Around Topaz until their shared/apartment classification is verified.

The approved logo remains on its original small opaque canvas; a genuine transparent/vector or horizontal source would allow further integration without changing the artwork. No original images or HEIC files were removed or modified. The six referenced screenshots were not present beside the attachment, so the review used current browser screenshots.
