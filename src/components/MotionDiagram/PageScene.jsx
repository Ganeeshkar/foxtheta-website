import { useId, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import useDiagramMotion from "./useDiagramMotion";
import { Plate, SceneFooter } from "./IsoParts";
import { pathOf, polygon, project } from "./iso";
import "./PageScene.css";

gsap.registerPlugin(MotionPathPlugin);

// Original illustrations for the interior page mastheads. Each one explains the
// page it sits on: six practices feeding one team, the system under a demo, and
// the four steps from a first email to a written scope.

/* ---------------------------------------------------------------- services */

const hubSteps = [{ label: "Choose a practice", time: 0 }, { label: "Combine in one team", time: 3.2 }, { label: "Deliver one roadmap", time: 6.2 }];
const modules = [
  { label: "AI AGENTS", at: [-185, 115], tone: "green" },
  { label: "KNOWLEDGE", at: [-185, 0], tone: "violet" },
  { label: "AUTOMATION", at: [-185, -115], tone: "green" },
  { label: "AI APPS", at: [-115, -185], tone: "violet" },
  { label: "INTEGRATIONS", at: [0, -185], tone: "blue" },
  { label: "WEB + MOBILE", at: [115, -185], tone: "green" },
];
const hubRoutes = modules.map(({ at: [x, y] }) => x === -185
  ? pathOf([[-163, y, 0], [-118, y, 0], [-118, 0, 0], [-64, 0, 0]])
  : pathOf([[x, -163, 0], [x, -118, 0], [0, -118, 0], [0, -64, 0]]));
const outputRoute = pathOf([[64, 0, 0], [140, 0, 0]]);

function buildHub(root) {
  const q = s => root.querySelectorAll(s);
  const tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "power2.inOut" } });
  q(".page-hub-packet").forEach((packet, index) => {
    const route = hubRoutes[Number(packet.dataset.route)];
    for (let cycle = 0; cycle < 2; cycle++) {
      const at = 0.3 + (index % 6) * 0.35 + cycle * 2.6;
      tl.fromTo(packet, { opacity: 0 }, { opacity: 1, duration: .2, immediateRender: false }, at)
        .fromTo(packet, { motionPath: { path: route, start: 0, end: 0 } }, { motionPath: { path: route, start: 0, end: 1 }, duration: 1.7, ease: "none", immediateRender: false }, at)
        .to(packet, { opacity: 0, duration: .2 }, at + 1.5);
    }
  });
  tl.fromTo(q(".page-hub-module"), { y: 0 }, { y: -12, duration: .8, stagger: .32 }, 0)
    .fromTo(q(".page-hub-module-glow"), { opacity: 0 }, { opacity: 1, duration: .6, stagger: .32 }, .2)
    .fromTo(q(".page-hub-top"), { y: 0 }, { y: -22, duration: 1.6 }, 3.2)
    .fromTo(q(".page-hub-core"), { y: 0 }, { y: -9, duration: 1.4 }, 3.5)
    .fromTo(q(".page-hub .precision-cell"), { opacity: .15 }, { opacity: 1, duration: .5, stagger: .06 }, 3.6)
    .fromTo(q(".page-hub-out-packet"), { opacity: 0, motionPath: { path: outputRoute, start: 0, end: 0 } }, { opacity: 1, motionPath: { path: outputRoute, start: 0, end: 1 }, duration: 1.1, ease: "none" }, 6.2)
    .to(q(".page-hub-out-packet"), { opacity: 0, duration: .2 }, 7.3)
    .fromTo(q(".page-hub-sheet"), { x: 0, y: 0 }, { x: (i) => i * 7, y: (i) => i * -4 - 8, duration: .9, stagger: .12 }, 6.9)
    .fromTo(q(".page-hub-check"), { opacity: 0, scale: .7, transformOrigin: "center" }, { opacity: 1, scale: 1, duration: .45 }, 7.6)
    .to(q(".page-hub-module, .page-hub-top, .page-hub-core, .page-hub-sheet"), { x: 0, y: 0, duration: 1.3 }, 9.2)
    .to(q(".page-hub-module-glow, .page-hub-check"), { opacity: 0, duration: .6 }, 9.3)
    .to(q(".page-hub .precision-cell"), { opacity: .15, duration: .6 }, 9.3)
    .set({}, {}, 10.6);
  return tl;
}

function Hub({ active }) {
  return <g className="page-hub" transform="translate(320 276)">
    <g fill="none" stroke="var(--scene-grid)" strokeWidth=".65">
      <polygon points={polygon([[-225, -225, -8], [225, -225, -8], [225, 225, -8], [-225, 225, -8]])} strokeDasharray="2 5" />
      {[-150, -75, 75, 150].map(n => <g key={n} opacity=".7"><polyline points={polygon([[n, -205, -8], [n, 205, -8]])} /><polyline points={polygon([[-205, n, -8], [205, n, -8]])} /></g>)}
    </g>
    <g fill="none" stroke="var(--scene-route)" strokeWidth=".85" strokeDasharray="2 4">{hubRoutes.map(d => <path key={d} d={d} />)}<path d={outputRoute} /></g>
    {modules.map(({ label, at: [x, y], tone }, index) => {
      const [sx, sy] = project(x, y, 0);
      return <g key={label} transform={`translate(${sx} ${sy})`}>
        <g className="page-hub-module">
          <Plate size={22} z={26} depth={26} tone={tone} />
          <polygon className="page-hub-module-glow" points={polygon([[-12, -12, 26], [12, -12, 26], [12, 12, 26], [-12, 12, 26]])} fill="var(--scene-accent)" opacity="0" />
          <path d={pathOf([[-12, -4, 26], [10, -4, 26]]) + pathOf([[-12, 4, 26], [4, 4, 26]])} stroke="var(--scene-ink-soft)" strokeWidth=".7" fill="none" />
          <path d="M0 -60V-50" stroke="var(--scene-route)" strokeWidth=".8" />
          <text className={`page-scene__label${active === 0 ? " is-active" : ""}`} x="0" y="-66" textAnchor="middle"><tspan className="page-scene__index">0{index + 1} </tspan>{label}</text>
        </g>
      </g>;
    })}
    {hubRoutes.map((_, route) => <g key={route} className="page-hub-packet" data-route={route} opacity="0"><path d="M-6 0L0 -3.5L6 0L0 3.5Z" fill={modules[route].tone === "violet" ? "#cf8fe2" : modules[route].tone === "blue" ? "#6fb0e2" : "#43d570"} /></g>)}
    <Plate size={64} z={-2} depth={6} tone="white" />
    <Plate size={52} z={14} depth={9} etched />
    <g className="page-hub-core"><Plate size={24} z={52} depth={30} tone="green" />
      <polyline points={polygon([[-8, 2, 53], [-1, 9, 53], [11, -8, 53]])} fill="none" stroke="#3f8d58" strokeWidth="1.6" /></g>
    <g className="page-hub-top"><Plate size={52} z={84} depth={3} tone="glass" />
      {[[-52, -52], [52, -52], [52, 52], [-52, 52]].map(([x, y]) => <polyline key={`${x}${y}`} points={polygon([[x, y, 14], [x, y, 84]])} fill="none" stroke="var(--scene-route)" strokeWidth=".6" strokeDasharray="2 4" />)}
    </g>
    <g transform={`translate(${project(176, 0)[0]} ${project(176, 0)[1]})`}>
      {[0, 1, 2].map(i => <g key={i} className="page-hub-sheet"><Plate w={34} h={24} z={4} depth={4} tone={i === 2 ? "green" : "white"} />
        {i === 2 && <path d={pathOf([[-24, -10, 4], [20, -10, 4]]) + pathOf([[-24, 0, 4], [12, 0, 4]]) + pathOf([[-24, 10, 4], [16, 10, 4]])} stroke="#6fae80" strokeWidth=".9" fill="none" />}</g>)}
      <g className="page-hub-check" transform="translate(44 -34)" opacity="0"><circle r="11" fill="#5ae27d" stroke="#69bb80" /><path d="M-5 0L-1 4L6 -5" fill="none" stroke="#2f7948" strokeWidth="1.4" /></g>
      <text className={`page-scene__label${active === 2 ? " is-active" : ""}`} x="18" y="52">ONE ROADMAP</text>
    </g>
    <g className="page-hub-out-packet" opacity="0"><path d="M-6 0L0 -3.5L6 0L0 3.5Z" fill="#43d570" /></g>
    <path d="M0 108V150" stroke="var(--scene-route)" strokeWidth=".8" strokeDasharray="2 4" />
    <g transform="translate(-74 150)" className={`precision-tag${active === 1 ? " precision-tag--active" : ""}`}><rect width="148" height="25" /><text x="74" y="17" textAnchor="middle">ONE DELIVERY TEAM</text></g>
  </g>;
}

/* ------------------------------------------------------------------- about */

const stackSteps = [{ label: "The demo", time: 0 }, { label: "What it takes", time: 2.6 }, { label: "Running in production", time: 6 }];
const layers = ["RETRIEVAL QUALITY", "EVALUATIONS", "TOOL DESIGN", "FAILURE MODES", "AUDIT TRAILS", "ESCALATION PATHS"];
const layerTones = ["white", "green", "violet", "white", "green", "violet"];

// Layers are rendered bottom-first, so the top layer is last in the DOM.
const collapsed = (i, el) => -(Number(el.dataset.depth) + 1) * 12;
const topFirst = { each: .22, from: "end" };

function buildStack(root) {
  const q = s => root.querySelectorAll(s);
  const tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "power2.inOut" } });
  tl.fromTo(q(".page-stack-demo"), { y: 0 }, { y: -14, duration: 1.4 }, .2)
    .fromTo(q(".page-stack-demo-glow"), { opacity: 0 }, { opacity: 1, duration: .8 }, .5)
    .fromTo(q(".page-stack-layer"), { y: collapsed, opacity: .38 }, { y: 0, opacity: 1, duration: 1.3, stagger: topFirst }, 2.6)
    .fromTo(q(".page-stack-lead"), { strokeDashoffset: 40 }, { strokeDashoffset: 0, duration: .6, stagger: topFirst }, 3.1)
    .fromTo(q(".page-stack-name"), { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: .5, stagger: topFirst }, 3.2)
    .fromTo(q(".page-stack-scan"), { y: -12, opacity: 0 }, { y: 184, opacity: .7, duration: .95, ease: "none" }, 6)
    .to(q(".page-stack-scan"), { opacity: 0, duration: .12 }, 6.95)
    .fromTo(q(".page-stack-tick"), { opacity: 0, scale: .6, transformOrigin: "center" }, { opacity: 1, scale: 1, duration: .25, stagger: { each: .15, from: "end" } }, 6.08)
    .to(q(".page-stack-demo"), { y: 0, duration: 1.2 }, 9.2)
    .to(q(".page-stack-demo-glow, .page-stack-tick, .page-stack-name"), { opacity: 0, duration: .6 }, 9.3)
    .to(q(".page-stack-layer"), { y: collapsed, opacity: .38, duration: 1.2 }, 9.3)
    .to(q(".page-stack-lead"), { strokeDashoffset: 40, duration: .6 }, 9.3)
    .set({}, {}, 10.6);
  return tl;
}

function Stack({ active }) {
  const size = 78;
  const right = project(size, -size)[0];
  return <g className="page-stack" transform="translate(250 124)">
    {layers.map((label, index) => ({ label, index })).reverse().map(({ label, index }) => {
      const z = -96 - index * 34;
      return <g key={label} className="page-stack-layer" data-depth={index}>
        <Plate size={size} z={z} depth={7} tone={layerTones[index]} />
        <path className="page-stack-lead" d={`M${right + 6} ${-z}H${right + 44}`} stroke="var(--scene-route)" strokeWidth=".8" strokeDasharray="40" />
        <circle cx={right} cy={-z} r="2.2" fill="var(--scene-ink-soft)" />
        <text className="page-scene__label page-stack-name" x={right + 62} y={-z + 4}>{label}</text>
        <g className="page-stack-tick" transform={`translate(${right + 44} ${-z})`} opacity="0"><circle r="6.5" fill="var(--scene-accent)" /><path d="M-3 0L-1 2.4L3.4 -2.6" fill="none" stroke="#2f7948" strokeWidth="1.2" /></g>
      </g>;
    })}
    <g className="page-stack-scan"><polygon points={polygon([[-size - 6, -size - 6, -96], [size + 6, -size - 6, -96], [size + 6, size + 6, -96], [-size - 6, size + 6, -96]])} fill="#69e99126" stroke="#69d38a" strokeWidth=".8" /></g>
    <polygon points={polygon([[-100, -100, -56], [100, -100, -56], [100, 100, -56], [-100, 100, -56]])} fill="#ffffff2e" stroke="var(--scene-route)" strokeWidth=".8" strokeDasharray="3 5" />
    <g className="page-stack-demo">
      <Plate size={size} z={-8} depth={3} tone="glass" />
      <polygon className="page-stack-demo-glow" points={polygon([[-46, -46, -8], [46, -46, -8], [46, 46, -8], [-46, 46, -8]])} fill="var(--scene-accent)" opacity="0" />
      <path d={pathOf([[-34, -20, -8], [30, -20, -8]]) + pathOf([[-34, 0, -8], [16, 0, -8]]) + pathOf([[-34, 20, -8], [24, 20, -8]])} stroke="#8fc7a0" strokeWidth=".9" fill="none" />
      <path d={`M${right + 6} 8H${right + 44}`} stroke="var(--scene-route)" strokeWidth=".8" />
      <circle cx={right} cy={8} r="2.2" fill="var(--scene-ink-soft)" />
      <text className={`page-scene__label${active === 0 ? " is-active" : ""}`} x={right + 62} y={12}>THE DEMO</text>
    </g>
    <g className="page-stack-key">
      <path d={`M${right + 44} 96V${96 + 34 * (layers.length - 1)}`} stroke="var(--scene-route)" strokeWidth=".8" strokeDasharray="2 3" />
      <path d={`M${project(100, -100)[0]} 56H${right + 44}V96`} fill="none" stroke="var(--scene-route)" strokeWidth=".8" strokeDasharray="2 3" />
      <text className={`page-scene__label ${active === 0 ? "page-scene__label--muted" : "is-active"}`} x={right + 62} y={60}>WHAT HAS TO WORK</text>
    </g>
  </g>;
}

/* ----------------------------------------------------------------- contact */

const routeSteps = [{ label: "You send the problem", time: 0 }, { label: "We reply", time: 2.4 }, { label: "Scoping call", time: 4.8 }, { label: "Written scope", time: 7.2 }];
const stops = [
  { at: [0, 180, 0], tone: "white", title: "01 / YOUR EMAIL", note: "A paragraph is enough" },
  { at: [0, 50, 22], tone: "blue", title: "02 / OUR REPLY", note: "Within one business day" },
  { at: [0, -80, 44], tone: "white", title: "03 / 30-MINUTE CALL", note: "No slides" },
  { at: [0, -210, 66], tone: "green", title: "04 / WRITTEN SCOPE", note: "Fixed scope, agreed metric" },
];
const journey = pathOf([[0, 180, 0], [0, 115, 0], [0, 115, 22], [0, 50, 22], [0, -15, 22], [0, -15, 44], [0, -80, 44], [0, -145, 44], [0, -145, 66], [0, -210, 66]]);

function buildRoute(root) {
  const q = s => root.querySelectorAll(s);
  const stopsEl = q(".page-route-stop"), glows = q(".page-route-glow"), packet = q(".page-route-packet");
  const tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "power2.inOut" } });
  tl.set(packet, { motionPath: { path: journey, start: 0, end: 0 } }, 0)
    .fromTo(packet, { opacity: 0 }, { opacity: 1, duration: .3 }, .3);
  [0, 2.4, 4.8, 7.2].forEach((at, index) => {
    tl.fromTo(stopsEl[index], { y: 0 }, { y: -8, duration: .7 }, at)
      .fromTo(glows[index], { opacity: 0 }, { opacity: 1, duration: .6 }, at + .1);
    if (index < 3) tl.to(packet, { motionPath: { path: journey, start: index / 3, end: (index + 1) / 3 }, duration: 1.2, ease: "power1.inOut" }, at + 1.2);
  });
  tl.fromTo(q(".page-route-flap"), { opacity: 1 }, { opacity: .25, duration: .5 }, 1)
    .fromTo(q(".page-route-reply"), { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: .4, stagger: .15 }, 2.7)
    .fromTo(q(".page-route-hand"), { rotation: 0, svgOrigin: "0 0" }, { rotation: 300, svgOrigin: "0 0", duration: 2, ease: "none" }, 4.9)
    .fromTo(q(".page-route-sheet"), { y: 0 }, { y: (i) => -6 - i * 6, duration: .7, stagger: .12 }, 7.4)
    .fromTo(q(".page-route-check"), { opacity: 0, scale: .7, transformOrigin: "center" }, { opacity: 1, scale: 1, duration: .45 }, 8.1)
    .to(packet, { opacity: 0, duration: .3 }, 8)
    .to(stopsEl, { y: 0, duration: 1.1 }, 9.3)
    .to(q(".page-route-sheet"), { y: 0, duration: 1.1 }, 9.3)
    .to(q(".page-route-glow, .page-route-check"), { opacity: 0, duration: .6 }, 9.3)
    .to(q(".page-route-flap"), { opacity: 1, duration: .5 }, 9.3)
    .set({}, {}, 10.6);
  return tl;
}

function StopArt({ index, z }) {
  if (index === 0) return <g>
    <polygon points={polygon([[-24, -18, z], [24, -18, z], [24, 18, z], [-24, 18, z]])} fill="#fff" stroke="var(--scene-stroke)" strokeWidth=".8" />
    <polyline className="page-route-flap" points={polygon([[-24, -18, z], [0, 2, z], [24, -18, z]])} fill="none" stroke="var(--scene-stroke)" strokeWidth=".8" />
  </g>;
  if (index === 1) return <g>
    <polygon points={polygon([[-8, -26, z], [-8, 26, z], [-8, 26, z + 34], [-8, -26, z + 34]])} fill="#fff" stroke="var(--scene-stroke)" strokeWidth=".8" />
    {[0, 1, 2].map(i => <path key={i} className="page-route-reply" d={pathOf([[-8, -18, z + 26 - i * 8], [-8, 18 - i * 10, z + 26 - i * 8]])} stroke="#7fb1d6" strokeWidth="1.1" fill="none" />)}
  </g>;
  if (index === 2) {
    const [cx, cy] = project(0, 0, z);
    return <g transform={`translate(${cx} ${cy})`}>
      <g transform="matrix(.866 .5 -.866 .5 0 0)">
        <circle r="26" fill="#fff" stroke="var(--scene-stroke)" strokeWidth=".9" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => <path key={i} d="M0 -22V-19" stroke="var(--scene-ink-soft)" strokeWidth="1" transform={`rotate(${i * 30})`} />)}
        <path className="page-route-hand" d="M0 0V-17" stroke="#3a6b4b" strokeWidth="1.6" strokeLinecap="round" />
        <circle r="2" fill="#3a6b4b" />
      </g>
    </g>;
  }
  return <g>
    {[0, 1, 2].map(i => <g key={i} className="page-route-sheet"><Plate w={22} h={30} z={z + 3} depth={3} tone={i === 2 ? "green" : "white"} />
      {i === 2 && <path d={pathOf([[-14, -16, z + 3], [12, -16, z + 3]]) + pathOf([[-14, -4, z + 3], [6, -4, z + 3]]) + pathOf([[-14, 8, z + 3], [10, 8, z + 3]])} stroke="#6fae80" strokeWidth=".9" fill="none" />}</g>)}
    <g className="page-route-check" transform={`translate(${project(0, 0, z)[0] + 30} ${project(0, 0, z)[1] - 42})`} opacity="0"><circle r="11" fill="#5ae27d" stroke="#69bb80" /><path d="M-5 0L-1 4L6 -5" fill="none" stroke="#2f7948" strokeWidth="1.4" /></g>
  </g>;
}

function Route({ active }) {
  return <g className="page-route" transform="translate(282 334)">
    <g fill="none" stroke="var(--scene-grid)" strokeWidth=".65" opacity=".8">
      {[-60, 60].map(x => <polyline key={x} points={polygon([[x, 250, 0], [x, -270, 0]])} strokeDasharray="2 5" />)}
      {[240, 110, -20, -150].map(y => <polyline key={y} points={polygon([[-90, y, 0], [90, y, 0]])} strokeDasharray="2 5" />)}
    </g>
    <path d={journey} fill="none" stroke="var(--scene-route)" strokeWidth=".9" strokeDasharray="2 4" />
    {stops.map(({ at: [x, y, z], tone, title, note }, index) => {
      const [sx, sy] = project(x, y, z);
      const [rx] = project(x + 46, y - 46, z);
      const [ox, oy] = project(x, y);
      const labelAbove = index === 3;
      return <g key={title} className={`page-route-stop${index === active ? " is-active" : ""}`}>
        {z > 0 && <polyline points={polygon([[46, y + 46, 0], [46, y + 46, z - 8]])} fill="none" stroke="var(--scene-grid)" strokeWidth=".7" strokeDasharray="2 4" />}
        <g transform={`translate(${ox} ${oy})`}><Plate w={46} h={46} z={z} depth={10} tone={tone} /></g>
        <polygon className="page-route-glow" points={polygon([[x - 40, y - 40, z], [x + 40, y - 40, z], [x + 40, y + 40, z], [x - 40, y + 40, z]])} fill="var(--scene-accent)" opacity="0" />
        <g transform={`translate(${ox} ${oy})`}><StopArt index={index} z={z} /></g>
        {labelAbove
          ? <g transform={`translate(${sx} ${sy - 82})`}><text className="page-scene__label" textAnchor="middle">{title}</text><text className="page-scene__note" y="15" textAnchor="middle">{note}</text></g>
          : <g transform={`translate(${rx + 16} ${sy + 24})`}><text className="page-scene__label">{title}</text><text className="page-scene__note" y="15">{note}</text></g>}
      </g>;
    })}
    <g className="page-route-packet" opacity="0"><path d="M-7 0L0 -4L7 0L0 4Z" fill="#4c9bd6" /><path d="M-7 0L0 -4L7 0" fill="none" stroke="#fff" strokeWidth=".8" /></g>
  </g>;
}

/* ------------------------------------------------------------------ shared */

const scenes = {
  services: { Art: Hub, build: buildHub, steps: hubSteps, title: "Six practice areas feeding one delivery team", description: "Six capability modules connect to a shared delivery core, which produces one roadmap. Illustrative only." },
  about: { Art: Stack, build: buildStack, steps: stackSteps, title: "The system underneath a demo", description: "A thin demo layer sits above six layers that make AI dependable: retrieval quality, evaluations, tool design, failure modes, audit trails and escalation paths. Illustrative only." },
  contact: { Art: Route, build: buildRoute, steps: routeSteps, title: "Four steps from first email to a written scope", description: "Your email, our reply within one business day, a 30-minute scoping call, then a written scope and estimate." },
};

export default function PageScene({ kind }) {
  const root = useRef(null);
  const id = useId().replaceAll(":", "");
  const { Art, build, steps, title, description } = scenes[kind];
  const motion = useDiagramMotion(root, build, steps);
  return <div ref={root} className={`page-scene page-scene--${kind}`}>
    <svg viewBox="0 0 640 520" role="img" aria-labelledby={`${id}-title ${id}-description`}>
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-description`}>{description}</desc>
      <Art active={motion.active} />
    </svg>
    <SceneFooter caption={`ILLUSTRATIVE ${kind === "contact" ? "PROCESS" : "SYSTEM"}`} labels={steps.map(step => step.label)} motion={motion} name={kind} />
  </div>;
}
