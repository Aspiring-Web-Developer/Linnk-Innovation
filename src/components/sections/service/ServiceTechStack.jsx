import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Legacy from './ServiceTechStackLegacy';

const PAUSE = 3000; // wait between scrolls (ms)
const SLIDE = 800;  // slide duration (ms)
const EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];
const HAS_EXT = /\.(jpe?g|png|webp|svg|avif|gif)$/i;

/* One logo. Write paths without an extension; it tries png, jpg, jpeg, webp, svg.
   Spaces and & in folder and file names are handled. */
function LogoImg({ src, alt }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setI(0);
    setFailed(false);
  }, [src]);

  if (failed) return null;

  const url = HAS_EXT.test(src) ? encodeURI(src) : encodeURI(`${src}${EXTS[i]}`);

  return (
    <img
      src={url}
      alt={alt}
      draggable={false}
      loading="lazy"
      onError={() => {
        if (!HAS_EXT.test(src) && i + 1 < EXTS.length) setI(i + 1);
        else setFailed(true);
      }}
      className="h-auto w-auto max-h-[34px] lg:max-h-[40px] max-w-[82%] object-contain"
    />
  );
}

/* One row of logos.
   5 or fewer logos (3 on tablet, 2 on phone): static, left aligned.
   More than that: scrolls one logo, waits 3 s, scrolls again, in a loop. */
function LogoRow({ logos, category, delay = 0 }) {
  const [visible, setVisible] = useState(5);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const n = logos.length;
  const scrolls = n > visible;

  useEffect(() => {
    const update = () =>
      setVisible(window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 5);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // restart when the layout or the logo set changes
  useEffect(() => {
    setIndex(0);
    setAnimate(true);
  }, [visible, n]);

  // move forward one logo every PAUSE + SLIDE (rows start slightly staggered)
  useEffect(() => {
    if (!scrolls) return undefined;
    let id;
    const start = setTimeout(() => {
      id = setInterval(() => setIndex((i) => i + 1), PAUSE + SLIDE);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [scrolls, delay]);

  // after sliding onto the cloned logos, jump back to the start with no animation
  useEffect(() => {
    if (!scrolls || index !== n) return undefined;
    const t = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE + 60);
    return () => clearTimeout(t);
  }, [index, n, scrolls]);

  useEffect(() => {
    if (animate) return undefined;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    );
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const slides = scrolls ? [...logos, ...logos.slice(0, visible)] : logos;

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex will-change-transform"
        style={{
          transform: `translate3d(-${index * (100 / visible)}%, 0, 0)`,
          transition:
            animate && scrolls
              ? `transform ${SLIDE}ms cubic-bezier(0.37, 0, 0.63, 1)`
              : 'none',
        }}
      >
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="flex items-center justify-center h-[44px] lg:h-[48px]"
            style={{ flex: `0 0 ${100 / visible}%` }}
          >
            <LogoImg src={src} alt={`${category} logo ${(i % n) + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoTable({ data }) {
  const { headline = 'Key Technologies We Work With', intro = '', categories = [] } = data;

  // scroll-linked heading: slight zoom-in + blur clears as you scroll
  const headRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headRef,
    offset: ['start 95%', 'start 45%'],
  });
  const titleScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);

  return (
    <section className="relative w-full bg-[#111111] text-white pt-20 lg:pt-28 pb-20 lg:pb-28 px-6 sm:px-10 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading + intro */}
        <div ref={headRef} className="mb-12 lg:mb-16">
          <motion.h2
            style={{ scale: titleScale, filter: titleBlur, opacity: titleOpacity }}
            className="font-body font-medium text-[34px] sm:text-[52px] lg:text-[76px] leading-[1.15] tracking-normal text-white max-w-[11em] origin-left will-change-transform"
          >
            {headline}
          </motion.h2>

          {intro && (
            <p className="font-body text-[15px] lg:text-[18px] leading-[1.6] text-white/70 max-w-[760px] mt-6 lg:mt-8">
              {intro}
            </p>
          )}
        </div>

        {/* Table */}
        <div className="border border-white/25">
          {/* Header row (desktop) */}
          <div className="hidden lg:grid grid-cols-[31.75%_1fr] items-center h-[66px]">
            <div className="px-5 font-body text-[26px] text-white">Category</div>
            <div className="font-body text-[26px] text-white">Technologies</div>
          </div>

          {/* Rows: any number of categories */}
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.category || idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[31.75%_1fr] items-center border-t border-white/25 py-5 lg:py-[18px]"
            >
              <div className="px-5 pb-3 lg:pb-0 font-body text-[20px] lg:text-[22px] text-white">
                {cat.category}
              </div>

              <div className="px-5 lg:px-0 lg:-ml-[30px] lg:mr-[30px]">
                <LogoRow
                  logos={cat.logos || []}
                  category={cat.category}
                  delay={(idx % 3) * 500}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Uses the new logo table when the service has `keyTech`,
   otherwise falls back to the old text/icon table. */
export default function ServiceTechStack({ data, categories = [], title }) {
  if (data?.categories?.length) return <LogoTable data={data} />;
  return <Legacy categories={categories} title={title} />;
}