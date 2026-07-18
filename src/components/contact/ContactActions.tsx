import { Mail } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leethorntonirl/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/leethor92',
    icon: FaGithub,
  },
]

export function ContactActions() {
  return (
    <div className="mt-8">
      {/* Primary CTA */}
      <div className="flex justify-center">
        <a
          href="mailto:leethornton1992@homtail.com"
          className="
            group
            inline-flex items-center justify-center gap-2
            rounded-xl
            px-6 py-3
            text-sm font-semibold
            transition-all duration-200
            hover:-translate-y-0.5
          "
          style={{
            background: '#f8fafc',
            color: '#09090b',
            fontFamily: "'Exo 2', sans-serif",
            boxShadow:
              '0 10px 35px rgba(0,0,0,0.2)',
          }}
        >
          <Mail size={16} />

          Get in touch

          <span
            className="
              ml-1
              transition-transform duration-200
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>
      </div>

      {/* Social links */}
      <div
        className="
          mt-8 flex flex-wrap
          items-center justify-center gap-3
          border-t pt-7
        "
        style={{
          borderColor: 'rgba(148,163,184,0.08)',
        }}
      >
        <span
          className="mr-1 text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
          }}
        >
          Find me online
        </span>

        {SOCIAL_LINKS.map(
          ({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center gap-2
                rounded-lg border
                px-3.5 py-2
                text-xs
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-blue-400/30
                hover:bg-blue-400/[0.06]
              "
              style={{
                borderColor:
                  'rgba(148,163,184,0.12)',
                background:
                  'rgba(255,255,255,0.02)',
                color: '#94a3b8',
                fontFamily:
                  "'JetBrains Mono', monospace",
              }}
            >
              <Icon
                size={15}
                className="
                  transition-colors duration-200
                  group-hover:text-blue-300
                "
              />

              {label}
            </a>
          ),
        )}
      </div>
    </div>
  )
}