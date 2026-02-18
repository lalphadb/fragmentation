"use client";

import { useState } from "react";
import { realisations as realisationsByLocale, categories as categoriesByLocale, regions as regionsByLocale } from "@/data/realisations";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";

export default function RealisationsClient() {
  const { dict, locale } = useDictionary();
  const t = dict.realisations;
  const localRealisations = realisationsByLocale[locale];
  const localCategories = categoriesByLocale[locale];
  const localRegions = regionsByLocale[locale];
  const [cat, setCat] = useState(localCategories[0]);
  const [reg, setReg] = useState(localRegions[0]);

  const filtered = localRealisations.filter(
    (r) => (cat === localCategories[0] || r.category === cat) && (reg === localRegions[0] || r.region === reg)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/realisations/Travail_dynamitage_reussi.jpg" alt="" className="w-full h-full object-cover opacity-20" />
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
          {/* Filters */}
          <div className="bg-navy-50 p-6 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-navy-400 uppercase tracking-wider mr-2">{t.filters.category}</span>
                {localCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`text-xs px-4 py-2 font-bold uppercase tracking-wider transition-all duration-300 ${
                      cat === c
                        ? "bg-navy-900 text-white"
                        : "bg-white text-navy-500 hover:bg-navy-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-navy-400 uppercase tracking-wider">{t.filters.region}</span>
                <select
                  value={reg}
                  onChange={(e) => setReg(e.target.value)}
                  className="text-xs border-b-2 border-navy-200 bg-white px-4 py-2 text-navy-700 focus:border-orange-400 outline-none font-medium"
                >
                  {localRegions.map((r) => (<option key={r} value={r}>{r}</option>))}
                </select>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-navy-400 py-16 text-sm">{t.filters.noResults}</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {filtered.map((r, i) => (
                <ScrollReveal key={r.id} delay={i * 80}>
                  <div className="group relative overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                    <div className="overflow-hidden h-64">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-[10px] font-bold bg-orange-400 text-white px-3 py-1 uppercase tracking-wider">{r.category}</span>
                        <span className="text-[10px] font-bold text-navy-400 bg-navy-50 px-3 py-1 uppercase tracking-wider">{r.region}</span>
                        <span className="text-[10px] text-navy-400 bg-navy-50 px-3 py-1">{r.year}</span>
                      </div>
                      <h3 className="text-base font-black text-navy-900 mb-2 leading-snug">{r.title}</h3>
                      <p className="text-navy-500 text-sm leading-relaxed mb-3">{r.description}</p>
                      <details className="group/detail">
                        <summary className="text-orange-500 text-sm font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-1">
                          {dict.common.viewDetails}
                          <svg className="w-3 h-3 group-open/detail:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <p className="mt-3 text-navy-500 text-sm leading-relaxed">{r.details}</p>
                      </details>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
