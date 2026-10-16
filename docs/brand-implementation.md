# Topaz Apartments brand implementation

## Identity

Public display name: **TOPAZ APARTMENTS**. In prose and metadata: Topaz Apartments.
Official tagline: **A Jewel of Coastal Luxury**. Keep the wording and case exact.
The identity is modern, elegant, welcoming and reliable. Do not add ratings,
luxury classifications or unsupported hospitality claims.

## Colours and surfaces

The source of truth is `src/styles/global.css`. Use semantic tokens in scoped
component styles rather than copying hex values or restoring the old palette.

| Token | Value | Responsibility |
| --- | --- | --- |
| `--color-brand-navy` | `#0A2C6B` | Headings, navigation, structural anchors, footer |
| `--color-brand-red` | `#E10600` | Primary commercial actions, active underlines, small accents |
| `--color-white` | `#FFFFFF` | Main reading canvas, content surfaces, solid-button labels |
| `--color-text` | `#182B4C` | Main body text, a supporting navy neutral |
| `--color-muted` | `#526079` | Readable supporting copy |
| `--color-surface-alt` | `#F4F6FA` | Quiet alternate sections |
| `--color-surface-tint` | `#E8EDF5` | Enquiry and information sections |
| `--color-border` | `#D9E1ED` | Decorative dividers and media frames |
| `--color-control-border` | `#78869D` | Essential field and menu-control boundaries |
| `--color-focus` | Navy, with a white outer ring | Visible keyboard focus on light and dark surfaces |
| `--color-logo-surface` | `#F7F7F7` | Matches the opaque supplied logo background |

The reference indicates 60/25/15 relative colour prominence. This is not a pixel
quota: the website uses white reading surfaces, navy as its dominant coloured
element and restrained red conversion emphasis. Abstract media use only navy
tints and white. Green, gold, beige, teal and purple are not brand alternatives.

White on official red has approximately **4.97:1** contrast; white on navy
**13.25:1**. Muted text on the tinted enquiry surface is **5.40:1**. Control
borders on white are **3.69:1**. Decorative pale borders must not replace the
stronger essential control boundary token. Never place red text directly on navy
or navy text on red. Active navigation also uses an underline and semantic state;
pending enquiries have explanatory text. Do not communicate states by colour alone.

## Typography

Fonts use Astro 7's built-in Fonts API with `fontProviders.local()` in
`astro.config.mjs`. The shared BaseLayout registers both through `Font`.
Original licensed WOFF2 files live in `src/assets/fonts/`, with source provenance
and SIL Open Font Licenses alongside them. No font library was installed.

- **Montserrat:** one normal Latin variable font, CSS range 400–700. Use for
  headings, navigation, important property labels, rates and button labels.
- **Poppins:** normal Latin 400, 500 and 600. Use for paragraphs, descriptions,
  form controls and labels, FAQs, captions and supporting information.

The four source files total 61,588 bytes. Astro copies them to hashed local
`/_astro/fonts/` URLs, generates metric-adjusted fallbacks and uses `font-display:
swap`. Only Montserrat and Poppins 400 are preloaded; other Poppins weights are
loaded as needed. Arial/sans-serif are resilience fallbacks, not design fonts.
No italic files or synthetic decorative styles are used. Browser verification
confirmed custom Montserrat and Poppins rendering and local font requests.

| Role | Token | Size and weight |
| --- | --- | --- |
| H1 | `--text-h1` | `clamp(2.25rem, 5vw, 4.5rem)`, Montserrat 700, line height 1.08 |
| H2 | `--text-h2` | `clamp(1.875rem, 3.3vw, 3rem)`, Montserrat 600 |
| H3 | `--text-h3` | `clamp(1.375rem, 2.1vw, 1.875rem)`, Montserrat 600 |
| Card title | `--text-card-title` | 22–28px, Montserrat 600 |
| Rate | `--text-rate` | 24–32px; configured amount Montserrat 700 |
| Lead | `--text-lg` | 18–20px, Poppins 400 |
| Body | `--text-base` | 16px, Poppins 400, line height 1.65 |
| Supporting text | `--text-sm`, `--text-xs` | 14px / 13px, Poppins 400–600 |

Headings use controlled negative tracking; small labels use modest 0.06em
tracking. Keep prose at comfortable reading widths. Avoid component-specific
headline scales that override these tokens. Uppercase is reserved for the text
brand identity and selected section labels, not all content.

## Layout and interaction hierarchy

The existing twelve-column layout and routes are retained. Section rhythm,
component padding, grid gaps, gutters and reading widths are tokenised. The
compact header switches to its accessible menu below 80rem to accommodate the
approved fonts without overcrowding. Native media-query literals mirror the
reference breakpoint tokens; CSS custom properties cannot be queried directly.

- `.button.button-primary`: official red with white Montserrat labels. Shared
  WhatsApp actions and enquiry submissions use this commercial priority.
- `.button` or `.button.button-outline`: navy solid or navy outline for
  accommodation exploration and secondary actions.
- `.button.button-light`: white with navy labels on the navy footer. This avoids
  insufficient contrast between a red control boundary and a navy surround.
- `.text-link`: restrained, underlined tertiary action with visible focus.

Buttons are at least 52px high; common link/control targets are at least 44px.
Transitions use 200ms and reduce to zero under `prefers-reduced-motion`.
Unconfigured WhatsApp actions still lead to labelled enquiry previews. No live
WhatsApp contact, rate, accommodation category or enquiry business rule changed.

## Logo asset strategy

The requested `.png` paths were absent. Supplied references actually exist at:

- `brand-reference/topaz-brand-guidelines.jpeg` — contact sheet, documentation only.
- `public/brand/topaz-logo-original.jpeg` — original 568×568 opaque JPEG logo.

Both are preserved byte-for-byte. The logo has a light-grey background and small
colour swatches in its lower-right corner. These are part of the flattened asset;
none is cropped, removed, recoloured or made artificially transparent.

`src/components/BrandIdentity.astro` is the single reusable brand presentation:

- **Navigation:** restrained Montserrat text fallback, TOPAZ / APARTMENTS; no
  fabricated gemstone, symbol or horizontal image lockup.
- **Full:** the entire original logo on a matching light-grey footer panel.
  The image is 240px wide with its original square ratio and 32px extra padding.
  The logo's letter T is approximately 60px high at native resolution (about
  25px at display size); the padding exceeds that reference and supplements the
  original internal margins. The visible mark remains above the 100px minimum.

Do not set a fixed conflicting height, `object-fit: cover`, filters, blending,
effects or animation on the logo. Do not extract a logo from the contact sheet.

Place an approved horizontal SVG/transparent logo at
`public/brand/topaz-logo-horizontal.svg` (or the actual approved filename), then
update BrandIdentity's asset reference and intrinsic dimensions. Review the
header clear space and tagline legibility before enabling an image variant there.
Keep the original JPEG. Supply a dedicated approved favicon separately; the old
unapproved temporary T favicon is no longer linked by the layout.

## Maintenance and remaining assets

Keep commercial facts in their existing sources: apartment collection, pricing,
facilities and site/contact configuration. Only the public brand name in existing
copy was pluralised; category IDs and enquiry references are unchanged.

Media captions now sit in normal document flow below reserved image areas. This
keeps larger, readable captions from overlapping artwork or future photography.
Authentic photographs continue to use the existing Astro Image optimisation path.

Final visual assets needed: an approved production-ready horizontal/vector or
transparent logo, a clean stacked logo export without reference swatches, an
approved favicon and authentic property photography. The contact sheet is never
website imagery. After changes, run `npm run check`, `npm test` and
`npm run build`, then inspect mobile, tablet and desktop views.

Astro references: [Fonts API](https://docs.astro.build/en/guides/fonts/) and
[local provider](https://docs.astro.build/en/reference/font-provider-reference/#local).

## Header and footer refinement — 16 October 2026

The approved brand guide also contains a horizontal logo variation. Header and footer now use public/brand/topaz-logo-horizontal.png, an exact RGB crop of brand-reference/topaz-brand-guidelines.jpeg at x164, y402, width136, height52. No pixels were recoloured, redrawn, sharpened or made transparent. Both earlier logo assets and the original brand guide remain unchanged.

This crop is displayed below its native dimensions: approximately 126×48px on desktop and 105×40px in mobile navigation. Navigation clear space is 16px; the visible mark stays above the guide's 100px minimum digital width. Header height is now 88px on desktop and 80px at 768px and below, with matching shared anchor/hero spacing tokens. The footer uses the same horizontal mark at 126×48px.

The source is still a small flattened JPEG variation. A high-resolution transparent PNG/SVG master remains preferable for sharper high-density rendering and removing the opaque canvas. Do not use a white-removal threshold, CSS blend/filter or synthetic redraw to approximate the fine gemstone and tagline edges.

Scrolled/internal headers use 96% white with 12px backdrop blur when supported, with an opaque white fallback. The homepage top remains transparent with blur disabled. Keep the prefixed backdrop declaration before the standard declaration: the production CSS optimiser otherwise retained only the prefix in this environment, which Chrome did not apply. The final compiled standard declaration and actual browser blur were verified.

Footer hierarchy now uses the official Montserrat medium tagline, a 14px Poppins description at 1.6 line-height, subordinate location context and the existing navigation/contact groups. The latest evidence and scope are documented in brand-audit-review.md.
