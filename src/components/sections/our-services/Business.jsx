import React from 'react';
import { motion } from 'framer-motion';

export default function Business() {
  return (
<section className="w-full bg-white pt-20 sm:pt-24 lg:pt-28 xl:pt-[7vw] pb-14 sm:pb-16 lg:pb-20 xl:pb-[5vw]">
      <div className="px-6 sm:px-8 xl:px-[2.6vw] flex flex-col items-center text-center">
        {/* Heading */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className="font-heading font-medium text-[38px] sm:text-[50px] lg:text-[62px] xl:text-[3.6vw] leading-[1.1] tracking-[-0.02em] text-black"
>
  Business Challenge
</motion.h2>

        {/* Paragraph (same wrap as the original on desktop) */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 xl:mt-[2.3vw] font-body text-[17px] sm:text-[19px] lg:text-[20px] xl:text-[1.2vw] leading-[1.4] text-black/70 max-w-[900px] xl:max-w-[50vw] lg:whitespace-nowrap"
        >
          Businesses today face growing pressure to adapt to changing customer{' '}
          <br className="hidden lg:block" />
          expectations, evolving markets, and increasing operational complexity. Inefficient{' '}
          <br className="hidden lg:block" />
          processes, limited resources, and disconnected systems can make it difficult to{' '}
          <br className="hidden lg:block" />
          scale and achieve sustainable growth.
        </motion.p>
      </div>
    </section>
  );
}