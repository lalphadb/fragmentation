export interface SecurityStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const securitySteps: SecurityStep[] = [
  {
    id: "s1",
    title: "Évaluation du site",
    description: "Analyse complète du terrain, du type de roc, des structures avoisinantes et des conditions environnementales. Identification de tous les risques potentiels avant le début des travaux.",
    icon: "🔍",
  },
  {
    id: "s2",
    title: "Inspection pré-dynamitage",
    description: "Documentation photographique et vidéo de toutes les propriétés et infrastructures situées dans le rayon d'influence. Rapport détaillé remis aux propriétaires et assureurs.",
    icon: "📋",
  },
  {
    id: "s3",
    title: "Conception du plan de tir",
    description: "Calcul précis des charges, du patron de forage, du séquençage des détonateurs et des délais. Chaque tir est conçu pour optimiser la fragmentation tout en minimisant les vibrations et les projections.",
    icon: "📐",
  },
  {
    id: "s4",
    title: "Installation du périmètre de sécurité",
    description: "Mise en place de barrières, signalisation et sentinelles. Aucune personne non autorisée ne peut se trouver dans la zone de tir. Communication par radio entre tous les intervenants.",
    icon: "🚧",
  },
  {
    id: "s5",
    title: "Tapis de protection et couverture",
    description: "Installation de tapis de protection en caoutchouc et filets pour contenir les projections de roc. Cette étape est systématique pour tous les tirs en zone résidentielle et commerciale.",
    icon: "🛡️",
  },
  {
    id: "s6",
    title: "Monitoring des vibrations",
    description: "Sismographes installés aux points de mesure critiques pour enregistrer les vibrations en temps réel. Les données sont conservées et disponibles pour consultation par les autorités et les résidents.",
    icon: "📊",
  },
  {
    id: "s7",
    title: "Communication et avis",
    description: "Avis transmis aux résidents et entreprises avoisinantes avant chaque série de tirs. Coordination avec les services d'urgence et les autorités municipales. Ligne téléphonique dédiée aux questions.",
    icon: "📢",
  },
  {
    id: "s8",
    title: "Inspection post-dynamitage",
    description: "Vérification immédiate des structures avoisinantes après le tir. Documentation de l'état post-travaux et comparaison avec les rapports pré-dynamitage. Suivi auprès des résidents.",
    icon: "✅",
  },
];
