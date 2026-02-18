import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { siteConfig } from "@/lib/config";
import AProposClient from "./AProposClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.aPropos.meta.title, description: dict.aPropos.meta.description };
}

export default function AProposPage() {
  return <AProposClient siteConfig={siteConfig} />;
}
