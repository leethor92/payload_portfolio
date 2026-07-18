import {
  ExternalLink,
  GitFork,
  Star,
} from 'lucide-react'

import type { GitHubRepository } from '@/types/github'

interface ProjectCardProps {
  project: GitHubRepository
}

import { FaGithub } from 'react-icons/fa'

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="card-glow rounded-2xl p-5 sm:p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#0d0d1f',
        border: '1px solid rgba(129,140,248,0.1)',
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3
          className="text-lg font-bold"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#f0f0fa',
          }}
        >
          {project.name}
        </h3>

      </div>

      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{
          color: '#b0b0cc',
        }}
      >
        {project.description ?? 'Personal project hosted on GitHub.'}
      </p>

      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {project.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 rounded-md text-xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: 'rgba(129,140,248,0.07)',
                border: '1px solid rgba(129,140,248,0.15)',
                color: '#c0c0e0',
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div
        className="flex flex-wrap items-center justify-between gap-4 pt-4"
        style={{
          borderTop: '1px solid rgba(129,140,248,0.1)',
        }}
      >
        <div
          className="flex items-center gap-4 text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#8888aa',
          }}
        >
          {project.language && (
            <span>{project.language}</span>
          )}

          <span className="flex items-center gap-1">
            <Star size={13} />
            {project.stargazers_count}
          </span>

          <span className="flex items-center gap-1">
            <GitFork size={13} />
            {project.forks_count}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="transition-opacity hover:opacity-70"
            style={{ color: '#818cf8' }}
          >
            <FaGithub size={18} />
          </a>

          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live`}
              className="transition-opacity hover:opacity-70"
              style={{ color: '#22d3ee' }}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}