import type { Messages } from "@/i18n/messages";

/**
 * Business Consulting structure: Visa & Immigration and Business Setup.
 * Copy lives in the dictionaries (services.visa / services.setup). Immigration details describe
 * how the company presents its services — they are NOT a statement of current law.
 */

export type VisaServiceId = keyof Messages["services"]["visa"];
export type SetupServiceId = keyof Messages["services"]["setup"];

export const visaServices: { id: VisaServiceId; href: string }[] = [
  { id: "tourist-visa", href: "/visa-immigration/c1-tourist-visa" },
  { id: "business-visa", href: "/visa-immigration/apply?visa=c2" },
  { id: "investor-kitas", href: "/visa-immigration/investor-kitas" },
  { id: "visa-extension", href: "/visa-immigration/apply?visa=c-ext" },
  { id: "work-visa", href: "/visa-immigration?service=work-visa#inquiry" },
  { id: "family-kitas", href: "/visa-immigration/apply?visa=e31" },
];

export const businessSetupServices: { id: SetupServiceId; href: string }[] = [
  { id: "pt-pma", href: "/business-setup#pt-pma" },
  { id: "local-pt", href: "/business-setup#local-pt" },
  { id: "nib-oss", href: "/business-setup#nib-oss" },
  { id: "virtual-office", href: "/business-setup#virtual-office" },
];

export const officialSources = {
  immigration: "https://www.imigrasi.go.id",
  evisa: "https://evisa.imigrasi.go.id",
  oss: "https://oss.go.id",
} as const;

export type SourceKey = keyof typeof officialSources;

export const sources = (t: Messages, keys: SourceKey[]) =>
  keys.map((k) => ({ href: officialSources[k], ...t.common.sources[k] }));
