export function HeroBackground() {
  return (
    <>
      <div
        className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />

      <div
        className="absolute bottom-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(129,140,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />
    </>
  )
}