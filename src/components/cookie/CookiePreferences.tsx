"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { COOKIE_CATEGORIES, type CookieCategory } from "@/lib/cookie-consent";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (categories: Record<CookieCategory, boolean>) => void;
  onRefuseAll: () => void;
  currentCategories?: Record<CookieCategory, boolean>;
}

export default function CookiePreferences({ open, onClose, onSave, onRefuseAll, currentCategories }: Props) {
  const [categories, setCategories] = useState<Record<CookieCategory, boolean>>({
    essential: true,
    analytics: currentCategories?.analytics ?? false,
    marketing: currentCategories?.marketing ?? false,
  });

  useEffect(() => {
    if (open && currentCategories) {
      setCategories({ ...currentCategories, essential: true });
    }
  }, [open, currentCategories]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const toggle = useCallback((id: CookieCategory) => {
    setCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Paramètres des cookies">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Orange top accent */}
        <div className="h-1 bg-orange-400" />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-navy-950">Paramètres des cookies</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-navy-400 hover:text-navy-900 transition-colors"
              aria-label="Fermer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-navy-500 text-sm leading-relaxed mb-6">
            Choisissez les catégories de cookies que vous acceptez. Les cookies essentiels sont toujours actifs car ils sont nécessaires au fonctionnement du site.
          </p>

          {/* Categories */}
          <div className="space-y-3 mb-8">
            {COOKIE_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-navy-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-navy-900 text-sm">{cat.label}</p>
                    <p className="text-navy-500 text-xs mt-1 leading-relaxed">{cat.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {cat.required ? (
                      <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-1 uppercase tracking-wider">
                        Toujours actif
                      </span>
                    ) : (
                      <button
                        className="cookie-toggle"
                        data-checked={categories[cat.id]}
                        data-disabled={false}
                        onClick={() => toggle(cat.id)}
                        role="switch"
                        aria-checked={categories[cat.id]}
                        aria-label={cat.label}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={() => onSave(categories)}
              className="w-full btn-flat bg-orange-400 text-navy-950 hover:bg-orange-300 py-3"
            >
              Enregistrer mes choix
            </button>
            <button
              onClick={onRefuseAll}
              className="w-full text-center text-navy-400 text-sm hover:text-orange-400 transition-colors py-2"
            >
              Tout refuser
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-100">
            <Link
              href="/politique-de-confidentialite"
              className="text-orange-400 text-xs hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              Voir notre politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
