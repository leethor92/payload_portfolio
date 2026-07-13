'use client'

export function Logo() {
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
      className="flex items-center gap-2"
      aria-label="Scroll to top"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
          fontFamily: "'Exo 2', sans-serif",
          color: '#06060f',
        }}
      >
        LT
      </div>

      <span
        className="font-semibold text-sm hidden sm:block"
        style={{
          fontFamily: "'Exo 2', sans-serif",
          color: '#f0f0fa',
        }}
      >
        Lee Thornton
      </span>
    </button>
  )
}