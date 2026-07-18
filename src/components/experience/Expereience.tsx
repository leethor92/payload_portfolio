import { SectionHeader } from '@/components/ui/SectionHeader'

import { ExperienceTimeline } from './ExperienceTimeline'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="experience"
          title="Where I've worked"
          subtitle="Building and modernising software across product platforms, cloud infrastructure and large-scale web applications."
        />

        <ExperienceTimeline />
      </div>
    </section>
  )
}