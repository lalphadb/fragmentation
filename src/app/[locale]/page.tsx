import { testimonials } from "@/data/testimonials";
import { isValidLocale } from "@/lib/i18n";
import HomeClient from "./HomeClient";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isValidLocale(raw) ? raw : "fr";
  return <HomeClient testimonials={testimonials[locale]} />;
}
