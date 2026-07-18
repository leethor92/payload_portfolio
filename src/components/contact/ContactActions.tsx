import { Mail } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const actions = [
  {
    label: 'Email me',
    href: 'mailto:leethornton1992@hotmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leethorntonirl/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/leethor92/',
    icon: FaGithub,
  },
]

export function ContactActions() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10 sm:mt-12">
      {actions.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#f0f0fa',
            background: 'rgba(129,140,248,0.07)',
            border: '1px solid rgba(129,140,248,0.2)',
          }}
        >
          <Icon size={18} />

          {label}
        </a>
      ))}
    </div>
  )
}