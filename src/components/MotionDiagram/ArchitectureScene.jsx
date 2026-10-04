import { useId, useRef } from "react";
import gsap from "gsap";
import MotionControls from "./MotionControls";
import useDiagramMotion, { signal } from "./useDiagramMotion";
import "./MotionDiagram.css";

const steps = [
  { label: "Connect", time: 0 },
  { label: "Reason", time: 2.1 },
  { label: "Review", time: 5.2 },
];

function buildScene(root) {
  const q = selector => root.querySelectorAll(selector);
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.8, defaults: { ease: "power2.inOut" } });
  tl.set(q(".scene-signal"), { opacity: 0 }, 0)
    .set(q(".scene-approved"), { opacity: 0 }, 0)
    .set(q(".scene-waiting"), { opacity: 1 }, 0)
    .set(q(".scene-result-content"), { opacity: 0.22 }, 0)
    .fromTo(q(".architecture-layer--upper"), { y: 0 }, { y: -12, duration: 1.5 }, 0.2)
    .fromTo(q(".architecture-layer--middle"), { y: 0 }, { y: -5, duration: 1.5 }, 0.35)
    .fromTo(q(".scene-source-highlight"), { opacity: 0.12 }, { opacity: 1, duration: 0.8, stagger: 0.15 }, 0.3);
  signal(tl, root, ".scene-signal--input", 0.7, 1.5);
  tl.fromTo(q(".scene-core-highlight"), { opacity: 0.18 }, { opacity: 1, duration: 0.8 }, 2.1)
    .fromTo(q(".architecture-layer--lid"), { y: 0 }, { y: -18, duration: 1.2 }, 2.1);
  signal(tl, root, ".scene-signal--tool", 3.1, 1.15);
  tl.fromTo(q(".scene-tool-highlight"), { opacity: 0.15 }, { opacity: 1, duration: 0.5 }, 4.0);
  signal(tl, root, ".scene-signal--output", 4.35, 1.2);
  tl.to(q(".scene-result-content"), { opacity: 1, duration: 0.7 }, 5.2)
    .to(q(".scene-waiting"), { opacity: 0, duration: 0.25 }, 5.4)
    .to(q(".scene-approved"), { opacity: 1, duration: 0.4 }, 5.55)
    .to(q(".architecture-layer--lid, .architecture-layer--upper, .architecture-layer--middle"), { y: 0, duration: 1.2 }, 6.7)
    .to(q(".scene-source-highlight, .scene-core-highlight, .scene-tool-highlight"), { opacity: 0.18, duration: 0.8 }, 7.2)
    .to(q(".scene-result-content"), { opacity: 0.22, duration: 0.7 }, 8.0)
    .to(q(".scene-approved"), { opacity: 0, duration: 0.3 }, 8.3)
    .to(q(".scene-waiting"), { opacity: 1, duration: 0.3 }, 8.4);
  return tl;
}

function DataSource({ x, y }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M0 0L48 -28L96 0V49L48 77L0 49Z" fill="#f4fff7" stroke="#8cb69a" />
    <path d="M0 0L48 28L96 0M48 28V77" fill="none" stroke="#8cb69a" />
    <path d="M0 0L48 -28L96 0L48 28Z" fill="#c8f5d5" />
    <path className="scene-source-highlight" d="M0 0L48 -28L96 0L48 28Z" fill="#4de176" />
    <path d="M13 26L35 39M13 36L35 49M61 44L81 32M61 54L81 42" stroke="#73a684" />
    <path d="M34 -5L48 -13L62 -5L48 3Z" fill="none" stroke="#277847" />
  </g>;
}

function Documents({ x, y }) {
  return <g transform={`translate(${x} ${y})`}>
    {[14, 7, 0].map((offset, index) => <g key={offset} transform={`translate(${offset} ${-offset})`}>
      <path d="M0 0L64 -37L104 -14L40 23Z" fill={index === 2 ? "#f2fff4" : "white"} stroke="#8cb69a" />
      <path d="M0 0V7L40 30L104 -7V-14M40 23V30" fill="white" stroke="#8cb69a" />
      {index === 2 && <><path d="M25 -6L65 -29M34 -1L74 -24M43 4L70 -12" stroke="#8cb69a" /><path className="scene-source-highlight" d="M19 -10L59 -33L65 -29L25 -6Z" fill="#50df7a" /></>}
    </g>)}
  </g>;
}

function Engine({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="98" rx="108" ry="57" fill="#f6faf5" />
    <path d="M-100 38V57C-100 89 100 89 100 57V38" fill="#e4f8e8" stroke="#87b996" />
    <ellipse cy="38" rx="100" ry="40" fill="#f2fff4" stroke="#87b996" />
    <path d="M-100 55C-100 89 100 89 100 55V65C100 99 -100 99 -100 65Z" fill="#55df7c" />
    <g className="architecture-layer--middle">
      <path d="M-100 -7V7C-100 41 100 41 100 7V-7" fill="#def9e6" stroke="#87b996" />
      <ellipse cy="-7" rx="100" ry="40" fill="#f1fff5" stroke="#87b996" />
      <path d="M-100 4C-100 38 100 38 100 4V11C100 45 -100 45 -100 11Z" fill="#53df79" />
    </g>
    <g className="architecture-layer--upper">
      <path d="M-100 -52V-38C-100 -4 100 -4 100 -38V-52" fill="#e2fae9" stroke="#87b996" />
      <ellipse cy="-52" rx="100" ry="40" fill="#eefff2" stroke="#87b996" />
      <ellipse className="scene-core-highlight" cy="-52" rx="80" ry="31" fill="#8aeca5" />
      <path d="M-100 -41C-100 -7 100 -7 100 -41V-34C100 0 -100 0 -100 -34Z" fill="#50df77" />
    </g>
    <g className="architecture-layer--lid">
      <path d="M-62 -113L0 -149L62 -113L0 -77Z" fill="#bff3d0" stroke="#71b287" />
      <path d="M-62 -113V-101L0 -65V-77Z" fill="#e4fbeb" stroke="#71b287" />
      <path d="M0 -77L62 -113V-101L0 -65Z" fill="#4ee078" stroke="#71b287" />
      <path d="M-23 -113L0 -126L23 -113L0 -100Z" fill="#43d86f" />
      <path d="M-12 -113L0 -120L12 -113L0 -106Z" fill="none" stroke="#267b43" />
    </g>
    <path d="M0 -180V-153M0 103V127" stroke="#8cb69a" strokeDasharray="3 4" />
  </g>;
}

function Tools({ x, y }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M0 8L66 -30L103 -9L37 29Z" fill="#f8e9fc" stroke="#bd9fc7" />
    <path d="M0 8V45L37 66V29Z" fill="#f7e6fb" stroke="#bd9fc7" />
    <path d="M37 29L103 -9V28L37 66Z" fill="#fff" stroke="#bd9fc7" />
    <path className="scene-tool-highlight" d="M0 8L66 -30L103 -9L37 29Z" fill="#e8a8f4" />
    <path d="M50 33L88 11M50 42L78 26" stroke="#ad8ab9" />
    <path d="M38 2L55 -8L65 -2L48 8Z" fill="none" stroke="#93749c" />
  </g>;
}

function Result({ x, y }) {
  return <g transform={`translate(${x} ${y})`}>
    <rect x="6" y="6" width="141" height="90" fill="#f4faf4" stroke="#b6ccba" />
    <rect width="141" height="90" fill="white" stroke="#91b59b" />
    <path d="M0 27H141" stroke="#d3e4d6" />
    <circle cx="14" cy="14" r="3" fill="#5ddf83" />
    <text x="24" y="18" className="scene-label scene-label--small">HUMAN REVIEW</text>
    <g className="scene-result-content"><path d="M13 42H94M13 51H112M13 60H76" stroke="#8aab93" />
      <rect x="12" y="70" width="74" height="12" fill="#e4f8e8" /><text x="18" y="79" className="scene-micro">READY TO REVIEW</text>
    </g>
    <g className="scene-waiting"><circle cx="135" cy="0" r="11" fill="white" stroke="#b7caba" /><path d="M135 -5V0L138 2" fill="none" stroke="#839c87" /></g>
    <g className="scene-approved"><circle cx="135" cy="0" r="11" fill="#4bdf78" stroke="#43b866" /><path d="M130 0L134 4L141 -4" fill="none" stroke="#185b30" strokeWidth="1.5" /></g>
  </g>;
}

function Connections({ mobile = false }) {
  const paths = mobile ? ["M77 83L77 122L180 181", "M284 100L284 121L180 181", "M180 243L289 307", "M289 307L180 369"] : ["M115 186L115 231L304 340", "M113 401L195 448L304 384", "M344 333L506 240L506 181", "M506 240L565 274L565 415L504 450"];
  return <g fill="none" strokeLinecap="round">
    {paths.map((d, i) => <g key={d}><path d={d} stroke="#a0bfa8" strokeWidth="1" strokeDasharray="3 5" />
      <path d={d} pathLength="100" className={`scene-signal scene-signal--${i < 2 ? "input" : i === 2 ? "tool" : "output"}`} stroke={i === 2 ? "#c781de" : "#35c96b"} strokeWidth="2.5" strokeDasharray="5 95" />
    </g>)}
  </g>;
}

export default function ArchitectureScene() {
  const root = useRef(null);
  const id = useId().replaceAll(":", "");
  const motion = useDiagramMotion(root, buildScene, steps);
  return <div ref={root} className="architecture-scene">
    <div className="architecture-scene__meta"><span><i /> FOXTHETA / SYSTEM DESIGN</span><span>FIG. 01</span></div>
    <svg className="architecture-scene__desktop" viewBox="0 0 640 590" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>Intelligence connected to your business</title>
      <desc id={`${id}-desc`}>Documents and business data feed a knowledge and agent layer. The agent works with connected tools and prepares an output for human review.</desc>
      <defs><pattern id={`${id}-dots`} width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.65" fill="#8bbd99" /></pattern></defs>
      <ellipse cx="326" cy="333" rx="268" ry="219" fill={`url(#${id}-dots)`} opacity=".23" />
      <path d="M54 361L322 206L597 365L330 520Z" fill="none" stroke="#e1eae2" />
      <Connections />
      <Documents x={57} y={168} />
      <DataSource x={66} y={359} />
      <Engine x={321} y={323} />
      <Tools x={460} y={137} />
      <Result x={433} y={431} />
      <g className="scene-label"><text x="60" y="116">YOUR KNOWLEDGE</text><text x="63" y="472">BUSINESS DATA</text><text x="463" y="96">CONNECTED TOOLS</text></g>
      <g transform="translate(249 96)"><rect width="144" height="27" fill="#e6f9eb" stroke="#abd6b8" /><text x="72" y="18" textAnchor="middle" className="scene-label">INTELLIGENCE LAYER</text></g>
      <g className="scene-label scene-label--muted"><text x="281" y="475">YOUR CONTROL</text></g>
      <g fill="#b7ebc6" stroke="#a0d0ac"><path d="M191 71L198 67L205 71L198 75Z" /><path d="M211 505L218 501L225 505L218 509Z" /><path d="M595 322L601 318L607 322L601 326Z" /></g>
      <g fill="#ebc3f4"><path d="M422 218L429 214L436 218L429 222Z" /><path d="M56 276L63 272L70 276L63 280Z" /><path d="M426 547L433 543L440 547L433 551Z" /></g>
    </svg>
    <svg className="architecture-scene__mobile" viewBox="0 0 360 475" role="img" aria-label="Knowledge and data connect to an AI layer, tools, and human review.">
      <Connections mobile />
      <g transform="translate(25 61) scale(.75)"><Documents x={0} y={0} /></g>
      <g transform="translate(247 52) scale(.7)"><DataSource x={0} y={0} /></g>
      <text x="27" y="27" className="scene-label">KNOWLEDGE</text><text x="253" y="27" className="scene-label">YOUR DATA</text>
      <Engine x={180} y={245} scale={0.8} />
      <g transform="translate(275 305) scale(.5)"><Tools x={0} y={0} /></g>
      <text x="258" y="353" className="scene-label">TOOLS</text>
      <Result x={107} y={376} />
      <text x="13" y="262" className="scene-label">AI LAYER</text>
    </svg>
    <MotionControls motion={motion} steps={steps} label="System" />
    <p className="architecture-scene__note">Your knowledge. Useful actions. Human oversight.</p>
  </div>;
}
