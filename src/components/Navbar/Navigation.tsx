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
            className="group relative px-3 py-2 text-sm rounded-lg transition-colors duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: isActive ? '#818cf8' : '#9090b0',
              fontSize: '0.8rem',
            }}
          >
            <span className="relative">{link.label}</span>

            <span
              className={`
                absolute bottom-1 left-3 right-3 h-px
                origin-left transition-transform duration-300
                ${
                  isActive
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }
              `}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isActive ? '#f8fafc' : '#94a3b8',
                  fontSize: '0.8rem',
                }}
            />
          </button>
        )
      })}
    </div>
  )
}