"use client";

import { useState, FormEvent } from "react";
import { jobs } from "@/data/jobs";

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
      <section className="page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Carrières et emplois</h1>
          <p className="text-dark-300 text-xl max-w-2xl mx-auto">
            Joignez une équipe passionnée et contribuez à des projets d&apos;envergure partout au Québec.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-950 mb-8">Postes disponibles</h2>

          {activeJobs.length === 0 ? (
            <div className="bg-dark-50 rounded-xl p-8 text-center">
              <p className="text-dark-600">Aucun poste affiché pour le moment, mais nous acceptons les candidatures spontanées!</p>
            </div>
          ) : (
            <div className="space-y-6 mb-12">
              {activeJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-950">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">{job.type}</span>
                        <span className="text-xs bg-dark-100 text-dark-600 px-3 py-1 rounded-full">📍 {job.location}</span>
                      </div>
                    </div>
                    <button onClick={() => { setSelectedJob(job.id); document.getElementById("candidature")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary text-sm">
                      Postuler
                    </button>
                  </div>
                  <p className="text-dark-600 mb-4">{job.description}</p>

                  <details>
                    <summary className="text-primary-600 text-sm font-semibold cursor-pointer hover:text-primary-700">Voir le détail du poste ▾</summary>
                    <div className="mt-4 space-y-4 text-sm">
                      <div>
                        <p className="font-semibold text-dark-800 mb-2">Responsabilités :</p>
                        <ul className="space-y-1">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-dark-600"><span className="text-primary-600">•</span>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-dark-800 mb-2">Exigences :</p>
                        <ul className="space-y-1">
                          {job.requirements.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-dark-600"><span className="text-primary-600">•</span>{r}</li>
                          ))}
                        </ul>
                      </div>
                      {job.assets.length > 0 && (
                        <div>
                          <p className="font-semibold text-dark-800 mb-2">Atouts :</p>
                          <ul className="space-y-1">
                            {job.assets.map((a, i) => (
                              <li key={i} className="flex items-start gap-2 text-dark-600"><span className="text-dark-400">+</span>{a}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          )}

          {/* Application form */}
          <div id="candidature" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-dark-950 mb-2">
              {selectedJob ? "Postuler" : "Candidature spontanée"}
            </h2>
            <p className="text-dark-600 mb-8">
              {selectedJob
                ? `Vous postulez pour le poste : ${activeJobs.find((j) => j.id === selectedJob)?.title || "Poste sélectionné"}`
                : "Envoyez-nous votre CV même si aucun poste ne correspond à votre profil. Nous gardons les candidatures en dossier."}
            </p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-dark-950 mb-2">Candidature envoyée!</h3>
                <p className="text-dark-600">Merci pour votre intérêt. Nous examinerons votre candidature et vous contacterons si votre profil correspond à nos besoins.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
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
                  {cvFile && <p className="text-sm text-dark-500 mt-1">📎 {cvFile.name}</p>}
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{errorMsg}</div>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center disabled:opacity-50">
                  {status === "sending" ? "Envoi en cours..." : "Envoyer ma candidature"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
