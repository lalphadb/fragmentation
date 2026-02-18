"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { realisations as realisationsByLocale } from "@/data/realisations";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

export default function ProjectsHexGrid() {
  const { dict, locale } = useDictionary();
  const projects = realisationsByLocale[locale].slice(0, 6);

  // Build staggered hex layout: alternate image / text / empty
  const hexItems: Array<{ type: "image" | "text" | "empty"; project?: typeof projects[0] }> = [];

  projects.forEach((p, i) => {
    hexItems.push({ type: "image", project: p });
    if (i < projects.length - 1) {
      hexItems.push({ type: "text", project: p });
    }
  });
  // Add empty hex cells for symmetry
  hexItems.push({ type: "empty" });

  return (
    <section className="bg-navy-950 py-24 md:py-32 relative overflow-hidden" aria-label={dict.home.projects.title}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <Link href={localePath("/realisations", locale)} className="btn-chevron-orange !text-xs order-2 md:order-1">
              {dict.home.projects.viewAll}
            </Link>
            <div className="order-1 md:order-2 md:text-right">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{dict.home.projects.label}</span>
              <div className="accent-line md:ml-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{dict.home.projects.title}</h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Hex grid */}
        <div className="hex-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              {/* Image hex */}
              <div className="hex-cell hex-cell-image relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-[25%] left-0 right-0 text-center px-4">
                  <span className="text-orange-400 text-[10px] font-bold uppercase tracking-wider">{project.category}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Text hex cells interspersed */}
          {projects.slice(0, 3).map((project, i) => (
            <ScrollReveal key={`text-${project.id}`} delay={(i + projects.length) * 100}>
              <div className="hex-cell hex-cell-text">
                <p className="text-navy-400 text-[10px] uppercase tracking-wider mb-1">{project.year}</p>
                <p className="text-navy-900 text-xs font-bold leading-tight">{project.title}</p>
                <Link href={localePath("/realisations", locale)} className="text-orange-500 text-[10px] font-bold mt-2 hover:text-orange-600 transition-colors">
                  {dict.common.view} &rarr;
                </Link>
              </div>
            </ScrollReveal>
          ))}

          {/* Empty hex */}
          <div className="hex-cell hex-cell-empty hidden lg:block" />
        </div>

        {/* Mobile fallback grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-8">
          {projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden h-56 group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-orange-400 text-[10px] font-bold uppercase tracking-wider">{project.category}</span>
                <p className="text-white text-sm font-bold mt-1">{project.title}</p>
                <p className="text-white/40 text-xs mt-0.5">{project.region} — {project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="diag-bottom-white" />
    </section>
  );
}
