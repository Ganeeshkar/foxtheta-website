import { Link } from "react-router-dom";
import ServiceScene from "./ServiceScene";
import { serviceStories } from "../../data/serviceStories";

export default function ServiceHero({service}) {
  return <section className={`service-masthead service-masthead--${service.slug}`}><div className="container">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link><span aria-hidden="true"> / </span></li><li><Link to="/services">Services</Link><span aria-hidden="true"> / </span></li><li><span aria-current="page">{service.title}</span></li></ol></nav>
    <div className="service-masthead__grid"><div className="service-masthead__copy"><span className="eyebrow eyebrow--pill">FOXTHETA / ENGINEERING</span><h1>{service.title}</h1><p>{service.tagline}</p><Link to="/contact" className="btn btn--outline">Talk to an engineer <span aria-hidden="true">↗</span></Link></div><div className="service-masthead__art"><ServiceScene slug={service.slug} labels={serviceStories[service.slug][2]} /></div></div>
  </div></section>;
}
