"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import ThemeToggle from '@/components/ThemeToggle'
import site from 'site.config'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold hover:opacity-90">
            {site.name}
          </Link>
          <nav className="hidden items-center gap-4 text-sm sm:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'rounded-md px-2 py-1.5 transition-colors',
                    active
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/resume.pdf"
            className="hidden rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground sm:inline-flex"
            target="_blank"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
