import { SectionHeader } from '../ui/SectionHeader'

import { SkillsGrid } from './SkillsGrid'

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="skill_set"
          title="What I build with"
          subtitle="Technologies I've used to build scalable web applications, cloud platforms and modern digital experiences."
        />

        <SkillsGrid />
      </div>
    </section>
  )
}