'use client'

interface HeroImageProps {
  image?: string
  name?: string
}

export function HeroImage({
  image = '/images/profile.png',
  name = 'Lee Thornton',
}: HeroImageProps) {
  return (
    <div className="lg:order-2 flex-shrink-0 flex items-center justify-center">
      <div
        className="group relative"
        style={{
          width: 'clamp(210px, 40vw, 290px)',
          height: 'clamp(210px, 40vw, 290px)',
        }}
      >
        {/* Ambient glow */}
        <div
          className="
            absolute inset-4 rounded-full
            blur-3xl
            transition-opacity duration-500
            group-hover:opacity-100
          "
          style={{
            background: 'rgba(96,165,250,0.12)',
            opacity: 0.65,
          }}
        />

        {/* Outer frame */}
        <div
          className="
            absolute inset-0 rounded-full
            transition-transform duration-500
            group-hover:scale-[1.02]
          "
          style={{
            padding: '1px',
            background:
              'linear-gradient(145deg, rgba(248,250,252,0.35), rgba(96,165,250,0.28), rgba(139,92,246,0.12), rgba(248,250,252,0.08))',
          }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background: '#09090b',
            }}
          />
        </div>

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="
            absolute rounded-full
            object-cover object-top
            transition-transform duration-500
            group-hover:scale-[1.01]
          "
          style={{
            inset: 5,
            width: 'calc(100% - 10px)',
            height: 'calc(100% - 10px)',
          }}
        />

        {/* Inner depth */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            inset: 5,
            boxShadow:
              'inset 0 0 35px rgba(9,9,11,0.35)',
          }}
        />
      </div>
    </div>
  )
}