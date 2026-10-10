/**
 * Business Consulting content: Visa & Immigration and Business Setup.
 *
 * Source: the company profile (draft). Immigration details describe how the company currently
 * presents its services — they are NOT a statement of current law. Every page that uses this
 * content must show the immigration disclaimer. Review against official sources before launch.
 */

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  href: string;
};

export const visaServices: ServiceItem[] = [
  {
    id: "tourist-visa",
    name: "Tourist Visa",
    description: "Visit-visa assistance for tourism and other permitted short stays, including the C1 visa.",
    href: "/visa-immigration/c1-tourist-visa",
  },
  {
    id: "business-visa",
    name: "Business Visa",
    description: "Guidance on visa options for business visits that do not involve employment in Indonesia.",
    href: "/visa-immigration?service=business-visa#inquiry",
  },
  {
    id: "investor-kitas",
    name: "Investor KITAS",
    description: "Stay-permit assistance for foreign nationals investing in an Indonesian company, where eligible.",
    href: "/visa-immigration/investor-kitas",
  },
  {
    id: "visa-extension",
    name: "Visa Extension",
    description: "Help preparing an extension application when your current visa type allows one.",
    href: "/visa-immigration?service=visa-extension#inquiry",
  },
  {
    id: "work-visa",
    name: "Work Visa",
    description: "Coordination support for work-related permits sponsored by an eligible employer in Indonesia.",
    href: "/visa-immigration?service=work-visa#inquiry",
  },
  {
    id: "family-kitas",
    name: "Family KITAS",
    description: "Assistance with stay permits for eligible family members, such as spouses and dependants.",
    href: "/visa-immigration?service=family-kitas#inquiry",
  },
];

export const businessSetupServices: ServiceItem[] = [
  {
    id: "pt-pma",
    name: "PT PMA Setup",
    description:
      "Assistance establishing a PT PMA — the limited liability company form used for foreign investment in Indonesia.",
    href: "/business-setup#pt-pma",
  },
  {
    id: "local-pt",
    name: "Local PT Setup",
    description: "Assistance establishing a local limited liability company (PT) owned by Indonesian shareholders.",
    href: "/business-setup#local-pt",
  },
  {
    id: "nib-oss",
    name: "NIB & OSS",
    description:
      "Help obtaining a Business Identification Number (NIB) through Indonesia's Online Single Submission (OSS) system.",
    href: "/business-setup#nib-oss",
  },
  {
    id: "virtual-office",
    name: "Virtual Office",
    description: "Business address services for companies that need one, subject to local domicile requirements.",
    href: "/business-setup#virtual-office",
  },
];

/* ------------------------------------------------------------------ C1 Tourist Visa */

export const c1Purposes = [
  "Tourism",
  "Visiting family or friends",
  "Attending exhibitions",
  "Business visits that do not involve employment",
  "Other permitted non-commercial activities",
];

export const c1Summary = [
  { term: "Entry", detail: "Single entry" },
  { term: "Initial stay", detail: "Up to 60 days" },
  { term: "Extension", detail: "May be possible" },
];

export const c1Process = [
  {
    title: "Free consultation",
    text: "Tell us your nationality, travel purpose and plans.",
  },
  {
    title: "Eligibility assessment",
    text: "We review whether a C1 visa appears to suit your purpose under current rules.",
  },
  {
    title: "Document verification",
    text: "We check your documents for completeness before anything is submitted.",
  },
  {
    title: "Visa application submission",
    text: "The application is submitted through the official channel.",
  },
  {
    title: "Immigration processing",
    text: "Indonesian immigration authorities review the application.",
  },
  {
    title: "E-visa approval",
    text: "If the application is approved, the authorities issue the e-visa.",
  },
  {
    title: "Entry to Indonesia",
    text: "You travel and present your documents on arrival.",
  },
  {
    title: "Visa extension assistance",
    text: "If you need more time and are eligible, we can help you apply for an extension.",
  },
  {
    title: "Investor KITAS conversion assistance",
    text: "Where eligible and permitted, we can advise on moving to an Investor KITAS.",
  },
];

export const c1Documents = [
  "Passport with at least six months of validity",
  "Passport-size photo",
  "Flight itinerary",
  "Hotel booking or accommodation details",
  "Bank statement for the last six months",
  "Additional supporting documents, depending on nationality",
];

export const c1Faqs = [
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
];

/* ------------------------------------------------------------------ Investor KITAS */

export const investorKitasHelp = [
  {
    title: "Eligibility review",
    text: "We look at your planned investment and company structure against the current requirements.",
  },
  {
    title: "Company setup coordination",
    text: "If you still need a PT PMA, our business setup team can help establish it first.",
  },
  {
    title: "Document preparation",
    text: "We tell you what is needed and check your documents for completeness.",
  },
  {
    title: "Application and follow-up",
    text: "We support the application and keep you informed while the authorities process it.",
  },
  {
    title: "Extensions",
    text: "Where the rules allow, we can help when the permit is due for extension.",
  },
];

export const investorKitasPathway = [
  {
    title: "Plan the investment",
    text: "Agree the business activity, ownership and structure of your Indonesian company.",
  },
  {
    title: "Establish the PT PMA",
    text: "Set up the company and complete its business registration.",
  },
  {
    title: "Check eligibility",
    text: "Confirm that you and the company meet the Investor KITAS requirements in force.",
  },
  {
    title: "Apply",
    text: "Submit the application, which is then processed by the immigration authorities.",
  },
  {
    title: "Permit decision",
    text: "If approved, the permit is issued. Its validity and extension options follow current rules.",
  },
];

export const investorKitasFaqs = [
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
];

/* ------------------------------------------------------------------ Business setup */

export const businessSetupQuestions = [
  "What your business will do in Indonesia",
  "Whether the company will have foreign shareholders",
  "Where you plan to operate",
  "Your intended timeline",
  "Whether you or your team will need stay permits",
];

/* ------------------------------------------------------------------ Official sources */

export const officialSources = {
  immigration: {
    label: "Directorate General of Immigration",
    href: "https://www.imigrasi.go.id",
    note: "Official immigration information",
  },
  evisa: {
    label: "Indonesia e-Visa",
    href: "https://evisa.imigrasi.go.id",
    note: "Official visa application portal",
  },
  oss: {
    label: "OSS — Online Single Submission",
    href: "https://oss.go.id",
    note: "Official business licensing system",
  },
};
