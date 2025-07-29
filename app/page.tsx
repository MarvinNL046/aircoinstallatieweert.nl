import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/hero-optimized"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { WhyUs } from "@/components/sections/why-us"
import { BrandLogos } from "@/components/sections/brand-logos"
import { AircoModels } from "@/components/sections/airco-models"
import { ContactOptimized } from "@/components/sections/contact-optimized"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTABanner } from "@/components/sections/cta-banner"
import { generateOrganizationSchema, generateReviewSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Weert €1299 | ⚡24u Offerte | ⭐ 4.7/5 | StayCool™',
  description: 'Airco nodig in Weert? ⚡ Installatie binnen 48u ✓ Vanaf €1299 ✓ 5 jaar garantie ✓ Gratis advies. Bel nu: 046 202 1430 of vraag online offerte aan!',
  alternates: {
    canonical: 'https://aircoinstallatieweert.nl'
  },
  keywords: 'airco weert, airco installatie weert, airco limburg, airco specialist limburg, airconditioning weert, airco installateur limburg'
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const reviewSchema = generateReviewSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <main>
        <HeroOptimized />
        <ServicesOptimized />
        <WhyUs />
        <BrandLogos />
        <AircoModels />
        <TestimonialsSection />
        <ContactOptimized />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
