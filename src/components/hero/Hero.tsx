'use client'

import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroImage } from './HeroImage'

import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
        >
        <HeroBackground />

        <div className="relative z-10 flex-1 flex items-center">
            <div className="px-4 sm:px-6 max-w-5xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                <HeroImage />
                <HeroContent />
            </div>
            </div>
        </div>
    </section>
  )
}