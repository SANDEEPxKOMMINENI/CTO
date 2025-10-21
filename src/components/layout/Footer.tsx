import site from 'site.config'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-3 py-6 text-sm text-muted-foreground sm:h-14 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} <span className="font-medium">{site.name}</span>
        </p>
        <div className="flex items-center gap-4">
          {site.socials.github && (
            <Link className="hover:text-foreground" href={site.socials.github} target="_blank">
              GitHub
            </Link>
          )}
          {site.socials.twitter && (
            <Link className="hover:text-foreground" href={site.socials.twitter} target="_blank">
              Twitter
            </Link>
          )}
          {site.socials.linkedin && (
            <Link className="hover:text-foreground" href={site.socials.linkedin} target="_blank">
              LinkedIn
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}
