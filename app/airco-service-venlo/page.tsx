import { Metadata } from 'next';
import { CityLandingTemplate } from '@/components/city/city-landing-template';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

const cityData = {
  name: 'Venlo',
  slug: 'venlo',
  region: 'Noord-Limburg',
  nearbyAreas: ['Blerick', 'Tegelen', 'Belfeld', 'Steyl', 'Arcen', 'Velden', 'Lomm'],
  localInfo: {
    population: '102.000+ inwoners',
    characteristics: ['Grensstad', 'Greenport Venlo', 'Floriade stad']
  }
};

export const metadata: Metadata = {
  title: 'Airco Venlo | ⭐ 4.7/5 | Service & Installatie | Direct',
  description: 'Airco service Venlo & Noord-Limburg. ✓ Installatie vanaf €1299 ✓ Storing binnen 48u opgelost ✓ Alle merken. Bel nu: 046 202 1430!',
  alternates: {
    canonical: 'https://aircoinstallatieweert.nl/airco-service-venlo'
  },
  openGraph: {
    title: 'Airco Service Venlo | StayCool Airco',
    description: 'Complete airco service in Venlo. Van installatie tot onderhoud, wij zijn uw specialist in Noord-Limburg.',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  },
  keywords: 'airco venlo, airco service venlo, airconditioning venlo, airco installatie venlo, airco specialist noord-limburg'
};

export default function AircoVenloPage() {
  const localBusinessSchema = generateLocalBusinessSchema('Venlo');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Airco Service Venlo', item: '/airco-service-venlo' }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Airco Service Venlo",
    "provider": {
      "@type": "LocalBusiness",
      "name": "StayCool Airco Venlo",
      "telephone": "+31462021430",
      "email": "info@staycoolairco.nl",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "163"
      }
    },
    "serviceType": ["Airco Installatie", "Airco Onderhoud", "Airco Reparatie"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Venlo"
      },
      {
        "@type": "City",
        "name": "Blerick"
      },
      {
        "@type": "City",
        "name": "Tegelen"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airco Services Venlo",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airco Installatie Venlo",
            "description": "Vakkundige installatie van alle merken airconditioners"
          },
          "price": "1299",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airco Service Contract",
            "description": "All-in onderhoudscontract voor zorgeloos genieten"
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