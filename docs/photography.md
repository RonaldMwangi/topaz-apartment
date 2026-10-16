# Photography, assignments and provenance

Updated 16 October 2026. There are 21 authentic property photographs and eight illustrative photographs. Every photograph has exactly one visible placement across all eight page routes. Reusing a photograph in social metadata does not add a visible placement.

## Central registry

src/config/media.ts remains the only media registry. Each record has a placement. Shared components request photoForPlacement or photosForPlacement rather than automatically reusing a category cover. Category grouping and apartment classification are preserved. Original photoIds content fields remain supported by the content schema but the approved editorial placement map determines displayed photography.

| Source | Placement | Visible caption |
| --- | --- | --- |
| src/assets/hero/topaz-hero-interior.jpg | home-hero | Lounge beside turquoise curtains |
| src/assets/property/one-bedroom/topaz-1082.jpg | gallery:one-bedroom | Mustard armchairs beside the sleeping area |
| src/assets/property/one-bedroom/topaz-1139.jpg | home-card:one-bedroom | One-bedroom sleeping space |
| src/assets/property/one-bedroom/topaz-1140.jpg | detail-featured:one-bedroom | Tufted headboard and patterned cushions |
| src/assets/property/one-bedroom/topaz-1063.jpg | collection-card:one-bedroom | Bedroom and storage |
| src/assets/property/one-bedroom/topaz-1159.jpg | detail-gallery:one-bedroom | One-bedroom kitchen |
| src/assets/property/one-bedroom/topaz-1137.jpg | detail-gallery:one-bedroom | Bedroom by the window |
| src/assets/property/two-bedroom/topaz-1051.jpg | home-card:two-bedroom | Open-plan lounge and dining space |
| src/assets/property/two-bedroom/topaz-1126.jpg | collection-card:two-bedroom | Two-bedroom dining area |
| src/assets/property/two-bedroom/topaz-1120.jpg | detail-featured:two-bedroom | Twin bedroom |
| src/assets/property/two-bedroom/topaz-1121.jpg | detail-gallery:two-bedroom | White linen and red cushions |
| src/assets/property/two-bedroom/topaz-1143.jpg | detail-gallery:two-bedroom | Twin beds by the window |
| src/assets/property/two-bedroom/topaz-1144.jpg | gallery:two-bedroom | Twin beds with a wooden bedside table |
| src/assets/property/two-bedroom/topaz-1145.jpg | gallery:two-bedroom | Turquoise towels on white linen |
| src/assets/property/exterior/topaz-1043.jpg | gallery:property | Tiled staircase and interior landing |
| src/assets/property/exterior/topaz-1045.jpg | gallery:property | Apartment entrance |
| src/assets/property/exterior/topaz-1160.jpg | gallery:property | Interior corridor |
| src/assets/property/facilities/topaz-1056.jpg | gallery:property | Kitchen at Topaz |
| src/assets/property/facilities/topaz-1068.jpg | gallery:property | Bathroom detail |
| src/assets/property/facilities/topaz-1070.jpg | gallery:property | Fitted storage |
| src/assets/property/facilities/topaz-1095.jpg | gallery:property | Seating beneath pendant lighting |

The seven general interior photographs are only in Around Topaz. Images in the exterior folder actually show interior circulation spaces. The four selected facilities-folder images have no verified apartment/shared-use classification, so they are not used to represent shared facilities or either accommodation category.

## Illustrative image sources

All eight active illustrative photographs were downloaded locally and visually inspected. Source pages and the [Unsplash License](https://unsplash.com/license) or [Pexels License](https://www.pexels.com/license/) were verified on 16 October 2026; commercial use is permitted. No runtime stock-image requests are needed. No prominent logos, watermarks or text overlays appear. The homepage yacht photograph contains passengers, as permitted by the current brief; no endorsement or ownership is implied. Visible captions identify illustrative photographs concisely; full credits are kept here and in the central registry.

### illustrative-coast.jpg

- Photographer: Farrel Nobel
- Source: [Unsplash photo page](https://unsplash.com/photos/photo-of-mangrove-by-the-sea-LryiMUHIskE)
- Download: [Image source](https://images.unsplash.com/photo-1506999913999-e890204f559d?fm=jpg&w=2000&q=90&fit=max)
- Licence: [Unsplash License](https://unsplash.com/license), commercial use permitted
- Classification: illustrative, not actual-property
- Assignment: Homepage location section (home-location)
- Content: Coastal tree shading sand and a rope swing; location not asserted
- Visible caption: Coastal surroundings · illustrative. The location of this photograph is not asserted.

### illustrative-estuary.jpg

- Photographer: Joe Whalen / The Tampa Bay Estuary Program
- Source: [Unsplash photo page](https://unsplash.com/photos/a-body-of-water-surrounded-by-lots-of-trees-p3dKBy6iYO0)
- Download: [Image source](https://images.unsplash.com/photo-1643398090340-b2bc623e51f1?fm=jpg&w=2000&q=90&fit=max)
- Licence: [Unsplash License](https://unsplash.com/license), commercial use permitted
- Classification: illustrative, not actual-property
- Assignment: Retained source file, inactive; replaced by a yacht photograph
- Content: Mangroves at Weedon Island, Florida; not Mtwapa Creek
- No active guest-facing placement.



### illustrative-yacht-cruise.jpg

- Photographer: Matheus Bertelli
- Source: https://www.pexels.com/photo/party-on-sailboat-at-sunset-15141408/
- Download: https://images.pexels.com/photos/15141408/pexels-photo-15141408.jpeg?auto=compress&cs=srgb&w=1800
- Licence: Pexels License, https://www.pexels.com/license/, commercial use permitted
- Classification: illustrative, not actual-property or a documented Topaz cruise
- Assignment: Homepage yacht section (home-experience)
- Content/caption: Passengers aboard a sailing yacht at sunset / Coastal cruising · illustrative
- Neither Mtwapa Creek location, yacht ownership nor model endorsement is asserted.

### illustrative-catamaran.jpg

- Photographer: Deborah Varrie
- Source: https://unsplash.com/photos/a-catamaran-sailboat-anchored-in-calm-blue-water-APiRxkR0mCY
- Download: https://images.unsplash.com/photo-1783944739438-728f77f39f5f?fm=jpg&w=1800&q=90&fit=max
- Licence: Unsplash License, https://unsplash.com/license, commercial use permitted; free, not Unsplash+
- Classification: illustrative, not actual-property or a documented Topaz cruise
- Assignment: Facilities yacht section (facilities-experience)
- Content/caption: White catamaran in calm blue water / Yacht experience · illustrative
- No specific creek, operator or yacht ownership is asserted.

### illustrative-pool.jpg

- Photographer: SHVETS production
- Source: https://www.pexels.com/photo/resort-with-a-swimming-pool-and-palm-leaves-7565675/
- Download: https://images.pexels.com/photos/7565675/pexels-photo-7565675.jpeg?auto=compress&cs=srgb&w=1800
- Licence: Pexels License, https://www.pexels.com/license/, commercial use permitted
- Classification: illustrative; explicitly not a photograph of the Topaz swimming pool
- Assignment: Facilities swimming-pool section (facilities-pool)
- Content/caption: Tropical courtyard pool and palm leaves / Swimming pool · illustrative
- Bottom-aligned crop preserves the visible pool; no access conditions or pool prices are invented.

### illustrative-meals.jpg

- Photographer: Sheelu Cyriac
- Source: https://www.pexels.com/photo/top-view-of-breakfast-on-plate-25068361/
- Download: https://images.pexels.com/photos/25068361/pexels-photo-25068361.jpeg?auto=compress&cs=srgb&w=1800
- Licence: Pexels License, https://www.pexels.com/license/, commercial use permitted
- Classification: illustrative, not Topaz menu or cafeteria photography
- Assignment: Homepage advance-meal section (home-meals)
- Content/caption: Breakfast with eggs, toast, beans and vegetables / Meal inspiration · illustrative
- No specific menu availability is promised.

### illustrative-gallery-pool.jpg

- Local file: src/assets/property/experiences/illustrative-gallery-pool.jpg
- Photographer: Mwabonje Ringa
- Original source: https://www.pexels.com/photo/tropical-resort-with-palms-and-swimming-pool-near-sea-4300118/
- Download: https://images.pexels.com/photos/4300118/pexels-photo-4300118.jpeg?auto=compress&cs=srgb&w=1800
- Licence: [Pexels License](https://www.pexels.com/license/), verified 16 October 2026; commercial website and marketing use permitted
- Classification: illustrative, not actual Topaz photography
- Assignment: Gallery / Pool inspiration (gallery:pool)
- Content: Coastal resort pool and palms in Watamu, Kenya; not the Topaz pool. One small background figure appears; no endorsement is implied.
- Visible caption: Coastal pool setting · illustrative

### illustrative-dining.jpg

- Local file: src/assets/property/experiences/illustrative-dining.jpg
- Photographer: yasemin .
- Original source: https://www.pexels.com/photo/table-set-for-breakfast-10560727/
- Download: https://images.pexels.com/photos/10560727/pexels-photo-10560727.jpeg?auto=compress&cs=srgb&w=1800
- Licence: [Pexels License](https://www.pexels.com/license/), verified 16 October 2026; commercial website and marketing use permitted
- Classification: illustrative, not actual Topaz photography
- Assignment: Facilities / advance meal arrangements (facilities-meals)
- Content: Breakfast table with bread, fruit, cheeses and patterned place settings; not the Topaz cafeteria or a promised menu.
- Visible caption: A thoughtfully set table · illustrative

### illustrative-kenya-coast.jpg

- Local file: src/assets/property/experiences/illustrative-kenya-coast.jpg
- Photographer: Lucas Pezeta
- Original source: https://www.pexels.com/photo/scenic-view-of-a-beach-7102295/
- Download: https://images.pexels.com/photos/7102295/pexels-photo-7102295.jpeg?auto=compress&cs=srgb&w=1800
- Licence: [Pexels License](https://www.pexels.com/license/), verified 16 October 2026; commercial website and marketing use permitted
- Classification: illustrative, not actual Topaz photography
- Assignment: Gallery / Coastal inspiration (gallery:facilities)
- Content: Palm-lined Kenyan shoreline. The source identifies Kenya; no Shanzu beach, walking route or beachfront property claim is made.
- Visible caption: Kenyan coastline · illustrative

The 6677892 pool candidate was rejected for its strong colour treatment and replaced before registration. Only the three accepted new photographs are retained; none was AI-generated. Original property sources remain unchanged.

## Missing actual photography

No verified Topaz swimming-pool, true exterior, shared cafeteria, actual yacht or Mtwapa Creek photograph is available in this checkout. The Gallery now has clearly labelled Pool inspiration and Coastal inspiration categories, replacing the unsupported Shared facilities presentation. Stock photographs never represent actual apartment or property photographs. Facilities retains the previously approved illustrative pool image. Location keeps its verified map and official directions link. No underlying originals were deleted.

## Optimisation

The existing Astro Picture component supplies AVIF/WebP with JPEG fallback at quality 85, responsive source-limited widths, contextual sizes and intrinsic dimensions. CSS reserves aspect ratios and controls object positioning. Hero/detail feature photographs are eager/high priority; other images are lazy. Enlarged gallery images are generated natively as up-to-1600px WebP and requested only when opened. The lightbox contains rather than crops the photograph. All gallery cards use 4:3 image containers. Desktop rows have exactly three equal cards; a shared helper adds noninteractive Image coming soon cards to complete each row. The same cards reflow into two columns at 600–1023px and one below 600px. Placeholder cards never enter the photograph registry or lightbox. Property JPEGs retain the previous maximum 2400px long edge and stripped EXIF/GPS metadata. This refinement did not reconvert or apply colour filters to them. The retained coastal source uses 2000px width and the seven other active illustrative sources use 1800px width; no enlargement or processing dependency was introduced.

## HEIC safety audit

The documented external backup, D:/Projects/topaz-photo-library/originals, was not available. No external archive was modified. All 27 HEIC originals are retained: backup verification is a required condition before deletion, regardless of whether a converted counterpart exists. No source code imports HEIC/HEIF files.

The 21 converted sources in the assignment table decode successfully, are upright and sRGB; visual review covered the selected photographs and representative crops. Source identity checking found no identical decoded photographs under different names. None can currently be safely removed because its external backup is unverified.

Six HEICs have no converted counterpart and also remain untouched: facilities/IMG_1057.HEIC, facilities/IMG_1059.HEIC, facilities/IMG_1061.HEIC, facilities/IMG_1069.HEIC, facilities/IMG_1103.HEIC and two-bedroom/IMG_1065.HEIC. The facilities-folder interiors need manual classification before more specific placement. No further conversions are needed for the current site.

Before any future removal, verify an external original by matching its content hash, validate the converted image's colour/resolution/orientation, and check that no code imports the original. Never delete an unbacked original.

## Validation

Run npm run check, npm test, npm run build, node tests/seo-build.mjs and node tests/refinement-build.mjs. The refinement build audit checks unique assignments across routes, unique captions, responsive asset existence, location copy, yacht messages and removal of generic tax/design-placeholder copy. Review crops on a phone and desktop after changing assignments.
