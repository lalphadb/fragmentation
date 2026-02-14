"use client";

import ScrollReveal, { CountUp } from "@/components/ScrollReveal";

const stats = [
  {
    value: 500, suffix: "+", label: "Projets complétés",
    icon: <svg className="w-7 h-7 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    value: 0, suffix: "", label: "Accident de travail",
    icon: <svg className="w-7 h-7 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    value: 100, suffix: "%", label: "Satisfaction client",
    icon: <svg className="w-7 h-7 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    value: 15, suffix: "+", label: "Années d'expérience",
    icon: <svg className="w-7 h-7 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

export default function StatsDiagonal() {
  return (
    <section className="bg-orange-400 py-20 md:py-24 relative overflow-hidden" aria-label="Statistiques">
      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <line x1="0" y1="20%" x2="100%" y2="80%" stroke="white" strokeWidth="0.5" opacity="0.15" />
        <line x1="20%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.1" />
        <line x1="60%" y1="0" x2="100%" y2="60%" stroke="white" strokeWidth="0.5" opacity="0.08" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 120}>
              <div className="text-center">
                <div className="stat-ring mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-navy-950 mb-1">
                  {stat.value === 0 ? (
                    <span>0</span>
                  ) : (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-navy-950/60 text-xs uppercase tracking-wider font-bold">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="diag-bottom-navy" />
    </section>
  );
}
