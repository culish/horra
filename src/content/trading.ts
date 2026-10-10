/**
 * International Trading categories.
 *
 * Product lists come from the company profile. For categories the profile names without a
 * product list, `groups` is empty and the page shows a "range confirmed on request" state —
 * do not invent a catalogue. No specifications, grades, certifications, origins, prices,
 * MOQs or shipping terms are stated anywhere: they are confirmed per inquiry.
 */

export type CategoryIcon = "spices" | "palm" | "coffee" | "coconut" | "petrochemical" | "coal" | "seafood" | "minerals";

export type Product = { name: string; code?: string };

export type TradingCategory = {
  slug: string;
  name: string;
  icon: CategoryIcon;
  summary: string;
  intro: string;
  groups: { label?: string; items: Product[] }[];
};

export const tradingCategories: TradingCategory[] = [
  {
    slug: "spices-herbs",
    name: "Spices & Herbs",
    icon: "spices",
    summary: "Ginger, cinnamon, black pepper, cloves, nutmeg and more.",
    intro:
      "Indonesia's spice trade goes back centuries. We handle buyer inquiries for the spices below and confirm grade, origin, packing and availability for each request.",
    groups: [
      {
        items: [
          { name: "Ginger" },
          { name: "Cinnamon" },
          { name: "Black Pepper" },
          { name: "Cloves" },
          { name: "Star Anise" },
          { name: "Nutmeg" },
          { name: "Mace" },
          { name: "Cardamom" },
        ],
      },
    ],
  },
  {
    slug: "palm-oil",
    name: "Palm Oil Products",
    icon: "palm",
    summary: "Crude and refined palm oil, palm kernel products and by-products.",
    intro:
      "Inquiries for crude and refined palm oil, palm kernel products and by-products. Specifications, quality parameters and trade terms are agreed for each inquiry.",
    groups: [
      {
        label: "Palm oil",
        items: [
          { name: "Crude Palm Oil", code: "CPO" },
          { name: "Refined Palm Oil", code: "RPO" },
          { name: "RBD Palm Olein" },
          { name: "RBD Palm Stearin" },
        ],
      },
      {
        label: "Palm kernel",
        items: [
          { name: "Palm Kernel Oil", code: "PKO" },
          { name: "Palm Kernel Expeller", code: "PKE" },
          { name: "Palm Kernel Shell", code: "PKS" },
        ],
      },
      {
        label: "By-products",
        items: [
          { name: "Palm Fatty Acid Distillate", code: "PFAD" },
          { name: "Palm Acid Oil", code: "PAO" },
          { name: "Palm Oil Mill Effluent", code: "POME" },
        ],
      },
    ],
  },
  {
    slug: "coffee-cocoa",
    name: "Coffee & Cocoa",
    icon: "coffee",
    summary: "Green and roasted coffee, cocoa beans and processed cocoa products.",
    intro:
      "Coffee in green, roasted and ground forms, and cocoa from beans to butter, liquor and cake. Tell us your intended use and we will confirm what can be supplied.",
    groups: [
      {
        label: "Coffee",
        items: [
          { name: "Arabica Coffee Beans" },
          { name: "Robusta Coffee Beans" },
          { name: "Green Coffee Beans" },
          { name: "Roasted Coffee Beans" },
          { name: "Ground Coffee" },
        ],
      },
      {
        label: "Cocoa",
        items: [
          { name: "Cocoa Beans" },
          { name: "Cocoa Powder" },
          { name: "Cocoa Butter" },
          { name: "Cocoa Liquor (Cocoa Mass)" },
          { name: "Cocoa Cake" },
        ],
      },
    ],
  },
  {
    slug: "coconut",
    name: "Coconut Products",
    icon: "coconut",
    summary: "Product range confirmed on request.",
    intro:
      "Inquiries for coconut-based products. Our detailed range for this category is being finalised — tell us what you are looking for and we will confirm what we can offer.",
    groups: [],
  },
  {
    slug: "petrochemical",
    name: "Petrochemical Products",
    icon: "petrochemical",
    summary: "Product range confirmed on request.",
    intro:
      "Inquiries for petrochemical products. Our detailed range for this category is being finalised — share your specification and we will confirm what we can offer.",
    groups: [],
  },
  {
    slug: "coal-minerals",
    name: "Coal & Minerals",
    icon: "coal",
    summary: "Product range confirmed on request.",
    intro:
      "Inquiries for coal and mineral products. Our detailed range for this category is being finalised — share your requirement and we will confirm what we can offer.",
    groups: [],
  },
  {
    slug: "seafood-marine",
    name: "Seafood & Marine Products",
    icon: "seafood",
    summary: "Product range confirmed on request.",
    intro:
      "Inquiries for seafood and marine products. Our detailed range for this category is being finalised — tell us what you need and we will confirm what we can offer.",
    groups: [],
  },
  {
    slug: "minerals",
    name: "Minerals",
    icon: "minerals",
    summary: "Product range confirmed on request.",
    intro:
      "Inquiries for mineral products. Our detailed range for this category is being finalised — share your specification and we will confirm what we can offer.",
    groups: [],
  },
];

export const getCategory = (slug: string) => tradingCategories.find((c) => c.slug === slug);

export const productNames = (c: TradingCategory) =>
  c.groups.flatMap((g) => g.items.map((p) => (p.code ? `${p.name} (${p.code})` : p.name)));

export const productCount = (c: TradingCategory) => c.groups.reduce((n, g) => n + g.items.length, 0);

export const tradeProcess = [
  {
    title: "Send a product inquiry",
    text: "Tell us the product, destination and the volume you have in mind.",
  },
  {
    title: "Discuss requirements",
    text: "We clarify specifications, packing, documentation and delivery needs.",
  },
  {
    title: "Confirm availability and terms",
    text: "Availability, specifications, pricing and shipping terms are confirmed for your inquiry.",
  },
  {
    title: "Agree next steps",
    text: "You receive a proposal and decide how to proceed.",
  },
  {
    title: "Ongoing coordination",
    text: "We stay in contact as the order moves forward.",
  },
];
