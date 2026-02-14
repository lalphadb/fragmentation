export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
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
