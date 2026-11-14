import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Put your API URL here to really send the form (POST, JSON body).
// Empty = demo mode: the form just shows the thank-you message.
const FORM_ENDPOINT = '';

const TOPICS = [
  'Managed Quality Assurance',
  'Managed AI & Workflow Automation',
  'Managed Application Engineering',
  'Managed Cloud & DevSecOps',
  'Managed Software Development',
  'Managed Data & Analytics',
];

const FIELD =
  'w-full h-[52px] bg-transparent rounded-none border-0 border-b border-white/70 px-4 font-body text-[14px] text-white placeholder:text-white/60 outline-none focus:border-brand-mint transition-colors';

function ContactForm() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 lg:py-16">
        <p className="font-body font-medium text-[24px] sm:text-[28px] text-brand-mint">
          Thank you!
        </p>
        <p className="font-body text-[13px] sm:text-[15px] leading-[1.6] mt-3 max-w-[400px] mx-auto">
          We&apos;ve received your message. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-7 lg:mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[20px]"
    >
      <input
        type="text"
        name="fullName"
        value={values.fullName}
        onChange={set('fullName')}
        placeholder="Full Name"
        autoComplete="name"
        required
        className={FIELD}
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={set('email')}
        placeholder="Work Email"
        autoComplete="email"
        required
        className={FIELD}
      />
      <input
        type="tel"
        name="phone"
        value={values.phone}
        onChange={set('phone')}
        placeholder="Phone Number"
        autoComplete="tel"
        className={FIELD}
      />
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={set('company')}
        placeholder="Company Name"
        autoComplete="organization"
        className={FIELD}
      />

      {/* Select with the solid arrow from the original */}
      <div className="relative sm:col-span-2">
        <select
          name="topic"
          value={values.topic}
          onChange={set('topic')}
          style={{ color: values.topic ? '#fff' : 'rgba(255,255,255,0.6)' }}
          className={`${FIELD} appearance-none cursor-pointer pr-10`}
        >
          <option value="" className="bg-white text-black">
            What Can We Help You With ?
          </option>
          {TOPICS.map((t) => (
            <option key={t} value={t} className="bg-white text-black">
              {t}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-white" />
      </div>

      <textarea
        name="message"
        value={values.message}
        onChange={set('message')}
        placeholder="Message"
        className={`${FIELD} sm:col-span-2 h-[96px] min-h-[96px] pt-4 resize-y`}
      />

      <div className="sm:col-span-2 flex flex-col items-center mt-[4px]">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="h-[40px] px-[24px] bg-brand-mint text-black font-body font-semibold text-[16px] hover:bg-white transition-colors duration-300 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>

        {status === 'error' && (
          <p className="font-body text-[13px] text-red-400 mt-3">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export default function ContactModal({ isOpen, onClose }) {
  // Close on Escape + lock page scroll while open (without the page jumping sideways)
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <style>{`
            .contact-modal input:-webkit-autofill,
            .contact-modal textarea:-webkit-autofill {
              -webkit-box-shadow: 0 0 0 1000px #000 inset;
              -webkit-text-fill-color: #fff;
              caret-color: #fff;
            }
            .contact-modal::-webkit-scrollbar { width: 0; }
            .contact-modal { scrollbar-width: none; }
          `}</style>

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="contact-modal relative w-full max-w-[640px] max-h-[calc(100svh-2rem)] overflow-y-auto bg-black text-white px-5 sm:px-8 lg:px-[54px] pt-12 lg:pt-[56px] pb-8 lg:pb-[54px]"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-[18px] right-[18px] lg:top-[21px] lg:right-[21px] p-2 text-[#ff2b2b] hover:text-white transition-colors"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Heading */}
            <h2
              id="contact-modal-title"
              className="font-body font-medium text-[24px] sm:text-[32px] leading-[1.2] tracking-[-0.02em] text-center"
            >
              Tell Us Your <span className="text-brand-mint">Needs</span>
            </h2>
            <p className="font-body text-[14px] sm:text-[16px] leading-[1.6] text-center mt-2 max-w-[560px] mx-auto">
              Fill out the form, and our team will connect with you to discuss the right
              solutions for your business.
            </p>

            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}