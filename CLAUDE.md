# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page personal portfolio for Abdul Rahiman Mihad (AI Engineer). React 18 + Vite 6 + Tailwind CSS 4 + Framer Motion, deployed as a static site to GitHub Pages at https://abdulrahimanmihad.github.io/portfolio/.

The design is a two-column dossier. A deep-green identity panel on the left stays fixed and holds the name, the statement, the two actions and a live section index; an ivory column on the right scrolls, and every section is a folio with a large brass numeral in its gutter. Type is Newsreader (serif, sentence case, one italic word) over Archivo text and tracked small-caps labels. One palette, no theme toggle. The owner has rejected, in order: a Nike/Adidas heavy-uppercase look, a paper-and-ink editorial layout that kept the same skeleton, and a high-contrast Didone serif whose hairlines rendered as faint dashes on Windows. They want something that does not look like a template and explicitly do not want "AI slop": no gradients, glass, emoji, pulsing dots, tickers, count-up numbers, chip tags, card grids or pill buttons. Say less, set it well.

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

**CV updates:** `update-cv.cmd` is a double-click script for the owner: it stages `public/cv.pdf`, commits "Update CV", and pushes. Many commits are these CV bumps. The site copy is meant to mirror the CV (role titles, phone number, figures), so when the CV changes, `src/data.js` usually should too. `pypdf` is installed for the local Python, so `PdfReader('public/cv.pdf')` is the quickest way to read it.

**Visual checks:** the Claude in Chrome extension works on the owner's machine (check `tabs_context_mcp`); the owner's own screen is a 1536×776 viewport, so check the panel fits that height. For phone widths, `scripts/og-card.cjs` is a working template for driving headless Chrome over the DevTools Protocol (launch with `--remote-debugging-port`, attach with `Target.attachToTarget {flatten:true}`, `Emulation.setDeviceMetricsOverride`, `Page.captureScreenshot`); scroll first so `whileInView` reveals fire.

## Architecture

**Content lives in `src/data.js`; components only render it.** Profile, nav links, about text, experience, projects, certifications, skills, education and spoken languages are all exported from there. Text or data changes should go in `data.js`, not JSX. The content is deliberately curated (three highlights per role, four capability lines, one sentence per project); adding more rows is the fastest way to make the page feel crammed again.

Copy that is *not* sourced from `data.js` and must be updated by hand when profile details change:
- `index.html`: the `<title>`, meta description, Open Graph/Twitter tags and the JSON-LD `Person` block (employer, phone, city, `knowsAbout`).
- `scripts/og-card.html` carries its own copy of the statement, name, title and tagline, in the panel palette; re-render `public/og-image.png` with `node scripts/og-card.cjs` after editing it.
- Section titles are string literals passed to `Section` in each component. The Experience title ("Two systems, both *live.*") describes the data and goes stale if a role is added.
- `Contact.jsx` hard-codes the "Open to AI engineering roles…" paragraph (only `profile.availability` and `profile.location` are interpolated into it) and the LinkedIn/GitHub handle text shown under each link.

**Layout.** `App.jsx` renders `MobileBar` (sticky, `lg:hidden`) and then a grid that is two columns from `lg`: `Panel` (an `<aside>`, `lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto`, so it stays put and scrolls internally on short viewports) and `<main>` with the sections and footer. The grid needs `lg:items-start` or the sticky panel would stretch and never stick. Below `lg` the panel is a full-height hero block at the top of the page and the mobile bar supplies navigation. The panel is `id="top"`, the target of the wordmark and the footer's back-to-top link.

**Navigation data.** `navLinks` carries `{ id, index, label }` for all six sections, Background included, and its order must match the section order in `App.jsx`: `Panel` renders it as the index, `MobileBar` as the menu, and `useActiveSection` (in `src/hooks.js`) walks it in order, keeping the last section whose top sits above a line 96px down the page and forcing the last id once the page is scrolled to the bottom. Its effect re-subscribes whenever the `ids` array identity changes, which is why `Panel` passes a module-level `SECTION_IDS` constant. Each component still passes its `index` to `Section` as a literal (`"01"`–`"06"`), so those must agree with `navLinks[].index`; `Experience` highlights number themselves from the array index with a literal leading `0`, so they only read correctly up to nine entries.

**Mobile bar coupling.** The bar is `h-14`; `scroll-padding-top: 3.5rem` in `src/index.css` offsets anchor jumps under it below `lg` and is zero from `lg` where there is no bar. The menu overlay is a sibling of the bar at `top-14`, closes on Escape and auto-closes once the viewport reaches 1024px (the same `lg` breakpoint where the panel index takes over).

**Colour.** All colours are static tokens in the `@theme` block of `src/index.css`, so Tailwind utilities exist for each: the ivory dossier uses `paper`, `ink`, `muted`, `line` and `accent` (a dark brass that passes AA for 11px labels on ivory); the green panel uses `panel`, `ivory`, `sage`, `brass` and `panel-line` (ivory at 16% alpha). Use those utilities, never hard-coded hex. There is no dark mode and no runtime CSS variable swapping; the `theme-color` meta in `index.html` is the panel green. There is no `tailwind.config.js`.

**Typography.** `index.html` loads Archivo (weights 400–600) and Newsreader with its italic, optical-size and weight axes. Classes live in `src/index.css` under `@layer components`: `.display` (the serif for every heading, `em` inside it is italic), `.numeral` (the serif for folio numbers and figures, lining figures forced), `.lede` (the serif opening paragraph, used for the first Profile paragraph), `.eyebrow` (small tracked uppercase, muted by default, override colour with a utility), `.btn` with `.btn-ivory` / `.btn-outline` for the panel and `.btn-ink` for the dossier (square, hairline border, tracked caps, solid variants invert on hover), and `.link-arrow` (hairline underline that darkens on hover). `.display` and `.numeral` rely on Newsreader's optical-size axis to thicken strokes at small sizes; keep the serif above about 1.5rem.

**Layout primitives** are in `src/components/ui.jsx`: `Section` renders a folio (`border-b`, horizontal padding, a block centred up to 54rem that is a `[gutter_1fr]` grid from `sm`: the brass `numeral` in the gutter, then `label`, `title` run through `Emph`, and `children` in a 42rem reading column), and requires `id` because it derives `aria-labelledby` from it. `Reveal` is the slow scroll fade-up (`delay` for staggering, `y` for the rise distance, `as` for the tag, runs once), `Stat` is a serif figure with caption, `Emph` turns `*text*` into `<em>`. `Footer` uses the same 54rem centring by hand so it aligns with the folios.

**Data contracts worth knowing** (components branch on these):
- `profile.headline` is one string; text wrapped in asterisks (`'think and *ship.*'`) is set in italics by `Emph`, and `Section` titles get the same treatment. `profile.shortName` is the mobile bar wordmark. `profile.phone` is the display string and `profile.phoneHref` the digits-only `tel:` target; change both together.
- `experience` is an ordered list of roles, newest first. `companyUrl` may be `null` (renders plain text). `stats`, `highlights` and `tech` are all read unguarded, so every role needs all three arrays. `stats` may be empty (the row is skipped); entries are `{ value, label, note? }` where `value` is a pre-formatted display string (`'5,000'`, `'100%'`), nothing is animated or number-formatted; the row is a 2-column grid on phones and 3 columns from `sm`. `highlights` are `{ title, body }` rows; `tech` is joined with commas into one muted line.
- Project `demo` and `repo` links are both optional; `stats` and `tags` must be arrays (`stats` may be empty); `category` is the eyebrow above the name; `stats` entries are `{ value, label }` display strings; `tags` are joined with commas, so they carry no keys.
- Certification item `url` may be `null` (renders as plain text); `code` is shown beside the name when present. Skill groups render as one comma-joined line per `group` in a two-column grid from `sm`. `about.paragraphs[0]` is the serif lede; the rest are body text.
- List entries are keyed by their own text (stat `label`s, highlight `title`s, certification names), so duplicates inside one list collide. Groups are keyed the same way: about facts by `label`, skill groups by `group`, certification groups by `issuer`, spoken languages by `name`. Experience roles are keyed by `company` and projects by `name`, so a second role at the same company needs a different key.

**Easing is defined twice.** `EASE` exported from `ui.jsx` (every Framer transition, including the panel and mobile menu) and `--ease-out-expo` in `index.css` (CSS transitions on links) are the same curve; change them together.

**Motion must degrade under `prefers-reduced-motion`.** `App` wraps everything in `MotionConfig reducedMotion="user"` (so Framer skips transform animations) and a global CSS rule collapses transitions. All motion is Framer fades or CSS transitions; there is no JS-driven animation, and new motion should stay slow (around 1s), small (a dozen pixels) and inside those two mechanisms.

**Code splitting:** `Panel`, `MobileBar` and `About` load eagerly; `App.jsx` lazy-loads every other section inside one `Suspense` whose fallback reserves 70vh so the page does not jump, and `Footer` in a second `Suspense` with no fallback. `useActiveSection` uses a `MutationObserver` to re-measure once lazy chunks mount, so new lazy sections need no extra wiring beyond an entry in `navLinks`.

**Icons** are inline SVG components in `src/components/icons.jsx`; there is no icon package. Only the arrow-up-right, arrow-up, menu and close icons are in use; the rest are kept for convenience.

**Base path is `./`** (`vite.config.js`), so the build works on a GitHub Pages project subpath. Keep asset references relative (`./cv.pdf`, `./favicon.svg`), never root-absolute. The one exception is the `/src/main.jsx` script tag in `index.html`: that is Vite's module entry and is rewritten at build time, so leave it as is.
