import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppShell from '@/components/layout/AppShell'
import Providers from '@/components/Providers'
import site from 'site.config'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} – ${site.title}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${site.name} – ${site.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} – ${site.title}`,
    description: site.description,
    images: ['/og.png'],
    creator: site.socials.twitter ? `@${site.socials.twitter.split('/').pop()}` : undefined,
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  )
}
