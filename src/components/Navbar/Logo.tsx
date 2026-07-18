'use client'

interface LogoProps {
  name: string
}

export function Logo({
  name,
}: LogoProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group
        flex items-center gap-2
      "
      aria-label="Scroll to top"
    >
      <div
        className="
          flex h-8 w-8
          flex-shrink-0
          items-center justify-center
          rounded-lg
          text-xs font-bold
          transition-transform duration-200
          group-hover:scale-105
        "
        style={{
          background:
            'linear-gradient(135deg, #818cf8, #22d3ee)',

          fontFamily:
            "'Exo 2', sans-serif",

          color: '#06060f',
        }}
      >
        {initials}
      </div>

      <span
        className="
          hidden
          text-sm font-semibold
          transition-colors duration-200
          sm:block
        "
        style={{
          fontFamily:
            "'Exo 2', sans-serif",

          color: '#f0f0fa',
        }}
      >
        {name}
      </span>
    </button>
  )
}