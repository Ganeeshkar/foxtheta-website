import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import MotionControls from "./MotionControls";
import useDiagramMotion, { signal } from "./useDiagramMotion";
import "./MotionDiagram.css";
import "./RagScene.css";

const steps = [{ label: "Index", time: 0 }, { label: "Retrieve", time: 2.5 }, { label: "Answer", time: 5.4 }];
const examples = [
  { label: "Supplier onboarding", question: "What do we need to onboard a supplier?", answer: "Complete an operations review and get a signed supplier agreement before onboarding.", source: "Supplier handbook", section: "Section 4.2", excerpt: "Before a new supplier can be onboarded, Operations must complete its review and the supplier agreement must be signed.", tag: "SUPPLIER POLICY" },
  { label: "Invoice approvals", question: "Who reviews an invoice without a purchase order?", answer: "Send the invoice to Finance for manual review before scheduling payment.", source: "Finance playbook", section: "Section 2.1", excerpt: "Invoices without a matching purchase order must be routed to Finance for manual review. Payment is scheduled only after this review.", tag: "FINANCE POLICY" },
];

function buildScene(root) {
  const q = selector => root.querySelectorAll(selector);
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1, defaults: { ease: "power2.inOut" } });
  tl.set(q(".scene-signal"), { opacity: 0 }, 0)
    .set(q(".rag-match"), { opacity: 0.2 }, 0)
    .set(q(".rag-answer__content"), { opacity: 0.12, y: 5 }, 0)
    .set(q(".rag-document-highlight"), { opacity: 0.15 }, 0)
    .fromTo(q(".rag-slice--top"), { y: 0 }, { y: -12, duration: 1.3 }, 0.2)
    .fromTo(q(".rag-slice--middle"), { y: 0 }, { y: -5, duration: 1.3 }, 0.3)
    .to(q(".rag-document-highlight"), { opacity: 1, duration: 0.7 }, 0.5);
  signal(tl, root, ".rag-signal--index", 1, 1.3);
  tl.fromTo(q(".rag-index-highlight"), { opacity: 0.15 }, { opacity: 1, duration: 0.6 }, 2);
  signal(tl, root, ".rag-signal--retrieve", 2.6, 1.3);
  tl.to(q(".rag-match"), { opacity: 1, duration: 0.5, stagger: 0.12 }, 3.6);
  signal(tl, root, ".rag-signal--answer", 4.25, 1.1);
  tl.to(q(".rag-answer__content"), { opacity: 1, y: 0, duration: 0.9 }, 5.4)
    .to(q(".rag-slice--top, .rag-slice--middle"), { y: 0, duration: 1.1 }, 7.6)
    .to(q(".rag-match"), { opacity: 0.2, duration: 0.8 }, 8.1)
    .to(q(".rag-document-highlight, .rag-index-highlight"), { opacity: 0.15, duration: 0.8 }, 8.1)
    .to(q(".rag-answer__content"), { opacity: 0.12, y: 5, duration: 0.6 }, 8.5);
  return tl;
}

function PaperStack({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="15" y="-14" width="78" height="107" fill="#fff" stroke="#b5cbb9" />
    <rect x="7" y="-7" width="78" height="107" fill="#f7fcf6" stroke="#9cbaa4" />
    <path d="M0 0H56L78 22V107H0Z" fill="white" stroke="#88ab93" />
    <path d="M56 0V22H78" fill="#edf7ed" stroke="#88ab93" />
    <path d="M13 35H63M13 44H56M13 72H62M13 81H50M13 90H62" stroke="#b1c7b5" />
    <rect className="rag-document-highlight" x="9" y="51" width="59" height="14" fill="#97e9ad" />
    <path d="M13 58H61" stroke="#4c8b5e" />
    <text x="12" y="24" className="scene-label scene-label--small">DOC / 01</text>
  </g>;
}

function IndexStack({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    {[30, 0, -30].map((offset, index) => <g key={offset} transform={`translate(0 ${offset})`}>
      <g className={index === 2 ? "rag-slice--top" : index === 1 ? "rag-slice--middle" : ""}>
        <path d="M-58 0L0 -33L58 0L0 33Z" fill={index === 2 ? "#f7e9fb" : "#f4fff5"} stroke={index === 2 ? "#c2a1cc" : "#89b795"} />
        <path d="M-58 0V8L0 41L58 8V0M0 33V41" fill={index === 2 ? "#ecc2f4" : "#bbeec9"} stroke={index === 2 ? "#c2a1cc" : "#89b795"} />
        <path className="rag-index-highlight" d="M-34 0L0 -20L34 0L0 20Z" fill={index === 2 ? "#dfa1ed" : "#65df88"} />
        <path d="M-17 0L0 -10L17 0L0 10Z" fill="none" stroke={index === 2 ? "#b281c0" : "#6bb57e"} />
      </g>
    </g>)}
  </g>;
}

function Evidence({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect x="-55" y="-63" width="126" height="132" fill="#fcfdfb" stroke="#cad9ca" strokeDasharray="3 3" />
    {Array.from({ length: 20 }, (_, i) => {
      const selected = [6, 9, 14].includes(i);
      return <g key={i} transform={`translate(${-35 + (i % 4) * 28} ${-42 + Math.floor(i / 4) * 23})`}>
        <path d="M0 0L8 -5L16 0L8 5Z" fill="#eef4ed" stroke="#c4d8c5" />
        {selected && <path className="rag-match" d="M0 0L8 -5L16 0L8 5Z" fill="#51dc7b" stroke="#4cbc6c" />}
      </g>;
    })}
    <g className="rag-match"><rect x="-27" y="83" width="83" height="21" fill="#e5f8e8" stroke="#b5dabe" /><text x="14" y="97" textAnchor="middle" className="scene-label scene-label--small">SOURCE MATCH</text></g>
  </g>;
}

function Wire({ d, name }) {
  return <g fill="none"><path d={d} stroke="#abc5b0" strokeDasharray="3 4" /><path d={d} pathLength="100" stroke="#43c970" strokeWidth="2.5" strokeDasharray="5 95" className={`scene-signal rag-signal--${name}`} /></g>;
}

function RagExample({ example, panelId, tabId }) {
  const root = useRef(null);
  const motion = useDiagramMotion(root, buildScene, steps);
  const [sourceOpen, setSourceOpen] = useState(false);
  const sourceId = useId();
  return <div ref={root} className="rag-example" role="tabpanel" id={panelId} aria-labelledby={tabId}>
    <div className="rag-example__question"><span>YOUR QUESTION</span><p>{example.question}</p><span aria-hidden="true">↵</span></div>
    <div className="rag-example__body">
      <div className="rag-example__canvas">
        <svg className="rag-svg--desktop" viewBox="0 0 650 330" role="img" aria-label="Documents are indexed, relevant evidence is retrieved, and sources ground the answer.">
          <Wire d="M135 163H273" name="index" /><Wire d="M358 163H477" name="retrieve" /><Wire d="M574 163H643" name="answer" />
          <PaperStack x={50} y={105} /><IndexStack x={313} y={158} /><Evidence x={526} y={155} />
          <g className="scene-label"><text x="52" y="54">01 / YOUR CONTENT</text><text x="265" y="54">02 / KNOWLEDGE INDEX</text><text x="478" y="54">03 / RETRIEVAL</text></g>
          <g className="scene-label scene-label--muted"><text x="50" y="278">DOCUMENTS + DATA</text><text x="272" y="278">HYBRID SEARCH</text></g>
        </svg>
        <svg className="rag-svg--mobile" viewBox="0 0 350 360" role="img" aria-label="Content flows through a knowledge index to matching evidence.">
          <Wire d="M106 92H240" name="index" /><Wire d="M263 139V193H183V230" name="retrieve" /><Wire d="M183 283V355" name="answer" />
          <PaperStack x={31} y={57} scale={0.85} /><IndexStack x={268} y={99} scale={0.85} /><Evidence x={172} y={267} scale={0.7} />
          <g className="scene-label"><text x="29" y="26">YOUR CONTENT</text><text x="211" y="26">KNOWLEDGE INDEX</text><text x="21" y="216">RETRIEVAL</text></g>
        </svg>
      </div>
      <div className="rag-answer">
        <div className="rag-answer__label"><span>04 / GROUNDED ANSWER</span><span aria-hidden="true">↗</span></div>
        <div className="rag-answer__content">
          <span className="rag-answer__tag">{example.tag}</span>
          <p>{example.answer}<sup>1</sup></p>
          <button type="button" className="rag-answer__source" aria-expanded={sourceOpen} aria-controls={sourceId} onClick={() => { motion.select(2); setSourceOpen(!sourceOpen); }}><span className="rag-answer__source-number">1</span><span>{example.source}<small>{example.section}</small></span><span aria-hidden="true">{sourceOpen ? "−" : "+"}</span></button>
        </div>
        <p className="rag-answer__note">Permission-aware retrieval.<br />An answer you can verify.</p>
      </div>
    </div>
    {sourceOpen && <div id={sourceId} className="rag-source-excerpt"><span>ILLUSTRATIVE SOURCE / {example.section}</span><blockquote>{example.excerpt}</blockquote></div>}
    <div className="rag-example__footer"><span>ILLUSTRATIVE WORKFLOW · SAMPLE CONTENT</span><MotionControls motion={motion} steps={steps} label="Knowledge" /></div>
  </div>;
}

export default function RagScene({ servicePage = false }) {
  const [selected, setSelected] = useState(0);
  const id = useId().replaceAll(":", "");
  function onTabKey(event, index) {
    const destination = { ArrowRight: (index + 1) % examples.length, ArrowLeft: (index + examples.length - 1) % examples.length, Home: 0, End: examples.length - 1 }[event.key];
    if (destination === undefined) return;
    event.preventDefault();
    setSelected(destination);
    event.currentTarget.parentElement.children[destination].focus();
  }
  return <section className="rag-section section" aria-labelledby={`${id}-heading`}><div className="container">
    <div className="rag-section__intro"><div><span className="eyebrow eyebrow--pill">Knowledge, put to work</span><h2 id={`${id}-heading`}>An answer is only as good<br className="rag-section__break" /> <span>as what it knows.</span></h2></div><div><p>Connect your documents and data to answers your team can trace back to the source.</p>{!servicePage && <Link to="/services/rag-knowledge-systems" className="link-arrow">Explore knowledge systems <span aria-hidden="true">↗</span></Link>}</div></div>
    <div className="rag-frame"><div className="rag-frame__header"><span className="rag-frame__title"><i /> RETRIEVAL IN PRACTICE</span><div role="tablist" aria-label="Choose an example question" className="rag-frame__tabs">{examples.map((example, index) => <button type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} key={example.label} onClick={() => setSelected(index)} onKeyDown={event => onTabKey(event, index)}>{example.label}</button>)}</div></div>
      <RagExample key={selected} example={examples[selected]} panelId={`${id}-panel`} tabId={`${id}-tab-${selected}`} />
    </div>
  </div></section>;
}
