# Prodigy Construction Limited — Next.js Website

## Project Overview
Premium corporate website for Prodigy Construction Limited, a Kenya/East Africa
construction, engineering and infrastructure company. Built with Next.js 15 (App
Router), TypeScript, Tailwind CSS, lucide-react.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build (must pass cleanly; used as the gate)
- `npm run start -- -p <port>` — production server on a port
- Production servers currently run on ports 12000 and 12001
  (work-host URLs work-1 / work-2). Restart after any data/code change:
  `ps aux | grep next-server | grep -v grep | awk '{print $2}' | xargs -r kill`,
  then start both ports again.

## Project Structure
- `app/` — App Router pages (all static + dynamic routes)
- `components/` — all components (root, NOT `src/components`; `src/` was removed)
- `lib/` — content/database data: `services.ts`, `projects.ts`,
  `data-industries.ts`, `data-insights.ts`, `data-news.ts`, `data-faqs.ts`,
  `data-equipment.ts`, `data-team.ts`, `data-testimonials.ts`,
  `data-vacancies.ts`, `data-documents.ts`, `site.ts`, `constants.ts`, `seo.ts`
- `@/` alias resolves to project root

## Next.js 15 Conventions (MUST follow)
- Dynamic routes must use async `params`:
  - `type Params = { params: Promise<{ slug: string }> }`
  - `export default async function Page({ params }: Params)` with
    `const { slug } = await params;`
- Same for `generateMetadata({ params }: Params)` — must `await params`.
- `generateStaticParams` is used for SSG of dynamic routes.

## Content / Data Guidelines
- All content is placeholder text in `lib/*.ts`; real company data can be
  swapped in later without redesign. Do NOT invent company facts.
- Stats/certifications are placeholders (CMS-configurable concept).
- Watch for missing-space typos when editing copy (e.g. "retailand",
  "footwaysand") — caused by string edits in data files.

## Known Build/Type Gotchas
- `next build` fails type checking on unused/incorrect optional fields;
  fix forward in `lib/*.ts` interfaces and page components.
- lucide-react icon names must exist; icon types in data are `LucideIcon`.