import { FaGithub } from 'react-icons/fa'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { getGitHubProjects } from '@/lib/github'

import { ProjectsGrid } from './ProjectsGrid'

export async function Projects() {
  const projects = await getGitHubProjects()

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="projects"
          title="Things I've built"
          subtitle="A live collection of personal projects and experiments from my GitHub."
        />

        <ProjectsGrid projects={projects} />

        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/leethor92?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: '#f0f0fa',
              background: 'rgba(129,140,248,0.07)',
              border: '1px solid rgba(129,140,248,0.25)',
            }}
          >
            <FaGithub size={17} />

            View all projects
          </a>
        </div>
      </div>
    </section>
  )
}