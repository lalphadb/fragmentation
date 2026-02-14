import type { Metadata } from "next";
import EmploiClient from "./EmploiClient";

export const metadata: Metadata = {
  title: "Emplois et carrières — Rejoignez notre équipe",
  description: "Postes disponibles en forage et dynamitage. Boutefeu, opérateur de foreuse, manoeuvre. Candidature spontanée acceptée.",
};

export default function EmploiPage() {
  return <EmploiClient />;
}
