import type { Locale } from "@/lib/i18n";

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

const jobsFr: Job[] = [
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

const jobsEn: Job[] = [
  {
    id: "boutefeu",
    title: "Certified Blaster",
    type: "Full-time",
    location: "Québec City & area",
    description: "We are looking for an experienced blaster to join our blasting team. You will be responsible for preparing and executing blasts on various job sites.",
    responsibilities: [
      "Prepare and execute blast plans according to specifications",
      "Ensure safety of the perimeter and on-site personnel",
      "Handle and store explosives in compliance with regulations",
      "Write blast reports and document results",
      "Communicate with residents and authorities as needed",
    ],
    requirements: [
      "Valid blaster certificate (Natural Resources Canada)",
      "Minimum 3 years of blasting experience",
      "Valid driver's licence",
      "Ability to work in a team and independently",
      "Good physical condition",
    ],
    assets: [
      "Residential blasting experience",
      "ASP Construction card",
      "Bilingualism (French/English)",
    ],
    active: true,
  },
  {
    id: "foreur",
    title: "Drill Operator",
    type: "Full-time",
    location: "Québec City & area",
    description: "We are looking for an experienced drill operator for our drilling sites. You will operate various types of drills according to project needs.",
    responsibilities: [
      "Operate hydraulic and pneumatic drills",
      "Perform preventive equipment maintenance",
      "Follow drill plans and technical specifications",
      "Maintain a safe work environment",
      "Report any equipment anomalies or breakdowns",
    ],
    requirements: [
      "Minimum 2 years of rock drilling experience",
      "Knowledge of different drill types",
      "Valid driver's licence (Class 3 an asset)",
      "ASP Construction card",
      "Available for travel",
    ],
    assets: [
      "Anchor drilling experience",
      "Maintenance mechanics",
      "Quarry experience",
    ],
    active: true,
  },
  {
    id: "manoeuvre",
    title: "Blasting Site Labourer",
    type: "Full-time / Seasonal",
    location: "Québec City & area",
    description: "Join our team as a labourer on our blasting job sites. Training provided for motivated candidates. An excellent entry point into the trade.",
    responsibilities: [
      "Assist the blaster in blast preparation",
      "Install blast mats and safety perimeter",
      "Load and unload equipment",
      "Maintain cleanliness and order on site",
      "Perform various manual tasks as needed",
    ],
    requirements: [
      "Good physical condition",
      "Reliability and punctuality",
      "Valid driver's licence",
      "Ability to work outdoors in all seasons",
      "Positive attitude and willingness to learn",
    ],
    assets: [
      "ASP Construction card",
      "Construction or excavation experience",
      "Interest in the blasting field",
    ],
    active: true,
  },
];

export const jobs: Record<Locale, Job[]> = {
  fr: jobsFr,
  en: jobsEn,
};
