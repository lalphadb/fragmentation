"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getConsent,
  setConsent,
  acceptAll as doAcceptAll,
  refuseAll as doRefuseAll,
  type ConsentState,
  type CookieCategory,
} from "@/lib/cookie-consent";

export function useCookieConsent() {
  const [consent, setConsentState] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    setConsentState(getConsent());
    setHydrated(true);

    const onUpdate = () => setConsentState(getConsent());
    window.addEventListener("consent-updated", onUpdate);

    const onOpenPrefs = () => setPreferencesOpen(true);
    window.addEventListener("open-cookie-preferences", onOpenPrefs);

    return () => {
      window.removeEventListener("consent-updated", onUpdate);
      window.removeEventListener("open-cookie-preferences", onOpenPrefs);
    };
  }, []);

  const acceptAll = useCallback(() => {
    doAcceptAll();
    setConsentState(getConsent());
  }, []);

  const refuseAll = useCallback(() => {
    doRefuseAll();
    setConsentState(getConsent());
  }, []);

  const updateCategories = useCallback(
    (categories: Record<CookieCategory, boolean>) => {
      setConsent(categories);
      setConsentState(getConsent());
    },
    []
  );

  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  return {
    consent,
    showBanner: hydrated && consent === null,
    acceptAll,
    refuseAll,
    updateCategories,
    preferencesOpen,
    openPreferences,
    closePreferences,
  };
}
