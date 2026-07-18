'use client'

import { StatCounter } from './StatCounter'

export function HeroStats() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 sm:gap-x-10">
      <StatCounter
        target={7}
        suffix="+"
        label="Years Experience"
      />

      <StatCounter
        target={3}
        label="Companies"
      />

      <StatCounter
        target={18}
        suffix="+"
        label="Websites Modernised"
      />

      <div className="text-center px-2">
        <div
          className="text-2xl sm:text-3xl font-extrabold gradient-text"
          style={{
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          EU
        </div>

        <div
          className="text-xs mt-0.5"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#9090b0',
          }}
        >
          Remote / Hybrid
        </div>
      </div>
    </div>
  )
}