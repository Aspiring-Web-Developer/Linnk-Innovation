import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CASES = [
  {
    img: '/smal-2.jpg',
    title: 'How A B2B Financial Services Enterprise Increased Production Releases From 2 To 40+ A Month With AWS',
    text: 'Over 18 weeks, we modernised AWS infrastructure with containerised services, resilient databases, and automated CI/CD pipelines for secure, reliable deployments.',
    href: '/how-a-b2b-financial-services-enterprise-increased-production-releases-from-2-to-40-a-month-with-aws/',
  },
  {
    img: '/Smal-1.jpg',
    title: 'How A Mid-Sized General Insurer Gave 1,200+ Employees Direct Access To Live Business Data',
    text: 'A mid-sized insurer with 2,400 employees across 140 branches relied on a six-person analytics team for business insights despite established claims, HR, and CRM systems.',
    href: '/how-a-mid-sized-general-insurer-gave-1200-employees-direct-access-to-live-business-data/',
  },
  {
    img: '/SMal-3.jpg',
    title: 'How A Large-Scale Pharmacy Retailer Migrated Its Prescription And Inventory Platform To AWS Without Disrupting Prescription Dispensing',
    text: 'Over 22 weeks, we migrated its platform to AWS, enabling hybrid connectivity, automated deployments, stronger security controls, and improved operational efficiency across all locations.',
    href: '/how-a-large-scale-pharmacy-retailer-migrated-its-prescription-and-inventory-platform-to-aws/',
  },
];

export default function WorkCards() {
  return (
    <section className="w-full bg-white pt-14 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-8">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-black text-white"
            >
              {/* Image */}
              <div className="w-full aspect-[16/10] overflow-hidden">
                <img src={c.img} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-5 xl:px-6 pt-5 xl:pt-6 pb-5 xl:pb-6">
                <span className="self-start inline-flex items-center px-5 py-2 rounded-full border border-brand-mint text-brand-mint font-body text-[12px] xl:text-[14px] leading-[1.3]">
                  Case studies
                </span>

                <h3 className="font-heading font-medium text-[24px] sm:text-[26px] xl:text-[30px] leading-[1.1] tracking-[-0.01em] text-white mt-4">
                  {c.title}
                </h3>

                <p className="font-body text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.55] text-white/90 mt-4">
                  {c.text}
                </p>

                {/* Arrow button: hover only on the button itself */}
                <a
                  href={c.href}
                  aria-label={c.title}
                  className="group/btn mt-6 self-start w-[46px] h-[46px] xl:w-[50px] xl:h-[50px] rounded-full bg-brand-mint border border-brand-mint flex items-center justify-center transition-colors duration-300 hover:bg-black hover:border-white/40"
                >
                  <ArrowUpRight className="w-5 h-5 xl:w-6 xl:h-6 stroke-[1.5] text-black transition-all duration-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}