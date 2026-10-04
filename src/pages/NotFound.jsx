import { Link } from "react-router-dom";
import Icon from "../components/Icon/Icon";
import usePageMeta from "../hooks/usePageMeta";
import { services } from "../data/servicesData";
import "./NotFound.css";

export default function NotFound() {
  usePageMeta("Page not found", "The page you were looking for does not exist.");

  return (
    <section className="notfound">

      <div className="container notfound__inner">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">This page went off the map</h1>
        <p className="notfound__text">
          The link may be out of date, or the page may have moved. Here are the
          places most people are heading.
        </p>

        <div className="notfound__actions">
          <Link to="/" className="btn btn--primary">
            Back to home
            <Icon name="arrow" size={18} className="icon--arrow" />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            Contact us
          </Link>
        </div>

        <ul className="notfound__links">
          {services.slice(0, 4).map((service) => (
            <li key={service.slug}>
              <Link to={`/services/${service.slug}`}>
                <Icon name={service.icon} size={17} />
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
