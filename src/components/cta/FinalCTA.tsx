"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="bg-navy-950 py-28 md:py-36 relative overflow-hidden" aria-label="Appel à l'action">
      <div className="diag-top-white" />

      {/* Decorative diamond outlines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {/* Large diamond outlines */}
        <rect x="10%" y="20%" width="60" height="60" transform="rotate(45)" stroke="#e8a830" strokeWidth="0.5" fill="none" opacity="0.1" />
        <rect x="80%" y="10%" width="80" height="80" transform="rotate(45)" stroke="#e8a830" strokeWidth="0.5" fill="none" opacity="0.08" />
        <rect x="70%" y="60%" width="50" height="50" transform="rotate(45)" stroke="#e8a830" strokeWidth="0.5" fill="none" opacity="0.1" />
        <rect x="5%" y="70%" width="40" height="40" transform="rotate(45)" stroke="#e8a830" strokeWidth="0.5" fill="none" opacity="0.12" />
        {/* Connection lines */}
        <line x1="15%" y1="25%" x2="82%" y2="15%" stroke="#e8a830" strokeWidth="0.3" opacity="0.06" />
        <line x1="82%" y1="15%" x2="72%" y2="62%" stroke="#e8a830" strokeWidth="0.3" opacity="0.06" />
        <line x1="72%" y1="62%" x2="8%" y2="72%" stroke="#e8a830" strokeWidth="0.3" opacity="0.06" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Commencez maintenant</span>
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
              Prêt à démarrer<br />votre projet?
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Obtenez une soumission gratuite en quelques minutes. Notre équipe vous contacte sous 24 à 48 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/soumission" className="btn-chevron-orange text-base px-10 py-4">
                Soumission gratuite
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-chevron-outline text-base px-10 py-4">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
