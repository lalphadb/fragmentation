export const CONSENT_KEY = "fmr-cookie-consent";
export const CONSENT_VERSION = "1.0";

export type CookieCategory = "essential" | "analytics" | "marketing";

export interface ConsentState {
  version: string;
  timestamp: string;
  categories: Record<CookieCategory, boolean>;
}

export const COOKIE_CATEGORIES: {
  id: CookieCategory;
  label: string;
  description: string;
  required: boolean;
}[] = [
  {
    id: "essential",
    label: "Cookies essentiels",
    description:
      "Nécessaires au fonctionnement du site. Ils permettent la navigation et les fonctions de base.",
    required: true,
  },
  {
    id: "analytics",
    label: "Cookies analytiques",
    description:
      "Nous aident à comprendre comment les visiteurs utilisent le site afin d'améliorer nos services.",
    required: false,
  },
  {
    id: "marketing",
    label: "Cookies marketing",
    description:
      "Utilisés pour le suivi publicitaire et l'affichage de contenus personnalisés.",
    required: false,
  },
];

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed: ConsentState = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(categories: Record<CookieCategory, boolean>): void {
  if (typeof window === "undefined") return;
  const state: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: { ...categories, essential: true },
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("consent-updated"));
}

export function hasConsent(category: CookieCategory): boolean {
  const consent = getConsent();
  if (!consent) return category === "essential";
  return consent.categories[category] ?? false;
}

export function acceptAll(): void {
  setConsent({ essential: true, analytics: true, marketing: true });
}

export function refuseAll(): void {
  setConsent({ essential: true, analytics: false, marketing: false });
}

export function revokeConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent("consent-updated"));
}
