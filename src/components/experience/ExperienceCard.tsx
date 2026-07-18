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
  alignment?: 'left' | 'right'
}

export function ExperienceCard({
  company,
  role,
  period,
  location,
  logo,
  achievements,
  stack,
  alignment = 'left',
}: ExperienceCardProps) {
  const alignRight = alignment === 'right'

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5 sm:p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-400/25
        hover:bg-white/[0.04]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      "
    >
      {/* Subtle hover light */}
      <div
        className="
          pointer-events-none absolute -top-24 right-0
          h-48 w-48 rounded-full
          opacity-0 blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
        style={{
          background: 'rgba(96,165,250,0.08)',
        }}
      />

      <div
        className={`
          relative flex gap-4
          ${alignRight ? 'md:flex-row-reverse' : ''}
        `}
      >
        {/* Logo */}
        <div
          className="
            relative h-14 w-14 shrink-0
            overflow-hidden rounded-xl
            border border-white/10
            bg-white
          "
        >
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            sizes="56px"
            className="object-contain p-1.5"
          />
        </div>

        {/* Heading */}
        <div
          className={`
            min-w-0 flex-1
            ${alignRight ? 'md:text-right' : ''}
          `}
        >
          <span
            className="text-xs tracking-wide"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#60a5fa',
            }}
          >
            {period}
          </span>

          <h3
            className="mt-1 text-xl font-bold sm:text-2xl"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: '#f8fafc',
            }}
          >
            {role}
          </h3>

          <p
            className="mt-1 text-sm font-medium"
            style={{ color: '#cbd5e1' }}
          >
            {company}
          </p>

          <div
            className={`
              mt-2 flex items-center gap-1.5
              ${alignRight ? 'md:justify-end' : ''}
            `}
            style={{ color: '#64748b' }}
          >
            <MapPin size={13} />

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

      {/* Achievements */}
      <ul className="relative mt-6 space-y-3">
        {achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex gap-3 text-sm leading-relaxed"
            style={{ color: '#94a3b8' }}
          >
            <span
              className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                background: '#60a5fa',
                boxShadow: '0 0 8px rgba(96,165,250,0.35)',
              }}
            />

            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div
        className="relative mt-6 border-t pt-5"
        style={{
          borderColor: 'rgba(148,163,184,0.08)',
        }}
      >
        <ExperienceTags technologies={stack} />
      </div>
    </article>
  )
}