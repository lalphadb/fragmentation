export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jean-François Tremblay",
    role: "Entrepreneur général, Québec",
    text: "Équipe fiable et professionnelle. Ils ont dynamité le roc pour nos fondations en respectant tous les délais. La communication avec les voisins était impeccable. Je les recommande sans hésitation.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marie-Claude Gagnon",
    role: "Propriétaire résidentielle, Lévis",
    text: "J'étais nerveuse à l'idée de faire dynamiter près de ma maison pour la piscine, mais l'équipe m'a rassurée à chaque étape. L'inspection avant et après les travaux m'a donné confiance. Résultat parfait!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Patrick Lavoie",
    role: "Directeur de projet, Génie civil",
    text: "Nous faisons appel à Fragmentation M.R pour nos projets de voirie depuis trois ans. Leur rigueur dans la planification des tirs et le contrôle des vibrations est exemplaire. Des vrais professionnels.",
    rating: 5,
  },
];
