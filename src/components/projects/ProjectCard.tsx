import {
  ExternalLink,
  GitFork,
  Star,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

import type { GitHubRepository } from '@/types/github'

interface ProjectCardProps {
  project: GitHubRepository
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        group relative flex h-full min-h-[310px] flex-col
        overflow-hidden rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-400/25
        hover:bg-white/[0.04]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none absolute -right-20 -top-20
          h-48 w-48 rounded-full blur-3xl
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
        style={{
          background: 'rgba(96,165,250,0.09)',
        }}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-4">
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl border border-white/10
            bg-white/[0.04]
          "
        >
          <FaGithub
            size={19}
            style={{ color: '#f8fafc' }}
          />
        </div>

        <div className="flex items-center gap-2">
          <span
            className="flex items-center gap-1 text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#64748b',
            }}
          >
            <Star size={13} />
            {project.stargazers_count}
          </span>

          <span
            className="flex items-center gap-1 text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#64748b',
            }}
          >
            <GitFork size={13} />
            {project.forks_count}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-6 flex-1">
        <h3
          className="
            text-xl font-bold
            transition-colors duration-200
            group-hover:text-blue-300
          "
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#f8fafc',
          }}
        >
          {project.name}
        </h3>

        <p
          className="mt-3 text-sm leading-relaxed"
          style={{
            color: '#94a3b8',
          }}
        >
          {project.description ??
            'Personal project hosted on GitHub.'}
        </p>

        {project.topics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-md px-2.5 py-1 text-xs"
                style={{
                  fontFamily:
                    "'JetBrains Mono', monospace",
                  background:
                    'rgba(96,165,250,0.06)',
                  border:
                    '1px solid rgba(96,165,250,0.12)',
                  color: '#94a3b8',
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="
          relative mt-6 flex items-center
          justify-between gap-4 border-t pt-5
        "
        style={{
          borderColor: 'rgba(148,163,184,0.08)',
        }}
      >
        <div
          className="text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
          }}
        >
          {project.language ?? 'Repository'}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg border border-white/10
              transition-all duration-200
              hover:border-blue-400/30
              hover:bg-blue-400/[0.06]
              hover:text-blue-300
            "
            style={{
              color: '#94a3b8',
            }}
          >
            <FaGithub size={16} />
          </a>

          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live`}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg border border-white/10
                transition-all duration-200
                hover:border-blue-400/30
                hover:bg-blue-400/[0.06]
                hover:text-blue-300
              "
              style={{
                color: '#94a3b8',
              }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}