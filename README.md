# Foxtheta — Marketing Website

> **Strategic Intelligence. Real Impact.**

The marketing site for **Foxtheta**, an AI development company building agents, RAG knowledge systems, workflow automation and custom AI applications.

A static, fully responsive, dark-themed single-page app. No backend, no CMS, no database — every piece of copy lives in a plain JavaScript data file, so content can be edited without touching layout code.

```bash
npm install && npm run dev
```

---

## Contents

- [Quick start](#quick-start)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Routes](#routes)
- [Editing content](#editing-content)
- [Design system & theming](#design-system--theming)
- [The hero image](#the-hero-image)
- [Sections intentionally disabled](#sections-intentionally-disabled)
- [Before you launch](#before-you-launch)
- [Accessibility & motion](#accessibility--motion)
- [Deploying](#deploying)

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # dev server with hot reload → http://localhost:5173
npm run build     # production build → /dist
npm run preview   # serve the built /dist locally to check before deploying
npm run lint      # oxlint
```

Requires **Node 20.19+** (developed on Node 24).

---

## Tech stack

| Concern    | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | React 19 — JavaScript, no TypeScript                       |
| Build tool | Vite 8                                                     |
| Routing    | React Router 7 (`BrowserRouter`)                           |
| Styling    | Plain CSS with custom properties, co-located per component |
| Fonts      | Inter + Plus Jakarta Sans (Google Fonts)                   |
| Icons      | One inline-SVG set — `src/components/Icon/Icon.jsx`        |
| Linting    | oxlint                                                     |

Three runtime dependencies total: `react`, `react-dom`, `react-router-dom`. No UI kit, no CSS framework, no animation library.

---

## Project structure

```
src/
├── assets/
│   └── foxtheta-logo.png    the fox-head mark, background made transparent
├── components/              one folder per component: JSX + co-located CSS
│   ├── ApproachSection/     "Our approach" — four delivery pillars
│   ├── BackToTop/           floating scroll-to-top button
│   ├── CTASection/          reusable closing call-to-action band
│   ├── FaqSection/          FAQ accordion with sticky intro column
│   ├── FeaturedPanel/       featured-capability block  (disabled — see below)
│   ├── Footer/              four-column footer, generated from data
│   ├── Header/              sticky header, services mega-menu, mobile drawer
│   ├── Hero/                home hero, stack diagram, overlay labels, legend
│   ├── Icon/                the entire icon set, one file
│   ├── Logo/                logo mark + wordmark
│   ├── OutcomesSection/     industry case-study cards  (disabled)
│   ├── PageHero/            compact hero + breadcrumbs for interior pages
│   ├── Reveal/              scroll fade-in wrapper
│   ├── ScrollToTop/         resets scroll position on route change
│   ├── SectionHeading/      shared eyebrow + title + lead
│   ├── ServiceCard/         hover-swap service card
│   ├── ServicesGrid/        responsive services grid
│   ├── StatsSection/        animated count-up stats  (disabled)
│   ├── TestimonialCard/     single testimonial
│   ├── TestimonialsSection/ testimonial carousel  (disabled)
│   └── TrustStrip/          scrolling client marquee  (disabled)
├── data/                    ← ALL EDITABLE CONTENT LIVES HERE
├── hooks/
│   ├── useCountUp.js        rAF number count-up
│   ├── useInView.js         IntersectionObserver helper
│   └── usePageMeta.js       per-page <title>, description and canonical
├── pages/                   one file per route + co-located CSS
├── styles/
│   ├── tokens.css           colour, spacing, type, motion — the design system
│   └── global.css           reset, layout utilities, buttons, shared classes
├── App.jsx                  routes + app shell
└── main.jsx                 entry point

public/
├── favicon.png              128px square, generated from the logo
└── hero-stack.png           the hero diagram — see "The hero image"

scripts/
└── generate-hero-stack.mjs  regenerates the built-in hero diagram (optional)
```

---

## Routes

| Path              | Page                                                   |
| ----------------- | ------------------------------------------------------ |
| `/`               | Home — hero, services, approach, FAQ, CTA              |
| `/services`       | All services                                           |
| `/services/:slug` | Service detail — one page per entry in `servicesData`  |
| `/about`          | About — story, values, team                            |
| `/contact`        | Contact — no form, direct `mailto:` / `tel:` links     |
| `/privacy-policy` | Privacy policy — **placeholder legal copy**            |
| `*`               | 404                                                    |

---

## Editing content

Everything a non-developer needs to change is in **`src/data/`**. No JSX involved.

| File                  | Controls                                                                          |
| --------------------- | --------------------------------------------------------------------------------- |
| `siteConfig.js`       | Company name, slogan, email, phone, address, social links, office hours            |
| `servicesData.js`     | **The services grid, the mega-menu, footer links and every `/services/:slug` page** |
| `navLinks.js`         | Header and footer navigation                                                       |
| `approachData.js`     | "Our approach" — the four pillars                                                  |
| `faqData.js`          | Home page FAQ accordion                                                            |
| `aboutData.js`        | About page intro, story, values, team, timeline                                    |
| `privacyData.js`      | Privacy policy sections                                                            |
| `statsData.js`        | Stat counters *(section disabled)*                                                 |
| `testimonialsData.js` | Testimonial carousel *(section disabled)*                                          |
| `outcomesData.js`     | Industry case-study cards *(section disabled)*                                     |
| `trustLogos.js`       | Client logo strip *(section disabled)*                                             |

### Adding a service

Append one object to the `services` array in `src/data/servicesData.js`. The grid card, the header mega-menu entry, the footer link and the whole `/services/<slug>` detail page are all generated from it — **no other file needs to change.** The full field reference is documented at the top of that file.

`icon` must be one of the keys in `src/components/Icon/Icon.jsx`.

---

## Design system & theming

Every colour, space, radius, shadow, font size and easing curve is a CSS custom property in **`src/styles/tokens.css`**. No component stylesheet contains a raw brand hex value, so re-skinning the site means editing that one file.

```css
--color-primary   /* #3b82f6 — accent blue          */
--color-bg        /* #04060e — near-black navy canvas */
--color-heading   /* #f4f7fd — headings              */
--space-1 … -10   /* 4px → 128px, an 8px-based scale */
--section-y       /* vertical rhythm between sections */
```

The site ships a dark theme. Flipping it to light means changing the semantic role tokens (`--color-bg`, `--color-text`, `--color-surface`, `--color-border`) — the component layer follows automatically. You would also need a dark-on-light export of the logo.

---

## The hero image

**To swap it: overwrite `public/hero-stack.png`.** That is the whole procedure — no code change. Hard-refresh (`Ctrl+Shift+R`) to beat the browser cache.

Any aspect ratio fits; the figure is sized by `max-width` with `height: auto`. If your file is not **1200×1000**, update the two `width`/`height` attributes on the `<img>` in `src/components/Hero/Hero.jsx` — they exist only to reserve space while the image loads so the page does not jump.

### Text on the diagram

All wording is HTML rather than pixels, so it stays crisp at any zoom and can be edited without regenerating artwork:

| What                              | Where                             | Notes                                                                   |
| --------------------------------- | --------------------------------- | ----------------------------------------------------------------------- |
| Industry labels **on** the diagram | `towerLabels` array in `Hero.jsx` | `left`/`top` are percentages of the image box. Hidden below 900px, where they would collide |
| The three layer names **below** it | `legend` array in `Hero.jsx`      | Always visible — this is what carries the meaning on a phone             |

If your replacement artwork already has labels baked in, set `SHOW_TOWER_LABELS = false` in `Hero.jsx` so they don't double up. Otherwise re-measure the six percentages against your image.

Two things worth knowing when generating artwork:

- **Ask for no text.** Generated text tends to arrive misspelled, clipped, or too small to read at hero size. Get clean geometry and let the HTML overlay handle the words.
- **Don't reuse another company's render.** A layered-stack diagram is a common idea and fine to build your own version of; a specific piece of artwork belongs to whoever commissioned it.

The current file is a stand-in produced by `scripts/generate-hero-stack.mjs`. Usage is documented at the top of that script. It does **not** run during `npm run build`.

---

## Sections intentionally disabled

Foxtheta was founded in 2026 and has no track record yet, so **every section that would claim one is switched off rather than filled with invented proof.** Fabricated client logos, case-study percentages and testimonials are a liability — prospects check them, and a number you can't walk through on a call ends the conversation.

The components are all written, styled and working. Re-enable each by adding it back to the page listed below, once the content behind it is real.

| Component             | Re-enable in                                | When you have…                                                  |
| --------------------- | ------------------------------------------- | ----------------------------------------------------------------- |
| `TrustStrip`          | `src/pages/Home.jsx`                        | Real client or partner logos                                       |
| `OutcomesSection`     | `src/pages/Home.jsx`                        | Case studies with numbers you can defend                           |
| `FeaturedPanel`       | `src/pages/Home.jsx`                        | A named product worth featuring                                    |
| `StatsSection`        | `src/pages/Home.jsx`, `src/pages/About.jsx` | Counters that are true                                             |
| `TestimonialsSection` | `src/pages/Home.jsx`                        | Client quotes you have permission to use                           |
| About timeline        | `src/pages/About.jsx`                       | Milestones worth charting — fill `milestones` in `aboutData.js`    |

The home page currently runs **Hero → Services → Approach → FAQ → CTA**. Every claim on it describes how the company works rather than what it has already delivered.

---

## Before you launch

| Item                | Where                     | Status                                                                        |
| ------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| **Contact details** | `src/data/siteConfig.js`  | Email, phone and address are placeholders                                       |
| **Team**            | `src/data/aboutData.js`   | Names, roles and bios are placeholders — the only placeholder still user-visible |
| **Privacy policy**  | `src/data/privacyData.js` | Sample copy, **not legal advice**. Have counsel review it                        |
| **Service copy**    | `src/data/servicesData.js`| Written to be accurate for a new firm — review before publishing                 |
| **Logo resolution** | `src/assets/foxtheta-logo.png` | Source is 136×128. Fine at the 38–42px it renders at; get an SVG if you ever show the mark large |
| **Sales process**   | `faqData.js` vs `approachData.js` | The FAQ describes a *strategy call → diagnostic → blueprint → build* flow that "Our approach" doesn't mention. Align the two |

---

## Accessibility & motion

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, ordered heading levels.
- Skip-to-content link, visible focus rings, `aria-label` / `aria-expanded` / `aria-controls` on every interactive control.
- Services mega-menu opens on hover **and** `:focus-within`, so it is fully keyboard reachable. `Escape` closes menus; the mobile drawer traps body scroll.
- Service cards reveal their description on hover **and** keyboard focus. On touch devices (`@media (hover: none)`) both faces stack so nothing is hidden behind an interaction that doesn't exist.
- Decorative SVG and mock UI are `aria-hidden`; meaning is carried by real text.
- Every animation is disabled under `prefers-reduced-motion: reduce`.

---

## Deploying

Deployment-ready as-is. Standard Vite output, no custom build step.

### Vercel

1. Push the repo to GitHub.
2. Vercel → **New Project → Import**.
3. Vercel auto-detects Vite. Confirm:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

`vercel.json` adds one SPA rewrite so deep links (`/services/ai-agent-development`, or refreshing on `/about`) resolve to `index.html` instead of 404ing. That is the only deployment config this project needs.

### Anywhere else

`npm run build` emits a static `/dist` that any host will serve — Netlify, Cloudflare Pages, S3, nginx. The one requirement is the same SPA fallback: **rewrite all unmatched paths to `/index.html`.** Without it, client-side routes 404 on direct load.

### SEO note

This is a client-rendered SPA, so per-page `<title>`, meta description and canonical URL are set at runtime by `usePageMeta`. Google executes JavaScript, so pages index fine. If rich link-preview cards for interior pages matter (Slack, LinkedIn, X unfurls), those crawlers do **not** run JS — you would need pre-rendering or a framework with static generation.

---

## Licence

© 2026 Foxtheta. All rights reserved.
