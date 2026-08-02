# Portfolio — Abdul Rahiman Mihad

Personal portfolio site for **Abdul Rahiman Mihad**, AI Engineer (Abu Dhabi, UAE).
Single-page React app covering experience, projects, certifications, skills, education and contact.

Live site: https://abdulrahimanmihad.github.io/portfolio/

## Stack

| Concern    | Choice |
| ---------- | ------ |
| Framework  | React 18 |
| Build tool | Vite 6 |
| Styling    | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Animation  | Framer Motion, plus IntersectionObserver for scroll-triggered counters |
| Hosting    | GitHub Pages (static, built from `dist/`) |

No CSS framework config file is needed — Tailwind 4 reads its theme from the `@theme`
block at the top of `src/index.css`.

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
index.html              SEO/Open Graph metadata, fonts, no-flash theme script
public/
  favicon.svg           AM monogram
  og-image.png          1200x630 social preview card
  cv.pdf                CV download (placeholder — replace with the real file)
src/
  data.js               All site content lives here; edit this to update the site
  hooks.js              Theme, typewriter, scroll-spy and count-up hooks
  App.jsx               Page composition; below-fold sections are lazy-loaded
  index.css             Tailwind theme tokens, light/dark variables, components
  components/
    ui.jsx              Reveal / Section / Counter / Tag primitives
    icons.jsx           Inline SVG icon set (no icon library dependency)
    Navbar.jsx Hero.jsx About.jsx Experience.jsx Projects.jsx
    Certifications.jsx Skills.jsx Education.jsx Contact.jsx Footer.jsx
```

### Editing content

Almost everything visible on the page comes from `src/data.js` — profile details,
the typing phrases, experience highlights and their animated metrics, projects,
certification links, skill groups and education. Components read from it, so text
changes rarely require touching JSX.

### Replacing the CV

`public/cv.pdf` is a generated placeholder. Drop the real PDF in at the same path
and rebuild; the hero's "Download CV" button already points there.

## Design notes

- **Theme**: dark by default with a light toggle, persisted in `localStorage` and
  applied before first paint by an inline script so there is no flash.
- **Accent**: `#1A56DB`, defined once as `--color-accent`.
- **Motion**: every section fades up on scroll, cards stagger, metrics count up
  when they enter view. All of it collapses to static content under
  `prefers-reduced-motion: reduce`.
- **Performance**: below-the-fold sections are code-split into separate chunks;
  icons are inline SVG rather than an icon package.
- **Base path**: `vite.config.js` uses `base: './'`, so the same build works on
  GitHub Pages project sites, Vercel, Netlify or any static host.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.
