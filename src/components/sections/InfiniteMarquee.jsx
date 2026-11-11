import React from 'react';
import { Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
  'Faster Releases',
  'Resilient Platforms',
  'Trusted Data',
  'Measurable Growth',
  'Governed Programmes',
  'Lower Operating Risk',
];

export default function InfiniteMarquee() {
  return (
    <section className="relative w-full py-7 sm:py-9 bg-brand-black text-white border-y border-white/10 overflow-hidden select-none">
      {/* Side gradient fade masks */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Ticker Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for continuous loop */}
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-12 sm:gap-16">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase whitespace-nowrap">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-mint shrink-0 shadow-[0_0_10px_#31F8CA]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
