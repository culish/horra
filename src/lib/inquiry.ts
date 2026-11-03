/**
 * Inquiry form schema + validation, shared by the client form and the /api/inquiry route
 * so both sides enforce exactly the same rules. Labels and messages come from the dictionary
 * of the visitor's language; option values are stable slugs in every language.
 */

import type { Messages } from "@/i18n/messages";
import { en } from "@/i18n/messages/en";
import { fmt } from "@/lib/fmt";
import { getCategory, productList } from "@/content/trading";
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

type FormT = Messages["form"];
type ProductNames = Messages["trading"]["products"];

const opts = (labels: Record<string, string>): FieldOption[] =>
  Object.entries(labels).map(([value, label]) => ({ value, label }));

export function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getFields(
  variant: InquiryVariant,
  context: string | undefined,
  f: FormT = en.form,
  products: ProductNames = en.trading.products,
): FieldDef[] {
  const L = f.fields;
  const O = f.options;
  const nameField: FieldDef = {
    name: "fullName",
    label: L.fullName,
    type: "text",
    required: true,
    autoComplete: "name",
    maxLength: 120,
    half: true,
  };
  const emailField: FieldDef = {
    name: "email",
    label: L.email,
    type: "email",
    required: true,
    requiredMessage: L.emailRequired,
    autoComplete: "email",
    maxLength: 200,
    half: true,
  };
  const phoneField: FieldDef = {
    name: "phone",
    label: L.phone,
    type: "tel",
    autoComplete: "tel",
    hint: L.phoneHint,
    maxLength: 40,
    half: true,
  };
  const consentField: FieldDef = { name: "consent", label: L.consent, type: "checkbox", required: true };

  switch (variant) {
    case "visa":
      return [
        nameField,
        emailField,
        {
          name: "service",
          label: L.visaService,
          type: "select",
          required: true,
          options: opts(O.visaServices),
          half: true,
        },
        {
          name: "nationality",
          label: L.nationality,
          type: "text",
          required: true,
          autoComplete: "country-name",
          hint: L.nationalityHint,
          maxLength: 80,
          half: true,
        },
        {
          name: "purpose",
          label: L.purpose,
          type: "select",
          required: true,
          options: opts(O.purposes),
          half: true,
        },
        {
          name: "arrival",
          label: L.arrival,
          type: "text",
          hint: L.arrivalHint,
          maxLength: 80,
          half: true,
        },
        phoneField,
        {
          name: "message",
          label: L.anythingElse,
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
          label: L.service,
          type: "select",
          required: true,
          options: opts(O.setupServices),
          half: true,
        },
        {
          name: "country",
          label: L.yourCountry,
          type: "text",
          autoComplete: "country-name",
          maxLength: 80,
          half: true,
        },
        {
          name: "objective",
          label: L.objective,
          type: "textarea",
          required: true,
          requiredMessage: L.objectiveRequired,
          rows: 4,
          hint: L.objectiveHint,
          maxLength: 3000,
        },
        {
          name: "contactMethod",
          label: L.contactMethod,
          type: "radio",
          required: true,
          options: opts(O.contactMethods),
        },
        phoneField,
        consentField,
      ];

    case "trading": {
      const category = context ? getCategory(context) : undefined;
      const items = category ? productList(category) : [];
      const productField: FieldDef = items.length
        ? {
            name: "product",
            label: L.product,
            type: "select",
            required: true,
            options: [
              ...items.map((p) => ({ value: p.id, label: p.code ? `${products[p.id]} (${p.code})` : products[p.id] })),
              { value: "other", label: O.otherProduct },
            ],
            half: true,
          }
        : {
            name: "product",
            label: L.product,
            type: "text",
            required: true,
            requiredMessage: L.productRequired,
            maxLength: 160,
            half: true,
          };
      return [
        nameField,
        {
          name: "company",
          label: L.company,
          type: "text",
          required: true,
          requiredMessage: L.companyRequired,
          autoComplete: "organization",
          maxLength: 160,
          half: true,
        },
        {
          name: "country",
          label: L.country,
          type: "text",
          required: true,
          autoComplete: "country-name",
          maxLength: 80,
          half: true,
        },
        productField,
        {
          name: "quantity",
          label: L.quantity,
          type: "text",
          hint: L.quantityHint,
          maxLength: 160,
          half: true,
        },
        emailField,
        {
          name: "message",
          label: L.message,
          type: "textarea",
          required: true,
          requiredMessage: L.messageRequired,
          rows: 5,
          hint: L.messageHint,
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
          label: L.service,
          type: "select",
          required: true,
          options: [
            ...travelServices.map((s) => ({ value: s.id, label: O.travelServices[s.id] })),
            { value: "combination", label: O.travelServices.combination },
          ],
          half: true,
        },
        {
          name: "dates",
          label: L.dates,
          type: "text",
          hint: L.datesHint,
          maxLength: 80,
          half: true,
        },
        {
          name: "travellers",
          label: L.travellers,
          type: "text",
          maxLength: 40,
          half: true,
        },
        {
          name: "destination",
          label: L.destination,
          type: "text",
          hint: L.destinationHint,
          maxLength: 160,
          half: true,
        },
        {
          name: "message",
          label: L.trip,
          type: "textarea",
          required: true,
          requiredMessage: L.tripRequired,
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
          label: L.topic,
          type: "select",
          required: true,
          options: opts(O.topics),
          half: true,
        },
        {
          name: "country",
          label: L.country,
          type: "text",
          autoComplete: "country-name",
          maxLength: 80,
          half: true,
        },
        {
          name: "message",
          label: L.help,
          type: "textarea",
          required: true,
          requiredMessage: L.helpRequired,
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

export function validateField(
  field: FieldDef,
  raw: string | undefined,
  v: FormT["validation"] = en.form.validation,
): string | undefined {
  const value = (raw ?? "").trim();
  const label = field.label.replace(/\?$/, "");

  if (field.type === "checkbox") {
    return field.required && value !== "yes" ? v.confirm : undefined;
  }
  if (!value) {
    if (!field.required) return undefined;
    if (field.requiredMessage) return field.requiredMessage;
    if (field.type === "select" || field.type === "radio") return fmt(v.choose, { label });
    return fmt(v.enter, { label: label.toLowerCase() });
  }
  if (field.maxLength && value.length > field.maxLength) {
    return fmt(v.tooLong, { max: field.maxLength });
  }
  if (field.type === "email" && !EMAIL_RE.test(value)) {
    return v.email;
  }
  if (field.type === "tel") {
    const digits = value.replace(/\D/g, "");
    if (!/^[+\d\s().-]+$/.test(value) || digits.length < 6 || digits.length > 18) {
      return v.phone;
    }
  }
  if ((field.type === "select" || field.type === "radio") && field.options) {
    if (!field.options.some((o) => o.value === value)) return v.listed;
  }
  return undefined;
}

export function validateInquiry(
  fields: FieldDef[],
  values: InquiryValues,
  v: FormT["validation"] = en.form.validation,
): InquiryErrors {
  const errors: InquiryErrors = {};
  for (const f of fields) {
    const e = validateField(f, values[f.name], v);
    if (e) errors[f.name] = e;
  }
  return errors;
}

export const isVariant = (v: unknown): v is InquiryVariant =>
  v === "general" || v === "visa" || v === "business-setup" || v === "trading" || v === "travel";
