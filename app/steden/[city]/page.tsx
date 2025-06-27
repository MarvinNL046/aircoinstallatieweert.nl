import { Metadata } from "next"
import { CityContent } from "@/components/city/city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cities = await getCities()
  const cityData = cities.find(city => city.city.toLowerCase() === params.city)
  
  if (!cityData) {
    return {
      title: "Stad niet gevonden | StayCool Airco Maastricht",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  return {
    title: `Airco ${cityData.city} €1299 | ⚡ 48u Installatie | ⭐ 4.7/5`,
    description: `Airco nodig in ${cityData.city}? Bespaar tot 40% op energie! ✓ Vaste prijs €1299 ✓ 5 jaar garantie ✓ Gratis advies. Bel NU: 046 202 1430`,
    openGraph: {
      title: `Airco Installatie ${cityData.city} | StayCool Airco`,
      description: `Professionele airconditioning in ${cityData.city}. Erkend installateur met 5 jaar garantie.`,
      url: `https://aircoinstallatieweert.nl/steden/${params.city}`,
      siteName: "StayCool Airco Weert",
      locale: "nl_NL",
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const cities = await getCities()
  return cities.map((city) => ({
    city: city.city.toLowerCase(),
  }))
}

export default async function CityPage({ params }: CityPageProps) {
  const cities = await getCities()
  const cityData = cities.find(
    (city) => city.city.toLowerCase() === params.city
  )

  if (!cityData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(cityData.city)

  // Enhanced description for all cities
  let description = `Professionele airconditioning services in ${cityData.city} door StayCool Airco. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven.`
  
  // Add more detailed content for Maastricht
  if (cityData.city.toLowerCase() === 'maastricht') {
    description = `Professionele airconditioning installatie in Maastricht door StayCool Airco. Als lokale specialist bieden wij complete airco-oplossingen voor woningen en bedrijven in Maastricht en omgeving. Onze ervaren monteurs kennen de stad en haar gebouwen goed en zorgen voor een perfecte installatie. Bekijk ook onze <a href="https://staycoolairco.nl/kennisbank/airco-maastricht" class="text-blue-600 hover:underline">kennisbank over airco's in Maastricht</a>.`
  }

  const city = {
    title: cityData.city,
    description: description,
    region: cityData.region,
    population: cityData.population,
    postal_codes: cityData.postal_codes
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CityContent city={city} />
    </>
  )
}
