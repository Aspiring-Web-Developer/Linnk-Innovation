/**
 * Complete Service Data for all 6 Linnk Innovation Hub Service Pages
 * Extracted and structured directly from the live website
 */



/* ───────── What We Deliver: content + images ─────────
   Images live in /public/WWD, e.g. "AI WWD-1". No extension needed (jpg/png auto-detected). */
const wwd = (folder, n) => `/WWD/${folder} WWD-${n}`;
// All 8 images of a WWD set: "<set> WWD-1" … "<set> WWD-8" (extension auto-detected)
const wwdSet = (folder) =>
  Array.from({ length: 8 }, (_, i) => `/WWD/${folder} WWD-${i + 1}`);

const item = (n, folder, title, subtitle, desc, checklist, checklistLabel) => ({
  num: String(n).padStart(2, '0'),
  title,
  subtitle,
  desc,
  checklist,
  image: wwd(folder, n),
  ...(checklistLabel ? { checklistLabel } : {}),
});

/* AI & Intelligent Automation (also used by Managed QA) */
const AI_DELIVERABLES = [
  item(1, 'AI', 'Enterprise AI Strategy & Consulting', 'Turn AI ambition into an executable roadmap',
    'Most enterprises don’t have an AI problem. They have a prioritisation problem. We pinpoint the use cases that move revenue, cost and risk, then build the architecture, roadmap and governance to deliver them at scale.',
    ['AI readiness and data maturity assessment', 'Use-case discovery and ROI modelling', 'AI architecture and platform strategy', 'Responsible AI and governance advisory']),
  item(2, 'AI', 'Generative AI Solutions', 'Ship GenAI that earns its keep',
    'We design, build and deploy generative AI applications that understand your business: enterprise copilots, knowledge assistants, content engines and AI screening agents that read every resume and shortlist on true fit in minutes.',
    ['LLM selection, prompt engineering and fine-tuning', 'Enterprise copilots and virtual assistants', 'AI-powered talent screening and matching', 'Semantic search and intelligent reranking']),
  item(3, 'AI', 'Agentic AI Frameworks', 'AI that doesn’t wait to be asked',
    'Linnk’s agentic frameworks plug straight into your ERP, CRM, ATS and ITSM platforms. Agents sense signals, make contextual decisions and orchestrate work across systems and teams, with enterprise-grade governance built in.',
    ['AI agents triggering workflows from live data signals', 'Autonomous ticket triage and routing', 'Multi-agent orchestration across sales, HR and finance ops', 'Recruiter and operations co-pilots that act, not just answer'],
    'Use cases include:'),
  item(4, 'AI', 'Intelligent Document Processing', 'Kill manual data entry for good',
    'Invoices, contracts, KYC files, forms and claims: our document intelligence reads them all, extracts what matters and pushes clean, validated data straight into your systems. Schema-driven AI means new document types go live in a fraction of the time of traditional model training.',
    ['Invoice, contract and form data extraction', 'Claims intake and eligibility pre-checks', 'Document classification and validation', 'Exception handling with smart human review'],
    'Capabilities include:'),
  item(5, 'AI', 'Conversational Analytics', 'Your data, answering back',
    'Ask any question in plain English. Get live answers from your operational data in seconds, as charts, tables or summaries, right inside your CRM, ERP or portal. No dashboards to build. No analyst queue.',
    ['Natural-language querying over live databases', 'Auto-generated charts, tables and insights', 'Embedded analytics inside existing apps', 'Role-based, governed data access'],
    'Capabilities include:'),
  item(6, 'AI', 'Predictive AI & Recommendation Engines', 'See what matters before it happens',
    'ML models trained on your historical outcomes score every lead, task, case and risk, and recommend the next best action with the reasoning to back it. Your teams always know what to do next.',
    ['Lead, task and risk scoring', 'Next-best-action and product recommendations', 'Explainable ranking combining rules and ML', 'Continuous model monitoring and retraining'],
    'Capabilities include:'),
  item(7, 'AI', 'Voice AI', 'Every call handled. Every conversation scaled.',
    'AI voice agents run thousands of structured conversations in parallel: candidate screening, appointment confirmations, service intake. The same engine powers AI voice coaching, so sales and service teams practise real scenarios against your own playbooks, anytime.',
    ['AI voice screening and intake agents', 'Natural speech-to-text and text-to-speech pipelines', 'AI role-play coaching with scored feedback', 'Telephony and contact-centre integration'],
    'Capabilities include:'),
  item(8, 'AI', 'AIOps & Intelligent Service Desk', 'Detect, diagnose and resolve before users notice',
    'We unify your monitoring stack into one AI-powered command view, crush alert noise and investigate incidents automatically, attaching root cause and the fix to the ticket before an engineer opens it. Your AI service desk resolves everyday IT requests instantly and routes the rest into ServiceNow, Jira or Freshservice.',
    ['Unified observability with AI-driven insights', 'Alert deduplication and correlation', 'Automated root-cause analysis with approval-gated remediation', '24/7 employee IT self-service'],
    'Capabilities include:'),
];

/* Application Development */
const APPLICATION_DELIVERABLES = [
  item(1, 'Application', 'Product Discovery & Strategy', 'Build the right thing first',
    'Discovery workshops turn a rough idea into a clear product definition, a prioritised feature set and a scoped MVP, so every week of build goes into what users will actually pay for.',
    ['Discovery workshops and product definition', 'Business and process assessment', 'Feature prioritisation and MVP scoping', 'Product roadmap and architecture plan']),
  item(2, 'Application', 'UX/UI Design & Prototyping', 'Design that users get on first click',
    'User journeys, wireframes and clickable prototypes put the product in users’ hands before code is written. Accessible design systems keep every screen on-brand and consistent across devices.',
    ['User research and journey mapping', 'Wireframes and interactive prototypes', 'Design systems aligned to your brand', 'WCAG-aligned accessible interfaces']),
  item(3, 'Application', 'MVP Development', 'Prove it in the market, fast',
    'We take your scoped product from proof of concept to a working MVP real users can try, so you validate demand and raise confidence before you invest in the full build.',
    ['Proof of concept for the riskiest features', 'MVP build on a production-ready foundation', 'Analytics to measure early usage', 'Fast iteration from user feedback']),
  item(4, 'Application', 'Full-Stack Web Application Development', 'Products built to scale with your users',
    'Secure, high-performing web applications on React, Next.js and Nest.js, built API-first and modular, so new features ship without rework and the platform grows as your user base does.',
    ['Full-stack development on React, Next.js and Nest.js', 'API-first, modular architecture', 'Customer portals and self-service platforms', 'Secure authentication and role-based access']),
  item(5, 'Application', 'Multi-Tenant SaaS Platforms', 'One codebase. Every customer. Fully isolated.',
    'We build SaaS platforms that serve many customers securely from a single application, with tenant-aware access, strict data isolation and per-customer configuration, so you scale revenue without scaling cost.',
    ['Multi-tenant architecture with data isolation', 'Tenant-aware access control', 'Configurable, per-customer experiences', 'Subscription-ready platform foundations']),
  item(6, 'Application', 'E-Commerce & Digital Platforms', 'Commerce built to convert and scale',
    'We build and replatform e-commerce and multi-channel web platforms on one consistent architecture and design system, with payments, search, marketplace and localisation wired in.',
    ['E-commerce build and replatforming', 'Multi-channel platform architecture', 'Payment gateway and search integration', 'Localisation for regional markets']),
  item(7, 'Application', 'Embedded Analytics & Dashboards', 'Give users their data, inside your product',
    'Power BI dashboards built right into your application let customers see and act on their own data, with no separate BI tool and no extra logins, so your product becomes the place decisions get made.',
    ['Embedded Power BI reporting', 'Customer-facing dashboards and KPIs', 'Role and tenant-aware data views', 'Self-service insight inside the product']),
  item(8, 'Application', 'Quality Engineering & Product Support', 'Keep every release fast, stable and improving',
    'Automated regression testing on every release, recurring load and performance checks and full-stack monitoring keep your product healthy as usage grows. After launch, we keep shipping enhancements.',
    ['Automated functional and regression testing', 'Load, stress and performance testing', 'Application monitoring and alerting', 'Continuous enhancement releases']),
];

/* Cloud & Security Operations */
const CLOUD_DELIVERABLES = [
  item(1, 'Cloud', 'Cloud Infrastructure Migration', 'Exit the data centre. Without the drama.',
    'We move your servers, databases and applications from on-prem or another cloud onto AWS, choosing lift-and-shift, re-platform or refactor workload by workload. A hybrid bridge keeps the business running mid-move, and a pilot wave proves the plan before the big shift.',
    ['Discovery, assessment and migration wave planning', 'Lift-and-shift, re-platforming and refactoring', 'Hybrid cloud bridge during transition', 'Post-migration cost and performance tuning']),
  item(2, 'Cloud', 'DevOps & CI/CD Automation', 'From commit to production. On autopilot.',
    'We build pipelines that test, package and release your code automatically, killing manual handoffs and the errors that come with them. Canary and blue/green releases let you ship new features with confidence, across cleanly separated dev, staging and production.',
    ['Source-to-deploy pipeline automation', 'Canary and blue/green release strategies', 'Multi-environment release management', 'Secrets management and image vulnerability scanning']),
  item(3, 'Cloud', 'Infrastructure as Code', 'Stop clicking. Start codifying.',
    'Your entire environment (networks, security rules, servers, storage) defined as code, version-controlled and rebuildable in minutes. Multi-account landing zones with guardrails from day one, test environments that mirror production exactly, and reusable modules so every new project starts on a proven foundation.',
    ['Multi-account AWS landing zones with Control Tower', 'Dev, test and prod environment parity', 'Reusable, standardised infrastructure modules', 'Policy-as-code guardrails and drift detection']),
  item(4, 'Cloud', 'Monitoring & Observability', 'See everything. Catch issues before customers do.',
    'One view of your infrastructure and application health: centralised logs, metrics and traces, proactive alerts with automated remediation where possible, and cost tracked alongside performance so nothing quietly gets slower or pricier.',
    ['Centralised logging, metrics and tracing', 'Proactive alerting and incident-response automation', 'Cost and performance monitoring', 'Monthly performance reporting']),
  item(5, 'Cloud', 'Security & Compliance Automation', 'Continuous security. Always audit-ready.',
    'Replace periodic manual reviews with guardrails that watch your posture in real time, flag control gaps and block risky configurations before they ship. Controls are mapped to the standards your business answers to, from CIS benchmarks to your own policies.',
    ['Cloud security posture management', 'Automated compliance checks (CIS, Well-Architected and more)', 'Code, container and configuration scanning (SAST, DAST)', 'Policy-as-code enforcement in your pipelines']),
  item(6, 'Cloud', 'Disaster Recovery & Backup', 'When things break, you’re back in business.',
    'Automated backups, a geographically separate standby for critical systems, and recovery plans that are tested regularly, not assumed. Your recovery targets are defined, engineered and proven.',
    ['DR strategy built around your RTO and RPO', 'Automated backup policies across databases, storage and compute', 'Multi-region failover setup', 'Scheduled DR drills and restore testing']),
  item(7, 'Cloud', 'ITIL Process & IT Service Management', 'Every incident handled. Every change controlled.',
    'ITIL-aligned incident, request, change and problem management across cloud, on-prem and hybrid, covering software, hardware and network operations under one governance model, inside the ITSM tool you already use.',
    ['Incident and major incident management', 'Change management and CAB governance', 'Problem management and root-cause analysis', 'Network operations across LAN/WAN, firewalls and load balancers']),
  item(8, 'Cloud', 'Managed Cloud Operations', 'We build it. Then we run it with you.',
    'Every engagement can roll straight into ongoing operations: optimisation, pipeline and module maintenance, drift remediation, compliance monitoring, DR drills and SLA reporting, with a monthly continual-improvement review to keep your cloud getting better.',
    ['Ongoing cost and performance optimisation', 'Continuous compliance and quarterly security reviews', 'SLA and OLA reporting', 'Monthly continual service improvement reviews']),
];

/* Digital Transformation & Modernisation */
const DIGITAL_DELIVERABLES = [
  item(1, 'Digital trans', 'Modernisation Assessment & Roadmap', 'Know exactly what to fix, and in what order',
    'Before anything gets rewritten, we map your application estate, its dependencies and its risks, then build a staged roadmap that modernises what matters most first.',
    ['Application portfolio discovery', 'Current-state architecture review', 'Risk and dependency mapping', 'Staged modernisation roadmap']),
  item(2, 'Digital trans', 'Technical Advisory & Architecture Review', 'A second opinion before you commit',
    'Not ready for a full programme? Our architects review your current design, pressure-test your plans and give you clear, prioritised recommendations, with no build team attached.',
    ['Architecture and design evaluation', 'Target-state architecture design', 'Refactor vs. rebuild vs. replace guidance', 'Security and scalability review']),
  item(3, 'Digital trans', 'Monolith to Microservices', 'Release one part without risking the whole',
    'We break large, tightly coupled applications into independently deployable services, one module at a time, so your teams ship faster, scale what’s busy and stop fearing every release.',
    ['Domain-driven service decomposition', 'Incremental strangler-pattern migration', 'Independent deployment for every service', 'Testing and security validation at each stage']),
  item(4, 'Digital trans', 'API-First Integration', 'Make old and new systems work as one',
    'Clean, secure APIs connect your legacy platforms, cloud services and third-party tools, so data flows reliably and every new system plugs in without another custom patch.',
    ['API-first integration architecture', 'Legacy-to-cloud and third-party connectors', 'Secure API gateway patterns', 'Audit logging on every integration point']),
  item(5, 'Digital trans', 'Enterprise Identity & Single Sign-On', 'One login. Every system. Full control.',
    'Scattered logins frustrate users and weaken security. We centralise identity with OpenID Connect and OAuth 2.0, so people sign in once and access is governed consistently across every application.',
    ['Single sign-on across applications', 'Centralised identity with Keycloak and OIDC', 'Role-based access control design', 'Integration with your existing identity provider']),
  item(6, 'Digital trans', 'Event-Driven Architecture', 'Decouple systems so each one scales on its own',
    'We replace brittle point-to-point calls with event-driven messaging, so services react in real time, absorb traffic spikes and fail without taking others down with them.',
    ['Event-driven design with Kafka and RabbitMQ', 'Asynchronous service communication', 'Caching and data store optimisation', 'Resilience patterns for graceful failure']),
  item(7, 'Digital trans', 'Cloud-Native Deployment', 'Ship modernised apps the modern way',
    'Modernised services run in containers on Kubernetes with automated CI/CD, so releases stop being big, risky events and become routine. Full cloud migration and infrastructure sit with our Cloud & SecOps team.',
    ['Containerisation with Docker', 'Kubernetes orchestration', 'CI/CD pipelines for every service', 'Encryption in transit and at rest']),
  item(8, 'Digital trans', 'Quality Engineering & Managed Applications', 'Keep modernised systems fast, stable and improving',
    'Automated regression testing on every release, recurring load and performance checks, and full-stack monitoring keep your platform healthy as it grows. We stay on to modernise the remaining modules, step by step.',
    ['Automated functional and regression testing', 'Load, stress and performance testing', 'Application and infrastructure monitoring', 'Incremental modernisation of remaining modules']),
];

/* Data & Decision Intelligence */
const DATA_DELIVERABLES = [
  item(1, 'Data int', 'Data Engineering & Pipelines', 'Bring every source into one reliable flow',
    'We build pipelines that pull data from your operational systems, applications and infrastructure, aggregate it and land it where your teams can use it, on schedule or as it streams in.',
    ['Data ingestion from operational systems and APIs', 'Telemetry pipelines and data aggregation', 'Event streaming and messaging pipelines', 'Data platform design']),
  item(2, 'Data int', 'Tracking Architecture', 'Capture the right data from the start',
    'Bad decisions often start with bad tracking. We design the event and tracking architecture behind your products and platforms, so every click, transaction and system event is captured cleanly and consistently.',
    ['Event and tracking plan design', 'Consistent naming and data schemas', 'Product and platform instrumentation', 'Tracking validation and governance']),
  item(3, 'Data int', 'Data Quality & Enrichment', 'Numbers your teams stop questioning',
    'Automated checks catch missing, duplicated and inconsistent data before it reaches a dashboard, and enrichment fills the gaps, so every report starts from data people trust.',
    ['Automated data quality rules and checks', 'Deduplication and standardisation', 'Data enrichment from internal and external sources', 'Quality monitoring and alerting']),
  item(4, 'Data int', 'BI, Dashboards & Unified Reporting', 'One view of the business, for every team',
    'We replace scattered spreadsheets and conflicting reports with unified dashboards built on shared definitions, so leadership, operations and finance all read from the same numbers.',
    ['Executive and operational dashboards', 'Unified reporting across systems', 'Shared KPI definitions', 'Power BI and Grafana implementation']),
  item(5, 'Data int', 'Embedded & Operational Reporting', 'Insight where the work happens',
    'Reports and dashboards built right into your applications and portals give users their own data without a separate BI tool, so decisions happen inside the workflow, not after it.',
    ['Embedded Power BI in apps and portals', 'Customer-facing and role-based views', 'Operational reporting inside workflows', 'Scheduled and automated reports']),
  item(6, 'Data int', 'Conversational Analytics (Ask Your Data)', 'Ask a question. Get the answer.',
    'Business users ask questions in plain English and get live answers from your operational data as charts, tables or summaries. No SQL, no analyst queue. It’s live in production today, inside the Linnk platform.',
    ['Natural-language questions over live data', 'Automatic charts, tables and summaries', 'Embedding in your CRM, ERP or portal', 'Role-based access to data']),
  item(7, 'Data int', 'Predictive & Trend Analytics', 'See what’s coming, not just what happened',
    'Capacity and trend analytics show where demand, cost and load are heading, and ML scoring ranks leads, cases and risks by what matters most, so teams act before problems land.',
    ['Capacity and trend analytics', 'Forecasting for demand and load', 'ML scoring and prioritisation', 'Decision-ready recommendations']),
  item(8, 'Data int', 'Observability & Service Analytics', 'Know how your systems and services really perform',
    'End-to-end monitoring and SLA telemetry turn system data into service insight: what’s slow, what’s failing, and whether you’re meeting the commitments your customers count on.',
    ['End-to-end monitoring and observability', 'SLA telemetry and service analytics', 'Unified operational dashboards', 'Alerting on performance and data health']),
];



/* ───────── How We Work: content + images ─────────
   Images live in /public/HWW, e.g. "AI-HWW-1". Extension is auto-detected. */
const hww = (prefix, n) => `/HWW/${prefix}-${n}`;

/* AI & Intelligent Automation (also used by Managed QA) */
const AI_HWW = {
  label: 'How We Do It',
  headline: 'Our Proven Process',
  intro:
    "We don't bolt AI on. We build it into the way your enterprise runs. Whether you're boosting productivity, reinventing customer experience or rewiring operations, we move fast with full enterprise alignment.",
  items: [
    { title: 'Advisory to Production', desc: 'Strategy, engineering, MLOps and governance under one roof.', image: hww('AI-HWW', 1) },
    { title: 'Proprietary AI Accelerators', desc: 'Battle-tested pipelines for analytics, screening and document AI get you live faster.', image: hww('AI-HWW', 2) },
    { title: 'Embedded AI Pods', desc: 'Domain-aligned AI engineers working inside your teams.', image: hww('AI-HWW', 3) },
    { title: 'Responsible AI by Default', desc: 'Explainability, auditability and human control built into every system.', image: hww('AI-HWW', 4) },
  ],
};

/* Application Development */
const APPLICATION_HWW = {
  label: 'How We Work',
  headline: 'Our Proven Process',
  intro:
    'We test the idea before we build it, then ship in short, measurable cycles with design, engineering and QA in one team.',
  items: [
    { title: 'Validate Before You Build', desc: 'Prototypes and proofs of concept test the idea with real users before full investment.', image: hww('Application HWW', 1) },
    { title: 'One Team, Design to Code', desc: 'Designers, architects and engineers work side by side, from the first workshop to launch.', image: hww('Application HWW', 2) },
    { title: 'AI-Accelerated Engineering', desc: 'AI-assisted development tools speed up delivery while senior engineers own every decision.', image: hww('Application HWW', 3) },
    { title: 'Quality in Every Release', desc: 'Automated regression and performance testing gate every release.', image: hww('Application HWW', 4) },
  ],
};

/* Cloud & Security Operations */
const CLOUD_HWW = {
  label: 'How We Work',
  headline: 'Our Proven Process',
  intro:
    'We embed with your teams, prove the approach on a pilot, then scale with confidence. Build first, run after, with no handover gap.',
  items: [
    { title: 'AWS-Deep, Cloud-Agnostic', desc: 'AWS as our reference stack, with Azure, Google Cloud and OCI when your environment calls for it.', image: hww('cloud HWW', 1) },
    { title: 'Pilot Before Scale', desc: 'One or two workloads first, so the full rollout runs on proven ground.', image: hww('cloud HWW', 2) },
    { title: 'Security-First by Design', desc: 'Encryption, least-privilege access and policy-as-code baked into every layer.', image: hww('cloud HWW', 3) },
    { title: 'Build, Then Run', desc: 'Every build extends into managed operations, so your cloud keeps improving after go-live.', image: hww('cloud HWW', 4) },
  ],
};

/* Digital Transformation & Modernisation */
const DIGITAL_HWW = {
  label: 'How We Work',
  headline: 'Our Proven Process',
  intro:
    'No big-bang rewrites. We modernise in stages, prove every step, and keep your business running throughout.',
  items: [
    { title: 'Incremental by Design', desc: 'Critical services stay live while we modernise one module at a time.', image: hww('softwere HWW', 1) },
    { title: 'Prove It First', desc: 'Every programme starts with a proof of concept in 3–4 weeks, before you commit to scale.', image: hww('softwere HWW', 2) },
    { title: 'Value Before Age', desc: 'We prioritise by business impact and risk, not by which system is oldest.', image: hww('softwere HWW', 3) },
    { title: 'Secure by Default', desc: 'OIDC identity, role-based access, encryption and audit logging built into every layer.', image: hww('softwere HWW', 4) },
  ],
};

/* Data & Decision Intelligence */
const DATA_HWW = {
  label: 'How We Work',
  headline: 'Our Proven Process',
  intro:
    'The engineers who design and build your data platform are the same people who run and improve it. One team, one line of accountability, from architecture through to daily operations.',
  items: [
    { title: 'Decisions First', desc: 'We start with the decisions your teams need to make, then build the data to support them.', image: hww('Data int HWW', 1) },
    { title: 'Quality Before Dashboards', desc: 'Data is checked, cleaned and enriched before anyone reads a number.', image: hww('Data int HWW', 2) },
    { title: 'Built and Run by One Team', desc: 'Our Kochi Global Capability Centre designs, builds and operates, so nothing gets lost in handover.', image: hww('Data int HWW', 3) },
    { title: 'Secure and Governed', desc: 'Role-based access, governed definitions and monitored pipelines by default.', image: hww('Data int HWW', 4) },
  ],
};



export const SHARED_INDUSTRIES = [
  {
    title: 'Banking & Financial Services',
    desc: 'High-concurrency transactional architectures, rigorous compliance audits, automated reporting, and latency-sensitive platforms.',
  },
  {
    title: 'Insurance & Healthcare',
    desc: 'Zero-downtime prescription and claim processing, HIPAA/GDPR regulatory compliance, and seamless EHR/CRM integrations.',
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Scalable cloud infrastructure designed for seasonal peak traffic, real-time inventory synchronization, and omnichannel telemetry.',
  },
  {
    title: 'SaaS & Technology',
    desc: 'Multi-tenant cloud architectures, automated CI/CD microservices pipelines, feature flagging, and rapid MVP release cycles.',
  },
  {
    title: 'Enterprise IT & Government',
    desc: 'Legacy system modernisation using Strangler Fig patterns, RBAC/OIDC enterprise identity, and continuous vulnerability guardrails.',
  },
  {
    title: 'Manufacturing & Logistics',
    desc: 'IoT telemetry pipelines, real-time predictive analytics, supply chain traceability, and 24/7/365 mission-critical operations.',
  },
];




/* ───────── Key Technologies: logo tables ─────────
   Images live in /public/Key/<folder>/<category>/<file>.png
   keyGroup(folder, categoryHeading, [[fileName, altName], ...], subfolder?)
   subfolder is only needed if the public subfolder name differs from the heading. */
const keyGroup = (folder, category, files, subfolder = category) => ({
  category,
  tools: files.map(([file, name]) => ({
    name,
    logo: `/Key/${folder}/${subfolder}/${/\.(png|jpe?g|webp|svg)$/i.test(file) ? file : file + '.png'}`,
    logoOnly: true,
  })),
});

const AI_KEY_INTRO =
  "Model-agnostic by design. We pick the best model, framework and cloud for every use case, so you're never locked in.";

const AI_KEY = [
  keyGroup('AI', 'LLM Providers', [
    ['Artboard 1 copy 45-8', 'OpenAI'],
    ['Artboard 1 copy 46-8', 'Anthropic'],
    ['Artboard 1 copy 47-8', 'Meta Llama'],
    ['Artboard 1 copy 48-8', 'Mistral'],
    ['Artboard 1 copy 49-8', 'Azure OpenAI'],
    ['Artboard 1 copy 50-8', 'Google Gemini'],
  ]),
  keyGroup('AI', 'Frameworks & Tooling', [
    ['Artboard 1 copy 51-8', 'SageMaker'],
    ['Artboard 1 copy 52-8', 'LangChain'],
    ['Artboard 1 copy 53-8', 'LlamaIndex'],
    ['Artboard 1 copy 54-8', 'Hugging Face'],
    ['Artboard 1 copy 55-8', 'PyTorch'],
    ['Artboard 1 copy 56-8', 'scikit-learn'],
  ]),
  keyGroup('AI', 'Data & Observability', [
    ['Artboard-1-copy-57-8', 'PostgreSQL'],
    ['Artboard-1-copy-58-8', 'Vector Databases'],
    ['Artboard-1-copy-60-8', 'Grafana'],
    ['Artboard-1-copy-118', 'Prometheus'],
  ]),
  keyGroup('AI', 'Integration Layers', [
    ['Artboard 1 copy 61-8', 'Freshservice'],
    ['Artboard 1 copy 62-8', 'Jira'],
    ['Artboard 1 copy 63-8', 'Salesforce'],
    ['Artboard 1 copy 64-8', 'SAP'],
    ['Artboard 1 copy 65-8', 'Microsoft Teams'],
    ['Artboard 1 copy 66-8', 'ServiceNow'],
    ['Artboard 1 copy 67-8', 'Microsoft 365'],
    ['Artboard 1 copy 68-8', 'Slack'],
  ]),
  keyGroup('AI', 'Cloud Platforms', [
    ['Artboard-1-copy-70-8', 'AWS'],
    ['Artboard-1-copy-71-8', 'Azure'],
    ['Artboard-1-copy-72-8', 'Google Cloud'],
    ['Artboard-1-copy-114', 'On-Premise'],
  ]),
];




const APP_KEY = [
  keyGroup('Application', 'Frontend', [
    ['Artboard 1 copy 74', 'React'],
    ['Artboard 1 copy 75', 'Next.js'],
    ['Artboard 1 copy 76', 'TypeScript'],
  ], 'front end'),

  keyGroup('Application', 'Backend & APIs', [
    ['Artboard 1 copy 77', 'Node.js'],
    ['Artboard 1 copy 78', 'Nest.js'],
    ['Artboard 1 copy 79', 'REST APIs'],
  ], 'backend'),

  keyGroup('Application', 'Data', [
    ['Artboard 1 copy 80', 'PostgreSQL'],
    ['Artboard 1 copy 81', 'MongoDB'],
    ['Artboard 1 copy 82', 'Redis'],
  ], 'data'),

  keyGroup('Application', 'Commerce & Integrations', [
    ['Artboard 1 copy 83', 'Payment gateways'],
    ['Artboard 1 copy 84', 'Search & indexing'],
    ['Artboard 1 copy 85', 'Marketplace APIs'],
  ], 'commerce'),

  keyGroup('Application', 'Design', [
    ['Artboard 1 copy 87', 'Figma'],
    ['Artboard 1 copy 88', 'Adobe Creative Cloud'],
  ], 'design'),

  keyGroup('Application', 'Analytics', [
    ['Power-BI-Embedded-White-Logo', 'Power BI (embedded)'],
  ], 'analaytics'),

  keyGroup('Application', 'Engineering Tooling', [
    ['Artboard 1 copy 88', 'CI/CD'],
    ['Artboard 1 copy 89', 'Git'],
    ['Artboard 1 copy 90', 'Claude Code'],
  ], 'engineering'),

  keyGroup('Application', 'Testing & Monitoring', [
    ['Artboard 1 copy 91', 'Playwright'],
    ['Artboard 1 copy 92', 'Grafana k6'],
    ['Artboard 1 copy 93', 'Locust'],
    ['Artboard 1 copy 94', 'Grafana'],
    ['Artboard 1 copy 95', 'New Relic'],
  ], 'test monitoring'),
];








// Icons
/* ───────── Industries We Serve ─────────
   Icons live in /public/IWS/<folder>/<file>.svg
   ind(folder, fileName, title, desc) */
const ind = (folder, file, title, desc) => ({
  title,
  desc,
  icon: `/IWS/${folder}/${/\.(svg|png|webp)$/i.test(file) ? file : file + '.svg'}`,
});

const AI_INDUSTRIES = {
  title: 'Industries We Serve',
  items: [
    ind('AI-icons', 'Test-Icon-1', 'Banking & Financial Services',
      'Document AI, fraud signals and conversational analytics for faster, governed decisions.'),
    ind('AI-icons', 'Icons-SVG_Insurance-Healthcare-08-1', 'Insurance & Healthcare',
      'Claims intake, eligibility pre-checks and AI assistants with human review built in.'),
    ind('AI-icons', 'Icons-SVG_Retail-E-Commerce-03', 'Retail & E-Commerce',
      'Recommendation engines and demand forecasting that act on live operational data.'),
    ind('AI-icons', 'Icons-SVG_Enterprise-IT-Technology-1', 'Enterprise IT & Technology',
      'AIOps and AI service desks that resolve incidents before users notice.'),
    ind('AI-icons', 'Icons-SVG_HR-Staffing-Recruitment-1', 'HR & Staffing',
      'AI screening agents and voice interviews that shortlist on true fit in minutes.'),
    ind('AI-icons', 'Icons-SVG_Manufacturing-Logistics-06', 'Manufacturing & Logistics',
      'Predictive models and AI agents that cut downtime and speed up operations.'),
  ],
};






































/* ───────── FAQ ─────────
   faq: { label, title, items: [{ q, a }] }  (per service page) */
const AI_FAQ = {
  label: 'FAQ',
  title: 'Common Questions',
  items: [
    {
      q: 'Where should an enterprise start with AI?',
      a: 'With the workflow that costs you the most. Our discovery sprint maps your use cases against value and data readiness, and puts a high-impact pilot in motion fast.',
    },
    {
      q: 'Will AI work with our existing systems?',
      a: 'Yes. Our agents and accelerators plug into the CRM, ERP, ATS, ITSM and data platforms you already run. No rip-and-replace.',
    },
    {
      q: 'How do you keep enterprise data secure?',
      a: 'Security is built in, not bolted on. We deploy on cloud, private cloud or self-hosted infrastructure, with role-based access, audit trails and governance from day one.',
    },
    {
      q: 'How much can AI really automate?',
      a: 'More than most teams expect. AI handles the reading, ranking, scoring and investigating at machine speed, while your people keep control of the decisions that matter.',
    },
    {
      q: 'Ready-made or custom-built?',
      a: 'Both. Proprietary accelerators get you live fast; custom engineering makes them fit your data, rules and systems.',
    },
    {
      q: 'What engagement models do you offer?',
      a: 'Fixed-scope pilots, end-to-end delivery, embedded AI pods and fully managed AI operations.',
    },
  ],
};








export const SERVICES_DATA = {
  'managed-qa-services': {
    slug: 'managed-qa-services',
    wwdImages: wwdSet('AI'),
    hww: AI_HWW,
    seo: {
      title: 'Managed Quality Assurance | Linnk Innovation Hub',
      description: 'We test web products end to end. AI speeds up test coverage, automation checks every build, and clear reports tell you whether to ship.',
    },
    hero: {
      badge: '( Creative Ideas ) Managed Quality Assurance',
      title: 'Managed Quality Assurance',
      subtitle: 'We test web products end to end. AI speeds up test coverage, automation checks every build, and clear reports tell you whether to ship.',
      bgVideo: '/The-Innovation-Hub-Why.mp4',
      primaryCta: { label: 'Talk to Our Experts', href: '/contact-us/' },
      secondaryCta: { label: 'Explore Deliverables', href: '#deliverables' },
      heroImages: ['/AI-1', '/AI-2', '/AI-3', '/AI-4'],
    },
overview: {
  label: 'Overview',
  lead: 'Shipping new features is only half the job. The other half is knowing they work, and that they keep working as your product grows. Our managed quality assurance service gives you both in one team. Test engineers and automation engineers work alongside your designers and developers from the first build to release, so each release is checked for function, accessibility and performance, and every go or no-go decision is backed by clear evidence.',
  capabilities: [
    'AI-Accelerated Test Coverage',
    'Functional & UI/UX Testing',
    'Accessibility Testing',
    'Regression Testing',
    'Web & API Test Automation',
    'Performance Testing',
    'CI/CD Test Integration',
    'AI Model Validation',
  ],
},
stats: [
  { value: 150, suffix: '+', label: 'Releases Certified' },
  { value: 10, suffix: 'K+', label: 'Test Cases Automated' },
  { value: 98, suffix: '%', label: 'Defects Caught Before Release' },
],deliverableTags: [
  'AI Strategy & Roadmap',
  'Managed AI Operations',
  'LLM Selection & Fine-Tuning',
  'Custom AI Agents',
  'Multi-Agent Orchestration',
  'Intelligent Document Processing',
  'Predictive & ML Models',
  'Enterprise AI Integration',
  'Responsible AI & Governance',
  'Use-Case Discovery & ROI Modelling',
],
    deliverablesSectionTitle: 'What We Deliver',
deliverablesHeadline: 'AI Engineered for Enterprise Scale',
deliverablesIntro: 'We approach AI with a platform mindset, combining consulting, proprietary accelerators and full-stack engineering to power real-time, intelligent decisions across your enterprise.',
deliverables: AI_DELIVERABLES,
    process: [
      {
        step: '01',
        title: 'Test Early, Plan Clearly',
        desc: 'A comprehensive Test Plan establishes scope, testing types, device coverage, and exit criteria before development begins.',
      },
      {
        step: '02',
        title: 'One Team With Dev & Design',
        desc: 'Testers work embedded within your engineering squads, catching and resolving defects during sprint development.',
      },
      {
        step: '03',
        title: 'AI-Accelerated Testing',
        desc: 'Modern AI tools accelerate scenario generation and test synthesis, while senior human engineers oversee validation.',
      },
      {
        step: '04',
        title: 'Evidence in Every Release',
        desc: 'Execution, defect, and summary reports back every go or no-go release decision with clear, auditable facts.',
      },
    ],

        techTitle: 'Key Technologies We Work With',

    techStack: AI_KEY,
        industries: AI_INDUSTRIES,
    faq: AI_FAQ,
    preCta: {
      headline: 'Release With Evidence, Not Guesswork.',
      desc: "Tell us about your product and release plan. We'll show you what to test first, and how to verify every build with total confidence.",
      buttonLabel: 'Speak to a QA Specialist',
      buttonLink: '/contact-us/',
    },
  },

  'ai-managed-services': {
    slug: 'ai-managed-services',
    wwdImages: wwdSet('AI'),
    hww: AI_HWW,
    seo: {
      title: 'AI & Intelligent Automation | Linnk Innovation Hub',
      description: 'Enterprise AI that thinks, decides and delivers, at scale. Custom LLMs, agentic workflows, document AI, and enterprise automation.',
    },
    hero: {
      badge: '( Creative Ideas ) AI & Intelligent Automation',
      title: 'AI & Intelligent Automation',
      subtitle: 'Enterprise AI that thinks, decides and delivers, at scale.',
      bgVideo: '/The-Innovation-Hub-Why.mp4',
      primaryCta: { label: 'Explore AI Roadmap', href: '/contact-us/' },
      secondaryCta: { label: 'View Capabilities', href: '#deliverables' },
      heroImages: ['/AI-1', '/AI-2', '/AI-3', '/AI-4'],
    },
overview: {
  label: 'AI-native solutions built for the enterprise',
  lead: 'We turn AI from a boardroom ambition into a production reality. Through agentic frameworks, intelligent automation and enterprise-grade AI engineering, we build AI-native systems that read, reason, decide and act inside the platforms you already run. AI isn’t a service line for us. It’s the foundation of how we engineer every system we build: to learn, adapt and outperform.',
  capabilities: [
    'Enterprise AI Consulting',
    'Generative AI',
    'Agentic AI',
    'Intelligent Automation',
    'Conversational Analytics',
    'AIOps',
    'Predictive AI & ML',
    'Voice AI',
    'Document Intelligence',
  ],
},
stats: [
  { value: 20, suffix: '+', label: 'AI Solutions in Production' },
  { value: 125, suffix: '+', label: 'Enterprise Workflows Automated' },
  { value: 50, suffix: 'M+', label: 'Records Processed by AI' },
],
deliverableTags: [
  'Test Strategy & Planning',
  'AI-Accelerated Test Coverage',
  'Functional & UI/UX Testing',
  'Accessibility Testing',
  'Regression Testing',
  'Web & API Test Automation',
  'Performance & Load Testing',
  'CI/CD Test Integration',
  'AI Model Validation',
  'Release Reports & Go/No-Go',
],
    deliverablesSectionTitle: 'What We Deliver',
deliverablesHeadline: 'AI Engineered for Enterprise Scale',
deliverablesIntro: 'We approach AI with a platform mindset, combining consulting, proprietary accelerators and full-stack engineering to power real-time, intelligent decisions across your enterprise.',
deliverables: AI_DELIVERABLES,
    process: [
      {
        step: '01',
        title: 'Advisory to Production',
        desc: 'Strategy, machine learning engineering, MLOps, and compliance governance handled by one cross-functional delivery pod.',
      },
      {
        step: '02',
        title: 'Proprietary AI Accelerators',
        desc: 'Battle-tested pipelines for document extraction, RAG retrieval, and screening agents launch your initial systems 3x faster.',
      },
      {
        step: '03',
        title: 'Embedded AI Pods',
        desc: 'Domain-aligned AI engineers and data scientists work directly alongside your internal engineering and product leads.',
      },
      {
        step: '04',
        title: 'Responsible AI by Default',
        desc: 'Explainability, privacy safeguards, audit logs, and human-in-the-loop verification are built into every production pipeline.',
      },
    ],
    techTitle: 'Key Technologies We Work With',

    techStack: AI_KEY,
        industries: AI_INDUSTRIES,
    faq: AI_FAQ,
    preCta: {
      headline: 'Start With an AI Roadmap, Not a Pilot That Goes Nowhere.',
      desc: "Bring us the problem your teams spend the most time on. We'll map the AI solution, test it in 3–4 weeks, and prove the business case before you scale.",
      buttonLabel: 'Book an AI Architecture Session',
      buttonLink: '/contact-us/',
    },
  },

  'application-engineering': {
    slug: 'application-engineering',
    wwdImages: wwdSet('Application'),
    hww: APPLICATION_HWW,
    seo: {
      title: 'Application Development| Linnk Innovation Hub',
      description: 'We design, build and scale web products end to end. Modern React, Node.js, Go architectures with scalable microservices.',
    },
    hero: {
      badge: '( Creative Ideas ) Application Development',
      title: 'Application Development',
      subtitle: 'We design, build and scale web products end to end. We test the idea with real users first, then ship secure, scalable platforms.',
      bgVideo: '/The-Innovation-Hub-Why.mp4',
      primaryCta: { label: 'Start Your Build', href: '/contact-us/' },
      secondaryCta: { label: 'Explore Modules', href: '#deliverables' },
      heroImages: ['/Application-1', '/Application-2', '/Application-3', '/Application-4', '/Application-5'],
    },
    deliverableTags: [
  'Product Discovery & Strategy',
  'UX/UI Design & Prototyping',
  'MVP Development',
  'Full-Stack Web Applications',
  'Multi-Tenant SaaS Platforms',
  'E-Commerce Platforms',
  'Embedded Analytics & Dashboards',
  'Quality Engineering & Support',
],
overview: {
  label: 'Overview',
  lead: 'Great products need two things: a clear picture of what users want, and engineering that holds up as you grow. Linnk brings both into one team. Designers, architects and full-stack engineers work side by side from the first workshop to launch, so every release is usable, secure and ready to scale.',
  capabilities: [
    'Product Discovery & Strategy',
    'UX/UI Design & Prototyping',
    'Full-Stack Web Applications',
    'MVP Development',
    'Multi-Tenant SaaS',
    'Embedded Analytics',
    'E-Commerce Platforms',
    'Quality Engineering & Support',
  ],
},
stats: [
  { value: 220, suffix: '+', label: 'Products Launched' },
  { value: 1, suffix: 'M+', label: 'Users on Platforms We Built' },
  { value: 100, suffix: '+', label: 'Releases Shipped' },
],
    deliverablesSectionTitle: 'What We Deliver',
    deliverablesHeadline: 'From First Sketch to Scale',
    deliverablesIntro: 'From the first workshop to launch, designers, architects and engineers build products that are usable, secure and ready to scale.',
    deliverables: [
      {
        num: '01',
        title: 'Product Discovery & Strategy',
        subtitle: 'De-risk before writing a single line of code',
        desc: 'We partner with your stakeholders to define user personas, map core journeys, analyze technical dependencies, and build a phased product blueprint.',
        checklist: [
          'Stakeholder alignment and user story mapping',
          'Technical feasibility and architectural trade-off evaluations',
          'Competitive feature benchmarking and MVP scoping',
          'Production release roadmap and milestone budget modeling',
        ],
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '02',
        title: 'UX/UI Design & Rapid Prototyping',
        subtitle: 'Intuitive enterprise interfaces that convert',
        desc: 'Our design team crafts component-based design systems and interactive Figma prototypes, testing complex workflows with real users before production implementation.',
        checklist: [
          'Scalable Figma design systems and token libraries',
          'Clickable high-fidelity interactive user prototypes',
          'Accessibility audits (WCAG 2.1 compliance)',
          'User testing sessions and usability iteration cycles',
        ],
        image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '03',
        title: 'MVP Development',
        subtitle: 'Reach market in 6 to 10 weeks',
        desc: 'We engineer lean, high-velocity minimum viable products built on clean production-ready foundations, allowing you to validate commercial traction rapidly.',
        checklist: [
          'Core feature implementation focused on primary user value',
          'Production-ready authentication, database, and API foundations',
          'Automated CI/CD pipelines deploying to cloud staging',
          'Real-time user feedback telemetry and analytics tracking',
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '04',
        title: 'Full-Stack Web Application Development',
        subtitle: 'Modern, reactive, and built to scale',
        desc: 'We develop robust enterprise web applications using React, Next.js, TypeScript, Node.js, and Go, architected for low latency, security, and developer maintainability.',
        checklist: [
          'Server-side rendering (SSR) and edge-computed web applications',
          'RESTful and GraphQL API design and microservice gateways',
          'Relational and NoSQL database schemas (Postgres, Redis, MongoDB)',
          'Comprehensive automated unit, integration, and e2e testing',
        ],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '05',
        title: 'Multi-Tenant SaaS Platforms',
        subtitle: 'Enterprise-grade isolation and subscription scalability',
        desc: 'Architect multi-tenant software with dedicated database schemas, custom tenant branding, tiered access controls, and automated subscription billing.',
        checklist: [
          'Tenant isolation and role-based data security schemas',
          'Stripe, Chargebee, and bespoke billing integrations',
          'Feature flagging and self-service customer administration',
          'Audit logging, SSO, and compliance export tooling',
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '06',
        title: 'E-Commerce & High-Volume Digital Platforms',
        subtitle: 'Resilient checkout flows under massive traffic peaks',
        desc: 'We engineer custom transactional platforms that maintain sub-second checkout speeds and inventory accuracy during massive seasonal promotional spikes.',
        checklist: [
          'Headless commerce architecture with decoupled frontends',
          'Distributed inventory reservation and cart management',
          'Payment gateway integrations with fraud scoring',
          'Multi-currency, tax calculation, and localized logistics syncing',
        ],
        image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '07',
        title: 'Embedded Analytics & Custom Dashboards',
        subtitle: 'Put actionable insights directly in customer hands',
        desc: 'Incorporate real-time interactive charts, downloadable compliance reports, and analytical workflows directly inside your SaaS web products.',
        checklist: [
          'High-performance chart rendering with D3 and Canvas',
          'Real-time WebSocket data streaming and event tickers',
          'Automated PDF, CSV, and Excel reporting engines',
          'Granular permissions governing analytics data visibility',
        ],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900&auto=format&fit=crop',
      },
      {
        num: '08',
        title: 'Quality Engineering & Product Support',
        subtitle: 'Ongoing velocity with zero tech debt accumulation',
        desc: 'Our long-term maintenance pods take ownership of dependency updates, security patching, SLA monitoring, and regular feature sprint enhancements.',
        checklist: [
          '24/7/365 production uptime monitoring and on-call alerting',
          'Bi-weekly feature release sprints and backlog grooming',
          'Security vulnerability patching and dependency modernization',
          'Continuous code refactoring preventing technical debt',
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Validate Before Code',
        desc: 'Interactive prototypes and user journey validation de-risk technical architecture before extensive engineering commences.',
      },
      {
        step: '02',
        title: 'Modern Modular Stack',
        desc: 'Built for cloud resilience with decoupled microservices, clean APIs, and scalable component design systems.',
      },
      {
        step: '03',
        title: 'Agile 2-Week Sprints',
        desc: 'Demonstrable releases, working software, and transparent sprint reviews delivered every 14 days.',
      },
      {
        step: '04',
        title: 'Quality & Security Baked In',
        desc: 'Automated CI/CD test gates, static code analysis, and continuous security scanning at every release milestone.',
      },
    ],
    techTitle: 'Key Technologies We Work With',
    techStack: APP_KEY,
        industries: AI_INDUSTRIES,
    faq: AI_FAQ,
    preCta: {
      headline: 'Turn the Idea Into a Working Product.',
      desc: "Tell us what you're building. We'll show you the architecture, the release roadmap, and how we reach v1 in weeks, not months.",
      buttonLabel: 'Schedule Architecture Review',
      buttonLink: '/contact-us/',
    },
  },

  'cloud-devsecops': {
    slug: 'cloud-devsecops',
    wwdImages: wwdSet('Cloud'),
    hww: CLOUD_HWW,
    seo: {
      title: 'Managed Cloud & DevSecOps | Linnk Innovation Hub',
      description: 'Leaner cloud. Faster releases. Audit-ready every day. Multi-cloud AWS, Azure, GCP architecture, IaC, CI/CD, and 24/7 SRE.',
    },
    hero: {
      badge: '( Creative Ideas ) Cloud & Security Operations',
      title: 'Cloud & Security Operations',
      subtitle: 'Leaner cloud. Faster releases. Audit-ready every day.',
      bgVideo: '/The-Innovation-Hub-Why.mp4',
      primaryCta: { label: 'Request Cloud Audit', href: '/contact-us/' },
      secondaryCta: { label: 'Explore Solutions', href: '#deliverables' },
      heroImages: ['/Cloud-1', '/Cloud-2', '/Cloud-3', '/Cloud-4'],
    },

overview: {
  label: 'Overview',
  lead: 'Cloud without security is a liability. Security without automation is a bottleneck. Linnk brings both under one practice: we migrate your workloads, automate how you build and release, codify your infrastructure, and wrap it all in continuous security, observability and recovery. AWS-deep and cloud-agnostic by design, we build your cloud foundation, then run it with you so it keeps getting faster, safer and leaner.',
  capabilities: [
    'Cloud Migration',
    'DevOps & CI/CD',
    'Infrastructure as Code',
    'Monitoring & Observability',
    'Security & Compliance Automation',
    'Disaster Recovery & Backup',
    'ITSM & ITIL Operations',
    'Managed Cloud Operations',
  ],
},
stats: [
  { value: 500, suffix: '+', label: 'Workloads Migrated' },
  { value: 200, suffix: '+', label: 'Pipelines Automated' },
  { value: 400, suffix: '+', label: 'Environments Secured' },
],
deliverableTags: [
  'Cloud Migration',
  'DevOps & CI/CD Automation',
  'Infrastructure as Code',
  'Monitoring & Observability',
  'Security & Compliance Automation',
  'Disaster Recovery & Backup',
  'ITIL & IT Service Management',
  'Managed Cloud Ops & FinOps',
],
    deliverablesSectionTitle: 'What We Deliver',
deliverablesHeadline: 'Cloud Foundations Built to Scale and Built to Last',
deliverablesIntro: 'We design, build and run cloud platforms that are secure by default, automated end to end and ready for AI, so your enterprise moves faster with less risk and lower cost.',
deliverables: CLOUD_DELIVERABLES,
    process: [
      {
        step: '01',
        title: 'Zero-Downtime Migration',
        desc: 'Phased workload migration frameworks that maintain business continuity and transaction integrity throughout.',
      },
      {
        step: '02',
        title: 'Automated CI/CD & IaC',
        desc: 'Every server, cluster, and policy codified in Terraform with automated GitOps pipelines.',
      },
      {
        step: '03',
        title: 'Proactive 24/7 Monitoring',
        desc: 'Full observability across metrics, logs, and traces with automated alerts and a 15-minute P1 incident SLA.',
      },
      {
        step: '04',
        title: 'Continuous Security & Compliance',
        desc: 'Automated vulnerability scanning, least-privilege IAM, and audit-ready posture certified for ISO and SOC 2.',
      },
    ],
    techTitle: 'Key Technologies We Work With',
    techStack: APP_KEY,
        industries: AI_INDUSTRIES,
    faq: AI_FAQ,
    preCta: {
      headline: 'Cut Cloud Waste. Ship Weekly. Sleep at Night.',
      desc: "Bring us your biggest cloud headache — an AWS bill that keeps growing, deployments that break, or an upcoming compliance audit. We'll diagnose it in 48 hours.",
      buttonLabel: 'Request a Cloud Diagnostic',
      buttonLink: '/contact-us/',
    },
  },

  'software-development': {
    slug: 'software-development',
    wwdImages: wwdSet('Digital trans'),
    hww: DIGITAL_HWW,
    seo: {
      title: 'Digital Transformation & Modernisation | Linnk Innovation Hub',
      description: 'Modernise legacy systems without stopping the business. Monolith to microservices, API-first architecture, and cloud-native modernisation.',
    },
    hero: {
      badge: '( Creative Ideas ) Digital Transformation & Modernisation',
      title: 'Digital Transformation & Modernisation',
      subtitle: 'Modernise your legacy systems without stopping the business.',
      bgVideo: '/The-Innovation-Hub-Why.mp4',
      primaryCta: { label: 'Assess Your Estate', href: '/contact-us/' },
      secondaryCta: { label: 'View Methodology', href: '#deliverables' },
      heroImages: ['/softwere dev-1', '/softwere dev-2', '/softwere dev-3', '/softwere dev-4'],
    },
overview: {
  label: 'Overview',
  lead: 'The problem isn’t your old code. It’s the tightly coupled architecture, scattered logins and brittle integrations that make every change slow and risky. We fix that in stages (assess, re-architect, integrate, secure), so your platform gets faster, safer and easier to change while critical services keep running.',
  capabilities: [
    'Technical Advisory',
    'API-First Integration',
    'Modernisation Assessment & Roadmap',
    'Event-Driven Architecture',
    'Microservices Re-Architecture',
    'Cloud-Native Deployment',
    'Quality Engineering & Managed Applications',
    'Enterprise Identity & SSO',
  ],
},
stats: [
  { value: 100, suffix: '+', label: 'Applications Modernised' },
  { value: 50, suffix: '+', label: 'Services Re-Architected' },
  { value: 20, suffix: '+', label: 'Integrations Delivered' },
],
deliverableTags: [
  'Modernisation Assessment & Roadmap',
  'Technical Advisory',
  'Monolith to Microservices',
  'API-First Integration',
  'Enterprise Identity & SSO',
  'Event-Driven Architecture',
  'Cloud-Native Deployment',
  'Quality Engineering & Managed Applications',
],
    deliverablesSectionTitle: 'What We Deliver',
deliverablesHeadline: 'Modernise What Holds You Back. Without Stopping the Business.',
deliverablesIntro: 'From the first assessment to the last migrated module, we modernise your application estate in staged, low-risk steps, and keep it performing after go-live.',
deliverables: DIGITAL_DELIVERABLES,
    process: [
      {
        step: '01',
        title: 'Staged De-Risking',
        desc: 'Legacy services remain 100% active while our pods decouple and modernize one independent capability at a time.',
      },
      {
        step: '02',
        title: 'Prove It First',
        desc: 'Every modernization program starts with a live working proof of concept within 3–4 weeks before scaling investment.',
      },
      {
        step: '03',
        title: 'Value Before Age',
        desc: 'We prioritize components based on business impact, commercial risk, and developer velocity—not simply which system is oldest.',
      },
      {
        step: '04',
        title: 'Secure by Default',
        desc: 'Enterprise OIDC identity, zero-trust access, data encryption, and full audit logging are codified at every single layer.',
      },
    ],
    techTitle: 'Key Technologies We Work With',
    techStack: APP_KEY,
    industries: AI_INDUSTRIES,
    faq: AI_FAQ,
    preCta: {
      headline: 'Start With a Roadmap, Not a Rewrite.',
      desc: "In 2–3 weeks, we map your application estate, flag the riskiest dependencies, and hand you a staged plan with the first proof of concept ready to build.",
      buttonLabel: 'Request a Modernisation Audit',
      buttonLink: '/contact-us/',
    },
  },

  'data-analytics': {
    slug: 'data-analytics',
    wwdImages: wwdSet('Data int'),
    hww: DATA_HWW,
    seo: {
      title: 'Data & Decision Intelligence | Linnk Innovation Hub',
      description: 'Turn scattered data into decisions your teams trust. Data engineering, real-time pipelines, BI reporting, and predictive analytics.',
    },
    hero: {
      badge: '( Creative Ideas ) Data & Decision Intelligence',
      title: 'Data & Decision Intelligence',
      subtitle: 'Turn scattered data into decisions your teams trust',
      bgVideo: '/The-Innovation-Hub-Why.mp4',
      primaryCta: { label: 'Unlock Your Data', href: '/contact-us/' },
      secondaryCta: { label: 'Explore Capabilities', href: '#deliverables' },
      heroImages: ['/data analyst-1', '/data analyst-2', '/data analyst-3', '/data analyst-4'],
    },
overview: {
  label: 'Overview',
  lead: 'Most organisations aren’t short of data. They’re short of data they can trust, in one place, when a decision is due. We build the pipelines that bring it together, the quality checks that make it reliable, and the dashboards, embedded reports and AI answers that put it in front of the people who decide. Same team, from first pipeline to daily operations.',
  capabilities: [
    'Data Engineering & Pipelines',
    'API-First Integration',
    'Data Quality & Enrichment',
    'BI & Unified Reporting',
    'Embedded & Operational Reporting',
    'Conversational Analytics',
    'Predictive & Trend Analytics',
    'Observability & Service Analytics',
  ],
},
stats: [
  { value: 20, suffix: '+', label: 'Data Sources Connected' },
  { value: 125, suffix: '+', label: 'Dashboards Delivered' },
  { value: 50, suffix: 'M+', label: 'Records Processed Daily' },
],
deliverableTags: [
  'Data Engineering & Pipelines',
  'Tracking Architecture & Telemetry',
  'Data Quality & Enrichment',
  'BI, Dashboards & Reporting',
  'Embedded & Operational Reporting',
  'Conversational Analytics',
  'Predictive & Trend Analytics',
  'Observability & Service Analytics',
],
    deliverablesSectionTitle: 'What We Deliver',
deliverablesHeadline: 'From Raw Data to the Right Decision',
deliverablesIntro: 'We take data from where it’s created to where decisions get made: collected, cleaned, connected and delivered as answers your teams can act on.',
deliverables: DATA_DELIVERABLES,
    process: [
      {
        step: '01',
        title: 'Decisions First',
        desc: 'We begin with the critical decisions your executive teams need to make, then engineer the data pipelines and metrics to support them.',
      },
      {
        step: '02',
        title: 'Quality Before Dashboards',
        desc: 'Data is cleansed, validated, and normalized with automated tests before anyone reads a single number.',
      },
      {
        step: '03',
        title: 'Built & Run by One Team',
        desc: 'Our Kochi Global Capability Centre designs, builds, and operates your data infrastructure so zero context is lost.',
      },
      {
        step: '04',
        title: 'Secure and Governed',
        desc: 'Role-based access, audited semantic definitions, and monitored pipelines are enforced by default.',
      },
    ],
    techTitle: 'Key Technologies We Work With',
    techStack: APP_KEY,
        industries: AI_INDUSTRIES,
    faq: AI_FAQ,
    preCta: {
      headline: 'Stop Arguing About the Numbers. Start Acting on Them.',
      desc: "Bring us the decision your teams struggle with most. We'll show you the data, the pipeline, and the dashboard that gets you there.",
      buttonLabel: 'Request a Data Strategy Session',
      buttonLink: '/contact-us/',
    },
  },
};
