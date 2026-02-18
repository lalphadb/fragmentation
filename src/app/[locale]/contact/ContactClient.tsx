"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

export default function ContactClient() {
  const { dict, locale } = useDictionary();
  const t = dict.contact;
  const f = dict.common.forms;

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || f.connectionError);
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg(f.connectionError);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container mx-auto px-6 relative z-10 py-32 pt-40">
          <div className="max-w-2xl">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">{t.hero.label}</span>
            <div className="accent-line mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }} />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>{t.hero.title}</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {t.hero.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-0 max-w-6xl mx-auto">
            {/* Contact info sidebar */}
            <ScrollReveal direction="left">
              <div className="bg-navy-950 text-white p-8 lg:p-10 space-y-8 h-full relative overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}>
                <div className="relative z-10">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">{t.sidebar.label}</span>
                  <div className="accent-line mb-8" />
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{f.phoneLabel}</p>
                      <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 font-bold text-xl hover:text-orange-300 transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{f.emailLabel}</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-orange-400 transition-colors text-sm">
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{t.sidebar.messenger}</p>
                      <p className="text-white/60 text-sm">{siteConfig.messenger}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{t.sidebar.openingHours}</p>
                      <p className="text-white/60 text-sm">{dict.common.hoursValue}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{t.sidebar.serviceArea}</p>
                      <p className="text-white font-bold text-sm">{dict.common.regionValue}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-white/10">
                    <p className="font-bold text-sm mb-2 uppercase tracking-wider">{t.sidebar.urgent}</p>
                    <p className="text-white/40 text-xs leading-relaxed mb-4">
                      {t.sidebar.urgentText}
                    </p>
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-chevron-orange text-sm w-full">
                      {dict.common.callNow}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-navy-50 p-8 lg:p-10 h-full">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="w-16 h-20 bg-orange-400 flex items-center justify-center mb-5">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-xl font-black text-navy-900 mb-2">{t.success.title}</h2>
                    <p className="text-navy-500 text-sm">
                      {t.success.text}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{t.form.label}</span>
                      <h2 className="text-lg font-black text-navy-900 mb-1">{t.form.title}</h2>
                      <p className="text-navy-400 text-sm mb-6">{f.required}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-field" htmlFor="cName">{f.fullName} *</label>
                        <input id="cName" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" required />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="cEmail">{f.emailLabel} *</label>
                        <input id="cEmail" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-field" htmlFor="cPhone">{f.phoneLabel}</label>
                        <input id="cPhone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" placeholder={f.phonePlaceholder} />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="cSubject">{f.subject} *</label>
                        <input id="cSubject" type="text" value={form.subject} onChange={(e) => update("subject", e.target.value)} className="input-field" required />
                      </div>
                    </div>
                    <div>
                      <label className="label-field" htmlFor="cMessage">{f.message} *</label>
                      <textarea id="cMessage" value={form.message} onChange={(e) => update("message", e.target.value)} className="input-field" rows={5} required />
                    </div>

                    {status === "error" && (
                      <div className="p-4 bg-red-50 text-red-700 text-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                        <span className="ml-2">{errorMsg}</span>
                      </div>
                    )}

                    <button type="submit" disabled={status === "sending"} className="btn-chevron-orange disabled:opacity-50">
                      {status === "sending" ? f.sending : t.form.submit}
                    </button>
                    <p className="text-navy-400 text-xs mt-3">
                      {f.privacyNotice}{" "}
                      <Link href={localePath("/politique-de-confidentialite", locale)} className="text-orange-400 hover:underline">{f.privacyLink}</Link>.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
