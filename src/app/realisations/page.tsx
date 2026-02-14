import type { Metadata } from "next";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = {
  title: "Réalisations — Nos projets de forage et dynamitage",
  description: "Portfolio de projets complétés : dynamitage résidentiel, commercial, génie civil, carrières. Partout au Québec.",
};

export default function RealisationsPage() {
  return <RealisationsClient />;
}
