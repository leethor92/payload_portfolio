import { SectionHeader } from '@/components/ui/SectionHeader'

import { ContactActions } from './ContactActions'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[28rem] w-[42rem]
          max-w-full
          -translate-x-1/2 -translate-y-1/2
          rounded-full blur-3xl
        "
        style={{
          background:
            'radial-gradient(circle, rgba(96,165,250,0.07), transparent 68%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="contact"
          title="Let's work together"
          subtitle="Have an interesting role, project or problem to solve? I'd love to hear about it."
        />

        <div
          className="
            portfolio-card
            card-glow
            relative
            mx-auto mt-10
            max-w-4xl
            overflow-hidden
            rounded-3xl
            px-6 py-10
            text-center
            sm:mt-12
            sm:px-12 sm:py-14
          "
        >
          {/* Decorative light */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-px w-2/3
              -translate-x-1/2
            "
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(96,165,250,0.65), transparent)',
            }}
          />

          <div className="relative">
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#60a5fa',
              }}
            >
              Have something interesting in mind?
            </p>

            <h3
              className="
                mx-auto mt-4 max-w-2xl
                text-3xl font-bold leading-tight
                sm:text-4xl
              "
              style={{
                fontFamily: "'Exo 2', sans-serif",
                color: '#f8fafc',
              }}
            >
              Let&apos;s build something great together.
            </h3>

            <p
              className="
                mx-auto mt-5 max-w-xl
                text-sm leading-relaxed
                sm:text-base
              "
              style={{
                color: '#94a3b8',
              }}
            >
              Whether it&apos;s building a new product, modernising an
              existing platform, or solving a challenging engineering
              problem, I&apos;m always interested in meaningful work.
            </p>

            <ContactActions />
          </div>
        </div>
      </div>
    </section>
  )
}