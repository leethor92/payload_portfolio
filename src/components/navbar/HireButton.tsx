import { ArrowUpRight } from 'lucide-react'

interface HireButtonProps {
  onNavigate: (href: string) => void
}

export function HireButton({
  onNavigate,
}: HireButtonProps) {
  return (
    <a
      href="#contact"
      onClick={(event) => {
        event.preventDefault()
        onNavigate('#contact')
      }}
      className="
        group
        hidden md:inline-flex
        items-center gap-1.5
        rounded-lg
        px-4 py-2
        text-sm font-semibold
        transition-all duration-200

        hover:-translate-y-0.5
        hover:bg-white
        active:translate-y-0
      "
      style={{
        background: '#f8fafc',
        color: '#09090b',
        fontFamily: "'Exo 2', sans-serif",
        boxShadow:
          '0 6px 24px rgba(0,0,0,0.16)',
      }}
    >
      Let&apos;s talk

      <ArrowUpRight
        size={14}
        className="
          transition-transform duration-200
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
      />
    </a>
  )
}