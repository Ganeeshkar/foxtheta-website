/**
 * "Outcomes across industries" cards on the home page.
 * PLACEHOLDER case studies — replace with real, approved engagements.
 * `serviceSlug` links each card to the matching /services/:slug page.
 */
export const outcomes = [
  {
    id: "support",
    industry: "SaaS & Technology",
    title: "68% of Support Tickets Resolved Without a Human",
    description:
      "A permission-aware knowledge agent trained on six years of tickets, docs and release notes now answers first-line queries with citations, and escalates cleanly when confidence drops.",
    metric: "68%",
    metricLabel: "auto-resolved",
    serviceSlug: "rag-knowledge-systems",
    visual: "support",
  },
  {
    id: "claims",
    industry: "Insurance",
    title: "Claims Intake Cut From Three Days to Four Hours",
    description:
      "Document extraction plus a rules-and-model triage pipeline replaced manual rekeying across four systems, with every uncertain case routed to an adjuster review queue.",
    metric: "12x",
    metricLabel: "faster intake",
    serviceSlug: "workflow-automation",
    visual: "claims",
  },
  {
    id: "ops",
    industry: "Logistics",
    title: "Exception Handling Automated Across 40+ Carriers",
    description:
      "An operations agent watches shipment events, drafts carrier communications and books resolutions autonomously inside spend limits, keeping humans on the genuinely hard calls.",
    metric: "40+",
    metricLabel: "carriers connected",
    serviceSlug: "ai-agent-development",
    visual: "ops",
  },
];
