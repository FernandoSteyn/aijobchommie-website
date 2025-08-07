import React from 'react';
import Navigation from '../components/Navigation';
import ParticleSystem from '../components/ParticleSystem';
import GeometricBackground from '../components/GeometricBackground';

const PrivacyPage = () => {
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
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px' }}>
              Your privacy is our priority. We're committed to protecting your personal information 
              and being transparent about how we collect, use, and safeguard your data.
            </p>
            <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', maxWidth: '600px', margin: '0 auto' }}>
              <p style={{ color: 'var(--primary-cyan)', fontWeight: '600', margin: 0 }}>
                🛡️ POPI Act Compliant | Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' }}>
            <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>Privacy at a Glance</h2>
            <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
              <div>
                <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>What We Collect</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>📧</span>
                    Contact information (name, email, phone)
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>💼</span>
                    Professional profile data
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>🔍</span>
                    Job search preferences
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-cyan)', marginRight: 'var(--space-sm)' }}>📊</span>
                    Usage analytics (anonymized)
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Your Rights</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>👁️</span>
                    Access your data anytime
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>✏️</span>
                    Correct inaccurate information
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>🗑️</span>
                    Delete your account and data
                  </li>
                  <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-lime)', marginRight: 'var(--space-sm)' }}>📦</span>
                    Export your data (portability)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Privacy Policy */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="legal-document" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Introduction */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>1. Introduction and Scope</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                AI Job Chommie (Pty) Ltd ("we," "our," or "us") is committed to protecting and respecting your privacy in accordance with 
                the Protection of Personal Information Act (POPI Act) of South Africa and international best practices for data protection.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                AI Job Chommie progressive web application and related services (collectively, the "Service"). 
                By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(157, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-violet)' }}>
                <h4 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Key Principles We Follow</h4>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Transparency:</strong> We clearly explain what data we collect and why</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Purpose Limitation:</strong> We only use your data for legitimate job matching purposes</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Data Minimization:</strong> We collect only what's necessary to provide excellent service</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}><strong>User Control:</strong> You maintain control over your personal information at all times</li>
                </ul>
              </div>
            </div>

            {/* Data Collection */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>2. Information We Collect</h2>
              
              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>2.1 Information You Provide Directly</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                When you create an account, use our services, or communicate with us, you may provide:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Personal Identifiers:</strong> Name, email address, phone number, and date of birth</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Professional Information:</strong> CV/Resume content, work experience, education, skills, certifications</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Job Preferences:</strong> Desired salary range, preferred locations, industry interests, availability</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Communication Records:</strong> Messages sent through our platform, support inquiries, feedback</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Payment Information:</strong> Billing details processed securely through Paystack (we don't store credit card numbers)</li>
              </ul>

              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>2.2 Information Collected Automatically</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                To improve our AI algorithms and user experience, we automatically collect:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Usage Analytics:</strong> Pages visited, time spent on platform, feature interactions (anonymized)</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Technical Data:</strong> Device type, browser information, IP address (masked for privacy), connection speed</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Performance Metrics:</strong> App loading times, error reports, crash logs (no personal data included)</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>AI Interaction Data:</strong> Job matching preferences, search patterns, application success rates (for algorithm improvement)</li>
              </ul>

              <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>2.3 Information from Third Parties</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                With your explicit consent, we may receive information from:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Job Boards:</strong> Public job postings and market data to improve our matching algorithms</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Professional Networks:</strong> LinkedIn profile data (only if you choose to connect your account)</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Education Providers:</strong> Verification of qualifications through accredited institutions</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Reference Contacts:</strong> Professional references (only with your explicit permission and their consent)</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>3. How We Use Your Information</h2>
              
              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>3.1 Core Service Delivery</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We use your personal information primarily to provide and improve our AI-powered job matching services:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Job Matching:</strong> Our AI algorithms analyze your profile, skills, and preferences to identify relevant opportunities</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Application Management:</strong> Track your job applications, interview schedules, and application outcomes</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Career Coaching:</strong> Provide personalized advice based on market trends and your career goals</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Communication:</strong> Send relevant job alerts, platform updates, and support communications</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>3.2 AI Algorithm Enhancement</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                To continuously improve our matching accuracy and user experience:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Pattern Recognition:</strong> Identify successful job matching patterns to improve future recommendations</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Market Intelligence:</strong> Analyze hiring trends and salary data to provide better career insights</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Skills Analysis:</strong> Understand which skills are in demand to guide career development recommendations</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Success Optimization:</strong> Learn from successful placements to enhance our AI models</li>
              </ul>

              <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>3.3 Legal and Security Purposes</h3>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Fraud Prevention:</strong> Detect and prevent fraudulent accounts and activities</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Compliance:</strong> Meet legal obligations under South African employment and data protection laws</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Security:</strong> Protect against unauthorized access and maintain platform security</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Dispute Resolution:</strong> Address user complaints and resolve platform-related disputes</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>4. Information Sharing and Disclosure</h2>
              
              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-lg)', border: '2px solid var(--accent-lime)' }}>
                <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Our Commitment: We Never Sell Your Data</h4>
                <p style={{ margin: 0 }}>
                  AI Job Chommie will never sell, rent, or trade your personal information to third parties for marketing purposes. 
                  Your data is used exclusively to help you find meaningful employment opportunities.
                </p>
              </div>

              <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>4.1 Sharing with Your Consent</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We only share your information when you explicitly consent to do so:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Job Applications:</strong> Share your profile with employers when you apply for specific positions</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Recruiter Matching:</strong> Connect you with verified recruiters (Premium feature with opt-in consent)</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Professional Networks:</strong> Enable connections with other job seekers or industry professionals (if enabled)</li>
              </ul>

              <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>4.2 Service Providers and Partners</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We work with trusted third-party service providers who help us deliver our services:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Payment Processing:</strong> Paystack (South African payment gateway) - processes payments securely</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Cloud Infrastructure:</strong> Secure cloud hosting providers for data storage and processing</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Communication Tools:</strong> Email service providers for platform notifications and support</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Analytics Services:</strong> Privacy-focused analytics tools (data anonymized before sharing)</li>
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 'var(--space-lg)' }}>
                All service providers are contractually bound to protect your data and can only use it to provide services to us.
              </p>

              <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>4.3 Legal Requirements</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We may disclose your information if required by law or to:
              </p>
              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Comply with valid legal processes (court orders, subpoenas)</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Respond to government requests in accordance with South African law</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Protect our rights, property, or safety, and that of our users</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>Investigate and prevent fraud, security breaches, or illegal activities</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>5. Data Security and Protection</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                Protecting your personal information is our top priority. We implement industry-leading security measures to safeguard your data:
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)', marginBottom: 'var(--space-lg)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Technical Safeguards</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Encryption:</strong> All data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Access Controls:</strong> Multi-factor authentication and role-based access limits</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Network Security:</strong> Firewalls, intrusion detection, and regular security monitoring</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Data Backup:</strong> Regular automated backups with encryption</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Operational Safeguards</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Staff Training:</strong> Regular privacy and security training for all employees</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Background Checks:</strong> Thorough vetting of personnel with data access</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Incident Response:</strong> 24/7 monitoring and rapid breach response procedures</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Regular Audits:</strong> Third-party security assessments and compliance audits</li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary-magenta)' }}>
                <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Data Breach Notification</h4>
                <p style={{ margin: 0 }}>
                  In the unlikely event of a data breach that may affect your personal information, we commit to:
                  <br/>• Notify you within 72 hours of discovery
                  <br/>• Provide clear information about what data was affected
                  <br/>• Offer immediate steps to protect your account
                  <br/>• Report to South African authorities as required by POPI Act
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>6. Your Privacy Rights Under POPI Act</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                As a South African resident, you have comprehensive rights regarding your personal information. 
                We make exercising these rights simple and free:
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Access and Control</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ color: 'var(--accent-lime)' }}>Right of Access:</strong> Request a copy of all personal data we hold about you
                    </li>
                    <li style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ color: 'var(--accent-lime)' }}>Right to Rectification:</strong> Correct any inaccurate or incomplete information
                    </li>
                    <li style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ color: 'var(--accent-lime)' }}>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Processing Control</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ color: 'var(--primary-magenta)' }}>Right to Object:</strong> Object to processing for direct marketing or legitimate interests
                    </li>
                    <li style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ color: 'var(--primary-magenta)' }}>Right to Restriction:</strong> Limit how we process your data in certain circumstances
                    </li>
                    <li style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <strong style={{ color: 'var(--primary-magenta)' }}>Right to Portability:</strong> Receive your data in a structured, machine-readable format
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-lg)', border: '2px solid var(--primary-cyan)' }}>
                <h4 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-md)' }}>How to Exercise Your Rights</h4>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  Contact us at <strong>privacy@aijobchommie.co.za</strong> or use the data management tools in your account settings. 
                  We will respond to all requests within 30 days and provide updates throughout the process.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  No fees apply for exercising your privacy rights. If you're unsatisfied with our response, 
                  you can lodge a complaint with the South African Information Regulator.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>7. Data Retention and Deletion</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations:
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Active Account Data</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Profile Information:</strong> Retained while your account is active</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Application History:</strong> Kept for 3 years for career progress tracking</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Communication Records:</strong> Stored for 2 years for support purposes</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Payment Records:</strong> Maintained for 7 years per tax requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Account Closure</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Immediate Deletion:</strong> Profile visible to employers removed instantly</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>30-Day Grace Period:</strong> Account can be reactivated within 30 days</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Complete Removal:</strong> All personal data deleted after 30 days</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Legal Records:</strong> Minimal data retained only for legal compliance</li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(157, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-lg)', border: '2px solid var(--accent-violet)' }}>
                <h4 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Anonymized Data for AI Improvement</h4>
                <p style={{ margin: 0 }}>
                  To continue improving our AI algorithms for future users, we may retain anonymized, aggregated data 
                  (with all personal identifiers removed) indefinitely. This data cannot be traced back to you and 
                  helps us understand job market trends and improve matching accuracy.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>8. International Data Transfers</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                While we primarily store and process your data within South Africa, some of our trusted service providers 
                may be located in other countries. When we transfer your data internationally:
              </p>

              <ul style={{ marginBottom: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Adequate Protection:</strong> We only transfer to countries with adequate data protection laws or use appropriate safeguards</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Contractual Protections:</strong> All international service providers sign data processing agreements that meet POPI Act standards</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Encryption in Transit:</strong> All international transfers are encrypted using industry-standard protocols</li>
                <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Limited Scope:</strong> Only the minimum necessary data is transferred for specific service delivery</li>
              </ul>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-lime)' }}>
                <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Our Commitment to South African Data</h4>
                <p style={{ margin: 0 }}>
                  Your core profile data, job applications, and sensitive information remain stored within South Africa 
                  on secure, local infrastructure. Only anonymized analytics and backup data may be processed internationally 
                  under strict contractual protections.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>9. Cookies and Tracking Technologies</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We use cookies and similar technologies to enhance your experience and improve our services. 
                You have full control over these preferences:
              </p>

              <div className="grid grid-3" style={{ gap: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 255, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-sm)' }}>Essential Cookies</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>Required for basic functionality</p>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <li>Login authentication</li>
                    <li>Security protection</li>
                    <li>Form data persistence</li>
                  </ul>
                </div>
                <div style={{ padding: 'var(--space-md)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-sm)' }}>Analytics Cookies</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>Help us improve the platform</p>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <li>Usage patterns (anonymized)</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking</li>
                  </ul>
                </div>
                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 65, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-sm)' }}>Preference Cookies</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>Remember your choices</p>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <li>Language preferences</li>
                    <li>Display settings</li>
                    <li>Notification preferences</li>
                  </ul>
                </div>
              </div>

              <p style={{ fontSize: '1rem', marginBottom: 'var(--space-md)' }}>
                <strong>Your Choice:</strong> You can control cookie preferences through your browser settings or our 
                in-app privacy controls. Disabling certain cookies may limit some platform functionality.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>10. Children's Privacy Protection</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                AI Job Chommie is designed for job seekers aged 18 and older. We do not knowingly collect personal information 
                from children under 18 years of age.
              </p>

              <div style={{ padding: 'var(--space-lg)', background: 'rgba(255, 0, 255, 0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--primary-magenta)' }}>
                <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>If You're Under 18</h4>
                <ul style={{ marginBottom: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Please do not create an account or provide personal information</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Ask a parent or guardian for guidance on career planning resources</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Consider our educational partnerships for career guidance programs</li>
                  <li style={{ marginBottom: 'var(--space-sm)' }}>Return when you're 18 and ready to start your professional job search</li>
                </ul>
              </div>

              <p style={{ fontSize: '1rem', marginTop: 'var(--space-lg)', fontStyle: 'italic' }}>
                If we discover that we've inadvertently collected information from someone under 18, 
                we will delete that information immediately upon verification.
              </p>
            </div>

            {/* Updates to Privacy Policy */}
            <div className="card" style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>11. Privacy Policy Updates</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, 
                or other factors. We are committed to transparency in any changes:
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>How We Notify You</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Email Notification:</strong> All active users receive advance notice</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Platform Notice:</strong> Prominent announcements on login</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Version History:</strong> Previous versions available for comparison</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Summary of Changes:</strong> Clear explanation of what's different</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Your Options</h3>
                  <ul>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>30-Day Review Period:</strong> Time to review changes before they take effect</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Continued Use:</strong> Acceptance of changes through platform use</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Account Closure:</strong> Option to close account if you disagree</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Contact Support:</strong> Questions answered before changes apply</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))', border: '2px solid var(--primary-cyan)' }}>
              <h2 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-lg)' }}>12. Contact Us About Privacy</h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                We're committed to transparency and are here to address any privacy concerns or questions you may have.
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Privacy Officer</h3>
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Email:</strong> privacy@aijobchommie.co.za</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Response Time:</strong> Within 48 hours</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Office Hours:</strong> Monday - Friday, 08:00 - 17:00 SAST</p>
                  </div>
                  
                  <h3 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Data Subject Requests</h3>
                  <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Portal:</strong> Available in your account settings</p>
                  <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Email:</strong> datarequests@aijobchommie.co.za</p>
                  <p style={{ marginBottom: 'var(--space-sm)' }}><strong>Processing Time:</strong> Maximum 30 days</p>
                </div>
                <div>
                  <h3 style={{ color: 'var(--accent-violet)', marginBottom: 'var(--space-md)' }}>Company Information</h3>
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <p style={{ marginBottom: 'var(--space-sm)' }}><strong>AI Job Chommie (Pty) Ltd</strong></p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}>Registration: [Company Registration Number]</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}>Address: Port Elizabeth, Eastern Cape</p>
                    <p style={{ marginBottom: 'var(--space-sm)' }}>South Africa</p>
                  </div>
                  
                  <h3 style={{ color: 'var(--accent-amber)', marginBottom: 'var(--space-md)' }}>Regulatory Authority</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    If you're not satisfied with our response, you may lodge a complaint with the 
                    <strong>South African Information Regulator</strong> at inforeg.org.za
                  </p>
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
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>Questions About Your Privacy?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--space-xl)', color: 'var(--text-secondary)' }}>
              We're here to help you understand and control your personal data
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:privacy@aijobchommie.co.za" className="btn btn-primary" style={{ fontSize: '1rem' }}>
                📧 Email Privacy Team
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ fontSize: '1rem' }}>
                💬 Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

