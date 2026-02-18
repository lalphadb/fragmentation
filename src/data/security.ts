import type { Locale } from "@/lib/i18n";

export interface SecurityStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const securityStepsFr: SecurityStep[] = [
  {
    id: "s1",
    title: "Évaluation du site",
    description: "Analyse complète du terrain, du type de roc, des structures avoisinantes et des conditions environnementales. Identification de tous les risques potentiels avant le début des travaux.",
    icon: "\uD83D\uDD0D",
  },
  {
    id: "s2",
    title: "Inspection pré-dynamitage",
    description: "Documentation photographique et vidéo de toutes les propriétés et infrastructures situées dans le rayon d'influence. Rapport détaillé remis aux propriétaires et assureurs.",
    icon: "\uD83D\uDCCB",
  },
  {
    id: "s3",
    title: "Conception du plan de tir",
    description: "Calcul précis des charges, du patron de forage, du séquençage des détonateurs et des délais. Chaque tir est conçu pour optimiser la fragmentation tout en minimisant les vibrations et les projections.",
    icon: "\uD83D\uDCD0",
  },
  {
    id: "s4",
    title: "Installation du périmètre de sécurité",
    description: "Mise en place de barrières, signalisation et sentinelles. Aucune personne non autorisée ne peut se trouver dans la zone de tir. Communication par radio entre tous les intervenants.",
    icon: "\uD83D\uDEA7",
  },
  {
    id: "s5",
    title: "Tapis de protection et couverture",
    description: "Installation de tapis de protection en caoutchouc et filets pour contenir les projections de roc. Cette étape est systématique pour tous les tirs en zone résidentielle et commerciale.",
    icon: "\uD83D\uDEE1\uFE0F",
  },
  {
    id: "s6",
    title: "Monitoring des vibrations",
    description: "Sismographes installés aux points de mesure critiques pour enregistrer les vibrations en temps réel. Les données sont conservées et disponibles pour consultation par les autorités et les résidents.",
    icon: "\uD83D\uDCCA",
  },
  {
    id: "s7",
    title: "Communication et avis",
    description: "Avis transmis aux résidents et entreprises avoisinantes avant chaque série de tirs. Coordination avec les services d'urgence et les autorités municipales. Ligne téléphonique dédiée aux questions.",
    icon: "\uD83D\uDCE2",
  },
  {
    id: "s8",
    title: "Inspection post-dynamitage",
    description: "Vérification immédiate des structures avoisinantes après le tir. Documentation de l'état post-travaux et comparaison avec les rapports pré-dynamitage. Suivi auprès des résidents.",
    icon: "\u2705",
  },
];

const securityStepsEn: SecurityStep[] = [
  {
    id: "s1",
    title: "Site Assessment",
    description: "Complete analysis of the terrain, rock type, surrounding structures and environmental conditions. Identification of all potential risks before work begins.",
    icon: "\uD83D\uDD0D",
  },
  {
    id: "s2",
    title: "Pre-blast Inspection",
    description: "Photo and video documentation of all properties and infrastructure within the blast influence zone. Detailed report provided to property owners and insurers.",
    icon: "\uD83D\uDCCB",
  },
  {
    id: "s3",
    title: "Blast Plan Design",
    description: "Precise calculation of charges, drill pattern, detonator sequencing and delays. Each blast is designed to optimize rock fragmentation while minimizing vibrations and flyrock.",
    icon: "\uD83D\uDCD0",
  },
  {
    id: "s4",
    title: "Safety Perimeter Setup",
    description: "Installation of barriers, signage and sentries. No unauthorized personnel may be within the blast zone. Radio communication between all team members.",
    icon: "\uD83D\uDEA7",
  },
  {
    id: "s5",
    title: "Blast Mats & Cover",
    description: "Installation of rubber blast mats and nets to contain rock projections. This step is standard for all blasts in residential and commercial areas.",
    icon: "\uD83D\uDEE1\uFE0F",
  },
  {
    id: "s6",
    title: "Vibration Monitoring",
    description: "Seismographs installed at critical measurement points to record vibrations in real time. Data is stored and available for review by authorities and residents.",
    icon: "\uD83D\uDCCA",
  },
  {
    id: "s7",
    title: "Communication & Notices",
    description: "Notices sent to neighbouring residents and businesses before each blast series. Coordination with emergency services and municipal authorities. Dedicated phone line for questions.",
    icon: "\uD83D\uDCE2",
  },
  {
    id: "s8",
    title: "Post-blast Inspection",
    description: "Immediate verification of surrounding structures after the blast. Documentation of post-work conditions and comparison with pre-blast reports. Follow-up with residents.",
    icon: "\u2705",
  },
];

export const securitySteps: Record<Locale, SecurityStep[]> = {
  fr: securityStepsFr,
  en: securityStepsEn,
};
