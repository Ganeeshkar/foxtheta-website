import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import Reveal from "../Reveal/Reveal";
import Icon from "../Icon/Icon";
import { services } from "../../data/servicesData";
import "./ServicesGrid.css";

export default function ServicesGrid({
  eyebrow = "What we build",
  title = "Capabilities that carry a project from idea to production",
  lead = "Seven focused practice areas. Hover a card for the short version, open it for the full picture.",
  showCta = true,
  limit,
}) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="services section" id="services">
      <div className="aura aura--blue services__aura" aria-hidden="true" />

      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <ul className="services__grid">
          {items.map((service, index) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={(index % 3) * 90}
              className="services__cell"
            >
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </ul>

        {showCta && (
          <Reveal className="services__footer">
            <p className="services__footer-text">
              Most projects need two or three of these together. Tell us the
              outcome you need and we will propose the shortest path to it.
            </p>
            <Link to="/contact" className="btn btn--secondary">
              Scope a project
              <Icon name="arrow" size={18} className="icon--arrow" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
