import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PAUSE_MS = 5000;       // wait 5 seconds between scrolls
const SLIDE_SECONDS = 0.9;   // how long each set-to-set scroll takes

export default function WhyLinnk() {
  const [pos, setPos] = useState(0);         // 0 = first set, 1 = second set
  const [snap, setSnap] = useState(false);   // instant reset (invisible, sets are identical)
  const [visible, setVisible] = useState(5); // logos per set

  // scroll-linked heading animation (hooks must be INSIDE the component)
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 95%', 'start 45%'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);

  const paraBlur = useTransform(scrollYProgress, [0.2, 1], ['blur(6px)', 'blur(0px)']);
  const paraOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0.2, 1]);

  // 5 logos per set on desktop, 3 on mobile
  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 640 ? 3 : 5);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // every 5 seconds -> slide to the next set
  useEffect(() => {
    const id = setInterval(() => {
      setSnap(false);
      setPos(1);
    }, PAUSE_MS);
    return () => clearInterval(id);
  }, []);

  // after sliding to set 2, jump back to set 1 with no animation
  const handleComplete = () => {
    if (pos === 1) {
      setSnap(true);
      setPos(0);
    }
  };

  const Set = ({ keyPrefix }) => (
    <div className="flex w-1/2 shrink-0">
      {Array.from({ length: visible }).map((_, i) => (
        <div
          key={`${keyPrefix}-${i}`}
          className="flex flex-1 items-center justify-center"
        >
          <img
            src="/wowelse.png"
            alt="wowelse"
            draggable={false}
            className="w-[72%] h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden text-black select-none bg-gradient-to-b from-white via-[#8ffbe0] to-[#3ff7d0] pt-20 sm:pt-24 pb-20 sm:pb-24">
      {/* Heading + text */}
      <div
        ref={textRef}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center px-6 sm:px-10"
      >
        <motion.h2
          style={{ scale: titleScale, filter: titleBlur, opacity: titleOpacity }}
          className="font-heading font-medium text-5xl sm:text-6xl lg:text-[84px] leading-[1.05] tracking-tight mb-6 will-change-transform"
        >
          Trusted Where It Counts
        </motion.h2>

        <motion.p
          style={{ filter: paraBlur, opacity: paraOpacity }}
          className="font-heading font-semibold text-base sm:text-lg lg:text-[21px] max-w-[34rem] leading-snug"
        >
          Our clients rely on us for the systems, data and operations their
          business runs{' '}
          <span className="font-serif italic font-normal">on every day</span>
        </motion.p>
      </div>

      {/* Set-by-set logo strip */}
      <div className="mt-24 sm:mt-36 lg:mt-44 mx-auto w-full max-w-[1300px] px-4 sm:px-6">
        <div className="overflow-hidden">
          <motion.div
            className="flex w-[200%]"
            animate={{ x: pos === 0 ? '0%' : '-50%' }}
            transition={
              snap
                ? { duration: 0 }
                : { duration: SLIDE_SECONDS, ease: [0.65, 0, 0.35, 1] }
            }
            onAnimationComplete={handleComplete}
          >
            <Set keyPrefix="a" />
            <Set keyPrefix="b" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}