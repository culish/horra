/**
 * Inquiry form schema + validation, shared by the client form and the /api/inquiry route
 * so both sides enforce exactly the same rules.
 */

import { getCategory, productNames } from "@/content/trading";
import { travelServices } from "@/content/travel";

export type InquiryVariant = "general" | "visa" | "business-setup" | "trading" | "travel";

export type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "radio" | "checkbox";

export type FieldOption = { value: string; label: string };

export type FieldDef = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
  autoComplete?: string;
  hint?: string;
  maxLength?: number;
  rows?: number;
  /** Takes half the row on wider screens */
  half?: boolean;
  /** Message shown when a required field is left empty */
  requiredMessage?: string;
};

const opt = (labels: string[]): FieldOption[] => labels.map((label) => ({ value: slug(label), label }));

export function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const nameField: FieldDef = {
  name: "fullName",
  label: "Full name",
  type: "text",
  required: true,
  autoComplete: "name",
  maxLength: 120,
  half: true,
};
const emailField: FieldDef = {
  name: "email",
  label: "Email",
  type: "email",
  required: true,
  requiredMessage: "Enter your email address.",
  autoComplete: "email",
  maxLength: 200,
  half: true,
};
const phoneField: FieldDef = {
  name: "phone",
  label: "Phone or WhatsApp",
  type: "tel",
  autoComplete: "tel",
  hint: "Include your country code.",
  maxLength: 40,
  half: true,
};
const consentField: FieldDef = {
  name: "consent",
  label:
    "I agree that Horra Prime Group may use these details to respond to my inquiry, as described in the privacy policy.",
  type: "checkbox",
  required: true,
};

export const topicOptions = opt([
  "Visa & Immigration",
  "Business Setup",
  "International Trading",
  "Tours & Travel",
  "Something else",
]);

export const visaServiceOptions: FieldOption[] = [
  { value: "tourist-visa", label: "Tourist Visa (C1)" },
  { value: "business-visa", label: "Business Visa" },
  { value: "investor-kitas", label: "Investor KITAS" },
  { value: "visa-extension", label: "Visa Extension" },
  { value: "work-visa", label: "Work Visa" },
  { value: "family-kitas", label: "Family KITAS" },
  { value: "not-sure", label: "Not sure yet" },
];

export const setupServiceOptions: FieldOption[] = [
  { value: "pt-pma", label: "PT PMA Setup" },
  { value: "local-pt", label: "Local PT Setup" },
  { value: "nib-oss", label: "NIB & OSS" },
  { value: "virtual-office", label: "Virtual Office" },
  { value: "not-sure", label: "Not sure yet" },
];

export function getFields(variant: InquiryVariant, context?: string): FieldDef[] {
  switch (variant) {
    case "visa":
      return [
        nameField,
        emailField,
        {
          name: "service",
          label: "What do you need help with?",
          type: "select",
          required: true,
          options: visaServiceOptions,
          half: true,
        },
        {
          name: "nationality",
          label: "Nationality",
          type: "text",
          required: true,
          autoComplete: "country-name",
          hint: "As shown on your passport.",
          maxLength: 80,
          half: true,
        },
        {
          name: "purpose",
          label: "Purpose of your stay",
          type: "select",
          required: true,
          options: opt([
            "Tourism",
            "Visiting family or friends",
            "Attending an exhibition or event",
            "Business visit (no employment)",
            "Investment or company setup",
            "Work",
            "Something else",
          ]),
          half: true,
        },
        {
          name: "arrival",
          label: "Planned arrival",
          type: "text",
          hint: "An approximate month is fine.",
          maxLength: 80,
          half: true,
        },
        phoneField,
        {
          name: "message",
          label: "Anything else we should know?",
          type: "textarea",
          rows: 4,
          maxLength: 3000,
        },
        consentField,
      ];

    case "business-setup":
      return [
        nameField,
        emailField,
        {
          name: "service",
          label: "Service",
          type: "select",
          required: true,
          options: setupServiceOptions,
          half: true,
        },
        {
          name: "country",
          label: "Your country",
          type: "text",
          autoComplete: "country-name",
          maxLength: 80,
          half: true,
        },
        {
          name: "objective",
          label: "What do you want to set up in Indonesia?",
          type: "textarea",
          required: true,
          requiredMessage: "Describe what you want to set up.",
          rows: 4,
          hint: "For example: the business activity, who the shareholders will be, and your timeline.",
          maxLength: 3000,
        },
        {
          name: "contactMethod",
          label: "Preferred contact method",
          type: "radio",
          required: true,
          options: opt(["Email", "Phone", "WhatsApp"]),
        },
        phoneField,
        consentField,
      ];

    case "trading": {
      const category = context ? getCategory(context) : undefined;
      const products = category ? productNames(category) : [];
      const productField: FieldDef = products.length
        ? {
            name: "product",
            label: "Product of interest",
            type: "select",
            required: true,
            options: [...opt(products), { value: "other", label: "Other / not listed" }],
            half: true,
          }
        : {
            name: "product",
            label: "Product of interest",
            type: "text",
            required: true,
            requiredMessage: "Enter the product you are interested in.",
            maxLength: 160,
            half: true,
          };
      return [
        nameField,
        {
          name: "company",
          label: "Company",
          type: "text",
          required: true,
          requiredMessage: "Enter your company name.",
          autoComplete: "organization",
          maxLength: 160,
          half: true,
        },
        {
          name: "country",
          label: "Country",
          type: "text",
          required: true,
          autoComplete: "country-name",
          maxLength: 80,
          half: true,
        },
        productField,
        {
          name: "quantity",
          label: "Estimated requirement",
          type: "text",
          hint: "For example, volume and frequency.",
          maxLength: 160,
          half: true,
        },
        emailField,
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          requiredMessage: "Enter a message about your requirement.",
          rows: 5,
          hint: "Specifications, destination port, packing or anything else that matters.",
          maxLength: 3000,
        },
        phoneField,
        consentField,
      ];
    }

    case "travel":
      return [
        nameField,
        emailField,
        {
          name: "service",
          label: "Service",
          type: "select",
          required: true,
          options: [
            ...travelServices.map((s) => ({ value: s.id, label: s.name })),
            { value: "combination", label: "A combination of these" },
          ],
          half: true,
        },
        {
          name: "dates",
          label: "Travel dates",
          type: "text",
          hint: "Approximate is fine.",
          maxLength: 80,
          half: true,
        },
        {
          name: "travellers",
          label: "Number of travellers",
          type: "text",
          maxLength: 40,
          half: true,
        },
        {
          name: "destination",
          label: "Destinations",
          type: "text",
          hint: "Where in Indonesia would you like to go?",
          maxLength: 160,
          half: true,
        },
        {
          name: "message",
          label: "Tell us about your trip",
          type: "textarea",
          required: true,
          requiredMessage: "Tell us a little about your trip.",
          rows: 4,
          maxLength: 3000,
        },
        phoneField,
        consentField,
      ];

    case "general":
    default:
      return [
        nameField,
        emailField,
        {
          name: "topic",
          label: "Topic",
          type: "select",
          required: true,
          options: topicOptions,
          half: true,
        },
        {
          name: "country",
          label: "Country",
          type: "text",
          autoComplete: "country-name",
          maxLength: 80,
          half: true,
        },
        {
          name: "message",
          label: "How can we help?",
          type: "textarea",
          required: true,
          requiredMessage: "Tell us how we can help.",
          rows: 5,
          maxLength: 3000,
        },
        phoneField,
        consentField,
      ];
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type InquiryValues = Record<string, string>;
export type InquiryErrors = Record<string, string>;

export function validateField(field: FieldDef, raw: string | undefined): string | undefined {
  const value = (raw ?? "").trim();
  const label = field.label.replace(/\?$/, "");

  if (field.type === "checkbox") {
    return field.required && value !== "yes" ? "Please confirm to continue." : undefined;
  }
  if (!value) {
    if (!field.required) return undefined;
    if (field.requiredMessage) return field.requiredMessage;
    if (field.type === "select" || field.type === "radio") return `Choose an option for “${label}”.`;
    return `Enter your ${label.toLowerCase()}.`;
  }
  if (field.maxLength && value.length > field.maxLength) {
    return `Keep this under ${field.maxLength} characters.`;
  }
  if (field.type === "email" && !EMAIL_RE.test(value)) {
    return "Enter an email address in the format name@example.com.";
  }
  if (field.type === "tel") {
    const digits = value.replace(/\D/g, "");
    if (!/^[+\d\s().-]+$/.test(value) || digits.length < 6 || digits.length > 18) {
      return "Enter a phone number using digits, spaces and an optional + country code.";
    }
  }
  if ((field.type === "select" || field.type === "radio") && field.options) {
    if (!field.options.some((o) => o.value === value)) return "Choose one of the listed options.";
  }
  return undefined;
}

export function validateInquiry(fields: FieldDef[], values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};
  for (const f of fields) {
    const e = validateField(f, values[f.name]);
    if (e) errors[f.name] = e;
  }
  return errors;
}

export const isVariant = (v: unknown): v is InquiryVariant =>
  v === "general" || v === "visa" || v === "business-setup" || v === "trading" || v === "travel";
