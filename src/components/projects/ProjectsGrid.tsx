import type { GitHubRepository } from '@/types/github'

import { ProjectCard } from './ProjectCard'

interface ProjectsGridProps {
  projects: GitHubRepository[]
}

export function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const visibleProjects = projects.slice(0, 6)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:mt-12">
      {visibleProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  )
}