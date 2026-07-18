import type { Skill } from '@/types/payload-types'

import { SkillCard } from './SkillCard'

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({
  skills,
}: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      ))}
    </div>
  )
}