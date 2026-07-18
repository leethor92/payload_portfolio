import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { ExperienceTags } from './ExperienceTags'

interface ExperienceCardProps {
  company: string
  role: string
  location: string
  period: string
  logo: string
  achievements: string[]
  stack: string[]
}

export function ExperienceCard({
  company,
  role,
  period,
  location,
  logo,
  achievements,
  stack,
}: ExperienceCardProps) {
  return (
    <article
      className="card-glow rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: '#0d0d1f',
        border: '1px solid rgba(129,140,248,0.1)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div
            className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl p-2"
            style={{
              background: 'rgba(255,255,255,0.96)',
              border: '1px solid rgba(129,140,248,0.12)',
            }}
          >
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="56px"
              className="object-contain p-1.5"
            />
          </div>

          <div>
            <h3
              className="text-lg sm:text-xl font-bold"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                color: '#f0f0fa',
              }}
            >
              {company}
            </h3>
            <p
            className="text-sm mt-0.5"
            style={{ color: '#b0b0cc' }}
            >
            {role}
            </p>

            <div
            className="flex items-center gap-1.5 mt-1"
            style={{ color: '#8888aa' }}
            >
            <MapPin size={12} />
            <span
                className="text-xs"
                style={{
                fontFamily: "'JetBrains Mono', monospace",
                }}
            >
                {location}
            </span>
            </div>
          </div>
        </div>

        <span
          className="text-xs sm:text-sm whitespace-nowrap sm:pt-1"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#818cf8',
          }}
        >
          {period}
        </span>
      </div>

      <ul className="space-y-3 mb-6">
        {achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex gap-3 text-sm leading-relaxed"
            style={{ color: '#b0b0cc' }}
          >
            <span
              className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full"
              style={{ background: '#818cf8' }}
            />

            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <ExperienceTags technologies={stack} />
    </article>
  )
}