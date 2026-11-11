import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Signature Swap Button matching Linnk's cmsmasters-swap-button
 * Features dual-icon scale/slide swap on hover with neon mint highlight
 */
export default function SwapButton({
  children,
  href,
  onClick,
  variant = 'mint', // 'mint' | 'dark' | 'outline' | 'orange'
  className = '',
  iconType = 'diagonal', // 'diagonal' | 'horizontal'
  target,
  rel,
}) {
  const isLink = Boolean(href);
  const Component = isLink ? 'a' : 'button';

  const NormalIcon = iconType === 'diagonal' ? ArrowUpRight : ArrowRight;
  const ActiveIcon = iconType === 'diagonal' ? ArrowUpRight : ArrowRight;

  const variantStyles = {
    mint: 'bg-transparent text-white border-white/20 hover:border-brand-mint hover:text-brand-mint',
    filled: 'bg-brand-mint text-brand-black border-brand-mint hover:bg-white hover:border-white',
    dark: 'bg-brand-obsidian text-white border-white/10 hover:border-brand-mint hover:text-brand-mint',
    orange: 'bg-transparent text-white border-white/20 hover:border-brand-orange hover:text-brand-orange',
    pill: 'rounded-full bg-white/5 border border-white/15 hover:border-brand-mint hover:bg-brand-mint/10 text-white hover:text-brand-mint',
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={cn(
        'group relative inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full border text-[13px] font-body font-semibold tracking-wider uppercase transition-all duration-300 ease-out overflow-hidden interactive-hover',
        variantStyles[variant] || variantStyles.mint,
        className
      )}
    >
      {/* Background Hover Glow Sweep */}
      <span className="absolute inset-0 bg-gradient-to-r from-brand-mint/0 via-brand-mint/5 to-brand-mint/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Button Text */}
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
        {children}
      </span>

      {/* Dual Icon Container */}
      <span className="relative z-10 flex items-center justify-center w-5 h-5 overflow-hidden">
        {/* Normal Icon: slides up/out on hover */}
        <span className="absolute transition-all duration-300 ease-out transform group-hover:-translate-y-6 group-hover:opacity-0 text-current">
          <NormalIcon className="w-4 h-4 stroke-[2]" />
        </span>

        {/* Active Icon: slides up from bottom on hover */}
        <span className="absolute transition-all duration-300 ease-out transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-brand-mint group-hover:scale-110">
          <ActiveIcon className="w-4 h-4 stroke-[2.5]" />
        </span>
      </span>
    </Component>
  );
}
