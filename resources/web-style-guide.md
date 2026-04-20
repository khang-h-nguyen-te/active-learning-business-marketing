# Web Style Guide — Active Learning Business

> Reference this file before every build task.

## Stack
- Framework: Next.js (Pages Router)
- Styling: CSS Modules + `website/styles/globals.css` (CSS variables)
- Images: `next/image` only — never `<img>`
- Fonts: Inter + JetBrains Mono via Google Fonts (loaded in `_app.jsx`)
- Icons: None by default — use text or emoji sparingly

## CSS Variables (defined in globals.css)
All colours, type sizes, and spacing use tokens from `resources/design-system.md`.
Never hardcode hex values — always use `var(--token-name)`.

Key tokens:
```
--color-primary: #1A1A2E
--color-accent: #4F46E5
--color-accent-light: #EEF2FF
--color-surface: #FFFFFF
--color-surface-alt: #F8F9FA
--color-border: #E5E7EB
--color-text-primary: #111827
--color-text-secondary: #6B7280
--text-hero: 3rem
--text-h1: 2.25rem
--text-h2: 1.75rem
--text-h3: 1.25rem
--text-body: 1rem
--text-small: 0.875rem
```

## Layout Rules
- Max content width: **680px** for blog post body (centred)
- Max page width: **1200px** for nav/footer/grids
- Body line height: **1.7**
- 8pt spacing grid — use multiples of 8px for all margins/padding

## Required Page Structure
Every page must include:
1. `<Nav />` component at the top
2. `<Footer />` component at the bottom
3. Full `<Head>` with: `title`, `description`, `og:title`, `og:description`, `og:image`

## Blog Post Page (`/pages/blog/posts/[slug].jsx`)
Required elements:
- Hero image: `next/image`, 1200×630, WebP, placed at `/public/images/blog/[slug].webp`
- Category tag: indigo chip (CSS class `.tag`)
- Title: `<h1>` in `--text-h1`
- Read time: calculated at ~200 words/min, displayed as "X min read"
- Author + date metadata
- Post body: max-width 680px, `--text-body`, line-height 1.7
- Newsletter signup component at end of every post

## Blog Index Page (`/pages/blog/index.jsx`)
- Post cards in a responsive grid (3 col desktop, 2 col tablet, 1 col mobile)
- Each card: hero thumbnail (400×300), category tag, title, 2-line excerpt, read time + date
- New posts prepended to top

## Component Library
| Component | Path | Notes |
|-----------|------|-------|
| Nav | `components/Nav.jsx` | Logo left, links right. Active link uses `--color-accent` |
| Footer | `components/Footer.jsx` | Dark background (`--color-primary`), white text |
| NewsletterSignup | `components/NewsletterSignup.jsx` | Submits to `/api/newsletter` |

## Categories (Blog)
Use exactly one of these tags per post:
- `Active Learning` — Feynman, spaced repetition, retrieval practice
- `Student Productivity` — focus, workflows, habit systems
- `AI in Education` — trends, tools, what's changing

## File Naming
- Blog post pages: `[slug].jsx` (kebab-case)
- Hero images: `[slug].webp`
- CSS modules: `[ComponentName].module.css`

## Git Commit Convention
- Blog publish: `publish: Post Title`
- Component changes: `feat: description`
- Style fixes: `style: description`
- Bug fixes: `fix: description`

## Deployment
Never push to GitHub directly.
Always output: `Run this to go live: git push origin main`
