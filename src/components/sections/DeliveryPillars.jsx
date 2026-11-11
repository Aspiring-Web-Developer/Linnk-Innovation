import React, { useRef } from 'react';
import { motion, useScroll, useTransform,useSpring  } from 'framer-motion';

const PILLARS = [
  {
    num: '1',
    title: 'Continuity',
    desc: 'Extend your existing team without disrupting how it works.',
    theme: 'dark',
    rot: 3,
    y: 0,
  },
  {
    num: '2',
    title: 'Control',
    desc: 'Clear ownership, defined responsibilities and transparent reporting.',
    theme: 'green',
    rot: -3,
    y: 28,
  },
  {
    num: '3',
    title: 'Capability',
    desc: 'Access specialist expertise across technology, AI, data, software and operations.',
    theme: 'dark',
    rot: 3,
    y: 28,
  },
  {
    num: '4',
    title: 'Knowledge',
    desc: 'Documented processes and shared knowledge that stay with your organisation.',
    theme: 'green',
    rot: -3,
    y: 0,
  },
];

const THEMES = {
  dark: {
    card: 'bg-[#111111]',
    circle: 'bg-[#cfcfcf] text-[#111111]',
  },
  green: {
    card: 'bg-[#00c896]',
    circle: 'bg-[#0b7e63] text-[#17b48d]',
  },
};

// One card: starts strongly tilted + low, then tries to straighten as you scroll,
// but stops at a slight tilt (never fully straight)
function PillarCard({ pillar, index, progress }) {
  const start = index * 0.1;
  const end = start + 0.6;

  const startRot = pillar.rot * 3; // e.g. 9deg, then settles to 3deg
  const y = useTransform(progress, [start, end], [100, pillar.y]);
  const rotate = useTransform(progress, [start, end], [startRot, pillar.rot]);

  const theme = THEMES[pillar.theme];

  return (
    <motion.div
      style={{ y, rotate }}
      className={`relative flex-1 min-h-[280px] lg:min-h-[320px] px-8 sm:px-9 pt-10 pb-8 text-white will-change-transform ${theme.card}`}
    >
      <h3 className="font-body font-medium text-[24px] lg:text-[26px] leading-[1.1] tracking-[-0.02em]">
        {pillar.title}
      </h3>
      <p className="font-body text-[15px] lg:text-[16px] leading-[1.5] mt-4 max-w-[260px]">
        {pillar.desc}
      </p>

      {/* Number circle, bottom right */}
      <span
        className={`absolute right-6 sm:right-8 bottom-8 w-[68px] h-[68px] lg:w-[74px] lg:h-[74px] rounded-full flex items-center justify-center font-body font-medium text-[34px] lg:text-[38px] leading-none ${theme.circle}`}
      >
        {pillar.num}
      </span>
    </motion.div>
  );
}

export default function DeliveryPillars() {
  const gridRef = useRef(null);

const { scrollYProgress: rawProgress } = useScroll({
  target: gridRef,
  offset: ['start 100%', 'start 5%'],
});
const scrollYProgress = useSpring(rawProgress, { stiffness: 60, damping: 22 });

  return (
    <section className="relative w-full bg-white text-black pt-16 sm:pt-20 pb-20 sm:pb-24 px-5 sm:px-8 lg:px-[38px] overflow-hidden">
      {/* Heading */}
      <h2 className="font-body font-medium text-4xl sm:text-6xl lg:text-[76px] text-black leading-[1.15] mb-14 lg:mb-20">
        The Delivery You<br />
        Can Rely On
      </h2>

      {/* 4 tilted cards with a gap between them */}
      <div
        ref={gridRef}
        className="flex flex-col lg:flex-row gap-6 lg:gap-3 lg:max-w-[1380px] pb-10"
      >
        {PILLARS.map((pillar, i) => (
          <PillarCard
            key={pillar.num}
            pillar={pillar}
            index={i}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}