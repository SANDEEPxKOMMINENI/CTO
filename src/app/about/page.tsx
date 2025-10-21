import Section from '@/components/Section'
import site from 'site.config'

export const metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>
          <p className="text-muted-foreground mt-3">
            {site.name} — {site.title}
          </p>
          <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
            <p>
              This is a placeholder biography. Share a bit about your background, what you love to build, and what you are currently
              learning.
            </p>
            <p>
              You can customize this content later. Add your photo, links to talks or articles, and highlight key achievements.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Skills & Stack</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 md:grid-cols-4">
            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel', 'Jest/Vitest'].map((s) => (
              <li key={s} className="rounded-md border px-3 py-2">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Timeline & Experience</h2>
          <ol className="mt-4 space-y-4 border-l pl-4">
            <li>
              <div className="text-sm text-muted-foreground">2023 — Present</div>
              <div className="font-medium">Senior Developer at Acme Corp</div>
              <p className="text-muted-foreground">Lead frontend initiatives and mentor engineers.</p>
            </li>
            <li>
              <div className="text-sm text-muted-foreground">2021 — 2023</div>
              <div className="font-medium">Fullstack Engineer at Startup X</div>
              <p className="text-muted-foreground">Built and scaled web applications.</p>
            </li>
            <li>
              <div className="text-sm text-muted-foreground">2019 — 2021</div>
              <div className="font-medium">Freelance</div>
              <p className="text-muted-foreground">Delivered projects for various clients.</p>
            </li>
          </ol>
        </div>
      </Section>
    </>
  )
}
