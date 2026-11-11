import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    num: '01',
    q: '01. What services does Linnk Innovation Hub provide?',
    a: 'Linnk Innovation Hub provides technology and business solutions across AI, digital transformation, application development, managed quality assurance, and data intelligence.',
  },
  {
    num: '02',
    q: '02. Can Linnk Innovation Hub tailor solutions to our business needs?',
    a: 'Yes. Our solutions are tailored around your business goals, operational challenges, technology environment, and long-term growth requirements.',
  },
  {
    num: '03',
    q: '03. What engagement models does Linnk Innovation Hub offer?',
    a: 'We offer Managed, Dedicated, Shared, and Hybrid engagement models to provide maximum flexibility based on your project and business requirements.',
  },
  {
    num: '04',
    q: '04. Can Linnk Innovation Hub work with our existing systems?',
    a: 'Yes. We can work alongside your existing systems and teams to modernise, integrate, optimise, and scale your technology ecosystem without disruption.',
  },
  {
    num: '05',
    q: '05. How can we get started with Linnk Innovation Hub?',
    a: 'Simply get in touch with our team to discuss your requirements, challenges, and goals. We’ll explore the right delivery approach for your business needs.',
  },
];

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
      className={`origin-left will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

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
    <section className="relative w-full bg-[#111111] text-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 overflow-hidden select-none">
      <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* LEFT: heading + subtitle */}
        <div ref={headRef} className="lg:pt-6">
          <motion.h2
            style={{ scale: titleScale, filter: titleBlur, opacity: titleOpacity }}
           className="font-heading font-medium text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.05] tracking-normal origin-left will-change-transform"
          >
            Frequently Asked
            <br />
            Questions ?
          </motion.h2>

          <ScrollReveal className="mt-8 lg:mt-14">
            <p className="font-heading font-medium text-base sm:text-lg lg:text-[19px] leading-snug tracking-normal max-w-[34rem]">
              Find clear answers{' '}
              <span className="font-serif italic font-normal">to common questions</span>{' '}
              about our services, solutions, and approach.
            </p>
          </ScrollReveal>
        </div>

        {/* RIGHT: accordion */}
        <div>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.num}
                initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/80 first:pt-0 py-7 sm:py-8"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="group w-full flex items-center justify-between text-left gap-6 cursor-pointer"
                >
                 <h3
  className={`font-heading font-normal text-lg sm:text-xl lg:text-[21px] xl:text-[22px] leading-snug tracking-normal transition-colors duration-300 group-hover:text-brand-mint ${
    isOpen ? 'text-brand-mint' : 'text-white'
  }`}
>
                    {faq.q}
                  </h3>

                  <span
                    className={`shrink-0 transition-colors duration-300 group-hover:text-brand-mint ${
                      isOpen ? 'text-brand-mint' : 'text-white'
                    }`}
                  >
                  {isOpen ? (
  <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
) : (
  <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
)}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
              <p className="font-body font-light text-[13px] lg:text-[14px] text-white/90 leading-[1.75] tracking-[0.01em] pt-5 sm:pt-6 pr-8 lg:pr-12">
  {faq.a}
</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}