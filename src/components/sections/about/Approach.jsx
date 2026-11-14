import React from 'react';
import { motion } from 'framer-motion';

// Change the extensions if your files are .png / .webp / .jpeg
const CARDS = [
  {
    img: encodeURI('/About-us/Vision.jpg'),
    title: 'Vision',
    text: 'To empower organisations to achieve their ambitions through technology, expertise and innovation.',
  },
  {
    img: encodeURI('/About-us/Mission.jpg'),
    title: 'Mission',
    text: 'To help organisations solve complex challenges through technology, specialist expertise and innovative solutions, while building the capabilities they need for what comes next.',
  },
];

const APPROACH = [
  { label: 'Ambition:', text: 'We think beyond the immediate problem to help our clients achieve what’s next.' },
  { label: 'Innovation:', text: 'We challenge conventional approaches and apply technology, expertise and new thinking to solve complex problems.' },
  { label: 'Excellence:', text: 'We take pride in the quality of our work, the outcomes we deliver and the experience we create for our clients.' },
];

const BODY = 'font-body text-[14px] sm:text-[15px] xl:text-[1.04vw] leading-[1.64] text-white';
const HEADING = 'font-heading font-medium text-[24px] sm:text-[26px] xl:text-[1.5vw] leading-[1.2] tracking-[-0.01em] text-white';

export default function Approach() {
  return (
   <section className="w-full bg-brand-obsidian text-white pt-14 sm:pt-16 lg:pt-20 xl:pt-[5.3vw] pb-14 sm:pb-16 lg:pb-20 xl:pb-[5.3vw]">
      <div className="px-6 sm:px-8 lg:px-[6vw] xl:px-[7.94vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[452fr_452fr_596fr] gap-10 md:gap-6 xl:gap-x-[1.3vw]">
          {/* Vision + Mission cards */}
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full aspect-[452/312] overflow-hidden rounded-[12px]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className={`${HEADING} mt-5 xl:mt-[1.3vw]`}>{c.title}</h3>
              <p className={`${BODY} mt-3 xl:mt-[0.85vw]`}>{c.text}</p>
            </motion.div>
          ))}

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 xl:col-span-1 xl:pl-[2.6vw]"
          >
            <h3 className={HEADING}>Our Approach</h3>

            <div className="mt-5 xl:mt-[1.4vw] space-y-6 xl:space-y-[1.7vw]">
              {APPROACH.map((a) => (
                <div key={a.label}>
                  <p className="font-body font-bold text-[14px] sm:text-[15px] xl:text-[1.04vw] leading-[1.64] text-brand-mint">
                    {a.label}
                  </p>
                  <p className={BODY}>{a.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}