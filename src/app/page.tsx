import Link from 'next/link'
import Section from '@/components/Section'
import site from 'site.config'

export default function HomePage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">Portfolio</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">{site.title}</p>
        <p className="text-muted-foreground mt-6">
          {site.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </Section>
  )
}
