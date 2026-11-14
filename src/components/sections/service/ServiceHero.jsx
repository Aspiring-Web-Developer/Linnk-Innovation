import React, { useEffect, useState } from 'react';

const PAUSE = 2000; // wait before each move (ms)
const SLIDE = 1400; // slide duration (ms), slow and smooth
const VISIBLE_MAX = 4; // images visible on desktop

// Used only if a service has no `heroImages` in its data
const DEFAULT_IMAGES = ['/1', '/2', '/3', '/4', '/5', '/1-1', '/2-1', '/3-1', '/4-1'];

const EXTS = ['.jpg', '.png', '.jpeg', '.webp'];
const HAS_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

/* One carousel image. Write names without an extension ('/AI-1') and it tries
   .jpg, .png, .jpeg, .webp in turn. Spaces in file names are handled. */
function HeroImage({ name }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(false);

  // If the name changes (switching service pages), start over
  useEffect(() => {
    setI(0);
    setFailed(false);
  }, [name]);

  if (failed) return null;

  const src = HAS_EXT.test(name) ? encodeURI(name) : encodeURI(`${name}${EXTS[i]}`);

  return (
    <img
      src={src}
      alt=""
      draggable={false}
      loading="eager"
      decoding="async"
      onError={() => {
        if (!HAS_EXT.test(name) && i + 1 < EXTS.length) setI(i + 1);
        else setFailed(true);
      }}
      className="w-full h-full object-cover"
    />
  );
}

export default function ServiceHero({ data }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Works whether you pass the hero object or the whole service object
  const hero = data?.hero ?? data ?? {};
  const images = hero.heroImages?.length ? hero.heroImages : DEFAULT_IMAGES;
  const n = images.length;

  // Clone the first images at the end so the loop has no jump
  const slides = [...images, ...images.slice(0, VISIBLE_MAX)];

  // Restart when the image set changes (switching service pages)
  useEffect(() => {
    setIndex(0);
    setAnimate(true);
  }, [n, images[0]]);

  // Every pause + slide time, move forward by exactly one image
  useEffect(() => {
    if (n <= 1) return undefined;
    const id = setInterval(() => setIndex((i) => i + 1), PAUSE + SLIDE);
    return () => clearInterval(id);
  }, [n]);

  // After sliding onto the cloned images, jump back to the start with no animation
  useEffect(() => {
    if (index !== n) return undefined;
    const t = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE + 60);
    return () => clearTimeout(t);
  }, [index, n]);

  // Turn the animation back on right after the silent jump
  useEffect(() => {
    if (animate) return undefined;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    );
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  if (!data) return null;

  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100svh-115px)] bg-[#f0f0f0] text-black overflow-hidden pt-12 lg:pt-14 pb-0">
      {/* Title + subtitle */}
      <div className="px-6 sm:px-10 lg:px-[52px] pt-0 lg:pt-6">
        <h1 className="font-body font-medium text-[44px] sm:text-7xl md:text-[78px] lg:text-[86px] leading-[1.12] tracking-[-0.02em] max-w-[10em]">
          {hero.title}
        </h1>

        <p className="font-body text-[16px] sm:text-[17px] lg:text-[18.5px] leading-[1.4] capitalize mt-8 lg:mt-12 max-w-none">
          {hero.subtitle}
        </p>
      </div>

      {/* Auto-scrolling image row, pinned to the bottom of the screen */}
      <div className="mt-auto pt-6 lg:pt-8">
        <div className="overflow-hidden [--v:1] sm:[--v:2] lg:[--v:4] [--gap:10px] lg:[--gap:14px]">
          <div
            className="flex will-change-transform"
            style={{
              gap: 'var(--gap)',
              '--i': index,
              transform:
                'translate3d(calc(var(--i) * -1 * (100% + var(--gap)) / var(--v)), 0, 0)',
              transition: animate
                ? `transform ${SLIDE}ms cubic-bezier(0.37, 0, 0.63, 1)`
                : 'none',
              backfaceVisibility: 'hidden',
            }}
          >
            {slides.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="shrink-0 aspect-[7/5] overflow-hidden rounded-[10px] bg-black/5"
                style={{
                  flex: '0 0 calc((100% - (var(--v) - 1) * var(--gap)) / var(--v))',
                }}
              >
                <HeroImage name={src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}