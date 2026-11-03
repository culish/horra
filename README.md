# PT. Horra Prime Group — Corporate Website

Corporate website for PT. Horra Prime Group: Business Consulting (Visa & Immigration, Business Setup), International Trading (eight commodity categories) and Tours & Travel.

Built with **Next.js 16 (App Router, TypeScript)**, **Tailwind CSS 4** and **lucide-react** icons. Every page is statically prerendered; the server code is the inquiry endpoint and the payment endpoints.

> Before launch, work through [`CONTENT-TO-CONFIRM.md`](./CONTENT-TO-CONFIRM.md). The site deliberately shows "To be confirmed" placeholders and draft legal pages until real company details are supplied.

---

## Getting started

Requirements: **Node.js 20.9 or newer**, npm.

```bash
npm install
cp .env.example .env.local   # optional for local work — see Environment below
npm run dev                  # http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Development server with hot reload                        |
| `npm run build`     | Production build with webpack (prerenders all pages)      |
| `npm run build:turbopack` | Same build with Turbopack (faster, needs a host that lets Node spawn workers) |
| `npm start`         | Serve the production build                                |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)       |
| `npm run typecheck` | Generates route types, then runs `tsc --noEmit`           |
| `npm run check`     | Lint + type-check + build in one go                       |
| `npm run format`    | Prettier (with Tailwind class sorting)                    |

### Deploying

- **Vercel** (simplest): import the repository, set the environment variables, deploy. No extra configuration.
- **Any Node host**: `npm ci && npm run build && npm start` (set `PORT` if needed). Requires Node.js 20.9 or newer.
- **Hostinger (Node.js web app)**: pick Node.js 22 (or 20), build command `npm run build`, start command `npm start`, and deploy from GitHub or a fresh upload of the repository (never upload a local `.next` or `node_modules` folder). The default build uses webpack because Turbopack runs CSS loaders in separate Node worker processes, which Hostinger's sandboxed Node runtime kills before they connect.

Set `NEXT_PUBLIC_SITE_URL` to the real domain in production — canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt` are built from it.

---

## Routes

| Route                                        | Page                                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| `/`                                          | Home                                                    |
| `/about`                                     | About (company story / leadership marked pending)       |
| `/business-consulting`                       | Business Consulting overview                            |
| `/visa-immigration`                          | Visa & Immigration overview (six services, FAQ, form)   |
| `/visa-immigration/c1-tourist-visa`          | C1 Tourist Visa information + consultation form         |
| `/visa-immigration/investor-kitas`           | Investor KITAS (`/investor-kitas` redirects here, 308)  |
| `/business-setup`                            | PT PMA, Local PT, NIB & OSS, Virtual Office             |
| `/international-trading`                     | Trading overview                                        |
| `/international-trading/[category]`          | Category template — eight categories, see below         |
| `/tours-travel`                              | Tours & Travel                                          |
| `/contact`                                   | Contact form + contact details                          |
| `/privacy-policy`, `/terms`                  | Draft legal pages, clearly marked for review            |
| `/sitemap.xml`, `/robots.txt`                | Generated from `NEXT_PUBLIC_SITE_URL`                   |
| `/api/inquiry`                               | POST endpoint for all inquiry forms                     |
| `/pay?t=…`                                   | Invoice payment page (Midtrans Snap), not indexed       |
| `/pay/finish`                                | Return page after redirect-based payment methods        |
| `/pay/admin`                                 | Staff tool to create payment links                      |
| `/api/payments/*`                            | Payment links, checkout, Midtrans notification          |

Trading categories: `spices-herbs`, `palm-oil`, `coffee-cocoa` (with product lists from the company profile) and `coconut`, `petrochemical`, `coal-minerals`, `seafood-marine`, `minerals` (no product list in the profile, so these show a "range confirmed on request" state instead of an invented catalogue).

Anchors used by the navigation: `/business-setup#pt-pma | #local-pt | #nib-oss | #virtual-office`, `/tours-travel#ticket-hotel | #tour-package | #airport-transfer | #travel-guide`, and `#inquiry` on every page with a form.

Forms can be preselected from the URL, e.g. `/visa-immigration?service=work-visa#inquiry` or `/contact?topic=international-trading`.

---

## Environment

All variables are optional; see [`.env.example`](./.env.example).

| Variable                          | Purpose                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | Production URL for canonical/OG/sitemap. Defaults to `http://localhost:3000`.            |
| `NEXT_PUBLIC_CONTACT_EMAIL`       | Official email — becomes a `mailto:` link                                                |
| `NEXT_PUBLIC_CONTACT_PHONE`       | Official phone — becomes a `tel:` link                                                   |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`     | Digits in international format (e.g. `62812…`) — enables WhatsApp links and button     |
| `NEXT_PUBLIC_OFFICE_ADDRESS`      | Office address (text only)                                                               |
| `NEXT_PUBLIC_OFFICE_HOURS`        | Opening hours (text only)                                                                |
| `NEXT_PUBLIC_SOCIAL_*`            | `LINKEDIN`, `INSTAGRAM`, `FACEBOOK`, `YOUTUBE` — only filled-in profiles are shown        |
| `INQUIRY_WEBHOOK_URL`             | **Server only.** Where inquiries are delivered (see below)                               |
| `INQUIRY_WEBHOOK_TOKEN`           | **Server only.** Optional bearer token for the webhook                                   |
| `MIDTRANS_SERVER_KEY`             | **Server only.** Midtrans server key (sandbox or production)                             |
| `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY` | Midtrans client key, used by the Snap payment window                                     |
| `MIDTRANS_IS_PRODUCTION`          | `true` for live payments; otherwise the Midtrans sandbox is used                         |
| `PAYMENT_LINK_SECRET`             | **Server only.** 32+ character secret that signs payment links                           |
| `PAYMENT_ADMIN_KEY`               | **Server only.** Staff key for creating payment links at `/pay/admin`                    |
| `PAYMENT_WEBHOOK_URL` / `_TOKEN`  | **Server only.** Where payment status updates are forwarded                              |

`NEXT_PUBLIC_*` values are inlined at build time — rebuild after changing them.

---

## Integration points

### Inquiry forms → `/api/inquiry`

All five form variants (`general`, `visa`, `business-setup`, `trading`, `travel`) are defined in `src/lib/inquiry.ts`. The same schema validates on the client and again on the server.

- **No webhook configured (default):** the form validates, then shows *"Demo mode: your inquiry was not sent"*. Nothing is sent or stored, and the visitor is told so.
- **`INQUIRY_WEBHOOK_URL` set:** the endpoint POSTs JSON to that URL and the visitor sees *"Inquiry sent"* only when the webhook returns 2xx.

Payload sent to the webhook:

```json
{
  "source": "horra-prime-group-website",
  "variant": "trading",
  "context": "palm-oil",
  "page": "/international-trading/palm-oil",
  "submittedAt": "2026-10-10T12:00:00.000Z",
  "fields": [{ "name": "fullName", "label": "Full name", "value": "…" }]
}
```

Works with Zapier/Make webhooks, most CRMs, Formspree-style services, or a small email function. A honeypot field filters simple bots. Before launch, add rate limiting (at the hosting/CDN level) and consider a CAPTCHA. Personal data is never logged by the endpoint.

### Payments → Midtrans

The site publishes no prices, so payment works per invoice: staff agree the amount with the customer, create a **payment link**, and send it by email or WhatsApp. The customer opens it, checks the invoice and pays in the Midtrans Snap window (virtual account, QRIS, e-wallets, cards — whatever is enabled in the Midtrans dashboard).

1. **Staff** open `/pay/admin`, enter the staff key (`PAYMENT_ADMIN_KEY`), invoice number, amount, description and customer, and get a link like `/pay?t=…`. The same is available as an API: `POST /api/payments/links` with `Authorization: Bearer <PAYMENT_ADMIN_KEY>`.
2. **The link** carries the invoice details signed with `PAYMENT_LINK_SECRET` (HMAC-SHA256). Nothing is stored on the site; any change to the link makes it invalid, and it expires after the chosen number of days (1–30).
3. **Checkout** (`POST /api/payments/checkout`) re-verifies the link, refuses if Midtrans already shows it as paid, then creates a Snap transaction for the signed amount. Order ids are `<invoice>-<link id>`; a retry after an expired or abandoned attempt gets a suffix.
4. **Notification:** in the Midtrans dashboard set the *Payment Notification URL* to `https://<domain>/api/payments/midtrans/notification` and the *Finish Redirect URL* to `https://<domain>/pay/finish`. The endpoint checks `signature_key`, re-reads the transaction from Midtrans, and forwards this to `PAYMENT_WEBHOOK_URL`:

```json
{
  "source": "horra-prime-group-website",
  "event": "payment.status",
  "provider": "midtrans",
  "invoice": "INV-2026-0012",
  "orderId": "INV-2026-0012-d4d812a4",
  "status": "settlement",
  "paid": true,
  "amount": 3500000,
  "currency": "IDR",
  "paymentType": "bank_transfer",
  "transactionId": "…",
  "settlementTime": "2026-11-03 15:02:11"
}
```

Without `PAYMENT_WEBHOOK_URL` the notification is still accepted and the payment is visible in the Midtrans dashboard. Without the Midtrans keys, the payment page shows the invoice and asks the customer to contact the company instead.

**Going live:** test end to end with sandbox keys first (Midtrans provides test cards and a VA simulator), then switch to production keys and `MIDTRANS_IS_PRODUCTION=true` once Midtrans has approved the account. Because there is no database, a link opened in two attempts could in rare cases be paid twice (e.g. two VA numbers issued and both paid); keep link validity short and reconcile against the Midtrans dashboard. Add payment terms (refunds, cancellation) to `/terms` before launch.

### Contact details and social links

Read from environment variables in `src/config/site.ts`. Missing values render as *"To be confirmed"* with no link — no fake `mailto:`, `tel:` or `wa.me` links are ever generated.

### Photography

No photos were supplied, so the site uses dot-matrix maps of the archipelago as its imagery. To add photos, place files in `public/images/` and set `src`/`alt` for the slot in `src/content/media.ts` (slots: `consulting`, `trading`, `travel`, `about`). In development, slots still using the fallback show a small "Photo slot" badge. Use only images the company owns or licenses.

### Logo

`src/components/layout/Wordmark.tsx` is a text wordmark ("HORRA PRIME GROUP") with a simple "H" mark, used until the official logo is supplied. Replace that component (and `src/app/icon.svg`, `src/app/opengraph-image.png`) with official assets.

### Content

Page copy lives in `src/content/` (`divisions.ts`, `consulting.ts`, `trading.ts`, `travel.ts`, `company.ts`, `navigation.ts`), separate from markup. Adding a product to a category, for example, is a one-line change in `trading.ts`.

---

## Design decisions

- **Palette** (from the brief): navy `#10243A` and ivory `#F7F5F0` as the foundation, forest green `#176B55` for trade and nature, gold `#C6A56B` as a restrained accent. Gold is never used as body text on light backgrounds (it fails contrast); `gold-ink #7A5C2A` is used instead. The brief's muted grey `#667085` was darkened slightly to `#5E6676` so small text passes WCAG AA on the sand background. Tokens are in `src/app/globals.css`.
- **Typography:** Plus Jakarta Sans — designed by Tokotype, an Indonesian type foundry — self-hosted from `src/fonts/` (SIL OFL 1.1), so there is no dependency on Google Fonts. One family, a fluid type scale (`text-display`, `text-headline`, `text-title`, `text-lead`).
- **Signature visual:** a dot-matrix map of Indonesia generated from Natural Earth data (public domain). The hero shows the whole archipelago with three abstract routes leaving the frame; each division uses a close crop (Java, the Strait of Malacca, Bali–Nusa Tenggara). The routes are deliberately unlabelled — they do not claim specific trade lanes or office locations. Regenerate with `scripts/generate-map-data.mjs`.
- **Kawung motif:** a quiet line drawing of the Javanese batik pattern appears once, behind the closing call to action.
- **Motion:** one orchestrated moment — the hero map reveals west to east and the routes draw in. Everything else is limited to hover and state changes. All motion is disabled under `prefers-reduced-motion`.
- **Honest content:** no rankings, awards, client counts, testimonials, certifications, prices, MOQs, processing times or guarantees. Immigration pages carry a visible "subject to current Indonesian rules" notice and link to official sources; trading pages state that availability, specifications, pricing, documentation and shipping terms are confirmed per inquiry.

### Accessibility

Semantic landmarks, skip link, one `h1` per page, visible focus styles, keyboard-operable menus (Escape closes, focus returns to the toggle), mobile menu that makes the page behind it inert, disclosure-pattern FAQ, labelled form fields with `aria-invalid`/`aria-describedby`, a focusable error summary and live status messages. Buttons, menu items and text inputs are at least 44px tall.

### SEO

Per-page titles and descriptions, canonical URLs, Open Graph/Twitter tags with a branded share image, `sitemap.xml`, `robots.txt` (`/api/` disallowed). Structured data is intentionally omitted until company details (address, contact, logo) are verified.

---

## Project structure

```
src/
  app/                    Routes (one folder per page), API route, sitemap, robots, icon, OG image
  components/
    art/                  Dot-map artwork, kawung pattern, photo slot (MediaFrame)
    cards/                DivisionCard, ServiceCard, ProductCategoryCard
    forms/                InquiryForm
    layout/               SiteHeader (mega-menu), MobileNavigation, SiteFooter, Wordmark, ContactDetails
    sections/             HeroSection, PageHero, ProcessSteps, CTASection, FAQAccordion
    ui/                   Container, buttons, SectionHeader, Breadcrumbs, DisclaimerNotice, PendingContent…
  config/site.ts          Company name, URL, contact details (from env)
  content/                All page copy and data
  fonts/                  Plus Jakarta Sans (OFL)
  lib/                    Inquiry schema/validation, metadata helper
docs/brief/               The original build prompt and website specification
scripts/                  Map data generator
```

## Notes

- This project uses Next.js 16 with Cache Components enabled (the `create-next-app` default). Code that reads the current time must be cached or deferred — see `src/components/ui/CurrentYear.tsx` for the pattern.
- An unknown trading category (e.g. `/international-trading/gold`) renders the not-found page with a `noindex` tag. Because category pages stream under Cache Components, the HTTP status is 200 rather than 404; add a check in `src/proxy.ts` if a hard 404 status is required.
