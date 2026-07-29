import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import Icon from "../components/Icon/Icon";
import usePageMeta from "../hooks/usePageMeta";
import { siteConfig } from "../data/siteConfig";
import { services } from "../data/servicesData";
import "./Contact.css";

const nextSteps = [
  {
    id: "s1",
    title: "You send us the problem",
    text: "A paragraph is enough. The workflow that is slow, the metric that will not move, or the thing your team keeps doing by hand.",
  },
  {
    id: "s2",
    title: "We reply within a business day",
    text: "Usually with two or three questions, and an honest first read on whether AI is even the right tool for it.",
  },
  {
    id: "s3",
    title: "A 30-minute scoping call",
    text: "No slides. We map the decision, the data and the constraints, then tell you what a pilot would look like.",
  },
  {
    id: "s4",
    title: "A written scope and estimate",
    text: "Fixed scope, clear assumptions, and the metric we would be measured against. You decide from there.",
  },
];

export default function Contact() {
  usePageMeta(
    "Contact",
    `Talk to Foxtheta about AI agents, automation and custom AI development. Email ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what needs to work better"
        lead="No forms, no gatekeeping, no discovery-call funnel. Email or call the team directly and you will reach the people who would do the work."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section contact">
        <div className="container">
          <div className="contact__grid">
            <Reveal className="contact__card contact__card--primary panel panel--edge">
              <span className="contact__icon">
                <Icon name="mail" size={22} />
              </span>
              <h2 className="contact__card-title">Email us</h2>
              <p className="contact__card-text">
                The fastest way to reach us. Include a sentence or two about the
                problem and we will come back with real questions.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact__value"
              >
                {siteConfig.email}
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                  "Project enquiry"
                )}`}
                className="btn btn--primary"
              >
                Start an email
                <Icon name="arrow" size={18} className="icon--arrow" />
              </a>
            </Reveal>

            <Reveal delay={90} className="contact__card panel">
              <span className="contact__icon">
                <Icon name="phone" size={22} />
              </span>
              <h2 className="contact__card-title">Call the team</h2>
              <p className="contact__card-text">
                Prefer to talk it through? Reach us during working hours and you
                will get an engineer, not a switchboard.
              </p>
              <a href={`tel:${siteConfig.phoneHref}`} className="contact__value">
                {siteConfig.phoneDisplay}
              </a>
              <p className="contact__meta">
                <Icon name="clock" size={16} />
                {siteConfig.hours}
              </p>
            </Reveal>

            <Reveal delay={180} className="contact__card panel">
              <span className="contact__icon">
                <Icon name="pin" size={22} />
              </span>
              <h2 className="contact__card-title">Where we are</h2>
              <p className="contact__card-text">
                We work remotely with clients worldwide and meet in person when
                a project genuinely benefits from it.
              </p>
              <address className="contact__address">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.country}
              </address>
              <p className="contact__meta">
                <Icon name="chat" size={16} />
                New business: {siteConfig.salesEmail}
              </p>
            </Reveal>
          </div>

          {/* ---------- what happens next ---------- */}
          <Reveal className="contact__process">
            <div className="contact__process-head">
              <span className="eyebrow eyebrow--pill">
                <span className="eyebrow__dot" aria-hidden="true" />
                What happens next
              </span>
              <h2 className="contact__process-title">
                Four steps from first email to a written scope
              </h2>
            </div>

            <ol className="contact__steps">
              {nextSteps.map((step, index) => (
                <li key={step.id} className="contact__step">
                  <span className="contact__step-num">0{index + 1}</span>
                  <h3 className="contact__step-title">{step.title}</h3>
                  <p className="contact__step-text">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* ---------- quick service links ---------- */}
          <Reveal className="contact__services">
            <h2 className="contact__services-title">
              Or email us about a specific service
            </h2>
            <ul className="contact__services-list">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                      `Enquiry: ${service.title}`
                    )}`}
                    className="contact__service-link"
                  >
                    <Icon name={service.icon} size={18} />
                    {service.title}
                    <Icon name="arrow" size={15} className="icon--arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
