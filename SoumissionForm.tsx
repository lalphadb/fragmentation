"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/config";

const PROJECT_TYPES = [
  { value: "residentiel", label: "Résidentiel" },
  { value: "commercial", label: "Commercial" },
  { value: "industriel", label: "Industriel" },
  { value: "genie-civil", label: "Génie civil / Voirie" },
  { value: "carriere", label: "Carrière" },
  { value: "autre", label: "Autre" },
];

const SERVICE_TYPES = [
  { value: "dynamitage", label: "Dynamitage" },
  { value: "forage", label: "Forage" },
  { value: "fragmentation-mecanique", label: "Fragmentation mécanique" },
  { value: "prédécoupage", label: "Prédécoupage" },
  { value: "ancrage", label: "Ancrage" },
  { value: "autre", label: "Autre / Je ne sais pas" },
];

export default function SoumissionForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [form, setForm] = useState({
    projectType: "",
    serviceType: "",
    address: "",
    city: "",
    postalCode: "",
    description: "",
    deadline: "",
    constraints: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return form.projectType && form.serviceType;
      case 2: return form.address && form.city && form.postalCode;
      case 3: return form.description.length >= 10;
      case 4: return form.name && form.email && form.phone;
      default: return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      files.forEach((f) => formData.append("files", f));

      const res = await fetch("/api/soumission", { method: "POST", body: formData });
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

  if (status === "success") {
    return (
      <>
        <section className="page-header">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-black mb-4">Soumission envoyée!</h1>
          </div>
        </section>
        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-dark-950 mb-3">Merci pour votre demande!</h2>
              <p className="text-dark-600 mb-6">
                Nous avons bien reçu votre demande de soumission. Notre équipe analysera votre projet
                et vous contactera dans les plus brefs délais, généralement sous 24 à 48 heures ouvrables.
              </p>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-primary">
                Appeler maintenant : {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Demander une soumission</h1>
          <p className="text-dark-300 text-xl max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez votre soumission gratuite rapidement.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-10">
            {["Type de projet", "Localisation", "Détails", "Coordonnées"].map((label, i) => (
              <div key={label} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i + 1 <= step ? "bg-primary-600 text-white" : "bg-dark-200 text-dark-500"
                }`}>
                  {i + 1}
                </div>
                <span className="hidden sm:inline ml-2 text-sm text-dark-600">{label}</span>
                {i < 3 && <div className={`w-8 sm:w-16 h-0.5 mx-2 ${i + 1 < step ? "bg-primary-600" : "bg-dark-200"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {/* Step 1: Type */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-dark-950 mb-4">Type de projet</h2>
                <div>
                  <label className="label-field" htmlFor="projectType">Type de projet *</label>
                  <select id="projectType" value={form.projectType} onChange={(e) => update("projectType", e.target.value)} className="input-field" required>
                    <option value="">Sélectionnez...</option>
                    {PROJECT_TYPES.map((t) => (<option key={t.value} value={t.value}>{t.label}</option>))}
                  </select>
                </div>
                <div>
                  <label className="label-field" htmlFor="serviceType">Service requis *</label>
                  <select id="serviceType" value={form.serviceType} onChange={(e) => update("serviceType", e.target.value)} className="input-field" required>
                    <option value="">Sélectionnez...</option>
                    {SERVICE_TYPES.map((t) => (<option key={t.value} value={t.value}>{t.label}</option>))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-dark-950 mb-4">Localisation du projet</h2>
                <div>
                  <label className="label-field" htmlFor="address">Adresse du chantier *</label>
                  <input id="address" type="text" value={form.address} onChange={(e) => update("address", e.target.value)} className="input-field" placeholder="123, rue Exemple" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label-field" htmlFor="city">Ville *</label>
                    <input id="city" type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className="input-field" required />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="postalCode">Code postal *</label>
                    <input id="postalCode" type="text" value={form.postalCode} onChange={(e) => update("postalCode", e.target.value)} className="input-field" placeholder="G1A 1A1" required />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-dark-950 mb-4">Détails du projet</h2>
                <div>
                  <label className="label-field" htmlFor="description">Description du projet *</label>
                  <textarea id="description" value={form.description} onChange={(e) => update("description", e.target.value)} className="input-field" rows={4} placeholder="Décrivez votre projet : type de travaux, volume approximatif, particularités..." required />
                </div>
                <div>
                  <label className="label-field" htmlFor="deadline">Échéance souhaitée</label>
                  <input id="deadline" type="text" value={form.deadline} onChange={(e) => update("deadline", e.target.value)} className="input-field" placeholder="Ex: Mars 2025, le plus tôt possible..." />
                </div>
                <div>
                  <label className="label-field" htmlFor="constraints">Contraintes particulières</label>
                  <textarea id="constraints" value={form.constraints} onChange={(e) => update("constraints", e.target.value)} className="input-field" rows={3} placeholder="Accès restreint, proximité de structures, restrictions horaires..." />
                </div>
                <div>
                  <label className="label-field">Plans ou photos (optionnel, max 5 fichiers)</label>
                  <input type="file" onChange={handleFiles} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" multiple className="input-field text-sm" />
                  {files.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {files.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-dark-600">
                          <span>📎 {f.name}</span>
                          <button type="button" onClick={() => removeFile(i)} className="text-red-500 hover:text-red-700 text-xs">(supprimer)</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-dark-950 mb-4">Vos coordonnées</h2>
                <div>
                  <label className="label-field" htmlFor="name">Nom complet *</label>
                  <input id="name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-field" htmlFor="email">Courriel *</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="phone">Téléphone *</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" placeholder="(418) 000-0000" required />
                  </div>
                </div>
                <div>
                  <label className="label-field" htmlFor="company">Entreprise (optionnel)</label>
                  <input id="company" type="text" value={form.company} onChange={(e) => update("company", e.target.value)} className="input-field" />
                </div>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="btn-outline">← Précédent</button>
              ) : <div />}
              {step < 4 ? (
                <button type="button" onClick={() => setStep(step + 1)} disabled={!canProceed()} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  Suivant →
                </button>
              ) : (
                <button type="submit" disabled={!canProceed() || status === "sending"} className="btn-primary disabled:opacity-50">
                  {status === "sending" ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
