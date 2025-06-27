'use client';

import React from 'react';
import Link from 'next/link';

const brands = [
  { name: 'Daikin', slug: 'daikin' },
  { name: 'Mitsubishi Electric', slug: 'mitsubishi-electric' },
  { name: 'Samsung', slug: 'samsung' },
  { name: 'LG', slug: 'lg' },
  { name: 'Toshiba', slug: 'toshiba' },
  { name: 'Tosot', slug: 'tosot' }
];

export function BrandLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Wij Installeren Alle Topmerken
          </h2>
          <p className="text-gray-600">
            Als erkend dealer en installateur werken wij met alle A-merken airconditioners. 
            Wij adviseren het merk dat het beste bij uw situatie past.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={`/merken/${brand.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="relative h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {/* Since we don't have actual logos, we'll use text placeholders */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Niet zeker welk merk het beste bij u past?
          </p>
          <Link
            href="/merken"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group"
          >
            Bekijk alle merken en modellen
            <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}