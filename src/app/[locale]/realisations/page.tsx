import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import RealisationsClient from "./RealisationsClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.realisations.meta.title, description: dict.realisations.meta.description };
}

export default function RealisationsPage() {
  return <RealisationsClient />;
}
