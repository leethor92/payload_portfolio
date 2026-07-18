import type { ReactNode } from 'react'

interface SkillChipProps {
  children: ReactNode
}

export function SkillChip({
  children,
}: SkillChipProps) {
  return (
    <span
      className="
        inline-flex
        cursor-default
        items-center
        rounded-lg
        border
        px-2.5
        py-1.5
        text-xs
        transition-all
        duration-200

        hover:-translate-y-0.5
        hover:border-blue-400/30
        hover:bg-blue-400/[0.07]
        hover:text-blue-200
        hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
      "
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        background: 'rgba(255, 255, 255, 0.025)',
        borderColor: 'rgba(148, 163, 184, 0.1)',
        color: '#94a3b8',
      }}
    >
      {children}
    </span>
  )
}