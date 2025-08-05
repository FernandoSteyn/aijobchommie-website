import React from 'react';
import Navigation from '../components/Navigation';

const PrivacyPage = () => {
  return (
    <div>
      <Navigation />
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Privacy Policy</h2>
          <p>This privacy policy explains how we handle your personal data.</p>
          <h3>Information We Collect</h3>
          <p>We collect personal information that you provide to us, such as name, address, contact details.</p>
          <h3>How We Use Your Information</h3>
          <p>We use your information to provide, improve, and manage our services.</p>
          <h3>Your Rights</h3>
          <p>You have the right to access, update, or delete your personal information.</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

