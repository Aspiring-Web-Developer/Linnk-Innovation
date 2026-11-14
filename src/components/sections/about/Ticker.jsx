import React from 'react';
import { Asterisk } from 'lucide-react';

const TICKER_ITEMS = [
  'People',
  'Technology',
  'Expertise',
  'Delivery',
  'Innovation',
];

// One full set of ticker items (rendered twice for a seamless loop)
function TickerGroup({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {TICKER_ITEMS.map((text) => (
        <div key={text} className="flex items-center shrink-0">
          <span className="font-body font-medium text-[24px] sm:text-[32px] lg:text-[42px] leading-none tracking-[-0.03em] text-black whitespace-nowrap">
            {text}
          </span>
          <Asterisk className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[3.5] text-black mx-6 sm:mx-9 lg:mx-12 shrink-0" />
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
<section className="w-full bg-white">
      <style>{`
        @keyframes aboutTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .about-ticker-track {
          animation: aboutTicker 50s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .about-ticker-track { animation: none; }
        }
      `}</style>

      {/* Full-width cyan band, auto side scroll */}
      <div className="w-full bg-brand-mint py-5 sm:py-6 lg:py-8 overflow-hidden">
        <div className="about-ticker-track flex w-max">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>
    </section>
  );
}