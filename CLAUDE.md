# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page personal portfolio for Abdul Rahiman Mihad (AI Engineer). React 18 + Vite 6 + Tailwind CSS 4 + Framer Motion, deployed as a static site to GitHub Pages at https://abdulrahimanmihad.github.io/portfolio/. The look is quiet luxury editorial: a Newsreader serif for headings in sentence case with italic emphasis, Archivo for text and small tracked labels, warm paper and ink with no accent colour, hairline rules instead of cards, generous space, slow fades. The owner explicitly does not want "AI slop": no gradients, glass, emoji, pulsing dots, tickers, count-up numbers, chip tags, card grids or pill buttons. Say less, set it well.

## Commands

```bash
npm install
npm run dev       # Vite dev server on http://localhost:5173
npm run build     # production build into dist/ (gitignored)
npm run preview   # serve dist/ locally
node scripts/og-card.cjs   # re-render public/og-image.png (needs local Chrome + network for fonts)
```

There is no lint, test, or formatter setup. `npm run build` is the only automated check; run it before pushing. CI runs `npm ci` and the build on Node 20.

**Deploy:** pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages. Watch a deploy with `gh run watch --repo abdulrahimanmihad/portfolio`. The workflow also has `workflow_dispatch`, so `gh workflow run deploy.yml --repo abdulrahimanmihad/portfolio` re-publishes without a commit.

**CV updates:** `update-cv.cmd` is a double-click script for the owner: it stages `public/cv.pdf`, commits "Update CV", and pushes. Many commits are these CV bumps. The site copy is meant to mirror the CV, so when the CV changes, `src/data.js` usually should too.

**Visual checks:** there is no browser extension on the owner's machine. `scripts/og-card.cjs` is a working template for driving headless Chrome over the DevTools Protocol (launch with `--remote-debugging-port`, attach with `Target.attachToTarget {flatten:true}`, `Page.captureScreenshot`); copy its approach to screenshot the dev server, scrolling first so `whileInView` reveals fire.

## Architecture

**Content lives in `src/data.js`; components only render it.** Profile, nav links, about text, experience, projects, certifications, skills, education and spoken languages are all exported from there. Text or data changes should go in `data.js`, not JSX. The content is deliberately curated (three highlights per role, four capability lines, one sentence per project); adding more rows is the fastest way to make the page feel crammed again.

Copy that is *not* sourced from `data.js` and must be updated by hand when profile details change:
- `index.html`: the `<title>`, meta description, Open Graph/Twitter tags and the JSON-LD `Person` block (employer, phone, city, `knowsAbout`).
- `scripts/og-card.html` carries its own copy of the hero statement, name, title and tagline; re-render `public/og-image.png` with `node scripts/og-card.cjs` after editing it.
- Section titles are string literals passed to `Section` in each component. The Experience title ("Two systems, both *live.*") describes the data and goes stale if a role is added.
- `Contact.jsx` hard-codes its heading, the "Open to AI engineering roles…" paragraph (only `profile.availability` and `profile.location` are interpolated into it) and the LinkedIn/GitHub handle text shown under each link.

**Data contracts worth knowing** (components branch on these):
- `profile.headlineLines` is an array rendered one line each in the hero. Any text wrapped in asterisks (`'think and *ship.*'`) is set in italics by the `Emph` helper; `Section` titles get the same treatment. `profile.shortName` is the navbar wordmark below the `sm` breakpoint. `profile.phone` is the display string and `profile.phoneHref` the digits-only `tel:` target; change both together.
- `experience` is an ordered list of roles, newest first. `companyUrl` may be `null` (renders plain text). `stats`, `highlights` and `tech` are all read unguarded, so every role needs all three arrays. `stats` may be empty (the row is skipped); entries are `{ value, label, note? }` where `value` is a pre-formatted display string (`'5,000'`, `'100%'`, `'1.5s'`), nothing is animated or number-formatted. The row is a 2-column grid on phones and 3 columns from `sm`, so three entries fill it and two leave the third column empty. `highlights` are `{ title, body }` rows; `tech` is joined with commas into one muted line.
- Project `demo` and `repo` links are both optional; `stats` and `tags` must be arrays (`stats` may be empty); `category` is the eyebrow above the name; `stats` entries are `{ value, label }` display strings; `tags` are joined with commas, so they carry no keys.
- Certification item `url` may be `null` (renders as plain text); `code` is shown beside the name when present. Skill groups render as one comma-joined line per `group`.
- List entries are keyed by their own text (headline lines, stat `label`s, highlight `title`s, certification names), so duplicates inside one list collide. Groups are keyed the same way: about facts by `label`, skill groups by `group`, certification groups by `issuer`, spoken languages by `name`. Experience roles are keyed by `company` and projects by `name`, so a second role at the same company needs a different key.
- A section only appears in the navbar and scroll-spy if its `id` is listed in `navLinks`. `Background` (education, certifications, languages in one section, `id="background"`) is intentionally not in the nav. `useActiveSection` walks `navLinks` in array order and keeps the last section whose top sits above a line 96px down the page, so that order must match the DOM order in `App.jsx`; once the page is scrolled to the very bottom it forces the last nav id active. Its effect re-subscribes whenever the `ids` array identity changes, which is why `Navbar` passes a module-level `SECTION_IDS` constant rather than building the list inline. The hero is `id="top"`: outside the nav, and the target of the wordmark and the footer's back-to-top link.

**Navbar height is assumed in several places.** The fixed header is `h-16` (4rem). `scroll-padding-top: 4rem` in `src/index.css` offsets anchor jumps under it, the mobile overlay starts at `top-16`, the hero pads with `pt-24`, and `useActiveSection` measures against a line 96px down. Change them together. The mobile menu is `md:hidden` and auto-closes when the viewport reaches 768px, the same breakpoint.

**Colour and theming.** Semantic CSS variables (`--bg`, `--bg-alt`, `--border`, `--text`, `--text-muted`) are defined on `:root` (warm paper, light) and `.dark` (warm near-black). An `@theme inline` block in `src/index.css` exposes them to Tailwind as `bg-paper`, `bg-alt`, `text-ink`, `text-muted`, `border-line`, `decoration-line` and friends; use those utilities rather than hard-coded greys so every block stays correct in both themes. There is no `tailwind.config.js`. The light and dark `--bg` values are repeated in `THEME_COLOR` in `src/hooks.js` (for the `theme-color` meta tag) and in the meta tag's default in `index.html`; change all three together.

Dark mode is class-based (`<html class="dark">`, wired through `@custom-variant dark` in `index.css`) and **light by default**: the inline script in `index.html` only adds the class when `localStorage['ui-theme'] === 'dark'`, and `useTheme` in `src/hooks.js` writes that key only when the visitor toggles. Do not persist the theme on mount.

**Typography.** `index.html` loads Archivo (weights 400–600) and Newsreader with its italic, optical-size and weight axes. The serif was Bodoni Moda for a day; the owner rejected it because its hairlines render as faint dashes in Chrome on Windows, so keep to serifs with moderate stroke contrast. Classes live in `src/index.css` under `@layer components`: `.display` (the serif, weight 400, sentence case, `em` inside it is italic) for every heading including the hero and the mobile menu, `.numeral` (the serif for large figures), `.eyebrow` for small tracked uppercase labels, `.btn` / `.btn-primary` / `.btn-ghost` square hairline-bordered buttons in tracked caps (primary inverts to outline on hover), `.link-arrow` for links with a hairline underline that darkens on hover, `.nav-link`, and `.shell` container (88rem). `.display` and `.numeral` rely on Newsreader's optical-size axis (6–72) to thicken strokes at smaller sizes and force lining figures; a static fallback ignores the axis, so do not set the serif below about 1.5rem.

**Layout primitives** are in `src/components/ui.jsx`: `Section` renders the ruled 12-column header (index + label in the left three columns, title and optional `lead` in the remaining nine), requires `id` because it derives `aria-labelledby` from it, and runs the title through `Emph`; content below usually starts at `lg:col-start-4` to align with the title, and most sections are stacks of ruled rows on the same grid (label in `lg:col-span-3`, content in `lg:col-span-8`/`9`). `Reveal` is the slow scroll fade-up (`delay` for staggering, `y` for the rise distance, `as` for the tag, runs once), `Stat` is a serif figure with caption and a hairline left border, `Emph` turns `*text*` into `<em>`. `Contact` hand-rolls its own `<section>` with the same header markup instead of using `Section`.

**Section numbers are hand-maintained.** The `01`–`06` eyebrows are string literals passed as `index` to `Section` in each component (About, Experience, Projects, Skills, Background), and `Contact` hard-codes `06` in its own markup; `Experience` highlights and `Projects` rows number themselves from the array index with a literal leading `0`, so they only read correctly up to nine entries. Adding or reordering a section means renumbering by hand.

**Easing is defined twice.** `EASE` exported from `ui.jsx` (used by every Framer transition, including Hero and Navbar) and `--ease-out-expo` in `index.css` (used by CSS transitions on links and nav underlines) are the same curve; change them together.

**Motion must degrade under `prefers-reduced-motion`.** `App` wraps everything in `MotionConfig reducedMotion="user"` (so Framer skips transform animations) and a global CSS rule collapses transitions. All motion is Framer fades or CSS transitions; there is no JS-driven animation left, and new motion should stay slow (around 1s), small (a dozen pixels) and inside those two mechanisms.

**Code splitting:** `App.jsx` lazy-loads every section below `About` inside one `Suspense` whose fallback reserves 70vh so the page does not jump; `Footer` is lazy too, in a second `Suspense` with no fallback. `useActiveSection` uses a `MutationObserver` to re-measure once lazy chunks mount, so new lazy sections need no extra wiring beyond an `id` in `navLinks`.

**Navbar gotcha:** the mobile menu overlay is rendered as a sibling of `<header>`, not inside it, because the header's `backdrop-blur` would become the containing block for the fixed overlay and collapse it to zero height.

**Icons** are inline SVG components in `src/components/icons.jsx`; there is no icon package. Only the arrow, sun, moon, menu and close icons are in use; the rest are kept for convenience.

**Base path is `./`** (`vite.config.js`), so the build works on a GitHub Pages project subpath. Keep asset references relative (`./cv.pdf`, `./favicon.svg`), never root-absolute. The one exception is the `/src/main.jsx` script tag in `index.html`: that is Vite's module entry and is rewritten at build time, so leave it as is.
