import { SectionHeader } from '@/components/ui/SectionHeader'
import { SKILLS } from '@/lib/skills'

import { SkillCard } from './SkillCard'

export function Skills() {
  return (
    <section
      id="skills"
      className="px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="What I build with"
          subtitle="A broad toolkit across the full stack, from user interfaces and backend systems to infrastructure."
        />

        <div
          className="
            mt-10
            grid grid-cols-1
            gap-4
            sm:mt-12
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
          "
        >
          {SKILLS.map((group) => (
            <SkillCard
              key={group.category}
              category={group.category}
              icon={group.icon}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}