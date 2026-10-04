import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import ApproachGlyph from "./ApproachGlyph";
import useInView from "../../hooks/useInView";
import "./ApproachSection.css";
const commitments = [
  { label: "Prove it first", title: "A focused pilot. A clear decision.", text: "Test a tightly scoped system on your real data in 4–6 weeks. Agree on the baseline, measure the result and decide what deserves a full build.", detail: "01 / Start with evidence" },
  { label: "Build it properly", title: "The whole system, accounted for.", text: "Data, models, interfaces and deployment. We take responsibility for the connections between them, with access controls and audit trails built in.", detail: "02 / Engineer for production" },
  { label: "Make it yours", title: "Your team stays in control.", text: "You own the code and infrastructure. We hand over documentation, evaluations and a system your engineers can operate and extend.", detail: "03 / Transfer the knowledge" },
];
export default function ApproachSection() {
  const [grid, drawn] = useInView({ threshold: 0.3, once: false, respectReducedMotion: false });
  return <section className="approach section"><div className="container">
    <div className="approach__header"><span className="eyebrow">Our approach</span><h2>Good engineering.<br /><span>No guesswork.</span></h2><p>A small team. Direct conversations. One shared definition of what working means.</p></div>
    <ol ref={grid} className={`approach__grid ${drawn ? "is-drawn" : ""}`}>{commitments.map((item, index) => <li className="approach__item" key={item.label}><ApproachGlyph index={index} /><span className="approach__step">{item.detail}</span><h3>{item.title}</h3><p>{item.text}</p><span className="approach__label">{item.label}<Icon name="check" size={15} /></span></li>)}</ol>
    <div className="approach__bottom"><p>Built around the unglamorous details that make AI dependable.</p><Link to="/about" className="link-arrow">Meet Foxtheta <Icon name="arrow" size={17} /></Link></div>
  </div></section>;
}
