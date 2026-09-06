# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page personal portfolio for Abdul Rahiman Mihad (AI Engineer). React 18 + Vite 6 + Tailwind CSS 4 + Framer Motion, deployed as a static site to GitHub Pages at https://abdulrahimanmihad.github.io/portfolio/. The look is monochrome and editorial (Nike/Adidas-style): heavy uppercase display type, thin rules instead of cards, no accent colour.

## Commands

```bash
npm install
npm run dev       # Vite dev server on http://localhost:5173
npm run build     # production build into dist/ (gitignored)
npm run preview   # serve dist/ locally
```

There is no lint, test, or formatter setup. `npm run build` is the only automated check; run it before pushing. CI builds on Node 20.

**Deploy:** pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages. Watch a deploy with `gh run watch --repo abdulrahimanmihad/portfolio`.

**CV updates:** `update-cv.cmd` is a double-click script for the owner: it stages `public/cv.pdf`, commits "Update CV", and pushes. Most recent commits are these CV bumps. The site copy is meant to mirror the CV, so when the CV changes, `src/data.js` usually should too.

## Architecture

**Content lives in `src/data.js`; components only render it.** Profile, nav links, about text, experience, projects, certifications, skills, education and spoken languages are all exported from there. Text or data changes should go in `data.js`, not JSX. Exceptions that are *not* sourced from `data.js` and must be updated separately when profile details change: the `<title>`, meta description, Open Graph tags and JSON-LD block in `index.html`, and `public/og-image.png`.

**Data contracts worth knowing** (components branch on these):
- `profile.headlineLines` is an array rendered one line each in the hero; `profile.competencies` feeds the ticker.
- Experience `stats` entries are either `{ value, prefix?, suffix?, decimals? }` (animated `Counter`) or `{ text }` (static), plus `label` and optional `note`. `highlights` are `{ title, body }` rows.
- Project `demo` is optional; `stats` may be an empty array; `category` is the eyebrow above the name.
- Certification item `url` may be `null` (renders as plain text); `code` is shown on the right when present.
- A section only appears in the navbar and scroll-spy if its `id` is listed in `navLinks`. Certifications and Education are intentionally not in the nav.

**Colour and theming.** Semantic CSS variables (`--bg`, `--bg-alt`, `--border`, `--text`, `--text-muted`) are defined on `:root` (light) and `.dark`, and re-mapped inside `.inverse` (the black contact block and footer, which flip to white in dark mode). An `@theme inline` block in `src/index.css` exposes them to Tailwind as `bg-paper`, `bg-alt`, `text-ink`, `text-muted`, `border-line` and friends; use those utilities rather than hard-coded greys so every block stays correct in both themes and inside `.inverse`. There is no `tailwind.config.js`.

Dark mode is class-based (`<html class="dark">`) and **light by default**: the inline script in `index.html` only adds the class when `localStorage['ui-theme'] === 'dark'`, and `useTheme` in `src/hooks.js` writes that key only when the visitor toggles. Do not persist the theme on mount.

**Typography classes** live in `src/index.css` under `@layer components`: `.display` (800 weight, uppercase, tight, slightly condensed via `font-stretch`) for headings and big numbers, `.eyebrow` for small tracked labels, `.btn` / `.btn-primary` / `.btn-ghost` pills, `.link-arrow` for underline-on-hover links, `.nav-link`, `.chip` tags, `.shell` container, and `.marquee`. Add `normal-case` when `.display` wraps something that must keep its case (e.g. `1.5s`).

**Layout primitives** are in `src/components/ui.jsx`: `Section` renders the ruled 12-column header (index + label in the left three columns, title and optional lead in the remaining nine) and sets `aria-labelledby`; content below usually starts at `lg:col-start-4` to align with the title. `Reveal` is the scroll fade-up (`delay` for staggering, `as` for the tag), `Counter` counts up on scroll, `Tag` is a chip, `Marquee` is the ticker. `Contact` hand-rolls its own `<section class="inverse">` instead of using `Section`.

**Motion must degrade under `prefers-reduced-motion`.** `App` wraps everything in `MotionConfig reducedMotion="user"` (so Framer skips transform animations), a global CSS rule collapses transitions, the marquee falls back to a wrapped static list, and `usePrefersReducedMotion` gates the count-up hook. New JS-driven animation should follow the same pattern.

**Code splitting:** `App.jsx` lazy-loads every section below `About`. `useActiveSection` uses a `MutationObserver` to re-measure once lazy chunks mount, so new lazy sections need no extra wiring beyond an `id` in `navLinks`.

**Navbar gotcha:** the mobile menu overlay is rendered as a sibling of `<header>`, not inside it, because the header's `backdrop-blur` would become the containing block for the fixed overlay and collapse it to zero height.

**Icons** are inline SVG components in `src/components/icons.jsx`; there is no icon package. Add new icons there.

**Base path is `./`** (`vite.config.js`), so the build works on a GitHub Pages project subpath. Keep asset references relative (`./cv.pdf`, `./favicon.svg`), never root-absolute.
