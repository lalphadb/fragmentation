"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FaqClient({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container mx-auto px-6 relative z-10 py-32 pt-40">
          <div className="max-w-2xl">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">Questions courantes</span>
            <div className="accent-line mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }} />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Foire aux questions</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Les réponses aux questions les plus courantes sur nos services.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.id} delay={i * 60}>
                <details className="bg-navy-50 border-l-0 open:border-l-0 transition-colors group overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-0 h-full bg-orange-400 transition-all duration-300 group-open:w-1" />
                  <summary className="p-6 cursor-pointer flex items-start gap-4 font-bold text-navy-900 hover:text-orange-500 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <div className="w-10 h-12 bg-navy-200 flex items-center justify-center flex-shrink-0 group-open:bg-orange-400 group-open:text-white transition-colors text-xs font-black text-navy-500">
                      <svg className="w-4 h-4 group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" /></svg>
                    </div>
                    <span className="text-sm pt-2">{faq.question}</span>
                  </summary>
                  <div className="px-6 pb-6 pl-[4.5rem]">
                    <p className="text-navy-500 text-sm leading-relaxed">{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] font-bold text-orange-500 bg-orange-50 px-3 py-1 uppercase tracking-wider">{faq.category}</span>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 bg-navy-50 p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
              <h2 className="text-xl font-black text-navy-900 mb-3">Vous avez une autre question?</h2>
              <p className="text-navy-500 text-sm mb-8">Notre équipe se fera un plaisir de répondre à toutes vos interrogations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-chevron-orange text-sm">Nous contacter</Link>
                <Link href="/soumission" className="btn-chevron-dark text-sm">Demander une soumission</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
