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
    <div
      className="
        hidden md:flex
        items-center
        rounded-xl
        border
        p-1
      "
      style={{
        background: 'rgba(255,255,255,0.018)',
        borderColor: 'rgba(148,163,184,0.07)',
      }}
    >
      {NAV_ITEMS.map((link) => {
        const section = link.href.slice(1)
        const isActive = activeSection === section

        return (
          <button
            key={link.href}
            type="button"
            onClick={() => onNavigate(link.href)}
            className="
              group
              relative
              overflow-hidden
              rounded-lg
              px-3 py-2
              text-[0.75rem]
              transition-all duration-200
              hover:bg-white/[0.035]
            "
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: isActive
                ? '#f8fafc'
                : '#94a3b8',
            }}
          >
            {isActive && (
              <span
                className="
                  absolute inset-0
                  rounded-lg
                "
                style={{
                  background:
                    'rgba(96,165,250,0.055)',
                }}
              />
            )}

            <span
              className="
                relative z-10
                transition-colors duration-200
                group-hover:text-slate-100
              "
            >
              {link.label}
            </span>

            <span
              className={`
                absolute
                bottom-0.5
                left-1/2
                h-px
                -translate-x-1/2
                transition-all
                duration-300

                ${
                  isActive
                    ? 'w-4 opacity-100'
                    : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-70'
                }
              `}
              style={{
                background: '#60a5fa',
              }}
            />
          </button>
        )
      })}
    </div>
  )
}