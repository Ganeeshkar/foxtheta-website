/**
 * ============================================================
 * SERVICES — the single source of truth for the services grid
 * and every /services/:slug detail page.
 * ============================================================
 *
 * Add, remove or reorder entries freely; the grid, the header
 * mega-menu, the footer and the routing all read from this file.
 *
 * Field reference
 *   slug        URL segment  → /services/<slug>
 *   title       Card + page heading
 *   icon        Key from src/components/Icon/Icon.jsx
 *   short       2–3 sentences, shown on card hover
 *   tagline     One line under the detail-page heading
 *   overview    Array of paragraphs for the detail page body
 *   benefits    3–5 outcome-focused bullets
 *   included    What ships with the engagement
 *   stack       Tech chips shown on the detail page
 */

export const services = [
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    icon: "agent",
    short:
      "We build autonomous and human-in-the-loop agents that reason over your tools, data and business rules. Each agent ships with guardrails, evaluations and observability so you can trust what it does unsupervised.",
    tagline:
      "Agents that take real actions in your systems — with the guardrails to make that safe.",
    overview: [
      "Most agent projects stall at the demo. A prompt chain that looks impressive in a notebook starts hallucinating tool calls, looping on edge cases, or quietly failing the moment it meets messy production data. Foxtheta builds agents for the second phase — the one where the agent has to be dependable at 3am with no one watching.",
      "We start by mapping the decision your agent is actually replacing or accelerating: what it can see, what it is allowed to do, where a human must stay in the loop, and what 'wrong' costs you. From there we design the tool surface, the memory model and the escalation paths before writing orchestration code. That order matters — it is what separates an agent that scales from a chatbot with extra steps.",
      "Every engagement ships with an evaluation harness built from your own historical cases, structured traces for each run, and cost and latency budgets enforced in code. You get an agent your team can extend, audit and defend in a compliance review — not a black box only we understand.",
    ],
    benefits: [
      "Reliability engineering built in: retries, fallbacks, timeouts and deterministic escalation to a human",
      "Evaluation suites scored against your real historical cases, not synthetic benchmarks",
      "Full traceability — every tool call, input and decision is logged and replayable",
      "Model-agnostic architecture so you can switch or mix providers without a rewrite",
      "Cost and latency ceilings enforced per run, with alerting when behaviour drifts",
    ],
    included: [
      "Agent scope and risk workshop",
      "Tool and API surface design",
      "Orchestration, memory and state layer",
      "Evaluation harness and regression suite",
      "Observability dashboards and runbooks",
      "Team handover and enablement sessions",
    ],
    stack: ["LangGraph", "OpenAI", "Anthropic", "Temporal", "Postgres", "Redis"],
  },

  {
    slug: "rag-knowledge-systems",
    title: "RAG & Knowledge Systems",
    icon: "knowledge",
    short:
      "Turn scattered documents, wikis and databases into a retrieval layer your teams and agents can actually rely on. We tune ingestion, chunking, ranking and citations until answers are accurate and traceable to source.",
    tagline:
      "Answers your team trusts, grounded in your own content, with citations every time.",
    overview: [
      "Retrieval quality — not model choice — decides whether a knowledge assistant gets adopted or abandoned. It is a common and expensive mistake: teams upgrade to a pricier model hoping to fix answers that were really being sabotaged by bad chunking, stale indexes and unweighted duplicate documents. We fix the retrieval layer first.",
      "Foxtheta designs the full pipeline: connectors into your document stores and databases, parsing that survives tables and scanned PDFs, chunking strategies matched to how your content is actually structured, hybrid semantic and keyword search, and re-ranking tuned against a graded question set drawn from real user queries.",
      "The result is a knowledge system with measurable accuracy, permission-aware retrieval so people only ever see what they are cleared to see, and inline citations that let any answer be verified in one click. It plugs into your intranet, your support desk, or directly into the agents we build for you.",
    ],
    benefits: [
      "Measurable answer accuracy tracked against a graded evaluation set you own",
      "Permission-aware retrieval that respects existing access controls document by document",
      "Inline citations and source links on every answer to make verification trivial",
      "Incremental re-indexing so new and updated content is searchable within minutes",
      "Hybrid semantic plus keyword search that handles part numbers, codes and acronyms",
    ],
    included: [
      "Content audit and source connector build",
      "Parsing, chunking and embedding pipeline",
      "Vector and hybrid search infrastructure",
      "Re-ranking and prompt grounding layer",
      "Graded evaluation set and accuracy reporting",
      "Search or chat interface, or API for your own",
    ],
    stack: ["pgvector", "Elasticsearch", "LlamaIndex", "Cohere Rerank", "S3"],
  },

  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: "automation",
    short:
      "We find the repetitive, judgement-light work buried in your operations and automate it end to end. Rules where rules are enough, models where they are not, and clean handoffs to people where it matters.",
    tagline:
      "Take the manual middle out of your operations without losing control of it.",
    overview: [
      "Every operations team runs on a layer of invisible manual work: rekeying data between systems, triaging inboxes, chasing approvals, reconciling spreadsheets, formatting reports. It rarely appears on a roadmap because no single task is big enough — but together it can consume a third of a team's week.",
      "We start with a process audit that quantifies where the hours actually go, then automate in order of payback. Deterministic steps get deterministic code, because a rule engine that never surprises you beats a model that mostly works. Language and judgement steps get AI, wrapped in confidence thresholds that route anything uncertain to a person instead of guessing.",
      "Automations are built as versioned, monitored workflows with full audit trails — not brittle scripts on someone's laptop. When a downstream system changes its API or a volume spike hits, you get an alert and a queue you can drain, not silent data loss.",
    ],
    benefits: [
      "Process audit that quantifies hours and error rates before a line of code is written",
      "Confidence thresholds that route uncertain cases to humans instead of guessing",
      "Complete audit trail on every run for compliance and dispute resolution",
      "Resilient by design: idempotent steps, retries and replayable failure queues",
      "Live dashboards showing volume, exception rate and hours recovered",
    ],
    included: [
      "Process discovery and opportunity sizing",
      "Workflow design with human-in-the-loop points",
      "Automation build and system integrations",
      "Exception handling and review queues",
      "Monitoring, alerting and audit logging",
      "Operator training and documentation",
    ],
    stack: ["Temporal", "n8n", "Python", "AWS Lambda", "Snowflake"],
  },

  {
    slug: "custom-ai-applications",
    title: "Custom AI Applications",
    icon: "sparkle",
    short:
      "Purpose-built products where the intelligence is the point — copilots, document processors, forecasting tools and decision engines. Designed around your workflow instead of forcing your workflow into someone else's SaaS.",
    tagline:
      "When off-the-shelf almost fits, the gap is usually where your advantage lives.",
    overview: [
      "Generic AI tools are built for the average of every company. The places where your business is genuinely different — your pricing logic, your underwriting rules, your clinical protocols, your inspection criteria — are exactly the places a horizontal product cannot reach. That gap is worth building for.",
      "Foxtheta designs and ships custom AI applications end to end: the model work, the data pipelines, the interface your team lives in every day, and the deployment that keeps it running. We are as serious about the interface as the intelligence, because an accurate model behind a confusing screen still gets abandoned in month two.",
      "We work in short, visible increments. A focused pilot in the first weeks proves the value on your real data, then we harden and expand from there. You own the code, the models and the infrastructure at every stage — there is no proprietary runtime holding your product hostage.",
    ],
    benefits: [
      "Built around your actual workflow and vocabulary, not a generic template",
      "Pilot on real data within weeks so value is proven before the full build",
      "You own the code, the prompts, the weights and the infrastructure outright",
      "Interfaces designed for daily operational use, not demo-day screenshots",
      "Cost modelled per transaction so unit economics are clear before you scale",
    ],
    included: [
      "Discovery, scoping and success metrics",
      "Product and interaction design",
      "Model selection, tuning and evaluation",
      "Full-stack application build",
      "Cloud deployment and CI/CD",
      "Post-launch iteration and support",
    ],
    stack: ["React", "FastAPI", "PyTorch", "Postgres", "Docker", "AWS"],
  },

  {
    slug: "integrations",
    title: "Integrations",
    icon: "integrations",
    short:
      "AI is only as useful as the systems it can reach. We connect models and agents to your CRM, ERP, data warehouse, ticketing and internal APIs with reliable, secure, well-documented plumbing.",
    tagline:
      "The unglamorous layer that decides whether your AI programme actually lands.",
    overview: [
      "An agent that cannot read your CRM or write to your ticketing system is a very expensive text generator. Integration work is where most AI initiatives quietly lose their timeline — legacy SOAP endpoints, undocumented internal services, rate limits, inconsistent identifiers and permission models that were never designed to be called by software.",
      "We treat integration as a first-class engineering problem rather than glue code. Every connector we build is typed, tested, rate-limit aware and idempotent, with schema drift detection so an upstream field rename surfaces as an alert instead of a silent corruption three weeks later.",
      "We also handle the identity and authorisation layer properly: service accounts with least privilege, secret rotation, and per-user token exchange where an agent must act on behalf of a specific person. Your security team gets a clear diagram of exactly what touches what, and why.",
    ],
    benefits: [
      "Reliable connectors with retries, backoff and idempotency as standard",
      "Schema drift detection that alerts before bad data reaches your models",
      "Least-privilege service accounts and managed secret rotation",
      "Bi-directional sync where you need it, one-way where that is safer",
      "Clear architecture diagrams and API docs your team can maintain",
    ],
    included: [
      "Systems and data-flow mapping",
      "Authentication and authorisation design",
      "Connector build and hardening",
      "Data mapping and transformation layer",
      "Monitoring, alerting and error queues",
      "Documentation and maintenance handover",
    ],
    stack: ["REST", "GraphQL", "Webhooks", "Kafka", "Airbyte", "OAuth 2.0"],
  },

  {
    slug: "web-mobile-applications",
    title: "Web & Mobile Applications",
    icon: "devices",
    short:
      "Fast, accessible, well-engineered products across web, iOS and Android. Whether or not AI is involved, we build interfaces that feel immediate and codebases your team can keep shipping from.",
    tagline:
      "Product engineering that stays fast on day one and on release ninety.",
    overview: [
      "AI features still have to live inside a product, and the quality of that product decides whether anyone comes back. Foxtheta builds web and mobile applications with the same engineering standards we apply to model work: measured performance budgets, real accessibility, sensible state management and tests where they earn their keep.",
      "On web we build with React and modern tooling, targeting fast first loads and interactions that respond instantly even over poor connections. On mobile we ship cross-platform with React Native when speed to market matters, and go native where the hardware or platform integration demands it.",
      "We care a great deal about the second year of a codebase. Clear module boundaries, typed interfaces, meaningful component libraries and CI that catches regressions mean your team inherits something they can move quickly in — rather than a codebase they are afraid to touch.",
    ],
    benefits: [
      "Performance budgets enforced in CI, not measured once at launch",
      "WCAG-conscious accessibility including keyboard and screen-reader flows",
      "Design systems and component libraries that keep future work consistent",
      "Offline-tolerant behaviour and graceful degradation on weak networks",
      "A codebase documented and structured for your team to own",
    ],
    included: [
      "UX and interface design",
      "Design system and component library",
      "Web application build",
      "iOS and Android application build",
      "Automated testing and CI/CD",
      "App store release support",
    ],
    stack: ["React", "React Native", "Vite", "TypeScript", "Node.js", "Expo"],
  },

  {
    slug: "saas-platform-development",
    title: "SaaS Platform Development",
    icon: "cloud",
    short:
      "Multi-tenant platforms built to be sold: authentication, billing, roles, analytics and admin tooling from day one. We help founders and enterprise teams get from concept to a product that can carry paying customers.",
    tagline:
      "The platform foundations that are painful to retrofit — built in from the start.",
    overview: [
      "Every SaaS product needs the same unglamorous foundations before it can take a single customer: tenant isolation, authentication and SSO, role-based permissions, subscription billing, usage metering, audit logs and an admin console your support team can actually use. Building these late is expensive; building them wrong is worse.",
      "Foxtheta builds those foundations properly and early, then layers your differentiated product on top. We design tenancy for the scale you are realistically heading toward, wire metering to your pricing model so usage-based plans are possible later, and make enterprise requirements like SSO and audit trails available before your first large prospect asks for them.",
      "We also build for the operational reality of running a platform — staged rollouts, feature flags, tenant-level configuration, sensible on-call signals and a support console that resolves customer issues without a database query. The goal is a product your team can run, sell and evolve without us.",
    ],
    benefits: [
      "Secure multi-tenant architecture with isolation verified by automated tests",
      "Subscription billing and usage metering wired to your pricing model",
      "SSO, RBAC and audit logging ready before enterprise buyers ask",
      "Feature flags and staged rollouts for safe continuous shipping",
      "Admin and support tooling that removes engineers from the support path",
    ],
    included: [
      "Platform and tenancy architecture",
      "Authentication, SSO and RBAC",
      "Billing, plans and usage metering",
      "Core product build",
      "Admin console and support tooling",
      "Infrastructure, CI/CD and observability",
    ],
    stack: ["Node.js", "Postgres", "Stripe", "Auth0", "Kubernetes", "Terraform"],
  },
];

/** Look up one service by its URL slug. Returns undefined if not found. */
export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
