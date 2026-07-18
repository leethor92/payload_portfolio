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
      aria-label="Scroll to top"
      className="
        group
        flex items-center gap-3
        rounded-lg
        outline-none
      "
    >
      <div
        className="
          relative
          flex h-8 w-8
          shrink-0
          items-center justify-center
          overflow-hidden
          rounded-lg
          border
          transition-all duration-300

          group-hover:-translate-y-0.5
          group-hover:border-blue-400/35
          group-hover:bg-blue-400/[0.07]
        "
        style={{
          background: 'rgba(255,255,255,0.035)',
          borderColor: 'rgba(148,163,184,0.16)',
        }}
      >
        <span
          className="
            relative z-10
            text-xs font-bold
            transition-colors duration-300
            group-hover:text-blue-300
          "
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#f8fafc',
          }}
        >
          LT
        </span>

        <div
          className="
            absolute inset-x-1 bottom-0
            h-px
            scale-x-0
            transition-transform duration-300
            group-hover:scale-x-100
          "
          style={{
            background: '#60a5fa',
          }}
        />
      </div>

      <div className="hidden text-left sm:block">
        <span
          className="
            block text-sm font-semibold
            leading-none
            transition-colors duration-200
            group-hover:text-white
          "
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#e2e8f0',
          }}
        >
          Lee Thornton
        </span>

        <span
          className="mt-1 block text-[0.6rem]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
          }}
        >
          Software Engineer
        </span>
      </div>
    </button>
  )
}