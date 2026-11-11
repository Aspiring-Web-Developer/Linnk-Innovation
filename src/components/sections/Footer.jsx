import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Change this if the file is .png / .webp / .jpeg
const BG_IMG = '/Footer.jpg';

const SOCIALS = [
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'YouTube', href: 'https://youtube.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
];

const QUICK_LINKS = [
  { name: 'About Us', href: '/about-us/' },
  { name: 'Services', href: '/services/' },
  { name: 'Work', href: '/case-studies/' },
  { name: 'Contact Us', href: '/contact-us/' },
];

// Slides in from the left (left -> right) when it enters the screen
function SlideIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Column heading with a wavy cyan underline that wipes in left to right
function ColHeading({ children }) {
  return (
    <SlideIn>
      <h4 className="relative inline-block font-body font-medium text-[22px] lg:text-[24px] tracking-[-0.03em] text-white leading-tight mb-8 lg:mb-10">
        <span className="relative z-10">{children}</span>
        <motion.svg
          className="absolute left-0 -bottom-2 w-full h-[14px] z-0"
          viewBox="0 0 100 18"
          preserveAspectRatio="none"
          aria-hidden="true"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <path
            d="M2 12 Q 50 3 98 12"
            fill="none"
            stroke="#31f8ca"
            strokeWidth="7"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>
      </h4>
    </SlideIn>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative w-full text-white overflow-hidden flex flex-col min-h-[880px] lg:min-h-screen px-6 sm:px-8 lg:px-[38px] pt-80 sm:pt-72 lg:pt-64 pb-8 -mt-16 lg:-mt-24"
      style={{
        backgroundColor: '#011511',
        backgroundImage: `url(${BG_IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Big heading */}
      <SlideIn>
        <h2 className="font-body font-medium text-[56px] sm:text-[96px] lg:text-[128px] leading-[1] tracking-[-0.04em] text-white mb-14 lg:mb-16">
          Let&apos;s Connect
        </h2>
      </SlideIn>

      {/* Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[671fr_534fr_621fr] gap-14 lg:gap-0">
        {/* Head office */}
        <div>
          <ColHeading>Head office</ColHeading>
          <div className="space-y-5 font-body text-[17px] lg:text-[20px] leading-[1.4] tracking-[-0.03em] text-white">
            <SlideIn delay={0.1}>
              <p className="max-w-[500px]">
                First Floor, 2 London Bridge London SE1 9RA United Kingdom.
              </p>
            </SlideIn>
            <SlideIn delay={0.2}>
              <a href="tel:+442038543333" className="block hover:text-brand-mint transition-colors">
                +44 (0)20 3854 3333
              </a>
            </SlideIn>
            <SlideIn delay={0.3}>
              <a
                href="mailto:info@linnkinnovationhub.com"
                className="block hover:text-brand-mint transition-colors"
              >
                info@linnkinnovationhub.com
              </a>
            </SlideIn>
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <ColHeading>Quick Link</ColHeading>
          <ul className="space-y-5">
            {QUICK_LINKS.map((l, i) => (
              <li key={l.name}>
                <SlideIn delay={0.1 + i * 0.1}>
                  <a
                    href={l.href}
                    className="font-body font-semibold uppercase text-[15px] lg:text-[17px] tracking-[-0.01em] text-white hover:text-brand-mint transition-colors"
                  >
                    {l.name}
                  </a>
                </SlideIn>
              </li>
            ))}
          </ul>
        </div>

        {/* Catch Our Updates */}
        <div>
          <ColHeading>Catch Our Updates</ColHeading>
          <div className="flex flex-wrap gap-x-8 gap-y-5 lg:w-[330px]">
            {SOCIALS.map((s, i) => (
              <SlideIn key={s.name} delay={0.1 + i * 0.1}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 border-b-2 border-white/40 pb-1 font-body font-semibold uppercase text-[13px] lg:text-[14px] text-white hover:text-brand-mint hover:border-brand-mint transition-colors"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3] text-white/60 transition-all group-hover:text-brand-mint group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto pt-16 lg:pt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-body text-[14px] lg:text-[16px] text-white/70">
        <SlideIn>
          <p>Linnk Innovation Hub © 2026 - All Rights Reserved.</p>
        </SlideIn>
        <SlideIn delay={0.15}>
          <div className="flex items-center">
            <a href="/privacy-policy/" className="pr-4 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions/"
              className="pl-4 border-l border-white/40 hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>
          </div>
        </SlideIn>
      </div>
    </footer>
  );
}