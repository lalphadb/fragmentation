"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { jobs } from "@/data/jobs";
import ScrollReveal from "@/components/ScrollReveal";

export default function EmploiClient() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      setErrorMsg("Veuillez joindre votre CV.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      formData.append("jobId", selectedJob || "spontanee");
      formData.append("cv", cvFile);

      const res = await fetch("/api/emploi", { method: "POST", body: formData });
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

  const activeJobs = jobs.filter((j) => j.active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/realisations/Travail_preparation.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-32 pt-40">
          <div className="max-w-2xl">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">Rejoignez-nous</span>
            <div className="accent-line mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }} />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Carrières et emplois</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Joignez une équipe passionnée et contribuez à des projets d&apos;envergure partout au Québec.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* Job listings */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Opportunités</span>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight">Postes disponibles</h2>
            </div>
          </ScrollReveal>

          {activeJobs.length === 0 ? (
            <div className="bg-navy-50 p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-400" />
              <p className="text-navy-500 text-sm">Aucun poste affiché pour le moment, mais nous acceptons les candidatures spontanées!</p>
            </div>
          ) : (
            <div className="space-y-4 mb-20">
              {activeJobs.map((job, i) => (
                <ScrollReveal key={job.id} delay={i * 100}>
                  <div className="bg-navy-50 hover:shadow-lg transition-all duration-300 p-6 lg:p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-0 h-full bg-orange-400 transition-all duration-300 group-hover:w-1" />
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-black text-navy-900">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-[10px] font-bold bg-orange-400 text-white px-3 py-1 uppercase tracking-wider">{job.type}</span>
                          <span className="text-[10px] font-bold text-navy-400 bg-navy-200 px-3 py-1 uppercase tracking-wider">{job.location}</span>
                        </div>
                      </div>
                      <button onClick={() => { setSelectedJob(job.id); document.getElementById("candidature")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-chevron-orange text-sm !py-2 !px-5">
                        Postuler
                      </button>
                    </div>
                    <p className="text-navy-500 text-sm mb-4">{job.description}</p>

                    <details className="group/detail">
                      <summary className="text-orange-500 text-sm font-bold uppercase tracking-wider cursor-pointer hover:text-orange-600 inline-flex items-center gap-1">
                        Voir le détail
                        <svg className="w-3 h-3 group-open/detail:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="mt-5 space-y-5 text-sm">
                        <div>
                          <p className="font-bold text-navy-800 mb-2 uppercase tracking-wider text-xs">Responsabilités</p>
                          <ul className="space-y-1.5">
                            {job.responsibilities.map((r, ri) => (
                              <li key={ri} className="flex items-start gap-2 text-navy-500">
                                <svg className="w-3 h-3 text-orange-400/50 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none"><path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="1.5" /></svg>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-navy-800 mb-2 uppercase tracking-wider text-xs">Exigences</p>
                          <ul className="space-y-1.5">
                            {job.requirements.map((r, ri) => (
                              <li key={ri} className="flex items-start gap-2 text-navy-500">
                                <svg className="w-3 h-3 text-orange-400/50 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none"><path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="1.5" /></svg>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {job.assets.length > 0 && (
                          <div>
                            <p className="font-bold text-navy-800 mb-2 uppercase tracking-wider text-xs">Atouts</p>
                            <ul className="space-y-1.5">
                              {job.assets.map((a, ai) => (
                                <li key={ai} className="flex items-start gap-2 text-navy-400">
                                  <svg className="w-3 h-3 text-navy-300 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none"><path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="1.5" /></svg>
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </details>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Application form */}
          <div id="candidature" className="scroll-mt-24">
            <ScrollReveal>
              <div className="text-center mb-8">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Postuler</span>
                <div className="accent-line mx-auto mb-6" />
                <h2 className="text-2xl font-black text-navy-900 tracking-tight mb-2">
                  {selectedJob ? "Postuler" : "Candidature spontanée"}
                </h2>
                <p className="text-navy-500 text-sm">
                  {selectedJob
                    ? `Vous postulez pour le poste : ${activeJobs.find((j) => j.id === selectedJob)?.title || "Poste sélectionné"}`
                    : "Envoyez-nous votre CV même si aucun poste ne correspond à votre profil."}
                </p>
              </div>
            </ScrollReveal>

            {status === "success" ? (
              <div className="bg-navy-50 p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
                <div className="w-16 h-20 bg-orange-400 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-black text-navy-900 mb-2">Candidature envoyée!</h3>
                <p className="text-navy-500 text-sm">Merci pour votre intérêt. Nous examinerons votre candidature et vous contacterons si votre profil correspond à nos besoins.</p>
              </div>
            ) : (
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="bg-navy-50 p-6 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-field" htmlFor="firstName">Prénom *</label>
                      <input id="firstName" type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="input-field" required />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="lastName">Nom *</label>
                      <input id="lastName" type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="input-field" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-field" htmlFor="apEmail">Courriel *</label>
                      <input id="apEmail" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="apPhone">Téléphone *</label>
                      <input id="apPhone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" placeholder="(418) 000-0000" required />
                    </div>
                  </div>
                  <div>
                    <label className="label-field" htmlFor="apMessage">Message (optionnel)</label>
                    <textarea id="apMessage" value={form.message} onChange={(e) => update("message", e.target.value)} className="input-field" rows={3} placeholder="Présentez-vous brièvement..." />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="cv">CV (PDF, DOC ou DOCX) *</label>
                    <input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files?.[0] || null)} className="input-field text-sm" required />
                    {cvFile && <p className="text-xs text-navy-400 mt-2 bg-white px-4 py-1.5 inline-block">{cvFile.name}</p>}
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                      <span className="ml-2">{errorMsg}</span>
                    </div>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn-chevron-orange w-full disabled:opacity-50">
                    {status === "sending" ? "Envoi en cours..." : "Envoyer ma candidature"}
                  </button>
                  <p className="text-navy-400 text-xs mt-3">
                    En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre{" "}
                    <Link href="/politique-de-confidentialite" className="text-orange-400 hover:underline">politique de confidentialité</Link>.
                  </p>
                </form>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
