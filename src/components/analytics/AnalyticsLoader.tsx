"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { hasConsent } from "@/lib/cookie-consent";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export default function AnalyticsLoader() {
  const [analyticsGranted, setAnalyticsGranted] = useState(false);

  useEffect(() => {
    if (!GA4_ID) return;

    // Initialize Google Consent Mode v2 defaults
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const checkConsent = () => {
      const granted = hasConsent("analytics");
      setAnalyticsGranted(granted);
      if (granted) {
        gtag("consent", "update", { analytics_storage: "granted" });
      }
    };

    checkConsent();
    window.addEventListener("consent-updated", checkConsent);
    return () => window.removeEventListener("consent-updated", checkConsent);
  }, []);

  if (!GA4_ID || !analyticsGranted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
