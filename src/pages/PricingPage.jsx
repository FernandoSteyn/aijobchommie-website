import React from 'react';
import Navigation from '../components/Navigation';

const PricingPage = () => {
  return (
    <div>
      <Navigation />
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Pricing</h2>
          <h3>Basic Plan</h3>
          <p>R8/month - Access to basic job matching features.</p>
          <h3>Premium Plan</h3>
          <p>R17/month - Unlock advanced AI tools for job searching.</p>
          <h3>Free Plan</h3>
          <p>Limited access to features, no cost involved.</p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

