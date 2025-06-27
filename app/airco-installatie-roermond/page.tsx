import { Metadata } from 'next';
import { CityLandingTemplate } from '@/components/city/city-landing-template';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

const cityData = {
  name: 'Roermond',
  slug: 'roermond',
  region: 'Midden-Limburg',
  nearbyAreas: ['Swalmen', 'Herten', 'Merum', 'Leeuwen', 'Asenray', 'Boukoul', 'Maasniel'],
  localInfo: {
    population: '60.000+ inwoners',
    characteristics: ['Designer Outlet', 'Maasplassen', 'Bisschopsstad']
  }
};

export const metadata: Metadata = {
  title: 'Airco Roermond €1299 | ⚡ Snelle Installatie | Top Service',
  description: 'Airco installatie Roermond door lokale experts. ✓ Complete installatie €1299 ✓ Gratis advies ✓ 5 jaar garantie. Bel direct: 046 202 1430!',
  alternates: {
    canonical: 'https://aircoinstallatieweert.nl/airco-installatie-roermond'
  },
  openGraph: {
    title: 'Airco Installatie Roermond | StayCool Airco',
    description: 'Betrouwbare airco installatie in Roermond en Midden-Limburg. Scherpe prijzen, vakkundige montage.',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  },
  keywords: 'airco roermond, airco installatie roermond, airconditioning roermond, split airco roermond, airco specialist roermond'
};

export default function AircoRoermondPage() {
  const localBusinessSchema = generateLocalBusinessSchema('Roermond');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Airco Installatie Roermond', item: '/airco-installatie-roermond' }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Airco Installatie Roermond",
    "provider": {
      "@type": "LocalBusiness",
      "name": "StayCool Airco Roermond",
      "telephone": "+31462021430",
      "priceRange": "€€"
    },
    "areaServed": {
      "@type": "City",
      "name": "Roermond",
      "containedIn": {
        "@type": "State",
        "name": "Limburg"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Complete Airco Installatie Roermond",
      "price": "1299",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2024-12-31"
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