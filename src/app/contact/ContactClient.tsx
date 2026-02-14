"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactClient() {
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
        setErrorMsg(data.error || "Erreur lors de l'envoi");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Erreur de connexion. Veuillez réessayer.");
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
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">Contactez-nous</span>
            <div className="accent-line mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }} />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Nous joindre</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Une question? Un projet? Notre équipe vous répond rapidement.
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
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Coordonnées</span>
                  <div className="accent-line mb-8" />
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Téléphone</p>
                      <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 font-bold text-xl hover:text-orange-300 transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Courriel</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-orange-400 transition-colors text-sm">
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Messenger</p>
                      <p className="text-white/60 text-sm">{siteConfig.messenger}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Heures d&apos;ouverture</p>
                      <p className="text-white/60 text-sm">{siteConfig.hours}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Zone de service</p>
                      <p className="text-white font-bold text-sm">Partout au Québec</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-white/10">
                    <p className="font-bold text-sm mb-2 uppercase tracking-wider">Urgence?</p>
                    <p className="text-white/40 text-xs leading-relaxed mb-4">
                      Pour une demande urgente, appelez-nous directement.
                    </p>
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-chevron-orange text-sm w-full">
                      Appeler maintenant
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
                    <h2 className="text-xl font-black text-navy-900 mb-2">Message envoyé!</h2>
                    <p className="text-navy-500 text-sm">
                      Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Formulaire</span>
                      <h2 className="text-lg font-black text-navy-900 mb-1">Envoyer un message</h2>
                      <p className="text-navy-400 text-sm mb-6">Les champs marqués d&apos;un * sont requis.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-field" htmlFor="cName">Nom complet *</label>
                        <input id="cName" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" required />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="cEmail">Courriel *</label>
                        <input id="cEmail" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-field" htmlFor="cPhone">Téléphone</label>
                        <input id="cPhone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" placeholder="(418) 000-0000" />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="cSubject">Sujet *</label>
                        <input id="cSubject" type="text" value={form.subject} onChange={(e) => update("subject", e.target.value)} className="input-field" required />
                      </div>
                    </div>
                    <div>
                      <label className="label-field" htmlFor="cMessage">Message *</label>
                      <textarea id="cMessage" value={form.message} onChange={(e) => update("message", e.target.value)} className="input-field" rows={5} required />
                    </div>

                    {status === "error" && (
                      <div className="p-4 bg-red-50 text-red-700 text-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                        <span className="ml-2">{errorMsg}</span>
                      </div>
                    )}

                    <button type="submit" disabled={status === "sending"} className="btn-chevron-orange disabled:opacity-50">
                      {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                    <p className="text-navy-400 text-xs mt-3">
                      En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre{" "}
                      <Link href="/politique-de-confidentialite" className="text-orange-400 hover:underline">politique de confidentialité</Link>.
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
