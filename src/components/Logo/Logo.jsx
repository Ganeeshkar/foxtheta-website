import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import "./Logo.css";

/*
 * ---------------------------------------------------------------
 * THE LOGO
 * ---------------------------------------------------------------
 * `foxtheta-logo.png` is the real fox-head mark — white line art with
 * the blue chin triangle — with its background made transparent so it
 * sits cleanly on any surface.
 *
 * The artwork is light-on-dark, which suits this dark-themed site. If
 * you ever add a light/white background section, you will need a
 * dark-on-light export of the same mark; drop it in here and switch on
 * the `variant` prop below.
 *
 * Source file: 136 × 128. Displayed at ~38–42px, so it has roughly 3×
 * pixel density — sharp on retina screens. A larger export (or an SVG)
 * would be worth having if you ever show the mark big.
 * ---------------------------------------------------------------
 */
import mark from "../../assets/foxtheta-logo.png";

export default function Logo({
  variant = "light",
  size = 40,
  withWordmark = true,
  to = "/",
  className = "",
}) {
  const src = mark;

  return (
    <Link
      to={to}
      className={`logo logo--${variant} ${className}`.trim()}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="logo__mark" style={{ "--logo-size": `${size}px` }}>
        <img src={src} alt="" width={size} height={size} aria-hidden="true" />
      </span>

      {withWordmark && (
        <span className="logo__text">
          <span className="logo__wordmark">{siteConfig.name}</span>
        </span>
      )}
    </Link>
  );
}
