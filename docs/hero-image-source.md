# Homepage hero image source

Selected and exported: 16 October 2026.

- Classification: actual Topaz property photography, not illustrative stock.
- Content: the living/dining space shown in the supplied one-bedroom collection, with grey seating, turquoise curtains and a dining table. No invented furnishings, foliage or architecture.
- Source photograph: src/assets/property/one-bedroom/IMG_1102.HEIC, already supplied in the repository. This is the same photograph previously assigned to the homepage hero.
- Photographer: not identified in the supplied files; no photographer credit has been invented.
- Original URL: none supplied; this is a local property asset, not a web download.
- Permission/licence: property photography supplied for the Topaz website and used at the user's express direction. No separate formal licence or external stock licence was supplied or asserted.
- Hero source: src/assets/hero/topaz-hero-interior.jpg (2268 x 4032, upright, sRGB JPEG, no source EXIF/GPS metadata).
- Original HEIC and the previous web JPEG remain unchanged. The full-resolution original was exported for the larger backdrop; no colour filter, compositing or synthetic alteration was applied.

## Replace the photograph

Replace src/assets/hero/topaz-hero-interior.jpg with an approved high-resolution photograph, or change the photo0 import in src/config/media.ts. Retain the one-living ID and home-hero placement to keep its unique homepage assignment. Update its alt text and this source record. HomeHero.astro uses native Astro Picture and reads the source's actual dimensions; its width candidates never upscale beyond the source.

Crops are non-destructive CSS object positioning inside HomeHero.astro: desktop 50% 65%, mobile 50% 66%. Review the same image at 360, 390, 430, 768, 1024 and 1440px after replacement. Keep the image eager/high priority and sizes=100vw. Do not add a duplicate preload.

Prefer actual property photography. If a future approved photograph is illustrative, set illustrative=true and supply attribution/source and licence metadata in the registry; the hero renders an explicit illustrative caption. Recheck caption placement, contrast and mobile crops before publication.

## Navigation logo

public/brand/topaz-logo-navigation.png is a lossless rectangular crop of public/brand/topaz-logo-original.jpeg, at left=118, top=103, width=332, height=358. The complete diamond/monogram, TOPAZ APARTMENTS lockup and tagline are preserved. Only external margins and the bottom-right colour reference swatches are excluded. The original remains unchanged. Pixels and colours inside the crop are unaltered; no redraw, filters, transparency removal or upscaling was used.

The approved source is an opaque 568px raster, not a vector. Its background is retained and matched to the existing logo-surface header colour. Tiny tagline lettering is naturally limited at navigation size; alt text contains the full business name and tagline. A future approved vector/transparent lockup would improve scalability but is not required for this implementation.
