"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";
import { services as servicesByLocale } from "@/data/services";
import { realisations as realisationsByLocale } from "@/data/realisations";

export default function DoubleHeader() {
  const { dict, locale } = useDictionary();
  const t = dict.common.nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);

  // Compute the path for the other locale
  const localServices = servicesByLocale[locale];
  const localRealisations = realisationsByLocale[locale];
  const otherLocale = locale === "fr" ? "en" : "fr";
  const pathWithoutLocale = locale === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const switchPath = otherLocale === "en" ? `/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}` : pathWithoutLocale;

  const mainNav = [
    { href: localePath("/", locale), label: t.home },
    { href: localePath("/services", locale), label: t.services, hasMega: true, megaKey: "services" },
    { href: localePath("/realisations", locale), label: t.realisations, hasMega: true, megaKey: "realisations" },
    { href: localePath("/securite", locale), label: t.securite },
    { href: localePath("/faq", locale), label: t.faq },
    { href: localePath("/a-propos", locale), label: t.aPropos },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className={`header-utility transition-all duration-300 ${scrolled ? "h-0 overflow-hidden py-0 opacity-0" : ""}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-orange-400 font-bold hover:text-orange-300 transition-colors"
              aria-label={`${dict.common.call} ${siteConfig.phone}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {siteConfig.phone}
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white/40 hidden sm:inline text-[11px]">RBQ: {siteConfig.rbq}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href={localePath("/emploi", locale)} className="hover:text-white transition-colors hidden sm:inline">{t.emploi}</Link>
            <Link href={localePath("/contact", locale)} className="hover:text-white transition-colors hidden sm:inline">{t.contact}</Link>
            <span className="nav-sep hidden sm:block" />
            <Link href={localePath("/soumission", locale)} className="btn-chevron-orange !py-1.5 !px-5 !text-[11px]">
              {t.soumission}
            </Link>
            {/* Language switcher */}
            <Link
              href={switchPath}
              className="text-[11px] hidden lg:inline ml-2 transition-colors"
            >
              <span className={locale === "fr" ? "text-orange-400 font-bold" : "text-white/40 hover:text-white"}>FR</span>
              <span className="text-white/30 mx-1">|</span>
              <span className={locale === "en" ? "text-orange-400 font-bold" : "text-white/40 hover:text-white"}>EN</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`header-main ${scrolled ? "solid" : "transparent"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={localePath("/", locale)} className="flex items-center gap-3 relative z-10">
            <Image src="/images/Logo.png" alt={siteConfig.name} width={120} height={120} className="rounded" priority />
            <span className="text-white font-black text-sm uppercase tracking-wider hidden md:inline">
              Fragmentation<span className="text-orange-400"> M.R</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNav.map((item, i) => (
              <div key={item.href} className="flex items-center">
                {i > 0 && <span className="nav-sep mx-1" />}
                <div
                  className="relative"
                  onMouseEnter={() => item.hasMega && setMegaOpen(item.megaKey ?? null)}
                  onMouseLeave={() => setMegaOpen(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-orange-400 text-xs font-bold uppercase tracking-wider px-3 py-2 transition-colors"
                  >
                    {item.label}
                    {item.hasMega && (
                      <svg className="w-3 h-3 inline ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>

                  {/* Mega dropdown — Services */}
                  {item.megaKey === "services" && (
                    <div className={`mega-dropdown ${megaOpen === "services" ? "open" : ""}`}>
                      <div className="p-6 grid grid-cols-2 gap-4">
                        {localServices.slice(0, 4).map((s) => (
                          <Link key={s.id} href={localePath("/services", locale)} className="flex gap-3 p-3 hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 bg-orange-400/10 flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div>
                              <p className="text-white text-xs font-bold group-hover:text-orange-400 transition-colors">{s.title}</p>
                              <p className="text-white/40 text-[11px] mt-0.5 line-clamp-2">{s.shortDesc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 p-4">
                        <Link href={localePath("/services", locale)} className="text-orange-400 text-xs font-bold uppercase tracking-wider hover:text-orange-300 transition-colors">
                          {dict.home.services.viewAll} &rarr;
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Mega dropdown — Réalisations */}
                  {item.megaKey === "realisations" && (
                    <div className={`mega-dropdown ${megaOpen === "realisations" ? "open" : ""}`}>
                      <div className="p-6 grid grid-cols-2 gap-4">
                        {localRealisations.slice(0, 4).map((r) => (
                          <Link key={r.id} href={localePath("/realisations", locale)} className="flex gap-3 p-3 hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 bg-white/5 overflow-hidden flex-shrink-0">
                              <Image src={r.image} alt={r.title} width={48} height={48} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-white text-xs font-bold group-hover:text-orange-400 transition-colors">{r.title}</p>
                              <p className="text-white/40 text-[11px] mt-0.5">{r.category} — {r.region}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 p-4">
                        <Link href={localePath("/realisations", locale)} className="text-orange-400 text-xs font-bold uppercase tracking-wider hover:text-orange-300 transition-colors">
                          {dict.home.projects.viewAll} &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href={localePath("/soumission", locale)} className="btn-chevron-orange !py-2 !px-6 !text-xs hidden lg:inline-flex">
              {t.soumissionGratuite}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label={dict.common.menu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — slide from right */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-navy-950 z-[60] transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 space-y-1">
          {[...mainNav, { href: localePath("/emploi", locale), label: t.emploi }, { href: localePath("/contact", locale), label: t.contact }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/80 hover:text-orange-400 py-3 text-sm font-bold uppercase tracking-wider border-b border-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <Link href={localePath("/soumission", locale)} onClick={() => setMobileOpen(false)} className="btn-chevron-orange w-full text-center">
              {t.soumissionGratuite}
            </Link>
          </div>
          <div className="pt-4 flex items-center justify-between">
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 font-bold text-sm">
              {siteConfig.phone}
            </a>
            <Link href={switchPath} onClick={() => setMobileOpen(false)} className="text-xs">
              <span className={locale === "fr" ? "text-orange-400 font-bold" : "text-white/40"}>FR</span>
              <span className="text-white/30 mx-1">|</span>
              <span className={locale === "en" ? "text-orange-400 font-bold" : "text-white/40"}>EN</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
