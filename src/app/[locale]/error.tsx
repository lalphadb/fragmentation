"use client";

import { useDictionary } from "@/lib/dictionary-context";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const { dict } = useDictionary();

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center max-w-xl">
        <div className="text-6xl mb-4">{"\u26A0\uFE0F"}</div>
        <h1 className="text-3xl font-bold text-navy-950 mb-4">{dict.errors.error.title}</h1>
        <p className="text-navy-600 mb-8">{dict.errors.error.text}</p>
        <button onClick={reset} className="btn-chevron-orange">{dict.errors.error.retry}</button>
      </div>
    </section>
  );
}
