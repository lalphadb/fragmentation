import type { Metadata } from "next";
import { services } from "@/data/services";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Forage, dynamitage et fragmentation",
  description: "Services complets de forage, dynamitage, fragmentation mécanique, prédécoupage et ancrage. Résidentiel, commercial, industriel et carrières.",
};

export default function ServicesPage() {
  return <ServicesClient services={services} />;
}
