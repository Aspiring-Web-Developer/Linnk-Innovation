import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EXTS = ['.jpg', '.png', '.jpeg', '.webp'];
const HAS_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

// Backup if a page doesn't pass `images`: the WWD set for each service slug
const WWD_FOLDERS = {
  'managed-qa-services': 'AI',
  'ai-managed-services': 'AI',
  'application-engineering': 'Application',
  'cloud-devsecops': 'Cloud',
  'software-development': 'Digital trans',
  'data-analytics': 'Data int',
};

/* Tries .jpg, .png, .jpeg, .webp automatically; spaces in file names are handled */
function DeliverImage({ name, alt }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setI(0);
    setFailed(false);
  }, [name]);

  if (!name || failed) return null;

  const src = HAS_EXT.test(name) ? encodeURI(name) : encodeURI(`${name}${EXTS[i]}`);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (!HAS_EXT.test(name) && i + 1 < EXTS.length) setI(i + 1);
        else setFailed(true);
      }}
      className="w-full h-full object-cover"
    />
  );
}

const CheckIcon = () => (
  <svg
    className="w-[18px] h-[18px] lg:w-5 lg:h-5 shrink-0 mt-[3px] text-black"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.5 12.5c0 5.2-4.3 9-9.5 9S2.5 17.7 2.5 12.5 6.8 3.5 12 3.5c1.6 0 3.1.4 4.4 1.1" />
    <path d="M8 11.5l3.5 3.5L21 5.5" />
  </svg>
);

// Adds a full stop to the subtitle if it has none, so it joins cleanly with the description
const withStop = (s) => {
  const t = s.trim();
  return /[.!?:]$/.test(t) ? t : `${t}.`;
};

// `items` is still accepted so the parent page doesn't break, but it is no longer shown.
export default function ServiceProcess({
  slug = '',
  images = [],
  label = 'What We Deliver',
  headline = '',
  intro = '',
  deliverables = [],
}) {
  if (!deliverables || deliverables.length === 0) return null;

  const folder = WWD_FOLDERS[slug];

  return (
    <section
      id="deliverables"
      className="relative bg-white text-black pt-20 sm:pt-24 pb-0 px-6 sm:px-10 lg:px-[150px] scroll-mt-20"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-[100px]">
          <p className="font-body text-[14px] lg:text-[15px] text-black/55 mb-4 lg:mb-5">
            {label}
          </p>

          {headline && (
            <h2 className="font-body font-medium capitalize text-[34px] sm:text-[50px] lg:text-[64px] leading-[1.06] tracking-[-0.02em] text-black max-w-[11em]">
              {headline}
            </h2>
          )}

          {intro && (
            <p className="font-body text-[15px] lg:text-[16px] leading-[1.7] text-black mt-6 lg:mt-8 max-w-[760px]">
              {intro}
            </p>
          )}
        </div>

        {/* Rows: 6, 7, 8, 9... any count works */}
        <div>
          {deliverables.map((item, idx) => {
            const isReversed = idx % 2 !== 0; // odd rows: image left, text right
            const number = item.num || String(idx + 1).padStart(2, '0');

            // 1) this service's images from the data, 2) a local path on the item,
            // 3) the WWD set for this slug. No dummy images.
            const imageSrc =
              images[idx] ||
              (item.image && item.image.startsWith('/') ? item.image : null) ||
              (folder ? `/WWD/${folder} WWD-${(idx % 8) + 1}` : null);

            const paragraph = [
              item.subtitle ? withStop(item.subtitle) : '',
              item.desc || '',
              item.checklist?.length ? (item.checklistLabel || 'Our work includes:') : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <motion.div
                key={item.num || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`border-t border-black/15 py-10 lg:py-[80px] grid grid-cols-1 gap-8 lg:gap-x-[51px] items-start ${
                  isReversed
                    ? 'lg:grid-cols-[55.4%_1fr]'
                    : 'lg:grid-cols-[1fr_55.4%]'
                }`}
              >
                {/* Text */}
                <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                  <p className="font-body text-[14px] lg:text-[15px] text-black/55 mb-3 lg:mb-5">
                    {number}
                  </p>

                  <h3 className="font-body font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.12] tracking-[-0.02em] text-black mb-4 lg:mb-5">
                    {item.title}
                  </h3>

                  {paragraph && (
                    <p className="font-body text-[14px] lg:text-[15px] leading-[1.7] text-black">
                      {paragraph}
                    </p>
                  )}

                  {item.checklist?.length > 0 && (
                    <ul className="space-y-2.5 mt-5 lg:mt-6">
                      {item.checklist.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckIcon />
                          <span className="font-body capitalize text-[14px] lg:text-[16px] leading-snug text-black">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image */}
                <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="w-full aspect-[7/5] rounded-[16px] overflow-hidden bg-black/5">
                    <DeliverImage name={imageSrc} alt={item.title} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}