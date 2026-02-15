"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg overflow-hidden shadow-md border-2 border-orange-400">
            <img src="/images/Logo.png" alt={siteConfig.name} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block">
            <span className={`font-black text-sm leading-none block tracking-tight transition-colors duration-300 ${scrolled ? "text-navy-900" : "text-white"}`}>
              {siteConfig.name}
            </span>
            <span className={`text-[10px] mt-0.5 block uppercase tracking-widest transition-colors duration-300 ${scrolled ? "text-navy-400" : "text-white/60"}`}>
              Forage &bull; Dynamitage
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                scrolled
                  ? "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className={`text-xs font-bold transition-colors duration-300 ${scrolled ? "text-navy-500" : "text-white/70"}`}
            >
              {siteConfig.phone}
            </a>
            <Link href="/soumission" className="btn-chevron-orange !py-2.5 !px-6 !text-xs">
              Soumission
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2.5 rounded-md transition-colors ${scrolled ? "text-navy-600 hover:bg-navy-50" : "text-white hover:bg-white/10"}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu -- slide from right */}
      <div className={`lg:hidden fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-navy-950 transform transition-transform duration-300 ease-in-out z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-white font-black text-sm">{siteConfig.name}</span>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/70 hover:text-white hover:bg-white/5 py-3 px-4 rounded-md transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="block text-orange-400 font-bold text-lg">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="block text-white/50 text-sm">{siteConfig.email}</a>
            <span className="block text-white/30 text-xs">RBQ : {siteConfig.rbq}</span>
            <Link href="/soumission" onClick={() => setOpen(false)} className="btn-chevron-orange w-full mt-4">
              Soumission gratuite
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
      )}
    </header>
  );
}
