import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

import type { SiteSetting } from '@/types/payload-types'

interface FooterProps {
  siteSettings: SiteSetting
}

export function Footer({
  siteSettings,
}: FooterProps) {
  const currentYear =
    new Date().getFullYear()

  const socialLinks = [
    siteSettings.linkedin
      ? {
          label: 'LinkedIn',
          href: siteSettings.linkedin,
          icon: FaLinkedin,
        }
      : null,

    siteSettings.github
      ? {
          label: 'GitHub',
          href: siteSettings.github,
          icon: FaGithub,
        }
      : null,
  ].filter(
    (
      link,
    ): link is NonNullable<typeof link> =>
      link !== null,
  )

  return (
    <footer
      className="
        border-t
        px-4 py-8
        sm:px-6
      "
      style={{
        borderColor:
          'rgba(148,163,184,0.08)',
      }}
    >
      <div
        className="
          mx-auto
          flex max-w-6xl
          flex-col
          items-center
          justify-between
          gap-5
          sm:flex-row
        "
      >
        <div className="text-center sm:text-left">
          <p
            className="text-sm font-semibold"
            style={{
              fontFamily:
                "'Exo 2', sans-serif",

              color: '#f8fafc',
            }}
          >
            {siteSettings.name}
          </p>

          <p
            className="mt-1 text-xs"
            style={{
              fontFamily:
                "'JetBrains Mono', monospace",

              color: '#64748b',
            }}
          >
            {siteSettings.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(
            ({
              label,
              href,
              icon: Icon,
            }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                "
                style={{
                  color: '#64748b',
                }}
              >
                <Icon size={17} />
              </a>
            ),
          )}
        </div>

        <p
          className="text-xs"
          style={{
            fontFamily:
              "'JetBrains Mono', monospace",

            color: '#64748b',
          }}
        >
          © {currentYear}{' '}
          {siteSettings.name}
        </p>
      </div>
    </footer>
  )
}