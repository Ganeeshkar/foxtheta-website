/**
 * ============================================================
 * Generates the hero diagram at public/hero-stack.png
 * ============================================================
 *
 * You only need this if you want to tweak the built-in diagram. If you are
 * replacing it with your own artwork, just overwrite public/hero-stack.png
 * and ignore this file entirely.
 *
 * Usage:
 *   node scripts/generate-hero-stack.mjs
 *   google-chrome --headless --disable-gpu --hide-scrollbars \
 *     --window-size=1200,1000 \
 *     --screenshot=public/hero-stack.png scripts/hero-stack.html
 *
 * (Any Chromium build works. The first step writes scripts/hero-stack.html;
 * the second rasterises it. Nothing here runs during `npm run build`.)
 *
 * What it draws, bottom to top:
 *   dark base slab + plates  →  foundation models, interchangeable
 *   glowing blue slab        →  the Foxtheta layer
 *   towers                   →  industry applications
 *
 * Deliberately contains NO text. Labels live in the HTML legend in
 * src/components/Hero/Hero.jsx, where they stay legible at every screen
 * size and can be edited without regenerating anything.
 */
import { writeFileSync } from "node:fs";

const K = Math.cos(Math.PI / 6);
const iso = (x, y, z) => [(x - y) * K, (x + y) / 2 - z];
const poly = (p) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

function box({ cx = 0, cy = 0, size, z0, z1 }) {
  const h = size / 2;
  const right = [cx + h, cy - h];
  const front = [cx + h, cy + h];
  const left = [cx - h, cy + h];
  const back = [cx - h, cy - h];
  return {
    top: poly([back, right, front, left].map(([x, y]) => iso(x, y, z1))),
    right: poly([iso(...right, z1), iso(...front, z1), iso(...front, z0), iso(...right, z0)]),
    left: poly([iso(...left, z1), iso(...front, z1), iso(...front, z0), iso(...left, z0)]),
    apex: iso(cx, cy, z1),
  };
}

/* All six towers sit on the line y = -x. In this projection that puts them
   at a constant depth (x + y = 0) and evenly spaced across screen x, so
   nothing overlaps and the varying heights read as a clean skyline.
   Screen x = (x - y) * cos30 = 2x * cos30. */
const towers = [
  { id: "retail", label: "Retail", x: -99.5, height: 112 },
  { id: "finance", label: "Finance", x: -59.75, height: 158 },
  { id: "insurance", label: "Insurance", x: -19.9, height: 96 },
  { id: "logistics", label: "Logistics", x: 19.9, height: 176 },
  { id: "healthcare", label: "Healthcare", x: 59.75, height: 128 },
  { id: "saas", label: "SaaS", x: 99.5, height: 142 },
].map((t) => ({ ...t, y: -t.x }));

const plates = [
  [145, -55], [145, 20], [145, 95], [55, 145], [-20, 145], [-95, 145],
];

const BASE = { size: 340, z0: 0, z1: 24 };
const CORE = { size: 240, z0: 88, z1: 108 };
const TOWER = 34;

const base = box({ size: BASE.size, ...BASE });
const core = box({ size: CORE.size, ...CORE });
const ordered = [...towers].sort((a, b) => a.x + a.y - (b.x + b.y));

const platesSvg = plates
  .map(([x, y]) => {
    const p = box({ cx: x, cy: y, size: 40, z0: BASE.z1, z1: BASE.z1 + 9 });
    return `<polygon points="${p.left}" fill="#101b31"/><polygon points="${p.right}" fill="#0b1424"/><polygon points="${p.top}" fill="#1b2a49" stroke="rgba(96,165,250,0.5)" stroke-width="1"/>`;
  })
  .join("\n");

const towersSvg = ordered
  .map((t) => {
    const b = box({ cx: t.x, cy: t.y, size: TOWER, z0: CORE.z1, z1: CORE.z1 + t.height });
    return `<g filter="url(#towerShadow)"><polygon points="${b.left}" fill="url(#towerLeft)"/><polygon points="${b.right}" fill="url(#towerRight)"/><polygon points="${b.top}" fill="url(#towerTop)" stroke="rgba(96,165,250,0.5)" stroke-width="1"/></g>`;
  })
  .join("\n");

/* viewBox tightly bounds the artwork — no dead margin:
   x: base slab side corners at ±294.4
   y: tallest tower's back top corner at -301
      base slab front foot at 170, plus the floor glow to ~183   */
const VB = { x: -300, y: -310, w: 600, h: 500 };
const OUT_W = 1200;
const OUT_H = Math.round((OUT_W * VB.h) / VB.w);

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;background:#04060e;}
  svg{display:block;width:${OUT_W}px;height:${OUT_H}px;}
  .lbl{font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:700;
       letter-spacing:.06em;text-transform:uppercase;fill:#c3d8fb;
       paint-order:stroke;stroke:rgba(4,6,14,.9);stroke-width:4px;stroke-linejoin:round;}
</style></head><body>
<svg viewBox="${VB.x} ${VB.y} ${VB.w} ${VB.h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="baseTop" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#18233d"/><stop offset="1" stop-color="#0b1322"/></linearGradient>
    <linearGradient id="baseRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1424"/><stop offset="1" stop-color="#060a14"/></linearGradient>
    <linearGradient id="baseLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101a2e"/><stop offset="1" stop-color="#080e1c"/></linearGradient>
    <linearGradient id="coreTop" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0" stop-color="#7cb4fd"/><stop offset="0.5" stop-color="#3b82f6"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient>
    <linearGradient id="coreRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d4ed8"/><stop offset="1" stop-color="#152e7a"/></linearGradient>
    <linearGradient id="coreLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#1a336f"/></linearGradient>
    <linearGradient id="towerTop" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#2a3a58"/><stop offset="1" stop-color="#16203a"/></linearGradient>
    <linearGradient id="towerRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2947"/><stop offset="1" stop-color="#0a1020"/></linearGradient>
    <linearGradient id="towerLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#131d33"/><stop offset="1" stop-color="#070c18"/></linearGradient>
    <radialGradient id="floorGlow"><stop offset="0" stop-color="#2563eb" stop-opacity="0.45"/><stop offset="1" stop-color="#2563eb" stop-opacity="0"/></radialGradient>
    <filter id="coreGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="13" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="towerShadow" x="-40%" y="-20%" width="180%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#000" flood-opacity="0.55"/></filter>
    <filter id="slabShadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#000" flood-opacity="0.6"/></filter>
  </defs>

  <ellipse cx="0" cy="125" rx="250" ry="58" fill="url(#floorGlow)"/>

  <g filter="url(#slabShadow)">
    <polygon points="${base.left}" fill="url(#baseLeft)"/>
    <polygon points="${base.right}" fill="url(#baseRight)"/>
    <polygon points="${base.top}" fill="url(#baseTop)" stroke="rgba(96,165,250,0.22)" stroke-width="1"/>
  </g>

  <g filter="url(#coreGlow)">
    <polygon points="${core.left}" fill="url(#coreLeft)"/>
    <polygon points="${core.right}" fill="url(#coreRight)"/>
    <polygon points="${core.top}" fill="url(#coreTop)" stroke="rgba(147,197,253,0.6)" stroke-width="1"/>
  </g>

  ${platesSvg}
  ${towersSvg}
</svg>
</body></html>`;

writeFileSync(new URL("./hero-stack.html", import.meta.url), html);
console.log(`wrote scripts/hero-stack.html — rasterise at ${OUT_W}x${OUT_H}`);
