interface SectionHeaderProps {
  label: string
  title: string
  subtitle: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div
        className="inline-flex items-center px-3 py-1 rounded-full mb-4 text-xs"
        style={{
          background: 'rgba(129,140,248,0.08)',
          border: '1px solid rgba(129,140,248,0.15)',
          color: '#818cf8',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </div>

      <h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Exo 2', sans-serif",
          color: '#f0f0fa',
        }}
      >
        {title}
      </h2>

      <p
        className="text-base leading-relaxed"
        style={{
          color: '#9090b0',
          fontFamily: "'Inter', sans-serif",
          maxWidth: '42rem',
          margin: '0 auto',
        }}
      >
        {subtitle}
      </p>
    </div>
  )
}