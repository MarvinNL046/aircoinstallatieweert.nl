import { Organization, WithContext, Service, LocalBusiness, BreadcrumbList, FAQPage } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StayCool Airco Weert",
    url: "https://aircoinstallatieweert.nl",
    logo: "https://staycoolairco.nl/logo.png",
    description: "Professionele airconditioning installatie in Weert door StayCool Airco",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Weert",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
    },
    sameAs: [
      "https://staycoolairco.nl",
      "https://facebook.com/staycoolairco",
      "https://instagram.com/staycoolairco",
      "https://linkedin.com/company/staycoolairco",
    ],
    areaServed: {
      "@type": "City",
      name: "Weert",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "163",
      bestRating: "5",
      worstRating: "1"
    }
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
      name: "StayCool Airco",
    },
    areaServed: {
      "@type": "City",
      name: "Weert",
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
    name: `StayCool Airco - Airco Installatie ${city}`,
    description: `Professionele airconditioning installatie en onderhoud in ${city} door StayCool Airco. Erkend en gecertificeerd installateur.`,
    url: `https://aircoinstallatieweert.nl/steden/${city.toLowerCase()}`,
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
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "163"
    }
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aircoinstallatieweert.nl${item.item}`,
    })),
  }
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
}

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "StayCool Airco Weert",
    image: "https://aircoinstallatieweert.nl/og-image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aan de Bogen 11",
      addressLocality: "Nieuwstadt",
      postalCode: "6118 AS",
      addressCountry: "NL"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "163",
      bestRating: "5"
    },
    priceRange: "€€ - Installatie vanaf €1299"
  }
}
