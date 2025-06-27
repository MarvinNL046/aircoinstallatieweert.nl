"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

interface CTABannerProps {
  theme?: "light" | "dark"
}

export function CTABanner({ theme = "light" }: CTABannerProps) {
  const bgColor = theme === "light" ? "bg-orange-50" : "bg-gray-900"
  const textColor = theme === "light" ? "text-gray-900" : "text-white"
  const borderColor = theme === "light" ? "border-orange-100" : "border-gray-800"

  return (
    <div 
      className={`${bgColor} ${borderColor} border-y py-3 transform transition-all duration-300`}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${textColor} text-sm font-medium`}>
            <span className="hidden sm:inline">🌡️</span> Professionele airco installatie in heel Limburg - Vraag nu uw gratis offerte aan!
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link href="tel:+31462021430">
                <Phone className="mr-2 h-4 w-4" />
                Bel Direct
              </Link>
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/offerte">
                <Calendar className="mr-2 h-4 w-4" />
                Plan Afspraak
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
