# Portfolio — Abdul Rahiman Mihad

Personal portfolio site for **Abdul Rahiman Mihad**, AI Engineer (Abu Dhabi, UAE).
Single-page React app covering experience, projects, skills, certifications, education and contact.

Live site: https://abdulrahimanmihad.github.io/portfolio/

## Stack

| Concern    | Choice |
| ---------- | ------ |
| Framework  | React 18 |
| Build tool | Vite 6 |
| Styling    | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Type       | Archivo (variable width and weight) from Google Fonts |
| Animation  | Framer Motion, plus IntersectionObserver for scroll-triggered counters |
| Hosting    | GitHub Pages (static, built from `dist/`) |

No CSS framework config file is needed — Tailwind 4 reads its theme from the `@theme`
blocks at the top of `src/index.css`.

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project layout

```
index.html              SEO/Open Graph metadata, font, no-flash theme script
public/
  favicon.svg           AM monogram (flips black/white with the OS colour scheme)
  og-image.png          1200x630 social preview card
  cv.pdf                CV download
src/
  data.js               All site content lives here; edit this to update the site
  hooks.js              Theme, scroll-spy and count-up hooks
  App.jsx               Page composition; below-fold sections are lazy-loaded
  index.css             Design tokens, light/dark variables, component classes
  components/
    ui.jsx              Reveal / Section / Counter / Tag / Marquee primitives
    icons.jsx           Inline SVG icon set (no icon library dependency)
    Navbar.jsx Hero.jsx About.jsx Experience.jsx Projects.jsx
    Skills.jsx Certifications.jsx Education.jsx Contact.jsx Footer.jsx
```

### Editing content

Almost everything visible on the page comes from `src/data.js` — profile details,
the hero headline lines, the ticker phrases, experience stats and highlights, projects,
certification links, skill groups and education. Components read from it, so text
changes rarely require touching JSX.

### Replacing the CV

Drop the new PDF in at `public/cv.pdf` and run `update-cv.cmd` (or commit and push);
every "Download CV" button already points there.

## Design notes

- **Look**: monochrome, editorial and minimal in the spirit of Nike and Adidas. Heavy
  uppercase display headings, thin 1px rules instead of cards, pill buttons, a
  12-column label/content grid, and an inverted black contact block.
- **Theme**: light by default with a dark toggle. The choice is stored in `localStorage`
  only when the visitor toggles it, and applied before first paint by an inline script
  so there is no flash.
- **Colour**: no accent colour. Everything is ink on paper, defined once as semantic
  variables (`--bg`, `--text`, `--border`, ...) that flip per theme and inside `.inverse`.
- **Motion**: hero lines slide up from a mask, sections fade up on scroll, stats count
  up when they enter view, and a competencies ticker runs beneath the hero. All of it
  collapses to static content under `prefers-reduced-motion: reduce`.
- **Performance**: below-the-fold sections are code-split into separate chunks;
  icons are inline SVG rather than an icon package.
- **Base path**: `vite.config.js` uses `base: './'`, so the same build works on
  GitHub Pages project sites, Vercel, Netlify or any static host.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.
