"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import DecorBlueprint from "@/components/ui/DecorBlueprint";

const heroSlides = [
  { image: "/images/realisations/chantier1.jpg", alt: "Chantier de forage" },
  { image: "/images/realisations/Travail_dynamitage_reussi.jpg", alt: "Dynamitage réussi" },
  { image: "/images/realisations/Roche_pret_sauter.jpg", alt: "Roche préparée" },
  { image: "/images/realisations/Travail_preparation.jpg", alt: "Préparation du chantier" },
  { image: "/images/realisations/Travaux_payasage.jpg", alt: "Travaux paysagers" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (index === current || animating) return;
    setPrev(current);
    setCurrent(index);
    setAnimating(true);
  }, [current, animating]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  useEffect(() => {
    if (!animating) return;
    const t = setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 1200);
    return () => clearTimeout(t);
  }, [animating]);

  const slideClass = (i: number) => {
    if (i === current && animating) return "hero-slide hero-slide-enter";
    if (i === current && !animating) return "hero-slide hero-slide-active";
    if (i === prev && animating) return "hero-slide hero-slide-exit";
    return "hero-slide hero-slide-hidden";
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div key={slide.image} className={slideClass(i)}>
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover scale-105"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/90 z-[2]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-24">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Experts en excavation de roc
            </span>
          </div>
          <h1
            className="animate-fade-in-up opacity-0 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8"
            style={{ animationDelay: "0.5s" }}
          >
            Forage,<br />
            dynamitage<br />
            <span className="text-orange-400">&amp; fragmentation</span>
          </h1>
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.7s" }}>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
              Service professionnel et sécuritaire pour tous vos projets, partout au Québec.
            </p>
          </div>
          <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.9s" }}>
            <Link href="/soumission" className="btn-chevron-orange text-base px-10 py-4">
              Soumission gratuite
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-chevron-outline text-base px-10 py-4">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Decor blueprint — bottom right */}
      <DecorBlueprint className="absolute bottom-20 right-8 w-[250px] h-[250px] hidden lg:block z-[3]" />

      {/* Numbered pagination */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hero-pagination hidden md:flex">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`hero-page-num ${i === current ? "active" : ""}`}
            aria-label={`Slide ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Bottom chevron transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white z-[5]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
    </section>
  );
}
