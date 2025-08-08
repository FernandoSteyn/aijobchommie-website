import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import AnnouncementBanner from '../components/AnnouncementBanner';
import ParticleSystem from '../components/ParticleSystem';
import GeometricBackground from '../components/GeometricBackground';
import EnhancedHeroSection from '../components/EnhancedHeroSection';

const LandingPage = () => {
  return (
    <div>
      {/* Advanced Interactive Background System */}
      <GeometricBackground />
      <ParticleSystem />
      
      {/* Cinematic Lighting System */}
      <div className="spotlight-container">
        <div className="main-spotlight" style={{ left: '50%', top: '50%' }}></div>
        <div className="secondary-spotlight" style={{ left: '20%', top: '30%' }}></div>
        <div className="secondary-spotlight" style={{ left: '80%', top: '70%', animationDelay: '-5s' }}></div>
      </div>
      
      {/* Digital Rain Effect */}
      <div className="matrix-rain"></div>
      
      <Navigation />
      <AnnouncementBanner />
      
      {/* Enhanced Hero Section with all requested features */}
      <EnhancedHeroSection />

      {/* Dynamic Marketing Banners */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="marketing-banner fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 style={{ color: 'var(--neon-cyan)' }}>"The Last CV You'll Ever Make"</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Stop rewriting your CV for every job. Our AI creates perfectly tailored applications for each opportunity.
            </p>
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
              <h3>AI-Powered Matching</h3>
              <p>Advanced algorithms match you with the perfect job opportunities based on your skills and preferences.</p>
            </div>
            <div className="card fade-in">
              <h3>Affordable Pricing</h3>
              <p>Basic plan at R8/month, Premium at R17/month. Both include a 3-day free trial - no credit card required!</p>
            </div>
            <div className="card fade-in">
              <h3>Built for South Africa</h3>
              <p>Designed specifically for the South African job market with local insights and connections.</p>
            </div>
            <div className="card fade-in">
              <h3>Smart Applications</h3>
              <p>Auto-generate cover letters and optimize your applications with AI assistance.</p>
            </div>
            <div className="card fade-in">
              <h3>Fast & Efficient</h3>
              <p>Save time with automated job searching and application processes.</p>
            </div>
            <div className="card fade-in">
              <h3>Career Growth</h3>
              <p>Get insights and recommendations to advance your career and increase earning potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Banner 2 */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="marketing-banner fade-in" style={{ 
            background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.15), rgba(0, 255, 65, 0.15))',
            borderColor: 'var(--neon-pink)'
          }}>
            <h3 style={{ color: 'var(--neon-pink)' }}>"No More Commuting for Job Searches"</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Apply to hundreds of jobs from your couch. AI Job Chommie brings the job market to you.
            </p>
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

      {/* Marketing Banner 3 */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="marketing-banner fade-in" style={{ 
            background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.15), rgba(255, 107, 0, 0.15))',
            borderColor: 'var(--neon-green)'
          }}>
            <h3 style={{ color: 'var(--neon-green)' }}>"AI Job Chommie: Your Personal Career Assistant"</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Like having a career coach, recruiter, and personal assistant all working for you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <Link to="/mission" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card hover-card" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <h2 style={{ color: 'var(--primary-cyan)' }}>Our Mission</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
                  To democratize job searching through affordable AI technology, 
                  helping every South African find their perfect job match. Born from 
                  the heart of Port Elizabeth, we understand the struggle of job hunting 
                  and we're here to make it easier.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-cyan)', fontSize: '0.9rem', fontWeight: '600' }}>
                  <span>Learn more about our mission</span>
                  <span style={{ marginLeft: 'var(--space-sm)' }}>→</span>
                </div>
              </div>
            </Link>
            <Link to="/founder" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card hover-card" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <h2 style={{ color: 'var(--primary-magenta)' }}>Meet the Founder</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: 'var(--space-md)' }}>
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
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-magenta)', fontSize: '0.9rem', fontWeight: '600' }}>
                  <span>Discover Fernando's story</span>
                  <span style={{ marginLeft: 'var(--space-sm)' }}>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Marketing Banner 4 */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="marketing-banner fade-in" style={{ 
            background: 'linear-gradient(135deg, rgba(157, 0, 255, 0.15), rgba(0, 255, 255, 0.15))',
            borderColor: 'var(--neon-purple)'
          }}>
            <h3 style={{ color: 'var(--neon-purple)' }}>"Relax While AI Job Chommie Works for You"</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Set it and forget it. Our AI never sleeps, constantly finding and applying to your perfect job matches.
            </p>
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
            Start Your Journey
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
            © 2025 AI Job Chommie. All rights reserved. | Deployed: 2025-08-07
          </p>
          <p style={{ margin: '20px 0', fontSize: '0.9rem', opacity: '0.8' }}>
            Made from the heart for all South African job seekers by yours truly, with love, Fernando Steyn
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
