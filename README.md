# Foxtheta — Marketing Website

**Strategic Intelligence. Real Impact.**

A static, fully responsive marketing site for Foxtheta, built with **React + Vite** and **React Router**. No backend, no CMS — all content lives in plain data files so it can be edited without touching layout code.

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # start the dev server → http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

Requires Node 20.19+ (Node 24 recommended).

---

## Tech stack

| Concern    | Choice                                                     |
| ---------- | ---------------------------------------------------------- |
| Framework  | React 19 (JavaScript, no TypeScript)                        |
| Build tool | Vite 8                                                      |
| Routing    | React Router 7 (`BrowserRouter`)                            |
| Styling    | Plain CSS with custom properties, co-located per component  |
| Fonts      | Inter + Plus Jakarta Sans (Google Fonts)                    |
| Icons      | Inline SVG set — `src/components/Icon/Icon.jsx`             |

---

## Project structure

```
src/
├── assets/                  fox-head mark (light + dark SVG variants)
├── components/              one folder per component, JSX + co-located CSS
│   ├── ApproachSection/     "Our approach" — four pillars
│   ├── BackToTop/           floating scroll-to-top button
│   ├── CTASection/          reusable closing call-to-action band
│   ├── FeaturedPanel/       featured capability block with product mock
│   ├── Footer/
│   ├── Header/              sticky header, services mega-menu, mobile drawer
│   ├── FaqSection/          FAQ accordion
│   ├── Hero/                home hero + isometric stack diagram and legend
│   ├── Icon/                single inline-SVG icon set
│   ├── Logo/                logo mark + wordmark
│   ├── OutcomesSection/     industry outcome cards
│   ├── PageHero/            compact hero for interior pages
│   ├── Reveal/              scroll fade-in wrapper
│   ├── ScrollToTop/         resets scroll on route change
│   ├── SectionHeading/      shared eyebrow + title + lead
│   ├── ServiceCard/         hover-swap service card
│   ├── ServicesGrid/        responsive services grid
│   ├── StatsSection/        animated stat counters
│   ├── TestimonialCard/
│   ├── TestimonialsSection/ testimonial carousel
│   └── TrustStrip/          scrolling client marquee
├── data/                    ← ALL EDITABLE CONTENT LIVES HERE
├── hooks/
│   ├── useCountUp.js        number count-up animation
│   ├── useInView.js         IntersectionObserver helper
│   └── usePageMeta.js       per-page <title> + meta description
├── pages/                   one file per route (+ co-located CSS)
├── styles/
│   ├── tokens.css           colours, spacing, type, motion — the design system
│   └── global.css           reset, utilities, buttons, shared classes
├── App.jsx                  routes + app shell
└── main.jsx                 entry point

public/
├── favicon.png              128px square, generated from the logo
└── hero-stack.png           the hero diagram — see "Swapping the hero image"

scripts/
└── generate-hero-stack.mjs  regenerates the built-in hero diagram (optional)
```

---

## Swapping the hero image

**Overwrite `public/hero-stack.png`.** That is the whole procedure — no code change. Hard-refresh (`Ctrl+Shift+R`) to bypass the browser cache.

Any aspect ratio works; the figure is sized by `max-width` with `height: auto`. If your file is not **1200×1000**, update the two `width`/`height` attributes on the `<img>` in `src/components/Hero/Hero.jsx`. They only reserve space while the image loads, so the page does not jump.

### Text on the diagram

All wording is HTML, not pixels — so it stays crisp at any zoom and is editable without regenerating artwork:

| What | Where | Notes |
| --- | --- | --- |
| Industry labels **on** the diagram | `towerLabels` array in `Hero.jsx` | `left`/`top` are percentages of the image box. Hidden below 900px, where they would collide |
| The three layer names **below** it | `legend` array in `Hero.jsx` | Always visible — this is what carries the meaning on a phone |

**If your replacement image already has its own labels baked in**, set `SHOW_TOWER_LABELS = false` in `Hero.jsx` so they don't double up. Otherwise, re-measure the percentages against your artwork.

Two things worth knowing when generating artwork:

- **Ask for no text.** Generated text usually arrives misspelled, clipped, or too small to read at hero size. Get clean geometry and let the overlay above handle the words.
- **Do not reuse another company's artwork.** Layered-stack diagrams are a common idea and fine to build your own version of; a specific render belongs to whoever commissioned it.

The current file is a stand-in produced by `scripts/generate-hero-stack.mjs`. Usage is documented at the top of that file. It is not part of `npm run build`.

---

## Routes

| Path              | Page                                           |
| ----------------- | ---------------------------------------------- |
| `/`               | Home                                           |
| `/services`       | All services                                   |
| `/services/:slug` | Service detail (generated from `servicesData`) |
| `/about`          | About                                          |
| `/contact`        | Contact (no form — direct mailto / tel)        |
| `/privacy-policy` | Privacy Policy (placeholder legal copy)        |
| `*`               | 404                                            |

---

## Editing content

Everything a non-developer needs to change is in **`src/data/`**:

| File                  | Controls                                                                       |
| --------------------- | ------------------------------------------------------------------------------ |
| `siteConfig.js`       | Company name, slogan, email, phone, address, social links, hours                |
| `navLinks.js`         | Header and footer navigation                                                    |
| `servicesData.js`     | **The services grid, mega-menu, footer links and every `/services/:slug` page** |
| `approachData.js`     | "Our approach" four pillars                                                     |
| `statsData.js`        | Headline stat counters + featured-panel stats                                   |
| `testimonialsData.js` | Testimonial carousel                                                            |
| `outcomesData.js`     | Industry outcome cards on the home page                                         |
| `trustLogos.js`       | Client logo strip                                                               |
| `aboutData.js`        | About page story, values, timeline, team                                        |
| `privacyData.js`      | Privacy policy sections                                                         |

### Adding a service

Append an object to the `services` array in `src/data/servicesData.js`. The card, the mega-menu entry, the footer link and the `/services/<slug>` page are all generated from it — no other file needs to change. The field reference is documented at the top of that file.

`icon` must be one of the keys in `src/components/Icon/Icon.jsx`.

---

## Sections intentionally disabled

Foxtheta was founded in 2026 and has no track record yet, so every section that would claim one is switched **off** rather than filled with invented proof. Fake client logos, case-study percentages and testimonials are a liability: prospects check them.

The components are all still written and styled. Re-enable each one by adding it back to the page listed below, once the content behind it is real.

| Component              | Re-enable in          | When you have…                        |
| ---------------------- | --------------------- | ------------------------------------- |
| `TrustStrip`           | `src/pages/Home.jsx`  | Real client or partner logos          |
| `OutcomesSection`      | `src/pages/Home.jsx`  | Case studies with numbers you can defend |
| `FeaturedPanel`        | `src/pages/Home.jsx`  | A named product worth featuring       |
| `StatsSection`         | `src/pages/Home.jsx`, `src/pages/About.jsx` | Counters that are true |
| `TestimonialsSection`  | `src/pages/Home.jsx`  | Client quotes you have permission to use |
| About timeline         | `src/pages/About.jsx` | Milestones worth charting (fill `milestones` in `aboutData.js`) |

The home page currently runs **Hero → Services → Approach → CTA**. Every claim on it describes how you work rather than what you have already delivered.

---

## Placeholder content to replace before launch

- **Logo** — `src/assets/foxtheta-logo.svg` and `foxtheta-logo-light.svg` are stand-in recreations of the fox-head mark. Drop the real `foxtheta-logo.png` into `src/assets/` and change the two imports at the top of `src/components/Logo/Logo.jsx`. The site is dark-themed, so the **light** variant is used in both header and footer.
- **Contact details** — `src/data/siteConfig.js` (email, phone, address are placeholders).
- **Team** — `src/data/aboutData.js` (names, roles and bios are placeholders — this is the one placeholder still visible on the live site).
- **Testimonials / client logos / case studies / stats** — `testimonialsData.js`, `trustLogos.js`, `outcomesData.js`, `statsData.js` all still hold placeholder content, but none of it renders (see "Sections intentionally disabled" above).
- **Privacy policy** — `src/data/privacyData.js` is sample copy, **not legal advice**. Have counsel review it.
- **Favicon** — `public/favicon.svg` uses the placeholder mark.

---

## Theming

All colour, spacing, radius, shadow, typography and motion values are CSS custom properties in **`src/styles/tokens.css`**. The site ships a dark theme (near-black navy canvas, electric-blue accent). Changing the palette means editing that one file — no component CSS references raw brand hex values.

Key tokens:

```css
--color-primary   /* #3b82f6 — accent blue     */
--color-bg        /* #04060e — page canvas     */
--color-heading   /* #f4f7fd — headings        */
--space-1 … -10   /* 4px → 128px spacing scale */
--section-y       /* vertical section rhythm   */
```

---

## Accessibility & motion

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, ordered heading levels.
- Skip-to-content link, visible focus rings, `aria-label` / `aria-expanded` on interactive controls.
- Keyboard-accessible mega-menu (opens on `:focus-within`), `Escape` closes menus.
- Service cards reveal their description on hover **and** keyboard focus; on touch devices both faces stack so nothing is hidden.
- Every animation is disabled under `prefers-reduced-motion: reduce`.

---

## Deploying to Vercel

The project is deployment-ready as-is.

1. Push the repo to GitHub.
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects Vite. Confirm:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

`vercel.json` adds a single SPA rewrite so deep links (`/services/ai-agent-development`, refreshing on `/about`, etc.) resolve to `index.html` instead of 404ing. That is the only deployment config this project needs.

### SEO note

This is a client-rendered SPA, so per-page `<title>` and meta description are set at runtime by `usePageMeta`. Google executes JavaScript, so this indexes fine. If rich link-preview cards for interior pages become important, add pre-rendering or move to a framework with static generation.

---

## Licence

© 2026 Foxtheta. All rights reserved.
