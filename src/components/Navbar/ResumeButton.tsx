interface ResumeButtonProps {
  onNavigate: (href: string) => void
}

export function ResumeButton({
  onNavigate,
}: ResumeButtonProps) {
  return (
    <a
      href="#contact"
      onClick={(event) => {
        event.preventDefault()
        onNavigate('#contact')
      }}
      className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
      style={{
        background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
        color: '#06060f',
        fontFamily: "'Exo 2', sans-serif",
        fontWeight: 600,
      }}
    >
      Hire me
    </a>
  )
}