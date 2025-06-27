'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Bel ons direct',
    content: '046 202 1430',
    href: 'tel:0462021430',
    description: 'Ma-vr: 09:00-17:00, Za: Gesloten'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    content: '06 3648 1054',
    href: 'https://wa.me/31636481054',
    description: 'Stuur ons een bericht'
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'info@staycoolairco.nl',
    href: 'mailto:info@staycoolairco.nl',
    description: 'We reageren binnen 24 uur'
  },
  {
    icon: MapPin,
    title: 'Werkgebied',
    content: 'Heel Limburg',
    href: '#',
    description: 'Geen bezoekadres'
  }
];

const openingHours = [
  { day: 'Maandag', hours: '09:00 - 17:00' },
  { day: 'Dinsdag', hours: '09:00 - 17:00' },
  { day: 'Woensdag', hours: '09:00 - 17:00' },
  { day: 'Donderdag', hours: '09:00 - 17:00' },
  { day: 'Vrijdag', hours: '09:00 - 16:00' },
  { day: 'Zaterdag', hours: 'Gesloten' },
  { day: 'Zondag', hours: 'Gesloten' }
];

export function ContactOptimized() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        title: 'Bericht verzonden!',
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Airco Installatie Weert
          </h2>
          <p className="text-lg text-gray-600">
            Vraag vrijblijvend advies of een gratis offerte aan. 
            Onze airco specialisten staan voor u klaar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 rounded-lg p-3 group-hover:bg-orange-500 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Openingstijden</h3>
              </div>
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className={`font-medium ${
                      schedule.hours === 'Gesloten' ? 'text-gray-500' : 'text-gray-900'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * Voor spoedgevallen buiten kantooruren kunt u ons WhatsApp nummer gebruiken.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Direct een offerte aanvragen?
            </h3>
            <p className="text-gray-600 mb-6">
              Vul onderstaand formulier in en ontvang binnen 24 uur een vrijblijvende offerte.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Uw naam"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
              <Input
                type="email"
                placeholder="E-mailadres"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
              <Input
                type="tel"
                placeholder="Telefoonnummer"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
              <Textarea
                placeholder="Vertel ons over uw project... (bijv. type woning, aantal ruimtes, specifieke wensen)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
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

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600">
                Liever direct contact? Bel <a href="tel:0462021430" className="text-orange-600 hover:text-orange-700 font-semibold">046 202 1430</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}