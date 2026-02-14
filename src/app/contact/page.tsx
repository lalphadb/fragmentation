import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Nous joindre",
  description: "Contactez-nous par téléphone, courriel ou formulaire. Réponse rapide garantie pour tous vos projets de forage et dynamitage.",
};

export default function ContactPage() {
  return <ContactClient />;
}
