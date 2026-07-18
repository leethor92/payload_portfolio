'use client'

import { ChevronDown } from 'lucide-react'

import type { SiteSetting } from '@/types/payload-types'

import { HeroButtons } from './HeroButtons'
import { HeroStats } from './HeroStats'
import { Typewriter } from './Typewriter'

interface HeroContentProps {
  siteSettings: SiteSetting
}

export function HeroContent({
  siteSettings,
}: HeroContentProps) {
  const {
    name,
    availability,
    heroDescription,
  } = siteSettings

  const nameParts = name.trim().split(' ')

  const firstName = nameParts[0]

  const lastName = nameParts
    .slice(1)
    .join(' ')

  return (
    <div className="min-w-0 flex-1 text-center lg:order-1 lg:text-left">
      {/* Availability */}
      {availability && (
        <div
          className="
            mb-6
            inline-flex
            items-center gap-2
            rounded-full
            border
            px-4 py-2
            text-xs
          "
          style={{
            background:
              'rgba(96,165,250,0.06)',

            borderColor:
              'rgba(96,165,250,0.16)',

            fontFamily:
              "'JetBrains Mono', monospace",

            color: '#93c5fd',
          }}
        >
          <span
            className="
              h-2 w-2
              shrink-0
              rounded-full
            "
            style={{
              background: '#60a5fa',

              animation:
                'pulse-glow 2s ease-in-out infinite',
            }}
          />

          {availability}
        </div>
      )}

      {/* Name */}
      <h1
        className="
          mb-4
          font-extrabold
          leading-none
          tracking-tight
        "
        style={{
          fontFamily:
            "'Exo 2', sans-serif",

          fontSize:
            'clamp(2.8rem, 8vw, 5rem)',
        }}
      >
        <span style={{ color: '#f8fafc' }}>
          {firstName}
        </span>{' '}

        <span style={{ color: '#60a5fa' }}>
          {lastName}
        </span>
      </h1>

      {/* Terminal */}
      <div className="mt-6">
        <Typewriter />
      </div>

      {/* Description */}
      <p
        className="
          mx-auto
          mb-8 mt-6
          max-w-xl
          text-sm
          leading-relaxed
          sm:text-base
          lg:mx-0
        "
        style={{
          color: '#94a3b8',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {heroDescription}
      </p>

      <HeroButtons />

      <div className="mt-10">
        <HeroStats
          yearsExperience={siteSettings.yearsExperience}
          sitesModernised={siteSettings.sitesModernised}
          technologiesUsed={siteSettings.technologiesUsed}
        />

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            aria-label="Scroll to skills"
            onClick={() =>
              document
                .getElementById('skills')
                ?.scrollIntoView({
                  behavior: 'smooth',
                })
            }
            className="
              transition-transform
              duration-300
              hover:translate-y-1
            "
          >
            <ChevronDown
              size={20}
              style={{
                color: '#64748b',

                animation:
                  'float 3s ease-in-out infinite',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}