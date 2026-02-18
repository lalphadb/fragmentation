"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-12 bg-orange-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-black">{num}</span>
        </div>
        <h2 className="text-xl font-black text-navy-900 pt-2">{title}</h2>
      </div>
      <div className="pl-14 text-navy-500 text-sm leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <svg className="w-2.5 h-2.5 text-orange-400 flex-shrink-0 mt-1.5" viewBox="0 0 8 8">
            <path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ConfidentialiteClient() {
  const { dict, locale } = useDictionary();
  const t = dict.confidentialite;
  const s = t.sections;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-28 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                {t.hero.label}
              </span>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                {t.hero.title}
              </h1>
            </div>
          </ScrollReveal>
        </div>
        <div className="diag-bottom-white" />
      </section>

      {/* Content */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">

          <p className="text-navy-500 text-sm leading-relaxed mb-14">
            {t.lastUpdated} {siteConfig.privacy.lastUpdated}
          </p>

          {/* 01 — Introduction */}
          <Section num="01" title={s.s01.title}>
            <p>{s.s01.p1.replace("{name}", siteConfig.name)}</p>
            <p>{s.s01.p2}</p>
          </Section>

          {/* 02 — Officer */}
          <Section num="02" title={s.s02.title}>
            <p>{s.s02.text}</p>
            <div className="bg-navy-50 p-4 border-l-2 border-orange-400">
              <p className="font-bold text-navy-900">{siteConfig.privacy.responsable}</p>
              <p>{s.s02.titleLabel}</p>
              <p>{s.s02.emailLabel} : <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:underline">{siteConfig.email}</a></p>
              <p>{s.s02.phoneLabel} : <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 hover:underline">{siteConfig.phone}</a></p>
            </div>
          </Section>

          {/* 03 — Data collected */}
          <Section num="03" title={s.s03.title}>
            <p>{s.s03.intro}</p>
            <div className="space-y-3">
              {s.s03.categories.map((cat: { label: string; text: string }) => (
                <div key={cat.label} className="bg-navy-50 p-4">
                  <p className="font-bold text-navy-900 text-xs uppercase tracking-wider mb-2">{cat.label}</p>
                  <p>{cat.text}</p>
                </div>
              ))}
            </div>
            <p>{s.s03.closing}</p>
          </Section>

          {/* 04 — Purposes */}
          <Section num="04" title={s.s04.title}>
            <BulletList items={s.s04.items} />
          </Section>

          {/* 05 — Cookies */}
          <Section num="05" title={s.s05.title}>
            <p>{s.s05.intro}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-navy-200">
                    {s.s05.tableHeaders.map((h: string) => (
                      <th key={h} className="text-left py-2 pr-4 font-bold text-navy-900 text-xs uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.s05.tableRows.map((row: string[], i: number) => (
                    <tr key={i} className={i < s.s05.tableRows.length - 1 ? "border-b border-navy-100" : ""}>
                      {row.map((cell: string, j: number) => (
                        <td key={j} className={`py-3 ${j === 0 ? "pr-4 font-medium text-navy-800" : j < row.length - 1 ? "pr-4" : ""}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{s.s05.closing}</p>
          </Section>

          {/* 06 — Consent */}
          <Section num="06" title={s.s06.title}>
            <p>{s.s06.text}</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-preferences"))}
              className="btn-flat bg-orange-400 text-navy-950 hover:bg-orange-300 px-6 py-2.5 text-xs"
            >
              {t.modifyCookies}
            </button>
          </Section>

          {/* 07 — Retention */}
          <Section num="07" title={s.s07.title}>
            <BulletList items={s.s07.items} />
          </Section>

          {/* 08 — Rights */}
          <Section num="08" title={s.s08.title}>
            <p>{s.s08.intro}</p>
            <BulletList items={s.s08.items} />
            <p>
              {s.s08.closing
                .replace("{email}", siteConfig.email)
                .replace("{phone}", siteConfig.phone)}
            </p>
          </Section>

          {/* 09 — Security */}
          <Section num="09" title={s.s09.title}>
            <p>{s.s09.intro}</p>
            <BulletList items={s.s09.items} />
          </Section>

          {/* 10 — Changes */}
          <Section num="10" title={s.s10.title}>
            <p>{s.s10.text}</p>
          </Section>

          {/* 11 — Contact */}
          <Section num="11" title={s.s11.title}>
            <p>{s.s11.text}</p>
            <div className="bg-navy-50 p-4 border-l-2 border-orange-400">
              <p className="font-bold text-navy-900">{siteConfig.name}</p>
              <p>{s.s11.emailLabel} : <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:underline">{siteConfig.email}</a></p>
              <p>{s.s11.phoneLabel} : <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 hover:underline">{siteConfig.phone}</a></p>
            </div>
          </Section>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-navy-50 p-8 text-center mt-8">
              <h3 className="text-lg font-black text-navy-900 mb-3">{t.questions.title}</h3>
              <p className="text-navy-500 text-sm mb-6">
                {t.questions.text}
              </p>
              <Link href={localePath("/contact", locale)} className="btn-flat bg-orange-400 text-navy-950 hover:bg-orange-300 px-8 py-3 text-sm">
                {dict.common.cta.contactUs}
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
