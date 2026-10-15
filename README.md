# Topaz Apartment

Static accommodation showcase for Topaz Apartment in Shanzu, Mombasa, Kenya.
Built with Astro 7 and strict TypeScript. React is available in the existing
configuration; the foundation uses Astro components and ships no application JavaScript.
No online bookings, availability management, payments, guest accounts or CMS.

## Local development

Use Node.js 22.12+ and npm. Install dependencies with `npm install` (or `npm ci`
for a clean install from the lockfile). In Windows PowerShell, use `npm.cmd` if
execution policy blocks the npm PowerShell shim.

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run check
npm run build
npm run preview
```

The dev server normally serves http://localhost:4321. Use background mode as
required by AGENTS.md and CLAUDE.md. Production output is written to `dist/`.
`check` runs Astro diagnostics and TypeScript with no emitted files. Preview
serves the production build locally; it does not deploy anything.

Astro 7's content-sync Vite environment prebundles `astro/loaders` in
`astro.config.mjs` so its transitive CommonJS parsers work during diagnostics.
The existing React integration is retained. An empty-collection warning during
checks/builds is expected until verified accommodation content is added.

## Structure

```text
src/
  components/                 Shared header, footer, page intro and SEO
  config/site.ts              Verified business details and navigation
  content/accommodation.json  Accommodation entries; intentionally empty
  content.config.ts           Astro content collection loader and schema
  features/
    accommodation/            Accommodation listing and empty state
    enquiries/                WhatsApp enquiry component
  layouts/BaseLayout.astro    Document shell and accessible landmarks
  pages/                      Five static routes
  styles/global.css           Temporary tokens and shared styles
  utils/whatsapp.ts           Encoded enquiry links; null for invalid numbers
public/                       Static assets
```

Routes: `/`, `/accommodation/`, `/gallery/`, `/location/`, `/contact/`.
Keep route files thin, shared presentation in components, and feature-specific
behavior under features. Add React only when a future interaction needs it.

## Business details and SEO

Edit `src/config/site.ts` to update confirmed facts. The exact address, public
WhatsApp number and production origin are deliberately `null`. Set the verified
WhatsApp number using international digits only (no plus sign, spaces or local
leading zero). The shared enquiry component becomes a link only for a valid
number; otherwise it renders a disabled control with an explanation.

Set `publicOrigin` to the verified HTTPS production origin when available.
Canonical and Open Graph URLs are omitted until then. Each page supplies a title
and description through BaseLayout and the shared SEO component. No property
structured data or social preview photograph is fabricated. Before a future
public launch, review placeholder text, supply branding/favicons and approved
photographs, and confirm all business details.

## Accommodation content

The collection uses Astro's build-time `file()` loader and Zod schema, with types
inferred as `CollectionEntry<'accommodation'>`. The source is currently `[]`;
there are no demonstration rooms, categories, amenities or prices.

When verified inventory is supplied, add objects to the JSON array with:

| Field | Requirement |
| --- | --- |
| `id` | Unique, stable slug identifying the content entry |
| `title`, `description` | Nonempty approved accommodation text |
| `guestCapacity` | Positive integer |
| `amenities` | Array of confirmed amenity names; may be empty |
| `images` | Array of `src`, meaningful `alt`, positive pixel `width` and `height`; defaults to empty |
| `price` | Optional object with nonnegative `amount`, uppercase three-letter ISO `currency`, and `basis` of `night` or `stay` |
| `enquiryIdentifier` | Stable reference included in WhatsApp enquiries |
| `draft` | Defaults to `true`; explicitly set `false` to show the entry |

Store approved property photographs under `public/accommodation/` and refer to
them using site-relative paths starting with `/accommodation/`. Do not include
`public` in image URLs. Check that the files exist and dimensions match. Omit
`price` when unconfirmed; never substitute zero for an unknown price. Only
entries with `draft: false` appear on the accommodation page. Content changes
require a rebuild; run `npm run check` and `npm run build` before sharing.

## Styling and accessibility

Temporary neutral design tokens live in `src/styles/global.css`; component
styles are scoped in Astro. System fonts need no external font requests.
Spacing and typography scale fluidly, and navigation wraps without a script.
Breakpoint variables are reference tokens: native CSS cannot resolve `var()`
inside media-query conditions, so use matching literal values when needed.
Motion tokens are prepared for future use, with reduced-motion support; this
foundation introduces no animations. Preserve skip navigation, visible focus
styles, heading order, link labels and the main landmark when extending pages.

Astro references: [routing](https://docs.astro.build/en/guides/routing/),
[components](https://docs.astro.build/en/basics/astro-components/),
[styles](https://docs.astro.build/en/guides/styling/),
[content collections](https://docs.astro.build/en/guides/content-collections/).
