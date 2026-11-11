import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function Counter({ end, suffix = '', duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  useEffect(() => {
    if (!inView) return;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-brand-mint">{suffix}</span>
    </span>
  );
}

const NUM =
  'font-body font-medium text-[56px] sm:text-[64px] lg:text-[54px] text-white leading-none tracking-[-0.02em]';
const LABEL =
  'font-body font-semibold lg:font-medium text-[20px] sm:text-[22px] lg:text-[26px] text-white leading-[1.3] tracking-[-0.02em]';

export default function EnterpriseStats() {
  const headingRef = useRef(null);

  // Heading zooms in (small -> normal) as you scroll
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ['start 95%', 'start 55%'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative w-full bg-white text-black pt-0 pb-14 sm:pb-16 px-6 sm:px-8 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-[72px] items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <motion.h2
            ref={headingRef}
            style={{ scale, opacity, transformOrigin: 'left center' }}
            className="font-body font-semibold text-4xl sm:text-5xl lg:text-[72px] text-black leading-[1.2] mb-10 lg:mb-14 will-change-transform"
          >
            Built for Enterprise<br />
            Delivery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-black/90 font-body text-base leading-normal max-w-[450px]"
          >
            <p>
              As organisations modernise platforms, adopt AI and expand into new markets,
              they need technology partners who can deliver at pace and keep critical systems
              running. Linnk Innovation Hub provides end-to-end technology services across cloud,
              applications, AI, data, marketing and programme delivery.
            </p>
            <p>
              By combining specialist engineering, proven delivery frameworks and the global
              talent network of Linnk Group, we help organisations accelerate delivery,
              reduce operational risk and realise lasting value from their technology investments.
            </p>
          </motion.div>
        </div>

        {/* Right Column: video card (tall on mobile, square on desktop) */}
        <div>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: 0.2 }}
  className="relative isolate w-full lg:aspect-square rounded-[20px] lg:rounded-3xl overflow-hidden bg-brand-obsidian [clip-path:inset(0_round_20px)] lg:[clip-path:inset(0_round_24px)]"
>
  {/* Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover object-center rounded-[20px] lg:rounded-3xl"
  >
    <source src="/The-Innovation-Hub-Why.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55 rounded-[20px] lg:rounded-3xl" />

            {/* Stats: 1 column on mobile, 2x2 grid on desktop */}
            <div className="relative lg:absolute z-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 px-[38px] py-4 lg:p-0 lg:inset-x-[7%] lg:inset-y-[14%]">
              {/* Top Left */}
              <div className="border-b border-white/30 lg:border-r flex flex-col justify-center py-9 lg:py-0 lg:pl-[31%]">
                <span className={NUM}>
                  <Counter end={7} suffix="+" />
                </span>
                <span className={`${LABEL} mt-3 lg:mt-5`}>countries</span>
              </div>

              {/* Top Right */}
              <div className="border-b border-white/30 flex flex-col justify-center py-9 lg:py-0 lg:pl-[14%]">
                <span className={LABEL}>Since</span>
                <span className={`${NUM} mt-1 lg:mt-2`}>
                  <Counter end={2022} duration={2} />
                </span>
                <span className={`${LABEL} mt-3 lg:mt-5 lg:max-w-[170px]`}>
                  Professional Services
                </span>
              </div>

              {/* Bottom Left */}
              <div className="border-b border-white/30 lg:border-b-0 lg:border-r flex flex-col justify-center py-9 lg:py-0 lg:pl-[31%]">
                <span className={NUM}>
                  <Counter end={500} suffix="+" />
                </span>
                <span className={`${LABEL} mt-3 lg:mt-5`}>specialists</span>
              </div>

              {/* Bottom Right */}
              <div className="flex flex-col justify-center py-9 lg:py-0 lg:pl-[14%]">
                <span className={LABEL}>Since</span>
                <span className={`${NUM} mt-1 lg:mt-2`}>
                  <Counter end={2023} duration={2} />
                </span>
                <span className={`${LABEL} mt-3 lg:mt-5 lg:max-w-[170px]`}>
                  ISO 9001 and EcoVadis
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}