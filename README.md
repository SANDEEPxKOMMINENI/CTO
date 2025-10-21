# Next.js + Tailwind Portfolio Starter

A simple personal portfolio scaffold built with:

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (typography + forms plugins)
- Dark mode via `next-themes` (class strategy)
- Minimal components and sensible defaults

Pages:
- Home (`/`): Hero with name, title, intro, CTAs
- About (`/about`): Profile, skills, timeline (placeholder)
- Projects (`/projects`): Grid of projects sourced from `src/data/projects.ts`
- Contact (`/contact`): Contact info and Formspree-enabled form fallback to mailto

## Getting Started

1) Install dependencies

   npm install

2) Start the dev server

   npm run dev

   Open http://localhost:3000

3) Lint, type-check, format

   npm run lint
   npm run type-check
   npm run format

## Customize Content

- Site metadata and profile
  - Edit `site.config.ts` for `name`, `title`, `description`, `email`, and `socials`.
- Projects
  - Edit `src/data/projects.ts` to update the list of projects (title, description, tech, links, image optional).
- Assets
  - Replace the placeholders in `public/` (`favicon.ico`, `og.png`, `resume.pdf`).

## SEO & Social

- Global metadata is defined in `src/app/layout.tsx` and populated from `site.config.ts`.
- The Open Graph image defaults to `/og.png`.
- Set `SITE_URL` in your environment to correct the canonical and OG URL base.

## Dark Mode

- Implemented via `next-themes` with the class strategy.
- The user preference is persisted and rehydrated on the client.

## Contact Form

- This project supports Formspree. Set the environment variable `FORMSPREE_ID` to enable submissions:

  - Add your Formspree form ID to `.env.local`:

        FORMSPREE_ID="abc123xy"
        SITE_URL="http://localhost:3000"

  - Restart the dev server after changing env.

- If `FORMSPREE_ID` is not defined, the Contact page shows a mailto link using the email from `site.config.ts`.
  - If the placeholder email remains (you@example.com), an instruction message is shown instead.

## Deployment (Vercel)

- Click "New Project" in Vercel and import this repository.
- Use the default Next.js settings. No `vercel.json` is required.
- Add the following Environment Variables in your Vercel project (optional but recommended):
  - `FORMSPREE_ID` – your Formspree form ID (enables the contact form)
  - `SITE_URL` – your site URL (e.g. https://yourdomain.com)
- Deploy.

## Tech

- next, react, react-dom
- tailwindcss, postcss, autoprefixer
- next-themes
- @tailwindcss/typography, @tailwindcss/forms
- clsx, lucide-react

## Scripts

- `dev` – start dev server
- `build` – production build
- `start` – start production server
- `lint` – run ESLint
- `type-check` – run TypeScript compiler
- `format` – run Prettier write

---

This starter is intentionally minimal and uses placeholder content so you can focus on iterating your portfolio. Replace content and styles as you see fit.
