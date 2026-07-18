import {
  Cloud,
  Code2,
  Database,
  Monitor,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

import type { Skill } from '@/types/payload-types'

import { SkillChip } from './SkillChip'

const ICONS = {
  monitor: Monitor,
  code: Code2,
  cloud: Cloud,
  database: Database,
  tools: Wrench,
  testing: ShieldCheck,
} as const

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({
  skill,
}: SkillCardProps) {
  const Icon =
    ICONS[skill.icon as keyof typeof ICONS] ??
    Code2

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        sm:p-6
      "
      style={{
        background: '#111318',
        borderColor: 'rgba(148,163,184,0.1)',
      }}
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            'radial-gradient(circle at top left, rgba(96,165,250,0.08), transparent 55%)',
        }}
      />

      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div
            className="
              flex
              h-9 w-9
              items-center
              justify-center
              rounded-lg
              transition-transform
              duration-300
              group-hover:scale-105
            "
            style={{
              background:
                'rgba(96,165,250,0.08)',

              border:
                '1px solid rgba(96,165,250,0.12)',

              color: '#60a5fa',
            }}
          >
            <Icon size={17} />
          </div>

          <h3
            className="text-sm font-semibold"
            style={{
              fontFamily:
                "'Exo 2', sans-serif",

              color: '#f8fafc',
            }}
          >
            {skill.category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skill.items?.map((item) => (
            <SkillChip
              key={item.id ?? item.name}
            >
              {item.name}
            </SkillChip>
          ))}
        </div>
      </div>
    </article>
  )
}