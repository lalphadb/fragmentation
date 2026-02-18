import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import ConfidentialiteClient from "./ConfidentialiteClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.confidentialite.meta.title, description: dict.confidentialite.meta.description };
}

export default function PolitiquePage() {
  return <ConfidentialiteClient />;
}
