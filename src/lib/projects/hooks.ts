import type { ProjectSummary, ProjectWithContent } from './schema'
import { getProjectBySlug, getProjectSummaries } from './loader'

export async function useProjects(): Promise<ProjectSummary[]> {
  return getProjectSummaries()
}

export async function useProject(slug: string): Promise<ProjectWithContent> {
  return getProjectBySlug(slug)
}
