import { trustLogos } from "../../data/trustLogos";
import "./TrustStrip.css";

/**
 * Scrolling placeholder client strip.
 * The list is rendered twice so the marquee can loop seamlessly.
 */
export default function TrustStrip({ label = "Trusted by teams shipping AI in production" }) {
  return (
    <section className="trust" aria-label="Clients and partners">
      <p className="trust__label">{label}</p>

      <div className="trust__viewport">
        <ul className="trust__track">
          {[...trustLogos, ...trustLogos].map((logo, index) => (
            <li
              key={`${logo.id}-${index}`}
              className="trust__item"
              aria-hidden={index >= trustLogos.length}
            >
              <span className="trust__mark" aria-hidden="true" />
              <span className="trust__name">{logo.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="trust__note">Placeholder names — swap for real client logos.</p>
    </section>
  );
}
