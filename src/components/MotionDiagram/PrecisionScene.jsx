import { useId, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import useDiagramMotion from "./useDiagramMotion";
import { Plate, SceneFooter } from "./IsoParts";
import { polygon } from "./iso";

gsap.registerPlugin(MotionPathPlugin);

const phases = [{ label: "Connect the context", time: 0 }, { label: "Coordinate the work", time: 3 }, { label: "Keep people in control", time: 6 }];
const routes = [
  "M85 426L236 513Q247 519 258 513L376 445",
  "M152 276L236 325Q247 331 258 325L302 300",
  "M467 313L612 229Q624 222 624 210V158",
  "M624 210L705 257Q715 263 715 275V405Q715 417 704 423L589 489",
  "M381 440L474 494Q484 500 494 494L566 452",
];

function build(root) {
  const q = s => root.querySelectorAll(s);
  const tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "sine.inOut" } });
  // Ambient traffic has its own stagger. Each finite stream finishes at the
  // master boundary, so pause, seek and route cleanup govern the whole scene.
  q(".precision-packet").forEach((packet, index) => {
    const route = Number(packet.dataset.route);
    const start = (index % 3) * 0.48 + route * 0.2;
    for (let cycle = 0; cycle < 3; cycle++) {
      const at = start + cycle * 3.1;
      tl.fromTo(packet, { opacity: 0 }, { opacity: 0.9, duration: 0.25, immediateRender: false }, at)
        .fromTo(packet, { motionPath: { path: routes[route], start: 0, end: 0 } }, { motionPath: { path: routes[route], start: 0, end: 1 }, duration: 2.45, ease: "none", immediateRender: false }, at)
        .to(packet, { opacity: 0, duration: 0.25 }, at + 2.1);
    }
  });
  tl.fromTo(q(".precision-tier--top"), { y: 0 }, { y: -23, duration: 2 }, 0)
    .fromTo(q(".precision-tier--middle"), { y: 0 }, { y: -8, duration: 2 }, 0.3)
    .fromTo(q(".precision-wing--left"), { x: 0, y: 0 }, { x: -22, y: -12, duration: 1.8 }, 1.5)
    .fromTo(q(".precision-wing--right"), { x: 0, y: 0 }, { x: 22, y: -12, duration: 1.8 }, 1.8)
    .fromTo(q(".precision-core"), { y: 0 }, { y: -10, duration: 1.6 }, 2.3)
    .fromTo(q(".precision-cell"), { opacity: 0.2 }, { opacity: 1, duration: 0.6, stagger: 0.07 }, 2.1)
    .fromTo(q(".precision-scan"), { y: 24, opacity: 0 }, { y: -67, opacity: 0.65, duration: 2.1 }, 2.5)
    .to(q(".precision-scan"), { opacity: 0, duration: 0.5 }, 4.3)
    .fromTo(q(".precision-tool-sheet"), { x: 0, y: 0 }, { x: 12, y: -7, duration: 1.1, stagger: 0.12 }, 3.7)
    .fromTo(q(".precision-tool-state"), { opacity: 0.2 }, { opacity: 1, duration: 0.6 }, 4.6)
    .fromTo(q(".precision-output-line"), { scaleX: 0.2, opacity: 0.25, transformOrigin: "left center" }, { scaleX: 1, opacity: 1, duration: 0.75, stagger: 0.12 }, 5.3)
    .fromTo(q(".precision-check"), { opacity: 0, scale: 0.75, transformOrigin: "center" }, { opacity: 1, scale: 1, duration: 0.5 }, 6.4)
    .fromTo(q(".precision-orbit-mark"), { y: 0 }, { y: -7, duration: 2.6, stagger: 0.15, yoyo: true, repeat: 1 }, 1)
    .to(q(".precision-tier--top, .precision-tier--middle, .precision-core"), { y: 0, duration: 1.8 }, 7.8)
    .to(q(".precision-wing--left, .precision-wing--right, .precision-tool-sheet"), { x: 0, y: 0, duration: 1.8 }, 7.8)
    .to(q(".precision-cell, .precision-tool-state"), { opacity: 0.2, duration: 0.8 }, 9)
    .to(q(".precision-output-line"), { opacity: 0.25, scaleX: 0.2, duration: 0.75 }, 9.1)
    .to(q(".precision-check"), { opacity: 0, scale: 0.75, duration: 0.5 }, 9.1);
  return tl;
}

function Core({ kind }) {
  return <g transform="translate(382 358)">
    <g opacity=".42" fill="none" stroke="#86b397" strokeDasharray="2 5"><polygon points={polygon([[-96,-96,-25],[96,-96,-25],[96,96,-25],[-96,96,-25]])} /><path d="M0 -227V135" /></g>
    <Plate size={99} z={-11} depth={6} tone="white" etched />
    <Plate size={85} z={5} depth={8} />
    <g className="precision-tier--middle"><Plate size={75} z={45} depth={8} tone={kind === "knowledge" ? "violet" : "white"} etched /></g>
    <g className="precision-core"><Plate size={43} z={81} depth={36} tone={kind === "knowledge" ? "violet" : "green"} etched />
      <polygon points={polygon([[-18,-18,84],[18,-18,84],[18,18,84],[-18,18,84]])} fill="white" stroke="#74b78a" />
      <polyline points={polygon([[-8,2,85],[-1,9,85],[11,-8,85]])} fill="none" stroke="#4c9865" strokeWidth="2" />
    </g>
    <g className="precision-tier--top"><Plate size={75} z={120} depth={3} tone="glass" etched /></g>
    <g className="precision-wing--left"><polygon points={polygon([[-85,-70,115],[-85,70,115],[-85,70,25],[-85,-70,25]])} fill="#e0f9e966" stroke="#99caaa" strokeWidth=".7" />
      {[0,1,2,3,4].map(i=><polyline key={i} points={polygon([[-85,-48+i*22,99],[-85,-48+i*22,40]])} fill="none" stroke="#b3d7bd" strokeWidth=".6" />)}
    </g>
    <g className="precision-wing--right"><polygon points={polygon([[-70,-85,115],[70,-85,115],[70,-85,25],[-70,-85,25]])} fill="#f0d9f566" stroke="#c6a5d0" strokeWidth=".7" />
      {[0,1,2,3,4].map(i=><polyline key={i} points={polygon([[-48+i*22,-85,99],[-48+i*22,-85,40]])} fill="none" stroke="#d9b8e1" strokeWidth=".6" />)}
    </g>
    <g className="precision-scan"><polygon points={polygon([[-86,-86,50],[86,-86,50],[86,86,50],[-86,86,50]])} fill="#69e99133" stroke="#69d38a" strokeWidth=".8" /></g>
    <g stroke="#8fbea0" fill="none" strokeWidth=".65">{[-70,70].map(x=>[-70,70].map(y=><polyline key={`${x}${y}`} points={polygon([[x,y,-10],[x,y,130]])} strokeDasharray="2 5" />))}</g>
  </g>;
}

function SourceCubes() {
  return <g>
    {[[114,406,29],[176,442,25],[204,368,31]].map(([x,y,size],index)=><g key={x} transform={`translate(${x} ${y})`}>
      <Plate size={size} z={26} depth={42} tone={index === 2 ? "green" : "white"} />
      <polygon points={polygon([[-size-5,-size-5,34],[size+5,-size-5,34],[size+5,size+5,34],[-size-5,size+5,34]])} fill="none" stroke="#9eccad" strokeDasharray="3 4" />
      <g transform="translate(0 -74)"><circle r="10" fill={index === 1 ? "#ecd6f4" : "#e2f7e6"} stroke={index === 1 ? "#cea6db" : "#aad4b6"} /><path d={index === 0 ? "M-4 -4H4V4H-4ZM-2 -1H2M-2 2H2" : index === 1 ? "M-4 0H4M0 -4V4" : "M-4 1L-1 4L5 -4"} fill="none" stroke="#518663" strokeWidth="1" /></g>
    </g>)}
    <g transform="translate(125 249)">{[16,8,0].map((offset,i)=><g key={offset} transform={`translate(${offset} ${-offset})`}><path d="M-40 0L15 -32L49 -12L-6 20Z" fill={i===2?"#e9faee":"white"} stroke="#9bc7a9" strokeWidth=".8" /><path d="M-23 -2L12 -23M-15 3L20 -18M-7 8L16 -6" stroke="#a3c9ad" strokeWidth=".7" /></g>)}</g>
  </g>;
}

function ToolCluster() {
  return <g transform="translate(617 165)">
    {[[-24,14],[-12,7],[0,0]].map(([x,y],i)=><g key={x} transform={`translate(${x} ${y})`}><g className="precision-tool-sheet">
      <path d="M-30 1L25 -31Q32 -35 32 -26V10Q32 17 26 21L-30 53Q-37 57 -37 49V14Q-37 5 -30 1Z" fill={i===1?"#e8b2f2":"#faf5fc"} stroke="#bda0c7" strokeWidth=".9" />
      <path d="M-23 11L19 -13M-23 22L9 4M-23 33L19 9" stroke="#d6b4df" strokeWidth=".8" />
      {i===2&&<g className="precision-tool-state"><path d="M-22 38L20 14V21L-22 45Z" fill="#dcb2e8" /><path d="M-13 35L-9 38L0 25" fill="none" stroke="#9b63ab" strokeWidth="1.2" /></g>}
    </g></g>)}
  </g>;
}

function ReviewCard() {
  return <g transform="translate(541 456)">
    <path d="M0 0L61 -35L133 7L72 42Z" fill="#fff" stroke="#8dbc9e" />
    <path d="M0 0V14L72 56V42Z" fill="#e2f6e7" stroke="#8dbc9e" /><path d="M72 42L133 7V21L72 56Z" fill="#c1edcb" stroke="#8dbc9e" />
    <g transform="matrix(.866,.5,-.866,.5,60,-22)">
      <rect width="56" height="8" fill="#d4f4db" /><path d="M0 19H63M0 28H49M0 37H57" className="precision-output-line" stroke="#8cbb98" strokeWidth="2" />
    </g>
    <g className="precision-check" transform="translate(126 -3)"><circle r="13" fill="#5ae27d" stroke="#69bb80" /><path d="M-5 0L-1 4L6 -5" fill="none" stroke="#2f7948" strokeWidth="1.4" /></g>
  </g>;
}

function Tag({ x, y, width, children, tone = "green", active = false }) {
  return <g transform={`translate(${x} ${y})`} className={`precision-tag precision-tag--${tone}${active ? " precision-tag--active" : ""}`}><rect width={width} height="25" /><text x={width/2} y="17" textAnchor="middle">{children}</text></g>;
}

export default function PrecisionScene({ kind = "system", compact = false }) {
  const root = useRef(null);
  const id = useId().replaceAll(":", "");
  const motion = useDiagramMotion(root, build, phases);
  return <div ref={root} className={`precision-scene ${compact ? "precision-scene--compact" : ""}`} data-kind={kind}>
    <svg viewBox="0 0 760 600" role="img" aria-labelledby={`${id}-title ${id}-description`}>
      <title id={`${id}-title`}>{kind === "knowledge" ? "A knowledge system built around your sources" : "Your business, connected to intelligence"}</title>
      <desc id={`${id}-description`}>Document and data sources send requests through a layered intelligence system. Connected tools carry out the work and prepare the result for human review. This is an illustrative architecture.</desc>
      <defs><pattern id={`${id}-dots`} width="11" height="11" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".5" fill="#9ac3a6" /></pattern></defs>
      <path d="M45 409L385 213L719 406L380 602Z" fill={`url(#${id}-dots)`} opacity=".25" />
      <g fill="none" stroke="#d6e5da" strokeWidth=".65"><path d="M76 394L381 218L686 394L381 570Z" /><path d="M129 425L434 249M183 456L488 280M238 487L541 311M291 518L595 342M131 362L437 539M186 330L491 507M241 299L546 476M295 268L601 444" opacity=".65" /></g>
      <g fill="none" stroke="#92c3a2" strokeWidth=".8" strokeDasharray="2 4">{routes.map(d=><path key={d} d={d} />)}</g>
      {routes.flatMap((_,route)=>[0,1,2].map(index=><g className="precision-packet" data-route={route} key={`${route}-${index}`} opacity="0"><path d="M-6 0L0 -3.5L6 0L0 3.5Z" fill={route===2||route===3?"#dda3eb":"#52dc79"} /><path d="M-11 3L-5 -.5L1 3L-5 6.5Z" fill={route===2||route===3?"#f0d5f7":"#bcf1ca"} opacity=".5" /></g>))}
      <SourceCubes />
      <Core kind={kind} />
      <ToolCluster />
      <ReviewCard />
      <Tag x={301} y={63} width={163} active={motion.active === 1}>{kind === "knowledge" ? "KNOWLEDGE ENGINE" : "FOXTHETA INTELLIGENCE"}</Tag>
      <path d="M382 88V139" stroke="#8ebe9e" strokeWidth=".8" strokeDasharray="2 4" />
      <Tag x={68} y={491} width={139} active={motion.active === 0}>YOUR DATA + CONTEXT</Tag>
      <Tag x={84} y={181} width={124} tone="white" active={motion.active === 0}>DOCUMENT SOURCES</Tag>
      <Tag x={548} y={89} width={139} tone="violet" active={motion.active === 1}>CONNECTED TOOLS</Tag>
      <Tag x={539} y={542} width={138} active={motion.active === 2}>HUMAN OVERSIGHT</Tag>
      <Tag x={423} y={224} width={95} tone="white">{motion.active === 0 ? "CONTEXT READY" : motion.active === 1 ? "TOOLS ACTIVE" : "REVIEW READY"}</Tag>
      <g className="precision-registration" fill="none" strokeWidth=".8">{[[260,113],[488,119],[49,328],[481,542],[713,331]].map(([x,y],i)=><g key={x} transform={`translate(${x} ${y})`}><g className="precision-orbit-mark" stroke={i%2?"#d6a7e2":"#9acdab"}><path d="M-9 0L0 -5L9 0L0 5Z" fill={i%2?"#efd2f6":"#e2f7e8"} /><path d="M-9 -7L0 -12L9 -7L0 -2Z" /></g></g>)}</g>
    </svg>
    <SceneFooter caption="ILLUSTRATIVE SYSTEM" labels={phases.map(phase => phase.label)} motion={motion} name="architecture" />
  </div>;
}
