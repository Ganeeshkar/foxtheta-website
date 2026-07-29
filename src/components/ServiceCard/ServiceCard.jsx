import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./ServiceCard.css";

/**
 * Services grid card.
 *
 * Default state  → icon + title
 * Hover / focus  → crossfades to the short description + "Learn more"
 * Click          → navigates to /services/<slug>
 *
 * On touch devices (hover: none) both faces stack, so nothing is hidden.
 */
export default function ServiceCard({ service, index = 0 }) {
  /* Track the pointer so the highlight follows the cursor. */
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${((event.clientX - rect.left) / rect.width) * 100}%`
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${((event.clientY - rect.top) / rect.height) * 100}%`
    );
  };

  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-card"
      onMouseMove={handleMouseMove}
      aria-label={`${service.title} — read more`}
    >
      <span className="service-card__spotlight" aria-hidden="true" />
      <span className="service-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="service-card__faces">
        <span className="service-card__face service-card__face--front">
          <span className="service-card__icon">
            <Icon name={service.icon} size={26} />
          </span>
          <span className="service-card__title">{service.title}</span>
          <span className="service-card__hint">
            <Icon name="arrow" size={16} />
          </span>
        </span>

        <span className="service-card__face service-card__face--back">
          <span className="service-card__back-title">{service.title}</span>
          <span className="service-card__desc">{service.short}</span>
          <span className="service-card__more">
            Learn more
            <Icon name="arrow" size={17} className="icon--arrow" />
          </span>
        </span>
      </span>
    </Link>
  );
}
