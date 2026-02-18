"use client";

import Link from "next/link";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";
import CookiePreferences from "./CookiePreferences";

export default function CookieBanner() {
  const { dict, locale } = useDictionary();
  const {
    consent,
    showBanner,
    acceptAll,
    refuseAll,
    updateCategories,
    preferencesOpen,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  const t = dict.common.cookie;

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[45] animate-slide-up"
          role="dialog"
          aria-label={t.bannerAriaLabel}
          aria-live="polite"
        >
          {/* Orange top accent */}
          <div className="h-1 bg-orange-400" />

          <div className="bg-navy-950">
            <div className="container mx-auto px-6 py-5">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t.bannerText}
                    {" "}
                    <Link href={localePath("/politique-de-confidentialite", locale)} className="text-orange-400 hover:text-orange-300 underline">
                      {t.bannerLink}
                    </Link>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                  <button
                    onClick={acceptAll}
                    className="btn-flat bg-orange-400 text-navy-950 hover:bg-orange-300 px-6 py-2.5 text-xs"
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    onClick={openPreferences}
                    className="btn-flat border border-white/20 text-white hover:bg-white/10 px-6 py-2.5 text-xs"
                  >
                    {t.customize}
                  </button>
                  <button
                    onClick={refuseAll}
                    className="text-white/40 text-xs hover:text-orange-400 transition-colors py-2"
                  >
                    {t.refuseAll}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences modal — available even after banner dismissed (via footer link) */}
      <CookiePreferences
        open={preferencesOpen}
        onClose={closePreferences}
        onSave={(cats) => {
          updateCategories(cats);
          closePreferences();
        }}
        onRefuseAll={() => {
          refuseAll();
          closePreferences();
        }}
        currentCategories={consent?.categories}
      />
    </>
  );
}
