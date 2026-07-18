import { LucideIcon } from 'lucide-react'

import { SkillChip } from './SkillChip'

interface SkillCardProps {
  category: string
  icon: LucideIcon
  items: string[]
}

export function SkillCard({
  category,
  icon,
  items,
}: SkillCardProps) {
  const Icon = icon

  return (
    <div
      className="card-glow rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#0d0d1f',
        border: '1px solid rgba(129,140,248,0.1)',
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon
          size={18}
          style={{
            color: '#818cf8',
          }}
        />

        <h3
          className="text-sm font-semibold"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#f0f0fa',
          }}
        >
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillChip key={item}>
            {item}
          </SkillChip>
        ))}
      </div>
    </div>
  )
}