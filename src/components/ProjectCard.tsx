import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md">
      {project.image ? (
        <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      ) : null}

      <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4">
        {project.links?.github ? (
          <Link className="inline-flex items-center gap-1 text-sm hover:underline" href={project.links.github} target="_blank">
            <Github className="size-4" />
            <span>Code</span>
          </Link>
        ) : null}
        {project.links?.demo ? (
          <Link className="inline-flex items-center gap-1 text-sm hover:underline" href={project.links.demo} target="_blank">
            <ExternalLink className="size-4" />
            <span>Live</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
