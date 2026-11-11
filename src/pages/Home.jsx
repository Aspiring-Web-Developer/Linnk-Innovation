import React from 'react';
import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import EnterpriseStats from '@/components/sections/EnterpriseStats';
import InfiniteMarquee from '@/components/sections/InfiniteMarquee';
import DeliveryPillars from '@/components/sections/DeliveryPillars';
import HowWeWork from '@/components/sections/HowWeWork';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyLinnk from '@/components/sections/WhyLinnk';
import CaseStudies from '@/components/sections/CaseStudies';
import InsightsSection from '@/components/sections/InsightsSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import LetsTalk from '@/components/sections/LetsTalk';


export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      {/* 1. Full-bleed Edge-to-Edge Emerald Teal Liquid Silk Video Banner (Untouched) */}
      <Hero />

      {/* 2. ( WHO WE ARE ) Scroll Blur to Normal Section (Untouched) */}
      <WhoWeAre />

      {/* 3. Built for Enterprise Delivery Stats Section (Image 1) */}
      <EnterpriseStats />
{/* 7. Shaped Around Outcomes - Core Services (Image 2) */}
      <ServicesSection />


      {/* 5. The 4 Delivery Pillars (Continuity, Control, Capability, Knowledge) */}
    <DeliveryPillars />

      {/* 6. How We Work Together 4-Step Methodology */}
      <HowWeWork />
  
            {/* 4. Infinite Scrolling Benefit Marquee */}
      {/* <InfiniteMarquee /> */}

      {/* 8. Trusted Where It Counts - Enterprise Video Section */}
      <WhyLinnk />

      {/* 9. Selected Work / Case Studies Showcase */}
      <CaseStudies />

      {/* 10. Perspectives / Insights Thought Leadership */}
      <InsightsSection />

      {/* 11. Frequently Asked Questions (FAQ Accordion) */}
      <FAQSection />
      
 {/* 11.5 Let's Talk CTA */}
      <LetsTalk />
      {/* 12. Pre-Footer Enterprise CTA & Global Footer */}
      <Footer />
    </main>
  );
}
