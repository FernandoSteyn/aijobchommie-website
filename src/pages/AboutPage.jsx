import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ParticleSystem from '../components/ParticleSystem';
import GeometricBackground from '../components/GeometricBackground';

const AboutPage = () => {
  return (
    <div>
      {/* Background Effects */}
      <GeometricBackground />
      <ParticleSystem />
      
      {/* Cinematic Lighting */}
      <div className="spotlight-container">
        <div className="main-spotlight" style={{ left: '30%', top: '20%' }}></div>
        <div className="secondary-spotlight" style={{ left: '70%', top: '60%', animationDelay: '-3s' }}></div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '70vh', paddingTop: '120px' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: '30px' }}>
              <span className="text-gradient">About AI Job Chommie</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
              Born from the heart of <span className="sa-highlight">Port Elizabeth</span>, we're democratizing 
              employment opportunities for every South African through revolutionary AI technology that understands our unique job market.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--space-4xl)' }}>
            <div className="fade-in">
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Our Origin Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                AI Job Chommie was born from personal struggle and national necessity. In the townships and cities 
                across South Africa, millions of talented individuals face the daily challenge of finding meaningful 
                employment. Traditional job boards charge exorbitant fees, recruiters ignore local talent, and 
                opportunities remain hidden behind corporate walls.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We saw a different path forward. What if artificial intelligence could level the playing field? 
                What if every South African, regardless of their background or location, could access the same 
                advanced job-matching technology used by Fortune 500 companies?
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                That vision became AI Job Chommie - your intelligent companion in the journey toward economic 
                empowerment and career fulfillment.
              </p>
            </div>
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' }}>
              <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>🇿🇦 Built for South Africa</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✨</span>
                  Understanding local job market dynamics
                </li>
                <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✨</span>
                  Multilingual AI support for all 11 official languages
                </li>
                <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✨</span>
                  Affordable pricing that respects our economic reality
                </li>
                <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✨</span>
                  Focus on skills-based matching over connections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>Why Choose AI Job Chommie?</h2>
          <div className="grid grid-3">
            <div className="card hover-card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🧠</div>
              <h3 style={{ color: 'var(--primary-cyan)' }}>Advanced AI Matching</h3>
              <p>Our proprietary AI algorithms analyze thousands of data points to find your perfect job match, 
              going beyond simple keyword matching to understand your career aspirations, skills, and cultural fit.</p>
            </div>
            <div className="card hover-card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>💎</div>
              <h3 style={{ color: 'var(--primary-magenta)' }}>Unbeatable Affordability</h3>
              <p>Starting at just R8/month with a 3-day free trial, we're 50x more affordable than traditional recruitment agencies while 
              providing superior AI-powered matching and career support services.</p>
            </div>
            <div className="card hover-card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>⚡</div>
              <h3 style={{ color: 'var(--accent-lime)' }}>Lightning-Fast Results</h3>
              <p>Our AI processes applications in seconds, not weeks. Get matched with relevant opportunities 
              within minutes of updating your profile or preferences.</p>
            </div>
            <div className="card hover-card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🎯</div>
              <h3 style={{ color: 'var(--accent-violet)' }}>Skills-First Approach</h3>
              <p>We focus on what you can do, not who you know. Our platform evaluates candidates based on 
              skills, potential, and job fit rather than networks or backgrounds.</p>
            </div>
            <div className="card hover-card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>📲</div>
              <h3 style={{ color: 'var(--accent-amber)' }}>Mobile-First Design</h3>
              <p>Apply to jobs from anywhere with our PWA app. Works perfectly on any device, even with 
              limited data or slow internet connections.</p>
            </div>
            <div className="card hover-card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🛡️</div>
              <h3 style={{ color: 'var(--primary-cyan)' }}>Privacy Protected</h3>
              <p>Your data is secure and never sold to third parties. Full POPI Act compliance ensures 
              your personal information remains private and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Approach */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--space-4xl)' }}>
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(157, 0, 255, 0.1))' }}>
              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>⚡ Our AI Methodology</h3>
              <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', background: 'rgba(0, 0, 0, 0.3)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)' }}>
                <div>{'// Advanced Machine Learning Pipeline'}</div>
                <div style={{ color: 'var(--primary-cyan)' }}>const jobMatch = async (candidate, jobs) {'=>'}</div>
                <div>&nbsp;&nbsp;const skillsAnalysis = await analyzeSkills(candidate);</div>
                <div>&nbsp;&nbsp;const culturalFit = await assessCulturalFit(candidate);</div>
                <div>&nbsp;&nbsp;const careerPath = await predictCareerGrowth(candidate);</div>
                <div>&nbsp;&nbsp;</div>
                <div>&nbsp;&nbsp;return findOptimalMatches(jobs, {'{'}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;skills: skillsAnalysis,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;culture: culturalFit,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;growth: careerPath</div>
                <div>&nbsp;&nbsp;{'});'}</div>
                <div style={{ color: 'var(--primary-cyan)' }}>};</div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Our proprietary algorithms combine natural language processing, behavioral analysis, 
                and predictive modeling to create the most accurate job matching system in Africa.
              </p>
            </div>
            <div className="fade-in">
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Cutting-Edge Technology</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                Behind our sleek cyberpunk interface lies sophisticated artificial intelligence that understands 
                the nuances of South African employment. We've trained our models on millions of successful 
                job placements, local salary data, and industry trends.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                Our AI doesn't just match keywords - it understands context, career trajectories, and 
                cultural fit. Whether you're a recent graduate or a seasoned professional, our technology 
                adapts to your unique situation and goals.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'var(--primary-cyan)', color: 'var(--bg-primary)' }}>Machine Learning</span>
                <span className="badge" style={{ background: 'var(--primary-magenta)', color: 'var(--bg-primary)' }}>NLP Processing</span>
                <span className="badge" style={{ background: 'var(--accent-lime)', color: 'var(--bg-primary)' }}>Behavioral Analysis</span>
                <span className="badge" style={{ background: 'var(--accent-violet)', color: 'var(--bg-primary)' }}>Predictive Modeling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>Our Core Values</h2>
          <div className="grid grid-2">
            <div className="card hover-card" style={{ border: '2px solid var(--primary-cyan)' }}>
              <h3 style={{ color: 'var(--primary-cyan)', display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <span style={{ marginRight: 'var(--space-sm)' }}>🌟</span> Ubuntu - Humanity
              </h3>
              <p>We believe in the African philosophy of Ubuntu - "I am because we are." Your success is our success, 
              and we're committed to lifting up every South African job seeker regardless of their background.</p>
            </div>
            <div className="card hover-card" style={{ border: '2px solid var(--primary-magenta)' }}>
              <h3 style={{ color: 'var(--primary-magenta)', display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <span style={{ marginRight: 'var(--space-sm)' }}>⚖️</span> Fairness & Equality
              </h3>
              <p>Our AI is trained to eliminate bias and promote equal opportunities. We judge candidates on merit, 
              skills, and potential - never on factors they cannot control.</p>
            </div>
            <div className="card hover-card" style={{ border: '2px solid var(--accent-lime)' }}>
              <h3 style={{ color: 'var(--accent-lime)', display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <span style={{ marginRight: 'var(--space-sm)' }}>🚀</span> Innovation Excellence
              </h3>
              <p>We're constantly pushing the boundaries of what's possible with AI and job matching. Our team 
              never stops learning, improving, and innovating for better user experiences.</p>
            </div>
            <div className="card hover-card" style={{ border: '2px solid var(--accent-violet)' }}>
              <h3 style={{ color: 'var(--accent-violet)', display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <span style={{ marginRight: 'var(--space-sm)' }}>🔒</span> Transparency & Trust
              </h3>
              <p>No hidden fees, no false promises, no black-box algorithms. We're open about our processes, 
              pricing, and how our AI makes decisions about your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' }}>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>Ready to Experience the Future of Job Search?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xl)', color: 'var(--text-secondary)' }}>
              Join thousands of South Africans who've transformed their careers with AI Job Chommie
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pricing" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
                🚀 Start Free Trial
              </Link>
              <Link to="/pricing" className="btn btn-secondary" style={{ fontSize: '1.1rem' }}>
                📊 View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

