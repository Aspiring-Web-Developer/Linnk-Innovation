import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// One line: slides up + fades in during its own slice of the scroll
function Line({ progress, index, total, children }) {
  const start = (index / total) * 0.7;
  const end = start + 0.3;
  const y = useTransform(progress, [start, end], [40, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.span style={{ y, opacity }} className="inline-block will-change-transform">
      {children}
    </motion.span>
  );
}

export default function WhoWeAre() {
  const textRef = useRef(null);

  // Existing blur/opacity (unchanged)
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 92%', 'start 60%'],
  });

  const blurVal = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const opacityVal = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
  const filterVal = useTransform(blurVal, (b) => `blur(${b}px)`);

  // New: drives the line-by-line rise
  const { scrollYProgress: lineProgress } = useScroll({
    target: textRef,
    offset: ['start 90%', 'end 55%'],
  });

  const TOTAL = 8;

  return (
    <section className="relative w-full bg-white text-black pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Tag */}
        <span className="font-heading font-medium text-[13px] sm:text-[14px] uppercase text-black mb-8 sm:mb-12 block">
          ( WHO WE ARE )
        </span>

        {/* Scroll-linked blur + line-by-line rise */}
        <motion.p
          ref={textRef}
          style={{ filter: filterVal, opacity: opacityVal }}
          className="font-heading font-semibold text-[22px] sm:text-[26px] md:text-[29px] lg:text-[32px] text-black leading-[1.3] will-change-[filter,opacity]"
        >
          <Line progress={lineProgress} index={0} total={TOTAL}>
            Linnk Innovation Hub is the{' '}
            <span className="font-serif italic font-normal text-black text-[1.1em]">
              managed services business
            </span>{' '}
            within
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={1} total={TOTAL}>
            Linnk Group’s Professional Services division. Based in
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={2} total={TOTAL}>
            Kochi, with local teams across our markets, we help
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={3} total={TOTAL}>
            organisations keep their technology running, modernise
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={4} total={TOTAL}>
            systems and improve performance over time. Alongside
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={5} total={TOTAL}>
            Linnk Support and Linnk Digital, we form the Group’s
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={6} total={TOTAL}>
            Professional Services offering, each with its own
          </Line>
          <br className="hidden lg:block" />{' '}
          <Line progress={lineProgress} index={7} total={TOTAL}>
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">specialist focus</span>
              <svg
                className="absolute left-0 -bottom-[0px] w-full h-4 overflow-visible text-brand-mint z-0"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q 25 3 50 4.5 T 100 4"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            .
          </Line>
        </motion.p>

        {/* Discover More: pill slides right, left circle zooms in, right circle zooms out */}
        <a
          href="/about-us/"
          aria-label="Discover more"
          className="group relative flex items-center w-fit mt-10 sm:mt-14"
        >
          <span className="absolute left-0 top-0 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-brand-mint bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </span>

          <span className="relative z-10 h-[50px] px-6 flex items-center justify-center rounded-full border border-black text-black text-[13px] xl:text-[14px] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[50px] group-hover:bg-brand-mint group-hover:border-brand-mint">
            DISCOVER MORE
          </span>

          <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-black text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </span>
        </a>
      </div>
    </section>
  );
}