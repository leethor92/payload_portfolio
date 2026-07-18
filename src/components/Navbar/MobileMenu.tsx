import { Menu, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/constants'

interface MobileMenuProps {
  open: boolean
  onToggle: () => void
  onNavigate: (href: string) => void
}

interface MobileMenuPanelProps {
  open: boolean
  onNavigate: (href: string) => void
}

function MobileMenuButton({
  open,
  onToggle,
}: Pick<MobileMenuProps, 'open' | 'onToggle'>) {
  return (
    <button
      type="button"
      className="md:hidden p-2 rounded-lg"
      style={{ color: '#f0f0fa' }}
      onClick={onToggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
    >
      {open ? <X size={20} /> : <Menu size={20} />}
    </button>
  )
}

function MobileMenuPanel({
  open,
  onNavigate,
}: MobileMenuPanelProps) {
  if (!open) {
    return null
  }

  return (
    <div
      className="md:hidden px-4 pb-4 flex flex-col gap-1"
      style={{
        background: 'rgba(6,6,15,0.97)',
        borderTop: '1px solid rgba(129,140,248,0.1)',
      }}
    >
      {NAV_ITEMS.map((link) => (
        <button
          key={link.href}
          type="button"
          onClick={() => onNavigate(link.href)}
          className="text-left px-4 py-3 rounded-lg text-sm"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#f0f0fa',
          }}
        >
          {link.label}
        </button>
      ))}

      <a
        href="#contact"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('#contact')
        }}
        className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold"
        style={{
          background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
          color: '#06060f',
          fontFamily: "'Exo 2', sans-serif",
        }}
      >
        Hire me
      </a>
    </div>
  )
}

export const MobileMenu = Object.assign(MobileMenuButton, {
  Panel: MobileMenuPanel,
})