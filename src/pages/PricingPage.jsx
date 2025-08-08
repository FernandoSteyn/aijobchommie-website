import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ParticleSystem from '../components/ParticleSystem';
import GeometricBackground from '../components/GeometricBackground';

const PricingPage = () => {
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
              <span className="text-gradient">Choose Your Plan</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
              Affordable AI-powered job search solutions designed specifically for South African job seekers. 
              Start your career transformation today with our industry-leading technology.
            </p>
            <div className="grid grid-3" style={{ maxWidth: '600px', margin: '0 auto', gap: 'var(--space-lg)' }}>
              <div className="fade-in">
                <div className="stat-number" style={{ color: 'var(--primary-cyan)' }}>50x</div>
                <div className="stat-label">More Affordable</div>
              </div>
              <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="stat-number" style={{ color: 'var(--accent-lime)' }}>3</div>
                <div className="stat-label">Day Free Trial</div>
              </div>
              <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="stat-number" style={{ color: 'var(--primary-magenta)' }}>7</div>
                <div className="stat-label">Day Money-Back</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Basic Plan */}
            <div className="card" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'var(--neon-cyan)', 
                color: 'var(--bg-primary)', 
                padding: '5px 15px', 
                borderRadius: '15px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold' 
              }}>
                MOST POPULAR
              </div>
              <h3 style={{ marginBottom: '20px' }}>Basic Plan</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--neon-cyan)', marginBottom: '10px' }}>
                R8<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/month</span>
              </div>
              <p style={{ marginBottom: '20px', color: 'var(--neon-green)', fontWeight: 'bold' }}>✨ 3-Day Free Trial</p>
              <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Perfect for active job seekers</p>
              
              <ul style={{ textAlign: 'left', marginBottom: '30px', listStyle: 'none' }}>
                <li style={{ marginBottom: '10px' }}>✅ 10 job applications per month</li>
                <li style={{ marginBottom: '10px' }}>✅ AI-powered job matching</li>
                <li style={{ marginBottom: '10px' }}>✅ Real-time notifications</li>
                <li style={{ marginBottom: '10px' }}>✅ Basic AI cover letter assistance</li>
                <li style={{ marginBottom: '10px' }}>✅ CV optimization tips</li>
                <li style={{ marginBottom: '10px' }}>✅ Email support</li>
                <li style={{ marginBottom: '10px' }}>✅ Mobile PWA access</li>
                <li style={{ marginBottom: '10px', color: 'var(--text-muted)' }}>❌ Advanced analytics</li>
                <li style={{ marginBottom: '10px', color: 'var(--text-muted)' }}>❌ Priority support</li>
                <li style={{ marginBottom: '10px', color: 'var(--text-muted)' }}>❌ Personal career consultant</li>
              </ul>
              
              <Link to="#" className="btn btn-primary" style={{ width: '100%', marginBottom: '10px' }}>Start 3-Day Trial</Link>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>No credit card required</p>
            </div>

            {/* Premium Plan */}
            <div className="card" style={{ textAlign: 'center', position: 'relative', border: '2px solid var(--neon-pink)' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'var(--neon-pink)', 
                color: 'var(--bg-primary)', 
                padding: '5px 15px', 
                borderRadius: '15px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold' 
              }}>
                BEST VALUE
              </div>
              <h3 style={{ marginBottom: '20px', color: 'var(--neon-pink)' }}>Premium Plan</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--neon-pink)', marginBottom: '10px' }}>
                R17<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/month</span>
              </div>
              <p style={{ marginBottom: '20px', color: 'var(--neon-green)', fontWeight: 'bold' }}>✨ 7-Day Money-Back Guarantee</p>
              <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>For serious career advancement</p>
              
              <ul style={{ textAlign: 'left', marginBottom: '30px', listStyle: 'none' }}>
                <li style={{ marginBottom: '10px' }}>✅ <strong>Unlimited</strong> job applications</li>
                <li style={{ marginBottom: '10px' }}>✅ Advanced AI job matching</li>
                <li style={{ marginBottom: '10px' }}>✅ Instant push notifications</li>
                <li style={{ marginBottom: '10px' }}>✅ Full AI cover letter generation</li>
                <li style={{ marginBottom: '10px' }}>✅ Interview preparation & tips</li>
                <li style={{ marginBottom: '10px' }}>✅ Advanced career analytics</li>
                <li style={{ marginBottom: '10px' }}>✅ Priority WhatsApp support</li>
                <li style={{ marginBottom: '10px' }}>✅ Salary negotiation guidance</li>
                <li style={{ marginBottom: '10px' }}>✅ Personal career consultant</li>
                <li style={{ marginBottom: '10px' }}>✅ Resume builder & templates</li>
              </ul>
              
              <Link to="#" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(45deg, var(--neon-pink), var(--neon-blue))', marginBottom: '10px' }}>Start Your Journey</Link>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>No credit card required</p>
            </div>

            {/* Enterprise Plan - Under Construction */}
            <div className="card" style={{ textAlign: 'center', position: 'relative', border: '2px solid var(--neon-orange)', gridColumn: 'span 2', opacity: '0.8' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'var(--neon-orange)', 
                color: 'var(--bg-primary)', 
                padding: '5px 15px', 
                borderRadius: '15px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold' 
              }}>
                UNDER CONSTRUCTION
              </div>
              <h3 style={{ marginBottom: '20px', color: 'var(--neon-orange)' }}>Enterprise Plan</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--neon-orange)', marginBottom: '10px' }}>
                Coming<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}> Soon</span>
              </div>
              <p style={{ marginBottom: '20px', color: 'var(--neon-cyan)', fontWeight: 'bold' }}>🚧 Currently in Development</p>
              <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Advanced features for enterprises will be available soon</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)', textAlign: 'left' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '10px' }}>✅ <strong>Unlimited</strong> job postings</li>
                  <li style={{ marginBottom: '10px' }}>✅ AI-powered candidate screening</li>
                  <li style={{ marginBottom: '10px' }}>✅ Advanced analytics dashboard</li>
                  <li style={{ marginBottom: '10px' }}>✅ Custom integration APIs</li>
                  <li style={{ marginBottom: '10px' }}>✅ Dedicated account manager</li>
                </ul>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '10px' }}>✅ White-label solutions</li>
                  <li style={{ marginBottom: '10px' }}>✅ Bulk candidate sourcing</li>
                  <li style={{ marginBottom: '10px' }}>✅ Interview scheduling automation</li>
                  <li style={{ marginBottom: '10px' }}>✅ Custom reporting</li>
                  <li style={{ marginBottom: '10px' }}>✅ 24/7 priority support</li>
                </ul>
              </div>
              
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <button disabled className="btn btn-secondary" style={{ 
                  background: 'rgba(255, 107, 0, 0.2)', 
                  color: 'var(--neon-orange)', 
                  borderColor: 'var(--neon-orange)', 
                  opacity: '0.7',
                  cursor: 'not-allowed',
                  marginRight: 'var(--space-md)' 
                }}>Coming Soon</button>
                <Link to="/contact" className="btn btn-secondary" style={{ color: 'var(--neon-orange)', borderColor: 'var(--neon-orange)' }}>Get Notified</Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section">
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{ marginBottom: 'var(--space-md)' }}>Why Choose AI Job Chommie?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Compare our revolutionary AI-powered platform against traditional job search methods and see why thousands of South Africans trust us.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: 'var(--space-xl)' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>⚡</div>
              <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>Lightning Fast</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Traditional job boards take weeks to show results. Our AI matches you with perfect opportunities in seconds, not months.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>💰</div>
              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>50x More Affordable</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Recruitment agencies charge R400-R2000/month. Get superior AI technology starting at just R8/month with no hidden fees.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🎯</div>
              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Precision Matching</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Stop applying to irrelevant jobs. Our AI analyzes your skills and matches you with positions where you'll actually get hired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>Feature Comparison</h2>
          
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(0, 255, 255, 0.1)' }}>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'left', borderBottom: '2px solid var(--primary-cyan)' }}>Feature</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '2px solid var(--primary-cyan)', color: 'var(--primary-cyan)' }}>Basic Plan</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '2px solid var(--primary-magenta)', color: 'var(--primary-magenta)' }}>Premium Plan</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '2px solid var(--accent-lime)', color: 'var(--accent-lime)' }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Monthly Applications</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>Unlimited</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>Unlimited</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>AI Job Matching</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓ Advanced</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓ Custom</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>CV/Cover Letter AI</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>Basic</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓ Full</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓ Custom</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Career Analytics</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>✗</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓ Advanced</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Priority Support</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Email</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>WhatsApp</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>24/7 Dedicated</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Career Consultant</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>✗</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-lime)' }}>✓ Team</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-md)' }}>Interview Prep</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', color: 'var(--text-muted)' }}>✗</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', color: 'var(--accent-lime)' }}>✓</td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center', color: 'var(--accent-lime)' }}>✓ Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--space-4xl)' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Trusted & Secure</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                Your career data is precious. That's why we've built enterprise-grade security into every plan, 
                ensuring your personal information remains private and protected while you search for your dream job.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>🔒</span>
                  <span>256-bit SSL encryption for all data</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>🛡️</span>
                  <span>POPI Act compliant data handling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>💳</span>
                  <span>PCI DSS secure payment processing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>🔄</span>
                  <span>Regular security audits and updates</span>
                </div>
              </div>
            </div>
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>7-Day Money-Back Guarantee</h3>
              <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>💰</div>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Not satisfied with your results? Get a full refund within 7 days, no questions asked. 
                We're confident you'll love the results, but your peace of mind is our priority.
              </p>
              <Link to="/refund" className="btn btn-secondary">View Refund Policy</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Can I cancel anytime?</h3>
              <p>Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.</p>
            </div>
            <div className="card">
              <h3>Do you offer refunds?</h3>
              <p>We offer a 7-day money-back guarantee. Check our <Link to="/refund" style={{ color: 'var(--neon-cyan)' }}>refund policy</Link> for details.</p>
            </div>
            <div className="card">
              <h3>How does payment work?</h3>
              <p>We use secure payment processing through Paystack. All major payment methods accepted.</p>
            </div>
            <div className="card">
              <h3>Is my data safe?</h3>
              <p>Absolutely. We follow strict privacy protocols. Read our <Link to="/privacy" style={{ color: 'var(--neon-cyan)' }}>privacy policy</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '30px' }}>Ready to Transform Your Career?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
            Join thousands of South Africans who found their dream jobs with AI Job Chommie
          </p>
          <Link to="#" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '20px 40px', marginRight: '20px' }}>
            Start Free Trial
          </Link>
          <Link to="/about" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '20px 40px' }}>
            Learn More
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;

