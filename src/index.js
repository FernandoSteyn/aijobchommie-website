import React, { useState, Suspense, lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import './styles/hero-fixes.css';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MissionPage = lazy(() => import('./pages/MissionPage'));
const FounderPage = lazy(() => import('./pages/FounderPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RefundPage = lazy(() => import('./pages/RefundPage'));

// Loading fallback for page transitions
const PageLoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    flexDirection: 'column',
    gap: 'var(--space-lg)'
  }}>
    <div style={{
      width: '60px',
      height: '60px',
      border: '4px solid rgba(0, 255, 255, 0.3)',
      borderTop: '4px solid var(--primary-cyan)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <p style={{ color: 'var(--primary-cyan)', fontSize: '1.1rem' }}>
      ⚡ Loading page...
    </p>
  </div>
);

// Component to handle scroll-to-top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <React.StrictMode>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <Router>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/mission" element={<MissionPage />} />
                <Route path="/founder" element={<FounderPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/refund" element={<RefundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
