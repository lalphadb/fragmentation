export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  assets: string[];
  active: boolean;
}

export const jobs: Job[] = [
  {
    id: "boutefeu",
    title: "Boutefeu certifié",
    type: "Temps plein",
    location: "Québec et environs",
    description: "Nous recherchons un boutefeu d'expérience pour rejoindre notre équipe de dynamitage. Vous serez responsable de la préparation et de l'exécution des tirs sur divers chantiers.",
    responsibilities: [
      "Préparer et exécuter les plans de tir selon les directives",
      "Assurer la sécurité du périmètre et du personnel sur le chantier",
      "Manipuler et entreposer les explosifs conformément à la réglementation",
      "Rédiger les rapports de tir et documenter les résultats",
      "Communiquer avec les résidents et autorités au besoin",
    ],
    requirements: [
      "Certificat de boutefeu valide (Ressources naturelles Canada)",
      "Minimum 3 ans d'expérience en dynamitage",
      "Permis de conduire valide",
      "Capacité à travailler en équipe et de façon autonome",
      "Bonne condition physique",
    ],
    assets: [
      "Expérience en dynamitage résidentiel",
      "Carte ASP Construction",
      "Bilinguisme (français/anglais)",
    ],
    active: true,
  },
  {
    id: "foreur",
    title: "Opérateur de foreuse",
    type: "Temps plein",
    location: "Québec et environs",
    description: "Nous cherchons un opérateur de foreuse expérimenté pour nos chantiers de forage. Vous opérerez différents types de foreuses selon les besoins des projets.",
    responsibilities: [
      "Opérer les foreuses hydrauliques et pneumatiques",
      "Assurer l'entretien préventif des équipements",
      "Respecter les plans de forage et les spécifications techniques",
      "Maintenir un environnement de travail sécuritaire",
      "Signaler toute anomalie ou bris d'équipement",
    ],
    requirements: [
      "Minimum 2 ans d'expérience en forage de roc",
      "Connaissance des différents types de foreuses",
      "Permis de conduire valide (classe 3 un atout)",
      "Carte ASP Construction",
      "Disponibilité pour déplacements",
    ],
    assets: [
      "Expérience en forage d'ancrage",
      "Mécanique d'entretien",
      "Expérience en carrière",
    ],
    active: true,
  },
  {
    id: "manoeuvre",
    title: "Manoeuvre de chantier — Dynamitage",
    type: "Temps plein / Saisonnier",
    location: "Québec et environs",
    description: "Joignez notre équipe comme manoeuvre sur nos chantiers de dynamitage. Formation offerte aux candidats motivés. Excellente porte d'entrée dans le métier.",
    responsibilities: [
      "Assister le boutefeu dans la préparation des tirs",
      "Installer les tapis de protection et le périmètre de sécurité",
      "Charger et décharger les équipements",
      "Maintenir la propreté et l'ordre sur le chantier",
      "Effectuer diverses tâches manuelles selon les besoins",
    ],
    requirements: [
      "Bonne condition physique",
      "Fiabilité et ponctualité",
      "Permis de conduire valide",
      "Capacité à travailler à l'extérieur en toutes saisons",
      "Attitude positive et volonté d'apprendre",
    ],
    assets: [
      "Carte ASP Construction",
      "Expérience en construction ou excavation",
      "Intérêt pour le domaine du dynamitage",
    ],
    active: true,
  },
];
