export interface Realisation {
  id: string;
  title: string;
  category: string;
  region: string;
  year: number;
  description: string;
  image: string;
  details: string;
}

export const realisations: Realisation[] = [
  {
    id: "r1",
    title: "Excavation résidentielle — Fondation sur roc",
    category: "Résidentiel",
    region: "Québec",
    year: 2024,
    description: "Dynamitage contrôlé pour fondation de maison unifamiliale en zone résidentielle dense.",
    image: "/images/realisations/roche_residentiel_pret_sauter2.jpg",
    details: "Dynamitage à proximité de résidences existantes avec sismographes installés. Respect de toutes les normes de vibrations. Travaux complétés en 3 jours.",
  },
  {
    id: "r2",
    title: "Chantier commercial — Stationnement souterrain",
    category: "Commercial",
    region: "Trois-Rivières",
    year: 2024,
    description: "Forage et dynamitage pour stationnement souterrain de 200 places.",
    image: "/images/realisations/Tapis_protection.jpg",
    details: "Projet d'envergure en milieu urbain. Coordination avec l'entrepreneur général et respect strict des horaires de tir autorisés par la municipalité.",
  },
  {
    id: "r3",
    title: "Infrastructure routière — Élargissement de route",
    category: "Génie civil",
    region: "Saguenay",
    year: 2023,
    description: "Dynamitage pour élargissement de route régionale en terrain rocheux.",
    image: "/images/realisations/travaux_pelte.jpg",
    details: "Prédécoupage des parois pour assurer la stabilité du talus rocheux. Travaux réalisés avec circulation maintenue sur une voie.",
  },
  {
    id: "r5",
    title: "Fragmentation mécanique — Brise-roche urbain",
    category: "Commercial",
    region: "Lévis",
    year: 2023,
    description: "Fragmentation au brise-roche hydraulique en zone interdite au dynamitage.",
    image: "/images/realisations/travaux_beton2.jpg",
    details: "Travaux réalisés dans un secteur où le dynamitage était interdit par la municipalité. Le brise-roche a permis de compléter l'excavation dans les délais prévus.",
  },
  {
    id: "r6",
    title: "Forage d'ancrage — Stabilisation de talus",
    category: "Génie civil",
    region: "Charlevoix",
    year: 2024,
    description: "Forage et installation d'ancrages pour stabiliser un talus rocheux instable.",
    image: "/images/realisations/Pepine_creuse_trou.jpg",
    details: "Installation de boulons d'ancrage passifs dans le massif rocheux pour prévenir les éboulements. Travail en hauteur avec mesures de sécurité renforcées.",
  },
  {
    id: "r7",
    title: "Piscine creusée sur roc — Résidentiel",
    category: "Résidentiel",
    region: "Québec",
    year: 2023,
    description: "Dynamitage de précision pour piscine creusée sur terrain rocheux.",
    image: "/images/realisations/Travail_manuel_porotetion.jpg",
    details: "Excavation dans le roc à moins de 10 mètres de la résidence. Utilisation de charges réduites et tapis de protection. Aucun dommage aux structures environnantes.",
  },
  {
    id: "r8",
    title: "Projet de voirie — Réseau d'égout municipal",
    category: "Génie civil",
    region: "Portneuf",
    year: 2024,
    description: "Forage et dynamitage pour installation d'un réseau d'égout en sol rocheux.",
    image: "/images/realisations/chantier1.4.jpg",
    details: "Tranchée de 800 mètres linéaires dans le roc granitique. Prédécoupage des parois pour assurer la sécurité des travailleurs. Respect des échéanciers municipaux.",
  },
];

export const categories = ["Tous", "Résidentiel", "Commercial", "Génie civil"];
export const regions = ["Toutes", "Québec", "Trois-Rivières", "Saguenay", "Beauce", "Lévis", "Charlevoix", "Portneuf"];
