import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import SwapButton from '@/components/common/SwapButton';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-brand-obsidian border-l border-white/10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <a href="/" className="flex items-center gap-2" onClick={onClose}>
                <div className="w-8 h-8 rounded-lg bg-brand-mint flex items-center justify-center font-heading font-black text-black text-xl">
                  L
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-base tracking-wider uppercase text-white">
                    LINNK
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-brand-mint font-meta">
                    Innovation Hub
                  </span>
                </div>
              </a>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-brand-mint hover:text-brand-mint transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links Accordion */}
            <div className="py-8 flex-1">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5 pb-3">
                    {link.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(link.name)}
                          className="w-full flex items-center justify-between text-left font-heading text-xl font-semibold text-white/90 hover:text-brand-mint transition-colors py-2"
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                              activeSubmenu === link.name ? 'rotate-180 text-brand-mint' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 pt-2 flex flex-col gap-2.5 border-l border-brand-mint/30 my-2"
                            >
                              {link.subItems.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={onClose}
                                  className="text-sm font-body text-white/70 hover:text-brand-mint transition-colors py-1 flex items-center justify-between group"
                                >
                                  <span>{sub.name}</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-mint" />
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="block font-heading text-xl font-semibold text-white/90 hover:text-brand-mint transition-colors py-2"
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8">
                <SwapButton
                  href="/contact-us/"
                  variant="mint"
                  className="w-full justify-center py-4"
                  onClick={onClose}
                >
                  Talk to Our Experts
                </SwapButton>
              </div>
            </div>

            {/* Drawer Footer Contact Meta */}
            <div className="pt-6 border-t border-white/10 text-xs font-meta text-brand-sub space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-mint" />
                <a href="tel:+442038543333" className="hover:text-white transition-colors">
                  +44 (0)20 3854 3333
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-mint" />
                <a href="mailto:info@linnkinnovationhub.com" className="hover:text-white transition-colors">
                  info@linnkinnovationhub.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-mint" />
                <span>Kochi, India &amp; London, UK</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
