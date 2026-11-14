import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

const SERVICES = [
  { name: 'Managed AI & Workflow Automation', href: '/services/ai-managed-services' },
  { name: 'Managed Software Development', href: '/services/software-development' },
  { name: 'Managed Application Engineering', href: '/services/application-engineering' },
  { name: 'Managed Data & Analytics', href: '/services/data-analytics' },
  { name: 'Managed Cloud & DevSecOps', href: '/services/cloud-devsecops' },
  { name: 'Managed Quality Assurance', href: '/services/managed-qa-services' },
];

/* Same animation as MintCta in Insights (pill slides right, left circle zooms in, right circle zooms out) */
function MintCta({ href, label }) {
  return (
    <a href={href} aria-label={label} className="group relative flex items-center w-fit shrink-0">
      {/* left circle: zooms in on hover */}
      <span className="absolute left-0 top-0 w-[54px] h-[54px] xl:w-[3.26vw] xl:h-[3.26vw] flex items-center justify-center rounded-full bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        <ArrowRight className="w-5 h-5 xl:w-[1.1vw] xl:h-[1.1vw] stroke-[3]" />
      </span>

      {/* pill: slides right on hover */}
      <span className="relative z-10 h-[54px] xl:h-[3.26vw] px-6 xl:px-[1.4vw] flex items-center justify-center rounded-full bg-brand-mint text-black text-[13px] sm:text-[14px] xl:text-[0.95vw] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[54px] xl:group-hover:translate-x-[3.26vw]">
        {label}
      </span>

      {/* right circle: zooms out on hover */}
      <span className="w-[54px] h-[54px] xl:w-[3.26vw] xl:h-[3.26vw] flex items-center justify-center rounded-full bg-brand-mint text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
        <ArrowUpRight className="w-5 h-5 xl:w-[1.1vw] xl:h-[1.1vw] stroke-[3]" />
      </span>
    </a>
  );
}

export default function Project() {
  return (
    // White wrapper gives room so the footer overlap never covers the dark band
    <section className="w-full bg-white pb-32 sm:pb-36 lg:pb-44 xl:pb-[11vw]">
      <div className="w-full bg-brand-obsidian text-white pt-12 sm:pt-14 xl:pt-[3.9vw] pb-12 sm:pb-14 xl:pb-[3.9vw] px-5 sm:px-8 xl:px-[2vw]">
        {/* Top row: heading + button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 xl:gap-[2vw]">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-medium text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[2.1vw] leading-[1.15] tracking-[-0.01em] text-white"
          >
            Have a project in mind? Let’s get started
          </motion.h2>

          <MintCta href="/contact-us/" label="Contact Us" />
        </div>

        {/* Divider */}
        <div className="mt-8 xl:mt-[3vw] h-px w-full bg-white/20" />

        {/* Cards */}
        <div className="mt-8 xl:mt-[3vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-[1.3vw]">
{SERVICES.map((s, i) => (
  <motion.div
    key={s.name}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col items-center text-center bg-white text-black rounded-[8px] px-4 xl:px-[1vw] pt-5 xl:pt-[1.2vw] pb-5 xl:pb-[1.3vw] xl:min-h-[11.5vw]"
  >
    {/* Check icon: black circle, cyan tick */}
    <span className="w-[54px] h-[54px] xl:w-[2.9vw] xl:h-[2.9vw] rounded-full bg-black flex items-center justify-center shrink-0">
      <Check className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw] text-brand-mint stroke-[3]" />
    </span>

    {/* Title */}
    <h3 className="mt-3 xl:mt-[0.8vw] font-heading font-medium text-[18px] xl:text-[1.1vw] leading-[1.2] tracking-[-0.03em] text-black">
      {s.name}
    </h3>

    {/* Explore link: turns cyan on hover */}
    <a
      href={s.href}
      className="group mt-3 xl:mt-[0.8vw] inline-flex items-center gap-2 xl:gap-[0.5vw] border-b border-black pb-[2px] font-heading text-[15px] xl:text-[0.95vw] leading-none text-black transition-colors duration-300 hover:text-brand-mint hover:border-brand-mint"
    >
      <span>Explore</span>
      <ArrowRight className="w-4 h-4 xl:w-[1vw] xl:h-[1vw] stroke-[2] transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}