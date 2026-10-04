import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { siteConfig } from "../../data/siteConfig";
import { services } from "../../data/servicesData";
import "./Footer.css";
export default function Footer() {
 return <footer className="footer"><div className="container">
  <div className="footer__inner"><div className="footer__brand"><Logo size={35} /><p>Strategic intelligence.<br />Real impact.</p><a href={"mailto:"+siteConfig.email}>{siteConfig.email} ↗</a></div>
  <nav aria-label="Footer services"><h2 className="footer__heading">Capabilities</h2><ul className="footer__links">{services.map(service=><li key={service.slug}><Link to={"/services/"+service.slug}>{service.title}</Link></li>)}</ul></nav>
  <nav aria-label="Footer company"><h2 className="footer__heading">Company</h2><ul className="footer__links"><li><Link to="/about">About Foxtheta</Link></li><li><Link to="/services">Our services</Link></li><li><Link to="/contact">Start a conversation</Link></li><li><Link to="/privacy-policy">Privacy policy</Link></li></ul></nav>
  <div className="footer__note"><span className="footer__heading">Let’s get to work</span><p>A real problem.<br />A focused conversation.<br />A useful next step.</p><Link to="/contact">Talk to an engineer ↗</Link></div></div>
  <div className="footer__wordmark" aria-hidden="true">foxtheta<span>↗</span></div>
  <div className="footer__bottom"><p>© {siteConfig.copyrightYear} Foxtheta</p><span>Independent AI engineering</span><Link to="/privacy-policy">Privacy policy</Link></div>
 </div></footer>;
}
