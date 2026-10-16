# Hero and navigation review

Completed locally on 16 October 2026. No commits, pushes, deployment or dependency changes.

## Design

The global header uses a light solid surface, the actual cropped Topaz logo, centred desktop navigation and the existing WhatsApp CTA. Mobile uses an accessible in-flow disclosure with generous links and a full-width WhatsApp action. Escape returns focus to the trigger; focus leaving the header or clicking outside closes the menu. Native links remain available without JavaScript. Synchronous header enhancement avoids an initial open-menu layout jump.

The homepage hero now uses the authentic living-room photograph as an immersive HTML Picture backdrop. A localised navy gradient supports white Montserrat typography and concise Poppins copy. The original tagline and headline are retained. WhatsApp uses the existing shared enquiry component; Explore Apartments retains its approved route.

Three icon-led cards communicate the two approved nightly rates and facilities/advance arrangements. Prices come directly from the existing central configuration. Links point to each apartment detail route and facilities. Desktop overlap is created by explicit grid rows that reserve the full card height; no negative margins or floating layout repair is used. Cards stack on phones and tablets up to 768px. The next apartments section keeps its established spacing and content.

## Motion and performance

A single 900ms image scale settles from 1.025 to 1. Heading/copy/actions/cards have small finite 650ms opacity/translate reveals with short staggered delays; all finish within one second. No looping, slideshow, parallax or motion library. The official logo is not animated. Reduced-motion users get immediate content with no hero animations or transforms.

Native Astro image optimisation emits AVIF/WebP and JPEG fallback with source-limited 480/768/1200/1600/2000px candidates, explicit dimensions, sizes=100vw and eager/high-priority loading. A cold-cache 390px, DPR1 local check requested one approximately 63kB AVIF hero image. Desktop received a larger appropriate variant. These local checks do not certify real-user LCP/INP across networks.

## Validation

- Astro/TypeScript: zero errors, warnings or hints.
- Production build: all eight routes pass.
- Seven existing enquiry tests, SEO verification and the photograph-assignment audit pass.
- Browser review: 360, 390, 430, 768, 1024, 1152 and 1440px, including the desktop/mobile navigation boundary and an internal accommodation page.
- No horizontal overflow, broken hero image or card/text collision.
- Mobile links meet 44px touch height; Escape closes the menu and restores trigger focus.
- Reduced motion: zero hero animations, opacity 1 and transform none.
- Cold-cache local layout-shift observation: CLS 0 at every inspected width, with fully reserved hero/card dimensions.
- Actual photograph background sampled behind the complete heading and paragraph rectangles: minimum final text contrast above 5.6:1 for headings and 6.3:1 for body copy in inspected viewports. Both exceed AA text requirements. White-on-red CTA contrast is checked separately.
- Scope audit: only four existing source files changed. All seven internal main sections and the homepage content after the hero match the saved baseline after ignoring compiler-generated scope attributes. Existing SEO titles/descriptions and business configuration remain unchanged.

## Files

- src/components/SiteHeader.astro
- src/components/BrandIdentity.astro (navigation branch only; original footer logo retained)
- src/features/home/HomeHero.astro (new bounded hero component)
- src/pages/index.astro (replaces only the old hero and removes its obsolete scoped styles)
- src/config/media.ts (hero source import only)
- src/assets/hero/topaz-hero-interior.jpg
- public/brand/topaz-logo-navigation.png
- docs/hero-image-source.md
- docs/hero-navigation-review.md

See [image source, permission record and replacement instructions](hero-image-source.md). Photographer identity and a vector/transparent logo were not provided. The brief's written reference descriptions informed the composition; no separate reference screenshots were available. No other page content, galleries, rates, FAQ answers, Maps information or enquiry logic changed.
