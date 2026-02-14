import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur le dynamitage",
  description: "Réponses aux questions fréquentes : délais, permis, vibrations, voisinage, météo, inspections avant et après dynamitage.",
};

export default function FAQPage() {
  return <FaqClient faqs={faqs} />;
}
