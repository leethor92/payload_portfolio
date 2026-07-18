import { EXPERIENCE } from '@/lib/experience'

import { ExperienceCard } from './ExperienceCard'
import { ExperienceProgress } from './ExperienceProgress'

export function ExperienceTimeline() {
  return (
    <ExperienceProgress>
      <div className="relative mt-12 sm:mt-16">
        {/* Inactive timeline */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            background: 'rgba(148,163,184,0.12)',
          }}
        />

        {/* Timeline scroll progress */}
        <div
          className="absolute left-5 top-0 w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            height: 'var(--timeline-progress)',
            background:
              'linear-gradient(to bottom, #60a5fa, #8b5cf6)',
            boxShadow: '0 0 12px rgba(96,165,250,0.35)',
            transition: 'height 80ms linear',
          }}
        />

        <div className="space-y-10 md:space-y-14">
          {EXPERIENCE.map((experience, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={`${experience.company}-${experience.period}`}
                className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_72px_1fr]"
              >
                {/* Mobile timeline node */}
                <div className="relative flex justify-center md:hidden">
                  <div
                    className="relative z-10 mt-8 h-3 w-3 rounded-full"
                    style={{
                      background: '#09090b',
                      border: '2px solid #60a5fa',
                      boxShadow:
                        '0 0 0 5px #09090b, 0 0 0 6px rgba(96,165,250,0.12)',
                    }}
                  />
                </div>

                {/* Left desktop column */}
                <div className="hidden md:block">
                  {isLeft && (
                    <ExperienceCard
                      {...experience}
                      alignment="right"
                    />
                  )}
                </div>

                {/* Desktop timeline node */}
                <div className="relative hidden md:flex justify-center">
                  <div
                    className="relative z-10 mt-9 h-4 w-4 rounded-full"
                    style={{
                      background: '#09090b',
                      border: '2px solid #60a5fa',
                      boxShadow:
                        '0 0 0 6px #09090b, 0 0 0 7px rgba(96,165,250,0.12)',
                    }}
                  />
                </div>

                {/* Right desktop column */}
                <div className="hidden md:block">
                  {!isLeft && (
                    <ExperienceCard
                      {...experience}
                      alignment="left"
                    />
                  )}
                </div>

                {/* Mobile card */}
                <div className="md:hidden pl-4">
                  <ExperienceCard {...experience} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ExperienceProgress>
  )
}