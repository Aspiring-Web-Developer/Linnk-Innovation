import React, { useEffect } from 'react';
import Header from '@/components/sections/privacy/Header';
import Content from '@/components/sections/privacy/Content';
import LetsTalk from '@/components/sections/LetsTalk';
import Footer from '@/components/sections/Footer';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Privacy Policy – Linnk';
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}