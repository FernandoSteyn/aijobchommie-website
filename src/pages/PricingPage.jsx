import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const PricingPage = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '120px' }}>
        <div className="container">
          <div className="fade-in">
            <h1 style={{ marginBottom: '20px' }}>Choose Your Plan</h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '60px' }}>
              Affordable AI-powered job search solutions for every South African
            </p>
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
              <p style={{ marginBottom: '20px', color: 'var(--neon-green)', fontWeight: 'bold' }}>✨ 3-Day Free Trial</p>
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
              
              <Link to="#" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(45deg, var(--neon-pink), var(--neon-blue))', marginBottom: '10px' }}>Start 3-Day Trial</Link>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>No credit card required</p>
            </div>

            {/* Enterprise Plan */}
            <div className="card" style={{ textAlign: 'center', position: 'relative', border: '2px solid var(--neon-green)', gridColumn: 'span 2' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'var(--neon-green)', 
                color: 'var(--bg-primary)', 
                padding: '5px 15px', 
                borderRadius: '15px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold' 
              }}>
                FOR BUSINESSES
              </div>
              <h3 style={{ marginBottom: '20px', color: 'var(--neon-green)' }}>Enterprise Plan</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--neon-green)', marginBottom: '10px' }}>
                Custom<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}> pricing</span>
              </div>
              <p style={{ marginBottom: '20px', color: 'var(--neon-cyan)', fontWeight: 'bold' }}>🚀 Custom Demo Available</p>
              <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>For companies hiring at scale</p>
              
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
                <Link to="#" className="btn btn-primary" style={{ background: 'linear-gradient(45deg, var(--neon-green), var(--neon-cyan))', marginRight: 'var(--space-md)' }}>Request Demo</Link>
                <Link to="#" className="btn btn-secondary" style={{ color: 'var(--neon-green)', borderColor: 'var(--neon-green)' }}>Contact Sales</Link>
              </div>
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
              <p>We offer a 30-day money-back guarantee. Check our <Link to="/refund" style={{ color: 'var(--neon-cyan)' }}>refund policy</Link> for details.</p>
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

