import React from 'react';
import { motion } from 'framer-motion';

const BG_IMG = '/letstalkbg.png';

export default function Header() {
  return (
    <section className="relative w-full overflow-hidden text-white flex flex-col justify-end bg-[#011511] min-h-[340px] sm:min-h-[380px] lg:min-h-[330px] px-6 sm:px-8 lg:px-[65px] pt-8 lg:pt-12 pb-6 lg:pb-10">
      {/* BG image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${BG_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Heading + intro */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-12">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-semibold text-[48px] sm:text-[76px] lg:text-[96px] xl:text-[112px] leading-[0.95] tracking-[-0.01em] text-white"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.4] tracking-[-0.04em] text-white max-w-[300px] sm:max-w-[400px] lg:max-w-[380px] lg:mb-1 lg:shrink-0"
        >
          Your privacy matters to us. Learn how we collect, use, and protect
          your personal information.
        </motion.p>
      </div>
    </section>
  );
}