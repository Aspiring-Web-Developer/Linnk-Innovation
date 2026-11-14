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
      { type: 'p', text: 'Welcome to Linnk. These Terms and Conditions govern your access to and use of our website and its features.' },
      { type: 'p', text: 'By accessing or using this website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using the website.' },
    ],
  },
  {
    title: 'Use of the Website',
    blocks: [
      { type: 'p', text: 'You agree to use this website only for lawful purposes and in a manner that does not violate applicable laws or infringe upon the rights of others.' },
      { type: 'p', text: 'You must not:' },
      {
        type: 'ul',
        items: [
          { text: 'Use the website for fraudulent, unlawful, or misleading activities.' },
          { text: 'Attempt to gain unauthorized access to the website, its servers, or related systems.' },
          { text: 'Disrupt, damage, or interfere with the website’s functionality or security.' },
          { text: 'Upload or transmit malicious software, harmful code, or unauthorized content.' },
          { text: 'Use the website in a way that negatively affects other users or our services.' },
        ],
      },
    ],
  },
  {
    title: 'Website Information and Services',
    blocks: [
      { type: 'p', text: 'We aim to provide accurate and up-to-date information on our website. However, we do not guarantee that all information, descriptions, features, or content will always be complete, accurate, current, or error-free.' },
      { type: 'p', text: 'We reserve the right to update, modify, suspend, or discontinue any part of the website or its features at any time, subject to applicable law.' },
    ],
  },
  {
    title: 'User Responsibilities',
    blocks: [
      { type: 'p', text: 'If you submit information through forms or other website features, you agree to provide information that is accurate and lawful.' },
      { type: 'p', text: 'You are responsible for ensuring that any content or information you submit does not violate applicable laws, infringe third-party rights, or contain harmful or misleading material.' },
      { type: 'p', text: 'We reserve the right to restrict or remove submitted content where reasonably necessary to protect the website, its users, or our legal interests.' },
    ],
  },
  {
    title: 'Intellectual Property',
    blocks: [
      { type: 'p', text: 'Unless otherwise stated, the website’s original content, including text, graphics, logos, designs, images, and other materials, is owned by or licensed to the website operator.' },
      { type: 'p', text: 'You may access and use this content for personal, non-commercial purposes. You must not reproduce, distribute, modify, publish, or commercially exploit website content without prior authorization, except where permitted by applicable law.' },
      { type: 'p', text: 'Third-party names, trademarks, and materials remain the property of their respective owners.' },
    ],
  },
  {
    title: 'Third-Party Links',
    blocks: [
      { type: 'p', text: 'Our website may contain links to external websites, services, or resources for your convenience.' },
      { type: 'p', text: 'We do not control or guarantee the accuracy, availability, security, or privacy practices of third-party websites. Accessing external links is at your own discretion, and you should review the applicable terms and privacy policies of those websites.' },
    ],
  },
  {
    title: 'Privacy',
    blocks: [
      { type: 'p', text: 'Your use of this website is also subject to our Privacy Policy, which explains how personal information may be collected, used, stored, and protected.' },
      { type: 'p', text: 'Please review our Privacy Policy to understand our privacy practices.' },
    ],
  },
  {
    title: 'Disclaimer',
    blocks: [
      { type: 'p', text: 'The website and its content are provided on an “as available” basis, subject to applicable law.' },
      { type: 'p', text: 'To the extent permitted by law, we make no warranties regarding the availability, reliability, accuracy, suitability, or uninterrupted operation of the website.' },
      { type: 'p', text: 'We do not guarantee that the website will always be free from technical errors, interruptions, or harmful components.' },
      { type: 'p', text: 'Nothing in these Terms excludes any rights or guarantees that cannot legally be excluded.' },
    ],
  },
  {
    title: 'Limitation of Liability',
    blocks: [
      { type: 'p', text: 'To the extent permitted by applicable law, we will not be liable for indirect, incidental, special, or consequential losses arising from your use of, or inability to use, the website.' },
      { type: 'p', text: 'This includes losses resulting from website interruptions, technical issues, reliance on website information, or third-party websites and services.' },
      { type: 'p', text: 'Nothing in these Terms limits liability where such limitation is prohibited by applicable law.' },
    ],
  },
  {
    title: 'Indemnification',
    blocks: [
      { type: 'p', text: 'To the extent permitted by law, you agree to be responsible for losses, claims, or reasonable expenses arising from your unlawful use of the website or your violation of these Terms, including infringement of third-party rights.' },
      { type: 'p', text: 'This provision applies only to the extent permitted by applicable law.' },
    ],
  },
  {
    title: 'Suspension or Termination',
    blocks: [
      { type: 'p', text: 'We may restrict or suspend access to the website where reasonably necessary due to misuse, security concerns, suspected unlawful activity, or violations of these Terms.' },
      { type: 'p', text: 'Where required by law, we will provide appropriate notice or follow applicable procedures.' },
    ],
  },
  {
    title: 'Changes to These Terms',
    blocks: [
      { type: 'p', text: 'We may revise these Terms and Conditions from time to time to reflect changes to our website, services, or legal obligations.' },
      { type: 'p', text: 'Updated terms will be published on this page with a revised “Last Updated” date. Your continued use of the website after changes take effect will be subject to the revised terms, to the extent permitted by law.' },
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
<section className="w-full bg-white pt-28 sm:pt-32 lg:pt-48 pb-32 sm:pb-36 lg:pb-48">
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