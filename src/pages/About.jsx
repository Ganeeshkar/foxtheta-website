import PageHero from "../components/PageHero/PageHero";
import PageScene from "../components/MotionDiagram/PageScene";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import CTASection from "../components/CTASection/CTASection";
import Reveal from "../components/Reveal/Reveal";
import Icon from "../components/Icon/Icon";
import usePageMeta from "../hooks/usePageMeta";
import { aboutIntro, story, values } from "../data/aboutData";
import { siteConfig } from "../data/siteConfig";
import "./About.css";

export default function About() {
  usePageMeta(
    "About",
    "Foxtheta is an AI development company building agents, knowledge systems and automation that survive production. How we work and what we value."
  );

  return (
    <>
      <PageHero
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        lead={aboutIntro.lead}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        visual={<PageScene kind="about" />}
        accent="violet"
      />

      {/* ---------- story ---------- */}
      <section className="section about-story">
        <div className="container about-story__layout">
          <Reveal className="about-story__copy">
            <span className="eyebrow">Our story</span>
            <h2 className="about-story__title">
              Built around the half of AI that nobody demos
            </h2>
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="about-story__p">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="about-story__side">
            <div className="about-card panel panel--edge">
              <span className="about-card__label">In one line</span>
              <p className="about-card__slogan">{siteConfig.slogan}</p>
              <p className="about-card__text">
                We are an embedded AI engineering partner: a small team, short
                feedback loops, and a bias toward shipping something real
                before anyone writes a strategy deck about it.
              </p>

              <ul className="about-card__facts">
                <li>
                  <Icon name="clock" size={17} />
                  <span>
                    <strong>Founded {siteConfig.founded}</strong>
                    Taking on our first engagements now
                  </span>
                </li>
                <li>
                  <Icon name="users" size={17} />
                  <span>
                    <strong>Direct access</strong>
                    You talk to the people writing the code, not an account
                    layer
                  </span>
                </li>
                <li>
                  <Icon name="shield" size={17} />
                  <span>
                    <strong>Your infrastructure</strong>
                    Cloud, VPC or on-premise — whatever compliance requires
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four things we will not trade away"
            lead="These are the commitments we make on every engagement, and the ones we would rather lose work over than break."
          />

          <ul className="about-values">
            {values.map((value, index) => (
              <Reveal
                as="li"
                key={value.id}
                delay={index * 80}
                className="about-value"
              >
                <span className="about-value__icon">
                  <Icon name={value.icon} size={24} />
                </span>
                <h3 className="about-value__title">{value.title}</h3>
                <p className="about-value__text">{value.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/*
        The "How we got here" timeline is intentionally omitted — Foxtheta
        was founded in 2026 and has no history to chart yet. The markup
        pattern and its CSS (.about-timeline / .about-milestone) are kept in
        About.css; restore this section once `milestones` in
        src/data/aboutData.js has real entries.
      */}

      <CTASection
        title="Want to see how we would approach your problem?"
        text="Send over the workflow or the metric that is bothering you. We will tell you what we would build, what it would take, and where we think the risk sits."
      />
    </>
  );
}
