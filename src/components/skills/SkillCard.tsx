import type { LucideIcon } from 'lucide-react'

import { SkillChip } from './SkillChip'

interface SkillCardProps {
  category: string
  icon: LucideIcon
  items: string[]
}

export function SkillCard({
  category,
  icon: Icon,
  items,
}: SkillCardProps) {
  return (
    <article
      className="
        portfolio-card
        card-glow
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        p-5
        sm:p-6
      "
    >
      {/* Subtle ambient hover light */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          opacity-0
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: 'rgba(96, 165, 250, 0.09)',
        }}
      />

      <div className="relative z-10">
        {/* Category header */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:border-blue-400/30
              group-hover:bg-blue-400/[0.07]
            "
            style={{
              background: 'rgba(255, 255, 255, 0.025)',
              borderColor: 'rgba(148, 163, 184, 0.12)',
              color: '#60a5fa',
            }}
          >
            <Icon
              size={19}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </div>

          <div className="min-w-0">
            <h3
              className="text-base font-semibold sm:text-lg"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                color: '#f8fafc',
              }}
            >
              {category}
            </h3>

            <p
              className="mt-0.5 text-[0.65rem]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#64748b',
              }}
            >
              {items.length}{' '}
              {items.length === 1
                ? 'technology'
                : 'technologies'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-5 h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(148,163,184,0.14), rgba(148,163,184,0.03), transparent)',
          }}
        />

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <SkillChip key={item}>
              {item}
            </SkillChip>
          ))}
        </div>
      </div>
    </article>
  )
}