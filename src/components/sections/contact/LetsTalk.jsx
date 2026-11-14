import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Change the extension if the file is .png / .webp / .jpeg
const IMG = encodeURI('/Contact-us/lets-talk.jpg');

const TOPICS = [
  'Managed Quality Assurance',
  'Managed AI & Workflow Automation',
  'Managed Application Engineering',
  'Managed Cloud & DevSecOps',
  'Managed Software Development',
  'Managed Data & Analytics',
  'Other / Not Sure Yet',
];

const FIELD =
  'w-full bg-transparent border-0 border-b border-black/80 outline-none px-4 xl:px-[1vw] font-body text-[16px] sm:text-[17px] xl:text-[1vw] text-black placeholder:text-black/55 focus:border-brand-mint focus:border-b-2 transition-colors duration-300';

export default function LetsTalk() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect your API / email service here and send `form`
    console.log('Contact form:', form);
    setSent(true);
    setForm({ name: '', email: '', company: '', topic: '', message: '' });
  };

  return (
    <section className="w-full bg-white pt-10 sm:pt-12 lg:pt-14 xl:pt-[3vw] pb-14 sm:pb-16 lg:pb-20 xl:pb-[5vw]">
      <div className="px-6 sm:px-8 xl:pl-[7.9vw] xl:pr-[9.3vw] grid grid-cols-1 xl:grid-cols-[40vw_1fr] gap-10 xl:gap-[3.6vw] items-center">
        {/* Image (square) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-square overflow-hidden bg-[#d9d9d9]"
        >
          <img src={IMG} alt="Linnk support team" className="w-full h-full object-cover" />
        </motion.div>

        {/* Form column */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-medium text-[38px] sm:text-[46px] lg:text-[52px] xl:text-[3.1vw] leading-[1.1] tracking-[-0.02em] text-black xl:pl-[0.4vw]"
          >
            Let’s{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Talk</span>
              <svg
                className="absolute left-0 -bottom-[0px] w-full h-4 overflow-visible text-brand-mint z-0"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q 25 3 50 4.5 T 100 4"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 xl:mt-[2vw] font-body text-[17px] sm:text-[18px] xl:text-[1.1vw] leading-[1.55] text-black/70"
          >
            Tell us what you’re looking to solve. Our team will get back to you to
            discuss the next steps.
          </motion.p>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 xl:mt-[3.4vw]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 xl:gap-x-[1.3vw]">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Full Name"
                required
                className={`${FIELD} h-[64px] xl:h-[4.7vw]`}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Work Email"
                required
                className={`${FIELD} h-[64px] xl:h-[4.7vw]`}
              />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                placeholder="Company"
                className={`${FIELD} h-[64px] xl:h-[4.7vw]`}
              />

              {/* Select with custom caret */}
              <div className="relative">
                <select
                  name="topic"
                  value={form.topic}
                  onChange={onChange}
                  required
                  className={`${FIELD} h-[64px] xl:h-[4.7vw] appearance-none pr-10 xl:pr-[2.4vw] cursor-pointer text-black/80`}
                >
             <option value="">What Can We Help You With ?</option>
{TOPICS.map((t) => (
  <option key={t} value={t}>
    {t}
  </option>
))}
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 6"
                  className="pointer-events-none absolute right-3 xl:right-[0.9vw] top-1/2 -translate-y-1/2 w-3 h-2 xl:w-[0.7vw] xl:h-[0.45vw] fill-black"
                >
                  <path d="M0 0h10L5 6z" />
                </svg>
              </div>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Message"
              required
              className={`${FIELD} block mt-0 h-[130px] xl:h-[7.6vw] pt-5 xl:pt-[1.2vw] resize-y`}
            />

            <button
              type="submit"
              className="mt-6 xl:mt-[1.6vw] w-full h-[50px] xl:h-[2.65vw] bg-brand-mint text-black font-heading font-semibold text-[16px] xl:text-[1.05vw] transition-all duration-300 hover:brightness-95 active:scale-[0.99]"
            >
              Talk to Our Team
            </button>

            {sent && (
              <p className="mt-4 xl:mt-[1vw] font-body text-[15px] xl:text-[0.95vw] text-black/70">
                Thanks, we’ve got your message and will get back to you shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}