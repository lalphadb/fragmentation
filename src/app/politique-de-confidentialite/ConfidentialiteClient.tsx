"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

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

export default function ConfidentialiteClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-28 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Légal
              </span>
              <div className="accent-line mb-6" />
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Politique de confidentialité
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
            Dernière mise à jour : {siteConfig.privacy.lastUpdated}
          </p>

          <Section num="01" title="Introduction">
            <p>
              {siteConfig.name} (ci-après « l&apos;entreprise ») s&apos;engage à protéger les
              renseignements personnels de ses clients, visiteurs et employés conformément à la
              Loi 25 sur la protection des renseignements personnels dans le secteur privé du Québec.
            </p>
            <p>
              La présente politique décrit les types de renseignements personnels que nous recueillons,
              les fins auxquelles ils sont utilisés, ainsi que vos droits en matière de vie privée.
            </p>
          </Section>

          <Section num="02" title="Responsable de la protection des renseignements personnels">
            <p>
              Le responsable de la protection des renseignements personnels au sein de
              l&apos;entreprise est :
            </p>
            <div className="bg-navy-50 p-4 border-l-2 border-orange-400">
              <p className="font-bold text-navy-900">{siteConfig.privacy.responsable}</p>
              <p>{siteConfig.privacy.title}</p>
              <p>Courriel : <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:underline">{siteConfig.email}</a></p>
              <p>Téléphone : <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 hover:underline">{siteConfig.phone}</a></p>
            </div>
          </Section>

          <Section num="03" title="Renseignements personnels collectés">
            <p>Nous recueillons les renseignements suivants selon le contexte :</p>
            <div className="space-y-3">
              <div className="bg-navy-50 p-4">
                <p className="font-bold text-navy-900 text-xs uppercase tracking-wider mb-2">Formulaire de contact</p>
                <p>Nom, adresse courriel, numéro de téléphone (facultatif), sujet et message.</p>
              </div>
              <div className="bg-navy-50 p-4">
                <p className="font-bold text-navy-900 text-xs uppercase tracking-wider mb-2">Demande de soumission</p>
                <p>Nom, courriel, téléphone, entreprise (facultatif), type de projet, service requis, adresse du chantier, ville, code postal, description du projet, échéancier, contraintes, fichiers joints.</p>
              </div>
              <div className="bg-navy-50 p-4">
                <p className="font-bold text-navy-900 text-xs uppercase tracking-wider mb-2">Candidature emploi</p>
                <p>Prénom, nom, courriel, téléphone, message de présentation, curriculum vitae (fichier).</p>
              </div>
            </div>
            <p>
              Nous ne recueillons aucune donnée biométrique ni aucun identifiant gouvernemental.
            </p>
          </Section>

          <Section num="04" title="Finalités de la collecte">
            <ul className="list-none space-y-2">
              {[
                "Répondre à vos demandes d'information et de contact",
                "Traiter vos demandes de soumission pour nos services",
                "Évaluer les candidatures pour nos postes disponibles",
                "Améliorer la qualité de nos services et de notre site web (avec votre consentement)",
                "Respecter nos obligations légales et réglementaires",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-2.5 h-2.5 text-orange-400 flex-shrink-0 mt-1.5" viewBox="0 0 8 8">
                    <path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="05" title="Cookies et technologies de suivi">
            <p>
              Notre site utilise des cookies, soit de petits fichiers texte stockés dans votre navigateur.
              Voici les catégories de cookies utilisés :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-navy-200">
                    <th className="text-left py-2 pr-4 font-bold text-navy-900 text-xs uppercase">Catégorie</th>
                    <th className="text-left py-2 pr-4 font-bold text-navy-900 text-xs uppercase">Finalité</th>
                    <th className="text-left py-2 font-bold text-navy-900 text-xs uppercase">Consentement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-navy-100">
                    <td className="py-3 pr-4 font-medium text-navy-800">Essentiels</td>
                    <td className="py-3 pr-4">Fonctionnement du site, préférences de consentement</td>
                    <td className="py-3">Non requis</td>
                  </tr>
                  <tr className="border-b border-navy-100">
                    <td className="py-3 pr-4 font-medium text-navy-800">Analytiques</td>
                    <td className="py-3 pr-4">Statistiques de visite, comportement de navigation</td>
                    <td className="py-3">Requis</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-navy-800">Marketing</td>
                    <td className="py-3 pr-4">Publicité ciblée, suivi inter-sites</td>
                    <td className="py-3">Requis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Vos préférences de cookies sont stockées localement dans votre navigateur (localStorage)
              et ne sont pas transmises à nos serveurs.
            </p>
          </Section>

          <Section num="06" title="Consentement">
            <p>
              Lors de votre première visite, un bandeau de consentement vous permet de choisir
              les catégories de cookies que vous acceptez. Vous pouvez modifier vos préférences
              à tout moment en utilisant le bouton ci-dessous ou via le lien «&nbsp;Paramètres cookies&nbsp;»
              dans le pied de page du site.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-preferences"))}
              className="btn-flat bg-orange-400 text-navy-950 hover:bg-orange-300 px-6 py-2.5 text-xs"
            >
              Modifier mes préférences de cookies
            </button>
          </Section>

          <Section num="07" title="Conservation des données">
            <ul className="list-none space-y-2">
              {[
                "Demandes de contact : conservées pendant 24 mois",
                "Demandes de soumission : conservées pendant 36 mois",
                "Candidatures emploi : conservées pendant 12 mois",
                "Préférences de cookies : stockées dans votre navigateur jusqu'à suppression manuelle",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-2.5 h-2.5 text-orange-400 flex-shrink-0 mt-1.5" viewBox="0 0 8 8">
                    <path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="08" title="Vos droits (Loi 25)">
            <p>Conformément à la Loi 25 du Québec, vous disposez des droits suivants :</p>
            <ul className="list-none space-y-2">
              {[
                "Droit d'accès : obtenir une copie de vos renseignements personnels que nous détenons",
                "Droit de rectification : corriger des renseignements inexacts ou incomplets",
                "Droit de suppression : demander l'effacement de vos données personnelles",
                "Droit de retrait du consentement : retirer votre consentement à tout moment",
                "Droit à la portabilité : recevoir vos données dans un format structuré et courant",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-2.5 h-2.5 text-orange-400 flex-shrink-0 mt-1.5" viewBox="0 0 8 8">
                    <path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Pour exercer vos droits, contactez notre responsable par courriel à{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:underline">{siteConfig.email}</a>{" "}
              ou par téléphone au{" "}
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 hover:underline">{siteConfig.phone}</a>.
              Nous répondrons dans un délai de 30 jours conformément à la loi.
            </p>
          </Section>

          <Section num="09" title="Sécurité">
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
              renseignements personnels :
            </p>
            <ul className="list-none space-y-2">
              {[
                "Transmission chiffrée via HTTPS/TLS",
                "Validation des données côté serveur",
                "Assainissement des entrées utilisateur",
                "Limitation du débit des requêtes (rate limiting)",
                "En-têtes de sécurité HTTP (CSP, HSTS, X-Frame-Options)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-2.5 h-2.5 text-orange-400 flex-shrink-0 mt-1.5" viewBox="0 0 8 8">
                    <path d="M2 0L6 4L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="10" title="Modifications à cette politique">
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment.
              En cas de modification substantielle, une nouvelle version du consentement
              sera demandée lors de votre prochaine visite. La date de dernière mise à jour
              est indiquée en haut de cette page.
            </p>
          </Section>

          <Section num="11" title="Contact">
            <p>
              Pour toute question relative à cette politique ou à la protection de vos
              renseignements personnels, n&apos;hésitez pas à nous contacter :
            </p>
            <div className="bg-navy-50 p-4 border-l-2 border-orange-400">
              <p className="font-bold text-navy-900">{siteConfig.name}</p>
              <p>Courriel : <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:underline">{siteConfig.email}</a></p>
              <p>Téléphone : <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-orange-400 hover:underline">{siteConfig.phone}</a></p>
            </div>
          </Section>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-navy-50 p-8 text-center mt-8">
              <h3 className="text-lg font-black text-navy-900 mb-3">Des questions?</h3>
              <p className="text-navy-500 text-sm mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
                concernant la protection de vos données.
              </p>
              <Link href="/contact" className="btn-flat bg-orange-400 text-navy-950 hover:bg-orange-300 px-8 py-3 text-sm">
                Nous contacter
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
