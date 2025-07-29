"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronLeft, ChevronRight, Phone, Mail, CheckCircle } from 'lucide-react'
import { aircoModels, type AircoModel } from '@/lib/airco-models'

interface AircoModelsProps {
  className?: string
}

export function AircoModels({ className }: AircoModelsProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('daikin')

  const handleContactClick = () => {
    // Scroll to contact form
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Airco Modellen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ontdek ons uitgebreide assortiment van premium airconditioners van toonaangevende merken. 
            Van stijlvolle wandmodellen tot krachtige vloermodellen - wij hebben de perfecte oplossing voor elke ruimte.
          </p>
        </div>

        {/* Brand Tabs */}
        <Tabs value={selectedBrand} onValueChange={setSelectedBrand} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white shadow-lg rounded-xl">
            {aircoModels.map((brand) => (
              <TabsTrigger 
                key={brand.id} 
                value={brand.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-medium"
              >
                {brand.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Models Grid */}
          {aircoModels.map((brand) => (
            <TabsContent key={brand.id} value={brand.id} className="mt-0">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600">{brand.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brand.models.map((model) => (
                  <ModelCard 
                    key={model.id} 
                    model={model} 
                    onContactClick={handleContactClick}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Welk model past het best bij u?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Onze specialisten helpen u graag bij het kiezen van de perfecte airco voor uw situatie. 
            Vraag een gratis advies aan en ontvang binnen 24 uur een persoonlijk voorstel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleContactClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Bel nu: 046 202 1430
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleContactClick}
            >
              <Mail className="mr-2 h-5 w-5" />
              Vraag offerte aan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ModelCardProps {
  model: AircoModel
  onContactClick: () => void
}

function ModelCard({ model, onContactClick }: ModelCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === model.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? model.images.length - 1 : prev - 1
    )
  }

  const getTypeLabel = (type: AircoModel['type']) => {
    const labels = {
      wall: 'Wandmodel',
      floor: 'Vloermodel', 
      cassette: 'Cassette',
      mobile: 'Mobiel'
    }
    return labels[type]
  }

  const getTypeColor = (type: AircoModel['type']) => {
    const colors = {
      wall: 'bg-green-100 text-green-800',
      floor: 'bg-blue-100 text-blue-800',
      cassette: 'bg-purple-100 text-purple-800',
      mobile: 'bg-orange-100 text-orange-800'
    }
    return colors[type]
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative aspect-square bg-gray-50">
        {/* Image */}
        <Image
          src={model.images[currentImageIndex]}
          alt={`${model.brand} ${model.name}`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Image Navigation */}
        {model.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Vorige afbeelding"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Volgende afbeelding"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Image Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {model.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-white/60'
                  }`}
                  aria-label={`Afbeelding ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className={getTypeColor(model.type)}>
            {getTypeLabel(model.type)}
          </Badge>
          {model.efficiency && (
            <Badge className="bg-green-100 text-green-800">
              {model.efficiency}
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {model.brand} {model.name}
          </h3>
          {model.capacity && (
            <p className="text-sm text-gray-500">{model.capacity}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {model.description}
        </p>

        {/* Color Variants */}
        {model.colorVariants && model.colorVariants.length > 1 && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Beschikbare kleuren:</p>
            <div className="flex flex-wrap gap-1">
              {model.colorVariants.map((color) => (
                <Badge key={color} variant="outline" className="text-xs">
                  {color}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Kenmerken:</p>
          <ul className="space-y-1">
            {model.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
            {model.features.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{model.features.length - 3} meer...
              </li>
            )}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t">
          <Button 
            onClick={onContactClick}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Vraag advies aan
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}