import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/* ───────── DATA: each item = 1 image card + 1 text card ───────── */
const INSIGHTS = [
  {
    image: '/insight-1.jpeg',
    tag: 'Blog',
    title: 'Security as a Continuous Check, Not an Annual Audit',
    text: 'Your cloud changes every week, and your security checks should keep pace. Discover how continuous security catches risks early without slowing your team down.',
    href: '/blog/',
  },
  {
    image: '/insight-2.jpg',
    tag: 'Blog',
    title: 'Ask Your Data Anything: The End of Waiting on Reports',
    text: 'Turn your data into instant insights without waiting for lengthy reports. AI-powered analytics lets you ask questions, uncover trends, and make smarter decisions in real time.',
    href: '/blog/',
  },
];

/* ───────── Scroll-linked zoom-in + blur for text blocks ───────── */
function ScrollReveal({ children, className = '', offset = ['start 95%', 'start 60%'] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(4px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, filter: blur, opacity }}
      className={`origin-left will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

function MintCta({ href, label }) {
  return (
    <a href={href} aria-label={label} className="group relative flex items-center w-fit">
      {/* left circle: zooms in on hover (mint) */}
      <span className="absolute left-0 top-0 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        <ArrowRight className="w-5 h-5 stroke-[3]" />
      </span>

      {/* pill: slides right on hover, stays mint */}
      <span className="relative z-10 h-[50px] px-6 flex items-center justify-center rounded-full bg-brand-mint text-black text-[13px] xl:text-[14px] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[50px]">
        {label}
      </span>

      {/* right circle: zooms out on hover (mint) */}
      <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-brand-mint text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
        <ArrowUpRight className="w-5 h-5 stroke-[3]" />
      </span>
    </a>
  );
}

/* ───────── Image card: rotate on hover + cursor-follow arrow ───────── */
function ImageCard({ src, alt, href }) {
  const ref = useRef(null);
  const idleTimer = useRef(null);
  const [hover, setHover] = useState(false);
  const [idle, setIdle] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 24, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 24, mass: 0.4 });

  const track = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const startIdleTimer = () => {
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), 180);
  };

  const onEnter = (e) => {
    track(e);
    // jump the circle to the cursor so it doesn't fly in from the corner
    sx.jump(x.get());
    sy.jump(y.get());
    setHover(true);
    startIdleTimer();
  };

  const onMove = (e) => {
    track(e);
    setIdle(false);       // moving = no heartbeat
    startIdleTimer();     // stopped for 180ms = heartbeat
  };

  const onLeave = () => {
    clearTimeout(idleTimer.current);
    setHover(false);
    setIdle(false);
  };

  useEffect(() => () => clearTimeout(idleTimer.current), []);

  return (
    <a
      ref={ref}
      href={href}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block overflow-hidden min-h-[380px] sm:min-h-[560px] lg:min-h-[640px] lg:cursor-none bg-black/5"
    >
      {/* Landscape image -> vertical center crop; zooms + rotates on hover */}
<img
  src={src}
  alt={alt}
  draggable={false}
  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:rotate-[4deg] group-hover:scale-[1.12]"
/>

      {/* Cursor-follow circle */}
    <motion.div
  style={{ x: sx, y: sy }}
  className="pointer-events-none absolute left-0 top-0 -ml-[35px] -mt-[35px] z-20 hidden lg:block"
>
        <motion.div
          animate={{
            opacity: hover ? 1 : 0,
            scale: !hover ? 0.3 : idle ? [1, 1.2, 1, 1.12, 1] : 1,
          }}
          transition={{
            opacity: { duration: 0.25 },
            scale: idle
              ? { duration: 1.1, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.3, 0.45, 1] }
              : { duration: 0.3, ease: 'easeOut' },
          }}
        className="w-[70px] h-[70px] rounded-full bg-black text-white flex items-center justify-center"
>
  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
        </motion.div>
      </motion.div>
    </a>
  );
}

/* ───────── Text card ───────── */
function TextCard({ item }) {
  return (
    <div className="flex flex-col bg-white border border-black/10 p-6 sm:p-8 min-h-[380px] sm:min-h-[560px] lg:min-h-[640px]">
<ScrollReveal>
  <a
    href={item.href}
    className="inline-flex items-center h-[34px] px-4 rounded-full border border-black/80 text-[12px] font-heading font-semibold uppercase transition-all duration-300 hover:bg-brand-mint hover:border-brand-mint hover:text-black"
  >
    {item.tag}
  </a>
</ScrollReveal>

      <ScrollReveal className="mt-8">
        <h3 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[34px] xl:text-[40px] leading-[1.1] tracking-normal">
          {item.title}
        </h3>
      </ScrollReveal>

      <ScrollReveal className="mt-10">
        <p className="font-heading font-normal text-base xl:text-[18px] leading-[1.5] tracking-normal text-black/60">
          {item.text}
        </p>
      </ScrollReveal>

      {/* round arrow button */}
      <a
        href={item.href}
        aria-label={item.title}
        className="group mt-auto pt-8 w-fit"
      >
        <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-black/80 text-black transition-all duration-500 group-hover:bg-brand-mint group-hover:border-brand-mint group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5 stroke-[3] transition-transform duration-500 group-hover:rotate-45" />
        </span>
      </a>
    </div>
  );
}

/* ───────── Section ───────── */
export default function InsightsSection() {
  // scroll-linked heading: slight zoom-in + blur clears as you scroll
  const headRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headRef,
    offset: ['start 95%', 'start 45%'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);

  return (
    <section className="relative w-full bg-white text-black pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-[1900px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 sm:mb-14 lg:mb-20">
          <div ref={headRef}>
            <motion.h2
              style={{ scale: titleScale, filter: titleBlur, opacity: titleOpacity }}
              className="font-heading font-medium text-5xl sm:text-6xl lg:text-[84px] leading-[1.05] tracking-normal origin-left will-change-transform"
            >
              Insights
            </motion.h2>
          </div>

          <div className="sm:mr-4">
            <MintCta href="/blog/" label="Explore More" />
          </div>
        </div>

        {/* Pairs: [image][text]  [image][text] */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {INSIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <ImageCard src={item.image} alt={item.title} href={item.href} />
              <TextCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}