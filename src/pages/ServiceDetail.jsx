import { Link, useParams } from "react-router-dom";
import ServiceHero from "../components/MotionDiagram/ServiceHero";
import RagScene from "../components/MotionDiagram/RagScene";
import CTASection from "../components/CTASection/CTASection";
import Reveal from "../components/Reveal/Reveal";
import Icon from "../components/Icon/Icon";
import NotFound from "./NotFound";
import usePageMeta from "../hooks/usePageMeta";
import { services, getServiceBySlug } from "../data/servicesData";
import { siteConfig } from "../data/siteConfig";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  /* Unknown slug → render the 404 page rather than an empty layout. */
  if (!service) return <NotFound />;

  return <ServiceDetailView service={service} />;
}

function ServiceDetailView({ service }) {
  usePageMeta(service.title, service.short);

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <ServiceHero service={service} />

      {service.slug === "rag-knowledge-systems" && <div className="service-detail__rag"><RagScene servicePage /></div>}

      <div className={`service-detail service-detail--${service.slug} section`}>
        <div className="container service-detail__layout">
          <article className="service-detail__main">
            <Reveal as="section" className="service-detail__block">
              <h2 className="service-detail__h2">Overview</h2>
              {service.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="service-detail__p">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal as="section" className="service-detail__block">
              <h2 className="service-detail__h2">Key benefits</h2>
              <ul className="service-detail__benefits">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span className="service-detail__tick">
                      <Icon name="check" size={14} strokeWidth={2.6} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="section" className="service-detail__block">
              <h2 className="service-detail__h2">What&rsquo;s included</h2>
              <p className="service-detail__p">
                A typical engagement covers the following. We adjust scope after
                the first discovery session — you only pay for what your
                situation actually needs.
              </p>
              <ul className="service-detail__included">
                {service.included.map((item, index) => (
                  <li key={item}>
                    <span className="service-detail__num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>

          {/* ---------- sidebar ---------- */}
          <aside className="service-detail__aside">
            <div className="service-detail__card panel">
              <h2 className="service-detail__card-title">Typical stack</h2>
              <ul className="service-detail__chips">
                {service.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="service-detail__card-note">
                Indicative only — we work with the stack you already run
                wherever that is the sensible choice.
              </p>
            </div>

            <nav className="service-detail__card panel" aria-label="Other services">
              <h2 className="service-detail__card-title">Other services</h2>
              <ul className="service-detail__others">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/services/${item.slug}`}>
                      <Icon name={item.icon} size={18} />
                      <span>{item.title}</span>
                      <Icon
                        name="arrow"
                        size={16}
                        className="service-detail__other-arrow"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="service-detail__card service-detail__card--cta panel">
              <h2 className="service-detail__card-title">
                Talk it through first
              </h2>
              <p className="service-detail__card-note">
                A 30-minute call is usually enough to tell whether this is the
                right service for your problem.
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                  `Enquiry: ${service.title}`
                )}`}
                className="btn btn--primary btn--block btn--sm"
              >
                Email the team
                <Icon name="arrow" size={16} className="icon--arrow" />
              </a>
            </div>
          </aside>
        </div>
      </div>

      <CTASection
        title={`Ready to scope your ${service.title} project?`}
        text="Send us the workflow, the constraint or the metric you need to move. We will come back with a scope, a timeline and an honest view of the risks."
        secondaryLabel="See all services"
      />
    </>
  );
}
