import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

// Swap `Icon` for your IconScout files if you like
const ITEMS = [
  { Icon: PhoneCall, label: '+44 (0)20 3854 3333', href: 'tel:+442038543333' },
  { Icon: Mail, label: 'info@linnkinnovationhub.com', href: 'mailto:info@linnkinnovationhub.com' },
  { Icon: MapPin, label: 'United Kingdom' },
  { Icon: Clock, label: 'Monday – Friday' },
];

const CARD_BG =
  'linear-gradient(160deg, #00d9a3 0%, #00a67d 35%, #006b52 70%, #002a20 100%)';

function InfoCard({ item, index }) {
  const { Icon, label, href } = item;
  const Tag = href ? 'a' : 'div';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tag
        {...(href ? { href } : {})}
        style={{ background: CARD_BG }}
        className="group flex flex-col items-center justify-center text-center gap-3 xl:gap-[0.8vw] rounded-[8px] h-[140px] sm:h-[150px] xl:h-[8.2vw] px-4 shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1"
      >
        {/* White icon circle */}
        <span className="w-[52px] h-[52px] xl:w-[3.15vw] xl:h-[3.15vw] rounded-full bg-white flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw] text-black stroke-[1.5]" />
        </span>

        <span className="font-heading font-medium text-[16px] sm:text-[17px] xl:text-[1.05vw] leading-[1.2] text-white break-all sm:break-normal">
          {label}
        </span>
      </Tag>
    </motion.div>
  );
}

export default function Information() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14 lg:pt-16 xl:pt-[5.2vw] pb-12 sm:pb-14 lg:pb-16 xl:pb-[4vw]">
      <div className="px-6 sm:px-8 xl:pl-[7.9vw] xl:pr-[8.8vw] grid grid-cols-1 xl:grid-cols-[1fr_48.8vw] gap-10 xl:gap-0 items-center">
        {/* Left: heading + text */}
        <div>
<motion.h2
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className="font-heading font-medium text-[38px] sm:text-[46px] lg:text-[52px] xl:text-[3.2vw] leading-[1.1] tracking-[-0.02em] text-black xl:pl-[0.4vw]"
>
  Contact
  <br />
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10">Information</span>
    <svg
      className="absolute left-0 -bottom-[0px] w-full h-4 overflow-visible text-brand-mint z-0"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 5 Q 25 3 50 4.5 T 100 4"
        stroke="currentColor"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </span>
</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 xl:mt-[2.2vw] font-body text-[17px] sm:text-[18px] xl:text-[1.1vw] leading-[1.55] text-black/70 max-w-[420px] xl:max-w-[31vw]"
          >
            We’re here to answer your questions and help you connect with our team.
          </motion.p>
        </div>

        {/* Right: 2x2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-x-[3.9vw] xl:gap-y-[1.3vw]">
          {ITEMS.map((item, i) => (
            <InfoCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}