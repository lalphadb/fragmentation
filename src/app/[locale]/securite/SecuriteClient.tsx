"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function SecuriteClient({ steps }: { steps: Step[] }) {
  const { dict, locale } = useDictionary();
  const t = dict.securite;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/realisations/Tapis_protection.jpg" alt="" className="w-full h-full object-cover opacity-20" />
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
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Engagement */}
          <ScrollReveal>
            <div className="bg-navy-50 p-10 lg:p-14 mb-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-400" />
              <h2 className="text-2xl font-black text-navy-900 mb-4">{t.engagement.title}</h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                {t.engagement.p1}
              </p>
              <p className="text-navy-500 leading-relaxed">
                {t.engagement.p2}
              </p>
            </div>
          </ScrollReveal>

          {/* Steps -- vertical timeline */}
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.protocol.label}</span>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight">{t.protocol.title}</h2>
            </div>
          </ScrollReveal>

          <div className="relative mb-20">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy-200 md:-translate-x-px" />

            {steps.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em]">{t.protocol.stepLabel} {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-black text-navy-900 text-lg mt-1 mb-2">{step.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Number node */}
                  <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-12 h-14 bg-navy-900 flex items-center justify-center text-white text-xs font-black z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Spacer for alternate side */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-navy-950 text-white p-10 lg:p-14 text-center relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.cta.label}</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">{t.cta.title}</h2>
                <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                  {t.cta.subtitle}
                </p>
                <Link href={localePath("/contact", locale)} className="btn-chevron-orange">{t.cta.button}</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
