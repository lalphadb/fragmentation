import { dictFr } from "./fr";
import { dictEn } from "./en";
import type { Locale } from "@/lib/i18n";

/* Recursively widen all string literals to `string` so both
   dictionaries satisfy the same structural type. */
type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepString<U>[]
    : T extends object
      ? { [K in keyof T]: DeepString<T[K]> }
      : T;

export type Dictionary = DeepString<typeof dictFr>;

const dictionaries: Record<Locale, Dictionary> = {
  fr: dictFr as unknown as Dictionary,
  en: dictEn,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictFr;
}
