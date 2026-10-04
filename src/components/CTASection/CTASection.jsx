import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { siteConfig } from "../../data/siteConfig";
import "./CTASection.css";
export default function CTASection({ title = "What could work better?", text = "Bring us the slow workflow, the scattered knowledge or the idea that needs building. We’ll work out the next step together.", primaryLabel = "Start a conversation", primaryTo = "/contact", secondaryLabel = "Explore our services", secondaryTo = "/services" }) {
  return <section className="cta"><div className="container cta__layout"><div><span className="eyebrow">Your next project</span><h2 className="cta__title">{title}</h2></div><div className="cta__copy"><p>{text}</p><div className="cta__actions"><Link to={primaryTo} className="btn btn--primary">{primaryLabel}<Icon name="arrow" size={18} /></Link>{secondaryLabel && <Link to={secondaryTo} className="cta__secondary">{secondaryLabel} ↗</Link>}</div><p className="cta__note">{siteConfig.responseTime}</p></div></div></section>;
}
