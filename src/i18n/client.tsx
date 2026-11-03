"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Messages } from "./messages";

/** The parts of the dictionary that Client Components need. */
export type ClientMessages = Pick<Messages, "common" | "nav" | "form" | "pay" | "apply"> & {
  products: Messages["trading"]["products"];
};


const Ctx = createContext<{ locale: Locale; t: ClientMessages } | null>(null);

export function I18nProvider({ locale, t, children }: { locale: Locale; t: ClientMessages; children: ReactNode }) {
  return <Ctx.Provider value={{ locale, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used inside <I18nProvider>");
  return v;
}

export { fmt } from "@/lib/fmt";
