import type { Locale } from "@/lib/i18n";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
}

const servicesFr: Service[] = [
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

const servicesEn: Service[] = [
  {
    id: "dynamitage-residentiel",
    title: "Residential & Commercial Blasting",
    slug: "dynamitage-residentiel",
    shortDesc: "Rock excavation for foundations, pools, parking lots and landscaping.",
    description: "We perform controlled blasting for all types of residential and commercial projects. Our techniques minimize vibrations and noise while complying with the strictest proximity standards near existing buildings. Every blast is precisely planned to ensure the safety of surrounding structures.",
    features: ["Foundations & basements", "In-ground pools", "Garage entrances", "Underground parking", "Landscaping", "Drains & municipal services"],
    image: "/images/realisations/Travaux_payasage.jpg",
  },
  {
    id: "dynamitage-industriel",
    title: "Industrial Blasting & Civil Engineering",
    slug: "dynamitage-industriel",
    shortDesc: "Large-scale road, infrastructure and major construction projects.",
    description: "Our teams manage large-scale projects: roads, bridges, aqueducts, sewers and municipal infrastructure. We plan every step with engineers and general contractors to ensure smooth and safe blasting operations.",
    features: ["Roads & highways", "Bridges & overpasses", "Aqueducts & sewers", "Power lines", "Industrial site preparation", "Land grading"],
    image: "/images/realisations/chantier1.jpg",
  },
  {
    id: "forage",
    title: "Specialized Drilling",
    slug: "forage",
    shortDesc: "Precision drilling for blasting, anchoring and pre-splitting.",
    description: "Drilling is the crucial first step of any blasting project. We use modern drills to ensure precise blast holes, whether for conventional blasting, pre-splitting or anchoring. Drilling quality directly impacts the blast result.",
    features: ["Conventional drilling", "Honeycomb drilling", "Pre-split drilling", "Anchor drilling", "Difficult terrain drilling", "Various diameters as needed"],
    image: "/images/realisations/forage_creusage.jpg",
  },
  {
    id: "fragmentation-mecanique",
    title: "Mechanical Rock Breaking",
    slug: "fragmentation-mecanique",
    shortDesc: "Blasting alternative: hydraulic breaker and expansive agents.",
    description: "When blasting is not possible or desirable — proximity to sensitive structures, municipal restrictions, or small volumes — we offer mechanical rock breaking solutions. Hydraulic breakers and expansive agents allow efficient rock fracturing without explosives.",
    features: ["Hydraulic rock breaker", "Non-detonating expansive agents", "Confined space work", "Zero vibration", "Near sensitive structures", "Ideal for small volumes"],
    image: "/images/realisations/Traveau_beton.jpg",
  },
  {
    id: "predecoupage-ancrage",
    title: "Pre-splitting & Anchoring",
    slug: "predecoupage-ancrage",
    shortDesc: "Precision techniques: clean rock faces, stabilization, anchoring.",
    description: "Pre-splitting produces clean, stable rock faces essential for trenches, road cuts and deep excavations. Anchoring stabilizes rock masses for civil engineering structures. These specialized techniques require advanced expertise that our team has fully mastered.",
    features: ["Wall pre-splitting", "Passive & active anchors", "Slope stabilization", "Trenches & cuts", "Clean faces for civil works", "Rock bolting"],
    image: "/images/realisations/Creusage_palier_.jpg",
  },
];

export const services: Record<Locale, Service[]> = {
  fr: servicesFr,
  en: servicesEn,
};
