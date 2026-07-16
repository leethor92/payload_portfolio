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
        className="relative"
        style={{
          width: 'clamp(200px, 40vw, 280px)',
          height: 'clamp(200px, 40vw, 280px)',
        }}
      >
      {/* Accent ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px solid #22d3ee',
          boxShadow: `
            0 0 0 2px rgba(129,140,248,0.25),
            0 0 40px rgba(129,140,248,0.12)
          `,
        }}
      />

        {/* Inner background */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 3,
            background: '#06060f',
            borderRadius: '50%',
          }}
        />

        {/* Profile image */}
        <img
          src={image}
          alt={name}
          className="absolute rounded-full object-cover object-top"
          style={{
            inset: 6,
            width: 'calc(100% - 12px)',
            height: 'calc(100% - 12px)',
          }}
        />

        {/* Inner shadow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: 6,
            borderRadius: '50%',
            boxShadow: 'inset 0 0 24px rgba(6,6,15,0.5)',
          }}
        />
      </div>
    </div>
  )
}