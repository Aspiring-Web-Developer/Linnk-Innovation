import React from 'react';
import { motion } from 'framer-motion';

const BG_IMG = '/letstalkbg.png';

export default function Header() {
  return (
    <section className="relative w-full overflow-hidden text-white flex flex-col justify-between bg-[#011511] min-h-[340px] sm:min-h-[380px] lg:min-h-[330px] px-6 sm:px-8 lg:px-[65px] pt-8 lg:pt-12 pb-6 lg:pb-10">
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

      {/* Top: call label + phone number */}
{/* Top: call label + phone number */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  className="relative z-10 flex flex-col gap-1 lg:gap-2"
>
  <span className="font-body text-[14px] sm:text-[15px] lg:text-[17px] uppercase tracking-[0.01em] text-white">
    Give us a call:
  </span>
  <a
    href="tel:+442038543333"
    className="font-heading font-semibold text-[28px] sm:text-[32px] lg:text-[38px] leading-[1.1] tracking-[-0.01em] text-white hover:text-brand-mint transition-colors duration-300 w-fit"
  >
    +44 (0)20 3854 3333
  </a>
</motion.div>

{/* Heading + intro */}
<div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-12 mt-10 lg:mt-0">
  <motion.h1
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="font-heading font-semibold text-[54px] sm:text-[84px] lg:text-[104px] xl:text-[124px] leading-[0.95] tracking-[-0.01em] text-white"
  >
    Contact Us
  </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.4] tracking-[-0.04em] text-white max-w-[300px] sm:max-w-[400px] lg:max-w-[420px] lg:mb-1 lg:shrink-0"
        >
          Connect with our team to explore tailored solutions and get the
          support you need.
        </motion.p>
      </div>
    </section>
  );
}