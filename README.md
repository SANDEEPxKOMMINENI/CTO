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

## Notes

- Tailwind is configured to use CSS variables for a light/dark theme. Adjust variables in `src/app/globals.css`.
- Pre-commit hook runs ESLint and Prettier on staged files via lint-staged.
