"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

interface Props {
  siteConfig: { name: string };
}

export default function AProposClient({ siteConfig }: Props) {
  const { dict, locale } = useDictionary();
  const t = dict.aPropos;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/realisations/Travail_manuel.jpg" alt="" className="w-full h-full object-cover opacity-20" />
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

      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Mission */}
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
              <div className="lg:w-1/2">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.mission.label}</span>
                <div className="accent-line mb-6" />
                <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight mb-6">{t.mission.title}</h2>
                <p className="text-navy-500 leading-relaxed mb-4">
                  {t.mission.p1.replace("{name}", siteConfig.name)}
                </p>
                <p className="text-navy-500 leading-relaxed">
                  {t.mission.p2}
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="mx-auto" style={{ maxWidth: "400px" }}>
                  <img src="/images/realisations/Travail_manuel.jpg" alt={t.mission.imgAlt} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal>
            <div className="mb-32">
              <div className="text-center mb-14">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.values.label}</span>
                <div className="accent-line mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight">{t.values.title}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {t.values.items.map((v, i) => (
                  <div key={v.title} className="text-center group">
                    <div className="w-20 h-24 bg-navy-900 flex items-center justify-center text-white text-xl font-black mx-auto mb-6 group-hover:bg-orange-400 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-black text-navy-900 mb-3 uppercase tracking-wider">{v.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Equipment */}
          <ScrollReveal>
            <div className="bg-navy-950 text-white p-10 lg:p-16 mb-24 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.equipment.label}</span>
                <div className="accent-line mb-6" />
                <h2 className="text-2xl md:text-3xl font-black mb-10">{t.equipment.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {t.equipment.items.map((eq) => (
                    <div key={eq} className="bg-white/5 px-5 py-4 text-sm text-white/60 hover:bg-white/10 transition-all">
                      {eq}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-navy-50 p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
              <h2 className="text-2xl md:text-3xl font-black text-navy-900 mb-3">{t.cta.title}</h2>
              <p className="text-navy-500 mb-8 max-w-lg mx-auto">{t.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={localePath("/soumission", locale)} className="btn-chevron-orange">{dict.common.cta.requestQuote}</Link>
                <Link href={localePath("/contact", locale)} className="btn-chevron-dark">{dict.common.cta.contactUs}</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
