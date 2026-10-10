# Claude Prompt — Build the PT. Horra Prime Group Corporate Website

You are a senior product designer, UX strategist, brand designer, and senior frontend engineer. Build a polished, production-minded corporate website for **PT. Horra Prime Group**, based on the requirements below and the attached company profile PDF.

## Mission

Create a premium, trustworthy corporate website for a large Indonesian company with three business divisions:
1. Business Consulting — Visa & Immigration and Business Setup
2. International Trading — Indonesian commodity and product categories
3. Tours & Travel — Ticket & Hotel, Tour Package, Airport Drop & Pick Up, and Travel Guide

This should look like an established, internationally oriented company, not a generic startup landing page or a basic template. Prioritize visual hierarchy, clear messaging, usability, responsive behavior, and real implementation quality.

## First: inspect the project

Before coding:
- Inspect the existing repository, framework, package manager, and file structure.
- Reuse the current stack and conventions if a project already exists.
- If the repository is empty, use Next.js + TypeScript + Tailwind CSS unless the environment requires a different stack.
- Check available dependencies and existing design assets before adding packages.
- Do not overwrite unrelated work.
- Then implement the actual website, not just a proposal or screenshot.

## Brand and visual direction

Design language: premium Indonesian corporate, international B2B, confident, editorial, refined, warm, clean, and modern.

Suggested colors:
- Deep navy `#10243A`
- Forest green `#176B55`
- Warm ivory `#F7F5F0`
- Charcoal `#222B35`
- Muted gray `#667085`
- Restrained gold accent `#C6A56B`
- White `#FFFFFF`

Use Inter, Manrope, or Plus Jakarta Sans. Use generous spacing, strong but concise headings, clean grid layouts, elegant image crops, subtle borders, and deliberate whitespace. Avoid excessive gradients, glassmorphism, huge rounded cards everywhere, loud animations, generic handshake stock images, and overdecorated UI.

Use high-quality photography relevant to Indonesia, international business, commodity trading, and travel. Use images only when they are available and reliable; provide graceful fallbacks. Do not use a company logo found online unless supplied or confirmed by the user. Create a tasteful text-based wordmark reading “HORRA PRIME GROUP” if no official logo asset exists.

## Homepage requirements

### 1. Header
- Text-based or supplied logo
- Home
- About
- Business Consulting
- International Trading
- Tours & Travel
- Contact
- Primary CTA: “Discuss Your Needs”
- Sticky behavior on scroll
- Accessible dropdown/mega-menu on desktop
- Functional mobile menu

### 2. Hero
Headline: **Your Trusted Partner for Business, Trade & Travel in Indonesia**

Supporting copy:
“Integrated business consulting, international trading, and travel assistance designed to connect opportunities across Indonesia and global markets.”

Buttons:
- Explore Our Services
- Contact Our Team

Use a premium image or carefully art-directed image composition. Keep text readable and CTA hierarchy clear. Make the first viewport polished and balanced on desktop and mobile.

### 3. Business divisions
Create three visually distinct editorial cards:
- Business Consulting
- International Trading
- Tours & Travel

Each has a concise description, relevant image or icon, and a working link to its landing page.

### 4. Featured services
Highlight:
- Visa & Immigration
- Business Setup
- Commodity Trading
- Ticket, Hotel & Tour Assistance

### 5. Why Horra Prime Group
Use careful, supportable copy:
- Professional consultation
- End-to-end assistance across relevant services
- Transparent and professional service
- Dedicated customer support

Do not fabricate rankings, awards, certifications, client counts, years in business, government relationships, or guaranteed outcomes.

### 6. Trading categories
Create cards for:
- Spices & Herbs
- Palm Oil Products
- Coffee & Cocoa
- Coconut Products
- Petrochemical Products
- Coal & Minerals
- Seafood & Marine Products
- Minerals

### 7. Visa feature
Promote the C1 Tourist Visa information page and consultation CTA. Clearly label immigration information as subject to current Indonesian rules.

### 8. Process section
Show a general service inquiry process:
1. Send an inquiry
2. Initial consultation
3. Requirements review
4. Proposal and next steps
5. Ongoing assistance

Make clear this is a general workflow, not a guaranteed processing timeline.

### 9. Closing CTA and footer
Use a confident closing section: “Let’s Explore What We Can Build Together”.
Include division links, contact placeholders, privacy and terms links, and social links only when real details are available.

## Required pages

Implement at least:
- `/`
- `/about`
- `/business-consulting`
- `/visa-immigration`
- `/visa-immigration/c1-tourist-visa`
- `/investor-kitas` or a clear Investor KITAS section
- `/business-setup`
- `/international-trading`
- `/international-trading/spices-herbs`
- `/international-trading/palm-oil`
- `/international-trading/coffee-cocoa`
- `/international-trading/coconut`
- `/international-trading/petrochemical`
- `/international-trading/coal-minerals`
- `/international-trading/seafood-marine`
- `/international-trading/minerals`
- `/tours-travel`
- `/contact`
- `/privacy-policy`
- `/terms`

If time or environment constraints make all pages impractical in one pass, fully implement the homepage, division overview pages, C1 Tourist Visa page, and reusable trading category template first. Ensure all other navigation targets still lead to useful pages or clearly marked coming-soon states—not broken links.

## Content from the supplied PDF

### Business Consulting
- Visa & Immigration
- Business Setup

Visa services listed:
- Tourist Visa
- Business Visa
- Investor KITAS
- Visa Extension
- Work Visa
- Family KITAS

Business setup services listed:
- PT PMA Setup
- Local PT Setup
- NIB & OSS
- Virtual Office

### International Trading
Categories listed:
- Spices & Herbs
- Palm Oil Products
- Coffee & Cocoa
- Coconut Products
- Petrochemical Products
- Coal & Minerals
- Seafood & Marine Products
- Minerals

Spices & Herbs products listed:
- Ginger
- Cinnamon
- Black Pepper
- Cloves
- Star Anise
- Nutmeg
- Mace
- Cardamom

Palm Oil Products listed:
- Crude Palm Oil (CPO)
- Refined Palm Oil (RPO)
- RBD Palm Olein
- RBD Palm Stearin
- Palm Kernel Oil (PKO)
- Palm Kernel Expeller (PKE)
- Palm Fatty Acid Distillate (PFAD)
- Palm Acid Oil (PAO)
- Palm Kernel Shell (PKS)
- Palm Oil Mill Effluent (POME)

Coffee & Cocoa products listed:
- Arabica Coffee Beans
- Robusta Coffee Beans
- Green Coffee Beans
- Roasted Coffee Beans
- Ground Coffee
- Cocoa Beans
- Cocoa Powder
- Cocoa Butter
- Cocoa Liquor (Cocoa Mass)
- Cocoa Cake

The PDF names Coconut Products, Petrochemical Products, Coal & Minerals, Seafood & Marine Products, and Minerals but does not detail their specific products. Do not invent a product catalog for these categories.

### Tours & Travel
- Ticket & Hotel
- Tour Package
- Airport Drop & Pick Up
- Travel Guide

### C1 Tourist Visa
The PDF describes C1 as a single-entry visit visa for permitted purposes such as tourism, visiting family or friends, attending exhibitions, non-employment business visits, and other permitted non-commercial activities. It states an initial validity of up to 60 days, with possible extensions subject to regulations.

The listed process is:
1. Free consultation
2. Eligibility assessment
3. Document verification
4. Visa application submission
5. Immigration processing
6. E-visa approval
7. Entry to Indonesia
8. Visa extension assistance
9. Investor KITAS conversion assistance

Documents listed in the PDF:
- Passport with minimum six months validity
- Passport-size photo
- Flight itinerary
- Hotel booking/accommodation details
- Bank statement for the last six months
- Additional supporting documents depending on nationality

The PDF also says a C1 visa may be convertible to Investor KITAS after setting up a PT PMA and meeting immigration requirements. Present this strictly as conditional and subject to current law and official approval.

**Immigration content safety and accuracy rules:**
- Treat the PDF as the source of the company's current draft content, not proof of current legal requirements.
- Do not hard-code the PDF's nationality list as a current legal determination.
- Do not guarantee visa approval, eligibility, processing times, extensions, or conversion.
- State that immigration rules and document requirements may change and should be confirmed through current official sources or professional review.
- Do not present the website as a substitute for legal advice.

## UX and functionality

- Responsive and tested for mobile, tablet, laptop, and wide desktop.
- Semantic HTML and accessible landmarks.
- Clear heading hierarchy and one H1 per page.
- Keyboard-accessible menus, forms, accordions, and buttons.
- Visible focus states and adequate color contrast.
- Respect `prefers-reduced-motion`.
- Functional navigation and breadcrumbs where useful.
- Contact/inquiry forms with validation and accessible error/success messages.
- If no backend or email service is configured, show a truthful demo submission state and explain where integration is needed; do not pretend messages were sent.
- WhatsApp, phone, email, and social links must use verified details. Otherwise use clearly labeled configuration placeholders and do not create fake working contact links.
- Use reusable components and a consistent design system.
- Optimize images, avoid layout shifts, and lazy-load below-the-fold media.
- Include page metadata and sensible SEO defaults.
- Avoid fake testimonials, client logos, company statistics, certifications, product specifications, prices, or shipping guarantees.

## Suggested components

- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `HeroSection`
- `DivisionCard`
- `ServiceCard`
- `ProductCategoryCard`
- `Breadcrumbs`
- `ProcessSteps`
- `CTASection`
- `InquiryForm`
- `FAQAccordion`
- `DisclaimerNotice`

Keep components reusable and maintainable. Keep page content in data structures when appropriate instead of duplicating markup.

## Deliverables

1. Implement the website in the current repository.
2. Create or update `README.md` with setup instructions, routes, design decisions, environment variables, and integration points.
3. Add a concise `CONTENT-TO-CONFIRM.md` listing missing company details and legal content requiring review.
4. Ensure the project can be started using the correct package manager and commands.
5. Run available lint, type-check, and build commands. Fix issues where possible.
6. Summarize what was implemented, what was tested, and what still needs real company data or backend configuration.

Do not stop after describing the plan. Inspect the repository, implement the site, and verify it.
