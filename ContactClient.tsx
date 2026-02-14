"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/config";

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
      <section className="page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nous joindre</h1>
          <p className="text-dark-300 text-xl max-w-2xl mx-auto">
            Une question? Un projet? Contactez-nous, notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold text-dark-950 mb-4">Coordonnées</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-dark-700">Téléphone</p>
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-primary-600 font-bold text-lg hover:text-primary-700">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-700">Courriel</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:text-primary-700">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-700">Messenger</p>
                    <p className="text-dark-600">{siteConfig.messenger}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-700">Heures d&apos;ouverture</p>
                    <p className="text-dark-600">{siteConfig.hours}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-700">Zone de service</p>
                    <p className="text-dark-600">Partout au Québec</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-bold text-dark-950 mb-2">Urgence?</h3>
                <p className="text-dark-600 text-sm mb-3">
                  Pour une demande urgente, appelez-nous directement. Nous répondons rapidement.
                </p>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-primary text-sm w-full justify-center">
                  📞 Appeler maintenant
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-dark-950 mb-3">Message envoyé!</h2>
                  <p className="text-dark-600">
                    Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
                  <h2 className="text-xl font-bold text-dark-950 mb-2">Envoyer un message</h2>
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
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{errorMsg}</div>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-50">
                    {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
