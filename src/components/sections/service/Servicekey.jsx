import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Dummy logos come from the free Simple Icons CDN (white icons).
// Replace any of them later by setting `logo` on a tool (see notes below).
const ICON = (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`;

// tool name (lowercase) -> Simple Icons slug
const SLUGS = {
  typescript: 'typescript',
  javascript: 'javascript',
  python: 'python',
  java: 'openjdk',
  playwright: 'playwright',
  cypress: 'cypress',
  selenium: 'selenium',
  postman: 'postman',
  k6: 'k6',
  'apache jmeter': 'apachejmeter',
  locust: 'locust',
  'github actions': 'githubactions',
  'gitlab ci': 'gitlab',
  jenkins: 'jenkins',
  argocd: 'argo',
  jira: 'jira',
  langsmith: 'langchain',
  'weights & biases': 'weightsandbiases',
  'openai gpt-4o': 'openai',
  'anthropic claude 3.5': 'anthropic',
  'google gemini 1.5': 'googlegemini',
  'meta llama 3': 'meta',
  langchain: 'langchain',
  huggingface: 'huggingface',
  pinecone: 'pinecone',
  milvus: 'milvus',
  qdrant: 'qdrant',
  pgvector: 'postgresql',
  weaviate: 'weaviate',
  fastapi: 'fastapi',
  docker: 'docker',
  kubernetes: 'kubernetes',
  'triton server': 'nvidia',
  react: 'react',
  'next.js': 'nextdotjs',
  'tailwind css': 'tailwindcss',
  'redux / zustand': 'redux',
  'node.js': 'nodedotjs',
  go: 'go',
  nestjs: 'nestjs',
  graphql: 'graphql',
  postgresql: 'postgresql',
  mongodb: 'mongodb',
  redis: 'redis',
  dynamodb: 'amazondynamodb',
  supabase: 'supabase',
  aws: 'amazonaws',
  'google cloud': 'googlecloud',
  terraform: 'terraform',
  jest: 'jest',
  'microsoft azure': 'microsoftazure',
  pulumi: 'pulumi',
  ansible: 'ansible',
  helm: 'helm',
  circleci: 'circleci',
  datadog: 'datadog',
  prometheus: 'prometheus',
  grafana: 'grafana',
  'new relic': 'newrelic',
  opentelemetry: 'opentelemetry',
  'hashicorp vault': 'vault',
  snyk: 'snyk',
  sonarqube: 'sonarqubeserver',
  'spring boot': 'springboot',
  'apache kafka': 'apachekafka',
  rabbitmq: 'rabbitmq',
  auth0: 'auth0',
  okta: 'okta',
  keycloak: 'keycloak',
  'openid connect': 'openid',
  snowflake: 'snowflake',
  'google bigquery': 'googlebigquery',
  databricks: 'databricks',
  'aws redshift': 'amazonredshift',
  clickhouse: 'clickhouse',
  dbt: 'dbt',
  'apache airflow': 'apacheairflow',
  fivetran: 'fivetran',
  'apache spark': 'apachespark',
  'power bi': 'powerbi',
  tableau: 'tableau',
  looker: 'looker',
  metabase: 'metabase',
  superset: 'apachesuperset',
  segment: 'segment',
  rudderstack: 'rudderstack',
  snowplow: 'snowplow',
  posthog: 'posthog',
};

const norm = (n) => n.replace(/\s*\(.*?\)/g, '').trim().toLowerCase();

const logoFor = (name) => {
  const slug = SLUGS[norm(name)] ?? SLUGS[name.toLowerCase()];
  return slug ? ICON(slug) : null;
};







const STEP_DELAY = 5000; // 5 sec between each category's one-logo move

// 5 slots on desktop, 3 on smaller screens
function useSlots() {
  const get = () => (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 5 : 3);
  const [slots, setSlots] = useState(get);
  useEffect(() => {
    const onResize = () => setSlots(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return slots;
}

// Old style: icon + name (pages not converted to logo images yet)
function TechItem({ tool }) {
  const t = typeof tool === 'string' ? { name: tool } : tool;
  const logo = t.logo ?? logoFor(t.name);
  const [failed, setFailed] = useState(false);
  const showImg = logo && !failed;

  return (
    <div className="flex items-center gap-2.5 w-1/2 sm:w-1/3 lg:w-[218px] py-2 pr-4 min-w-0">
      {showImg && (
        <img
          src={logo}
          alt=""
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className="h-[26px] w-[26px] shrink-0 object-contain"
        />
      )}
      <span className="font-body font-semibold text-[15px] lg:text-[18px] leading-tight tracking-[-0.02em] text-white break-words">
        {t.name}
      </span>
    </div>
  );
}
// One logo slot (fixed width = 1 / slots of the row)
// One logo slot (fixed width = 1 / slots of the row)
function LogoItem({ tool, slots }) {
  const [failed, setFailed] = useState(false);
  return (
<div
  className="shrink-0 grow-0 h-[72px] lg:h-[88px] flex items-center justify-center px-3"
  style={{ flexBasis: `${100 / slots}%` }}
>
      {failed ? (
        <span className="font-body font-semibold text-[14px] text-white text-center">{tool.name}</span>
      ) : (
        <img
          src={encodeURI(tool.logo)}
          alt={tool.name}
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className="h-[34px] lg:h-[44px] max-w-full w-auto object-contain"
        />
      )}
    </div>
  );
}

// Static row (<= slots logos) or sliding row (> slots logos)
function LogoRow({ tools, slots, step }) {
  const n = tools.length;
  const scrolls = n > slots;
  const [pos, setPos] = useState(0);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (!scrolls || step === 0) return;
    setInstant(false);
    setPos((p) => p + 1);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!scrolls) {
    return (
      <div className="flex items-center min-w-0 px-2 lg:px-0">
        {tools.map((tool, i) => (
          <LogoItem key={tool.name + i} tool={tool} slots={slots} />
        ))}
      </div>
    );
  }

  const looped = [...tools, ...tools.slice(0, slots)];

  return (
    <div className="min-w-0 overflow-hidden px-2 lg:px-0">
      <motion.div
        className="flex items-center"
        animate={{ x: `-${(pos * 100) / slots}%` }}
        transition={{ duration: instant ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {
          if (pos >= n) {
            setInstant(true);
            setPos(0);
          }
        }}
      >
        {looped.map((tool, i) => (
          <LogoItem key={tool.name + i} tool={tool} slots={slots} />
        ))}
      </motion.div>
    </div>
  );
}
export default function ServiceKey({
  title = 'Key Technologies We Work With',
  intro,
  categories = [],
}) {
  const slots = useSlots();
  const [steps, setSteps] = useState({});

  const scrollingRows = (categories || [])
    .map((cat, i) => {
      const tools = cat.tools || [];
      const logoMode = tools.length > 0 && tools.every((t) => typeof t === 'object' && t.logo && t.logoOnly);
      return logoMode && tools.length > slots ? i : -1;
    })
    .filter((i) => i !== -1);

  const key = scrollingRows.join(',');

  useEffect(() => {
    if (scrollingRows.length === 0) return;
    let p = 0;
    const id = setInterval(() => {
      const row = scrollingRows[p % scrollingRows.length];
      setSteps((s) => ({ ...s, [row]: (s[row] || 0) + 1 }));
      p += 1;
    }, STEP_DELAY);
    return () => clearInterval(id);
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!categories || categories.length === 0) return null;

  return (
<section className="relative w-full bg-[#111111] text-white pt-14 lg:pt-20 pb-14 lg:pb-20 px-4 sm:px-8 lg:px-[100px]">
      <div className="max-w-[1800px] mx-auto">
        {/* Heading */}
<h2 className="font-body font-medium text-[34px] sm:text-[48px] lg:text-[74px] leading-[1.2] tracking-[-0.02em] text-white max-w-[12.5em] mb-5 lg:mb-6">
          {title}
        </h2>

        {intro && (
          <p className="font-body text-[15px] lg:text-[18px] leading-[1.5] text-white/70 max-w-[44em] mb-8 lg:mb-10">
            {intro}
          </p>
        )}

        {/* Table */}
        <div className="border border-white/40">
          {/* Header row (desktop) */}
   <div className="hidden lg:grid grid-cols-[26%_1fr] items-center h-[68px]">
  <div className="px-[25px] font-body font-medium text-[22px] text-white">Category</div>
  <div className="pl-[50px] font-body font-medium text-[22px] text-white">Technologies</div>
</div>

          {categories.map((cat, idx) => {
            const tools = cat.tools || [];
            const logoMode = tools.length > 0 && tools.every((t) => typeof t === 'object' && t.logo && t.logoOnly);

            return (
              <motion.div
                key={cat.category || idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-[26%_1fr] border-t border-white/40"
              >
   <div className="px-[25px] pt-4 lg:pt-0 flex items-center font-body font-medium text-[18px] lg:text-[21px] text-white">
  {cat.category}
</div>

                {logoMode ? (
                  <LogoRow tools={tools} slots={slots} step={steps[idx] || 0} />
                ) : (
                  <div className="flex flex-wrap items-center px-[25px] lg:px-0 py-3 lg:py-[18px]">
                    {tools.map((tool, i) => (
                      <TechItem key={(tool.name || tool) + i} tool={tool} />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}