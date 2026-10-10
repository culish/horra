/**
 * Company-level copy shared across pages. Only supportable positioning is used here —
 * no rankings, awards, client counts, years in business or guaranteed outcomes.
 */

export const featuredServices = [
  {
    id: "visa",
    name: "Visa & Immigration",
    text: "Tourist and business visas, Investor and Family KITAS, extensions and work permits.",
    href: "/visa-immigration",
    icon: "visa",
  },
  {
    id: "setup",
    name: "Business Setup",
    text: "PT PMA and local PT establishment, NIB registration through OSS, and virtual offices.",
    href: "/business-setup",
    icon: "setup",
  },
  {
    id: "trading",
    name: "Commodity Trading",
    text: "Inquiries for Indonesian spices, palm oil products, coffee, cocoa, coconut, minerals and more.",
    href: "/international-trading",
    icon: "trading",
  },
  {
    id: "travel",
    name: "Ticket, Hotel & Tour Assistance",
    text: "Flights, hotels, tour packages, airport transfers and travel guidance.",
    href: "/tours-travel",
    icon: "travel",
  },
] as const;

export const principles = [
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
];

export const generalProcess = [
  { title: "Send an inquiry", text: "Use the form to tell us what you need." },
  { title: "Initial consultation", text: "We discuss your goals, timing and any constraints." },
  {
    title: "Requirements review",
    text: "We identify the documents, information or specifications involved.",
  },
  { title: "Proposal and next steps", text: "You receive a proposed approach and how to proceed." },
  { title: "Ongoing assistance", text: "We stay in contact as your request progresses." },
];
