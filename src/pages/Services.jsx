import PageHero from "../components/PageHero/PageHero";
import ServicesGrid from "../components/ServicesGrid/ServicesGrid";
import ApproachSection from "../components/ApproachSection/ApproachSection";
import CTASection from "../components/CTASection/CTASection";
import usePageMeta from "../hooks/usePageMeta";

export default function Services() {
  usePageMeta(
    "Services",
    "AI agents, RAG knowledge systems, workflow automation, custom AI applications, integrations, web and mobile apps, and SaaS platform development."
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Seven practice areas, one delivery team"
        lead="We scope narrowly and build deeply. Most projects combine two or three of these into a single roadmap with one accountable team behind it."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <ServicesGrid
        eyebrow="Capabilities"
        title="Choose a starting point"
        lead="Open any card for scope, key benefits and what a delivery actually includes."
      />

      <ApproachSection />
      <CTASection />
    </>
  );
}
