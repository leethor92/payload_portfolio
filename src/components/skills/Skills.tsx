import type { Skill } from '@/types/payload-types'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillsGrid } from './SkillsGrid'

interface SkillsProps {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="skill_set"
          title="What I build with"
          subtitle="A broad toolkit across the full stack — from pixels to infrastructure."
        />

        <SkillsGrid skills={skills} />
      </div>
    </section>
  )
}