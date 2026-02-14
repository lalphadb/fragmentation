"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const blocks = [
  {
    image: "/images/realisations/Tapis_protection.jpg",
    alt: "Tapis de protection sur chantier",
    imageLeft: true,
    bg: "bg-white",
    label: "Sécurité",
    title: "Zéro compromis sur la sécurité",
    text: "Chaque opération est planifiée avec soin. Nos boutefeux certifiés suivent un protocole rigoureux en 8 étapes, du forage initial à l'inspection post-dynamitage. Sismographes, tapis de protection, périmètres de sécurité — rien n'est laissé au hasard.",
    cta: { label: "Nos procédures", href: "/securite" },
  },
  {
    image: "/images/realisations/forage_creusage.jpg",
    alt: "Forage de précision",
    imageLeft: false,
    bg: "bg-navy-50",
    label: "Équipement",
    title: "Technologie de pointe",
    text: "Foreuses hydrauliques de dernière génération, détonateurs électroniques programmables, systèmes de mesure de vibrations — notre parc d'équipement nous permet d'offrir un service de précision adapté à chaque contexte.",
    cta: { label: "Nos services", href: "/services" },
  },
];

export default function ExpertiseSplit() {
  return (
    <div aria-label="Expertise">
      {blocks.map((block, i) => (
        <section key={i} className={`${block.bg} relative overflow-hidden`}>
          <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
            {/* Image side */}
            <ScrollReveal direction={block.imageLeft ? "left" : "right"} className={block.imageLeft ? "order-1" : "order-1 lg:order-2"}>
              <div className="relative h-64 lg:h-full">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Text side */}
            <div className={`flex items-center ${block.imageLeft ? "order-2" : "order-2 lg:order-1"}`}>
              <ScrollReveal className="p-10 lg:p-16 xl:p-24 max-w-xl">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{block.label}</span>
                <div className="accent-line mb-6" />
                <h2 className="text-3xl md:text-4xl font-black text-navy-950 tracking-tight mb-6 leading-tight">
                  {block.title}
                </h2>
                <p className="text-navy-500 leading-relaxed mb-8">
                  {block.text}
                </p>
                <Link href={block.cta.href} className="btn-chevron-dark !text-xs">
                  {block.cta.label}
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
