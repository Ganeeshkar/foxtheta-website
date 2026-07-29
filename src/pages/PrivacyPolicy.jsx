import PageHero from "../components/PageHero/PageHero";
import Icon from "../components/Icon/Icon";
import usePageMeta from "../hooks/usePageMeta";
import { privacyMeta, privacySections } from "../data/privacyData";
import { siteConfig } from "../data/siteConfig";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy",
    "How Foxtheta collects, uses and protects information submitted through this website."
  );

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead={privacyMeta.intro}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />

      <div className="section privacy">
        <div className="container privacy__layout">
          {/* on-page navigation */}
          <nav className="privacy__toc" aria-label="Sections">
            <span className="privacy__toc-title">On this page</span>
            <ul>
              {privacySections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="privacy__body">
            <div className="privacy__notice" role="note">
              <Icon name="shield" size={20} />
              <p>
                <strong>Placeholder text.</strong> This policy is sample copy
                provided as a formatting starting point. Replace every section
                with wording reviewed by your own legal counsel before
                publishing.
              </p>
            </div>

            <p className="privacy__updated">
              Last updated: {privacyMeta.lastUpdated}
            </p>

            {privacySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="privacy__section"
              >
                <h2 className="privacy__h2">{section.title}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="privacy__p">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="privacy__list">
                    {section.list.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={15} strokeWidth={2.4} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="privacy__contact">
              <h2 className="privacy__h2">Questions about this policy</h2>
              <p className="privacy__p">
                Write to{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
                call {siteConfig.phoneDisplay}. Postal enquiries can be sent to{" "}
                {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                {siteConfig.address.country}.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
