export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "dynamitage-residentiel",
    title: "Dynamitage résidentiel et commercial",
    slug: "dynamitage-residentiel",
    shortDesc: "Excavation de roc pour fondations, piscines, stationnements et aménagements paysagers.",
    description: "Nous réalisons le dynamitage contrôlé pour tous types de projets résidentiels et commerciaux. Nos techniques minimisent les vibrations et le bruit, en respectant les normes les plus strictes de proximité avec les bâtiments existants. Chaque tir est planifié avec précision pour garantir la sécurité des structures avoisinantes.",
    features: ["Fondations et sous-sols", "Piscines creusées", "Entrées de garage", "Stationnements souterrains", "Aménagements paysagers", "Drains et services municipaux"],
    image: "/images/realisations/Travaux_payasage.jpg",
  },
  {
    id: "dynamitage-industriel",
    title: "Dynamitage industriel et génie civil",
    slug: "dynamitage-industriel",
    shortDesc: "Grands chantiers de voirie, infrastructures et travaux d'envergure.",
    description: "Nos équipes gèrent des projets de grande envergure : routes, ponts, aqueducs, égouts et infrastructures municipales. Nous planifions chaque étape avec les ingénieurs et les entrepreneurs généraux pour assurer un déroulement fluide et sécuritaire des opérations de dynamitage.",
    features: ["Routes et autoroutes", "Ponts et viaducs", "Aqueducs et égouts", "Lignes électriques", "Préparation de sites industriels", "Nivellement de terrain"],
    image: "/images/realisations/chantier1.jpg",
  },
  {
    id: "forage",
    title: "Forage spécialisé",
    slug: "forage",
    shortDesc: "Forage de précision pour dynamitage, ancrage et prédécoupage.",
    description: "Le forage est la première étape cruciale de tout projet de dynamitage. Nous utilisons des foreuses modernes pour garantir la précision des trous de mine, que ce soit pour le dynamitage conventionnel, le prédécoupage ou les ancrages. La qualité du forage influence directement le résultat du tir.",
    features: ["Forage conventionnel", "Forage nid d'abeille", "Forage de prédécoupage", "Forage d'ancrage", "Forage en terrain difficile", "Diamètres variés selon les besoins"],
    image: "/images/realisations/forage_creusage.jpg",
  },
  {
    id: "fragmentation-mecanique",
    title: "Fragmentation mécanique",
    slug: "fragmentation-mecanique",
    shortDesc: "Alternative au dynamitage : brise-roche hydraulique et expansifs.",
    description: "Lorsque le dynamitage n'est pas possible ou souhaitable — proximité de structures sensibles, restrictions municipales, ou petits volumes — nous offrons des solutions de fragmentation mécanique. Le brise-roche hydraulique et les produits expansifs permettent de fracturer le roc efficacement sans explosifs.",
    features: ["Brise-roche hydraulique", "Produits expansifs non détonants", "Travail en espace restreint", "Zéro vibration", "Proximité de structures sensibles", "Idéal pour petits volumes"],
    image: "/images/realisations/Traveau_beton.jpg",
  },
  {
    id: "predecoupage-ancrage",
    title: "Prédécoupage et ancrage",
    slug: "predecoupage-ancrage",
    shortDesc: "Techniques de précision : parois nettes, stabilisation de roc, ancrages.",
    description: "Le prédécoupage permet d'obtenir des parois de roc nettes et stables, essentielles pour les tranchées, les coupes de route et les excavations profondes. L'ancrage stabilise les massifs rocheux pour les ouvrages de génie civil. Ces techniques spécialisées requièrent une expertise pointue que notre équipe maîtrise parfaitement.",
    features: ["Prédécoupage de parois", "Ancrages passifs et actifs", "Stabilisation de talus", "Tranchées et coupes", "Parois nettes pour génie civil", "Boulonnage de roc"],
    image: "/images/realisations/Creusage_palier_.jpg",
  },
];
