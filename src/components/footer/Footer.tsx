"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { localePath } from "@/lib/i18n";
import { useDictionary } from "@/lib/dictionary-context";
import CookieSettingsButton from "@/components/cookie/CookieSettingsButton";

const serviceHrefs = [
  "/services",
  "/services",
  "/services",
  "/services",
  "/services",
];

const navigationItems = [
  { key: "home" as const, href: "/" },
  { key: "realisations" as const, href: "/realisations" },
  { key: "securite" as const, href: "/securite" },
  { key: "faq" as const, href: "/faq" },
  { key: "aPropos" as const, href: "/a-propos" },
  { key: "emploi" as const, href: "/emploi" },
];

export default function FooterSection() {
  const { dict, locale } = useDictionary();

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-orange-400" />

      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Logo + desc */}
          <div>
            <Link href={localePath("/", locale)} className="flex items-center gap-3 mb-6">
              <Image src="/images/Logo.png" alt={siteConfig.name} width={60} height={60} className="rounded" />
              <span className="font-black text-sm uppercase tracking-wider">
                Fragmentation<span className="text-orange-400"> M.R</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              {dict.common.footer.description}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/fragmentationmr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400 mb-6">{dict.common.footer.servicesTitle}</h3>
            <ul className="space-y-2.5">
              {dict.common.footer.serviceLinks.map((label, i) => (
                <li key={label}>
                  <Link href={localePath(serviceHrefs[i], locale)} className="text-white/50 text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-orange-400/50 flex-shrink-0" viewBox="0 0 8 8"><path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400 mb-6">{dict.common.footer.navigationTitle}</h3>
            <ul className="space-y-2.5">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <Link href={localePath(item.href, locale)} className="text-white/50 text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-orange-400/50 flex-shrink-0" viewBox="0 0 8 8"><path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                    {dict.common.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact -- diamond/hex border accent */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400 mb-6">{dict.common.footer.contactTitle}</h3>
            <div className="border-l-2 border-orange-400 pl-5 space-y-4">
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{dict.common.footer.phone}</p>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 font-bold text-lg hover:text-orange-300 transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{dict.common.footer.email}</p>
                <a href={`mailto:${siteConfig.email}`} className="text-white/60 text-sm hover:text-orange-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{dict.common.footer.hours}</p>
                <p className="text-white/50 text-sm">{dict.common.hoursValue}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{dict.common.footer.serviceArea}</p>
                <p className="text-white font-bold text-sm">{dict.common.footer.serviceAreaValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {dict.common.footer.copyright}
          </p>
          <div className="flex items-center gap-3 text-xs flex-wrap justify-center">
            <Link href={localePath("/politique-de-confidentialite", locale)} className="text-white/30 hover:text-orange-400 transition-colors">
              {dict.common.footer.privacy}
            </Link>
            <span className="text-white/15">|</span>
            <CookieSettingsButton />
            <span className="text-white/15">|</span>
            <span className="text-white/20">RBQ: {siteConfig.rbq}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
