# AGENTS.md

## Stack
- Astro 4.16.18, Tailwind CSS 3.4 (v3), TypeScript strict mode
- Static output → GitHub Pages at https://dzakibuchori.github.io
- Deployment branch: `master` (not `main`)

## Commands

| Task | Command |
|---|---|
| Dev server (port 4321) | `npm run dev` |
| Build | `npm run build` |
| Preview production build | `npm run preview` |
| Deploy to GitHub Pages | `npm run build && npm run deploy` |
| Type-check | `npm install @astrojs/check typescript` (first time only), then `npm run astro check` |

**`npm run deploy` only pushes `./dist/` via gh-pages — always build first or you'll deploy stale/missing output.**

## Design system
Custom classes live in `src/styles/global.css`. Use these for all UI work:
- `.glass-card` — frosted glass card (primary content container)
- `.glass-tag` — pill/tag label
- `.glass-button` — ghost button
- `.glass-header` — header glass effect
- `.animate-fade-in` — page entry animation
- CSS vars: `--primary-blue`, `--secondary-blue`, `--accent-blue`, `--deep-purple`
- Tailwind `darkMode: 'class'` — configured but no toggle implemented yet

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

## Deployment quirks
- GitHub Actions (`.github/workflows/astro.yml`) overrides `--site` and `--base` at build time using GitHub Pages API output; local builds use the values in `astro.config.mjs`
- `.astro/data-store.json` may show a stale `"astro-version": "5.8.0"` — actual installed version is 4.16.18; ignore this cache file
- `@astrojs/tailwind` v5 is the Astro 4 integration — incompatible with Astro 5 if you ever upgrade
