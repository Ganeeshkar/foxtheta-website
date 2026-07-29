import Reveal from "../Reveal/Reveal";
import "./SectionHeading.css";

/**
 * Shared section header: eyebrow + title + optional lead paragraph.
 * `align` accepts "center" (default) or "left".
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  id,
  children,
}) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <span className="eyebrow eyebrow--pill">
          <span className="eyebrow__dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-heading__lead lead">{lead}</p>}
      {children}
    </Reveal>
  );
}
