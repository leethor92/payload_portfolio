import type { Experience } from '@/types/payload-types'

import { ExperienceCard } from './ExperienceCard'
import { ExperienceProgress } from './ExperienceProgress'

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <ExperienceProgress>
      <div className="relative mt-12 sm:mt-16">
        {/* Base timeline track */}
        <div
          className="
            absolute
            left-5
            top-0
            bottom-0
            w-px
            md:left-1/2
            md:-translate-x-1/2
          "
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(148,163,184,0.18) 8%, rgba(148,163,184,0.18) 92%, transparent)',
          }}
        />

        {/* Animated scroll progress */}
        <div
          className="
            absolute
            left-5
            top-0
            w-px
            md:left-1/2
            md:-translate-x-1/2
          "
          style={{
            height: 'var(--timeline-progress)',

            background:
              'linear-gradient(to bottom, #60a5fa, #818cf8)',

            boxShadow:
              '0 0 10px rgba(96,165,250,0.35)',

            transition:
              'height 100ms linear',
          }}
        />

        <div className="space-y-10 md:space-y-14">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={experience.id}
                className="
                  relative
                  grid
                  grid-cols-[40px_1fr]
                  md:grid-cols-[1fr_72px_1fr]
                "
              >
                {/* Mobile timeline node */}
                <div className="relative flex justify-center md:hidden">
                  <div
                    className="
                      relative
                      z-10
                      mt-8
                      h-3
                      w-3
                      rounded-full
                    "
                    style={{
                      background: '#09090b',

                      border:
                        '2px solid #60a5fa',

                      boxShadow:
                        '0 0 0 5px rgba(96,165,250,0.08)',
                    }}
                  />
                </div>

                {/* Left desktop column */}
                <div className="hidden md:block">
                  {isLeft && (
                    <ExperienceCard
                      experience={experience}
                      alignment="right"
                    />
                  )}
                </div>

                {/* Desktop timeline node */}
                <div
                  className="
                    relative
                    hidden
                    justify-center
                    md:flex
                  "
                >
                  <div
                    className="
                      relative
                      z-10
                      mt-9
                      h-4
                      w-4
                      rounded-full
                      transition-all
                      duration-300
                    "
                    style={{
                      background: '#09090b',

                      border:
                        '2px solid #60a5fa',

                      boxShadow:
                        '0 0 0 6px #09090b, 0 0 0 7px rgba(96,165,250,0.12)',
                    }}
                  />
                </div>

                {/* Right desktop column */}
                <div className="hidden md:block">
                  {!isLeft && (
                    <ExperienceCard
                      experience={experience}
                      alignment="left"
                    />
                  )}
                </div>

                {/* Mobile card */}
                <div className="pl-4 md:hidden">
                  <ExperienceCard
                    experience={experience}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ExperienceProgress>
  )
}