import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import Reveal from "../Reveal/Reveal";
import { siteConfig } from "../../data/siteConfig";
import "./CTASection.css";

/**
 * Closing call-to-action band. Reused on every page.
 */
export default function CTASection({
  title = "Ready to build AI that actually ships?",
  text = "Bring us a workflow that is slow, expensive or error-prone. We will tell you honestly whether AI is the right answer — and if it is, what it takes to get it into production.",
  primaryLabel = "Get in Touch",
  primaryTo = "/contact",
  secondaryLabel = "Explore Services",
  secondaryTo = "/services",
}) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__panel panel panel--edge">
          <div className="cta__glow" aria-hidden="true" />

          <div className="cta__content">
            <span className="eyebrow eyebrow--pill">
              <span className="eyebrow__dot" aria-hidden="true" />
              {siteConfig.slogan}
            </span>

            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>

            <div className="cta__actions">
              <Link to={primaryTo} className="btn btn--primary btn--lg">
                {primaryLabel}
                <Icon name="arrow" size={19} className="icon--arrow" />
              </Link>

              {secondaryLabel && (
                <Link to={secondaryTo} className="btn btn--outline btn--lg">
                  {secondaryLabel}
                </Link>
              )}
            </div>

            <p className="cta__note">
              <Icon name="clock" size={16} />
              {siteConfig.responseTime}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
