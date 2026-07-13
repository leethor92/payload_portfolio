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
        {/* Animated gradient ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(135deg, #818cf8, #22d3ee, #f472b6, #818cf8)',
            backgroundSize: '300% 300%',
            animation: 'gradient-shift 4s ease infinite',
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