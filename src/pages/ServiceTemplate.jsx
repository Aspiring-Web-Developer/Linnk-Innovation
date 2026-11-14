import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '@/data/servicesData';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceOverview from '@/components/sections/service/ServiceOverview';
import ServiceDeliverables from '@/components/sections/service/ServiceDeliverables';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceIndustries from '@/components/sections/service/ServiceIndustries';
import ServiceFAQ from '@/components/sections/service/ServiceFAQ';
import ServicePreCTA from '@/components/sections/service/ServicePreCTA';
import Footer from '@/components/sections/Footer';
import LetsTalk from '@/components/sections/LetsTalk';
import ServiceStats from '@/components/sections/service/ServiceStats';
import ServiceHWW from '@/components/sections/service/ServiceHWW';
import ServiceKey from '@/components/sections/service/Servicekey';
export default function ServiceTemplate() {
  const { slug } = useParams();
  const cleanSlug = slug ? slug.replace(/^\/+|\/+$/g, '') : '';
  const service = SERVICES_DATA[cleanSlug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (service?.seo?.title) {
      document.title = service.seo.title;
    }
  }, [cleanSlug, service]);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#070b14] text-white flex flex-col items-center justify-center px-6 py-32 text-center">
        <span className="font-serif italic text-brand-mint text-2xl mb-4">
          ( 404 — Capability Not Found )
        </span>
        <h1 className="font-heading font-medium text-4xl sm:text-6xl text-white mb-6">
          Service Not Found
        </h1>
        <p className="font-body text-white/70 text-lg max-w-md mb-10">
          The requested service page does not exist or has been moved. Explore our range of managed services from our home.
        </p>
        <Link
          to="/"
          className="px-8 py-4 rounded-full bg-brand-mint text-brand-black font-heading font-semibold text-sm uppercase tracking-wider hover:bg-white transition-colors"
        >
          Return to Homepage
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col overflow-x-clip">
      {/* 1. Hero Section */}
      <ServiceHero data={service.hero} />

      {/* 2. Overview Section */}
      <ServiceOverview data={service.overview} />

      <ServiceStats stats={service.stats} />

      {/* 3. Deliverables 01–08 Section */}
<ServiceDeliverables items={service.deliverableTags} />

      {/* 4. Execution Principles / Process */}
<ServiceProcess
  slug={cleanSlug}
  images={service.wwdImages}
  label={service.deliverablesSectionTitle}
  headline={service.deliverablesHeadline}
  intro={service.deliverablesIntro}
  deliverables={service.deliverables}
/>
<ServiceHWW
  label={service.hww?.label}
  headline={service.hww?.headline}
  intro={service.hww?.intro}
  items={service.hww?.items}
/>

{/* 5. Key Technologies */}
<ServiceKey title={service.techTitle} intro={service.techIntro} categories={service.techStack} />

      {/* 6. Industries */}
<ServiceIndustries title={service.industries?.title} items={service.industries?.items} />

      {/* 7. FAQs */}
<ServiceFAQ
  label={service.faq?.label}
  title={service.faq?.title}
  faqs={service.faq?.items ?? service.faqs}
/>



      {/* 9. Shared Footer */}
            <LetsTalk />
      <Footer />
    </main>
  );
}
