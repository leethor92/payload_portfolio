import { SkillChip } from '@/components/skills/SkillChip'

interface ExperienceTagsProps {
  technologies: string[]
}

export function ExperienceTags({
  technologies,
}: ExperienceTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map(
        (technology) => (
          <SkillChip key={technology}>
            {technology}
          </SkillChip>
        ),
      )}
    </div>
  )
}