import { Organization, WithContext, Service, LocalBusiness } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StayCool Airco Sittard",
    url: "https://aircoinstallatiesittard.nl",
    logo: "https://aircoinstallatiesittard.nl/logo.png",
    description: "Professionele airconditioning services in Sittard en omgeving",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
    },
    sameAs: [
      "https://facebook.com/staycoolairco",
      "https://instagram.com/staycoolairco",
      "https://linkedin.com/company/staycoolairco",
    ],
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "StayCool Airco Sittard",
    },
    areaServed: {
      "@type": "City",
      name: "Sittard",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `StayCool Airco Sittard - ${city}`,
    description: `Professionele airconditioning installatie en onderhoud in ${city}. Erkend en gecertificeerd installateur.`,
    url: `https://aircoinstallatiesittard.nl/steden/${city.toLowerCase()}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    areaServed: {
      "@type": "City",
      name: city,
      containedIn: {
        "@type": "State",
        name: "Limburg",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "€€",
  }
}
