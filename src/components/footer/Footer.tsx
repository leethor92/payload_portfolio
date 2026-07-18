import { FaGithub, FaLinkedin } from 'react-icons/fa'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      className="px-4 sm:px-6 py-8"
      style={{
        borderTop: '1px solid rgba(129,140,248,0.1)',
        background: 'rgba(6,6,15,0.5)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p
            className="text-sm font-semibold"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: '#f0f0fa',
            }}
          >
            Lee Thornton
          </p>

          <p
            className="text-xs mt-1"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#8888aa',
            }}
          >
            Software Engineer
          </p>
        </div>

        <p
          className="text-xs text-center"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#8888aa',
          }}
        >
          © {currentYear} Lee Thornton. Built with Next.js & Payload CMS.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/leethor92/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: '#9090b0',
              background: 'rgba(129,140,248,0.05)',
              border: '1px solid rgba(129,140,248,0.1)',
            }}
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/leethorntonirl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: '#9090b0',
              background: 'rgba(129,140,248,0.05)',
              border: '1px solid rgba(129,140,248,0.1)',
            }}
          >
            <FaLinkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}