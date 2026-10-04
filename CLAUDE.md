# Foxtheta project instructions

Read `handoff/CLAUDE-HANDOFF.md` first. It is the current handoff as of 2026-10-01; older README sections describe the original site and can be stale.

Continue the existing React/Vite website. The user wants a premium Baseten-inspired design, particularly intentional diagrams, smooth explanatory motion, strong typography, varied accents and precise construction lines. They explicitly rejected generic cards and simplistic floating shapes. Current quality has not received final approval.

- Preserve real business content, routes and contact details. Do not invent clients, testimonials, deployments or performance metrics. Several proof sections are intentionally disabled.
- Retain original artwork; reference Baseten's visual craft without copying its assets.
- Preview fonts in `src/assets/fonts/preview` are demo/personal-use files. Their CSS is development-only. Do not ship them in production; obtain licensed webfonts first.
- The logo in `handoff/assets` is a raster concept, not an approved production replacement.
- Prefer focused edits over wholesale rewrites. The shared CSS overrides in `src/styles/editorial.css` and `precision.css` load after component styles.
- Preserve keyboard operation, reduced-motion behavior, explicit Play/Pause, offscreen pausing and animation cleanup.
- Run `npm run build` and `npm run lint` after changes. Review desktop and 320/390px mobile layouts in a browser; do not call a passing build a visual review.
- No deployment is requested. The ZIP is a working-tree snapshot, including uncommitted work, without Git history or installed dependencies.

Local start: `npm ci`, then `npm run dev -- --host 127.0.0.1`. Default URL: http://127.0.0.1:5173/.
