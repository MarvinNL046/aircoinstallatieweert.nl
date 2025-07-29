export interface AircoModel {
  id: string
  name: string
  brand: string
  type: 'wall' | 'floor' | 'cassette' | 'mobile'
  images: string[]
  features: string[]
  description: string
  category: 'residential' | 'commercial'
  colorVariants?: string[]
  capacity?: string
  efficiency?: string
}

export interface AircoBrand {
  id: string
  name: string
  logo?: string
  description: string
  models: AircoModel[]
}

export const aircoModels: AircoBrand[] = [
  {
    id: 'daikin',
    name: 'Daikin',
    description: 'Wereldwijd marktleider in klimaattechnologie met innovatieve en energiezuinige oplossingen.',
    models: [
      {
        id: 'daikin-emura',
        name: 'Emura',
        brand: 'Daikin',
        type: 'wall',
        images: [
          '/images/daikin-emura-wit.webp',
          '/images/daikin-emura-zilver.webp',
          '/images/daikin-emura-zwart.webp'
        ],
        features: [
          'Premium design met houten finish opties',
          'Zeer stil in werking',
          'WiFi connectiviteit',
          'Geavanceerde luchtfiltering',
          'Energielabel A+++'
        ],
        description: 'De Daikin Emura combineert stijlvol design met topkwaliteit. Verkrijgbaar in verschillende kleuren voor perfecte integratie in uw interieur.',
        category: 'residential',
        colorVariants: ['Wit', 'Zilver', 'Zwart'],
        capacity: '2.0 - 7.1 kW',
        efficiency: 'A+++'
      },
      {
        id: 'daikin-stylish',
        name: 'Stylish',
        brand: 'Daikin',
        type: 'wall',
        images: [
          '/images/daikin-stylish-wit.webp',
          '/images/daikin-stylish-silver.webp',
          '/images/daikin-stylish-zwart.webp'
        ],
        features: [
          'Modern design',
          'Fluisterstil',
          'Daikin Onecta app bediening',
          'Coanda effect voor optimale luchtverdeling',
          'Flash Streamer technologie'
        ],
        description: 'De Daikin Stylish biedt moderne elegantie met geavanceerde technologie voor optimaal comfort.',
        category: 'residential',
        colorVariants: ['Wit', 'Zilver', 'Zwart'],
        capacity: '2.0 - 7.1 kW',
        efficiency: 'A+++'
      },
      {
        id: 'daikin-comfora',
        name: 'Comfora',
        brand: 'Daikin',
        type: 'wall',
        images: [
          '/images/daikin-comfora-left.webp',
          '/images/daikin-comfora-right.webp',
          '/images/daikin comfora-onectaApp.webp'
        ],
        features: [
          'Uitstekende prijs-kwaliteit verhouding',
          'Compacte afmetingen',
          'Onecta app besturing',
          'Energiezuinig',
          'Eenvoudige bediening'
        ],
        description: 'De Daikin Comfora is de perfecte keuze voor wie kwaliteit zoekt tegen een scherpe prijs.',
        category: 'residential',
        capacity: '2.0 - 7.1 kW',
        efficiency: 'A++'
      },
      {
        id: 'daikin-perfera',
        name: 'Perfera',
        brand: 'Daikin',
        type: 'wall',
        images: [
          '/images/daikin-perfera-wit.webp'
        ],
        features: [
          'Premium wandmodel',
          'Zeer hoge efficiëntie',
          'Geavanceerde filters',
          'Stil in werking',
          'WiFi besturing'
        ],
        description: 'De Daikin Perfera biedt topkwaliteit en uitzonderlijke prestaties voor veeleisende gebruikers.',
        category: 'residential',
        capacity: '2.0 - 8.5 kW',
        efficiency: 'A+++'
      },
      {
        id: 'daikin-sensira',
        name: 'Sensira',
        brand: 'Daikin',
        type: 'wall',
        images: [
          '/images/daikin-sensira-wit.webp'
        ],
        features: [
          'Instapmodel met Daikin kwaliteit',
          'Eenvoudige bediening',
          'Betrouwbaar',
          'Energiezuinig',
          'Compact design'
        ],
        description: 'De Daikin Sensira is de ideale keuze voor wie Daikin kwaliteit zoekt tegen een betaalbare prijs.',
        category: 'residential',
        capacity: '2.0 - 7.1 kW',
        efficiency: 'A++'
      },
      {
        id: 'daikin-ururu-sarara',
        name: 'Ururu Sarara',
        brand: 'Daikin',
        type: 'wall',
        images: [
          '/images/Ururu-Sarara-left.webp',
          '/images/Ururu-Sarara-right.webp'
        ],
        features: [
          'Unieke bevochtiging en ontvochtigen',
          'Zelfwerkende reiniging',
          'Premium technologie',
          'Optimaal binnenklimaat',
          'Geavanceerde sensoren'
        ],
        description: 'De Daikin Ururu Sarara is het topmodel met unieke bevochtigings- en ontvochtigingsfuncties.',
        category: 'residential',
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A+++'
      },
      {
        id: 'daikin-daiseikai',
        name: 'Daiseikai',
        brand: 'Daikin',
        type: 'floor',
        images: [
          '/images/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp',
          '/images/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp',
          '/images/Daiseikai 10-Hout-sfeerfoto_1_11zon.webp'
        ],
        features: [
          'Vloermodel voor optimale warmteverdeling',
          'Design in hout en wit',
          'Zeer geschikt voor verwarming',
          'Compacte opstelling',
          'Stille werking'
        ],
        description: 'De Daikin Daiseikai vloerunit combineert functionaliteit met stijlvol design.',
        category: 'residential',
        colorVariants: ['Hout', 'Wit'],
        capacity: '2.5 - 6.0 kW',
        efficiency: 'A++'
      }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    description: 'Innovatieve technologie met de revolutionaire WindFree™ koeling voor optimaal comfort zonder tocht.',
    models: [
      {
        id: 'samsung-windfree-elite',
        name: 'WindFree Elite',
        brand: 'Samsung',
        type: 'wall',
        images: [
          '/images/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp',
          '/images/samsung/windfreeElite/WindFree Elite_S2_Left_Web_RGB.webp',
          '/images/samsung/windfreeElite/Samsung RAC WindFree Elite_Sfeerbeeld_001.webp'
        ],
        features: [
          'WindFree™ technologie - koelen zonder tocht',
          'AI-gestuurde bediening',
          'SmartThings app besturing',
          'Triple Care filter',
          'Zeer energiezuinig'
        ],
        description: 'Het topmodel van Samsung met revolutionaire WindFree™ technologie voor optimaal comfort.',
        category: 'residential',
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A+++'
      },
      {
        id: 'samsung-windfree-comfort',
        name: 'WindFree Comfort',
        brand: 'Samsung',
        type: 'wall',
        images: [
          '/images/samsung/windfreeComfort/WindFree Comfort_S2_Front_Web_RGB.webp',
          '/images/samsung/windfreeComfort/WindFree Comfort_S2_Left_Web_RGB.webp',
          '/images/samsung/windfreeComfort/Samsung RAC WindFree Comfort_Sfeerbeeld_001.webp'
        ],
        features: [
          'WindFree™ modus',
          'Fast Cooling technologie',
          'Easy Filter Plus',
          'Smart bediening',
          'Stijlvol design'
        ],
        description: 'Geniet van comfortabele koeling zonder hinderlijke tocht met de WindFree Comfort serie.',
        category: 'residential',
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A++'
      },
      {
        id: 'samsung-windfree-avant-black',
        name: 'WindFree Avant Black',
        brand: 'Samsung',
        type: 'wall',
        images: [
          '/images/samsung/windreeAvantBlack/WindFree Avant Black_Front_Web_RGB.webp',
          '/images/samsung/windreeAvantBlack/WindFree Avant Black_Left_Web_RGB.webp',
          '/images/samsung/windreeAvantBlack/Samsung RAC WindFree Avant Black_Sfeerbeeld_001.webp'
        ],
        features: [
          'Premium zwart design',
          'WindFree™ koeling',
          'Digital Inverter',
          'Wi-Fi connectiviteit',
          'Geluidsarm'
        ],
        description: 'Stijlvolle zwarte uitvoering met geavanceerde WindFree technologie voor een luxe uitstraling.',
        category: 'residential',
        colorVariants: ['Zwart'],
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A++'
      },
      {
        id: 'samsung-luzon',
        name: 'Luzon',
        brand: 'Samsung',
        type: 'wall',
        images: [
          '/images/samsung/luzon/Luzon_S2_Front_Web_RGB.webp',
          '/images/samsung/luzon/Samsung RAC Luzon_Sfeerbeeld_001.webp',
          '/images/samsung/luzon/Luzon_S2_Left_Web_RGB.webp'
        ],
        features: [
          'Instapmodel met kwaliteit',
          'Digital Inverter technologie',
          'Good Sleep modus',
          'Eenvoudige bediening',
          'Betrouwbaar'
        ],
        description: 'De Samsung Luzon biedt uitstekende kwaliteit tegen een scherpe prijs.',
        category: 'residential',
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A++'
      },
      {
        id: 'samsung-360-cassette',
        name: '360° Cassette',
        brand: 'Samsung',
        type: 'cassette',
        images: [
          '/images/samsung/casette/360 Cassette - Rond - Front - Web.webp',
          '/images/samsung/casette/360 Cassette - Rond - Angle - Web.webp'
        ],
        features: [
          '360° luchtverdeling',
          'Plafondmontage',
          'Gelijkmatige temperatuur',
          'Geschikt voor grotere ruimtes',
          'Onopvallende integratie'
        ],
        description: 'De Samsung 360° Cassette zorgt voor perfecte luchtverdeling in alle richtingen.',
        category: 'commercial',
        capacity: '5.0 - 14.0 kW',
        efficiency: 'A++'
      }
    ]
  },
  {
    id: 'lg',
    name: 'LG',
    description: 'Innovatieve airconditioners met DualCool technologie en stijlvolle ArtCool designs.',
    models: [
      {
        id: 'lg-dualcool-premium',
        name: 'DualCool Premium',
        brand: 'LG',
        type: 'wall',
        images: [
          '/images/LG-dualcool-indoor-premium.webp',
          '/images/LG-dualcool-indoor-premium-1.webp'
        ],
        features: [
          'DualCool technologie',
          'ThinQ AI besturing',
          'UV Nano technologie',
          'Dual Inverter Compressor',
          'Active Energy Control'
        ],
        description: 'De LG DualCool Premium combineert geavanceerde technologie met superior prestaties.',
        category: 'residential',
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A+++'
      },
      {
        id: 'lg-artcool-mirror',
        name: 'ArtCool Mirror',
        brand: 'LG',
        type: 'wall',
        images: [
          '/images/lg-artcool-mirror.webp'
        ],
        features: [
          'Uniek spiegeldesign',
          'Decoratief element',
          'Plasma zuivering',
          'Smart diagnose',
          'Zeer stil'
        ],
        description: 'De LG ArtCool Mirror is meer dan een airco - het is een stijlvol interieur element.',
        category: 'residential',
        capacity: '2.5 - 5.3 kW',
        efficiency: 'A++'
      },
      {
        id: 'lg-standard-plus',
        name: 'Standard Plus',
        brand: 'LG',
        type: 'wall',
        images: [
          '/images/rac-eu-standard-plus-.webp'
        ],
        features: [
          'Betrouwbare prestaties',
          'Dual Inverter',
          'Gold Fin coating',
          '10 jaar garantie op compressor',
          'Eenvoudige installatie'
        ],
        description: 'De LG Standard Plus biedt uitstekende kwaliteit tegen een aantrekkelijke prijs.',
        category: 'residential',
        capacity: '2.5 - 7.1 kW',
        efficiency: 'A++'
      }
    ]
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi Heavy Industries',
    description: 'Japanse precisie en betrouwbaarheid met geavanceerde inverter technologie.',
    models: [
      {
        id: 'mitsubishi-titanium-zs',
        name: 'Titanium ZS',
        brand: 'Mitsubishi Heavy Industries',
        type: 'wall',
        images: [
          '/images/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp',
          '/images/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft-2.5-3.5-5.0kw-1-510x510.webp'
        ],
        features: [
          'Premium wandmodel',
          'Titanium coating',
          'Hyper Inverter technologie',
          'Dual Barrier Coating',
          'WiFi module optioneel'
        ],
        description: 'Het topmodel van Mitsubishi Heavy met titanium coating voor maximale duurzaamheid.',
        category: 'residential',
        capacity: '2.5 - 5.0 kW',
        efficiency: 'A+++'
      },
      {
        id: 'mitsubishi-srk-zs',
        name: 'SRK ZS-W',
        brand: 'Mitsubishi Heavy Industries',
        type: 'wall',
        images: [
          '/images/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-1.webp',
          '/images/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-510x510.webp'
        ],
        features: [
          'Wandmodel voor elke ruimte',
          'Inverter technologie',
          'Hoge efficiëntie',
          'Betrouwbare kwaliteit',
          'Stille werking'
        ],
        description: 'De Mitsubishi SRK ZS-W series combineert betrouwbaarheid met efficiëntie.',
        category: 'residential',
        capacity: '2.5 - 5.0 kW',
        efficiency: 'A++'
      },
      {
        id: 'mitsubishi-srf-floor',
        name: 'SRF Vloermodel',
        brand: 'Mitsubishi Heavy Industries',
        type: 'floor',
        images: [
          '/images/Mitsubishi heavy indus/Mitsubishi-Heavy-SRF-35-ZS-W-Vloer-unit-35-kW-Exclusief-buiten-unit.webp',
          '/images/Mitsubishi heavy indus/Mitsubishi-aircowebwinkel-vloermodel.webp'
        ],
        features: [
          'Vloermontage',
          'Ideaal voor verwarming',
          'Compacte opstelling',
          'Hoge capaciteit',
          'Robuuste constructie'
        ],
        description: 'Het Mitsubishi SRF vloermodel biedt krachtige prestaties in een compacte unit.',
        category: 'residential',
        capacity: '3.5 kW',
        efficiency: 'A++'
      }
    ]
  },
  {
    id: 'tosot',
    name: 'Tosot',
    description: 'Betrouwbare airconditioners met uitstekende prijs-kwaliteit verhouding van de Gree groep.',
    models: [
      {
        id: 'tosot-console',
        name: 'Console Vloermodel',
        brand: 'Tosot',
        type: 'floor',
        images: [
          '/images/toshiba-console-vloermodel-wit_13_11zon.webp',
          '/images/toshiba-console-vloermodel-wit-linksboven_14_11zon.webp',
          '/images/toshiba-console-vloermodel-wit-reacht_15_11zon.webp'
        ],
        features: [
          'Vloer- en wandmontage mogelijk',
          'Economische keuze',
          'Betrouwbare prestaties',
          'Eenvoudige installatie',
          'Geschikt voor alle ruimtes'
        ],
        description: 'De Tosot Console combineert flexibiliteit met betrouwbare prestaties tegen een scherpe prijs.',
        category: 'residential',
        capacity: '2.6 - 5.3 kW',
        efficiency: 'A++'
      },
      {
        id: 'tosot-wts-console',
        name: 'WTS Console',
        brand: 'Tosot',
        type: 'floor',
        images: [
          '/images/374-WTS-indoor-console-vloernmodel-tosot.webp',
          '/images/375-WTS-remote-console-tosot.webp'
        ],
        features: [
          'Moderne console uitvoering',
          'Afstandsbediening',
          'Energiezuinig',
          'Stil in werking',
          'Makkelijk onderhoud'
        ],
        description: 'De Tosot WTS Console biedt modern design met praktische functionaliteit.',
        category: 'residential',
        capacity: '2.6 - 5.3 kW',
        efficiency: 'A++'
      }
    ]
  }
]

// Helper functions
export const getAllModels = (): AircoModel[] => {
  return aircoModels.flatMap(brand => brand.models)
}

export const getModelsByBrand = (brandId: string): AircoModel[] => {
  const brand = aircoModels.find(b => b.id === brandId)
  return brand ? brand.models : []
}

export const getModelsByType = (type: AircoModel['type']): AircoModel[] => {
  return getAllModels().filter(model => model.type === type)
}

export const getFeaturedModels = (): AircoModel[] => {
  // Return one featured model per brand
  return aircoModels.map(brand => brand.models[0])
}

export const searchModels = (query: string): AircoModel[] => {
  const searchTerm = query.toLowerCase()
  return getAllModels().filter(model => 
    model.name.toLowerCase().includes(searchTerm) ||
    model.brand.toLowerCase().includes(searchTerm) ||
    model.features.some(feature => feature.toLowerCase().includes(searchTerm))
  )
}