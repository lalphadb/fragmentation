export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";
export const locales: Locale[] = ["fr", "en"];

export function isValidLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isValidLocale(segments[0])) {
    return segments[0];
  }
  return defaultLocale;
}

export function localePath(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href;
  if (href === "/") return "/en";
  return `/en${href}`;
}
