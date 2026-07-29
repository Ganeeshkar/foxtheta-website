import { useEffect } from "react";

const SITE_NAME = "Foxtheta";

/** Create the tag if it does not exist yet, then set its content. */
function setMeta(selector, attrs, content) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attrs).forEach(([key, val]) => tag.setAttribute(key, val));
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

/**
 * Per-page <title> and meta description (basic SEO for a static SPA).
 *
 * @param {string} title       Page title, without the site-name suffix
 * @param {string} description Meta description for this page
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    if (description) {
      setMeta('meta[name="description"]', { name: "description" }, description);
      setMeta(
        'meta[property="og:description"]',
        { property: "og:description" },
        description
      );
    }

    setMeta('meta[property="og:title"]', { property: "og:title" }, fullTitle);

    // Canonical URL for the current route
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, [title, description]);
}
