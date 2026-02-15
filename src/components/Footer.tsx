import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-400 relative overflow-hidden">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-14 overflow-hidden border-2 border-orange-400">
                <img src="/images/logo.jpg" alt={siteConfig.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-black text-white text-sm tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Experts en forage, dynamitage et fragmentation de roc. Service professionnel partout au Québec.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xs bg-white/5 px-4 py-2 inline-block">
                <span className="text-navy-500">RBQ</span> <span className="text-white font-semibold ml-1">{siteConfig.rbq}</span>
              </span>
              <span className="text-xs text-navy-500">{siteConfig.insurance}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-7 bg-orange-400 flex items-center justify-center text-[8px] text-white font-black">S</span>
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {["Dynamitage résidentiel", "Dynamitage industriel", "Forage spécialisé", "Fragmentation mécanique", "Prédécoupage & ancrage"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-orange-400/50" viewBox="0 0 12 12" fill="none"><path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="1.5" /></svg>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-7 bg-navy-700 flex items-center justify-center text-[8px] text-white font-black">N</span>
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-navy-600" viewBox="0 0 12 12" fill="none"><path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="1.5" /></svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-7 bg-orange-400 flex items-center justify-center text-[8px] text-white font-black">C</span>
              Contact
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-1">Téléphone</p>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 font-bold text-xl hover:text-orange-300 transition-colors block">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-1">Courriel</p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-400 transition-colors text-sm">{siteConfig.email}</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-1">Heures</p>
                <p className="text-sm">{siteConfig.hours}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-navy-500 mb-1">Zone de service</p>
                <p className="text-white font-bold text-sm">{siteConfig.region}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-600">&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-xs text-navy-400 hover:text-white px-5 py-2.5 border border-navy-700 transition-colors font-medium">
              Appeler
            </a>
            <Link href="/soumission" className="btn-chevron-orange !text-xs !px-5 !py-2.5 !shadow-none">
              Soumission
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
