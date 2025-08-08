import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ParticleSystem from '../components/ParticleSystem';
import GeometricBackground from '../components/GeometricBackground';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    userType: 'jobseeker'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        userType: 'jobseeker'
      });
    }, 2000);
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '08:00 - 17:00' },
    { day: 'Saturday', hours: '09:00 - 13:00' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const contactMethods = [
    {
      type: 'Email',
      value: 'hello@aijobchommie.co.za',
      icon: '📧',
      description: 'General inquiries and support'
    },
    {
      type: 'WhatsApp Business',
      value: '+27 41 123 4567',
      icon: '💬',
      description: 'Premium users only - Instant support'
    },
    {
      type: 'Phone',
      value: '+27 41 123 4567',
      icon: '📞',
      description: 'Business hours only'
    }
  ];

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
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
              Ready to revolutionize your career or find the perfect AI talent? 
              Let's start the conversation.
            </p>
            <div className="grid grid-3" style={{ maxWidth: '600px', margin: '0 auto', gap: 'var(--space-lg)' }}>
              <div className="fade-in">
                <div className="stat-number" style={{ color: 'var(--primary-cyan)' }}>{'<'}2h</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="stat-number" style={{ color: 'var(--accent-lime)' }}>24/7</div>
                <div className="stat-label">AI Support</div>
              </div>
              <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="stat-number" style={{ color: 'var(--primary-magenta)' }}>100%</div>
                <div className="stat-label">Privacy Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
            
            {/* Contact Form */}
            <div className="card">
              <h2 style={{ marginBottom: 'var(--space-md)' }}>Send us a Message</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div className="grid grid-2" style={{ gap: 'var(--space-md)' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontWeight: '500' }}>Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-md)',
                        border: '2px solid rgba(0, 255, 255, 0.3)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontWeight: '500' }}>Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-md)',
                        border: '2px solid rgba(0, 255, 255, 0.3)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-2" style={{ gap: 'var(--space-md)' }}>
                  <div>
                    <label htmlFor="company" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontWeight: '500' }}>Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-md)',
                        border: '2px solid rgba(0, 255, 255, 0.3)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="userType" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontWeight: '500' }}>I am a *</label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-md)',
                        border: '2px solid rgba(0, 255, 255, 0.3)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="jobseeker">Job Seeker</option>
                      <option value="employer">Employer/Recruiter</option>
                      <option value="investor">Potential Investor</option>
                      <option value="partner">Business Partner</option>
                      <option value="media">Media/Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontWeight: '500' }}>Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Brief description of your inquiry"
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0, 255, 255, 0.3)',
                      background: 'rgba(0, 0, 0, 0.3)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontWeight: '500' }}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry, requirements, or how we can help you..."
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0, 255, 255, 0.3)',
                      background: 'rgba(0, 0, 0, 0.3)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'btn-loading' : ''}`}
                  disabled={isSubmitting}
                  style={{ fontSize: '1.1rem', padding: 'var(--space-md) var(--space-xl)' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message 🚀
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div style={{
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 255, 255, 0.1))',
                    border: '1px solid var(--accent-lime)',
                    color: 'var(--accent-lime)',
                    textAlign: 'center'
                  }}>
                    ✅ Message sent successfully! We'll get back to you within 2 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <h2 style={{ marginBottom: 'var(--space-md)' }}>Contact Information</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                  Multiple ways to reach our team and get the support you need.
                </p>

                {/* Contact Methods */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                  {contactMethods.map((method, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                      <div style={{ fontSize: '2rem' }}>{method.icon}</div>
                      <div>
                        <h3 style={{ marginBottom: 'var(--space-xs)', color: 'var(--primary-cyan)' }}>{method.type}</h3>
                        <p style={{ fontWeight: '600', marginBottom: 'var(--space-xs)' }}>{method.value}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{ marginBottom: 'var(--space-md)', color: 'var(--accent-lime)' }}>Business Hours</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {businessHours.map((schedule, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{schedule.day}</span>
                      <span style={{ color: 'var(--primary-cyan)', fontWeight: '600' }}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'var(--space-md)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  🕐 All times are in South African Standard Time (SAST)
                </div>
              </div>

              {/* Response Time */}
              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-md)', color: 'var(--primary-magenta)' }}>Response Times</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>General Inquiries</span>
                    <span style={{ color: 'var(--accent-lime)', fontWeight: '600' }}>{'<'} 2 hours</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Premium Support</span>
                    <span style={{ color: 'var(--accent-lime)', fontWeight: '600' }}>{'<'} 30 minutes</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Technical Issues</span>
                    <span style={{ color: 'var(--accent-lime)', fontWeight: '600' }}>{'<'} 1 hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section with Google Map */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{ marginBottom: 'var(--space-md)' }}>Our Location</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Visit us at our Port Elizabeth office in the heart of the Eastern Cape's business district.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--space-4xl)', alignItems: 'stretch' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <div style={{ fontSize: '2.5rem' }}>📍</div>
                <div>
                  <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-sm)' }}>AI Job Chommie HQ</h3>
                  <div style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Baywest City Office Park<br />
                    Building 3, Suite 301<br />
                    100 Baywest Boulevard<br />
                    Hunters Retreat, Port Elizabeth<br />
                    6025, Eastern Cape<br />
                    South Africa
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <h4 style={{ color: 'var(--accent-lime)', marginBottom: 'var(--space-md)' }}>Getting Here</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 'var(--space-sm)' }}>🚗</span>
                    Ample parking available at Baywest
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 'var(--space-sm)' }}>🚌</span>
                    Multiple Algoa Bus routes nearby
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 'var(--space-sm)' }}>✈️</span>
                    15 minutes from Port Elizabeth Airport
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 'var(--space-sm)' }}>🛍️</span>
                    Adjacent to Baywest Mall
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--primary-magenta)', marginBottom: 'var(--space-md)' }}>Office Visits</h4>
                <p style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                  We welcome scheduled visits from clients, partners, and job seekers. 
                  Please contact us in advance to arrange a meeting.
                </p>
                <Link to="https://calendly.com/aijobchommie/30min" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ 
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}>
                  📅 Schedule a Meeting
                </Link>
              </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.5247084682384!2d25.591872315520467!3d-33.96438228063613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad6f4c8b5c5c5%3A0x8b3c8c8c8c8c8c8c!2sBaywest%20City%2C%20Port%20Elizabeth%2C%206025%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1644567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AI Job Chommie Office Location - Port Elizabeth"
                ></iframe>
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-md)',
                  left: 'var(--space-md)',
                  background: 'rgba(0, 0, 0, 0.8)',
                  padding: 'var(--space-sm) var(--space-md)',
                  borderRadius: 'var(--radius-md)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--space-xs)' }}>🏢 AI Job Chommie HQ</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>Baywest City Office Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' }}>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>Ready to Start Your AI Career Journey?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xl)', color: 'var(--text-secondary)' }}>
              Join thousands of South African professionals who have already 
              transformed their careers with AI Job Chommie.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pricing" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
                🚀 Get Started Now
              </Link>
              <Link to="/about" className="btn btn-secondary" style={{ fontSize: '1.1rem' }}>
                📊 View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
