"use client";

import ScrollReveal from "@/components/ScrollReveal";
import HeroSlider from "@/components/hero/HeroSlider";
import ChevronSeparator from "@/components/ui/ChevronSeparator";
import KeyFigures from "@/components/stats/KeyFigures";
import ServicesDiamonds from "@/components/services/ServicesDiamonds";
import StatsDiagonal from "@/components/stats/StatsDiagonal";
import ProjectsHexGrid from "@/components/projects/ProjectsHexGrid";
import ExpertiseSplit from "@/components/expertise/ExpertiseSplit";
import FinalCTA from "@/components/cta/FinalCTA";
import type { Testimonial } from "@/data/testimonials";

interface Props {
  testimonials: Testimonial[];
}

export default function HomeClient({ testimonials }: Props) {
  return (
    <>
      {/* A) Hero slider */}
      <HeroSlider />

      {/* D) Key figures compact */}
      <KeyFigures />

      {/* E) Services — Diamond grid */}
      <ServicesDiamonds />

      {/* F) Stats orange — count-up with diagonal transitions */}
      <StatsDiagonal />

      {/* G) Réalisations — Hex grid quinconce */}
      <ProjectsHexGrid />

      {/* H) Expertise — Split 50/50 */}
      <ExpertiseSplit />

      {/* I) Témoignages */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden" aria-label="Témoignages">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Témoignages</span>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-navy-950 tracking-tight">Ce que nos clients disent</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 150}>
                <div className="bg-navy-50 p-8 relative group hover:bg-navy-100 transition-colors duration-300">
                  {/* Orange top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
                  <div className="text-orange-400/20 text-6xl font-serif leading-none mb-4 absolute top-4 right-6">&ldquo;</div>
                  <p className="text-navy-600 text-sm leading-relaxed mb-6 relative z-10">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy-950 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 text-sm">{t.name}</p>
                      <p className="text-navy-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* J) CTA Final */}
      <FinalCTA />
    </>
  );
}
