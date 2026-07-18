'use client'

import { ArrowRight, GitBranch } from 'lucide-react'

export function HeroButtons() {
  return (
    <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
      <a
        href="#experience"
        onClick={(event) => {
          event.preventDefault()

          document
            .getElementById('experience')
            ?.scrollIntoView({
              behavior: 'smooth',
            })
        }}
        className="
          group
          w-full xs:w-auto
          inline-flex items-center justify-center gap-2
          px-6 py-3
          rounded-xl
          text-sm font-semibold
          transition-all duration-200
          hover:-translate-y-0.5
          active:translate-y-0
        "
        style={{
          background: '#f8fafc',
          color: '#09090b',
          fontFamily: "'Exo 2', sans-serif",
          boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
        }}
      >
        View my experience

        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>

      <a
        href="https://github.com/leethor92"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-full xs:w-auto
          inline-flex items-center justify-center gap-2
          px-6 py-3
          rounded-xl border
          text-sm font-semibold
          transition-all duration-200
          hover:-translate-y-0.5
          hover:border-blue-400/30
          hover:bg-blue-400/[0.05]
          active:translate-y-0
        "
        style={{
          borderColor: 'rgba(148,163,184,0.18)',
          color: '#cbd5e1',
          fontFamily: "'Exo 2', sans-serif",
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <GitBranch size={15} />

        GitHub
      </a>
    </div>
  )
}