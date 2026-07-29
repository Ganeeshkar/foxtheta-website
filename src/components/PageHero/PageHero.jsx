import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./PageHero.css";

/**
 * Compact hero used at the top of every interior page.
 *
 * @param {Array} breadcrumbs [{ label, to }] — last item renders as plain text
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs = [],
  children,
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="aura aura--blue page-hero__aura" aria-hidden="true" />

      <div className="container page-hero__inner">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label}>
                    {isLast || !crumb.to ? (
                      <span aria-current={isLast ? "page" : undefined}>
                        {crumb.label}
                      </span>
                    ) : (
                      <>
                        <Link to={crumb.to}>{crumb.label}</Link>
                        <Icon name="chevronRight" size={14} />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="eyebrow eyebrow--pill">
            <span className="eyebrow__dot" aria-hidden="true" />
            {eyebrow}
          </span>
        )}

        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead lead">{lead}</p>}
        {children && <div className="page-hero__extra">{children}</div>}
      </div>
    </section>
  );
}
