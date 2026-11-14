import React from 'react';
import { motion } from 'framer-motion';

const BG_IMG = '/letstalkbg.png';

export default function Header() {
  return (
    <section className="relative w-full overflow-hidden text-white flex flex-col justify-between bg-[#011511] min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] xl:min-h-[28.8vw] px-6 sm:px-8 lg:px-[65px] pt-8 lg:pt-14 pb-6 lg:pb-12">
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

      {/* Top-left intro */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 font-heading font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.45] tracking-[-0.04em] text-white max-w-[300px] sm:max-w-[400px] lg:max-w-[430px]"
      >
        Explore services that simplify{' '}
        <br className="hidden lg:block" />
        challenges and drive business{' '}
        <br className="hidden lg:block" />
        growth.
      </motion.p>

      {/* Heading + right paragraph */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-12 mt-10 lg:mt-0">
<motion.h1
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
  className="font-heading font-semibold text-[44px] sm:text-[64px] lg:text-[84px] xl:text-[92px] leading-[0.95] tracking-[-0.01em] text-white lg:mb-5 xl:mb-[1.6vw]"
>
  Our Services
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.4] tracking-[-0.04em] text-white max-w-[300px] sm:max-w-[400px] lg:max-w-[380px] lg:mb-1 lg:shrink-0"
        >
          Discover tailored solutions{' '}
          <br className="hidden lg:block" />
          designed to support your{' '}
          <br className="hidden lg:block" />
          business goals with our{' '}
          <br className="hidden lg:block" />
          comprehensive range of services.
        </motion.p>
      </div>
    </section>
  );
}