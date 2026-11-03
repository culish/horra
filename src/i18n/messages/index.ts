import type { Locale } from "../config";
import { en, type Messages } from "./en";
import { id } from "./id";
import { zh } from "./zh";
import { bn } from "./bn";

export type { Messages };
export const messages: Record<Locale, Messages> = { en, id, zh, bn };
