# SEO and direct enquiry implementation

## Search intent and copy

These are editorial target clusters, not measured keyword volumes or ranking promises.
`src/config/seo.ts` is the single source for page titles and descriptions; pricing
in that file and FAQs reads the central rate configuration. Keep public content
concise, accurate and useful. No thin landmark landing pages are required.

| Page | Primary intent | Supporting intent |
| --- | --- | --- |
| Home | Accommodation in Shanzu, Mombasa; branded Topaz searches | Coastal apartments near the beach |
| Accommodation | Apartments in Shanzu; compare one and two bedrooms | Apartment accommodation in Mombasa |
| One-bedroom | One-bedroom apartments in Shanzu | Category rate and direct date enquiries |
| Two-bedroom | Two-bedroom apartments in Shanzu | Category rate and guest arrangements |
| Facilities | Shanzu accommodation with swimming pool and parking | Advance meals, transfers and separate experiences |
| Gallery | Topaz apartment and property photography | Visual evaluation before enquiry |
| Location | Topaz Apartments Shanzu/Mombasa directions | Near PrideInn in Shanzu and the Serena Beach area |
| Contact | Topaz reservations and WhatsApp contact | Guest questions and contextual enquiries |

The beach walk is approximate and varies by route and pace. Do not say beachfront,
identify a particular PrideInn property, imply hotel affiliation, or invent a street
address. Directions use the supplied Maps place, not a coordinate-derived guessed route.

## Verified commercial sources

- `site.ts`: official name, tagline, WhatsApp `+254734690690`, Maps URL and coordinates.
- `pricing.ts`: one-bedroom `amount: 4000`; two-bedroom `amount: 8000`, KES/night.
- Both `feeAndTaxNote` fields are deliberately null. Confirm tax inclusivity and
  mandatory charges before publication; then enter a clear approved note. The UI
  currently asks guests to confirm these rather than claiming final payable totals.
- `faqs.ts`: ten shared guest questions, with rates, facilities and location drawn
  from existing configuration. Home previews four; Contact contains all ten.
- Yacht enquiries are separate provider arrangements along Mtwapa Creek. There is
  no current free-cruise offer, accommodation inclusion or availability promise.

## Canonicals, sitemap and indexing

Build-time environment variables must be set in the deployment environment (or
exported in the shell running the build). No production domain has been configured.
These names are not automatically read from a `.env` file by this configuration.

| Variable | Value at launch |
| --- | --- |
| `TOPAZ_PUBLIC_ORIGIN` | Owner-approved HTTPS origin, with no path/query/credentials |
| `TOPAZ_INDEXING_ENABLED` | `true` only for the intended public production build |
| `TOPAZ_SEARCH_CONSOLE_VERIFICATION` | Exact verification meta-token supplied by Search Console, if using HTML verification |
| `TOPAZ_GA4_ID` | Verified GA4 measurement ID beginning `G-`, when privacy implementation is ready |

The origin is read into `site.publicOrigin` and validated in `publication.ts`.
All pages use clean pathname-only canonicals when an origin exists; Open Graph
URLs use the same origin. Social images appear only after an authentic hero photo
and origin are configured. Do not use an unprocessed HEIC source as social imagery.

The existing small static sitemap endpoint is retained: no additional integration
is needed for eight routes. With the production flag and origin, `/sitemap.xml`
lists navigation and published accommodation detail pages. `robots.txt` permits
crawling and points to it. Without both values, pages contain `noindex, follow`,
robots permits crawlers to discover that directive, and there is no sitemap.
Astro development pages remain noindex even if launch variables are set.

Preview deployments must leave `TOPAZ_INDEXING_ENABLED` unset. Also use hosting
authentication for private previews and an `X-Robots-Tag: noindex` response header
where supported, including non-HTML files. Robots disallow alone does not prevent
indexing. Rebuild separately for preview and production; do not publish a preview
artifact unchanged. At launch confirm index/follow and canonical output, remove
preview authentication and noindex headers from production, and redirect alternate
hosts and HTTP to the chosen HTTPS origin. Do not redirect canonical pages to previews.

## Factual structured data

Production builds with verified origin and indexing enabled emit WebSite and
LodgingBusiness on Home, and BreadcrumbList on other pages. LodgingBusiness is
deliberately broad: neither a hotel/star category nor VacationRental programme
eligibility is assumed. Shared entity IDs prevent contradictory duplicates.
Only verified locality, region, country, WhatsApp number, approximate coordinates,
Maps URL, name and tagline are supplied. Registered property images are added
when available; external experience images are excluded. No reviews, ratings,
opening hours, booking action, invented street address or offer inclusion is emitted.
The incomplete street address may limit Google's LocalBusiness feature eligibility.
This implementation does not promise rich results, including FAQ rich results.

Local automated checks parse generated JSON-LD and verify values and URLs.
Before launch use [Schema.org Validator](https://validator.schema.org/) and
[Google Rich Results Test](https://search.google.com/test/rich-results), then inspect
the live URL through Search Console. A test hostname is not a production domain.

## Local SEO and Google Business Profile

Confirm ownership/manager access to the supplied Google Maps business listing;
claim and complete Google's offered verification process with the owner. Do not
create a duplicate listing. Confirm the pin and written arrival instructions in
person. Supply the true physical address where Google requires it. Choose only
an accurate available accommodation business category. Keep name, phone, address
and production website consistent across the website, profile and legitimate
local directories. Add approved photos and verified facilities, service conditions
and rates. Request honest guest reviews without incentives or review gating.
Review service details and rate accuracy regularly; no ranking guarantee is made.

## Analytics and privacy

No GA requests are made while the ID is absent, indexing is disabled, or consent
has not been explicitly granted. There is no analytics dependency. The lightweight
`Analytics.astro` integration uses Google gtag only after consent. Supply an
accessible production consent UI and privacy notice before enabling measurement.
That UI should dispatch on `document`:

```js
document.dispatchEvent(new CustomEvent('topaz:analytics-consent', { detail: 'granted' }));
// On withdrawal, dispatch the same event with detail: 'denied'.
```

The integration does not persist consent; the approved consent layer must handle
remembering choices, expiry, withdrawal and cookie cleanup as required. Before
grant, no events are queued for later reporting. On withdrawal custom tracking
stops and analytics consent is set denied. Ad storage, ad personalisation and
Google signals remain disabled. Do not assume this technical hook alone fulfils
privacy obligations. Review applicable consent, cross-border transfer, retention
and privacy-notice requirements before launch.

| Event | Meaning |
| --- | --- |
| `page_view` | One manual page view after consent; pathname only |
| `apartment_view` | One category-detail page view after consent |
| `whatsapp_click` | Attempt to open a direct WhatsApp link or validated enquiry form |
| `transfer_enquiry_click` | Transfer subset of the same attempts |
| `yacht_enquiry_click` | Yacht subset of the same attempts |

Only allowlisted `accommodation_type`, `enquiry_type`, `page_path` and
`cta_location` context is collected. Form contents, messages, dates, counts,
pickup/destination, enquiry URLs, phone numbers, query strings and fragments are
not sent. Automatic page views are disabled and a sanitised page location is
used. In GA4 **disable enhanced measurement** for this stream (including outbound
clicks, form interactions and history page views), and do not add a second GA/GTM
installation. This prevents duplicate counting and unwanted query/message capture.
The category/subset events overlap intentionally: do not sum them as distinct leads.
A click is not a sent message, qualified lead, sale or confirmed reservation.

## Search Console and launch review

Verify the final domain property through DNS, or use the optional meta-token for
a URL-prefix property. Submit the production sitemap, inspect key URLs, request
indexing after launch, and monitor indexing, query relevance and Core Web Vitals.
Exclude internal/staging traffic from analytics and verify consent and events in
DebugView before enabling reporting. Establish a baseline after real traffic;
LCP <= 2.5s, INP <= 200ms and CLS <= 0.1 are field targets, not measured guarantees.

Before launch: confirm domain, exact address/arrival access, tax/mandatory-charge
notes, accommodation capacities/beds/amenities/policies, photo permissions and
crops, clean logo/favicon exports, analytics ID, privacy/consent and Search Console
ownership. Rebuild and run diagnostics, unit tests, static SEO verification and
mobile/keyboard review. No deployment or external account changes are included.

References: [Astro images](https://docs.astro.build/en/guides/images/),
[Google noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing),
[LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business),
[LodgingBusiness vocabulary](https://schema.org/LodgingBusiness),
[GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events).

## Page metadata review snapshot

Generated from the reviewed build. Edit `src/config/seo.ts`, not this snapshot.

| Route | Title | Meta description |
| --- | --- | --- |
| `/` | Topaz Apartments Shanzu \| 1 & 2 Bedroom Stays | Stay in Shanzu, Mombasa, near the Serena Beach area. One-bedroom apartments at KES 4,000 and two-bedroom apartments at KES 8,000 per night. Enquire on WhatsApp. |
| `/accommodation/` | 1 & 2 Bedroom Apartments in Shanzu \| Topaz | Explore one-bedroom apartments at KES 4,000 and two-bedroom apartments at KES 8,000 per night in Shanzu, Mombasa. Ask about dates and terms on WhatsApp. |
| `/accommodation/one-bedroom/` | One-Bedroom Apartment in Shanzu \| KES 4,000 | Explore the one-bedroom apartment at Topaz Apartments, Shanzu, Mombasa, at KES 4,000 per night. Confirm dates, guest arrangements and terms on WhatsApp. |
| `/accommodation/two-bedroom/` | Two-Bedroom Apartment in Shanzu \| KES 8,000 | Explore the two-bedroom apartment at Topaz Apartments, Shanzu, Mombasa, at KES 8,000 per night. Confirm dates, guest arrangements and terms on WhatsApp. |
| `/facilities/` | Pool, Parking & Guest Services \| Topaz Apartments | Discover the pool and ample parking at Topaz Apartments, Shanzu. Enquire about advance meals, transfers and separate Mtwapa Creek yacht arrangements. |
| `/gallery/` | Apartment & Property Gallery \| Topaz Apartments Shanzu | Explore the Topaz Apartments gallery for one- and two-bedroom stays, pool and shared facilities. Authentic property photography is being prepared. |
| `/location/` | Topaz Apartments Location \| Shanzu, Mombasa | Find Topaz Apartments in Shanzu, near PrideInn and the Serena Beach area. The beach is about 15 minutes’ walk away. Open Google Maps for directions. |
| `/contact/` | Contact Topaz Apartments \| WhatsApp Reservations in Shanzu | Enquire with Topaz Apartments on WhatsApp about apartment dates, rates, advance meals or transfers. Plan your stay in Shanzu, Mombasa directly with the team. |
