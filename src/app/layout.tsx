import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import DoubleHeader from "@/components/layout/DoubleHeader";
import SocialRail from "@/components/layout/SocialRail";
import FooterSection from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Forage, Dynamitage et Fragmentation au Québec`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Forage, Dynamitage et Fragmentation`,
    description: siteConfig.description,
    images: [{ url: "/images/realisations/chantier1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              url: siteConfig.url,
              description: siteConfig.description,
              areaServed: "Québec, Canada",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <DoubleHeader />
        <SocialRail />
        <main className="flex-1">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
