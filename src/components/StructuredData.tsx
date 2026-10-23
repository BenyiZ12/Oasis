"use client";

import { useTranslations } from "@/content/i18n";

const ADDRESS = {
  streetAddress: "Avenida principal de Ojochal, 50 metros al sur del Supermercado Jucaloa",
  addressLocality: "Ojochal",
  addressRegion: "Osa",
  addressCountry: "CR",
  postalCode: "",
} as const;

const CONTACT = {
  telefono: "+50647010110",
  movil: "+50684968778",
} as const;

const SAME_AS = [
  "https://www.facebook.com/oasisdelaspalmas/",
  "https://www.tripadvisor.com/Hotel_Review-g1022300-d11966362-Reviews-OASIS_de_las_Palmas-Ojochal_Province_of_Puntarenas.html?m=19905",
  "https://instagram.com/oasisdelaspalmas",
] as const;

export function StructuredData({ lang }: { lang: "es" | "en" }) {
  const { t } = useTranslations();
  const url = lang === "es" ? "https://www.oasisdelaspalmas.com/es/" : "https://www.oasisdelaspalmas.com/en/";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t.siteName,
    url,
    logo: "https://www.oasisdelaspalmas.com/logo.png",
    image: "https://www.oasisdelaspalmas.com/images/hotel/full_dsc02694_1668789351.jpg",
    telephone: CONTACT.telefono,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      addressCountry: ADDRESS.addressCountry,
    },
    sameAs: SAME_AS,
  };

  const lodging = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: t.siteName,
    url,
    telephone: CONTACT.telefono,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.0831782107183,
      longitude: -83.649295281903,
    },
    image: "https://www.oasisdelaspalmas.com/images/hotel/full_dsc02694_1668789351.jpg",
    sameAs: SAME_AS,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }} />
    </>
  );
}
