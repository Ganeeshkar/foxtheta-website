/**
 * About page content. Edit freely — the page layout adapts to list length.
 */

export const aboutIntro = {
  eyebrow: "About Foxtheta",
  title: "We build the AI that has to work on Monday morning",
  lead: "Foxtheta is an AI development company. We design, build and ship agents, knowledge systems and automation for teams who need results in production — not another proof of concept.",
};

export const story = [
  "Foxtheta is new, and we would rather say so than pretend otherwise. We started the company because of a gap that is easy to see from anywhere in this industry: organisations are spending serious money on AI and getting demos back. The models are capable. The prototypes look impressive. Very little of it survives contact with real data, real permissions, real volume and real consequences for being wrong.",
  "So we built the company around the unglamorous half of that problem. Retrieval quality, evaluation harnesses, tool design, failure modes, audit trails, cost per transaction, and the human escalation paths that make autonomy safe. It is less exciting than a launch video, and it is the entire difference between a system that gets adopted and one that gets quietly switched off in month three.",
  "What being early means for you is straightforward: small scope, close attention, and terms that reflect the fact that we are building a reputation rather than trading on one. We scope tightly, pilot on your actual data, report against metrics agreed up front, and hand over code your engineers can own. Strategic intelligence, applied where it changes the number — that is the whole business.",
];

export const values = [
  {
    id: "evidence",
    icon: "trending",
    title: "Evidence over enthusiasm",
    description:
      "We baseline before we build and report against it after. If a metric does not move, we say so and change the approach.",
  },
  {
    id: "ownership",
    icon: "shield",
    title: "You own everything",
    description:
      "Code, prompts, evaluation sets and infrastructure are yours from the first commit. No proprietary runtime, no lock-in, no hostage situations.",
  },
  {
    id: "scope",
    icon: "target",
    title: "Small scope, real stakes",
    description:
      "We would rather ship one workflow that genuinely works than a platform that impresses in a slide and stalls in rollout.",
  },
  {
    id: "clarity",
    icon: "chat",
    title: "Plain language",
    description:
      "You will always know what we are building, what it costs, what it cannot do, and what we are uncertain about. No jargon used as cover.",
  },
];

/**
 * Company timeline — currently unused.
 *
 * Foxtheta was founded in 2026, so there is no history worth a timeline yet.
 * The About page does not render this. Once there are real milestones,
 * add them here and restore the timeline section in src/pages/About.jsx.
 */
export const milestones = [];
