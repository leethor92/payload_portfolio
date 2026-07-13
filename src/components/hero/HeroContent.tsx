'use client'

import { ChevronDown } from 'lucide-react'
import { HeroButtons } from './HeroButtons'
import { HeroStats } from './HeroStats'
import { Typewriter } from './Typewriter'

export function HeroContent() {
  return (
    <div className="lg:order-1 flex-1 text-center lg:text-left min-w-0">
      {/* Status Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs"
        style={{
          background: 'rgba(34,211,238,0.08)',
          border: '1px solid rgba(34,211,238,0.2)',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#22d3ee',
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: '#22d3ee',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />

        Available for new opportunities
      </div>

      <h1
        className="font-extrabold tracking-tight mb-4 leading-none"
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: 'clamp(2.8rem, 8vw, 5rem)',
        }}
      >
        <span style={{ color: '#f0f0fa' }}>Lee</span>{' '}
        <span className="gradient-text">Thornton</span>
      </h1>

      <Typewriter />

      <p
        className="text-sm sm:text-base max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
        style={{
          color: '#b0b0cc',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Software Engineer with 7 years experience building scalable web
        applications and integration platforms. Strong background in backend
        systems, API design, and modern JavaScript frameworks, with experience
        modernising legacy platforms and delivering high-volume cloud solutions.
      </p>

      <HeroButtons />

        <div className="mt-10">
            <HeroStats />

            <div className="flex justify-center mt-8">
                <button
                type="button"
                onClick={() =>
                    document.getElementById('skills')?.scrollIntoView({
                    behavior: 'smooth',
                    })
                }
                className="transition-transform duration-300 hover:translate-y-1"
                >
                <ChevronDown
                    size={20}
                    style={{
                    color: '#9090b0',
                    animation: 'float 3s ease-in-out infinite',
                    }}
                />
                </button>
            </div>
        </div>
    </div>
  )
}