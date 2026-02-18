import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { securitySteps } from "@/data/security";
import SecuriteClient from "./SecuriteClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.securite.meta.title, description: dict.securite.meta.description };
}

export default async function SecuritePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isValidLocale(raw) ? raw : "fr";
  return <SecuriteClient steps={securitySteps[locale]} />;
}
