import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ParticleSystem from '../components/ParticleSystem';
import GeometricBackground from '../components/GeometricBackground';

const TermsPage = () => {
  const lastUpdated = "January 1, 2025";

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
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '120px' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: '30px' }}>
              <span className="text-gradient">Terms of Service</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px' }}>
              Clear, fair terms that protect both our users and our mission to democratize 
              employment opportunities across South Africa.
            </p>
            <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', maxWidth: '600px', margin: '0 auto' }}>
              <p style={{ color: 'var(--primary-cyan)', fontWeight: '600', margin: 0 }}>
                ⚖️ South African Law | Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' }}>
            <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>Terms Summary</h2>
            <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
              <div>
                <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Your Rights</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>🛡️</span>
                    Fair use of our AI job matching platform
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>📞</span>
                    Access to customer support and assistance
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>🔄</span>
                    Cancel your subscription anytime
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>🛡️</span>
                    Protection under South African consumer law
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Your Responsibilities</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✅</span>
                    Provide accurate and honest profile information
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✅</span>
                    Use the platform professionally and respectfully
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✅</span>
                    Keep your account secure and confidential
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✅</span>
                    Respect intellectual property and privacy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="legal-document" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Introduction */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>1. Agreement to Terms</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and AI Job Chommie (Pty) Ltd 
                ("Company," "we," "our," or "us") regarding your use of the AI Job Chommie progressive web application and related services 
                (collectively, the "Service").
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                By accessing, downloading, or using our Service, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Service.
              </p>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(157, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-violet)' }}>
                <h4 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Legal Jurisdiction and Governing Law</h4>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>These Terms are governed by the laws of the Republic of South Africa</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Any disputes will be resolved in South African courts</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>We comply with South African employment and consumer protection laws</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Terms are available in English and may be translated to other official languages</li>
                </ul>
              </div>
            </div>

            {/* Eligibility and Account Creation */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>2. Eligibility and Account Requirements</h2>
              
              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>2.1 Age and Legal Capacity</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                To use AI Job Chommie, you must:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Be at least 18 years old</strong> or the legal age of majority in your jurisdiction</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Have legal capacity</strong> to enter into binding agreements</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Be authorized to work</strong> in South Africa or your target employment location</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Not be prohibited</strong> from using our services under South African law or the laws of your jurisdiction</li>
              </ul>

              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>2.2 Account Creation and Security</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                When creating your account, you agree to:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Provide accurate, current, and complete information</strong> about yourself</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Maintain and update</strong> your information to keep it accurate and current</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Maintain the security</strong> of your password and accept responsibility for all activities under your account</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Immediately notify us</strong> of any unauthorized access to or use of your account</li>
              </ul>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary-magenta)' }}>
                <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Account Verification</h4>
                <p style={{ margin: 0 }}>
                  We may require verification of your identity, qualifications, or work authorization status to access certain features. 
                  Providing false or misleading information may result in account suspension or termination.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>3. Service Description and Scope</h2>
              
              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>3.1 Core Services</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                AI Job Chommie provides AI-powered job matching and career development services, including:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Job Matching:</strong> AI algorithms that match your profile with relevant job opportunities</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Application Management:</strong> Tools to track and manage your job applications</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Career Coaching:</strong> Personalized advice and guidance based on market data and trends</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Market Intelligence:</strong> Insights into salary trends, skills demand, and career opportunities</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Professional Development:</strong> Resources and recommendations for skill improvement</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>3.2 Service Limitations and Disclaimers</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-lg)', border: '2px solid var(--accent-lime)' }}>
                <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Important: No Job Guarantees</h4>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  While our AI technology significantly improves job search efficiency and success rates, 
                  <strong> we cannot guarantee employment outcomes</strong>. Job placement depends on multiple factors 
                  including market conditions, employer requirements, competition, and individual qualifications.
                </p>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Success rates are based on historical data and may vary</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>AI recommendations are suggestions, not guarantees</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Final hiring decisions rest entirely with employers</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Economic and industry conditions may affect job availability</li>
                </ul>
              </div>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>3.3 Service Availability</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                We may temporarily suspend or restrict access for maintenance, updates, or security reasons.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>4. User Responsibilities and Acceptable Use</h2>
              
              <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>4.1 Professional Conduct</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                You agree to use AI Job Chommie professionally and ethically. You must:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Be truthful</strong> in all profile information, qualifications, and work experience</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Communicate respectfully</strong> with employers, recruiters, and other users</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Honor commitments</strong> made through our platform, including interview attendance</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Maintain confidentiality</strong> of any proprietary information shared by employers</li>
              </ul>

              <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>4.2 Prohibited Activities</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                The following activities are strictly prohibited and may result in immediate account termination:
              </p>
              
              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)', marginBottom: 'var(--space-lg)' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Account Misuse</h4>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Creating fake or duplicate accounts</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Impersonating others or providing false identity information</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Sharing account credentials with third parties</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Using accounts for unauthorized commercial purposes</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Platform Abuse</h4>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Attempting to hack, disrupt, or compromise our systems</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Using automated tools to scrape or harvest data</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Circumventing security measures or access controls</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Uploading malicious code or viruses</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)', marginBottom: 'var(--space-lg)' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Content Violations</h4>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Posting discriminatory, offensive, or inappropriate content</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Sharing copyrighted material without permission</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Uploading content that violates privacy or intellectual property</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Spreading misinformation about employers or opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Legal Violations</h4>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Using the platform for illegal activities</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Violating employment laws or regulations</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Engaging in fraud or misrepresentation</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Harassment or discriminatory behavior</li>
                  </ul>
                </div>
              </div>

              <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>4.3 Account Security</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(157, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-violet)' }}>
                <h4 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Your Security Responsibilities</h4>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Use strong, unique passwords and enable two-factor authentication when available</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Keep your login credentials confidential and never share them</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Immediately report any suspected unauthorized access to your account</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Log out of your account when using shared or public devices</li>
                </ul>
              </div>
            </div>

            {/* Subscription and Payment Terms */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>5. Subscription Plans and Payment Terms</h2>
              
              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>5.1 Available Plans</h3>
              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)', marginBottom: 'var(--space-lg)' }}>
                <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>Basic Plan - R8/month</h4>
                  <ul style={{ fontSize: '0.9rem' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>10 job applications per month</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>AI-powered job matching</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Basic career insights</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Email support</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>3-day free trial included</li>
                  </ul>
                </div>
                <div style={{ padding: 'var(--space-lg)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Premium Plan - R17/month</h4>
                  <ul style={{ fontSize: '0.9rem' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Unlimited job applications</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Advanced AI matching and analytics</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Personal career consultant</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Priority WhatsApp support</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>3-day free trial included</li>
                  </ul>
                </div>
              </div>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>5.2 Payment Terms</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                All subscription fees are processed through Paystack, our secure South African payment gateway:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Billing Cycle:</strong> Monthly subscriptions are billed on the same date each month</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled before the next billing date</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Payment Methods:</strong> Credit cards, debit cards, and EFT through Paystack</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Currency:</strong> All prices are in South African Rand (ZAR) including applicable taxes</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Failed Payments:</strong> Service may be suspended if payment fails; account reactivated upon successful payment</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>5.3 Free Trial Terms</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-lime)' }}>
                <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>3-Day Free Trial</h4>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Available for both Basic and Premium plans</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>No credit card required to start trial</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Full access to plan features during trial period</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Automatically converts to paid subscription if payment method is added</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Can be cancelled anytime during trial with no charges</li>
                </ul>
              </div>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>5.4 Subscription Changes and Cancellation</h3>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Upgrades:</strong> Take effect immediately with prorated billing adjustment</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Downgrades:</strong> Take effect at the next billing cycle</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Cancellation:</strong> Can be done anytime through account settings or by contacting support</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Service Continuation:</strong> Paid services continue until the end of the current billing period</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Data Retention:</strong> Account data preserved for 30 days after cancellation for reactivation</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>6. Intellectual Property Rights</h2>
              
              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>6.1 Our Intellectual Property</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                AI Job Chommie and all related technology, including but not limited to our AI algorithms, software, 
                user interface, trademarks, and content, are owned by us and protected by South African and international 
                intellectual property laws.
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to use our Service</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Restrictions:</strong> You may not copy, modify, distribute, sell, or lease any part of our Service</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>AI Technology:</strong> Our matching algorithms and AI models are proprietary and confidential</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Trademarks:</strong> "AI Job Chommie" and related marks are our registered or pending trademarks</li>
              </ul>

              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>6.2 Your Content and Information</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                You retain ownership of the content and information you provide to us (your CV, profile information, etc.). 
                However, you grant us certain rights to use this information to provide our services:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Service License:</strong> Right to use your information to provide job matching and career services</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Sharing Rights:</strong> Right to share your profile with employers when you apply for jobs</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Analytics Rights:</strong> Right to use anonymized data to improve our AI algorithms</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Storage Rights:</strong> Right to store and process your information as described in our Privacy Policy</li>
              </ul>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary-magenta)' }}>
                <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Content Standards and Ownership</h4>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  You represent and warrant that you own or have the necessary rights to all content you provide, 
                  and that your content does not infringe on the rights of any third party.
                </p>
                <p style={{ margin: 0 }}>
                  We reserve the right to remove any content that violates these terms or applicable laws.
                </p>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>7. Privacy and Data Protection</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                Your privacy is fundamental to our service. Our collection, use, and protection of your personal information 
                is governed by our comprehensive Privacy Policy, which forms an integral part of these Terms.
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)', marginBottom: 'var(--space-lg)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Your Privacy Rights</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Access and review your personal data</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Correct inaccurate information</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Request deletion of your data</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Object to certain processing activities</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Export your data in portable format</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Our Commitments</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Full POPI Act compliance</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Industry-standard security measures</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Transparent data handling practices</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>No sale of personal information</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>Prompt breach notification</li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary-cyan)' }}>
                <h4 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>Privacy Policy Integration</h4>
                <p style={{ margin: 0 }}>
                  For complete details about how we collect, use, and protect your information, 
                  please review our <Link to="/privacy" style={{ color: 'var(--accent-lime)', textDecoration: 'underline' }}>Privacy Policy</Link>. 
                  By agreeing to these Terms, you also agree to our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>8. Limitation of Liability and Disclaimers</h2>
              
              <h3 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>8.1 Service "As Is" Basis</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                While we strive to provide excellent service, AI Job Chommie is provided "as is" and "as available" 
                without warranties of any kind, either express or implied. We disclaim all warranties including 
                but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>

              <h3 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>8.2 Limitation of Liability</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(255, 165, 0, 0.1)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-lg)', border: '2px solid var(--accent-amber)' }}>
                <h4 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Important Legal Notice</h4>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  To the maximum extent permitted by South African law, we shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul style={{ marginBottom: 'var(--space-md)' }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Loss of employment opportunities or income</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Damages related to job search outcomes</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Business interruption or lost profits</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Data loss or corruption</li>
                </ul>
                <p style={{ margin: 0 }}>
                  Our total liability to you for all claims shall not exceed the amount you paid us in the 12 months 
                  preceding the claim, or R1,000, whichever is greater.
                </p>
              </div>

              <h3 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>8.3 Third-Party Services and Content</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We are not responsible for the actions, content, or services of third parties including employers, 
                recruiters, or job boards. We do not endorse or guarantee any job opportunities, employers, or 
                employment-related services accessed through our platform.
              </p>

              <h3 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>8.4 Consumer Protection Rights</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-lime)' }}>
                <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Your Rights Under South African Law</h4>
                <p style={{ margin: 0 }}>
                  Nothing in these Terms limits or excludes any rights you may have under South African consumer protection 
                  laws, including the Consumer Protection Act. Where applicable laws prohibit the limitation of liability, 
                  our liability is limited to the minimum extent permitted by such laws.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>9. Termination of Service</h2>
              
              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>9.1 Termination by You</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                You may terminate your account and these Terms at any time by:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Cancelling your subscription through account settings</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Contacting our support team at admin@aijobchommie.co.za</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Following our account deletion procedures</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>9.2 Termination by Us</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We may suspend or terminate your account and access to our services in the following circumstances:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Terms Violation:</strong> Breach of these Terms or our acceptable use policies</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Fraudulent Activity:</strong> Use of false information or fraudulent payment methods</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Legal Requirements:</strong> When required by law or court order</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Security Concerns:</strong> To protect our platform or other users</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Extended Inactivity:</strong> After 12 months of account inactivity</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>9.3 Effects of Termination</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(157, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-violet)' }}>
                <h4 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Upon Termination</h4>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Your access to paid features ends immediately</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Your profile becomes invisible to employers</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>You retain access to basic account data for 30 days</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>After 30 days, all personal data is deleted per our Privacy Policy</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>You may export your data before account deletion</li>
                </ul>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>10. Dispute Resolution and Governing Law</h2>
              
              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>10.1 Informal Resolution</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                Before pursuing formal legal action, we encourage you to contact us directly to resolve any disputes. 
                Many issues can be resolved quickly through our support channels:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Email: disputes@aijobchommie.co.za</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Response time: Within 48 hours</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Resolution target: Within 7 business days</li>
              </ul>

              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>10.2 Governing Law and Jurisdiction</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                These Terms are governed by the laws of the Republic of South Africa. Any legal disputes will be 
                resolved in the competent courts of South Africa, specifically in the Eastern Cape High Court 
                or other appropriate South African courts.
              </p>

              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>10.3 Alternative Dispute Resolution</h3>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary-cyan)' }}>
                <h4 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>Mediation and Arbitration</h4>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  For disputes involving amounts under R50,000, we prefer mediation through a recognized 
                  South African mediation service before proceeding to court.
                </p>
                <p style={{ margin: 0 }}>
                  Both parties may agree to binding arbitration under the rules of the Arbitration Foundation of Southern Africa (AFSA).
                </p>
              </div>
            </div>

            {/* General Provisions */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>11. General Provisions</h2>
              
              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>11.1 Modifications to Terms</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We may modify these Terms from time to time to reflect changes in our services, legal requirements, 
                or business practices. We will notify you of significant changes:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>30 days advance notice via email and platform notification</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Clear summary of changes and their effective date</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Option to terminate your account if you disagree with changes</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Continued use of our services constitutes acceptance of new terms</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>11.2 Severability</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
                will continue in full force and effect. The invalid provision will be replaced with a valid provision 
                that most closely achieves the intended purpose.
              </p>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>11.3 Force Majeure</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We will not be liable for any failure or delay in performance under these Terms which is due to 
                circumstances beyond our reasonable control, including but not limited to:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Natural disasters, pandemics, or public health emergencies</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Government actions, laws, or regulations</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Internet service provider failures or cyber attacks</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Labor strikes, material shortages, or supplier failures</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>11.4 Entire Agreement</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                These Terms, together with our Privacy Policy and any other referenced policies, constitute the 
                entire agreement between you and AI Job Chommie regarding your use of our services. These Terms 
                supersede any prior agreements, understandings, or representations.
              </p>
            </div>

            {/* Contact Information */}
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))', border: '2px solid var(--primary-cyan)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>12. Contact Information</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                For questions about these Terms of Service or to report violations, please contact us:
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Legal and Terms Inquiries</h3>
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Email:</strong> legal@aijobchommie.co.za</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Response Time:</strong> Within 72 hours</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Business Hours:</strong> Monday - Friday, 08:00 - 17:00 SAST</p>
                  </div>
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Company Information</h3>
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>AI Job Chommie (Pty) Ltd</strong></p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}>Registration: [Company Registration Number]</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}>Address: Port Elizabeth, Eastern Cape, South Africa</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}>General Contact: admin@aijobchommie.co.za</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' }}>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>Questions About Our Terms?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--space-xl)', color: 'var(--text-secondary)' }}>
              We're here to clarify any aspect of our Terms of Service
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:legal@aijobchommie.co.za" className="btn btn-primary" style={{ fontSize: '1rem' }}>
                ⚖️ Legal Inquiries
              </a>
              <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '1rem' }}>
                💬 General Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;

