import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../../data/navLinks";
import { services } from "../../data/servicesData";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  /* Solidify the header once the page scrolls away from the hero. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close every menu whenever the route changes. */
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  /* Lock body scroll while the mobile drawer is open. */
  useEffect(() => {
    document.body.classList.toggle("is-locked", mobileOpen);
    if (mobileOpen && headerRef.current) {
      headerRef.current.style.setProperty("--mobile-nav-top", headerRef.current.getBoundingClientRect().bottom + "px");
    }
    return () => document.body.classList.remove("is-locked");
  }, [mobileOpen]);

  /* Escape closes whatever is open. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header ref={headerRef} className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__inner container">
        <Logo size={38} />

        {/* ---------- desktop navigation ---------- */}
        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav__item">
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <Link to="/contact" className="btn btn--primary btn--sm header__cta">
            Start a conversation
            <Icon name="arrow" size={17} className="icon--arrow" />
          </Link>

          <button
            type="button"
            className="header__burger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? "is-open" : ""}`}
        hidden={!mobileOpen}
      >
        <nav className="mobile-nav__inner" aria-label="Mobile">
          <ul className="mobile-nav__list">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className="mobile-nav__item"
                style={{ "--i": index }}
              >
                {link.type === "services" ? (
                  <>
                    <div className="mobile-nav__row">
                      <NavLink to={link.to} className="mobile-nav__link">
                        {link.label}
                      </NavLink>
                      <button
                        type="button"
                        className={`mobile-nav__toggle ${
                          mobileServicesOpen ? "is-open" : ""
                        }`}
                        aria-expanded={mobileServicesOpen}
                        aria-label="Show all services"
                        onClick={() => setMobileServicesOpen((open) => !open)}
                      >
                        <Icon name="chevronDown" size={20} />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <ul className="mobile-nav__sub">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              to={`/services/${service.slug}`}
                              className="mobile-nav__sub-link"
                            >
                              <Icon name={service.icon} size={18} />
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink to={link.to} end={link.to === "/"} className="mobile-nav__link">
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn--primary btn--block">
            Get in Touch
            <Icon name="arrow" size={18} className="icon--arrow" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
