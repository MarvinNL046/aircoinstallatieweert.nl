import Link from "next/link"
import { AirVent, Mail, MapPin, Phone } from "lucide-react"

const cities = [
  "Maastricht",
  "Venlo",
  "Roermond",
  "Heerlen",
  "Sittard",
  "Weert",
  "Kerkrade",
  "Brunssum",
]

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <AirVent className="h-6 w-6" />
              <span className="font-bold">StayCool Airco Weert</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Professionele airconditioning installatie in Weert en omgeving. Erkend en gecertificeerd.
            </p>
            <p className="mt-2 text-sm text-gray-300">
              <a href="https://staycoolairco.nl" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                Bezoek onze hoofdwebsite
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Telefoon: 046 202 1430</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>WhatsApp: 06 3648 1054</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@staycoolairco.nl" className="hover:underline">info@staycoolairco.nl</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Aan de Bogen 11, 6118 AS Nieuwstadt<br/>(Geen bezoekadres)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Navigatie</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/diensten" className="hover:text-orange-400">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/steden" className="hover:text-orange-400">
                  Steden
                </Link>
              </li>
              <li>
                <Link href="/merken" className="hover:text-orange-400">
                  Merken
                </Link>
              </li>
              <li>
                <Link href="/kennisbank" className="hover:text-orange-400">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-orange-400">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Steden</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {cities.map((city) => (
                <li key={city}>
                  <Link href={`/steden/${city.toLowerCase()}`} className="hover:text-orange-400">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} StayCool Airco. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
