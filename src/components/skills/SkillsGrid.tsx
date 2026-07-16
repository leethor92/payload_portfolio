import { SKILLS } from '@/lib/skills'

import { SkillCard } from './SkillCard'

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12">
      {SKILLS.map((group) => (
        <SkillCard
          key={group.category}
          category={group.category}
          icon={group.icon}
          items={group.items}
        />
      ))}
    </div>
  )
}