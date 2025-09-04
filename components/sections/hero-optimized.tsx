'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Star, CheckCircle, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const rotatingTexts = [
  'Professionele Airco Installatie',
  'Airco Service in Limburg',
  'Gecertificeerde Monteurs',
  'Energiezuinige Klimaatoplossingen'
];

export function HeroOptimized() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsTyping(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_1rruujp',
        'template_rkcpzhg',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'info@staycoolairco.nl'
        },
        'sjJ8kK6U9wFjY0zX9'
      );

      toast({
        title: 'Aanvraag verzonden!',
        description: 'We nemen binnen 24 uur contact met u op.',
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: 'Er ging iets mis',
        description: 'Probeer het later opnieuw of bel ons direct.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Typewriter Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <span className="block mb-2">Airco Installatie Weert</span>
                <span className="text-orange-500 inline-block overflow-hidden whitespace-nowrap">
                  <span className={`inline-block ${isTyping ? 'animate-typewriter' : ''} pr-1`}>
                    {rotatingTexts[currentTextIndex]}
                  </span>
                  <span className="animate-blink border-r-2 border-orange-500"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                De nummer 1 in airconditioning voor particulieren en bedrijven in Limburg. 
                Vakkundige installatie, onderhoud en reparatie.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-orange-500 fill-orange-500' : 'text-orange-500 fill-orange-500/30'}`} />
                  ))}
                </div>
                <span className="text-white font-semibold">4.7/5</span>
                <span className="text-gray-400">(163 reviews)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg transition-all duration-200"
                asChild
              >
                <a href="tel:0462021430">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </a>
              </Button>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>Gecertificeerde monteurs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>5 jaar garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>Gratis advies op locatie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>Onderhoud vanaf €11/maand</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Urgency Ribbon */}
            <div className="absolute -top-4 -right-4 z-20 bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg transform rotate-12">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Clock className="h-4 w-4" />
                Binnen 24u reactie
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Direct een offerte aanvragen?
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                />
                <Input
                  type="email"
                  placeholder="E-mailadres"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                />
                <Input
                  type="tel"
                  placeholder="Telefoonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                />
                <Textarea
                  placeholder="Vertel ons over uw project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900 resize-none"
                />
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Verzenden...' : 'Offerte Aanvragen'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>

              <div className="mt-4">
                <Link 
                  href="https://afspraken.staycoolairco.nl/"
                  target="_blank"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/30 hover:border-white/60 transition-all duration-200"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Plan Direct Een Afspraak
                </Link>
              </div>

              <p className="text-center text-white/80 text-sm mt-4">
                Of bel direct: <a href="tel:0462021430" className="text-orange-400 hover:text-orange-300 font-semibold">046 202 1430</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}