import useInView from "../../hooks/useInView";

/**
 * Fade-and-rise wrapper for section entry animations.
 *
 * <Reveal delay={120}><Card /></Reveal>
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  // Section entrances play for every visitor, including reduced-motion settings.
  const [ref, inView] = useInView({ respectReducedMotion: false });

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
