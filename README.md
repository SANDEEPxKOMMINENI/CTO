# Next.js 14 App Router Starter

A minimal Next.js 14 project bootstrapped with:

- App Router
- TypeScript (strict)
- Tailwind CSS (with CSS variables theme)
- PostCSS
- ESLint + Prettier (Next + Tailwind rules)
- Husky + lint-staged pre-commit hook

## Getting Started

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Lint: `pnpm lint`
- Type check: `pnpm type-check`
- Format: `pnpm format`
- Build: `pnpm build`

## Project Structure

- `src/app` - App Router entry (layout, pages, global styles)
- `src/components` - Shared UI components
- `src/lib/projects` - Project content schema and loaders
- `content/projects` - JSON/MDX content for projects

## Notes

- Tailwind is configured to use CSS variables for a light/dark theme. Adjust variables in `src/app/globals.css`.
- Pre-commit hook runs ESLint and Prettier on staged files via lint-staged.

---

# Projects Content System

This repository includes a simple content system for portfolio/"projects" backed by JSON files (with optional MDX for long-form descriptions). Zod validates content at build-time/server-time for safety.

## Schema

Each project JSON supports the following fields (all validated via Zod):

- id: string (uuid)
- title: string
- slug: string (lowercase, hyphen-separated)
- role: string
- client: string (optional)
- year: number (1900–3000)
- tags: string[]
- description: string (optional)
- longDescriptionMdx: string (optional, path to an MDX file relative to `content/projects`)
- media: array of media items
  - image: { type: 'image'; url; alt; caption?; width?; height? }
  - video: { type: 'video'; url; poster?; caption? }
  - embed: { type: 'embed'; html; caption? }
- credits: array of { role; name; link? }

See Zod schema in `src/lib/projects/schema.ts`.

## Data location

- Index file: `content/projects/index.json` contains a list of project slugs, e.g.
  { "projects": ["acme-rebrand", "mobile-app-x"] }
- One JSON file per project: `content/projects/<slug>.json`
- Optional MDX file per project for long-form description placed alongside JSON (e.g. `content/projects/acme-rebrand.mdx`) and referenced via `longDescriptionMdx`.

Sample data is included for two projects.

## Loaders and helpers

Import from `src/lib/projects`:

- getProjectSlugs(): Promise<string[]>
- getProjectBySlug(slug): Promise<ProjectWithContent>
- getProjects(): Promise<ProjectWithContent[]> (sorted by year desc)
- getProjectSummaries(): Promise<ProjectSummary[]>
- clearProjectsCache(): void

Non-React convenience wrappers exist in `src/lib/projects/hooks.ts`:

- useProjects(): Promise<ProjectSummary[]>
- useProject(slug): Promise<ProjectWithContent>

Note: These "use*" functions are simple async wrappers for convenience and do not depend on React. In a React app, you can call the helpers in Server Components or wrap them with caching/memoization as desired.

## How to add a new project

1) Add the project slug to `content/projects/index.json`:
   - Example: add "super-campaign" to the `projects` array.

2) Create `content/projects/super-campaign.json` with the required fields:
   - Ensure `slug` matches the filename and the index entry.
   - Provide a unique `id` (uuid). You can generate one online or via `crypto.randomUUID()`.

3) (Optional) Create a `content/projects/super-campaign.mdx` file and set `longDescriptionMdx` to `./super-campaign.mdx` in the JSON.

4) Reference media using URLs or paths under your public assets (e.g. `/media/super-campaign/hero.jpg`). Physical assets are not required for development but recommended for production.

5) Run type check to validate content with Zod at runtime when loaders execute:
   - `pnpm type-check` (static) and navigate pages that use the loaders to trigger validation.

## Example usage in Next.js Server Components

- List projects: in a server component/page, call `await getProjectSummaries()` and render a list.
- Project page: call `await getProjectBySlug(params.slug)` in a route like `app/projects/[slug]/page.tsx`.

