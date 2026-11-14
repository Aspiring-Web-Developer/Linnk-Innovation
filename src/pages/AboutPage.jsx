import React, { useEffect } from 'react';
import Header from '@/components/sections/about/Header';
import Business from '@/components/sections/about/Business';
import Approach from '@/components/sections/about/Approach';
import Ticker from '@/components/sections/about/Ticker';
import People from '@/components/sections/about/People';
import Project from '@/components/sections/about/Project';
import LetsTalk from '@/components/sections/LetsTalk';
import Footer from '@/components/sections/Footer';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'About Us – Linnk';
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <Business />
      <Approach />
      <Ticker />
      <People />
      <Project />
      {/* <LetsTalk /> */}
      <Footer />
    </main>
  );
}