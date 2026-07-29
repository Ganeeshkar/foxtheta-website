import SectionHeading from "../SectionHeading/SectionHeading";
import Reveal from "../Reveal/Reveal";
import Icon from "../Icon/Icon";
import { approach } from "../../data/approachData";
import "./ApproachSection.css";

export default function ApproachSection() {
  return (
    <section className="approach section">
      <div className="aura aura--blue approach__aura" aria-hidden="true" />

      <div className="container">
        <SectionHeading
          eyebrow="Our approach"
          title="How Foxtheta gets AI into production"
          lead="Four commitments that shape every engagement — from the first scoping call to the handover."
        />

        <ul className="approach__grid">
          {approach.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 90}
              className="approach__item"
            >
              <span className="approach__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <span className="approach__rule" aria-hidden="true" />
              <h3 className="approach__title">{item.title}</h3>
              <p className="approach__text">{item.description}</p>
              <span className="approach__step" aria-hidden="true">
                0{index + 1}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
