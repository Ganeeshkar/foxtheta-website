import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import ServiceExplorer from "./ServiceExplorer";
import { services } from "../../data/servicesData";
import "./ServicesGrid.css";
const summaries = {
 "ai-agent-development": "Agents that work across your tools, with the evaluations and oversight to make every action accountable.",
 "rag-knowledge-systems": "Turn documents, wikis and databases into answers your team can verify. Permission-aware, with sources attached.",
 "workflow-automation": "Connect the repetitive steps in your operations. Automate the routine and route exceptions to the right people.",
 "custom-ai-applications": "Copilots, document processors and decision tools, designed around the way your business actually works.",
 "integrations": "Reliable connections between AI and your CRM, ERP, data warehouse, ticketing systems and internal APIs.",
 "web-mobile-applications": "Fast, accessible products for web, iOS and Android. Carefully built interfaces and code your team can own."
};
export default function ServicesGrid({ eyebrow = "Our capabilities", title = "Built around your business.\nEngineered for production.", lead = "Six connected capabilities. One team from the first question to the final deployment.", showCta = true, limit }) {
 const items=limit?services.slice(0,limit):services;
 return <section className="services section" id="services"><div className="container">
   <div className="services__intro"><span className="eyebrow">{eyebrow}</span><h2>{title.split("\n").map(line=><span key={line}>{line}</span>)}</h2><p>{lead}</p></div>
   <ServiceExplorer items={items} summaries={summaries} />
   {showCta&&<div className="services__footer"><p>Most projects bring two or three of these together.</p><Link to="/services" className="link-arrow">Explore all services <Icon name="arrow" size={16}/></Link></div>}
 </div></section>;
}
