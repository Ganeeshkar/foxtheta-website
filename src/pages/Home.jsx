import Hero from "../components/Hero/Hero";
import ServicesGrid from "../components/ServicesGrid/ServicesGrid";
import ApproachSection from "../components/ApproachSection/ApproachSection";
import FaqSection from "../components/FaqSection/FaqSection";
import CTASection from "../components/CTASection/CTASection";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Strategic Intelligence. Real Impact.",
    "Foxtheta builds production-grade AI agents, RAG knowledge systems, workflow automation and custom AI applications that move real business metrics."
  );

  return (
    <>
      <Hero />
      <ServicesGrid />
      <ApproachSection />
      <FaqSection />
      <CTASection />

      {/*
        ── Intentionally not rendered ──────────────────────────────────
        Foxtheta is a new company with no track record yet, so every
        section that would claim one is switched off rather than filled
        with invented proof. The components are all still in place —
        drop them back into this file once the content is real:

          <TrustStrip />       once you have client logos
          <OutcomesSection />  once you have case studies with real numbers
          <FeaturedPanel />    once you have a named product to feature
          <StatsSection />     once the counters are true
          <TestimonialsSection /> once clients have given you quotes

        Their data lives in src/data/ (trustLogos, outcomesData,
        statsData, testimonialsData) and is still placeholder content.
        ─────────────────────────────────────────────────────────────── */}
    </>
  );
}
