import type { Metadata } from "next";
import { securitySteps } from "@/data/security";
import SecuriteClient from "./SecuriteClient";

export const metadata: Metadata = {
  title: "Sécurité — Procédures et conformité",
  description: "Nos procédures de sécurité rigoureuses : inspections, périmètres, monitoring des vibrations, communication, conformité réglementaire.",
};

export default function SecuritePage() {
  return <SecuriteClient steps={securitySteps} />;
}
