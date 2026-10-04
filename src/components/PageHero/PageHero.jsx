import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./PageHero.css";

/**
 * Compact hero used at the top of every interior page.
 *
 * @param {Array} breadcrumbs [{ label, to }] — last item renders as plain text
 * @param {node}  visual      optional illustration; switches to the split layout
 * @param {string} accent     green | violet | blue — tints the split layout
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs = [],
  children,
  visual,
  accent = "green",
}) {
  const copy = (
    <>
      {eyebrow && (
        <span className="eyebrow eyebrow--pill">
          <span className="eyebrow__dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h1 className="page-hero__title">{title}</h1>
      {lead && <p className="page-hero__lead lead">{lead}</p>}
      {children && <div className="page-hero__extra">{children}</div>}
    </>
  );

  return (
    <section className={`page-hero ${visual ? `page-hero--split page-hero--${accent}` : ""}`.trim()}>
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

        {visual ? (
          <div className="page-hero__grid">
            <div className="page-hero__copy">{copy}</div>
            <div className="page-hero__art">{visual}</div>
          </div>
        ) : copy}
      </div>
    </section>
  );
}
