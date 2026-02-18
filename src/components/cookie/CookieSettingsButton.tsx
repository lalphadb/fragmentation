"use client";

import { useDictionary } from "@/lib/dictionary-context";

export default function CookieSettingsButton() {
  const { dict } = useDictionary();

  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-preferences"))}
      className="text-white/30 text-xs hover:text-orange-400 transition-colors"
    >
      {dict.common.cookie.settingsButton}
    </button>
  );
}
