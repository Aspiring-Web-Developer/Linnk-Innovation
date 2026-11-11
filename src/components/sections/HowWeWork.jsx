import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Change these if your files are .png / .webp / .jpeg
const IMG_EXT = 'jpg';
const BG_IMG = '/letstalkbg.png';

const STEPS = [
  {
    step: '01',
    name: 'Discover',
    desc: 'Understand the business challenge, assess the current environment and identify the highest-value opportunities.',
    image: `/1-1.${IMG_EXT}`,
  },
  {
    step: '02',
    name: 'Prove',
    desc: 'Validate the approach through a focused pilot, testing feasibility, performance and business value before scaling.',
    image: `/2-1.${IMG_EXT}`,
  },
  {
    step: '03',
    name: 'Build',
    desc: "Engineer and implement the solution, integrate it into the client's environment and establish the measures for success.",
    image: `/3-1.${IMG_EXT}`,
  },
  {
    step: '04',
    name: 'Run & Improve',
    desc: 'Transition into a monthly managed service with agreed service levels, performance measures, reporting, and continuous improvement.',
    image: `/4-1.${IMG_EXT}`,
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-[#111111] text-white pt-10 sm:pt-12 lg:pt-16 pb-20 lg:pb-28 px-5 sm:px-8 lg:px-[38px] overflow-hidden">
      {/* Heading */}
      <h2 className="font-body font-medium text-4xl sm:text-6xl lg:text-[76px] text-white leading-[1.15] text-center mx-auto mb-14 lg:mb-24 max-w-[900px]">
        How We Work<br className="hidden lg:block" />{' '}
        Together to{' '}
        <span className="font-serif italic font-normal text-[1.1em]">
          Create<br className="hidden lg:block" /> Success
        </span>
      </h2>

      {/* 4 steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {STEPS.map((s, idx) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full aspect-[6/5] overflow-hidden bg-white/5">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-body font-medium text-[26px] sm:text-[30px] lg:text-[34px] tracking-[-0.03em] leading-none mt-6 lg:mt-8">
              {s.step} — {s.name}
            </h3>

            <p className="font-body text-[16px] lg:text-[17px] leading-[1.5] text-white/90 mt-4 tracking-[-0.01em]">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:max-w-[1180px] mx-auto mt-20 lg:mt-32 min-h-[220px] overflow-hidden rounded-[4px] bg-black"
      >
        {/* Background image: blurred into a soft glow, like the original */}
        <img
          src={BG_IMG}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[180%] max-w-none object-cover object-right scale-110 blur-[28px] opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 min-h-[220px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 px-8 sm:px-12 lg:pl-[104px] lg:pr-[104px] py-10">
          <p className="font-body font-medium text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.2] tracking-[-0.02em] text-white max-w-[680px]">
            Expert teams across technology, AI, data and operations. Ready when you are.
          </p>

          {/* LET'S TALK: pill slides right, left circle zooms in, right circle zooms out */}
          <a
            href="/contact-us/"
            aria-label="Let's talk"
            className="group relative flex items-center w-fit shrink-0"
          >
            <span className="absolute left-0 top-0 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </span>

            <span className="relative z-10 h-[50px] px-6 flex items-center justify-center rounded-full bg-black text-brand-mint text-[13px] xl:text-[14px] font-body font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[50px] group-hover:bg-brand-mint group-hover:text-black">
              LET&apos;S TALK
            </span>

            <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-black text-brand-mint scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}