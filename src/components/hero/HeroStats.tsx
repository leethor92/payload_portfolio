'use client'

import { StatCounter } from './StatCounter'

interface HeroStatsProps {
  yearsExperience: number
  sitesModernised?: number | null
  technologiesUsed?: number | null
}

export function HeroStats({
  yearsExperience,
  sitesModernised,
  technologiesUsed,
}: HeroStatsProps) {
  return (
    <div
      className="
        flex flex-wrap
        justify-center
        gap-x-6 gap-y-4
        sm:gap-x-10
        lg:justify-start
      "
    >
      <StatCounter
        target={yearsExperience}
        suffix="+"
        label="Years Experience"
      />

      {sitesModernised != null && (
        <StatCounter
          target={sitesModernised}
          suffix="+"
          label="Websites Modernised"
        />
      )}

      {technologiesUsed != null && (
        <StatCounter
          target={technologiesUsed}
          suffix="+"
          label="Technologies Used"
        />
      )}
    </div>
  )
}