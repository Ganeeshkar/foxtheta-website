import { useState } from "react";
import Icon from "../Icon/Icon";
import "./SystemDiagram.css";

const examples = [
  { name: "Knowledge systems", sources: ["Documents & wikis", "Business data", "Access permissions"], action: "Find the right answer.", description: "Grounded in your knowledge. Traceable to its source.", steps: ["Retrieve", "Verify", "Respond"], question: "What is our supplier approval process?", result: "New suppliers need an operations review and a signed agreement before onboarding.", source: "Supplier handbook · Section 4.2", status: "Answer with sources" },
  { name: "AI agents", sources: ["Incoming requests", "Connected tools", "Approval rules"], action: "Move the work forward.", description: "Useful actions. Clear boundaries. A person in control.", steps: ["Understand", "Check", "Act"], question: "Prepare the new supplier for onboarding.", result: "Supplier record prepared. The agreement is ready for your team to review before sending.", source: "Human approval required", status: "Ready for review" },
  { name: "Automation", sources: ["Forms & inboxes", "Business systems", "Routing rules"], action: "Give your team time back.", description: "Connect the steps. Handle exceptions. Keep a record.", steps: ["Receive", "Validate", "Route"], question: "Route this supplier invoice to the right team.", result: "Invoice matched to a purchase order and added to the finance approval queue.", source: "Activity recorded in the audit trail", status: "Routed to finance" },
];

export default function SystemDiagram() {
  const [active, setActive] = useState(0);
  const example = examples[active];
  function selectTab(event, index) {
    const keys = { ArrowRight: (index + 1) % 3, ArrowLeft: (index + 2) % 3, Home: 0, End: 2 };
    if (keys[event.key] === undefined) return;
    event.preventDefault();
    setActive(keys[event.key]);
    event.currentTarget.parentElement.children[keys[event.key]].focus();
  }
  return (
    <div className="system-demo">
      <div className="system-demo__top"><span><i aria-hidden="true" /> From your systems to something useful</span><span className="system-demo__label">Illustrative workflows</span></div>
      <div className="system-demo__body">
        <div className="system-demo__editorial"><span className="system-demo__index">0{active + 1} / 03</span><h2>{example.action}</h2><p>{example.description}</p>
          <div role="tablist" aria-label="Explore example workflows" className="system-demo__tabs">{examples.map((item, index) => <button key={item.name} id={"workflow-tab-" + index} role="tab" aria-selected={active === index} aria-controls="workflow-panel" tabIndex={active === index ? 0 : -1} onKeyDown={(event) => selectTab(event, index)} onClick={() => setActive(index)}>{item.name}<span aria-hidden="true">↗</span></button>)}</div>
        </div>
        <div className="system-demo__canvas" id="workflow-panel" role="tabpanel" aria-labelledby={"workflow-tab-" + active} tabIndex={0}>
          <div className="system-demo__flow" key={active}>
            <div className="system-demo__sources"><span className="system-demo__caption">01 — Your context</span>{example.sources.map((source, index) => <div className="system-demo__source" key={source}><Icon name={["knowledge", "integrations", "shield"][index]} size={15} />{source}<span aria-hidden="true">+</span></div>)}</div>
            <div className="system-demo__connector" aria-hidden="true"><span /><span /><span /></div>
            <div className="system-demo__engine"><span className="system-demo__caption">02 — Intelligence</span><div className="system-demo__core"><span className="system-demo__theta">θ</span><span>foxtheta</span></div><div className="system-demo__steps">{example.steps.map(step => <span key={step}>{step}</span>)}</div></div>
            <div className="system-demo__result"><div className="system-demo__result-top"><span className="system-demo__caption">03 — Useful output</span><Icon name="arrow" size={16} /></div><p className="system-demo__question">{example.question}</p><p className="system-demo__answer">{example.result}</p><span className="system-demo__citation"><Icon name="check" size={12} />{example.source}</span></div>
          </div>
          <div className="system-demo__canvas-foot"><span><span aria-hidden="true">↳</span> Permissions, evaluations & human oversight</span><span className="system-demo__status">{example.status}</span></div>
        </div>
      </div>
    </div>
  );
}
