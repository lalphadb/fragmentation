"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { services as servicesByLocale } from "@/data/services";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

export default function ServicesDiamonds() {
  const { dict, locale } = useDictionary();
  const services = servicesByLocale[locale];

  // Build grid: 4 cols × 2 rows, alternating filled/empty
  // Row 1: empty, filled, empty, filled
  // Row 2: filled, empty, filled, empty
  const gridItems = [
    { type: "empty" as const },
    { type: "service" as const, service: services[0] },
    { type: "empty" as const },
    { type: "service" as const, service: services[1] },
    { type: "service" as const, service: services[2] },
    { type: "empty" as const },
    { type: "service" as const, service: services[3] },
    { type: "empty" as const },
  ];

  return (
    <section className="bg-navy-950 py-24 md:py-32 relative overflow-hidden" aria-label="Services">
      <div className="diag-top-white" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header: title right, CTA left */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
            <Link href={localePath("/services", locale)} className="btn-chevron-orange !text-xs order-2 md:order-1">
              {dict.common.learnMore}
            </Link>
            <div className="order-1 md:order-2 md:text-right">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{dict.home.services.label}</span>
              <div className="accent-line md:ml-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                {dict.home.services.title}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Diamond grid */}
        <div className="diamond-grid max-w-3xl mx-auto">
          {gridItems.map((item, i) => (
            <ScrollReveal key={i} direction="diamond" delay={i * 150}>
              {item.type === "empty" ? (
                <div className="diamond-cell diamond-cell-empty" />
              ) : (
                <div className="diamond-cell diamond-cell-filled group cursor-pointer">
                  <div className="diamond-cell-inner">
                    <Image
                      src={item.service!.image}
                      alt={item.service!.title}
                      fill
                      className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="relative z-10 text-center px-4">
                      <h3 className="text-white font-black text-xs uppercase tracking-wider mb-2">{item.service!.title}</h3>
                      <p className="text-white/0 group-hover:text-white/60 text-[11px] leading-relaxed transition-all duration-300 max-w-[140px] mx-auto">
                        {item.service!.shortDesc}
                      </p>
                      <div className="h-0.5 w-0 group-hover:w-12 bg-orange-400 mx-auto mt-2 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Additional services below (mobile-friendly) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:hidden">
          {services.map((s) => (
            <Link key={s.id} href={localePath("/services", locale)} className="bg-white/5 hover:bg-white/10 p-5 transition-colors group">
              <h3 className="text-white font-bold text-sm mb-1 group-hover:text-orange-400 transition-colors">{s.title}</h3>
              <p className="text-white/40 text-xs">{s.shortDesc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="diag-bottom-orange" />
    </section>
  );
}
