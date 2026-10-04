# Foxtheta handoff to Claude Code

Snapshot date: 2026-10-01 (Asia/Calcutta).

## Objective and user feedback

Continue the website redesign in place. The user requested a site that feels like a $10,000 professional engagement, specifically selecting https://www.baseten.co/ as the reference. They care most about its typography, detailed diagrams, smooth choreography, connecting lines, and different page/section accents. They called earlier results generic and insufficiently close in craft. Subsequent improvements are implemented, but there is no final design approval. Do not tell the user the reference quality has already been matched.

The latest request was to hand off and package the project for Claude Code. This package prepares that handoff; it does not launch Claude or deploy the site.

## Start and verification

The original workspace is `G:\foxtheta-website\fox-theta_Final`. The archive is portable: extract it and run commands from the extracted directory containing package.json.

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
npm run lint
```

Local URL: http://127.0.0.1:5173/. Vite may select a different port if that port is occupied; read its output. Use Node 24 LTS for parity with the verified environment (Node 24.13.0, npm 11.6.2). No backend or environment variables are required for this static site. Google Fonts supplies the fallback fonts, so those need network access; system fallbacks are present.

Fresh checks on 2026-10-01: production build passed; oxlint passed. Production assets: about 425 KB JS and 77 KB CSS before gzip, plus the existing roughly 865 KB logo PNG. Dependencies were already installed; a fresh npm ci was not performed for this handoff. No new browser QA was performed on the handoff date.

Earlier browser checks: all six service selections and links, keyboard Home navigation, RAG example switching/source disclosure, Play/Pause/Play, mobile menu, and desktop/mobile layouts. No horizontal overflow observed at 320px on the reviewed routes. No captured browser errors. No frame-rate profiling, comprehensive accessibility audit or automated test suite is claimed.

## Stack and source map

- React 19, React Router 7, Vite 8, plain JavaScript/CSS, GSAP 3.15, oxlint. Lockfile included.
- `src/App.jsx`: routes and global shell; route changes remount the main page.
- `src/pages/Home.jsx`: hero, service explorer, RAG example, approach, FAQ, CTA.
- `src/components/Hero`: homepage split layout.
- `src/components/MotionDiagram/PrecisionScene.jsx`: original isometric homepage artwork with plates, etched grids, moving packets, tool cluster and review output.
- `src/components/MotionDiagram/ServiceScene.jsx`: six distinct original SVG service illustrations: agent orchestration cylinders, knowledge index and sources, workflow routing, custom application, integrations, desktop/mobile devices.
- `src/components/MotionDiagram/ServiceHero.jsx`: illustrated service masthead.
- `src/components/MotionDiagram/RagScene.jsx`: interactive example questions with cited-source disclosure and Index/Retrieve/Answer controls.
- `src/components/MotionDiagram/useDiagramMotion.js`: master timeline lifecycle, visibility threshold, document visibility, reduced motion, user pause and stage selection.
- `src/components/ServicesGrid/ServiceExplorer.jsx` and CSS: six keyboard-accessible tabs; selecting a service changes the explanation, diagram, link and accent. Used on home and services overview.
- `src/styles/editorial.css` then `precision.css`: late-loaded design overrides. Component CSS and older token definitions can be superseded here.
- `src/styles/font-preview.css`: development-only supplied demo-font preview.
- `src/data`: actual copy, service definitions, site/contact information. Preserve these rather than inventing replacement business claims.
- `vercel.json`: SPA rewrite configuration; no deployment performed.
- `.claude/launch.json`: existing npm development-server configuration.

Older unused components/assets remain, including ArchitectureScene, SystemDiagram and hero-stack files/scripts. Establish imports before deleting anything. Do not assume every retained component is part of the active design.

## Routes

`/`, `/services`, `/about`, `/contact`, `/privacy-policy`, catch-all 404, and these service detail routes:

- `/services/ai-agent-development`
- `/services/rag-knowledge-systems`
- `/services/workflow-automation`
- `/services/custom-ai-applications`
- `/services/integrations`
- `/services/web-mobile-applications`

Contact uses mailto links, not a form/backend. Preserve the existing contact data. Customer logos, stats, testimonials and case studies remain intentionally unrendered because verified proof was not supplied.

## Fonts: important current limitation

Baseten was observed using Neue Alte Grotesk with Chivo Mono labels. The user supplied `C:\Users\Ganeeshkar\Downloads\neue-alte-grotesk-font-family`. Those files are Fontspring DEMO OTFs; the accompanying notice says Personal Use Only. Four demo weights and their notice are included in `src/assets/fonts/preview` to reproduce the current local review.

`src/main.jsx` imports the preview CSS only inside `if (import.meta.env.DEV)`. Production uses Inter + Chivo Mono. The demo substitutes a mark for some symbols, so its CSS unicode range is limited to Latin letterforms and space; punctuation falls back. This is a preview, not an exact production font match. Production output was checked previously and contained no demo-font assets/references. Keep that separation until licensed webfonts are supplied. Do not mistake the user's initial 'I have the font' for evidence these demo files are the production licence.

## Logo status

The user requested a new logo. `handoff/assets/foxtheta-logo-concept.png` is the latest generated concept board: fox ears combined with a theta-like crossbar, black wordmark, symbol and reversed icon. It was generated with the built-in image tool, is raster, has not been approved, and has NOT replaced the website logo. The earlier faulty dark rendering is omitted. If selected, refine/vectorize the mark and establish spacing/small-size variants before integration.

## Reference research

Reviewed Baseten home and these pages: model performance, model management, cloud-native infrastructure, multi-cloud capacity management, model APIs, training and dedicated inference. Its hero was observed to be a complex Lottie-rendered SVG; other sections use layered cylinders, wireframe cubes, translucent lilac planes, dotted globe, GPU chips and request flows. Its craftsmanship depends on the composition, timing and fine line work, not just a green color palette. No Baseten font, animation JSON or illustration assets were copied into this project.

Reference URLs:
- https://www.baseten.co/
- https://www.baseten.co/platform/model-performance/
- https://www.baseten.co/platform/model-management/
- https://www.baseten.co/platform/cloud-native-infrastructure/
- https://www.baseten.co/products/multi-cloud-capacity-management/
- https://www.baseten.co/products/model-apis/
- https://www.baseten.co/products/training/

Historical research and rationale are in `DESIGN-REFERENCES.md` and `REDESIGN-MOTION-PLAN.md`. Later dated entries supersede earlier font and implementation plans.

## Recommended continuation

1. Run the site and inspect current home/service pages before editing. Compare a full animation cycle against the reference. On the prior machine reduced motion was enabled: use each scene's Play button to review movement rather than changing OS preferences.
2. Refine timing, connector alignment, visual density, line contrast and small-screen label legibility. Do not replace the existing scenes with generic floating shapes. Profile performance rather than promising 60fps.
3. Obtain licensed production webfonts and recheck wrapping at desktop/tablet/320/390px. The font change affects composition.
4. Get feedback on the logo concept before replacing the current identity.
5. Review About, Contact and service body sections for consistency, keyboard focus, tab behavior, production fallback typography and route transitions. Build and lint, then visually verify modified flows.

The user previously asked to retain 20% of their five-hour Codex allowance. That was a Codex-specific session preference, not a known Claude Code quota. Do not carry forward stale usage percentages or claim a reserve without access to that system's actual usage.

## Package contents

Source, public assets, scripts, configuration/lockfile, current design notes, Claude instructions, this handoff and the latest logo concept. `handoff/PACKAGE-MANIFEST.csv` lists SHA-256 hashes of included files (excluding the manifest itself). Installed dependencies, generated dist, Git history, editor caches and environment/credential files are excluded. This preserves the current working tree, not only committed files. Install dependencies after extraction.
