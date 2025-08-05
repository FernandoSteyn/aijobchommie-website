import React from 'react';
import Navigation from '../components/Navigation';

const TermsPage = () => {
  return (
    <div>
      <Navigation />
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Terms and Conditions</h2>
          <p>These are the terms and conditions for using our app.</p>
          <h3>Introduction</h3>
          <p>Welcome to AI Job Chommie. By using our app, you agree to these terms and conditions.</p>
          <h3>Your Responsibilities</h3>
          <p>You agree to use the app in compliance with applicable laws and to provide accurate information.</p>
          <h3>Our Policies</h3>
          <p>We reserve the right to modify these terms at any time. Please review them regularly.</p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;

