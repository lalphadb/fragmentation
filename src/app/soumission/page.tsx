import type { Metadata } from "next";
import SoumissionForm from "./SoumissionForm";

export const metadata: Metadata = {
  title: "Demander une soumission gratuite — Forage et dynamitage",
  description: "Remplissez notre formulaire en ligne pour obtenir une soumission gratuite pour votre projet de forage, dynamitage ou fragmentation.",
};

export default function SoumissionPage() {
  return <SoumissionForm />;
}
