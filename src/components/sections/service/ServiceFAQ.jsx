import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceFAQ({
  label = 'FAQ',
  title = 'Common Questions',
  faqs = [],
}) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative w-full bg-white text-black pt-14 lg:pt-20 pb-14 lg:pb-20 px-4 sm:px-8 lg:px-[100px]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[748fr_852fr] gap-10 lg:gap-12 items-start">
        {/* Left: sticky heading */}
        <div data-faq-sticky className="lg:sticky lg:top-[60px] self-start">
          <span className="block font-body text-[14px] lg:text-[16px] text-black/55 mb-1">
            {label}
          </span>
          <h2 className="font-body font-normal text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.1] tracking-[-0.02em] text-black max-w-[6em]">
            {title}
          </h2>
        </div>

        {/* Right: Q&A list (scrolls) */}
        <div>
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-black/20 pt-6 lg:pt-[28px] pb-8 lg:pb-[52px] first:pt-0"
            >
              <h3 className="font-body font-normal text-[19px] lg:text-[21px] leading-[1.3] text-black mb-2">
                {faq.q}
              </h3>
              <p className="font-body text-[15px] lg:text-[16px] leading-[1.55] text-black">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}