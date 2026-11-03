# Content to confirm before launch

Everything below is either missing from the company profile or needs professional review. Until it is supplied, the site shows a clearly labelled placeholder ("To be confirmed" / "Pending confirmation" / "Draft — pending legal review") rather than an invented detail.

## 1. Company details

| Item | Where it appears | How to supply |
| --- | --- | --- |
| Brand guidelines and share image | Share image (logos are now in `src/assets/logo/`) | Replace `src/app/opengraph-image.png` |
| Official email | Contact page, footer, privacy policy | `NEXT_PUBLIC_CONTACT_EMAIL` |
| Official phone | Contact page, footer | `NEXT_PUBLIC_CONTACT_PHONE` |
| Official WhatsApp number | Contact page, footer, WhatsApp button | `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Office address | Contact page, footer | `NEXT_PUBLIC_OFFICE_ADDRESS` |
| Operating hours | Contact page, footer | `NEXT_PUBLIC_OFFICE_HOURS` |
| Social media profiles | Footer | `NEXT_PUBLIC_SOCIAL_*` |
| Production domain | Canonical URLs, sitemap, share links | `NEXT_PUBLIC_SITE_URL` |
| Company story / history | About → "Our story" (pending block) | `src/app/about/page.tsx` |
| Leadership profiles (optional) | About → "Leadership" (pending block) | `src/app/about/page.tsx` |
| Registered details (NIB, registered office) | About → "Registered details" (pending block) | `src/app/about/page.tsx` |
| Photography the company owns or licenses | Division cards, About | `src/content/media.ts` + `public/images/` |

## 2. Inquiry handling

- [ ] Where inquiries should go (CRM, email inbox, WhatsApp team) → set `INQUIRY_WEBHOOK_URL`. Until then forms run in an honest demo mode.
- [ ] Who responds to each division's inquiries, and the expected response time (the site currently promises no response time).
- [ ] Rate limiting / CAPTCHA at the hosting level.

## 3. Immigration content — needs review against current official sources

The visa pages reproduce how the company profile describes its services. They are not a statement of current law.

- [ ] **C1 Tourist Visa:** single entry, initial stay of up to 60 days, extension possible — confirm against current Directorate General of Immigration rules.
- [ ] C1 permitted purposes (tourism, family/friends, exhibitions, non-employment business visits, other permitted non-commercial activities).
- [ ] C1 document checklist (passport ≥ 6 months, photo, flight itinerary, accommodation, 6-month bank statement, nationality-specific documents).
- [ ] C1 → Investor KITAS conversion: currently presented as *conditional* on a PT PMA and meeting requirements, subject to approval. Confirm wording.
- [ ] Short descriptions of Business Visa, Work Visa, Family KITAS, Visa Extension and Investor KITAS (`src/content/consulting.ts`).
- [ ] The profile's list of nationalities requiring a visa was **intentionally not published** — eligibility changes; the site links to the official e-Visa portal instead.
- [ ] Official links: `imigrasi.go.id`, `evisa.imigrasi.go.id`, `oss.go.id` — confirm these are the sources you want to reference.
- [ ] Optional: add a "last reviewed" date to the C1 and Investor KITAS pages once reviewed.

## 4. Business setup content

- [ ] Descriptions of PT PMA Setup, Local PT Setup, NIB & OSS and Virtual Office (`src/content/consulting.ts`).
- [ ] Whether to publish any fees, timelines or package inclusions (none are stated now).

## 5. International Trading

- [ ] Product lists for **Coconut Products, Petrochemical Products, Coal & Minerals, Seafood & Marine Products, Minerals** — the profile names these categories without products, so their pages show "range confirmed on request".
- [ ] Whether "Coal & Minerals" and "Minerals" should remain separate categories (both appear in the profile).
- [ ] Whether to publish specifications, grades, origins, certifications, packaging, Incoterms or MOQs for any product (none are stated now).
- [ ] Category introductions in `src/content/trading.ts` (general statements only).

## 6. Tours & Travel

- [ ] What "Travel Guide" covers — a guide person, a guidebook/itinerary advice, or both. The site currently says "guide arrangements and practical travel guidance".
- [ ] The two short bullet points under each travel service (`src/content/travel.ts`).
- [ ] Whether to publish destinations, sample itineraries or prices (none are stated now).

## 7. Company positioning statements

These come from the brief and are phrased cautiously; confirm the company is comfortable with them:

- [ ] "Professional consultation", "End-to-end assistance", "Transparent and professional service", "Dedicated customer support" (`src/content/company.ts`).
- [ ] About page commitments: no promises on immigration outcomes; trade terms confirmed per inquiry; bookings confirmed before reservation.
- [ ] Visa FAQ: fees "discussed during your consultation".
- [ ] Travel: "prices and conditions are confirmed before anything is booked".

## 8. Legal pages — require professional review

- [ ] **Privacy Policy** (`/privacy-policy`): review against Indonesia's Personal Data Protection Law (UU No. 27/2022); complete service providers, cross-border transfers, retention period, privacy contact, "last updated" date.
- [ ] **Terms of Use** (`/terms`): governing law and jurisdiction, "last updated" date.
- [ ] Remove the "Draft — pending legal review" notices once approved.
- [ ] If analytics or cookies are added later, update the privacy policy first.

## 9. Not included until real material exists

Testimonials, client logos, case studies, awards, certifications, statistics and years in business — the brief prohibits inventing them. Add them only when real, approved material is available.

## Online payments (Midtrans)

- [ ] Midtrans merchant account approved for PT. Horra Prime Group; production keys set in hosting.
- [ ] Payment methods to enable (VA banks, QRIS, e-wallets, cards) and who pays the fees.
- [ ] Payment, refund and cancellation terms added to `/terms`.
- [ ] Where payment notifications go (`PAYMENT_WEBHOOK_URL`) and who reconciles them.
