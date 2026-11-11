import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from '@/components/common/SmoothScroll';
import CustomCursor from '@/components/common/CustomCursor';
import Navbar from '@/components/navigation/Navbar';
import Home from '@/pages/Home';

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
          <Route path="*" element={<Home />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}
