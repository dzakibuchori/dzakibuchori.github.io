# AGENTS.md

## Stack
- Astro 6.3.3, Tailwind CSS 4.3 (v4), TypeScript strict mode
- Static output → GitHub Pages at https://dzakibuchori.github.io
- Deployment branch: `master` (not `main`)
- Requires Node 22.12.0+ (CI updated to Node 22, local should be v22+)

## Commands

| Task | Command |
|---|---|
| Dev server (port 4321) | `npm run dev` |
| Build | `npm run build` |
| Preview production build | `npm run preview` |
| Deploy to GitHub Pages | `npm run build && npm run deploy` |
| Type-check | `npm run astro check` |

**`npm run deploy` only pushes `./dist/` via gh-pages — always build first or you'll deploy stale/missing output.**

## Design system
Custom classes live in `src/styles/global.css`. Use these for all UI work:
- `.glass-card` — frosted glass card (primary content container)
- `.glass-tag` — pill/tag label
- `.glass-button` — ghost button
- `.glass-header` — header glass effect
- `.animate-fade-in` — page entry animation
- CSS vars: `--primary-blue`, `--secondary-blue`, `--accent-blue`, `--deep-purple`
- Tailwind `darkMode: 'class'` — configured via `@custom-variant dark` in global.css (no toggle implemented yet)

## Page structure convention
Every page follows this pattern:
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Page Title" description="optional override">
  <div class="animate-fade-in">
    <!-- content -->
  </div>
</Layout>
```
`Layout` accepts `title` (required) and `description` (optional, has a default). It handles `<head>`, nav, and footer.

## Known gaps (do not fix unless asked)
- **Mobile menu broken** (`src/layouts/Layout.astro:51`): `id="mobile-menu-button"` exists but no `<script>` handler
- **`/resume.pdf` missing**: `src/pages/resume.astro:12` links to it but `public/` only has `favicon.svg`
- **Dead routes**: `/blog/{slug}`, `/projects/{slug}`, `/blog/category/{name}` are linked but no page files exist
- **Blog is hardcoded**: `src/pages/blog.astro` uses a static array; `@astrojs/mdx` is installed but no `src/content/` directory or content collection is set up
- **Placeholder content**: `about.astro` and `resume.astro` still contain "University Name", "Company Name", "[Your Story Here]"

## Tailwind CSS v4 specifics
- Global CSS uses `@import "tailwindcss"` instead of `@tailwind` directives
- Custom utilities defined with `@utility` (e.g., `.glass` is a utility)
- Typography plugin included via `@plugin "@tailwindcss/typography"`
- Dark mode variant defined as `@custom-variant dark (&:where(.dark, .dark *))`
- `tailwind.config.mjs` is no longer used (kept as documentation placeholder)
- All theme customization lives in `src/styles/global.css`

## Deployment quirks
- GitHub Actions (`.github/workflows/astro.yml`) uses Node 22 — compatible with Astro 6
- `.astro/data-store.json` may show stale cache info — ignore it
- Local builds use `https://dzakibuchori.github.io` (no base path per astro.config.mjs); CI may override this via GitHub Pages output
