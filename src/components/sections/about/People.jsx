import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

// Change the extensions if your files are .png / .webp / .jpeg
const PEOPLE = [
  {
    name: 'Jamie Sobrany',
    role: 'Chief Executive Officer',
    img: encodeURI('/About-us/Jamie Sobrany.jpg'),
    href: '#',
  },
  {
    name: 'Peter Collins',
    role: 'Executive Director and Managing Director, Professional Services',
    img: encodeURI('/About-us/Peter Collins.png'),
    href: '#',
  },
  {
    name: 'Ian O’Neill',
    role: 'Co-founder & Chief Operating Officer',
    img: encodeURI('/About-us/Ian O\'Neill.jpg'),
    href: '#',
  },
  {
    name: 'Amogh Kaliwal',
    role: 'Chief Technology Officer',
    img: encodeURI('/About-us/Amogh Kaliwal.jpg'),
    href: '#',
  },
];

export default function People() {
  return (
<section className="w-full bg-white pt-14 sm:pt-16 lg:pt-20 xl:pt-[5.5vw] pb-12 sm:pb-14 lg:pb-16 xl:pb-[4vw]">
      <div className="px-6 sm:px-8 xl:px-[2.6vw]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto text-center font-heading font-medium text-[30px] sm:text-[40px] lg:text-[44px] xl:text-[3.1vw] leading-[1.1] tracking-[-0.02em] text-black max-w-[900px] xl:max-w-[52vw]"
        >
          Meet The People{' '}
          <span className="font-serif italic font-normal text-[1.1em]">Behind</span>{' '}
          The Ambition And Innovation
        </motion.h2>

        {/* Cards */}
        <div className="mt-10 lg:mt-14 xl:mt-[4.7vw] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-[1.35vw]">
          {PEOPLE.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-black"
            >
              {/* Photo */}
              <div className="w-full aspect-[431/558] overflow-hidden bg-[#d9d9d9]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 px-4 xl:px-[0.7vw] pt-5 xl:pt-[1.3vw] pb-6 xl:pb-[1.8vw]">
                <h3 className="font-heading font-medium text-[24px] xl:text-[1.56vw] leading-[1.2] tracking-[-0.01em] text-white">
                  {p.name}
                </h3>
                <p className="font-body text-[14px] xl:text-[1.04vw] leading-[1.3] tracking-[0.02em] text-brand-mint mt-2 xl:mt-[0.6vw]">
                  {p.role}
                </p>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} on LinkedIn`}
                  className="mt-5 xl:mt-[1.1vw] w-[40px] h-[40px] xl:w-[2.35vw] xl:h-[2.35vw] rounded-full bg-[#0a66c2] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="w-[18px] h-[18px] xl:w-[1.1vw] xl:h-[1.1vw] text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}