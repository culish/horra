import { lang } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "./config";
import { messages, type Messages } from "./messages";
import type { ClientMessages } from "./client";

/** The locale of the current route (from the [lang] root segment). Server Components only. */
export async function getLocale(): Promise<Locale> {
  const l = await lang();
  return isLocale(l) ? l : defaultLocale;
}

/** The dictionary for the current route. */
export async function getT(): Promise<Messages> {
  return messages[await getLocale()];
}

export const getMessagesFor = (locale: Locale): Messages => messages[locale];

/** The parts of the dictionary sent to Client Components (see I18nProvider). */
export const pickClientMessages = (t: Messages): ClientMessages => ({
  common: t.common,
  nav: t.nav,
  form: t.form,
  pay: t.pay,
  apply: t.apply,
  products: t.trading.products,
});
