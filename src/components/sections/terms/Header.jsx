import React from 'react';
import { motion } from 'framer-motion';

const BG_IMG = '/letstalkbg.png';

export default function Header() {
  return (
    <section className="relative w-full overflow-hidden text-white flex flex-col justify-end bg-[#011511] min-h-[300px] sm:min-h-[340px] lg:min-h-[330px] px-6 sm:px-8 lg:px-[65px] pt-8 pb-6 lg:pb-9">
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
          className="font-heading font-semibold text-[48px] sm:text-[72px] lg:text-[88px] xl:text-[128px] leading-[0.95] tracking-[-0.03em] text-white"
        >
          Terms and
          <br />
          Conditions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.4] tracking-[0.02em] text-white max-w-[300px] sm:max-w-[400px] lg:max-w-[380px] lg:mb-1 lg:shrink-0"
        >
          Understand the terms that guide your use of our website and the
          conditions for accessing our services.
        </motion.p>
      </div>
    </section>
  );
}