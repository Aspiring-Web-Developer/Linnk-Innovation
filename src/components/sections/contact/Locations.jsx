import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

// Change the extensions if your files are .png / .webp / .jpeg
const LOCATIONS = [
  {
    title: 'Group Headquarters',
    img: encodeURI('/Contact-us/Group Headquarters.jpg'),
    address: 'First Floor, 2 London Bridge London SE1 9RA United Kingdom.',
    cta: 'Get Directions',
    href: 'https://www.google.com/maps/search/?api=1&query=2+London+Bridge+London+SE1+9RA',
  },
  {
    title: 'Technology Hub',
    img: encodeURI('/Contact-us/Technology Hub.jpg'),
    address: 'Floor 12E, Trans Asia Cyber Park Infopark Phase 2, Kochi Kerala 682303, India',
    cta: 'Get Directions',
    href: 'https://www.google.com/maps/search/?api=1&query=Trans+Asia+Cyber+Park+Infopark+Kochi',
  },
  {
    title: 'Our Offices',
    img: encodeURI('/Contact-us/Our Offices.jpg'),
    countries: ['United Kingdom', 'Germany', 'Saudi Arabia', 'United States', 'Qatar', 'UAE', 'India'],
    cta: 'Contact Now',
    onClick: () => window.dispatchEvent(new Event('open-contact-modal')),
  },
];

function CardLink({ item }) {
  const cls =
    'group mt-auto inline-flex items-center gap-2 xl:gap-[0.5vw] w-fit border-b-2 border-black/80 pb-[3px] font-heading font-semibold uppercase text-[14px] sm:text-[15px] xl:text-[1vw] leading-none text-black transition-colors duration-300 hover:text-brand-mint hover:border-brand-mint';
  const inner = (
    <>
      <span>{item.cta}</span>
      <ArrowRight className="w-4 h-4 xl:w-[1.05vw] xl:h-[1.05vw] stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (item.onClick) {
    return (
      <button type="button" onClick={item.onClick} className={cls}>
        {inner}
      </button>
    );
  }
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  );
}

export default function Locations() {
  return (
    <section className="w-full bg-white pt-14 sm:pt-16 lg:pt-20 xl:pt-[4.5vw] pb-16 sm:pb-20 lg:pb-24 xl:pb-[6vw]">
      <div className="px-6 sm:px-8 xl:px-[7.9vw]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-heading font-medium text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[3.1vw] leading-[1.1] tracking-[-0.02em] text-black"
        >
          All Locations
        </motion.h2>

        {/* Cards */}
        <div className="mt-10 lg:mt-12 xl:mt-[4.2vw] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-[3.9vw]">
          {LOCATIONS.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="w-full aspect-[3/2] overflow-hidden bg-[#d9d9d9]">
                <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 mt-8 xl:mt-[2.6vw]">
                <h3 className="font-heading font-medium text-[24px] sm:text-[26px] xl:text-[1.6vw] leading-[1.2] tracking-[-0.01em] text-black">
                  {l.title}
                </h3>

                {l.address ? (
                  <p className="mt-4 xl:mt-[1.1vw] mb-6 xl:mb-[1.6vw] font-body text-[16px] sm:text-[17px] xl:text-[1.1vw] leading-[1.55] text-black/70 max-w-[26ch] xl:max-w-[24vw]">
                    {l.address}
                  </p>
                ) : (
                  <ul className="mt-4 xl:mt-[1.1vw] mb-6 xl:mb-[1.6vw] flex flex-wrap gap-x-5 gap-y-1 xl:gap-x-[1.3vw] xl:gap-y-[0.25vw]">
                    {l.countries.map((c) => (
                      <li
                        key={c}
                        className="inline-flex items-center gap-2 xl:gap-[0.5vw] font-body text-[16px] sm:text-[17px] xl:text-[1.1vw] leading-[1.55] text-black/70"
                      >
                        <MapPin className="w-4 h-4 xl:w-[1vw] xl:h-[1vw] stroke-[1.5] text-black/50 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}

                <CardLink item={l} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}