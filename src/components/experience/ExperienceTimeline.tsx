import { EXPERIENCE } from '@/lib/experience'

import { ExperienceCard } from './ExperienceCard'

export function ExperienceTimeline() {
  return (
    <div className="mt-10 sm:mt-12 space-y-4">
      {EXPERIENCE.map((experience) => (
        <ExperienceCard
          key={`${experience.company}-${experience.period}`}
          {...experience}
        />
      ))}
    </div>
  )
}