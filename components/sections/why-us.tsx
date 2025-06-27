import React from 'react';
import { Award, Clock, Euro, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    icon: Euro,
    title: 'Gratis Offerte',
    description: 'Vrijblijvend advies op locatie zonder verborgen kosten'
  },
  {
    icon: Award,
    title: 'Gecertificeerde Monteurs',
    description: 'F-gassen & STEK gecertificeerd voor gegarandeerde kwaliteit'
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Installatie binnen 2-3 werkdagen, storingen binnen 48 uur verholpen'
  },
  {
    icon: ShieldCheck,
    title: '5 Jaar Garantie',
    description: 'Uitgebreide garantie op installatie en materialen'
  }
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor Airco Installatie Weert?
          </h2>
          <p className="text-lg text-gray-600">
            Met meer dan 10 jaar ervaring zijn wij dé airco specialist in Limburg. 
            Ontdek waarom 163+ klanten ons waarderen met 4.7/5 sterren.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="mx-auto bg-orange-100 rounded-2xl p-6 w-fit mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="h-10 w-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Overtuigd? Vraag vandaag nog uw gratis offerte aan!
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/offerte">
              Gratis Offerte Aanvragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}