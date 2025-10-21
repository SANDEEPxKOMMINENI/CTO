export type SiteConfig = {
  name: string
  title: string
  description: string
  url: string
  email: string
  socials: {
    twitter?: string
    github?: string
    linkedin?: string
    youtube?: string
  }
}

const siteConfig: SiteConfig = {
  name: 'Your Name',
  title: 'Software Engineer',
  description:
    'I build web applications and delightful user experiences. This is a simple portfolio scaffold built with Next.js and Tailwind CSS.',
  url: process.env.SITE_URL || 'http://localhost:3000',
  email: 'you@example.com',
  socials: {
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourhandle',
    linkedin: 'https://www.linkedin.com/in/yourhandle/',
    youtube: 'https://youtube.com/@yourhandle',
  },
}

export default siteConfig
