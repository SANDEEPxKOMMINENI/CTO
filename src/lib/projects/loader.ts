import fs from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'
import {
  ProjectSchema,
  ProjectsIndexSchema,
  type Project,
  type ProjectsIndex,
  type ProjectWithContent,
  ProjectSummarySchema,
  type ProjectSummary,
} from './schema'

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')
const INDEX_FILE = path.join(PROJECTS_DIR, 'index.json')

let cachedSlugs: string[] | null = null
const cachedProjects = new Map<string, ProjectWithContent>()

async function readJsonFile<T>(filePath: string, schema: z.ZodSchema<T>): Promise<T> {
  const raw = await fs.readFile(filePath, 'utf8')
  const json = JSON.parse(raw)
  return schema.parse(json)
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  if (cachedSlugs) return cachedSlugs
  const index: ProjectsIndex = await readJsonFile(INDEX_FILE, ProjectsIndexSchema)
  cachedSlugs = Array.isArray(index) ? index : index.projects
  return cachedSlugs
}

export async function getProjectBySlug(slug: string): Promise<ProjectWithContent> {
  if (cachedProjects.has(slug)) return cachedProjects.get(slug) as ProjectWithContent

  const projectFile = path.join(PROJECTS_DIR, `${slug}.json`)
  if (!(await fileExists(projectFile))) {
    throw new Error(`Project file not found for slug: ${slug}`)
  }

  const project: Project = await readJsonFile(projectFile, ProjectSchema)
  if (project.slug !== slug) {
    throw new Error(`Project slug mismatch in ${slug}.json (found ${project.slug})`)
  }

  let longDescriptionMdxSource: string | undefined
  if (project.longDescriptionMdx) {
    const mdxPath = path.isAbsolute(project.longDescriptionMdx)
      ? project.longDescriptionMdx
      : path.join(PROJECTS_DIR, project.longDescriptionMdx.replace(/^\.\//, ''))

    if (!(await fileExists(mdxPath))) {
      throw new Error(`MDX file declared but not found: ${project.longDescriptionMdx}`)
    }
    longDescriptionMdxSource = await fs.readFile(mdxPath, 'utf8')
  }

  const withContent: ProjectWithContent = {
    ...project,
    longDescriptionMdxSource,
  }

  cachedProjects.set(slug, withContent)
  return withContent
}

export async function getProjects(): Promise<ProjectWithContent[]> {
  const slugs = await getProjectSlugs()
  const projects = await Promise.all(slugs.map((s) => getProjectBySlug(s)))
  // sort by year desc, then title asc
  projects.sort((a, b) => (b.year - a.year) || a.title.localeCompare(b.title))
  return projects
}

export async function getProjectSummaries(): Promise<ProjectSummary[]> {
  const projects = await getProjects()
  return projects.map((p) => ProjectSummarySchema.parse(p))
}

export function clearProjectsCache() {
  cachedSlugs = null
  cachedProjects.clear()
}
