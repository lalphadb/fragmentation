import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import EmploiClient from "./EmploiClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.emploi.meta.title, description: dict.emploi.meta.description };
}

export default function EmploiPage() {
  return <EmploiClient />;
}
