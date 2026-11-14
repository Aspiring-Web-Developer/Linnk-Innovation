import React from 'react';
import { motion } from 'framer-motion';

// Change the extension if your file is .png / .webp / .jpeg
const IMG = encodeURI('/About-us/about us.jpg');

const PARAGRAPHS = [
  'Many businesses know what they want to improve. The challenge is finding the right people to make it happen, keep it running, and make sure it works in the real world.',
  'That’s where Linnk Innovation Hub comes in.',
  'Launched in 2025 as the technology services company of Linnk Group, we bring together 100+ engineers and specialists at our Global Capability Centre in Kochi, India. From there, we support organisations across Europe, the Middle East, Asia and North America.',
  'We work with businesses that need stronger systems, better processes, specialist capability or extra delivery support. Often, we manage an ongoing service. Sometimes we join an existing team. Sometimes we help solve one important problem.',
  'Our role is always the same: understand what matters, take ownership of the work, and keep making it better.',
];

export default function Business() {
  return (
    <section className="w-full bg-white pt-14 sm:pt-16 lg:pt-20 xl:pt-[5.3vw] pb-16 lg:pb-20 xl:pb-[5.3vw]">
      <div className="mx-auto px-6 sm:px-8 lg:px-[6vw] xl:px-[7.94vw]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-12">
          {/* Left: content */}
          <div className="w-full lg:w-[46%] xl:w-[39vw]">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-medium text-[30px] sm:text-[40px] lg:text-[44px] xl:text-[3.25vw] leading-[1.1] tracking-[-0.02em] text-black"
            >
              A Practical Partner For Growing Businesses
            </motion.h2>

            <div className="mt-6 lg:mt-8 xl:mt-[2.6vw] space-y-5 xl:space-y-[1.7vw]">
              {PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="font-body text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[1.04vw] leading-[1.64] text-black/70"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[44%] xl:w-[38vw] aspect-[725/772] overflow-hidden shrink-0"
          >
            <img src={IMG} alt="Linnk Innovation Hub team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}