'use client'

import { ChevronDown } from 'lucide-react'

import { HeroButtons } from './HeroButtons'
import { HeroStats } from './HeroStats'
import { Typewriter } from './Typewriter'

export function HeroContent() {
  return (
    <div className="lg:order-1 flex-1 min-w-0 text-center lg:text-left">
      {/* Availability */}
      <div
        className="
          inline-flex items-center gap-2
          rounded-full border px-3.5 py-2
          mb-6 text-xs
        "
        style={{
          background: 'rgba(96,165,250,0.05)',
          borderColor: 'rgba(96,165,250,0.16)',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#94a3b8',
        }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-40"
            style={{
              background: '#60a5fa',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />

          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: '#60a5fa' }}
          />
        </span>

        Available for new opportunities
      </div>

      {/* Name */}
      <h1
        className="font-extrabold tracking-tight leading-[0.95]"
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: 'clamp(3rem, 8vw, 5.4rem)',
        }}
      >
        <span style={{ color: '#f8fafc' }}>Lee</span>{' '}

        <span className="gradient-text">
          Thornton
        </span>
      </h1>

      <div className="mt-5">
        <Typewriter />
      </div>

      {/* Positioning */}
      <h2
        className="
          mx-auto mt-5 max-w-2xl
          text-xl sm:text-2xl
          font-semibold leading-snug
          lg:mx-0
        "
        style={{
          fontFamily: "'Exo 2', sans-serif",
          color: '#e2e8f0',
        }}
      >
        Building scalable software from backend systems to modern web
        platforms.
      </h2>

      <p
        className="
          mx-auto mt-4 max-w-xl
          text-sm sm:text-base
          leading-relaxed
          lg:mx-0
        "
        style={{
          color: '#94a3b8',
        }}
      >
        Full-stack software engineer with 7+ years of experience building
        production applications, integration platforms and cloud-based
        systems across React, Next.js, Ruby on Rails, Node.js and AWS.
      </p>

      <div className="mt-8">
        <HeroButtons />
      </div>

      <div className="mt-10 sm:mt-12">
        <HeroStats />

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById('skills')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            aria-label="Scroll to skills"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border
              transition-all duration-300
              hover:translate-y-1
              hover:border-blue-400/30
              hover:bg-blue-400/[0.05]
            "
            style={{
              borderColor: 'rgba(148,163,184,0.12)',
              color: '#64748b',
            }}
          >
            <ChevronDown
              size={18}
              style={{
                animation: 'float 3s ease-in-out infinite',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}