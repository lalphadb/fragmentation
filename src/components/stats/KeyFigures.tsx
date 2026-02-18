"use client";

import ScrollReveal, { CountUp } from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";

export default function KeyFigures() {
  const { dict } = useDictionary();

  const figures = [
    { value: 500, suffix: "+", label: dict.home.stats.projects },
    { value: 0, suffix: "", label: dict.home.stats.accidents, display: "0" },
    { value: 100, suffix: "%", label: dict.home.stats.satisfaction },
    { value: 15, suffix: "+", label: dict.home.stats.experience },
  ];

  return (
    <section className="bg-white py-16 md:py-20" aria-label="Chiffres clés">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {figures.map((fig, i) => (
            <ScrollReveal key={fig.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-navy-950 mb-2">
                  {fig.display ? (
                    <span>{fig.display}</span>
                  ) : (
                    <CountUp end={fig.value} suffix={fig.suffix} />
                  )}
                </div>
                <p className="text-navy-400 text-xs uppercase tracking-wider font-bold">{fig.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
