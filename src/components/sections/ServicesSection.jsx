import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Asterisk } from 'lucide-react';

// Change this if your files are .png / .webp / .jpeg
const IMG_EXT = 'jpg';

const TICKER_ITEMS = [
  'Faster Releases',
  'Resilient Platforms',
  'Trusted Data',
  'Measurable Growth',
  'Governed Programmes',
  'Lower Operating Risk',
];

const SERVICES = [
  {
    num: '01',
    name: 'AI & Intelligent Automation',
    desc: 'Put AI to work across real business processes, from intelligent automation and AI agents to enterprise AI applications.',
    href: '/services/ai-managed-services/',
    img: `/1.${IMG_EXT}`,
  },
  {
    num: '02',
    name: 'Digital Transformation',
    desc: 'Modernise applications, infrastructure and technology environments while improving the way they operate.',
    href: '/services/software-development/',
    img: `/2.${IMG_EXT}`,
  },
  {
    num: '03',
    name: 'Application Development',
    desc: 'Design, develop and evolve digital products, business applications and the integrations that connect them.',
    href: '/services/application-engineering/',
    img: `/3.${IMG_EXT}`,
  },
  {
    num: '04',
    name: 'Data & Decision Intelligence',
    desc: 'Build the data foundations, reporting and intelligence needed to understand performance and make better decisions.',
    href: '/services/data-analytics/',
    img: `/4.${IMG_EXT}`,
  },
  {
    num: '05',
    name: 'Cloud & Security Operations',
    desc: 'Migrate, secure and run cloud platforms with automated pipelines, continuous monitoring and tested recovery.',
    href: '/services/cloud-devsecops/',
    img: `/5.${IMG_EXT}`,
  },
];

// One row: blurs in + rises on scroll, image slides in on hover
function ServiceRow({ service, isLast }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 100%', 'start 78%'],
  });

  const filter = useTransform(scrollYProgress, [0, 1], ['blur(8px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <div ref={ref} className={isLast ? '' : 'border-b border-white/70'}>
      <motion.a
        href={service.href}
        style={{ filter, opacity, y }}
        className="group grid grid-cols-1 lg:grid-cols-[1fr_480px] items-center gap-4 lg:gap-0 py-7 lg:py-8 lg:pr-[38px] will-change-[filter,opacity,transform]"
      >
        {/* Left: number + title (+ floating image), slides right on hover */}
        <div className="flex items-center transition-transform duration-500 ease-out lg:group-hover:translate-x-[38px]">
          <span className="w-[56px] sm:w-[72px] shrink-0 font-body font-semibold text-[12px] sm:text-[14px] tracking-[0.12em] text-white group-hover:text-brand-mint transition-colors duration-300">
  ( {service.num} )
</span>

          <h3 className="font-body font-medium text-xl sm:text-2xl lg:text-[27px] tracking-[-0.04em] text-white group-hover:text-brand-mint transition-colors duration-300">
            {service.name}
          </h3>

          {/* Image: zero-size anchor, so it never changes the row height */}
          <div className="hidden lg:block relative shrink-0 w-0 h-0">
            <img
              src={service.img}
              alt={service.name}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-[140px] h-[94px] max-w-none object-cover -translate-x-10 opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right: description */}
        <p className="font-body text-[14px] lg:text-[16px] leading-[1.7] text-white max-w-[480px] pl-[56px] sm:pl-[72px] lg:pl-0 tracking-[-0.01em]">
          {service.desc}
        </p>
      </motion.a>
    </div>
  );
}

// One full set of ticker items (rendered twice for a seamless loop)
function TickerGroup({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {TICKER_ITEMS.map((text) => (
        <div key={text} className="flex items-center shrink-0">
          <span className="font-body font-medium text-[30px] sm:text-[42px] lg:text-[56px] leading-none tracking-[-0.03em] text-black whitespace-nowrap">
            {text}
          </span>
          <Asterisk className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-[3.5] text-black mx-8 sm:mx-12 lg:mx-16 shrink-0" />
        </div>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-black text-white pt-16 sm:pt-20 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-[38px] overflow-hidden">
      <style>{`
        @keyframes servicesTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .services-ticker-track {
          animation: servicesTicker 70s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .services-ticker-track { animation: none; }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 lg:pb-20">
        <div>
          <span className="font-body font-normal text-[15px] sm:text-[17px] text-white/85 mb-4 block">
            Services
          </span>
          <h2 className="font-body font-medium text-4xl sm:text-6xl lg:text-[76px] text-white leading-[1.15]">
            Shaped Around<br />
            Outcomes
          </h2>
        </div>

        {/* View all services: pill slides right, left circle zooms in, right circle zooms out */}
        <a
          href="/services/"
          aria-label="View all services"
          className="group relative flex items-center w-fit lg:mr-[38px] mb-2"
        >
          <span className="absolute left-0 top-0 w-[54px] h-[54px] flex items-center justify-center rounded-full bg-white text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </span>

          <span className="relative z-10 h-[54px] px-7 flex items-center justify-center rounded-full bg-brand-mint text-black text-[13px] sm:text-[14px] font-body font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[54px] group-hover:bg-white">
            VIEW ALL SERVICES
          </span>

          <span className="w-[54px] h-[54px] flex items-center justify-center rounded-full bg-brand-mint text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </span>
        </a>
      </div>

      {/* Service rows */}
      <div>
        {SERVICES.map((service, i) => (
          <ServiceRow
            key={service.num}
            service={service}
            isLast={i === SERVICES.length - 1}
          />
        ))}
      </div>

      {/* Ticker: full-width cyan band, auto side scroll */}
      <div className="-mx-5 sm:-mx-8 lg:-mx-[38px] -mb-16 sm:-mb-20 mt-12 lg:mt-16 bg-brand-mint py-5 sm:py-6 lg:py-8 overflow-hidden">
        <div className="services-ticker-track flex w-max">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>
    </section>
  );
}