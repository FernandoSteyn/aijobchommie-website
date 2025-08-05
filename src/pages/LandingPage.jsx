import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import AnnouncementBanner from '../components/AnnouncementBanner';

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <AnnouncementBanner />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="bg-pattern"></div>
        <div className="container">
          <div className="fade-in">
            <Logo size={120} className="glow" />
            <h1 style={{ marginTop: '30px', marginBottom: '20px' }}>
              AI Job Chommie
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              Your intelligent job search companion for South Africa
            </p>
            <div>
              <Link to="/pricing" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>
            Why Choose AI Job Chommie?
          </h2>
          <div className="grid grid-3">
            <div className="card fade-in">
              <h3>🤖 AI-Powered Matching</h3>
              <p>Advanced algorithms match you with the perfect job opportunities based on your skills and preferences.</p>
            </div>
            <div className="card fade-in">
              <h3>💰 Affordable Pricing</h3>
              <p>From just R8/month for basic features. Premium at R17/month with advanced AI tools.</p>
            </div>
            <div className="card fade-in">
              <h3>🇿🇦 Built for South Africa</h3>
              <p>Designed specifically for the South African job market with local insights and connections.</p>
            </div>
            <div className="card fade-in">
              <h3>📝 Smart Applications</h3>
              <p>Auto-generate cover letters and optimize your applications with AI assistance.</p>
            </div>
            <div className="card fade-in">
              <h3>⚡ Fast & Efficient</h3>
              <p>Save time with automated job searching and application processes.</p>
            </div>
            <div className="card fade-in">
              <h3>📈 Career Growth</h3>
              <p>Get insights and recommendations to advance your career and increase earning potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>
            Trusted by Thousands
          </h2>
          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ color: 'var(--neon-cyan)', marginBottom: '10px' }}>10,000+</h1>
              <p>Active Users</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ color: 'var(--neon-pink)', marginBottom: '10px' }}>500+</h1>
              <p>Jobs Matched Daily</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ color: 'var(--neon-green)', marginBottom: '10px' }}>95%</h1>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2>Our Mission</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                To democratize job searching through affordable AI technology, 
                helping every South African find their perfect job match. Born from 
                the heart of Port Elizabeth, we understand the struggle of job hunting 
                and we're here to make it easier.
              </p>
            </div>
            <div className="card">
              <h2>Meet the Founder</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'var(--bg-primary)'
                }}>
                  FS
                </div>
                <div>
                  <h3>Fernando Steyn</h3>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    "As a welder who faced unemployment, I understand the struggle. 
                    This app is my way of giving back to the community."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '30px' }}>Ready to Find Your Dream Job?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
            Join thousands of South Africans who have transformed their careers with AI Job Chommie
          </p>
          <Link to="/pricing" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '20px 40px' }}>
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '40px 0', 
        borderTop: '1px solid var(--neon-cyan)', 
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }}>
        <div className="container">
          <Logo size={40} />
          <p style={{ margin: '20px 0' }}>
            © 2024 AI Job Chommie. Made with ❤️ in South Africa.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</Link>
            <Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms</Link>
            <Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/refund" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
