import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import SoumissionForm from "./SoumissionForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.soumission.meta.title, description: dict.soumission.meta.description };
}

export default function SoumissionPage() {
  return <SoumissionForm />;
}
