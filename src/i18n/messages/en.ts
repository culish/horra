/**
 * English dictionary — the reference for every other language.
 * Other dictionaries must have exactly the same shape (TypeScript enforces it).
 * Placeholders in {braces} are filled at runtime; keep them unchanged when translating.
 */

export const en = {
  meta: {
    title: "PT. Horra Prime Group | Business, Trade & Travel in Indonesia",
    description:
      "Explore business consulting, visa and immigration assistance, international trading, and travel services from PT. Horra Prime Group in Indonesia.",
    shortDescription:
      "An Indonesian company working across business consulting, international trading, and tours and travel.",
  },

  common: {
    home: "Home",
    skipToContent: "Skip to content",
    optional: "(optional)",
    opensNewTab: "(opens in a new tab)",
    step: "Step",
    learnMore: "Learn more",
    readMore: "Read more",
    toBeConfirmed: "To be confirmed",
    pendingConfirmation: "Pending confirmation",
    checkOfficialSources: "Check official sources",
    contactOurTeam: "Contact Our Team",
    exploreOurServices: "Explore Our Services",
    requestConsultation: "Request a consultation",
    breadcrumb: "Breadcrumb",
    language: "Language",
    chooseLanguage: "Choose language",
    explore: "Explore division",
    viewService: "View service",
    andMore: " and more",
    servicesOf: "{name} services",
    disclaimer: {
      regulationsTitle: "Subject to current regulations",
      immigrationTitle: "Immigration information is subject to current Indonesian rules",
      immigrationBody:
        "Visa and stay-permit requirements, durations and fees can change. Decisions are made by the Indonesian immigration authorities, and we cannot guarantee approval, processing times, extensions or conversions. This page is general information, not legal advice — confirm details with official sources before you apply.",
      tradeTitle: "Confirmed for each inquiry",
      tradeBody:
        "Availability, specifications, pricing, documentation and shipping terms are confirmed individually for each inquiry. Nothing on this page is an offer to sell.",
    },
    sources: {
      immigration: { label: "Directorate General of Immigration", note: "Official immigration information" },
      evisa: { label: "Indonesia e-Visa", note: "Official visa application portal" },
      oss: { label: "OSS — Online Single Submission", note: "Official business licensing system" },
    },
    cta: {
      buildTogether: "Let’s Explore What We Can Build Together",
    },
  },

  nav: {
    main: "Main",
    mobile: "Mobile",
    menu: "Menu",
    close: "Close",
    discuss: "Discuss Your Needs",
    overview: "{label} overview",
    submenu: "{label} menu",
    items: {
      home: "Home",
      about: "About",
      consulting: "Business Consulting",
      trading: "International Trading",
      travel: "Tours & Travel",
      contact: "Contact",
    },
    intros: {
      consulting: "Visas, stay permits and company setup for people and businesses coming to Indonesia.",
      trading: "Buyer inquiries for Indonesian commodities. Terms are confirmed for each inquiry.",
      travel: "Tickets, hotels, tours, transfers and guidance for trips in Indonesia.",
    },
    groups: {
      visa: "Visa & Immigration",
      setup: "Business Setup",
      categories: "Product categories",
      services: "Services",
    },
    links: {
      visaOverview: "Visa & Immigration overview",
      visaApply: "Apply for a visa online",
      c1: "C1 Tourist Visa",
      kitas: "Investor KITAS",
      ptPma: "PT PMA Setup",
      localPt: "Local PT Setup",
      nibOss: "NIB & OSS",
      virtualOffice: "Virtual Office",
      ticketHotel: "Ticket & Hotel",
      tourPackage: "Tour Package",
      airport: "Airport Drop & Pick Up",
      guide: "Travel Guide",
      productsListed: "{count} products listed",
      rangeOnRequest: "Range on request",
    },
    footer: {
      label: "Footer",
      company: "Company",
      overview: "Overview",
      getInTouch: "Get in touch",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      payOnline: "Pay online",
    },
    contact: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      office: "Office",
      hours: "Hours",
      greeting: "Hello Horra Prime Group, I would like to ask about your services.",
    },
    homeAria: "Horra Prime Group, home",
  },

  divisions: {
    consulting: {
      name: "Business Consulting",
      summary: "Visa, stay-permit and company-setup assistance for people and businesses coming to Indonesia.",
      services: ["Visa & Immigration", "Business Setup"],
    },
    trading: {
      name: "International Trading",
      summary:
        "Buyer inquiries for Indonesian commodities, from spices and palm oil products to coffee, cocoa and minerals.",
      services: ["Spices & Herbs", "Palm Oil Products", "Coffee & Cocoa", "Five more categories"],
    },
    travel: {
      name: "Tours & Travel",
      summary: "Help with tickets, hotels, tour packages, airport transfers and travel guidance across Indonesia.",
      services: ["Ticket & Hotel", "Tour Package", "Airport Drop & Pick Up", "Travel Guide"],
    },
  },

  company: {
    featured: {
      visa: {
        name: "Visa & Immigration",
        text: "Tourist and business visas, Investor and Family KITAS, extensions and work permits.",
      },
      setup: {
        name: "Business Setup",
        text: "PT PMA and local PT establishment, NIB registration through OSS, and virtual offices.",
      },
      trading: {
        name: "Commodity Trading",
        text: "Inquiries for Indonesian spices, palm oil products, coffee, cocoa, coconut, minerals and more.",
      },
      travel: {
        name: "Ticket, Hotel & Tour Assistance",
        text: "Flights, hotels, tour packages, airport transfers and travel guidance.",
      },
    },
    principles: [
      {
        title: "Professional consultation",
        text: "We start by understanding your situation, so the advice fits what you actually need.",
      },
      {
        title: "End-to-end assistance",
        text: "One team can coordinate related needs — company setup and an investor stay permit, or travel around a business trip.",
      },
      {
        title: "Transparent and professional service",
        text: "We explain requirements and next steps clearly, and say plainly what depends on the authorities or third parties.",
      },
      {
        title: "Dedicated customer support",
        text: "You have a point of contact for questions while your request moves forward.",
      },
    ],
    process: [
      { title: "Send an inquiry", text: "Use the form to tell us what you need." },
      { title: "Initial consultation", text: "We discuss your goals, timing and any constraints." },
      { title: "Requirements review", text: "We identify the documents, information or specifications involved." },
      { title: "Proposal and next steps", text: "You receive a proposed approach and how to proceed." },
      { title: "Ongoing assistance", text: "We stay in contact as your request progresses." },
    ],
  },

  hero: {
    company: "PT. Horra Prime Group",
    title: "Your Trusted Partner for Business, Trade & Travel in Indonesia",
    lead: "Integrated business consulting, international trading, and travel assistance designed to connect opportunities across Indonesia and global markets.",
  },

  home: {
    divisionsTitle: "Three divisions, one point of contact",
    divisionsIntro:
      "Business consulting, international trading, and tours and travel — with one team to coordinate when your plans involve more than one.",
    servicesTitle: "Where most inquiries start",
    servicesIntro:
      "Four services that clients ask us about most often. Each one begins with a conversation about what you need.",
    whyTitle: "Why Horra Prime Group",
    whyIntro: "How we work with clients, whichever division you come to us for.",
    tradingTitle: "Indonesian commodities for international buyers",
    tradingIntro:
      "Eight product categories handled by our International Trading division. Availability, specifications and terms are confirmed for each inquiry.",
    tradingLink: "View the trading division",
    visaLabel: "Visa & Immigration",
    visaTitle: "Apply for your Indonesian visa online",
    visaLead:
      "Choose from tourist, business, multiple-entry and KITAS options with clear prices, fill in one form and pay securely online. Our team checks your documents and follows the application through.",
    visaFrom: "Visas from",
    visaCta: "See visas & prices",
    visaApply: "Apply now",
    visaStepsTitle: "How it works",
    processTitle: "How an inquiry moves forward",
    processIntro: "The same five stages apply across our divisions, adapted to each service.",
    processNote:
      "This is a general workflow. The steps, documents and timing differ by service and by case, and are not a guaranteed timeline.",
    ctaText:
      "Tell us what you are planning — a visit, a company, a shipment or a trip — and we will suggest where to start.",
  },

  about: {
    metaTitle: "About",
    metaDescription:
      "PT. Horra Prime Group is an Indonesian company working across business consulting, international trading, and tours and travel.",
    title: "About Horra Prime Group",
    lead: "PT. Horra Prime Group is an Indonesian company working across three divisions: business consulting, international trading, and tours and travel.",
    whatTitle: "What we do",
    whatIntro:
      "Each division serves a different need. Together they cover much of what people and businesses look for when they engage with Indonesia.",
    howTitle: "How we work",
    promiseTitle: "Clear about what we can promise",
    promiseIntro: "Much of our work depends on governments, suppliers and providers. We say so plainly.",
    commitments: [
      {
        title: "Immigration decisions rest with the authorities",
        text: "We help clients prepare and follow up, but we never promise approval, processing times or conversions.",
      },
      {
        title: "Trade terms are confirmed per inquiry",
        text: "We do not publish specifications, prices or supply commitments that have not been agreed for a specific order.",
      },
      {
        title: "Travel depends on availability",
        text: "Bookings are confirmed with you, at the price available at the time, before anything is reserved.",
      },
    ],
    companyInfo: "Company information",
    pending: [
      { title: "Our story", text: "When and why the company was founded, and how its divisions developed." },
      { title: "Leadership", text: "Names and roles of the leadership team, if the company wishes to publish them." },
      {
        title: "Registered details",
        text: "Registered office address, business registration (NIB) and operating hours.",
      },
    ],
  },

  consulting: {
    metaTitle: "Business Consulting",
    metaDescription:
      "Visa and immigration assistance and company setup in Indonesia — tourist and business visas, Investor KITAS, PT PMA, local PT, NIB & OSS and virtual office.",
    title: "Business Consulting",
    lead: "Visa, stay-permit and company-setup assistance for people and businesses coming to Indonesia — from a first visit to establishing a company.",
    discuss: "Discuss your plans",
    pillarsTitle: "Two areas of consulting",
    pillarsIntro: "Most clients come to us for one of these. Many need both, and we coordinate between them.",
    visaText: "Help choosing a suitable visa or stay permit and preparing a complete application.",
    setupText: "Help establishing a company in Indonesia and completing its business registration.",
    goTo: "Go to {title}",
    pathwayTitle: "From a first visit to an investor stay permit",
    pathwayIntro:
      "For investors, our two consulting areas often connect. This is one common route — whether it applies to you depends on your plans and the rules in force.",
    pathway: [
      { title: "Visit", text: "Come to Indonesia on a suitable visit visa, such as the C1, to explore the market." },
      { title: "Establish", text: "Set up a PT PMA and register the business through OSS." },
      { title: "Stay", text: "Where eligible, apply for an Investor KITAS linked to your investment." },
    ],
    howTitle: "How we work with you",
    howNote:
      "A general workflow: documents, steps and timing depend on the service and your circumstances, and are not guaranteed.",
    inquiryTitle: "Tell us about your plans",
    inquiryText:
      "Tell us what you want to do in Indonesia — visit, invest, set up a company or relocate. We will explain the options and the information needed.",
    ctaTitle: "Looking to trade or travel instead?",
    ctaText: "Our other divisions handle commodity inquiries and travel arrangements.",
  },

  services: {
    visa: {
      "tourist-visa": {
        name: "Tourist Visa",
        description: "Visit-visa assistance for tourism and other permitted short stays, including the C1 visa.",
      },
      "business-visa": {
        name: "Business Visa",
        description: "Guidance on visa options for business visits that do not involve employment in Indonesia.",
      },
      "investor-kitas": {
        name: "Investor KITAS",
        description:
          "Stay-permit assistance for foreign nationals investing in an Indonesian company, where eligible.",
      },
      "visa-extension": {
        name: "Visa Extension",
        description: "Help preparing an extension application when your current visa type allows one.",
      },
      "work-visa": {
        name: "Work Visa",
        description: "Coordination support for work-related permits sponsored by an eligible employer in Indonesia.",
      },
      "family-kitas": {
        name: "Family KITAS",
        description: "Assistance with stay permits for eligible family members, such as spouses and dependants.",
      },
    },
    setup: {
      "pt-pma": {
        name: "PT PMA Setup",
        description:
          "Assistance establishing a PT PMA — the limited liability company form used for foreign investment in Indonesia.",
      },
      "local-pt": {
        name: "Local PT Setup",
        description:
          "Assistance establishing a local limited liability company (PT) owned by Indonesian shareholders.",
      },
      "nib-oss": {
        name: "NIB & OSS",
        description:
          "Help obtaining a Business Identification Number (NIB) through Indonesia's Online Single Submission (OSS) system.",
      },
      "virtual-office": {
        name: "Virtual Office",
        description: "Business address services for companies that need one, subject to local domicile requirements.",
      },
    },
  },

  visa: {
    metaTitle: "Visa & Immigration — apply online",
    metaDescription:
      "Apply online for Indonesian visas and KITAS: B1 visa on arrival, C1 tourist visa, business, multiple-entry, retirement, remote worker and family KITAS. Clear prices and secure Midtrans payment.",
    label: "Business Consulting",
    title: "Indonesian visas, applied for online",
    lead: "Pick your visa, see the price up front, fill in one application form and pay securely. Our team checks your documents and handles the submission through the official channel.",
    applyNow: "Apply now",
    seePrices: "See visas & prices",
    trust: ["Prices shown up front", "Secure online payment via Midtrans", "Document check before submission", "Website in 4 languages"],
    bdTitle: "Special offer for citizens of Bangladesh",
    bdText:
      "Bangladeshi passport holders get a special 5% discount on every visa and KITAS price. The discount is applied automatically when you choose Bangladesh as your nationality in the application form.",
    bdBadge: "Bangladesh −5%",
    catalogTitle: "Choose your visa",
    catalogIntro:
      "Prices are per applicant. Where two prices are shown, the lower one is standard processing and the higher one is express processing.",
    stepsTitle: "How online application works",
    steps: [
      { title: "Choose your visa", text: "Compare visa types, stay length and price, then pick standard or express processing." },
      { title: "Fill in the form", text: "Enter the applicant's passport details, travel dates and contact information." },
      { title: "Pay online", text: "Pay securely with bank transfer, QRIS, e-wallet or card through Midtrans." },
      { title: "Send your documents", text: "Our team contacts you by WhatsApp or email to collect the documents securely." },
      { title: "Receive your visa", text: "If the authorities approve the application, you receive the e-visa by email." },
    ],
    stepsNote:
      "Approval and processing time are decided by the Indonesian immigration authorities, not by Horra Prime Group.",
    tableTitle: "Price list",
    tableIntro: "All prices in Indonesian rupiah (IDR) per applicant.",
    colVisa: "Visa",
    colStandard: "Standard",
    colExpress: "Express",
    colBd: "Bangladesh (−5%)",
    otherTitle: "Other visa and stay-permit services",
    otherIntro: "For these services the fee depends on your situation. Ask us, and pay online once you receive a quote.",
    kitasTitle: "Investor KITAS",
    kitasText:
      "A limited stay permit for foreign nationals investing in an Indonesian company. We can coordinate it with setting up your PT PMA.",
    kitasLink: "Read about Investor KITAS",
    c1Title: "C1 Tourist Visa",
    c1Text: "A single-entry visit visa for tourism, family visits, exhibitions and business visits that do not involve employment.",
    c1Link: "Read about the C1 visa",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "Which visa do I need?",
        a: "That depends on your nationality, the purpose of your stay and how long you plan to stay. If you are unsure, send us a consultation request and we will explain the options that appear to fit under current rules.",
      },
      {
        q: "What does the price include?",
        a: "The price is the total we charge per applicant for the visa type and processing option shown, for preparing, checking and submitting the application. If a government fee changes, we tell you before submitting.",
      },
      {
        q: "How does the Bangladesh discount work?",
        a: "Choose Bangladesh as the nationality in the application form. The 5% discount is calculated automatically and shown in the order summary before you pay. It applies to the applicant's passport nationality.",
      },
      {
        q: "How do I pay?",
        a: "At the end of the application form you pay through Midtrans by bank transfer (virtual account), QRIS, e-wallet or card. Card and bank details are entered in the Midtrans window and are never seen by us.",
      },
      {
        q: "Can you guarantee approval or timing?",
        a: "No. Approval, processing times, extensions and conversions are decided by the authorities and depend on the regulations in force.",
      },
    ],
    consultTitle: "Not sure which visa fits?",
    consultText:
      "Share your travel purpose and nationality so our team can explain the next steps and the information you may need.",
    ctaTitle: "Planning to invest or set up a company?",
    ctaText: "Our business setup team can help establish your PT PMA or local PT.",
    payTitle: "Pay for a quoted visa service",
    payText: "Received a quote for Investor KITAS, a work visa or another service? Pay it securely online here.",
  },

  apply: {
    metaTitle: "Visa application",
    metaDescription: "Apply online for your Indonesian visa and pay securely with Midtrans.",
    title: "Visa application",
    lead: "Four short steps. Your price, including any Bangladesh discount, is shown before you pay.",
    crumb: "Apply online",
    stepLabels: ["Visa", "Applicant", "Documents", "Review & pay"],
    stepOf: "Step {n} of {total}",
    back: "Back",
    next: "Continue",
    edit: "Edit",
    chooseVisa: "Which visa are you applying for?",
    chooseVisaHint: "Prices are per applicant.",
    processing: "Processing",
    standard: "Standard",
    express: "Express",
    standardHint: "Regular processing time",
    expressHint: "Prioritised handling",
    applicantTitle: "Applicant details",
    applicantHint: "Enter the details exactly as they appear in the passport.",
    fields: {
      fullName: "Full name (as in passport)",
      nationality: "Nationality (passport country)",
      passportNumber: "Passport number",
      passportExpiry: "Passport expiry date",
      birthDate: "Date of birth",
      gender: "Gender",
      email: "Email",
      phone: "WhatsApp / phone number",
      phoneHint: "Include your country code, e.g. +880 …",
      arrival: "Planned arrival date",
      location: "Where are you now?",
      notes: "Notes for our team",
    },
    genders: { male: "Male", female: "Female" },
    locations: { outside: "Outside Indonesia", inside: "Already in Indonesia" },
    selectCountry: "Select a country",
    documentsTitle: "Documents you will need",
    documentsHint:
      "Do not upload anything now. After payment our team contacts you by WhatsApp or email and explains how to send these securely.",
    documents: {
      passport: "Passport bio page (valid for at least 6 months)",
      photo: "Recent passport-style photo with a plain background",
      ticket: "Return or onward flight booking",
      bank: "Bank statement for the last 3–6 months",
      address: "Address or hotel booking in Indonesia",
      sponsor: "Sponsor or supporting letter, where the visa type requires one",
      kitas: "Current visa or KITAS, for extensions",
    },
    confirmAccurate: "I confirm that the information I entered is correct and matches my passport.",
    confirmTerms:
      "I understand that Horra Prime Group assists with the application and that approval is decided by the Indonesian immigration authorities.",
    confirmPrivacy: "I agree that my details are used to process this application, as described in the privacy policy.",
    reviewTitle: "Review your order",
    summary: "Order summary",
    applicant: "Applicant",
    price: "Price",
    bdDiscount: "Bangladesh special discount (5%)",
    total: "Total to pay",
    payNow: "Pay {amount} now",
    preparing: "Preparing secure payment…",
    windowOpen: "Payment window open…",
    paymentMethods: "Bank transfer (virtual account), QRIS, e-wallet or card — processed by Midtrans.",
    bdApplied: "Bangladesh discount applied",
    bdNotice: "Citizens of Bangladesh get 5% off — choose Bangladesh as nationality to apply it.",
    unavailableTitle: "Online payment is not switched on yet",
    unavailableText: "Your application could not be paid online. Please send it to us as a consultation request instead, or contact our team.",
    sandbox: "Sandbox mode: test payments only, no real money is moved.",
    successTitle: "Payment received — thank you!",
    successText:
      "Your order {order} is paid. Our team will contact you by WhatsApp or email within one working day to collect your documents.",
    pendingTitle: "Waiting for your payment",
    pendingText:
      "Follow the payment instructions shown (e.g. the virtual account number or QR code). Order {order} is confirmed automatically once the payment arrives.",
    closedTitle: "Payment not completed",
    closedText: "The payment window was closed before the payment finished. Your details are still here — you can pay whenever you are ready.",
    errorTitle: "The payment could not be started",
    errorText: "Nothing was charged. Please check your details and try again, or contact our team.",
    required: "This field is required.",
    invalidEmail: "Enter an email address in the format name@example.com.",
    invalidPhone: "Enter a phone number with digits and an optional + country code.",
    invalidPassport: "Use 5–20 letters and numbers.",
    invalidDate: "Enter a valid date.",
    passportTooSoon: "The passport must be valid for at least 6 months after arrival.",
    arrivalPast: "Choose a date in the future.",
    mustConfirm: "Please confirm to continue.",
    fixErrors: "Please check the highlighted fields.",
    catalog: {
      all: "All visas",
      B: "Visa on arrival",
      C: "Visit visas",
      D: "Multiple entry",
      E: "KITAS (stay permits)",
      text: {
        B: "Short stays for eligible nationalities, issued as an e-VOA.",
        C: "Single-entry visit visas, applied for before you travel.",
        D: "Multiple-entry visit visas valid for repeated trips.",
        E: "Limited stay permits for living in Indonesia.",
      },
      apply: "Apply now",
      bdBadge: "BD −5%",
      bdPrice: "Bangladesh from",
      stay: "Stay",
      extension: "Extension",
    },
    visas: {
      b1: {
        name: "B1 Visa on Arrival (e-VOA)",
        short: "Tourism, family visits and short business meetings for eligible nationalities.",
        stay: "30 days",
        extension: "Once, up to 60 days in total",
      },
      "b1-ext": {
        name: "B1 Visa on Arrival extension",
        short: "Extend an e-VOA / VOA once by another 30 days while you are in Indonesia.",
        stay: "+30 days",
        extension: "Maximum stay 60 days",
      },
      c1: {
        name: "C1 Tourist Visa (211A)",
        short: "Single-entry visit visa for tourism, family visits and non-employment business visits.",
        stay: "60 days",
        extension: "Twice, up to 180 days in total",
      },
      "c-titre": {
        name: "C-Type Visit Visa — Titre de Voyage",
        short: "Visit visa for travellers holding a travel document instead of a regular passport.",
        stay: "60 days",
        extension: "Subject to current rules",
      },
      c2: {
        name: "C2 / C6 / C10 Business, Social, Volunteer & Speaker",
        short: "Visit visa for business meetings, social or volunteer activities and speaking engagements.",
        stay: "60 days",
        extension: "Twice, up to 180 days in total",
      },
      "c-ext": {
        name: "C1 / D1 Visit Visa extension",
        short: "Extend a C1, C2, C6, C10 or D1 visit visa by 60 days.",
        stay: "+60 days",
        extension: "Up to the visa's maximum stay",
      },
      artist: {
        name: "Artist & Performer Visa",
        short: "Visit visa for artists, musicians and performers appearing in Indonesia.",
        stay: "30 days",
        extension: "Cannot be extended",
      },
      c12: {
        name: "C12 Pre-Investment Visa",
        short: "For exploring an investment or preparing to set up a business in Indonesia.",
        stay: "180 days",
        extension: "Subject to current rules",
      },
      c16: {
        name: "C16 Training on Industrial Technology",
        short: "For giving counselling or training on industrial technology and innovation.",
        stay: "60 days",
        extension: "Subject to current rules",
      },
      c9: {
        name: "C9 Short Course & Training",
        short: "For short courses, training and similar non-degree learning activities.",
        stay: "60 days",
        extension: "Subject to current rules",
      },
      "d-multi": {
        name: "D1 / D2 Multiple-Entry Visa",
        short: "Multiple entries for tourism, business meetings or pre-investment visits.",
        stay: "60 days per entry",
        extension: "Multiple entries during validity",
      },
      d12: {
        name: "D12 Pre-Investment Multiple-Entry Visa",
        short: "Multiple entries for investors preparing a business in Indonesia.",
        stay: "Up to 180 days per entry",
        extension: "Multiple entries during validity",
      },
      e33g: {
        name: "E33G Remote Worker KITAS",
        short: "Live in Indonesia while working remotely for an employer outside Indonesia.",
        stay: "1 year",
        extension: "Renewable, subject to current rules",
      },
      e33f: {
        name: "E33F Retirement KITAS",
        short: "Stay permit for retirees, generally aged 60 or over.",
        stay: "1 year",
        extension: "Renewable, subject to current rules",
      },
      e33e: {
        name: "E33E Retirement KITAS — 5 years",
        short: "Five-year stay permit for retirees, generally aged 60 or over.",
        stay: "5 years",
        extension: "Subject to current rules",
      },
      e31: {
        name: "E31 Family KITAS",
        short: "Stay permit for spouses and children of Indonesian citizens or KITAS holders.",
        stay: "1 year",
        extension: "Renewable, subject to current rules",
      },
      "e31-2y": {
        name: "E31 Family KITAS — 2 years",
        short: "Two-year family stay permit for spouses and children.",
        stay: "2 years",
        extension: "Renewable, subject to current rules",
      },
      e33: {
        name: "E33 Second Home KITAS — 5 years",
        short: "Long-term stay permit for foreigners with sufficient funds in Indonesia.",
        stay: "5 years",
        extension: "Subject to current rules",
      },
      "kitas-ext": {
        name: "KITAS extension — 1 year",
        short: "Extend an existing KITAS by one year.",
        stay: "+1 year",
        extension: "Subject to current rules",
      },
    },
  },

  c1: {
    metaTitle: "C1 Tourist Visa for Indonesia",
    metaDescription:
      "What the C1 visit visa covers, a preliminary document checklist and how we assist with the application. Requirements are subject to current Indonesian immigration rules.",
    label: "Visa & Immigration",
    crumb: "C1 Tourist Visa",
    title: "C1 Tourist Visa for Indonesia",
    lead: "A single-entry visit visa for tourism and other permitted short stays. We help you check whether it suits your trip and prepare a complete application.",
    apply: "Apply for the C1 visa",
    checklist: "Document checklist",
    priceLabel: "Price per applicant",
    overviewTitle: "What the C1 visa is for",
    overviewIntro:
      "The C1 is generally used for short visits that do not involve employment in Indonesia. Permitted purposes include:",
    purposes: [
      "Tourism",
      "Visiting family or friends",
      "Attending exhibitions",
      "Business visits that do not involve employment",
      "Other permitted non-commercial activities",
    ],
    glance: "At a glance",
    summary: [
      { term: "Entry", detail: "Single entry" },
      { term: "Initial stay", detail: "Up to 60 days" },
      { term: "Extension", detail: "May be possible" },
    ],
    glanceNote:
      "As currently described. Durations and extension options are set by Indonesian immigration regulations and may change.",
    whoTitle: "Who may need a visa?",
    who: [
      "Foreign nationals who are not eligible for visa-free entry or a Visa on Arrival (including e-VOA) may need to obtain a visa before they travel.",
      "Eligibility depends on your nationality and the purpose of your trip, and the lists of eligible countries change from time to time. Check the current rules on the official immigration website, or ask us for an assessment.",
    ],
    processTitle: "How we assist",
    processIntro: "From the first conversation to your arrival — and beyond, if you decide to stay longer or invest.",
    process: [
      { title: "Free consultation", text: "Tell us your nationality, travel purpose and plans." },
      {
        title: "Eligibility assessment",
        text: "We review whether a C1 visa appears to suit your purpose under current rules.",
      },
      {
        title: "Document verification",
        text: "We check your documents for completeness before anything is submitted.",
      },
      { title: "Visa application submission", text: "The application is submitted through the official channel." },
      { title: "Immigration processing", text: "Indonesian immigration authorities review the application." },
      { title: "E-visa approval", text: "If the application is approved, the authorities issue the e-visa." },
      { title: "Entry to Indonesia", text: "You travel and present your documents on arrival." },
      {
        title: "Visa extension assistance",
        text: "If you need more time and are eligible, we can help you apply for an extension.",
      },
      {
        title: "Investor KITAS conversion assistance",
        text: "Where eligible and permitted, we can advise on moving to an Investor KITAS.",
      },
    ],
    processNote:
      "Steps 5 and 6 are carried out by the Indonesian immigration authorities. Steps 8 and 9 apply only where you are eligible and the rules permit. Timing is not guaranteed.",
    documentsTitle: "Preliminary document checklist",
    documentsIntro: "A starting point only. Exact requirements vary by applicant and must be verified before you apply.",
    documents: [
      "Passport with at least six months of validity",
      "Passport-size photo",
      "Flight itinerary",
      "Hotel booking or accommodation details",
      "Bank statement for the last six months",
      "Additional supporting documents, depending on nationality",
    ],
    variesTitle: "Requirements vary",
    variesText:
      "The immigration authorities may ask for different or additional documents depending on your nationality, circumstances and the regulations in force. We will tell you what applies to your case during document verification.",
    kitasTitle: "From a C1 visa to an Investor KITAS",
    kitasLead:
      "If you decide to invest in Indonesia, moving from a C1 visa to an Investor KITAS may be possible after a PT PMA has been established and the immigration requirements are met.",
    kitasText:
      "This is conditional. It depends on current law, your eligibility and approval by the authorities — it is not available to every C1 holder. We can coordinate the company setup and the stay-permit application together.",
    aboutKitas: "About Investor KITAS",
    aboutSetup: "About business setup",
    whyTitle: "Why contact Horra Prime Group?",
    reasons: [
      "Professional immigration consultation",
      "Visa extension assistance",
      "Business setup support",
      "Investor KITAS assistance",
      "End-to-end coordination",
      "Customer support",
    ],
    faqTitle: "Questions about the C1 visa",
    faqs: [
      {
        q: "Can you guarantee that my visa will be approved?",
        a: "No. Approval decisions are made by the Indonesian immigration authorities. We can help you prepare a complete application, but no one can guarantee the outcome.",
      },
      {
        q: "How long does processing take?",
        a: "Processing times are set by the authorities and can change. We share current expectations during your consultation — treat them as estimates, not commitments.",
      },
      {
        q: "Do I need a visa at all?",
        a: "It depends on your nationality and the purpose of your trip. Some travellers may be eligible for visa-free entry or a visa on arrival (including e-VOA). Check the official immigration website, or ask us for an assessment.",
      },
      {
        q: "Can I extend my stay?",
        a: "Extensions may be possible under current rules. Whether you can extend, and for how long, depends on the regulations in force when you apply.",
      },
      {
        q: "Can I work on a C1 visa?",
        a: "No. The C1 is a visit visa and does not allow employment in Indonesia. If you plan to work, ask us about work-related permits.",
      },
      {
        q: "Can I switch from a C1 visa to an Investor KITAS?",
        a: "It may be possible after a PT PMA has been established and the immigration requirements are met. This depends on current law and on approval by the authorities, so it is not available to every C1 holder.",
      },
      {
        q: "Is the information on this page legal advice?",
        a: "No. It is general information about our services. Requirements change, and your situation may differ — confirm the details with official sources or a qualified professional before you apply.",
      },
    ],
    inquiryTitle: "Need help understanding your visa options?",
    inquiryText:
      "Share your travel purpose and nationality so our team can explain the next steps and the information you may need.",
  },

  kitas: {
    metaTitle: "Investor KITAS",
    metaDescription:
      "Assistance with the Investor KITAS stay permit for foreign nationals investing in an Indonesian company, coordinated with PT PMA setup. Subject to current regulations.",
    label: "Visa & Immigration",
    title: "Investor KITAS",
    lead: "A limited stay permit for foreign nationals who invest in an Indonesian company, typically a PT PMA. We help you check eligibility and coordinate the company setup and the application.",
    setupButton: "Business setup",
    helpTitle: "How we can help",
    helpIntro:
      "Eligibility depends on your investment, your company's structure and the immigration rules in force when you apply.",
    help: [
      {
        title: "Eligibility review",
        text: "We look at your planned investment and company structure against the current requirements.",
      },
      {
        title: "Company setup coordination",
        text: "If you still need a PT PMA, our business setup team can help establish it first.",
      },
      { title: "Document preparation", text: "We tell you what is needed and check your documents for completeness." },
      {
        title: "Application and follow-up",
        text: "We support the application and keep you informed while the authorities process it.",
      },
      { title: "Extensions", text: "Where the rules allow, we can help when the permit is due for extension." },
    ],
    pathwayTitle: "A typical pathway",
    pathwayIntro:
      "The order below is common, but your route may differ. If you are already in Indonesia on a C1 visa, conversion may be possible once the company is established and the requirements are met.",
    readMoreBefore: "Read more about the",
    readMoreAfter: ".",
    pathway: [
      { title: "Plan the investment", text: "Agree the business activity, ownership and structure of your Indonesian company." },
      { title: "Establish the PT PMA", text: "Set up the company and complete its business registration." },
      { title: "Check eligibility", text: "Confirm that you and the company meet the Investor KITAS requirements in force." },
      { title: "Apply", text: "Submit the application, which is then processed by the immigration authorities." },
      {
        title: "Permit decision",
        text: "If approved, the permit is issued. Its validity and extension options follow current rules.",
      },
    ],
    faqTitle: "Questions about Investor KITAS",
    faqs: [
      {
        q: "Do I need a PT PMA to apply?",
        a: "The Investor KITAS is generally linked to an investment in an Indonesian company. Requirements — including any minimum investment or shareholding — are set by current regulations, and we confirm them for your situation during consultation.",
      },
      {
        q: "Can I apply while I am in Indonesia on a C1 visa?",
        a: "Conversion from a C1 visa may be possible once a PT PMA is set up and the immigration requirements are met. It is conditional and subject to approval by the authorities.",
      },
      {
        q: "Does an Investor KITAS allow me to work for the company?",
        a: "The activities permitted under an Investor KITAS are defined by current regulations. We explain what applies to your case before you apply.",
      },
      {
        q: "Can you guarantee the permit?",
        a: "No. Decisions are made by the Indonesian immigration authorities, and requirements may change.",
      },
    ],
    inquiryTitle: "Discuss your investment plans",
    inquiryText:
      "Tell us your nationality and what you plan to invest in. We will explain the current requirements and the steps involved.",
    ctaTitle: "Still need to set up your company?",
    ctaText: "Our business setup team can help establish a PT PMA and register it through OSS.",
  },

  setup: {
    metaTitle: "Business Setup in Indonesia",
    metaDescription:
      "Assistance with PT PMA and local PT establishment, NIB registration through OSS, and virtual office services in Indonesia.",
    label: "Business Consulting",
    title: "Business Setup",
    lead: "Help establishing a company in Indonesia — a foreign-investment PT PMA or a local PT — and completing its business registration.",
    servicesTitle: "Company setup services",
    servicesIntro:
      "Requirements such as permitted business fields, capital and licences depend on your activity and on current regulations. We confirm what applies to you during consultation.",
    noGuaranteeTitle: "No fixed timelines or outcomes",
    noGuaranteeText:
      "Company establishment involves government registrations and approvals. Timelines, fees and outcomes depend on your business and the authorities, and are not guaranteed. This page is general information, not legal advice.",
    questionsTitle: "What we will ask you",
    questionsIntro: "A few details help us suggest the right company type and the steps involved.",
    questions: [
      "What your business will do in Indonesia",
      "Whether the company will have foreign shareholders",
      "Where you plan to operate",
      "Your intended timeline",
      "Whether you or your team will need stay permits",
    ],
    howTitle: "How we work with you",
    howIntroBefore: "Foreign investors often combine company setup with an",
    howIntroAfter: ". We can coordinate both.",
    howNote: "A general workflow. The documents, steps and timing depend on your business and are not guaranteed.",
    inquiryTitle: "Tell us about your business",
    inquiryText:
      "Describe what you want to set up and how you prefer to be contacted. We will come back with the options and next steps.",
    payTitle: "Pay for your business setup service",
    payText: "Once you have agreed a quote with our team, you can pay it securely online.",
    ctaTitle: "Also need a visa or stay permit?",
    ctaText: "Our immigration team works alongside business setup.",
  },

  trading: {
    metaTitle: "International Trading",
    metaDescription:
      "Buyer inquiries for Indonesian commodities: spices and herbs, palm oil products, coffee and cocoa, coconut products, petrochemicals, coal and minerals, and seafood.",
    title: "International Trading",
    lead: "We handle inquiries from international buyers for Indonesian commodities across eight product categories. Availability, specifications and terms are confirmed for each inquiry.",
    browse: "Browse categories",
    sendInquiry: "Send a product inquiry",
    categoriesTitle: "Product categories",
    categoriesIntro:
      "Three categories list specific products. For the others, tell us what you need and we will confirm what we can offer.",
    askTitle: "What helps us respond",
    askIntro: "The more we know about your requirement, the more precisely we can confirm availability and terms.",
    askFor: [
      { title: "Product and grade", text: "What you need, and any specification or quality standard you work to." },
      { title: "Volume", text: "An estimate of quantity and frequency, if you know it." },
      { title: "Destination", text: "The country and port, and your preferred delivery terms." },
      { title: "Documentation", text: "Any certificates or documents your market requires." },
    ],
    processTitle: "How a trade inquiry moves forward",
    processNote:
      "A general workflow. Specifications, pricing, documentation and shipping terms are agreed case by case; no timeline or supply is guaranteed until confirmed in writing.",
    processNoteShort:
      "A general workflow; terms are agreed case by case and nothing is guaranteed until confirmed in writing.",
    process: [
      { title: "Send a product inquiry", text: "Tell us the product, destination and the volume you have in mind." },
      { title: "Discuss requirements", text: "We clarify specifications, packing, documentation and delivery needs." },
      {
        title: "Confirm availability and terms",
        text: "Availability, specifications, pricing and shipping terms are confirmed for your inquiry.",
      },
      { title: "Agree next steps", text: "You receive a proposal and decide how to proceed." },
      { title: "Ongoing coordination", text: "We stay in contact as the order moves forward." },
    ],
    inquiryText: "Not sure which category fits? Describe the product and we will route it to the right team.",
    payTitle: "Pay a trade invoice or deposit",
    payText: "Pay the amount on your proforma invoice or the agreed deposit securely online.",
    ctaTitle: "Travelling to Indonesia to meet suppliers?",
    ctaText:
      "Our Tours & Travel division can help with flights, hotels and airport transfers, and our consulting team with business visas.",
    category: {
      metaCount: "{name} from Indonesia: {summary} Send a buyer inquiry — availability, specifications and terms are confirmed individually.",
      metaNone: "Inquiries for {name} from Indonesia. Share your requirement and we will confirm what we can offer.",
      viewProducts: "View {count} products",
      products: "Products",
      range: "Product range",
      productsIntro:
        "Products we currently handle inquiries for. Grades, specifications and packing are confirmed per inquiry.",
      rangeIntro: "The specific products in this category are confirmed on request.",
      catalogue: "{name} catalogue",
      catalogueText:
        "We have not published a product list for this category yet. Send an inquiry describing the product, specification and volume you need, and we will confirm what we can offer.",
      inquire: "Inquire about {name}",
      inquiryText: "Tell us the product, your company and destination. We will respond with what we can confirm.",
      others: "Other categories",
    },
    categories: {
      "spices-herbs": {
        name: "Spices & Herbs",
        summary: "Ginger, cinnamon, black pepper, cloves, nutmeg and more.",
        intro:
          "Indonesia's spice trade goes back centuries. We handle buyer inquiries for the spices below and confirm grade, origin, packing and availability for each request.",
      },
      "palm-oil": {
        name: "Palm Oil Products",
        summary: "Crude and refined palm oil, palm kernel products and by-products.",
        intro:
          "Inquiries for crude and refined palm oil, palm kernel products and by-products. Specifications, quality parameters and trade terms are agreed for each inquiry.",
      },
      "coffee-cocoa": {
        name: "Coffee & Cocoa",
        summary: "Green and roasted coffee, cocoa beans and processed cocoa products.",
        intro:
          "Coffee in green, roasted and ground forms, and cocoa from beans to butter, liquor and cake. Tell us your intended use and we will confirm what can be supplied.",
      },
      coconut: {
        name: "Coconut Products",
        summary: "Product range confirmed on request.",
        intro:
          "Inquiries for coconut-based products. Our detailed range for this category is being finalised — tell us what you are looking for and we will confirm what we can offer.",
      },
      petrochemical: {
        name: "Petrochemical Products",
        summary: "Product range confirmed on request.",
        intro:
          "Inquiries for petrochemical products. Our detailed range for this category is being finalised — share your specification and we will confirm what we can offer.",
      },
      "coal-minerals": {
        name: "Coal & Minerals",
        summary: "Product range confirmed on request.",
        intro:
          "Inquiries for coal and mineral products. Our detailed range for this category is being finalised — share your requirement and we will confirm what we can offer.",
      },
      "seafood-marine": {
        name: "Seafood & Marine Products",
        summary: "Product range confirmed on request.",
        intro:
          "Inquiries for seafood and marine products. Our detailed range for this category is being finalised — tell us what you need and we will confirm what we can offer.",
      },
      minerals: {
        name: "Minerals",
        summary: "Product range confirmed on request.",
        intro:
          "Inquiries for mineral products. Our detailed range for this category is being finalised — share your specification and we will confirm what we can offer.",
      },
    },
    groups: { palm: "Palm oil", kernel: "Palm kernel", byproducts: "By-products", coffee: "Coffee", cocoa: "Cocoa" },
    products: {
      ginger: "Ginger",
      cinnamon: "Cinnamon",
      "black-pepper": "Black Pepper",
      cloves: "Cloves",
      "star-anise": "Star Anise",
      nutmeg: "Nutmeg",
      mace: "Mace",
      cardamom: "Cardamom",
      "crude-palm-oil": "Crude Palm Oil",
      "refined-palm-oil": "Refined Palm Oil",
      "rbd-palm-olein": "RBD Palm Olein",
      "rbd-palm-stearin": "RBD Palm Stearin",
      "palm-kernel-oil": "Palm Kernel Oil",
      "palm-kernel-expeller": "Palm Kernel Expeller",
      "palm-kernel-shell": "Palm Kernel Shell",
      "palm-fatty-acid-distillate": "Palm Fatty Acid Distillate",
      "palm-acid-oil": "Palm Acid Oil",
      "palm-oil-mill-effluent": "Palm Oil Mill Effluent",
      "arabica-coffee-beans": "Arabica Coffee Beans",
      "robusta-coffee-beans": "Robusta Coffee Beans",
      "green-coffee-beans": "Green Coffee Beans",
      "roasted-coffee-beans": "Roasted Coffee Beans",
      "ground-coffee": "Ground Coffee",
      "cocoa-beans": "Cocoa Beans",
      "cocoa-powder": "Cocoa Powder",
      "cocoa-butter": "Cocoa Butter",
      "cocoa-liquor-cocoa-mass": "Cocoa Liquor (Cocoa Mass)",
      "cocoa-cake": "Cocoa Cake",
    },
  },

  travel: {
    metaTitle: "Tours & Travel",
    metaDescription:
      "Help with flight tickets, hotels, tour packages, airport transfers and travel guidance for trips in Indonesia.",
    logoAlt: "Horra – Global Visa & Business Solutions",
    title: "Tours & Travel",
    lead: "Tickets, hotels, tour packages, airport transfers and travel guidance — arranged around your plans, whether you are here for business or leisure.",
    plan: "Plan your trip",
    ourServices: "Our services",
    servicesTitle: "What we can arrange",
    servicesIntro:
      "Tell us what you need and we will come back with options. Prices and availability are confirmed before anything is booked.",
    services: {
      "ticket-hotel": {
        name: "Ticket & Hotel",
        description: "Flight tickets and hotel bookings arranged around your dates, budget and preferences.",
        details: ["Domestic and international flights", "Hotels for leisure or business stays"],
      },
      "tour-package": {
        name: "Tour Package",
        description: "Tour packages for destinations in Indonesia, planned around your interests and pace.",
        details: ["Leisure trips and short getaways", "Plans shaped by your interests"],
      },
      "airport-transfer": {
        name: "Airport Drop & Pick Up",
        description: "Transfers between the airport and your hotel or meeting venue, booked in advance.",
        details: ["Arrival and departure transfers", "Coordination with your flight times"],
      },
      "travel-guide": {
        name: "Travel Guide",
        description: "Guide arrangements and practical travel guidance for the places you plan to visit.",
        details: ["Help getting around", "Local know-how for your destination"],
      },
    },
    processTitle: "How planning works",
    process: [
      { title: "Share your plans", text: "Dates, destinations, number of travellers and what matters to you." },
      { title: "Receive options", text: "We come back with suggestions and what is available for your dates." },
      { title: "Confirm bookings", text: "Prices and conditions are confirmed before anything is booked." },
      { title: "Travel with support", text: "You have a contact for questions before and during your trip." },
    ],
    availabilityTitle: "Availability and prices",
    availabilityText:
      "Flights, hotels, tours and transfers depend on availability from providers at the time of booking. We confirm prices and conditions with you before booking; we do not publish fixed packages or rates.",
    inquiryText: "Share your dates, destinations and the help you need. Approximate details are fine to start.",
    payTitle: "Pay for your booking",
    payText: "Pay for a confirmed ticket, hotel, tour or transfer booking securely online.",
    ctaTitle: "Visiting for business?",
    ctaText: "Our consulting team can advise on visas, and our trading team on supplier inquiries.",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Contact PT. Horra Prime Group about business consulting, visa and immigration, international trading or tours and travel.",
    title: "Contact our team",
    lead: "Tell us what you need — a visa, a company, a product or a trip — and the right division will follow up.",
    formTitle: "Inquiry form",
    asideLabel: "Contact details and next steps",
    details: "Contact details",
    detailsPending: "Official contact details will be published once confirmed. Until then, please use the form.",
    whatsapp: "Message us on WhatsApp",
    nextTitle: "What happens next",
    next: [
      "We read your inquiry and pass it to the right division.",
      "We reply to ask any questions or arrange a consultation.",
      "You receive the proposed next steps before anything proceeds.",
    ],
    divisionTitle: "Looking for a division?",
  },

  notFound: {
    label: "Page not found",
    title: "This page doesn’t exist",
    text: "The link may be out of date. Go to the home page, or choose a division below.",
    home: "Go to the home page",
  },

  legal: {
    draftTitle: "Draft — pending legal review",
    privacy: {
      metaTitle: "Privacy Policy",
      metaDescription:
        "How PT. Horra Prime Group handles information submitted through this website. Draft pending legal review.",
      title: "Privacy Policy",
      lead: "How we handle the information you share through this website.",
      draft:
        "This is a starting draft based on how the website's forms work. It must be reviewed against Indonesia's Personal Data Protection Law (Law No. 27 of 2022) and any other applicable rules, and completed with the company's actual data practices, before the website is published.",
      sections: [
        {
          h: "Who we are",
          p: [
            "This website is operated by {company} (“we”, “us”). Our registered address and contact details are listed on the contact page once confirmed.",
          ],
        },
        {
          h: "Information we collect",
          p: [
            "When you send an inquiry, we collect the details you enter in the form. Depending on the form, this may include your name, email address and phone or WhatsApp number; your country or nationality and company name; and the service or product you ask about.",
            "When you apply for a visa online, we also collect the passport details needed for the application (name as in passport, nationality, passport number and expiry date, date of birth) and your travel dates. Payment is handled by Midtrans: card and bank details are entered in the Midtrans window and are not seen or stored by us.",
          ],
        },
        {
          h: "How we use it",
          p: [
            "We use your information to respond to your inquiry, to prepare and submit the application or provide the service you ask for, and to keep a record of our correspondence and payments. We do not sell your information.",
          ],
        },
        {
          h: "Sharing",
          p: [
            "We may share information with service providers who help us operate the website, take payments or handle inquiries, and — where your request requires it — with the Indonesian immigration authorities or partners involved in delivering the service. [To be completed: list categories of providers and any transfers outside Indonesia.]",
          ],
        },
        { h: "Retention", p: ["[To be completed: how long inquiry and application data is kept and how it is deleted.]"] },
        {
          h: "Your choices",
          p: [
            "You may ask to access, correct or delete the personal information we hold about you, or withdraw your consent, subject to applicable law. {contact}",
          ],
        },
        {
          h: "Cookies",
          p: [
            "This website uses one functional cookie to remember the language you chose. It does not use advertising or analytics cookies. If analytics are added, this section must be updated before they are enabled.",
          ],
        },
        {
          h: "Changes",
          p: ["We may update this policy. The current version is always published on this page. [Add “last updated” date on publication.]"],
        },
      ],
      contactEmail: "Contact us at {email}.",
      contactPending: "[To be completed: contact address for privacy requests.]",
    },
    terms: {
      metaTitle: "Terms of Use",
      metaDescription: "Terms for using the PT. Horra Prime Group website. Draft pending legal review.",
      title: "Terms of Use",
      lead: "The basis on which you may use this website and the information on it.",
      draft:
        "These terms are a starting draft. They must be reviewed by a qualified professional and completed before the website is published. They cover use of the website and online orders, not the terms of any separate service agreement.",
      sections: [
        { h: "About this website", p: ["This website is operated by {company}. By using it, you agree to these terms."] },
        {
          h: "Information only",
          p: [
            "Content on this website is general information about our services. It is not legal, immigration, tax or investment advice, and it is not an offer to sell any product. Requirements — especially immigration and company-registration rules — change, and you should confirm them with official sources or a qualified professional before acting.",
          ],
        },
        {
          h: "No guarantees",
          p: [
            "Visa and permit decisions are made by the Indonesian authorities. We do not guarantee approval, processing times, extensions or conversions.",
            "Product availability, specifications, prices, documentation and shipping terms apply only when confirmed for a specific inquiry.",
            "Travel bookings depend on provider availability and conditions at the time of booking.",
          ],
        },
        {
          h: "Online visa orders and payments",
          p: [
            "Visa prices shown on this website are per applicant and are confirmed in the order summary before payment. The Bangladesh special discount of 5% applies to applicants with a Bangladeshi passport. Payments are processed by Midtrans. [To be completed: refund policy if an application cannot be submitted or is refused.]",
          ],
        },
        {
          h: "Services",
          p: [
            "Any service we provide is governed by a separate agreement or written confirmation, which takes priority over anything on this website.",
          ],
        },
        {
          h: "External links",
          p: ["We link to official and third-party websites for convenience. We are not responsible for their content or availability."],
        },
        {
          h: "Intellectual property",
          p: ["The text, design and graphics on this website belong to {company} or are used with permission. Do not reproduce them without consent."],
        },
        {
          h: "Governing law",
          p: ["[To be confirmed: governing law and jurisdiction, e.g. the laws of the Republic of Indonesia.]"],
        },
        {
          h: "Changes",
          p: ["We may update these terms. The current version is published on this page. [Add “last updated” date on publication.]"],
        },
      ],
    },
  },

  form: {
    ariaLabel: "Inquiry form",
    submit: {
      general: "Send inquiry",
      visa: "Request a consultation",
      "business-setup": "Request a consultation",
      trading: "Send product inquiry",
      travel: "Send travel request",
    },
    sending: "Sending…",
    selectOption: "Select an option",
    checkOne: "Check 1 field",
    checkMany: "Check {count} fields",
    privacyConsent: "Privacy consent",
    privacyBefore: "We use your details only to respond to this inquiry. See our",
    privacyLink: "privacy policy",
    privacyAfter: ".",
    sentTitle: "Inquiry sent",
    sentText: "Thank you. We will reply to {email}.",
    sentFallback: "the email address you provided",
    demoTitle: "Demo mode: your inquiry was not sent",
    demoText:
      "Your details passed validation, but inquiry delivery is not connected yet, so nothing was sent or stored. Site owner: connect the inquiry endpoint (INQUIRY_WEBHOOK_URL — see README) before launch.",
    errorTitle: "Your inquiry couldn’t be sent",
    errorText: "Check your connection and try again. Your details are still in the form.",
    honeypot: "Website",
    fields: {
      fullName: "Full name",
      email: "Email",
      phone: "Phone or WhatsApp",
      phoneHint: "Include your country code.",
      consent: "I agree that Horra Prime Group may use these details to respond to my inquiry, as described in the privacy policy.",
      visaService: "What do you need help with?",
      nationality: "Nationality",
      nationalityHint: "As shown on your passport.",
      purpose: "Purpose of your stay",
      arrival: "Planned arrival",
      arrivalHint: "An approximate month is fine.",
      anythingElse: "Anything else we should know?",
      service: "Service",
      yourCountry: "Your country",
      objective: "What do you want to set up in Indonesia?",
      objectiveHint: "For example: the business activity, who the shareholders will be, and your timeline.",
      objectiveRequired: "Describe what you want to set up.",
      contactMethod: "Preferred contact method",
      company: "Company",
      companyRequired: "Enter your company name.",
      country: "Country",
      product: "Product of interest",
      productRequired: "Enter the product you are interested in.",
      quantity: "Estimated requirement",
      quantityHint: "For example, volume and frequency.",
      message: "Message",
      messageRequired: "Enter a message about your requirement.",
      messageHint: "Specifications, destination port, packing or anything else that matters.",
      dates: "Travel dates",
      datesHint: "Approximate is fine.",
      travellers: "Number of travellers",
      destination: "Destinations",
      destinationHint: "Where in Indonesia would you like to go?",
      trip: "Tell us about your trip",
      tripRequired: "Tell us a little about your trip.",
      topic: "Topic",
      help: "How can we help?",
      helpRequired: "Tell us how we can help.",
      emailRequired: "Enter your email address.",
    },
    options: {
      topics: {
        "visa-and-immigration": "Visa & Immigration",
        "business-setup": "Business Setup",
        "international-trading": "International Trading",
        "tours-and-travel": "Tours & Travel",
        "something-else": "Something else",
      },
      visaServices: {
        "tourist-visa": "Tourist Visa (C1)",
        "business-visa": "Business Visa",
        "investor-kitas": "Investor KITAS",
        "visa-extension": "Visa Extension",
        "work-visa": "Work Visa",
        "family-kitas": "Family KITAS",
        "not-sure": "Not sure yet",
      },
      setupServices: {
        "pt-pma": "PT PMA Setup",
        "local-pt": "Local PT Setup",
        "nib-oss": "NIB & OSS",
        "virtual-office": "Virtual Office",
        "not-sure": "Not sure yet",
      },
      purposes: {
        tourism: "Tourism",
        "visiting-family-or-friends": "Visiting family or friends",
        "attending-an-exhibition-or-event": "Attending an exhibition or event",
        "business-visit-no-employment": "Business visit (no employment)",
        "investment-or-company-setup": "Investment or company setup",
        work: "Work",
        "something-else": "Something else",
      },
      contactMethods: { email: "Email", phone: "Phone", whatsapp: "WhatsApp" },
      travelServices: {
        "ticket-hotel": "Ticket & Hotel",
        "tour-package": "Tour Package",
        "airport-transfer": "Airport Drop & Pick Up",
        "travel-guide": "Travel Guide",
        combination: "A combination of these",
      },
      otherProduct: "Other / not listed",
    },
    validation: {
      confirm: "Please confirm to continue.",
      choose: "Choose an option for “{label}”.",
      enter: "Enter your {label}.",
      tooLong: "Keep this under {max} characters.",
      email: "Enter an email address in the format name@example.com.",
      phone: "Enter a phone number using digits, spaces and an optional + country code.",
      listed: "Choose one of the listed options.",
    },
  },

  pay: {
    invoice: {
      metaTitle: "Pay an invoice",
      metaDescription: "Secure online payment for an invoice from PT. Horra Prime Group.",
      crumb: "Payment",
      title: "Pay your invoice",
      lead: "Pay securely by bank transfer (virtual account), QRIS, e-wallet or card. Payments are processed by Midtrans.",
      notConfiguredTitle: "Online payment is not available yet",
      notConfiguredText: "Please contact us to arrange payment.",
      expiredTitle: "This payment link has expired",
      expiredText: "Invoice {invoice} can no longer be paid with this link. Please contact us for a new one.",
      invalidTitle: "Payment link not recognised",
      invalidText:
        "This link is incomplete or has been changed. Please open the link exactly as you received it, or ask us to send it again.",
      sandbox: "Sandbox mode: test payments only, no real money is moved.",
      details: "Invoice details",
      invoice: "Invoice",
      billedTo: "Billed to",
      for: "For",
      validUntil: "Link valid until",
      amountDue: "Amount due",
      notOn: "Online payment is not switched on yet. Please contact us to arrange payment for this invoice.",
      secure:
        "Card and bank details are entered in the Midtrans payment window and are never seen or stored by Horra Prime Group.",
    },
    button: {
      payNow: "Pay now",
      payAgain: "Pay again",
      preparing: "Preparing secure payment…",
      open: "Payment window open…",
      success: {
        title: "Payment received",
        body: "Thank you. Your payment was successful and our team has been notified. A receipt from Midtrans is sent to your email if you provided one.",
      },
      pending: {
        title: "Waiting for your payment",
        body: "Follow the instructions shown (e.g. the virtual account number or QR code) to complete the transfer. We are notified automatically once it arrives.",
      },
      closed: {
        title: "Payment not completed",
        body: "The payment window was closed before the payment finished. You can start again whenever you are ready.",
      },
      error: {
        title: "The payment could not be started",
        body: "Nothing was charged. Please try again in a moment, or contact us and we will help.",
      },
      alreadyPaid: {
        title: "This invoice is already paid",
        body: "Our records show this payment link has been paid. No further payment is needed.",
      },
      expired: { title: "This payment link has expired", body: "Please contact us for a new link." },
    },
    finish: {
      metaTitle: "Payment status",
      metaDescription: "Status of your payment to PT. Horra Prime Group.",
      title: "Payment status",
      lead: "Thank you for paying online with Horra Prime Group.",
      checking: "Checking your payment…",
      questions: "Questions? Contact our team",
      confirmingTitle: "We are confirming your payment",
      confirmingText: "If you completed the payment, our team is notified automatically. You do not need to pay again.",
      paidTitle: "Payment received",
      paidText: "Thank you. Payment for {ref} was successful.",
      yourOrder: "your order",
      pendingTitle: "Waiting for your payment",
      pendingText: "Your payment has not arrived yet. Please follow the payment instructions you were given.",
      failedTitle: "Payment not completed",
      failedText: "This payment did not go through and nothing was charged. You can try again from your payment link.",
    },
    service: {
      title: "Pay online",
      intro: "Pay the amount on your quotation or invoice. You can pay by bank transfer, QRIS, e-wallet or card.",
      service: "Service",
      reference: "Quotation or invoice number",
      referenceHint: "As written on the quote we sent you.",
      amount: "Amount (IDR)",
      amountHint: "The exact amount on your quotation, in rupiah.",
      amountInvalid: "Enter a whole rupiah amount between 10,000 and 1,000,000,000.",
      fullName: "Full name",
      email: "Email",
      phone: "WhatsApp / phone number",
      notes: "Notes",
      consent: "I confirm the amount matches the quotation from Horra Prime Group.",
      submit: "Continue to payment",
      notice: "Not received a quote yet? Send an inquiry first — our team confirms the price before you pay.",
      services: {
        "visa-other": "Other visa or KITAS service",
        "investor-kitas": "Investor KITAS",
        "work-visa": "Work visa / work permit",
        "pt-pma": "PT PMA setup",
        "local-pt": "Local PT setup",
        "nib-oss": "NIB & OSS",
        "virtual-office": "Virtual office",
        "trade-deposit": "Trade order deposit",
        "trade-invoice": "Trade invoice",
        "ticket-hotel": "Ticket & hotel",
        "tour-package": "Tour package",
        "airport-transfer": "Airport drop & pick up",
        "travel-guide": "Travel guide",
        other: "Other service",
      },
    },
  },
};

export type Messages = typeof en;
