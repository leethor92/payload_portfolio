export interface GitHubRepository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  fork: boolean
  archived: boolean
  updated_at: string
}