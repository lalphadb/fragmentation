"use client";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-preferences"))}
      className="text-white/30 text-xs hover:text-orange-400 transition-colors"
    >
      Paramètres cookies
    </button>
  );
}
