# Topaz Apartments

A static-first accommodation showcase for Topaz Apartments, Shanzu, Mombasa,
Kenya. Astro 7, strict TypeScript, native CSS and small progressive enhancements.
The existing React integration is retained; this phase needs no hydrated React
components. There are no bookings, payments, accounts, database or CMS.

## Develop and validate

Use Node.js 22.12+ and npm. Run `npm install` for an existing checkout or `npm ci`
for a clean lockfile install. On Windows, use `npm.cmd` when PowerShell execution
policy blocks the npm shim.

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run test
npm run check
npm run build
node tests/seo-build.mjs
npm run preview
```

Development normally runs at http://localhost:4321. Use background dev mode as
required by AGENTS.md and CLAUDE.md. `dist/` is the static production output;
preview is local and never deploys. Tests use Node's built-in runner and native
TypeScript stripping; isolation is disabled so they also run in restricted
Windows environments. `check` runs Astro diagnostics plus `tsc --noEmit`.

`astro.config.mjs` retains React and the content-loader optimisation from the
foundation. Windows additionally prebundles the installed Astro/React server
dependencies before Astro's early module loading, avoiding CommonJS evaluation
errors in the Astro 7 / Vite 8 development environments. This adds no dependency
and no client bundle. Other platforms retain the simpler loader optimisation.

## Sources of truth

| What to update | File |
| --- | --- |
| Official name, location, exact address, WhatsApp Business number, domain | `src/config/site.ts` |
| One-bedroom and two-bedroom nightly rates | `src/config/pricing.ts` |
| Confirmed apartment descriptions, capacity, beds, amenities and policies | `src/content/accommodation.json` |
| Facilities and service conditions | `src/config/facilities.ts` |
| Photo imports, categories, captions, alt text and hero selection | `src/config/media.ts` |
| Original approved property photographs | `src/assets/property/` |
| Official brand colours, fonts, spacing, motion and layout tokens | `src/styles/global.css` |
| Editable WhatsApp message templates and generation | `src/utils/whatsapp.ts` |

### Rates

In `pricing.ts`, the verified one-bedroom amount is 4000 and the two-bedroom
amount is 8000, in KES per night. Update only approved nightly amounts. Both cards and detail pages use the same
Rate component. Keep `amount` null for unconfirmed rates; invalid amounts never
display zero or a fabricated price. Currency is KES and the basis is per night.
Optional fields are `specialRateNote`, `feeAndTaxNote`, `validityNote` and
`terms` (an array of strings). Both fee/tax notes are null pending confirmation;
review tax inclusivity and mandatory charges before launch. Add only confirmed conditions. No tax-inclusive
assumption, seasonal calculation, discounts or booking total is implemented.

### Apartments

Astro's supported build-time `file()` loader validates the JSON collection in
`src/content.config.ts`. Both confirmed category records are published; they do
not represent a count of individual units. `number` is an editorial display
index. IDs are `one-bedroom` and `two-bedroom`. Optional `guestCapacity`,
`bedConfiguration`, `detailedDescription`, `amenities` and `policies` render only
when supplied. Only explicitly confirmed amenities belong in `amenities`, since
that list is displayed as included. Do not infer a private kitchen or included
services from the property facilities. `photoIds` may reference approved photo
IDs; otherwise the category's first photo is used. Draft entries are excluded.
Detail pages use `getStaticPaths()` and the shared AccommodationDetail template.

### Photography

See [Photography workflow](docs/photography.md) for HEIC archive handling, curated
JPEG conversion, category folders, image metadata, attribution and crop checks.
Place approved web sources in `src/assets/property/`, import them into `media.ts`,
and add records to `propertyPhotos` with `id`, `category`, imported `src`,
meaningful `alt` and optional `caption`. Supported categories are `one-bedroom`,
`two-bedroom`, `pool`, `facilities` and `property`. Set `heroPhotoId` to an
approved photo's ID. Apartment cards and details, grouped galleries and the pool
feature all share these records. The homepage meal feature selects a shared
facilities photo if provided.

The shared Media component uses Astro Picture for responsive AVIF/WebP/JPEG output, intrinsic
dimensions and reserved aspect ratios. The hero uses eager loading with high
fetch priority; subsequent images are lazy-loaded. Check cropping and captions
on mobile when real images are added. Until then, CSS/SVG abstract coastal studies
are explicitly labelled as artwork, not photographs or representations of the
property. There is no stock photography or generated property imagery.

### WhatsApp and enquiries

The verified `site.whatsappNumber` is `+254734690690`. All reservation actions
use this number through the shared encoded link generator. Keep international format. Digits, a leading `+`, spaces, parentheses and hyphens are
accepted; local prefixes are not guessed. Missing or invalid numbers never
produce a wa.me link. Contextual CTAs lead to the enquiry form while the number
is pending and visibly disclose that state.

The forms enhance ordinary labelled controls with a small Astro script. Without
a configured number they preview the message and explicitly say it has not been
sent. With a valid number, submission opens WhatsApp with an encoded message for
the guest to review and send. Category links preselect accommodation using an
allowlisted query value. Meal and transfer interests can also be preselected.
Dates and headcounts are validated; capacity and availability are not inferred.
No details are stored in cookies, browser storage, server state or a reservation
system. Form values are not placed in this website's URL. No message is sent by
the website. With JavaScript disabled, navigation stays visible and direct
configured WhatsApp links still work; the optional message form explains that
JavaScript is required.

### Branding and SEO

The official navy/red/white identity and Montserrat/Poppins typography are
implemented through central CSS tokens and Astro's built-in local Fonts API.
See [Brand implementation](docs/brand-implementation.md) for exact tokens,
type hierarchy, licensed font provenance, button rules and the logo strategy.
The supplied references are JPEG files (the requested PNG paths were absent).
The opaque original logo is preserved in full on a compatible footer surface;
the navigation uses the approved text fallback pending a production-ready
horizontal/vector export. Add official social profiles when supplied.

Each page has a unique title and description via BaseLayout/Seo. SEO copy is centralised in `src/config/seo.ts`. See
[SEO implementation](docs/seo-implementation.md) for production origin/indexing
flags, conditional sitemap/robots/canonicals, factual structured data, Search
Console, optional consent-gated analytics and launch tasks. Preview builds carry
noindex. No production domain or analytics ID has been configured.

## Architecture and routes

Shared components handle navigation, typography, media, FAQ and SEO. Feature
folders contain accommodation, enquiries, facilities, gallery and location
presentation. Route files compose those components without duplicating rates
or apartment records. Static pages are not hydrated; only the mobile menu and
optional enquiry forms and consent-gated measurement hooks execute client JavaScript. Native details/summary provides
the FAQ interaction. No animation or gallery package is required.

Routes: `/`, `/accommodation/`, `/accommodation/one-bedroom/`,
`/accommodation/two-bedroom/`, `/facilities/`, `/gallery/`, `/location/`, `/contact/`.

## Before public launch

Confirm tax/mandatory-charge notes and rate conditions; supply the exact address, domain,
apartment capacities/beds/amenities/policies, approved photography and production-ready
logo/favicon exports. Confirm meal, transfer, pool and parking access conditions and charges.
Rebuild and rerun diagnostics/tests after content or pricing changes. Review real
photo crops, mobile layouts and keyboard behavior before publishing.

Astro references: [routing](https://docs.astro.build/en/guides/routing/),
[components](https://docs.astro.build/en/basics/astro-components/),
[styles](https://docs.astro.build/en/guides/styling/),
[content collections](https://docs.astro.build/en/guides/content-collections/),
[images](https://docs.astro.build/en/guides/images/).
