'use client'

import { Cpu, GitBranch } from 'lucide-react'

export function HeroButtons() {
  return (
    <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start items-center">
      <a
        href="#experience"
        onClick={(e) => {
          e.preventDefault()

          document
            .getElementById('experience')
            ?.scrollIntoView({
              behavior: 'smooth',
            })
        }}
        className="w-full xs:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background:
            'linear-gradient(135deg, #818cf8, #22d3ee)',
          color: '#06060f',
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700,
        }}
      >
        <Cpu size={15} />

        My Experience
      </a>

      <a
        href="https://github.com/leethor92"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full xs:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          border:
            '1px solid rgba(129,140,248,0.3)',
          color: '#f0f0fa',
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 600,
        }}
      >
        <GitBranch size={15} />

        GitHub
      </a>
    </div>
  )
}