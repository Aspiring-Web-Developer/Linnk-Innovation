import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const SERVICE_LINK =
  'group inline-flex items-center gap-2.5 border-b-2 border-white/40 pb-1 text-[13px] xl:text-[14px] font-heading font-semibold uppercase text-white hover:text-brand-mint hover:border-brand-mint transition-colors';

const ARROW =
  'w-4 h-4 sm:w-5 sm:h-5 text-white/60 stroke-[3] transition-all group-hover:text-brand-mint group-hover:translate-x-0.5 group-hover:-translate-y-0.5';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[calc(100vh-115px)] overflow-hidden flex flex-col justify-between px-6 py-8 sm:p-12 lg:pl-12 lg:pr-20 lg:py-12 xl:pr-24 select-none">
      <style>{`
        @keyframes heroFromTop {
          from { opacity: 0; transform: translateY(-50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFromBottom {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-from-top {
          animation: heroFromTop 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-from-bottom {
          animation: heroFromBottom 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-from-top, .hero-from-bottom { animation: none; }
        }
      `}</style>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-100"
        >
          <source src="/Linnk-Banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
      </div>

      {/* TOP ROW */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-start justify-between gap-8 pt-2">
        {/* Top-Left Statement */}
        <div className="max-w-md hero-from-top" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-heading font-medium text-[20px] sm:text-2xl lg:text-[25px] text-white leading-[1.3]">
            Technology, data and<br />
            operations expertise,<br />
            <span className="font-serif italic font-normal text-white text-[1.05em]">
              delivered as one.
            </span>
          </h2>
        </div>

        {/* Top-Right Photo + Description (hidden on mobile) */}
        <div
          className="hidden md:flex items-center gap-6 lg:gap-8 md:ml-auto hero-from-top"
          style={{ animationDelay: '0.4s' }}
        >
          <img
            src="/Banner-Small-Image.jpg"
            alt="Linnk Team Leadership"
            className="w-32 sm:w-40 lg:w-[180px] h-20 sm:h-24 lg:h-[120px] object-cover rounded-[28px] lg:rounded-[40px] border border-white/25 shadow-lg shrink-0"
          />
          <p className="font-heading text-sm sm:text-base lg:text-[20px] text-white/95 leading-[1.4] font-normal max-w-[280px]">
            We help organisations scale capability, run operations and transform, without adding complexity.
          </p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mt-auto pt-10 sm:pt-24 pb-2">
        {/* Headline */}
        <div className="hero-from-bottom" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-heading font-semibold text-[52px] sm:text-7xl md:text-8xl lg:text-[80px] xl:text-[92px] text-white leading-[1.1]">
            Capability,<br />
            Delivered
          </h1>
        </div>

        {/* Links + CTA */}
        <div
          className="flex flex-col items-start gap-10 lg:gap-7 w-full lg:w-[440px] xl:w-[480px] lg:mr-4 xl:mr-8 hero-from-bottom"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex flex-col gap-5 w-full">
            {/* Row 1: stacked on mobile, spread on desktop */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-5 sm:gap-y-3 sm:gap-x-10 lg:justify-between lg:gap-x-6 w-full">
              <a href="/services/ai-managed-services/" className={SERVICE_LINK}>
                <span>AI</span>
                <ArrowUpRight className={ARROW} />
              </a>
              <a href="/services/data-analytics/" className={SERVICE_LINK}>
                <span>DATA</span>
                <ArrowUpRight className={ARROW} />
              </a>
              <a href="/services/cloud-devsecops/" className={SERVICE_LINK}>
                <span>CLOUD</span>
                <ArrowUpRight className={ARROW} />
              </a>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-5 sm:gap-y-3 sm:gap-x-10 xl:gap-x-20">
              <a href="/services/software-development/" className={SERVICE_LINK}>
                <span>DIGITAL TRANSFORMATION</span>
                <ArrowUpRight className={ARROW} />
              </a>
              <a href="/services/application-engineering/" className={SERVICE_LINK}>
                <span>APPLICATIONS</span>
                <ArrowUpRight className={ARROW} />
              </a>
            </div>
          </div>

          {/* CTA: pill slides right, left circle zooms in, right circle zooms out */}
          <a
            href="/contact-us/"
            aria-label="Talk to our experts"
            className="group relative flex items-center w-fit"
          >
            <span className="absolute left-0 top-0 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-brand-mint bg-brand-mint text-black scale-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100">
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </span>

            <span className="relative z-10 h-[50px] px-6 flex items-center justify-center rounded-full border border-white/80 text-white text-[13px] xl:text-[14px] font-heading font-semibold uppercase whitespace-nowrap transition-all duration-500 ease-in-out group-hover:translate-x-[50px] group-hover:bg-brand-mint group-hover:border-brand-mint group-hover:text-black">
              TALK TO OUR EXPERTS
            </span>

            <span className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-white/80 text-white scale-100 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0">
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}