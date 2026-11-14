import React, { useEffect } from 'react';
import Header from '@/components/sections/our-services/Header';
import Footer from '@/components/sections/Footer';
import Business from '@/components/sections/our-services/Business';
import AllServices from '@/components/sections/our-services/AllServices';
export default function OurServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Our Services – Linnk';
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <Business />
      <AllServices />
      <Footer />
    </main>
  );
}