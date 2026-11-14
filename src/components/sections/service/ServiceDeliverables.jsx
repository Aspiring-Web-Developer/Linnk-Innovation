import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceDeliverables({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id="deliverables"
      className="relative w-full box-border overflow-hidden bg-[#f8f8f8] text-black pt-5 pb-16 sm:pb-20 lg:pb-[100px] px-5 sm:px-8 md:px-12 lg:pl-[max(114px,calc((100vw_-_1600px)/2))] lg:pr-[max(84px,calc((100vw_-_1600px)/2))]"
    >
      {/* Label (common for all pages) */}
      <p
        className="font-body text-[14px] sm:text-[16px]"
        style={{ lineHeight: '24px', color: 'rgba(0,0,0,0.6)', margin: '0 0 12px 0' }}
      >
        What You Get
      </p>

      {/* Big heading (common for all pages) */}
      <h2
        className="font-heading"
        style={{
          fontSize: 'clamp(30px, 6vw, 68px)',
          fontWeight: 105,
          lineHeight: 1,
          letterSpacing: 'clamp(1px, 0.35vw, 3px)',
          color: '#000',
          margin: '0 0 27px 0',
          maxWidth: '100%',
        }}
      >
        Deliverables
      </h2>

      {/* Chips (change per page) */}
      <div className="flex flex-wrap gap-2.5 sm:gap-[17px]">
        {items.map((label, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="font-body box-border flex items-center max-w-full min-h-[38px] px-3 py-2 sm:px-4 sm:py-0 border border-black/15 bg-[#f8f8f8] text-[12px] sm:text-[14px] leading-[1.3] sm:leading-none uppercase whitespace-normal sm:whitespace-nowrap hover:bg-black hover:text-white hover:border-black transition-colors duration-200 cursor-default"
          >
            {label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}