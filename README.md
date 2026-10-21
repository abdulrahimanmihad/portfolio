# Portfolio — Abdul Rahiman Mihad

Personal portfolio site for **Abdul Rahiman Mihad**, AI Engineer (Abu Dhabi, UAE).
Single-page React app covering profile, experience, selected work, capabilities,
background and contact.

Live site: https://abdulrahimanmihad.github.io/portfolio/

## Stack

| Concern    | Choice |
| ---------- | ------ |
| Framework  | React 18 |
| Build tool | Vite 6 |
| Styling    | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Type       | Newsreader (display) and Archivo (text) from Google Fonts |
| Animation  | Framer Motion for slow scroll fades |
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
index.html              SEO/Open Graph metadata and fonts
public/
  favicon.svg           AM monogram (flips black/white with the OS colour scheme)
  og-image.png          1200x630 social preview card (rendered from scripts/)
  cv.pdf                CV download
scripts/
  og-card.html          Source of the social card; copy is hard-coded here
  og-card.cjs           Renders og-card.html to public/og-image.png with headless Chrome
src/
  data.js               All site content lives here; edit this to update the site
  hooks.js              Scroll-spy hook for the section index
  App.jsx               Two-column composition; below-fold sections are lazy-loaded
  index.css             Palette tokens, type classes, buttons
  components/
    ui.jsx              Reveal / Section / Stat / Emph primitives
    icons.jsx           Inline SVG icon set (no icon library dependency)
    Panel.jsx           Fixed identity column: statement, actions, section index
    MobileBar.jsx       Sticky wordmark bar and menu below the lg breakpoint
    About.jsx Experience.jsx Projects.jsx Skills.jsx
    Background.jsx Contact.jsx Footer.jsx
```

### Editing content

Almost everything visible on the page comes from `src/data.js` — profile details,
the statement, experience figures and highlights, projects, certification links,
capability lines, education and languages. Components read from it, so text changes
rarely require touching JSX. Wrap a word in asterisks (`*ship.*`) to set it in italics.

### Replacing the CV

Drop the new PDF in at `public/cv.pdf` and run `update-cv.cmd` (or commit and push);
every "Download CV" button already points there.

### Social preview card

`public/og-image.png` is rendered from `scripts/og-card.html`. After changing the
statement, update that file and run `node scripts/og-card.cjs` (needs a local Chrome
and network access for the fonts).

## Design notes

- **Composition**: a two-column dossier. The deep-green identity panel on the left
  stays fixed with the name, statement, actions and a live section index; the ivory
  column on the right scrolls, and each section is a folio with a large brass numeral
  in its gutter. On phones the panel becomes the opening screen and a slim bar
  carries the menu.
- **Palette**: deep green, ivory, sage and brass. One palette, no theme toggle,
  defined once as tokens in `src/index.css`.
- **Type**: Newsreader serif in sentence case with one italic word for headings and
  figures, Archivo for text and tracked small-caps labels.
- **Motion**: the panel fades in once; sections fade up slowly on scroll. Nothing
  bounces, ticks or counts, and all of it collapses to static content under
  `prefers-reduced-motion: reduce`.
- **Performance**: below-the-fold sections are code-split into separate chunks;
  icons are inline SVG rather than an icon package.
- **Base path**: `vite.config.js` uses `base: './'`, so the same build works on
  GitHub Pages project sites, Vercel, Netlify or any static host.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.
