import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/* ── Put your 3 image names here (no extension needed, it's auto-detected) ── */
const IMAGES = {
  topRight: '/appple',    // square box, top right (your file has 3 p's: "appple")
  pill: '/VIOLET',        // pill shape on the right
  bottomLeft: '/Orange',  // box, bottom left
};

const EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

/* Tries .jpg, .jpeg, .png, .webp automatically */
function SmartImg({ src, alt = '', className = '' }) {
  const [i, setI] = useState(0);
  return (
    <img
      src={`${src}${EXTS[i]}`}
      alt={alt}
      draggable={false}
      onError={() => setI((n) => (n + 1 < EXTS.length ? n + 1 : n))}
      className={className}
    />
  );
}

/* The whole box (shape + image) floats with the scroll:
   scroll down -> box goes up, scroll up -> box comes back down */
function FloatBox({ src, progress, from = 40, to = -70, className = '' }) {
  const y = useTransform(progress, [0, 1], [from, to]);

  return (
    <motion.div
      style={{ y }}
      className={`absolute z-20 overflow-hidden isolate will-change-transform ${className}`}
    >
      <SmartImg src={src} className="w-full h-full object-cover" />
    </motion.div>
  );
}

/* Scroll-linked zoom-in + blur for text blocks */
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
      className={`origin-center will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* Outline pill + circle, hero-style hover (pill slides, left circle zooms in, right zooms out) */
function CtaButton({ href, label }) {
  return (
    <a href={href} aria-label={label} className="group relative flex items-center w-fit">
      <span className="absolute left-0 top-0 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-brand-mint bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        <ArrowRight className="w-5 h-5 stroke-[3]" />
      </span>

      <span className="relative z-10 h-[50px] px-6 flex items-center justify-center rounded-full border border-black/80 text-black text-[13px] xl:text-[14px] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[50px] group-hover:bg-brand-mint group-hover:border-brand-mint">
        {label}
      </span>

      <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-black/80 text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
        <ArrowUpRight className="w-5 h-5 stroke-[3]" />
      </span>
    </a>
  );
}

export default function LetsTalk() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const { scrollYProgress: sectionProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start'],
});

  // scroll-linked heading: slight zoom-in + blur clears as you scroll
  const { scrollYProgress } = useScroll({
    target: headRef,
    offset: ['start 95%', 'start 45%'],
  });
  const titleScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);

  return (
<section
  ref={sectionRef}
 className="relative w-full overflow-x-clip bg-white text-black select-none pt-16 sm:pt-20 pb-28 lg:pb-32 px-5 sm:px-8"
>
      {/* Floating images (shape stays put, image inside moves on scroll) */}
<FloatBox
  src={IMAGES.topRight}
  progress={sectionProgress}
  from={0}
  to={-110}
  className="hidden md:block right-0 top-4 w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]"
/>
{/* Pill: fixed in place, does not move on scroll */}
<div className="hidden md:block absolute z-30 overflow-hidden isolate right-[6%] lg:right-[8%] top-[100px] lg:top-[115px] w-[105px] h-[60px] lg:w-[176px] lg:h-[100px] rounded-full">
  <SmartImg src={IMAGES.pill} className="w-full h-full object-cover" />
</div>
<FloatBox
  src={IMAGES.bottomLeft}
  progress={sectionProgress}
  from={0}
  to={-90}
  className="hidden md:block left-5 lg:left-10 bottom-10 w-[120px] h-[104px] lg:w-[200px] lg:h-[168px]"
/>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <div ref={headRef}>
  <motion.h2
  style={{
    scale: titleScale,
    filter: titleBlur,
    opacity: titleOpacity,
    lineHeight: 1.22,
  }}
  className="font-heading font-medium text-3xl sm:text-4xl lg:text-[52px] tracking-normal will-change-transform"
>
  Let’s talk about what
  <br />
  your business needs
  <br />
  <span className="relative inline-block">
    next
    <svg
      className="absolute left-0 -bottom-3 w-full h-[18px]"
      viewBox="0 0 100 18"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 12 Q 50 3 98 12"
        fill="none"
        stroke="#31f8ca"
        strokeWidth="9"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
      />
    </svg>
  </span>
  .
</motion.h2>
        </div>

<ScrollReveal className="mt-10 lg:mt-14">
  <p className="font-heading font-medium text-base sm:text-lg lg:text-[20px] leading-snug tracking-normal max-w-[30rem]">
    Bring in the expertise to build it, deliver it and keep it{' '}
    <span className="font-serif italic font-normal">moving.</span>
  </p>
</ScrollReveal>

<ScrollReveal className="mt-8" offset={['start 100%', 'start 70%']}>
  <CtaButton href="/contact-us/" label="Speak to a Specialist" />
</ScrollReveal>
      </div>
    </section>
  );
}