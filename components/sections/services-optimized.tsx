import React from 'react';
import { Wrench, Shield, ThermometerSun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: ThermometerSun,
    title: 'Airco Installatie',
    description: 'Professionele installatie van energiezuinige airconditioners voor optimaal comfort in uw woning of bedrijf.',
    features: [
      'Gratis advies op locatie',
      'Installatie binnen 2-3 werkdagen',
      'Alle topmerken leverbaar',
      '5 jaar installatiegarantie'
    ],
    href: '/diensten/installatie'
  },
  {
    icon: Shield,
    title: 'Airco Onderhoud',
    description: 'Regelmatig onderhoud voor optimale prestaties en langere levensduur van uw airconditioning.',
    features: [
      'Vanaf €11 per maand',
      'Jaarlijkse controle & reiniging',
      'Verlengde fabrieksgarantie',
      'Prioriteit bij storingen'
    ],
    href: '/diensten/onderhoud'
  },
  {
    icon: Wrench,
    title: 'Airco Reparatie',
    description: 'Snelle en vakkundige reparatie van alle merken airconditioners door gecertificeerde monteurs.',
    features: [
      'Storing binnen 48 uur verholpen',
      'Transparante prijzen',
      'Garantie op reparaties',
      'Noodreparaties mogelijk'
    ],
    href: '/diensten/reparatie'
  }
];

export function ServicesOptimized() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Onze Airco Services in Limburg
          </h2>
          <p className="text-lg text-gray-600">
            Van installatie tot onderhoud: wij zijn uw specialist voor airconditioning in heel Limburg. 
            Met meer dan 10 jaar ervaring en 163+ tevreden klanten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group"
              >
                {/* Icon */}
                <div className="bg-blue-100 rounded-xl p-4 w-fit mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                        <svg className="h-3 w-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold group-hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link href={service.href}>
                    Meer informatie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Zie Onze Monteurs in Actie
              </h3>
              <p className="text-gray-600 mb-6">
                Bekijk hoe onze gecertificeerde monteurs te werk gaan bij een professionele airco installatie. 
                Van planning tot oplevering: kwaliteit staat bij ons voorop.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 rounded-lg p-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">F-gassen & STEK gecertificeerd</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 rounded-lg p-2">
                    <ThermometerSun className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Specialist in alle topmerken</span>
                </div>
              </div>
            </div>

            {/* YouTube Embed */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="Airco Installatie Weert - Professionele montage"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}