import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

// Tries .jpg, .jpeg, .png, .webp automatically, so the file extension is not needed in the data.
function SmartImg({ src, alt = '', className = '' }) {
  const [i, setI] = useState(0);
  const hasExt = /\.(jpe?g|png|webp|avif)$/i.test(src);
  const finalSrc = hasExt ? src : `${src}${EXTS[i]}`;

  return (
    <img
      src={encodeURI(finalSrc)}
      alt={alt}
      loading="lazy"
      draggable={false}
      onError={() => {
        if (!hasExt) setI((n) => Math.min(n + 1, EXTS.length - 1));
      }}
      className={className}
    />
  );
}

export default function ServiceHWW({
  label = '',
  headline = 'Our Proven Process',
  intro = '',
  items = [],
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="relative w-full bg-white text-black pt-0 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-[150px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          {label && (
            <p className="font-body text-[15px] lg:text-[17px] text-black/55 mb-6 lg:mb-8">
              {label}
            </p>
          )}

          <h2 className="font-body font-normal capitalize text-[38px] sm:text-[60px] lg:text-[80px] leading-[1.04] tracking-[-0.02em] text-black">
            {headline}
          </h2>

          {intro && (
            <p className="font-body text-[15px] lg:text-[16px] leading-[1.7] text-black mt-6 lg:mt-8 max-w-[760px]">
              {intro}
            </p>
          )}
        </div>

        {/* 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[70px] gap-y-12 lg:max-w-[1566px]">
          {items.slice(0, 4).map((step, idx) => (
            <motion.div
              key={step.title || idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full aspect-[9/5] overflow-hidden bg-black/5">
                {step.image && (
                  <SmartImg
                    key={step.image}
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <h3 className="font-body font-normal capitalize text-[24px] lg:text-[28px] leading-[1.2] tracking-[-0.02em] text-black mt-5 lg:mt-6">
                {step.title}
              </h3>

              <p className="font-body text-[15px] lg:text-[16px] leading-[1.5] text-black/60 mt-4 lg:mt-6">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}