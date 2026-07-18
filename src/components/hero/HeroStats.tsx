'use client'

import { StatCounter } from './StatCounter'

export function HeroStats() {
  return (
    <div
      className="
        grid grid-cols-3
        divide-x
        max-w-xl
        mx-auto lg:mx-0
      "
      style={{
        borderColor: 'rgba(148,163,184,0.1)',
      }}
    >
      <StatCounter
        target={7}
        suffix="+"
        label="Years Experience"
      />

      <StatCounter
        target={30}
        suffix="+"
        label="Technologies"
      />

      <StatCounter
        target={18}
        suffix="+"
        label="Sites Modernised"
      />
    </div>
  )
}