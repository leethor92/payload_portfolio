import {
  Cloud,
  Code2,
  Database,
  Monitor,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

export const SKILLS = [
  {
    category: 'Frontend',
    icon: Monitor,
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Angular',
      'HTML',
      'CSS',
    ],
  },
  {
    category: 'Backend',
    icon: Code2,
    items: [
      'Ruby on Rails',
      'Node.js',
      'C#',
      '.NET',
      'PHP',
      'REST APIs',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      'AWS',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Firebase',
    ],
  },
  {
    category: 'CMS & Tools',
    icon: Wrench,
    items: [
      'Payload CMS',
      'WordPress',
      'Contentful',
      'Figma',
      'Storybook',
      'Jira',
    ],
  },
  {
    category: 'Testing',
    icon: ShieldCheck,
    items: [
      'RSpec',
      'Jest',
      'React Testing Library',
      'Cypress',
      'Selenium',
    ],
  },
]