import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

/**
 * Recreates Linnk's basicScroll.js signature reveal:
 * Combines viewport entry with subtle gaussian blur unmasking (blur: 6px -> 0px),
 * opacity fade (0 -> 1), and gentle scale adjustment (0.97 -> 1.0).
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  blur = 8,
  scale = 0.98,
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur}px)`,
        scale: scale,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }
          : {
              opacity: 0,
              y: yOffset,
              filter: `blur(${blur}px)`,
              scale: scale,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Expo-like smooth deceleration
      }}
      className={cn('will-change-transform will-change-filter', className)}
    >
      {children}
    </motion.div>
  );
}
