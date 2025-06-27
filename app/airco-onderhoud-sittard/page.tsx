import { Metadata } from 'next';
import { CityLandingTemplate } from '@/components/city/city-landing-template';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

const cityData = {
  name: 'Sittard',
  slug: 'sittard',
  region: 'Westelijke Mijnstreek',
  nearbyAreas: ['Geleen', 'Born', 'Limbricht', 'Munstergeleen', 'Stadbroek', 'Ophoven', 'Broeksittard'],
  localInfo: {
    population: '93.000+ inwoners',
    characteristics: ['Fusiegemeente Sittard-Geleen', 'Chemelot campus', 'Historisch centrum']
  }
};

export const metadata: Metadata = {
  title: 'Airco Onderhoud Sittard | ✓ €11/maand | Airco Service',
  description: 'Airco onderhoud Sittard-Geleen door specialisten. ✓ Onderhoudscontract €11/maand ✓ Verlengde garantie ✓ Alle merken. Bel: 046 202 1430!',
  alternates: {
    canonical: 'https://aircoinstallatieweert.nl/airco-onderhoud-sittard'
  },
  openGraph: {
    title: 'Airco Onderhoud Sittard | StayCool Airco',
    description: 'Professioneel airco onderhoud in Sittard-Geleen. Voorkom storingen met regelmatig onderhoud.',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  }
};

export default function AircoSittardPage() {
  const localBusinessSchema = generateLocalBusinessSchema('Sittard');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Airco Onderhoud Sittard', item: '/airco-onderhoud-sittard' }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Airco Onderhoud Sittard",
    "provider": {
      "@type": "LocalBusiness",
      "name": "StayCool Airco Sittard",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sittard",
        "addressRegion": "Limburg"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sittard"
      },
      {
        "@type": "City",
        "name": "Geleen"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Onderhoudscontracten Sittard",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basis Onderhoudscontract",
            "description": "Jaarlijkse controle en reiniging"
          },
          "price": "11",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "11",
            "priceCurrency": "EUR",
            "unitText": "per maand"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Eenmalige Onderhoudsbeurt",
            "description": "Complete controle zonder contract"
          },
          "price": "149",
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
      
      <CityLandingTemplate city={cityData} service="onderhoud" />
    </>
  );
}