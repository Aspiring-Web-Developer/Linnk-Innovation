import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/* One stat: counts from 0 up to `value` when it scrolls into view */
function StatItem({ value, suffix = '+', label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
<div className="font-body font-light text-[72px] sm:text-[96px] lg:text-[120px] xl:text-[128px] leading-none tracking-normal text-black tabular-nums">
        {n.toLocaleString()}
        <span className="text-[#2bb597]">{suffix}</span>
      </div>
<p className="font-body font-light text-[14px] lg:text-[15px] tracking-[0.02em] text-black/60 mt-4 lg:mt-[18px]">
  {label}
</p>
    </motion.div>
  );
}

export default function ServiceStats({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="relative w-full bg-[#f9f9f9] text-black px-6 sm:px-10 lg:px-12 pb-12 lg:pb-16">
      {/* The top line comes from ServiceOverview's divider; this adds the bottom one */}
      <div className="max-w-[1280px] mx-auto border-b border-black/15">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-0 lg:-mx-5 pt-6 lg:pt-7 pb-16 lg:pb-20">
          {stats.map((s, i) => (
            <StatItem key={s.label} index={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}