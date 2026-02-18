import type { Locale } from "@/lib/i18n";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqsFr: FAQ[] = [
  {
    id: "f1",
    question: "Quels sont les délais pour obtenir une soumission?",
    answer: "Nous fournissons généralement une soumission détaillée dans les 24 à 48 heures ouvrables suivant la réception de votre demande. Pour les projets urgents, contactez-nous directement par téléphone et nous ferons notre possible pour accélérer le processus.",
    category: "Soumission",
  },
  {
    id: "f2",
    question: "Faut-il un permis pour faire du dynamitage?",
    answer: "Oui, le dynamitage requiert des permis municipaux et parfois provinciaux. Nous nous chargeons de toutes les démarches administratives : demandes de permis, avis aux résidents, coordination avec les autorités locales et obtention des autorisations nécessaires. Nos boutefeux détiennent toutes les certifications requises par la loi.",
    category: "Permis",
  },
  {
    id: "f3",
    question: "Est-ce que le dynamitage peut endommager ma maison ou celle des voisins?",
    answer: "Non, lorsque réalisé par des professionnels qualifiés. Nous installons des sismographes avant chaque tir pour mesurer les vibrations en temps réel. Nos charges sont calculées pour rester bien en deçà des normes permises. Nous effectuons également des inspections pré et post-dynamitage des propriétés avoisinantes pour documenter l'état existant.",
    category: "Vibrations",
  },
  {
    id: "f4",
    question: "Que se passe-t-il en cas de mauvaises conditions météo?",
    answer: "La sécurité est notre priorité absolue. En cas d'orage électrique, de vents violents ou de conditions de visibilité réduite, les opérations de dynamitage sont reportées. Nous surveillons les prévisions météo en permanence et communiquons tout changement d'horaire aux parties concernées dans les meilleurs délais.",
    category: "Météo",
  },
  {
    id: "f5",
    question: "Comment se déroule une inspection pré-dynamitage?",
    answer: "Avant le début des travaux, notre technicien visite les propriétés situées dans le rayon d'influence du dynamitage. Il documente par photos et vidéos l'état des fondations, murs, planchers et installations. Ce rapport sert de référence en cas de réclamation. Une inspection post-dynamitage est aussi réalisée pour confirmer l'absence de dommages.",
    category: "Inspection",
  },
  {
    id: "f6",
    question: "Quelles sont les alternatives au dynamitage?",
    answer: "Lorsque le dynamitage n'est pas possible (restrictions municipales, proximité extrême de structures), nous offrons la fragmentation mécanique au brise-roche hydraulique et les produits expansifs non détonants. Ces méthodes sont plus lentes mais permettent de fracturer le roc sans vibrations ni bruit d'explosion.",
    category: "Services",
  },
];

const faqsEn: FAQ[] = [
  {
    id: "f1",
    question: "How long does it take to get a quote?",
    answer: "We generally provide a detailed quote within 24 to 48 business hours of receiving your request. For urgent projects, contact us directly by phone and we will do our best to expedite the process.",
    category: "Quote",
  },
  {
    id: "f2",
    question: "Is a permit required for blasting?",
    answer: "Yes, blasting requires municipal and sometimes provincial permits. We handle all administrative procedures: permit applications, resident notifications, coordination with local authorities and obtaining the necessary authorizations. Our blasters hold all certifications required by law.",
    category: "Permits",
  },
  {
    id: "f3",
    question: "Can blasting damage my house or my neighbours' property?",
    answer: "No, when carried out by qualified professionals. We install seismographs before each blast to measure vibrations in real time. Our charges are calculated to remain well within permitted standards. We also conduct pre- and post-blast inspections of neighbouring properties to document existing conditions.",
    category: "Vibrations",
  },
  {
    id: "f4",
    question: "What happens in case of bad weather?",
    answer: "Safety is our absolute priority. In the event of electrical storms, high winds or reduced visibility, blasting operations are postponed. We constantly monitor weather forecasts and communicate any schedule changes to all parties as quickly as possible.",
    category: "Weather",
  },
  {
    id: "f5",
    question: "How does a pre-blast inspection work?",
    answer: "Before work begins, our technician visits properties within the blast influence zone. They document the condition of foundations, walls, floors and installations with photos and videos. This report serves as a reference in case of a claim. A post-blast inspection is also carried out to confirm no damage occurred.",
    category: "Inspection",
  },
  {
    id: "f6",
    question: "What are the alternatives to blasting?",
    answer: "When blasting is not possible (municipal restrictions, extreme proximity to structures), we offer mechanical rock breaking with hydraulic breakers and non-detonating expansive agents. These methods are slower but allow rock fracturing without vibrations or blast noise.",
    category: "Services",
  },
];

export const faqs: Record<Locale, FAQ[]> = {
  fr: faqsFr,
  en: faqsEn,
};
