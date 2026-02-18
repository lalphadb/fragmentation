"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

const blockImages = [
  { image: "/images/realisations/Tapis_protection.jpg", imageLeft: true, bg: "bg-white", href: "/securite" },
  { image: "/images/realisations/forage_creusage.jpg", imageLeft: false, bg: "bg-navy-50", href: "/services" },
];

export default function ExpertiseSplit() {
  const { dict, locale } = useDictionary();

  const blocks = dict.home.expertise.blocks.map((b: { label: string; title: string; text: string; cta: string; alt: string }, i: number) => ({
    ...blockImages[i],
    alt: b.alt,
    label: b.label,
    title: b.title,
    text: b.text,
    cta: { label: b.cta, href: blockImages[i].href },
  }));

  return (
    <div aria-label={dict.home.expertise.ariaLabel}>
      {blocks.map((block: { bg: string; imageLeft: boolean; image: string; alt: string; label: string; title: string; text: string; cta: { label: string; href: string } }, i: number) => (
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
                <Link href={localePath(block.cta.href, locale)} className="btn-chevron-dark !text-xs">
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
