import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">A selection of work and experiments.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </Section>
  )
}
