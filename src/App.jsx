import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from '@/components/common/SmoothScroll';
import CustomCursor from '@/components/common/CustomCursor';
import ScrollToTop from '@/components/common/ScrollToTop';
import Navbar from '@/components/navigation/Navbar';
import Home from '@/pages/Home';
import ServiceTemplate from '@/pages/ServiceTemplate';
import WorkPage from '@/pages/WorkPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import OurServicesPage from '@/pages/OurServicesPage';
export default function App() {
  return (
    <Router>
      <SmoothScroll>
        {/* Custom Interactive Follower Cursor */}
        <CustomCursor />

        {/* Global Floating Headroom Navbar */}
        <Navbar />

        {/* Application Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/services/:slug" element={<ServiceTemplate />} />
          <Route path="/services/:slug/" element={<ServiceTemplate />} />
          <Route path="/case-studies" element={<WorkPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Global Scroll-to-top button (Home + all service pages) */}
        <ScrollToTop />
      </SmoothScroll>
    </Router>
  );
}