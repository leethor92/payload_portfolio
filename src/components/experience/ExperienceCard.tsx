import Image from 'next/image'
import { MapPin } from 'lucide-react'

import type {
  Experience,
  Media,
} from '@/types/payload-types'

import { ExperienceTags } from './ExperienceTags'

interface ExperienceCardProps {
  experience: Experience
  alignment?: 'left' | 'right'
}

function formatDate(
  date: string | null | undefined,
) {
  if (!date) {
    return 'Present'
  }

  return new Intl.DateTimeFormat(
    'en',
    {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    },
  ).format(new Date(date))
}

export function ExperienceCard({
  experience,
  alignment = 'left',
}: ExperienceCardProps) {
  const {
    company,
    role,
    location,
    startDate,
    endDate,
    logo,
    achievements,
    stack,
  } = experience

  const period = `${formatDate(
    startDate,
  )} — ${formatDate(endDate)}`

  const media =
    typeof logo === 'object'
      ? (logo as Media)
      : null

  const logoUrl = media?.url

  const technologies =
    stack?.map((item) => item.name) ?? []

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        sm:p-7
      "
      style={{
        background: '#111318',

        borderColor:
          'rgba(148,163,184,0.1)',
      }}
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            alignment === 'right'
              ? 'radial-gradient(circle at top right, rgba(96,165,250,0.07), transparent 55%)'
              : 'radial-gradient(circle at top left, rgba(96,165,250,0.07), transparent 55%)',
        }}
      />

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {logoUrl && (
              <div
                className="
                  relative
                  flex
                  h-14 w-14
                  flex-shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  p-2
                "
                style={{
                  background:
                    'rgba(255,255,255,0.96)',

                  border:
                    '1px solid rgba(148,163,184,0.12)',
                }}
              >
                <Image
                  src={logoUrl}
                  alt={
                    media?.alt ||
                    `${company} logo`
                  }
                  fill
                  sizes="56px"
                  className="object-contain p-1.5"
                />
              </div>
            )}

            <div>
              <h3
                className="text-lg sm:text-xl font-bold"
                style={{
                  fontFamily:
                    "'Exo 2', sans-serif",

                  color: '#f8fafc',
                }}
              >
                {company}
              </h3>

              <p
                className="text-sm mt-0.5"
                style={{
                  color: '#94a3b8',
                }}
              >
                {role}
              </p>

              <div
                className="flex items-center gap-1.5 mt-1"
                style={{
                  color: '#64748b',
                }}
              >
                <MapPin size={12} />

                <span
                  className="text-xs"
                  style={{
                    fontFamily:
                      "'JetBrains Mono', monospace",
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
              fontFamily:
                "'JetBrains Mono', monospace",

              color: '#60a5fa',
            }}
          >
            {period}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {achievements?.map(
            (achievement) => (
              <li
                key={
                  achievement.id ??
                  achievement.text
                }
                className="flex gap-3 text-sm leading-relaxed"
                style={{
                  color: '#94a3b8',
                }}
              >
                <span
                  className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full"
                  style={{
                    background:
                      '#60a5fa',
                  }}
                />

                <span>
                  {achievement.text}
                </span>
              </li>
            ),
          )}
        </ul>

        <ExperienceTags
          technologies={technologies}
        />
      </div>
    </article>
  )
}