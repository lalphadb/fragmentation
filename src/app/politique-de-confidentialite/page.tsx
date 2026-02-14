import type { Metadata } from "next";
import ConfidentialiteClient from "./ConfidentialiteClient";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des cookies de Fragmentation M.R. inc. conformément à la Loi 25 du Québec.",
};

export default function PolitiquePage() {
  return <ConfidentialiteClient />;
}
