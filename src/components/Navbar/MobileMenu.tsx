import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react'

import { NAV_ITEMS } from '@/lib/constants'

interface MobileMenuProps {
  open: boolean
  onToggle: () => void
}

interface MobileMenuPanelProps {
  open: boolean
  activeSection: string
  onNavigate: (href: string) => void
}

function MobileMenuButton({
  open,
  onToggle,
}: MobileMenuProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        open
          ? 'Close navigation menu'
          : 'Open navigation menu'
      }
      aria-expanded={open}
      className="
        flex h-9 w-9
        items-center justify-center
        rounded-lg border
        transition-all duration-200
        md:hidden

        hover:border-blue-400/25
        hover:bg-blue-400/[0.05]
      "
      style={{
        background: 'rgba(255,255,255,0.025)',
        borderColor: 'rgba(148,163,184,0.12)',
        color: '#cbd5e1',
      }}
    >
      {open ? (
        <X size={18} />
      ) : (
        <Menu size={18} />
      )}
    </button>
  )
}

function MobileMenuPanel({
  open,
  activeSection,
  onNavigate,
}: MobileMenuPanelProps) {
  if (!open) {
    return null
  }

  return (
    <div
      className="
        border-t
        px-4 pb-5 pt-3
        md:hidden
      "
      style={{
        background: 'rgba(9,9,11,0.97)',
        borderColor: 'rgba(148,163,184,0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div
        className="
          mx-auto flex
          max-w-6xl
          flex-col gap-1
        "
      >
        {NAV_ITEMS.map((link) => {
          const section = link.href.slice(1)
          const isActive =
            activeSection === section

          return (
            <button
              key={link.href}
              type="button"
              onClick={() =>
                onNavigate(link.href)
              }
              className="
                relative
                flex items-center
                justify-between
                rounded-lg
                px-4 py-3
                text-left text-sm
                transition-all duration-200
                hover:bg-white/[0.035]
              "
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",

                color: isActive
                  ? '#f8fafc'
                  : '#94a3b8',

                background: isActive
                  ? 'rgba(96,165,250,0.055)'
                  : undefined,
              }}
            >
              <span>{link.label}</span>

              {isActive && (
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: '#60a5fa',
                    boxShadow:
                      '0 0 8px rgba(96,165,250,0.45)',
                  }}
                />
              )}
            </button>
          )
        })}

        <div
          className="my-2 h-px"
          style={{
            background:
              'rgba(148,163,184,0.08)',
          }}
        />

        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('#contact')
          }}
          className="
            group
            flex items-center
            justify-center gap-2
            rounded-lg
            px-4 py-3
            text-sm font-semibold
            transition-all duration-200
            active:scale-[0.98]
          "
          style={{
            background: '#f8fafc',
            color: '#09090b',
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          Let&apos;s talk

          <ArrowUpRight
            size={15}
            className="
              transition-transform duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </div>
    </div>
  )
}

export const MobileMenu = Object.assign(
  MobileMenuButton,
  {
    Panel: MobileMenuPanel,
  },
)