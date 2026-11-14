import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

// Shows after the user scrolls this many px
const SHOW_AFTER = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    // Works with Lenis if it's exposed on window, otherwise native smooth scroll
    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          type="button"
          onClick={goTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed z-[90] right-4 bottom-5 sm:right-7 sm:bottom-8 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-brand-mint hover:text-black transition-colors duration-300"
        >
          <ChevronUp className="w-5 h-5 sm:w-[26px] sm:h-[26px] stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
}