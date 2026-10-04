import { useEffect, useRef, useState } from "react";

/**
 * Observe an element and report when it scrolls into view.
 *
 * @param {object}  options
 * @param {number}  options.threshold  Visible fraction required (0–1)
 * @param {string}  options.rootMargin Margin around the viewport
 * @param {boolean} options.once       Stop observing after the first hit
 * @param {boolean} options.respectReducedMotion  Report "in view" at once when
 *                                     the visitor prefers reduced motion
 * @returns {[React.RefObject, boolean]} [ref to attach, isInView]
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
  respectReducedMotion = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Respect reduced-motion and unsupported browsers by showing immediately.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if ((respectReducedMotion && prefersReduced) || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, respectReducedMotion]);

  return [ref, inView];
}
