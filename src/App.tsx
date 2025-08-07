import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Enhanced smooth scrolling for the entire page
    const smoothScrollStyle = document.createElement('style');
    smoothScrollStyle.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
      }
      
      * {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 8px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #FF6B35, #ff8a65);
        border-radius: 8px;
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #e55a2b, #ff7043);
        box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
      }
      
      /* Optimized transitions - only for interactive elements */
      button, a, input, textarea {
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* Enhanced focus states */
      a:focus, button:focus {
        outline: 2px solid #FF6B35;
        outline-offset: 2px;
        border-radius: 4px;
      }
    `;
    document.head.appendChild(smoothScrollStyle);

    return () => {
      document.head.removeChild(smoothScrollStyle);
    };
  }, []);

  return (
    <div className="font-inter overflow-x-hidden">
      <ScrollIndicator />
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;