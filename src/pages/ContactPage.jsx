import React, { useEffect } from 'react';
import Header from '@/components/sections/contact/Header';
import Footer from '@/components/sections/Footer';
import Information from '@/components/sections/contact/Information';
import Locations from '@/components/sections/contact/Locations';
import LetsTalk from '@/components/sections/contact/LetsTalk';
export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Contact Us – Linnk';
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <Information />
      <Locations />
      <LetsTalk />
      <Footer />
    </main>
  );
}