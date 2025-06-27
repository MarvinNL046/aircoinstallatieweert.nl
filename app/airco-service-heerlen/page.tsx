import { Metadata } from 'next';
import { CityLandingTemplate } from '@/components/city/city-landing-template';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

const cityData = {
  name: 'Heerlen',
  slug: 'heerlen',
  region: 'Parkstad Limburg',
  nearbyAreas: ['Hoensbroek', 'Heerlerheide', 'Heerlerbaan', 'Nieuw Lotbroek', 'Rennemig', 'Welten'],
  localInfo: {
    population: '87.000+ inwoners',
    characteristics: ['Voormalige mijnstad', 'Winkelcentrum Zuid-Limburg', 'Groene wijken']
  }
};

export const metadata: Metadata = {
  title: 'Airco Heerlen | ⭐ Service & Onderhoud | €11/maand',
  description: 'Airco service Heerlen & Parkstad. ✓ Onderhoud vanaf €11/maand ✓ 48u storing verholpen ✓ Alle merken. Bel 046 202 1430 voor directe service!',
  alternates: {
    canonical: 'https://aircoinstallatieweert.nl/airco-service-heerlen'
  },
  openGraph: {
    title: 'Airco Service Heerlen | StayCool Airco',
    description: 'Betrouwbare airco service en onderhoud in Heerlen en Parkstad Limburg. Gecertificeerde monteurs.',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  }
};

export default function AircoHeerlenPage() {
  const localBusinessSchema = generateLocalBusinessSchema('Heerlen');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Airco Service Heerlen', item: '/airco-service-heerlen' }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Airco Service Heerlen",
    "provider": {
      "@type": "LocalBusiness",
      "name": "StayCool Airco Heerlen"
    },
    "areaServed": {
      "@type": "City",
      "name": "Heerlen"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airco Onderhoud Heerlen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airco Onderhoudscontract",
            "description": "Jaarlijks onderhoud voor airco systemen in Heerlen"
          },
          "price": "11",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "11",
            "priceCurrency": "EUR",
            "unitText": "per maand"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <CityLandingTemplate city={cityData} service="service" />
    </>
  );
}