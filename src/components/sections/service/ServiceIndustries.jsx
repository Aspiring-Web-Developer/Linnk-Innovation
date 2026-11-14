import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, ShoppingCart, Laptop, Landmark, Factory } from 'lucide-react';
import { SHARED_INDUSTRIES } from '@/data/servicesData';

// Fallback icons for pages that are not converted to SVG icons yet
const FALLBACK_ICONS = [Landmark, ShieldCheck, ShoppingCart, Laptop, Building2, Factory];

function IndustryIcon({ item, idx }) {
  if (item.icon) {
    return (
      <img
        src={encodeURI(item.icon)}
        alt=""
        loading="lazy"
        draggable={false}
        className="h-[58px] lg:h-[64px] w-auto object-contain brightness-0 invert"
      />
    );
  }
  const Icon = FALLBACK_ICONS[idx % FALLBACK_ICONS.length];
  return <Icon className="h-[52px] w-[52px] text-white" strokeWidth={1.25} />;
}

export default function ServiceIndustries({
  title = 'Industries We Serve',
  items = SHARED_INDUSTRIES,
}) {
  return (
    <section className="relative w-full bg-white text-black pt-14 lg:pt-20 pb-14 lg:pb-20 px-4 sm:px-8 lg:px-[100px]">
      <div className="max-w-[1800px] mx-auto">
        {/* Heading */}
        <h2 className="font-body font-medium text-[34px] sm:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-0.02em] text-black mb-10 lg:mb-14">
          {title}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[20px]">
          {items.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black text-white text-center flex flex-col items-center px-6 lg:px-8 py-10 lg:py-12 min-h-[260px] lg:min-h-[300px]"
            >
              <div className="h-[64px] flex items-center justify-center mb-8 lg:mb-10">
                <IndustryIcon item={item} idx={idx} />
              </div>

              <h3 className="font-body font-medium text-[22px] lg:text-[26px] leading-tight tracking-[-0.04em] text-white mb-4">
                {item.title}
              </h3>

              <p className="font-body text-[15px] lg:text-[17px] leading-[1.6] text-white max-w-[26em]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}