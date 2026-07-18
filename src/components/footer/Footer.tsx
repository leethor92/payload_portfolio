import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      className="border-t px-4 py-7 sm:px-6"
      style={{
        borderColor: 'rgba(148,163,184,0.08)',
      }}
    >
      <div
        className="
          mx-auto flex max-w-6xl
          flex-col items-center
          justify-between gap-4
          sm:flex-row
        "
      >
        <div className="text-center sm:text-left">
          <p
            className="text-sm font-semibold"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: '#cbd5e1',
            }}
          >
            Lee Thornton
          </p>

          <p
            className="mt-0.5 text-[0.65rem]"
            style={{
              fontFamily:
                "'JetBrains Mono', monospace",
              color: '#64748b',
            }}
          >
            Software Engineer
          </p>
        </div>

        <p
          className="text-center text-[0.65rem]"
          style={{
            fontFamily:
              "'JetBrains Mono', monospace",
            color: '#475569',
          }}
        >
          © {currentYear} Lee Thornton
          <span className="mx-2 opacity-40">•</span>
          Built with Next.js &amp; Payload CMS
        </p>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/leethor92"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              rounded-lg p-2
              transition-all duration-200
              hover:bg-white/[0.04]
              hover:text-blue-300
            "
            style={{ color: '#64748b' }}
          >
            <FaGithub size={16} />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              rounded-lg p-2
              transition-all duration-200
              hover:bg-white/[0.04]
              hover:text-blue-300
            "
            style={{ color: '#64748b' }}
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}