"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";
import type { Service } from "@/data/services";

export default function ServicesClient({ services }: { services: Service[] }) {
  const { dict, locale } = useDictionary();
  const t = dict.services;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/realisations/chantier1.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-32 pt-40">
          <div className="max-w-2xl">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">{t.hero.label}</span>
            <div className="accent-line mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }} />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>{t.hero.title}</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {t.hero.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* Services list */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="space-y-32">
            {services.map((s, i) => (
              <ScrollReveal key={s.id} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
                  <div className="lg:w-1/2 relative">
                    <div className="mx-auto" style={{ maxWidth: "400px" }}>
                      <img src={s.image} alt={s.title} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                    </div>
                    <div className="absolute -top-4 -left-4 lg:left-auto lg:-right-4 w-14 h-16 bg-orange-400 flex items-center justify-center text-white text-lg font-black shadow-xl">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
                      {t.serviceLabel} {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-black text-navy-900 mb-4 tracking-tight">{s.title}</h2>
                    <div className="accent-line mb-5" />
                    <p className="text-navy-500 leading-relaxed mb-6">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="text-xs bg-navy-50 text-navy-600 px-4 py-2 font-medium">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-24 bg-navy-950 text-white p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.cta.label}</span>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">{t.cta.title}</h2>
                <p className="text-white/50 mb-8 max-w-lg mx-auto">{t.cta.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={localePath("/soumission", locale)} className="btn-chevron-orange">{dict.common.cta.requestQuote}</Link>
                  <Link href={localePath("/contact", locale)} className="btn-chevron-outline">{dict.common.cta.contactUs}</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
