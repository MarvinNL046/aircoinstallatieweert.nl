import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { Card } from "@/components/ui/card"
import { AirVent, Settings, Wrench } from "lucide-react"
import Link from "next/link"
import diensten from "@/data/diensten.json"

export const metadata: Metadata = {
  title: "Airco Services Limburg | ⭐ 4.7/5 | Installatie €1299",
  description: "⚡ Alle airco services in Limburg onder 1 dak. ✓ Installatie vanaf €1299 ✓ Onderhoud €11/maand ✓ 48u reparatie. Bel direct: 046 202 1430",
  keywords: [
    "airco service limburg",
    "airco installatie limburg",
    "airco onderhoud limburg",
    "airco reparatie weert",
    "airco montage limburg",
    "airco bedrijf limburg"
  ],
}

export default function DienstenPage() {
  const breadcrumbItems = [
    { label: "Diensten", href: "/diensten" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-8">Onze Diensten</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {diensten.map((dienst) => {
          const Icon = dienst.slug === 'installatie' ? AirVent :
                      dienst.slug === 'onderhoud' ? Settings :
                      Wrench

          return (
            <Link key={dienst.slug} href={`/diensten/${dienst.slug}`}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-3">{dienst.title}</h2>
                <p className="text-gray-600 mb-4">{dienst.description}</p>
                <div className="mt-auto">
                  <p className="text-lg font-semibold text-blue-600">
                    Vanaf €{dienst.price.from},-
                  </p>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      <CTAWithForm 
        title="Vraag een Vrijblijvende Offerte Aan"
        description="Ontvang binnen 24 uur een offerte op maat voor uw airconditioning project."
      />
    </div>
  )
}