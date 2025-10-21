export type Project = {
  title: string
  description: string
  tech: string[]
  links?: {
    github?: string
    demo?: string
  }
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Acme Rebrand',
    description:
      'A modern brand refresh and website built with Next.js and Tailwind CSS. Includes a CMS and responsive components.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    links: {
      github: 'https://github.com/yourhandle/acme-rebrand',
      demo: '#',
    },
    image: '/og.png',
  },
  {
    title: 'Mobile App X',
    description:
      'A cross-platform app prototype with a focus on performance and usability. Built with React Native and Expo.',
    tech: ['React Native', 'Expo'],
    links: {
      github: 'https://github.com/yourhandle/mobile-app-x',
      demo: '#',
    },
  },
  {
    title: 'Open Source Starter',
    description:
      'A starter template featuring Next.js App Router, Tailwind, and testing setup. Intended to help others ship faster.',
    tech: ['Next.js', 'Tailwind', 'Vitest'],
    links: {
      github: 'https://github.com/yourhandle/next-starter',
    },
  },
]
