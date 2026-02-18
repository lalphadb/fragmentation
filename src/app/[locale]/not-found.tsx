"use client";

import Link from "next/link";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

export default function NotFound() {
  const { dict, locale } = useDictionary();

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center max-w-xl">
        <div className="text-8xl font-black text-orange-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-navy-950 mb-4">{dict.errors.notFound.title}</h1>
        <p className="text-navy-600 mb-8">{dict.errors.notFound.text}</p>
        <div className="flex gap-4 justify-center">
          <Link href={localePath("/", locale)} className="btn-chevron-orange">{dict.errors.notFound.home}</Link>
          <Link href={localePath("/contact", locale)} className="btn-chevron-dark">Contact</Link>
        </div>
      </div>
    </section>
  );
}
