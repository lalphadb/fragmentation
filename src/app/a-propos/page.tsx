import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  title: "À propos — Notre entreprise",
  description: "Découvrez notre mission, nos valeurs et notre équipement. Experts en forage et dynamitage au service du Québec.",
};

export default function AProposPage() {
  return <AProposClient siteConfig={siteConfig} />;
}
