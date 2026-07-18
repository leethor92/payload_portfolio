'use client'

import type { SiteSetting } from '@/types/payload-types'

import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroImage } from './HeroImage'

interface HeroProps {
  siteSettings: SiteSetting
}

export function Hero({
  siteSettings,
}: HeroProps) {
  return (
    <section
      id="about"
      className="
        relative
        flex min-h-screen
        flex-col justify-center
        overflow-hidden
        pt-16
      "
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            <HeroImage />

            <HeroContent
              siteSettings={siteSettings}
            />
          </div>
        </div>
      </div>
    </section>
  )
}