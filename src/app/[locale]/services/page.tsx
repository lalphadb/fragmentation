import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { services } from "@/data/services";
import ServicesClient from "./ServicesClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isValidLocale(locale) ? locale : "fr");
  return { title: dict.services.meta.title, description: dict.services.meta.description };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isValidLocale(raw) ? raw : "fr";
  return <ServicesClient services={services[locale]} />;
}
