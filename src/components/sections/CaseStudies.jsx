import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const CASES = [
  {
    title:
      'How a B2B Financial Services Enterprise Increased Production Releases from 2 to 40+ a Month with AWS',
    image: '/smal-2.jpg',
    href: '/how-a-b2b-financial-services-enterprise-increased-production-releases-from-2-to-40-a-month-with-aws/',
  },
  {
    title:
      'How a Mid-Sized General Insurer Gave 1,200+ Employees Direct Access to Live Business Data',
    image: '/Smal-1.jpg',
    href: '/how-a-mid-sized-general-insurer-gave-1200-employees-direct-access-to-live-business-data/',
  },
  {
    title:
      'How a Large-Scale Pharmacy Retailer Migrated Its Prescription and Inventory Platform to AWS Without Disrupting Prescription Dispensing',
    image: '/SMal-3.jpg',
    href: '/how-a-large-scale-pharmacy-retailer-migrated-its-prescription-and-inventory-platform-to-aws-without-disrupting-prescription-dispensing/',
  },
];

/* Same hover animation as the Hero CTA, in a dark-on-white version:
   pill slides right, left circle zooms in, right circle zooms out */
function CtaButton({ href, label }) {
  return (
    <a href={href} aria-label={label} className="group relative flex items-center w-fit">
    <span className="absolute left-0 top-0 w-[44px] h-[44px] flex items-center justify-center rounded-full border border-brand-mint bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
  <ArrowRight className="w-4 h-4 stroke-[3]" />
</span>

<span className="relative z-10 h-[44px] px-5 flex items-center justify-center rounded-full border border-black/80 text-black text-[12px] xl:text-[13px] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[44px] group-hover:bg-brand-mint group-hover:border-brand-mint">
  {label}
</span>

<span className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-black/80 text-black scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
</span>
    </a>
  );
}


/* Scroll-linked zoom-in + blur for any block of text/buttons */
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


export default function CaseStudies() {
  // scroll-linked heading: slight zoom-in + blur clears as you scroll
  const headRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headRef,
    offset: ['start 95%', 'start 45%'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);

  const paraBlur = useTransform(scrollYProgress, [0.2, 1], ['blur(6px)', 'blur(0px)']);
  const paraOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0.2, 1]);

  return (
<section className="relative w-full bg-white text-black pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-[1900px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 sm:mb-14">
          <div ref={headRef} className="origin-left">
     <motion.h2
  style={{ scale: titleScale, filter: titleBlur, opacity: titleOpacity }}
  className="font-heading font-medium text-5xl sm:text-6xl lg:text-[84px] leading-[1.05] tracking-normal mb-5 origin-left will-change-transform"
>
  Selected Work
</motion.h2>

           <motion.p
  style={{ filter: paraBlur, opacity: paraOpacity }}
  className="font-heading font-medium text-base sm:text-lg lg:text-[26px] leading-snug tracking-normal"
>
              A look at what we’ve built, delivered and supported.
            </motion.p>
          </div>

          <div className="md:mt-10 md:mr-6">
            <CtaButton href="/case-studies/" label="View Our Work" />
          </div>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {CASES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-white border border-black/10"
            >
              {/* Image */}
{/* Image: shorter (was aspect-[3/2]) */}
<a href={item.href} className="block overflow-hidden aspect-[16/10] bg-black/5">
  <img
    src={item.image}
    alt={item.title}
    draggable={false}
    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
  />
</a>

{/* Content: smaller padding, smaller title, smaller gap */}
{/* Content */}
<div className="p-5 sm:p-6 flex flex-col">
<ScrollReveal>
  <h3 className="font-heading font-normal text-lg sm:text-xl lg:text-[21px] xl:text-[23px] leading-[1.35] tracking-normal mb-5 mt-1 pr-4 xl:pr-10">
    {item.title}
  </h3>
</ScrollReveal>
  <ScrollReveal offset={['start 100%', 'start 70%']}>
    <CtaButton href={item.href} label="Know More" />
  </ScrollReveal>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}