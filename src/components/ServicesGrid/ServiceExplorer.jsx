import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ServiceScene from "../MotionDiagram/ServiceScene";
import { serviceStories as stories } from "../../data/serviceStories";
import "./ServiceExplorer.css";

const labels = {
  "ai-agent-development": "AI agents",
  "rag-knowledge-systems": "Knowledge systems",
  "workflow-automation": "Automation",
  "custom-ai-applications": "AI applications",
  integrations: "Integrations",
  "web-mobile-applications": "Web & mobile",
};


export default function ServiceExplorer({ items, summaries }) {
  const [selected, setSelected] = useState(0);
  const [stage, setStage] = useState(0);
  const tabs = useRef([]);
  const id = useId();
  const service = items[selected];
  const [opening, emphasis, steps] = stories[service.slug];

  function navigate(event, index) {
    const keys = { ArrowRight: (index + 1) % items.length, ArrowLeft: (index - 1 + items.length) % items.length, Home: 0, End: items.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    setSelected(keys[event.key]);
    tabs.current[keys[event.key]]?.focus();
  }

  return <div className={`service-explorer service-explorer--${service.slug}`}>
    <div className="service-explorer__tabs" role="tablist" aria-label="Explore our capabilities">
      {items.map((item, index) => <button key={item.slug} ref={node => { tabs.current[index] = node; }} type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => navigate(event, index)}>
        <span className="service-explorer__number">0{index + 1}</span><span>{labels[item.slug]}</span><span className="service-explorer__indicator" aria-hidden="true">↗</span>
      </button>)}
    </div>
    <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${selected}`} tabIndex={0} className="service-explorer__panel">
      <div className="service-explorer__copy" key={`${service.slug}-copy`}>
        <span className="service-explorer__category">{service.title}</span>
        <h3>{opening}<br /><span>{emphasis}</span></h3>
        <p>{summaries[service.slug] ?? service.short}</p>
        <ol className="service-explorer__steps">{steps.map((step, index) => <li key={step} className={stage === index ? "is-active" : undefined}><span>0{index + 1}</span>{step}</li>)}</ol>
        <Link to={`/services/${service.slug}`} className="btn btn--outline">Explore {labels[service.slug]} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="service-explorer__art" key={service.slug}><ServiceScene slug={service.slug} labels={steps} onStage={setStage} /></div>
    </div>
    <div className="service-explorer__base"><span>BUILT WITH YOUR STACK</span><span>{service.stack.slice(0, 3).join(" / ")}</span><span>YOUR CODE. YOUR INFRASTRUCTURE.</span></div>
  </div>;
}
