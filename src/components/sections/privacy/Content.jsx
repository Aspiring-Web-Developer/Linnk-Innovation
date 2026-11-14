import React from 'react';
import { motion } from 'framer-motion';

/*
  Block types:
  { type: 'p',  text }
  { type: 'ul', items: [{ label?, text }] }
  { type: 'contact', items: [{ label, text, href? }] }
*/
const SECTIONS = [
  {
    title: 'Introduction',
    blocks: [
      { type: 'p', text: 'Welcome to Linnk. We respect your privacy and are committed to protecting any personal information you share with us through our website.' },
      { type: 'p', text: 'This Privacy Policy explains what information we may collect, how we use it, how we protect it, and what choices you have regarding your personal information. By accessing or using our website, you acknowledge that you have read this policy.' },
    ],
  },
  {
    title: 'Information We Collect',
    blocks: [
      { type: 'p', text: 'We may collect the following types of information when you visit or interact with our website:' },
      {
        type: 'ul',
        items: [
          { label: 'Personal Information:', text: 'Your name, email address, phone number, or other information you voluntarily submit through contact forms or other website features.' },
          { label: 'Technical Information:', text: 'Your IP address, browser type, device information, operating system, and other technical details collected when you access the website.' },
          { label: 'Usage Information:', text: 'Pages visited, time spent on the website, links clicked, and other information about how you interact with our services.' },
          { label: 'Cookies and Similar Technologies:', text: 'Information collected through cookies or similar technologies to support website functionality and improve user experience, where applicable.' },
        ],
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    blocks: [
      { type: 'p', text: 'We may use the information collected for the following purposes:' },
      {
        type: 'ul',
        items: [
          { text: 'To operate, maintain, and improve our website.' },
          { text: 'To respond to your questions, requests, and feedback.' },
          { text: 'To communicate with you regarding your inquiries or services.' },
          { text: 'To understand website traffic and user interactions.' },
          { text: 'To maintain website security and prevent fraudulent or unauthorized activities.' },
          { text: 'To comply with applicable legal requirements.' },
        ],
      },
      { type: 'p', text: 'We will use your information only for legitimate purposes consistent with this Privacy Policy and applicable law.' },
    ],
  },
  {
    title: 'Cookies and Tracking Technologies',
    blocks: [
      { type: 'p', text: 'Our website may use cookies and similar technologies to improve functionality, remember preferences, and understand how visitors use the website.' },
      { type: 'p', text: 'You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect some website features.' },
      { type: 'p', text: 'If we use analytics or other tracking services, those services may collect information according to their own privacy policies.' },
    ],
  },
  {
    title: 'Sharing of Information',
    blocks: [
      { type: 'p', text: 'We do not sell your personal information. We may share information in the following circumstances:' },
      {
        type: 'ul',
        items: [
          { label: 'Service Providers:', text: 'With hosting providers, website maintenance providers, analytics services, or other third parties that help us operate our website.' },
          { label: 'Legal Requirements:', text: 'When disclosure is required by applicable law, a court order, or a lawful request from an authorized authority.' },
          { label: 'Security and Protection:', text: 'When necessary to protect our rights, website, users, or the security of our services.' },
          { label: 'With Your Consent:', text: 'When you have given permission for a specific disclosure.' },
        ],
      },
      { type: 'p', text: 'Any third-party service providers involved in processing personal information should handle it in accordance with their applicable privacy obligations.' },
    ],
  },
  {
    title: 'Third-Party Links and Services',
    blocks: [
      { type: 'p', text: 'Our website may contain links to third-party websites, applications, or services. We do not control these external websites and are not responsible for their content, privacy practices, or security.' },
      { type: 'p', text: 'We encourage you to review the privacy policies of third-party websites before sharing your personal information with them.' },
    ],
  },
  {
    title: 'Data Security',
    blocks: [
      { type: 'p', text: 'We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.' },
      { type: 'p', text: 'However, no method of transmitting or storing information electronically is completely secure. Therefore, we cannot guarantee absolute security.' },
    ],
  },
  {
    title: 'Data Retention',
    blocks: [
      { type: 'p', text: 'We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, respond to inquiries, maintain website operations, and meet applicable legal obligations.' },
      { type: 'p', text: 'When information is no longer required, we will take reasonable steps to delete it or anonymize it, subject to applicable legal requirements.' },
    ],
  },
  {
    title: 'Your Privacy Rights',
    blocks: [
      { type: 'p', text: 'Depending on your location and applicable law, you may have the right to:' },
      {
        type: 'ul',
        items: [
          { text: 'Request access to the personal information we hold about you.' },
          { text: 'Request correction of inaccurate or incomplete information.' },
          { text: 'Request deletion of your personal information.' },
          { text: 'Withdraw consent where processing is based on consent.' },
          { text: 'Object to or request restrictions on certain types of processing.' },
          { text: 'Raise a concern with the relevant data protection authority.' },
        ],
      },
      { type: 'p', text: 'To exercise any applicable rights, please contact us using the contact details provided below.' },
    ],
  },
  {
    title: 'Children’s Privacy',
    blocks: [
      { type: 'p', text: 'Our website is not intended to knowingly collect personal information from children without appropriate authorization where required by law.' },
      { type: 'p', text: 'If you believe that a child has provided personal information through our website inappropriately, please contact us so that we can review the matter and take appropriate action.' },
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    blocks: [
      { type: 'p', text: 'We may update this Privacy Policy from time to time to reflect changes in our website, services, legal obligations, or privacy practices.' },
      { type: 'p', text: 'Any updates will be published on this page along with a revised “Last Updated” date. We encourage visitors to review this page periodically.' },
    ],
  },
  {
    title: 'Contact Us',
    blocks: [
      { type: 'p', text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us through the contact details or contact form available on our website:' },
      {
        type: 'contact',
        items: [
          { label: 'Website:', text: 'https://testc.wofxy.com/', href: 'https://testc.wofxy.com/' },
          { label: 'Email:', text: 'linnk@example.com', href: 'mailto:linnk@example.com' },
        ],
      },
      { type: 'p', text: 'We will review your inquiry and respond as appropriate.' },
    ],
  },
];


const GREY = 'text-black/70';

const BODY = `font-body text-[14px] sm:text-[15px] xl:text-[16px] leading-[1.7] ${GREY}`;

function Block({ block }) {
  if (block.type === 'p') {
    return <p className={BODY}>{block.text}</p>;
  }

  if (block.type === 'ul') {
    return (
      <ul className="list-disc pl-6 xl:pl-8 space-y-4 xl:space-y-5 marker:text-black/70">
        {block.items.map((item, i) => (
          <li key={i} className={BODY}>
            {item.label && <strong className="font-bold">{item.label} </strong>}
            {item.text}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'contact') {
    return (
      <div className="space-y-4 xl:space-y-5">
        {block.items.map((item, i) => (
          <p key={i} className={BODY}>
            <strong className="font-bold">{item.label} </strong>
            {item.href ? (
              <a href={item.href} className="text-black hover:text-brand-mint transition-colors">
                {item.text}
              </a>
            ) : (
              <span className="text-black">{item.text}</span>
            )}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function Content() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14 lg:pt-16 pb-32 sm:pb-36 lg:pb-48">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-[100px] xl:px-[151px] space-y-10 lg:space-y-14">
        {SECTIONS.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading font-medium text-[24px] sm:text-[28px] xl:text-[34px] leading-[1.15] tracking-[-0.01em] text-black mb-4 xl:mb-5">
              {s.title}
            </h2>
            <div className="space-y-4 xl:space-y-5">
              {s.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}