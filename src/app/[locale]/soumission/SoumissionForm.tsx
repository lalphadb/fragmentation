"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useDictionary } from "@/lib/dictionary-context";
import { localePath } from "@/lib/i18n";

export default function SoumissionForm() {
  const { dict, locale } = useDictionary();
  const t = dict.soumission;
  const f = dict.common.forms;

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
      files.forEach((file) => formData.append("files", file));

      const res = await fetch("/api/soumission", { method: "POST", body: formData });
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

  if (status === "success") {
    return (
      <>
        <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
          <div className="container mx-auto px-6 relative z-10 py-32 pt-40">
            <div className="max-w-2xl">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.success.label}</span>
              <div className="accent-line mb-6" />
              <h1 className="text-5xl font-black tracking-tight">{t.success.title}</h1>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-xl">
            <div className="bg-navy-50 p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
              <div className="w-16 h-20 bg-orange-400 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-xl font-black text-navy-900 mb-3">{t.success.thankYou}</h2>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                {t.success.text}
              </p>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-chevron-orange text-sm">
                {t.success.callLabel} {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

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
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Progress bar */}
          <div className="flex items-center mb-14">
            {t.steps.map((label, i) => (
              <div key={label} className="flex items-center flex-1">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-12 flex items-center justify-center text-xs font-black transition-all duration-300 ${
                    i + 1 <= step
                      ? "bg-orange-400 text-white"
                      : "bg-navy-100 text-navy-400"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="hidden sm:inline text-xs text-navy-500 font-bold uppercase tracking-wider">{label}</span>
                </div>
                {i < 3 && <div className={`flex-1 h-px mx-3 transition-colors ${i + 1 < step ? "bg-orange-400" : "bg-navy-200"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-navy-50 p-6 md:p-10">
            {/* Step 1: Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{t.stepLabel} 01</span>
                  <h2 className="text-lg font-black text-navy-900 mb-6">{t.fields.projectType}</h2>
                </div>
                <div>
                  <label className="label-field" htmlFor="projectType">{t.fields.projectType} *</label>
                  <select id="projectType" value={form.projectType} onChange={(e) => update("projectType", e.target.value)} className="input-field" required>
                    <option value="">{t.fields.select}</option>
                    {t.projectTypes.map((pt) => (<option key={pt.value} value={pt.value}>{pt.label}</option>))}
                  </select>
                </div>
                <div>
                  <label className="label-field" htmlFor="serviceType">{t.fields.serviceRequired} *</label>
                  <select id="serviceType" value={form.serviceType} onChange={(e) => update("serviceType", e.target.value)} className="input-field" required>
                    <option value="">{t.fields.select}</option>
                    {t.serviceTypes.map((st) => (<option key={st.value} value={st.value}>{st.label}</option>))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{t.stepLabel} 02</span>
                  <h2 className="text-lg font-black text-navy-900 mb-6">{t.fields.projectLocation}</h2>
                </div>
                <div>
                  <label className="label-field" htmlFor="address">{t.fields.siteAddress} *</label>
                  <input id="address" type="text" value={form.address} onChange={(e) => update("address", e.target.value)} className="input-field" placeholder={t.fields.addressPlaceholder} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label-field" htmlFor="city">{t.fields.city} *</label>
                    <input id="city" type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className="input-field" required />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="postalCode">{t.fields.postalCode} *</label>
                    <input id="postalCode" type="text" value={form.postalCode} onChange={(e) => update("postalCode", e.target.value)} className="input-field" placeholder="G1A 1A1" required />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{t.stepLabel} 03</span>
                  <h2 className="text-lg font-black text-navy-900 mb-6">{t.fields.projectDetails}</h2>
                </div>
                <div>
                  <label className="label-field" htmlFor="description">{t.fields.projectDescription} *</label>
                  <textarea id="description" value={form.description} onChange={(e) => update("description", e.target.value)} className="input-field" rows={4} placeholder={t.fields.projectDescriptionPlaceholder} required />
                </div>
                <div>
                  <label className="label-field" htmlFor="deadline">{t.fields.deadline}</label>
                  <input id="deadline" type="text" value={form.deadline} onChange={(e) => update("deadline", e.target.value)} className="input-field" placeholder={t.fields.deadlinePlaceholder} />
                </div>
                <div>
                  <label className="label-field" htmlFor="constraints">{t.fields.constraints}</label>
                  <textarea id="constraints" value={form.constraints} onChange={(e) => update("constraints", e.target.value)} className="input-field" rows={3} placeholder={t.fields.constraintsPlaceholder} />
                </div>
                <div>
                  <label className="label-field">{t.fields.files}</label>
                  <input type="file" onChange={handleFiles} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" multiple className="input-field text-sm" />
                  {files.length > 0 && (
                    <div className="mt-3 space-y-1.5">
                      {files.map((file, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-navy-500 bg-white px-4 py-1.5">
                          <span className="truncate flex-1">{file.name}</span>
                          <button type="button" onClick={() => removeFile(i)} className="text-red-500 hover:text-red-700 text-xs flex-shrink-0">&times;</button>
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
                <div>
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{t.stepLabel} 04</span>
                  <h2 className="text-lg font-black text-navy-900 mb-6">{t.fields.yourInfo}</h2>
                </div>
                <div>
                  <label className="label-field" htmlFor="name">{f.fullName} *</label>
                  <input id="name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-field" htmlFor="email">{f.emailLabel} *</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="phone">{f.phoneLabel} *</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" placeholder={f.phonePlaceholder} required />
                  </div>
                </div>
                <div>
                  <label className="label-field" htmlFor="company">{f.company}</label>
                  <input id="company" type="text" value={form.company} onChange={(e) => update("company", e.target.value)} className="input-field" />
                </div>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 text-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                <span className="ml-2">{errorMsg}</span>
              </div>
            )}

            {/* Privacy notice -- shown on last step */}
            {step === 4 && (
              <p className="text-navy-400 text-xs mt-4">
                {f.privacyNotice}{" "}
                <Link href={localePath("/politique-de-confidentialite", locale)} className="text-orange-400 hover:underline">{f.privacyLink}</Link>.
              </p>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-navy-200">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="text-sm font-bold text-navy-500 hover:text-navy-900 transition-colors uppercase tracking-wider">
                  &larr; {dict.common.previous}
                </button>
              ) : <div />}
              {step < 4 ? (
                <button type="button" onClick={() => setStep(step + 1)} disabled={!canProceed()} className="btn-chevron-orange text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                  {dict.common.next} &rarr;
                </button>
              ) : (
                <button type="submit" disabled={!canProceed() || status === "sending"} className="btn-chevron-orange text-sm disabled:opacity-40">
                  {status === "sending" ? f.sending : t.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
