import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";
import { siteConfig } from "../../data/siteConfig";
import { footerLinks } from "../../data/navLinks";
import { services } from "../../data/servicesData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={42} />
          <p className="footer__slogan">{siteConfig.slogan}</p>
          <p className="footer__blurb">{siteConfig.description}</p>

          <ul className="footer__social">
            {siteConfig.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="footer__social-link"
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon name={item.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__col" aria-label="Services">
          <h2 className="footer__heading">Services</h2>
          <ul className="footer__links">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Company">
          <h2 className="footer__heading">Company</h2>
          <ul className="footer__links">
            {footerLinks.company.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/services">All Services</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Get in touch</h2>
          <ul className="footer__contact">
            <li>
              <Icon name="mail" size={17} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Icon name="phone" size={17} />
              <a href={`tel:${siteConfig.phoneHref}`}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <Icon name="pin" size={17} />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
        </p>
        <div className="footer__bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
