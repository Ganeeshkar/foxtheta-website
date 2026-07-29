import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Router helper: reset scroll on navigation, or jump to a #hash target
 * when one is present (used by the "Services" anchor on the home page).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
