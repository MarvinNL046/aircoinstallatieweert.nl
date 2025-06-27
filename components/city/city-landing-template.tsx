'use client';

import React from 'react';
import { ArrowRight, Phone, Star, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ContactForm } from '@/components/forms/contact-form';
import { ServicesOptimized } from '@/components/sections/services-optimized';
import { BrandLogos } from '@/components/sections/brand-logos';
import { TestimonialsSection } from '@/components/sections/testimonials';

interface CityData {
  name: string;
  slug: string;
  region: string;
  nearbyAreas: string[];
  localInfo: {
    population?: string;
    characteristics?: string[];
  };
}

interface CityLandingTemplateProps {
  city: CityData;
  service?: 'installatie' | 'onderhoud' | 'service';
}

export function CityLandingTemplate({ city, service = 'installatie' }: CityLandingTemplateProps) {
  const serviceTexts = {
    installatie: {
      title: 'Professionele Airco Installatie',
      description: 'Complete installatie van energiezuinige airconditioners',
      price: 'Vanaf €1299',
      keywords: ['airco installatie', 'split airco', 'airco plaatsen', 'airco installateur']
    },
    onderhoud: {
      title: 'Betrouwbaar Airco Onderhoud',
      description: 'Regelmatig onderhoud voor optimale prestaties',
      price: 'Vanaf €11/maand',
      keywords: ['airco onderhoud', 'airco service', 'onderhoudscontract', 'airco reinigen']
    },
    service: {
      title: 'Snelle Airco Service & Reparatie',
      description: 'Vakkundige reparatie binnen 48 uur',
      price: 'Vanaf €89',
      keywords: ['airco service', 'airco reparatie', 'airco storing', 'airco specialist']
    }
  };

  const currentService = serviceTexts[service];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-6 text-sm">
              <Link href="/" className="hover:text-orange-400">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/steden" className="hover:text-orange-400">Steden</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">{city.name}</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {currentService.title} {city.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Dé specialist voor airconditioning in {city.name} en {city.region}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-orange-500 fill-orange-500' : 'text-orange-500 fill-orange-500/30'}`} />
                  ))}
                </div>
                <span className="font-semibold">4.7/5</span>
                <span className="text-gray-400">(163 reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>Lokale monteurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Binnen 48u geïnstalleerd</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg"
                asChild
              >
                <Link href="/offerte">
                  Gratis Offerte {city.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <a href="tel:0462021430">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-orange-500 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Airco Service in {city.name} en Omgeving
                </h2>
                <p className="text-gray-600 mb-4">
                  Onze gecertificeerde monteurs zijn dagelijks actief in {city.name} en omliggende plaatsen. 
                  We kennen de lokale situatie en kunnen snel ter plaatse zijn voor installatie, onderhoud of reparatie.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-semibold text-gray-900">{city.name}</span>
                  {city.nearbyAreas.map((area) => (
                    <React.Fragment key={area}>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-700">{area}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <ServicesOptimized />

      {/* Local Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Waarom StayCool Airco in {city.name}?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Lokale Aanwezigheid</h3>
              <p className="text-gray-600 text-sm">
                Monteurs uit de regio {city.region}, snel ter plaatse in {city.name}
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Snelle Service</h3>
              <p className="text-gray-600 text-sm">
                Installatie binnen 48 uur mogelijk in heel {city.name}
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Uitstekende Reviews</h3>
              <p className="text-gray-600 text-sm">
                4.7/5 score van klanten uit {city.name} en omstreken
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Gecertificeerd</h3>
              <p className="text-gray-600 text-sm">
                F-gassen & STEK erkend installateur voor {city.region}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Direct een Offerte voor {city.name}?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Vul het formulier in en ontvang binnen 24 uur een offerte op maat
            </p>
            
            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar voor een Koel Klimaat in {city.name}?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Vraag vandaag nog uw gratis offerte aan of bel direct
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link href="/offerte">
                Offerte Aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:0462021430">
                <Phone className="mr-2 h-5 w-5" />
                Direct Bellen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}