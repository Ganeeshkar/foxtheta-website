import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";
import Reveal from "../Reveal/Reveal";
import Icon from "../Icon/Icon";
import { outcomes } from "../../data/outcomesData";
import "./OutcomesSection.css";

/** Small abstract product mock rendered per card — no image assets needed. */
function OutcomeVisual({ variant }) {
  if (variant === "support") {
    return (
      <div className="mock mock--support" aria-hidden="true">
        <span className="mock__bubble mock__bubble--in">
          Invoice total does not match my plan
        </span>
        <span className="mock__bubble mock__bubble--out">
          Your plan changed mid-cycle — here is the proration, with the source.
        </span>
        <span className="mock__cite">3 citations · entitlement verified</span>
      </div>
    );
  }

  if (variant === "claims") {
    return (
      <div className="mock mock--claims" aria-hidden="true">
        {["Policy schedule.pdf", "Incident report.docx", "Repair quote.pdf"].map(
          (file, index) => (
            <span className="mock__row" key={file} style={{ "--i": index }}>
              <span className="mock__tick">
                <Icon name="check" size={12} strokeWidth={3} />
              </span>
              <span className="mock__file">{file}</span>
              <span className="mock__pill">extracted</span>
            </span>
          )
        )}
        <span className="mock__bar">
          <span className="mock__bar-fill" />
        </span>
      </div>
    );
  }

  return (
    <div className="mock mock--ops" aria-hidden="true">
      <div className="mock__nodes">
        <span className="mock__node mock__node--hub">
          <Icon name="agent" size={18} />
        </span>
        {[0, 1, 2, 3].map((n) => (
          <span key={n} className={`mock__node mock__node--n${n}`} />
        ))}
        <span className="mock__ring" />
      </div>
      <span className="mock__caption">exception routed · carrier notified</span>
    </div>
  );
}

export default function OutcomesSection() {
  return (
    <section className="outcomes section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Outcomes"
          title="What changes when the AI actually ships"
          lead="Representative results from production deployments. Placeholder case studies — replace with your own once approved."
        />

        <ul className="outcomes__grid">
          {outcomes.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 100}
              className="outcome"
            >
              <article className="outcome__card">
                <div className="outcome__media">
                  <OutcomeVisual variant={item.visual} />
                  <div className="outcome__metric">
                    <strong>{item.metric}</strong>
                    <span>{item.metricLabel}</span>
                  </div>
                </div>

                <div className="outcome__body">
                  <span className="outcome__industry">{item.industry}</span>
                  <h3 className="outcome__title">{item.title}</h3>
                  <p className="outcome__text">{item.description}</p>
                  <Link
                    to={`/services/${item.serviceSlug}`}
                    className="btn btn--outline btn--sm outcome__link"
                  >
                    View the service
                    <Icon name="arrow" size={16} className="icon--arrow" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
