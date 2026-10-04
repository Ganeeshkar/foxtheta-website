import PageHero from "../components/PageHero/PageHero";
import PageScene from "../components/MotionDiagram/PageScene";
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
        title="Six practice areas, one delivery team"
        lead="We scope narrowly and build deeply. Most projects combine two or three of these into a single roadmap with one accountable team behind it."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        visual={<PageScene kind="services" />}
        accent="green"
      />

      <ServicesGrid
        eyebrow="Capabilities"
        title="Choose a starting point"
        lead="Explore the scope, key benefits and deliverables for each service."
        showCta={false}
      />

      <ApproachSection />
      <CTASection />
    </>
  );
}
