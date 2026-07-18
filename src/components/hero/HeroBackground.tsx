export function HeroBackground() {
  return (
    <>
      <div
        className="
          pointer-events-none absolute
          left-[15%] top-[15%]
          h-72 w-72
          sm:h-[30rem] sm:w-[30rem]
          rounded-full
        "
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 68%)',
          animation: 'float 9s ease-in-out infinite',
        }}
      />

      <div
        className="
          pointer-events-none absolute
          bottom-[10%] right-[10%]
          h-64 w-64
          sm:h-96 sm:w-96
          rounded-full
        "
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.045) 0%, transparent 70%)',
          animation: 'float 11s ease-in-out infinite reverse',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 75% 70% at 50% 45%, black, transparent)',
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #09090b)',
        }}
      />
    </>
  )
}