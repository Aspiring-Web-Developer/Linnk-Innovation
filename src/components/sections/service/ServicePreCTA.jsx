import React from 'react';
import { motion } from 'framer-motion';
import SwapButton from '@/components/common/SwapButton';

export default function ServicePreCTA({ data }) {
  if (!data) return null;

  return (
    <section className="relative bg-[#070b14] text-white py-28 sm:py-36 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-mint/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-mint" />
          <span className="font-serif italic text-brand-mint text-[17px]">
            ( GET STARTED )
          </span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-medium text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.08] text-white tracking-tight"
        >
          {data.headline || 'Accelerate Your Digital Delivery.'}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body font-light text-white/80 text-[17px] sm:text-[20px] max-w-2xl leading-relaxed mt-6 mb-10"
        >
          {data.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SwapButton
            href={data.ctaLink || '/contact-us/'}
            variant="filled"
            className="px-9 py-4 text-[15px]"
          >
            {data.ctaText || 'TALK TO OUR EXPERTS'}
          </SwapButton>
        </motion.div>
      </div>
    </section>
  );
}
