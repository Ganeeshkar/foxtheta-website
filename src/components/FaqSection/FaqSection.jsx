import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";
import Icon from "../Icon/Icon";
import { faqIntro, faqs } from "../../data/faqData";
import { siteConfig } from "../../data/siteConfig";
import "./FaqSection.css";

/**
 * FAQ accordion. One panel open at a time; the open one closes on re-click.
 * Panels animate with the grid-template-rows 0fr → 1fr technique so no
 * height measurement is needed.
 */
export default function FaqSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="faq section section--alt" aria-labelledby="faq-title">

      <div className="container faq__layout">
        <Reveal className="faq__intro">
          <span className="eyebrow eyebrow--pill">
            <span className="eyebrow__dot" aria-hidden="true" />
            {faqIntro.eyebrow}
          </span>

          <h2 className="faq__title" id="faq-title">
            {faqIntro.title}
          </h2>
          <p className="faq__lead">{faqIntro.lead}</p>

          <div className="faq__aside">
            <p className="faq__aside-text">
              Still unsure whether your problem is a fit? Send us a paragraph
              about it — we will tell you honestly either way.
            </p>
            <Link to="/contact" className="link-arrow">
              Talk to an engineer
              <Icon name="arrow" size={18} />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="faq__aside-email"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
              >
                <h3 className="faq__heading">
                  <button
                    type="button"
                    className="faq__trigger"
                    id={`faq-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="faq__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq__question">{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <Icon name="chevronDown" size={18} strokeWidth={2} />
                    </span>
                  </button>
                </h3>

                <div
                  className="faq__panel"
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-hidden={!isOpen}
                  aria-labelledby={`faq-trigger-${item.id}`}
                >
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
