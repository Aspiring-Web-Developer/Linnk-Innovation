import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceOverview({ data }) {
  if (!data) return null;

  // New fields: label, lead, capabilities.
  // Falls back to the old fields so the 3 pages you haven't written yet still render.
  const label = data.label ?? 'Overview';
  const lead = data.lead ?? data.paragraphs?.join(' ') ?? '';
  const capabilities = data.capabilities ?? data.highlights ?? [];

  return (
    <section
      id="service-overview"
      className="relative w-full bg-[#f9f9f9] text-black pt-16 lg:pt-24 pb-10 lg:pb-14 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Left column fixed at 624px, right column fills the rest (620px at full width) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[624px_1fr] gap-12 lg:gap-x-9">
          {/* Left: label + paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-[14px] sm:text-[15px] text-black/55 mb-5 lg:mb-6">
              {label}
            </p>
            <p className="font-body font-normal text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] lg:leading-[1.17] tracking-normal text-black">
              {lead}
            </p>
          </motion.div>

          {/* Right: Full Capabilities, bottom aligned with the paragraph */}
          <div className="lg:self-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[14px] sm:text-[15px] text-black/55 mb-4 lg:mb-5"
            >
              Full Capabilities
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {capabilities.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-flex items-center h-[38px] px-3 border border-black/20 rounded-[2px] font-body text-[12px] lg:text-[13px] uppercase tracking-[0.015em] text-black bg-transparent hover:border-black transition-colors duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="mt-16 lg:mt-24 h-px w-full bg-black/15" />
      </div>
    </section>
  );
}