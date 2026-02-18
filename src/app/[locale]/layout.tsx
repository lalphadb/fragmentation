import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { DictionaryProvider } from "@/lib/dictionary-context";
import DoubleHeader from "@/components/layout/DoubleHeader";
import SocialRail from "@/components/layout/SocialRail";
import FooterSection from "@/components/footer/Footer";
import CookieBanner from "@/components/cookie/CookieBanner";
import AnalyticsLoader from "@/components/analytics/AnalyticsLoader";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : "fr";
  const dict = getDictionary(lang);

  const title = lang === "fr"
    ? `${siteConfig.name} — Forage, Dynamitage et Fragmentation au Québec`
    : `${siteConfig.name} — Drilling, Blasting and Fragmentation in Quebec`;

  const description = lang === "fr" ? siteConfig.description : dict.common.footer.description;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      siteName: siteConfig.name,
      title: lang === "fr"
        ? `${siteConfig.name} — Forage, Dynamitage et Fragmentation`
        : `${siteConfig.name} — Drilling, Blasting and Fragmentation`,
      description,
      images: [{ url: "/images/realisations/chantier1.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description,
    },
    alternates: {
      canonical: lang === "fr" ? siteConfig.url : `${siteConfig.url}/en`,
      languages: {
        fr: siteConfig.url,
        en: `${siteConfig.url}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const lang = locale as Locale;
  const dict = getDictionary(lang);
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html lang={lang}>
      <head>
        <link rel="alternate" hrefLang="fr" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              url: siteConfig.url,
              description: dict.common.footer.description,
              areaServed: "Québec, Canada",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <DictionaryProvider dict={dict} locale={lang}>
          <DoubleHeader />
          <SocialRail />
          <main className="flex-1">{children}</main>
          <FooterSection />
          <CookieBanner />
          <AnalyticsLoader />
        </DictionaryProvider>
      </body>
    </html>
  );
}
