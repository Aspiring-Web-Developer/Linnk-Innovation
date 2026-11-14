import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Change the image extensions if your files are .jpg / .png / .webp
// `tags` = rows of chips, so they wrap exactly like the original on desktop
const SERVICES = [
  {
    title: 'AI & Intelligent Automation',
    href: '/services/ai-managed-services',
    desc: [
      'AI isn’t a service line for us; it’s the foundation of every system we engineer,',
      'built to learn, adapt and outperform.',
    ],
    images: [
      { src: encodeURI('/AI-2.jpg'), alt: 'AI strategy' },
            { src: encodeURI('/AI-4.jpg'), alt: 'AI operations' },
      { src: encodeURI('/AI-3.jpg'), alt: 'AI intelligence' },

    ],
    tags: [
      [
        'AI Strategy & Roadmap',
        'Managed AI Operations',
        'LLM Selection & Fine-Tuning',
        'Custom AI Agents',
        'Multi-Agent Orchestration',
      ],
      [
        'Intelligent Document Processing',
        'Predictive & ML Models',
        'Enterprise AI Integration',
        'Responsible AI & Governance',
      ],
      ['Use-Case Discovery & ROI Modelling'],
    ],
  },

    {
    title: 'Digital Transformation',
    href: '/services/application-engineering',
    desc: [
      'We fix it in stages (assess, re-architect, integrate, secure), so your platform',
      'gets faster, safer and easier to change while critical services keep running.',
    ],
    images: [
      { src: encodeURI('/softwere dev-1.jpg'), alt: 'AI-assisted code review' },
      { src: encodeURI('/softwere dev-2.jpg'), alt: 'Team collaboration' },
      { src: encodeURI('/softwere dev-3.jpg'), alt: 'Interface design' },
    ],
    tags: [
      [
        'Application Portfolio Assessment',
        'Staged Modernisation Roadmap',
        'Architecture Review & Design Evaluation',
        'Target-State Architecture',
      ],
      [
        'Microservices Re-Architecture',
        'API Integration Layer',
        'Single Sign-On & Identity',
        'Event-Driven Messaging',
        'Containerised Deployment',
      ],
      ['Regression & Performance Testing'],
    ],
  },

    {
    title: 'Application Development',
    href: '/services/software-development',
    desc: [
      'Designers, architects and full-stack engineers work side by side from first',
      'workshop to launch, so every release is usable, secure and ready to scale.',
    ],
    images: [
      { src: encodeURI('/Application-5.jpg'), alt: 'Cloud and backup dashboard' },
      { src: encodeURI('/Application-4.jpg'), alt: 'Wireframes and prototyping' },
      { src: encodeURI('/Application-6.jpg'), alt: 'Developer working on code' },
    ],
    tags: [
      [
        'Product Discovery Workshop',
        'Product Roadmap & MVP Scope',
        'User Journeys & Wireframes',
        'Full-Stack Web Application',
      ],
      [
        'Multi-Tenant SaaS Platform',
        'Embedded Power BI Dashboards',
        'Interactive Prototypes',
        'Design System',
        'MVP Build',
        'E-Commerce Platform',
      ],
    ],
  },
    {
    title: 'Data & Decision Intelligence',
    href: '/services/data-analytics',
    desc: [
      'We build the pipelines, quality checks, dashboards, embedded reports and AI',
      'answers that put reliable data in front of decision-makers, with the same team',
      'from first pipeline to daily operations.',
    ],
    images: [
      { src: encodeURI('/data analyst-5.jpg'), alt: 'Growth analytics chart' },
      { src: encodeURI('/data analyst-2.jpg'), alt: 'Analyst at a monitoring wall' },
      { src: encodeURI('/data analyst-6.jpg'), alt: 'AI data model' },
    ],
    tags: [
      [
        'Data Source Audit',
        'Data Pipelines & Aggregation',
        'Tracking & Event Architecture',
        'Data Quality Rules',
        'Data Enrichment',
        'Unified Data Model',
      ],
      [
        'BI Dashboards',
        'Embedded Reports',
        'Conversational Analytics',
        'Predictive & Trend Models',
      ],
    ],
  },

    {
    title: 'Cloud & Security Operations',
    href: '/services/cloud-devsecops',
    desc: [
      'We migrate, automate, codify and secure your cloud, AWS-deep and cloud-',
      'agnostic, then run it with you so it keeps getting faster, safer and leaner.',
    ],
    images: [
      { src: encodeURI('/cloud-7.png'), alt: 'Cloud security' },
            { src: encodeURI('/Cloud-4.png'), alt: 'Cloud services' },
      { src: encodeURI('/cloud-6.png'), alt: 'Data centre operations' },

    ],
    tags: [
      [
        'Cloud Readiness Assessment',
        'Migration Wave Plan',
        'Multi-Account Landing Zone',
        'Reusable IaC Module Library',
        'Observability Dashboards & Alerting',
      ],
      [
        'Cloud Security Posture Baseline',
        'Cloud Security Posture Baseline',
        'DR Strategy & Tested Runbooks',
        'ITIL Process Design & RACI',
      ],
      ['Managed Cloud Operations'],
    ],
  },
  // Add the other services here with the same shape:
  // { title: '...', href: '/services/...', desc: ['line 1', 'line 2'], images: [...3], tags: [[...], [...]] },
];

/* Know More: pill slides right, left circle zooms in, right circle zooms out */
function KnowMore({ href }) {
  return (
    <a href={href} aria-label="Know more" className="group relative flex items-center w-fit">
      <span className="absolute left-0 top-0 w-[54px] h-[54px] xl:w-[3.26vw] xl:h-[3.26vw] flex items-center justify-center rounded-full border border-brand-mint bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        <ArrowRight className="w-5 h-5 xl:w-[1.1vw] xl:h-[1.1vw] stroke-[2.5]" />
      </span>

      <span className="relative z-10 h-[54px] xl:h-[3.26vw] px-6 xl:px-[1.4vw] flex items-center justify-center rounded-full border border-black text-black text-[13px] sm:text-[14px] xl:text-[0.95vw] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[54px] xl:group-hover:translate-x-[3.26vw] group-hover:bg-brand-mint group-hover:border-brand-mint">
        Know More
      </span>

      <span className="w-[54px] h-[54px] xl:w-[3.26vw] xl:h-[3.26vw] flex items-center justify-center rounded-full border border-black text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
        <ArrowUpRight className="w-5 h-5 xl:w-[1.1vw] xl:h-[1.1vw] stroke-[2.5]" />
      </span>
    </a>
  );
}

function ServiceBlock({ s }) {
  return (
    <div>
      {/* Top row: heading + button | description */}
     <div className="grid grid-cols-1 xl:grid-cols-[1fr_43.5vw] gap-6 xl:gap-0 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="font-heading font-medium text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[2.6vw] leading-[1.15] tracking-[-0.02em] text-black"
          >
            {s.title}
          </motion.h2>

          <div className="mt-5 xl:mt-[1.7vw]">
            <KnowMore href={s.href} />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[17px] sm:text-[18px] xl:text-[1.02vw] leading-[1.8] text-black xl:mt-[0.3vw] lg:whitespace-nowrap"
        >
          {s.desc.map((line, i) => (
<React.Fragment key={i}>
  {line}
  {!line.endsWith('-') && ' '}
  {i < s.desc.length - 1 && <br className="hidden lg:block" />}
</React.Fragment>
          ))}
        </motion.p>
      </div>

      {/* Images */}
      <div className="mt-8 xl:mt-[1.95vw] grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-[1.3vw]">
        {s.images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[1042/750] overflow-hidden bg-[#d9d9d9]"
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Tag chips */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 xl:mt-[2vw] flex flex-col gap-3 xl:gap-[0.85vw]"
      >
        {s.tags.map((row, r) => (
          <div key={r} className="flex flex-wrap gap-3 xl:gap-x-[1.95vw]">
           {row.map((t, ti) => (
  <span
    key={`${t}-${ti}`}
                className="inline-flex items-center h-[44px] xl:h-[2.47vw] px-4 xl:px-[0.84vw] border border-black/25 font-body uppercase text-[13px] sm:text-[14px] xl:text-[0.85vw] text-black whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function AllServices() {
  return (
<section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20 xl:pt-[4vw] pb-44 sm:pb-48 lg:pb-56 xl:pb-[18vw]">
      <div className="px-6 sm:px-8 xl:px-[7.9vw]">
        {SERVICES.map((s, i) => {
          const isFirst = i === 0;
          const isLast = i === SERVICES.length - 1;

          return (
            <div
              key={s.title}
              className={`${isFirst ? '' : 'pt-16 sm:pt-20 xl:pt-[5.7vw]'} ${
                isLast ? '' : 'pb-12 sm:pb-14 xl:pb-[4vw] border-b border-black/15'
              }`}
            >
              <ServiceBlock s={s} />
            </div>
          );
        })}
      </div>
    </section>
  );
}