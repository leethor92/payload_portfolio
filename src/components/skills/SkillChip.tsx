interface SkillChipProps {
  children: React.ReactNode
}

export function SkillChip({
  children,
}: SkillChipProps) {
  return (
    <span
      className="px-2.5 py-1 rounded-md text-xs transition-colors duration-200"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        background: 'rgba(129,140,248,0.07)',
        border: '1px solid rgba(129,140,248,0.15)',
        color: '#c0c0e0',
      }}
    >
      {children}
    </span>
  )
}