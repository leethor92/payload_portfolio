import { NAV_ITEMS } from '@/lib/constants'

interface NavigationProps {
  activeSection: string
  onNavigate: (href: string) => void
}

export function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  return (
    <div className="hidden md:flex items-center gap-0.5">
      {NAV_ITEMS.map((link) => {
        const isActive = activeSection === link.href.slice(1)

        return (
          <button
            key={link.href}
            type="button"
            onClick={() => onNavigate(link.href)}
            className="relative px-3 py-2 text-sm transition-colors duration-200 rounded-lg"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: isActive ? '#818cf8' : '#9090b0',
              fontSize: '0.8rem',
            }}
          >
            {isActive && (
              <span
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'rgba(129,140,248,0.08)',
                }}
              />
            )}

            <span className="relative">{link.label}</span>
          </button>
        )
      })}
    </div>
  )
}