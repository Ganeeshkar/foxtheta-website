/**
 * Home page FAQ.
 * Edit, reorder or add entries freely — the accordion adapts to the list.
 * Keep answers to 2–4 sentences so the collapsed list stays scannable.
 */

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Common questions",
  lead: "Asked before you ask.",
};

export const faqs = [
  {
    id: "cost",
    question: "How much does this cost?",
    answer:
      "The strategy call is free. The diagnostic is a fixed four-figure engagement. First agents and automations typically cost the equivalent of one quarter of a senior hire — and unlike a hire, they work nights, weekends, and holidays. MVPs are quoted from the signed spec. Every number is fixed in writing before work begins.",
  },
  {
    id: "stack",
    question: "Which AI models and tech do you use?",
    answer:
      "We're model-agnostic on purpose: during the blueprint stage we benchmark leading models against your actual tasks and pick on evidence — accuracy, speed, cost, and data-residency needs. Engineering is done in mature, widely supported languages and frameworks, deployed to your cloud where possible, and integrated with the tools you already run.",
  },
  {
    id: "security",
    question: "Is our data safe?",
    answer:
      "Data boundaries are agreed in writing before any code: where data lives, which agents can read what, retention, and deletion. Agents get least-privilege credentials. Your data is never used to train public models. Your security team gets the permission map, not a trust-us paragraph.",
  },
  {
    id: "mistakes",
    question: "What if the AI makes a mistake?",
    answer:
      "We design for it rather than pretend it won't happen: consequential actions (money, deletions, customer-facing sends) pause for one-click human approval; every action is logged, and anything that can be rolled back, is; and agents are re-tested nightly against benchmark tasks so drift is caught by us, not by your customers.",
  },
  {
    id: "jobs",
    question: "Will this replace our team?",
    answer:
      "Our agents take over queues, not jobs — the repetitive 65% that nobody was hired to love. Teams end up doing more of the judgment work they were actually hired for. We're straightforward about this in scoping: if the math only works as a headcount story, we'll say so plainly and let you make the human decisions.",
  },
];
