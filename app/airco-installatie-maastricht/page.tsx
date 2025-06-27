import { Metadata } from 'next';
import { CityLandingTemplate } from '@/components/city/city-landing-template';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

const cityData = {
  name: 'Maastricht',
  slug: 'maastricht',
  region: 'Zuid-Limburg',
  nearbyAreas: ['Amby', 'Borgharen', 'Itteren', 'Limmel', 'Heer', 'Heugem', 'Randwyck', 'Wolder'],
  localInfo: {
    population: '120.000+ inwoners',
    characteristics: ['Historische binnenstad', 'Studentenstad', 'Internationale gemeenschap']
  }
};

export const metadata: Metadata = {
  title: 'Airco Maastricht €1299 | ⚡ 24u Service | Lokale Monteurs',
  description: 'Airco installatie Maastricht door lokale specialisten. ✓ Vanaf €1299 ✓ Binnen 48u geïnstalleerd ✓ 5 jaar garantie. Bel: 046 202 1430 voor gratis offerte!',
  alternates: {
    canonical: 'https://aircoinstallatieweert.nl/airco-installatie-maastricht'
  },
  openGraph: {
    title: 'Airco Installatie Maastricht | StayCool Airco',
    description: 'Professionele airco installatie in Maastricht en Zuid-Limburg. Gecertificeerde monteurs, scherpe prijzen.',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  }
};

export default function AircoMaastrichtPage() {
  const localBusinessSchema = generateLocalBusinessSchema('Maastricht');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Airco Installatie Maastricht', item: '/airco-installatie-maastricht' }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Airco Installatie Maastricht",
    "provider": {
      "@type": "LocalBusiness",
      "name": "StayCool Airco Maastricht"
    },
    "areaServed": {
      "@type": "City",
      "name": "Maastricht"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airco Services Maastricht",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Split Airco Installatie",
            "description": "Complete installatie van split-unit airco in Maastricht"
          },
          "price": "1299",
          "priceCurrency": "EUR"
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
      
      <CityLandingTemplate city={cityData} service="installatie" />
    </>
  );
}