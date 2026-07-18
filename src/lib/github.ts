import type { GitHubRepository } from '@/types/github'

const GITHUB_USERNAME = 'leethor92'

export async function getGitHubProjects(): Promise<GitHubRepository[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      next: {
        revalidate: 3600,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories')
  }

  const repositories: GitHubRepository[] = await response.json()

  return repositories.filter(
    (repository) => !repository.fork && !repository.archived
  )
}