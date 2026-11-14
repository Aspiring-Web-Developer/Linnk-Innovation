import React, { useEffect } from 'react';
import Heading from '@/components/sections/work/Heading';
import WorkCards from '@/components/sections/work/WorkCards';
import LetsTalk from '@/components/sections/LetsTalk';
import Footer from '@/components/sections/Footer';

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Selected Work – Linnk';
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <Heading />
      <WorkCards />
      {/* <LetsTalk /> */}
      <Footer />
    </main>
  );
}