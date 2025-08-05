import React from 'react';
import Navigation from '../components/Navigation';

const RefundPage = () => {
  return (
    <div>
      <Navigation />
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Refund Policy</h2>
          <p>This policy explains how we handle refunds.</p>
          <h3>Eligibility</h3>
          <p>Refunds are available within 30 days of purchase for the Premium Plan only.</p>
          <h3>Process</h3>
          <p>You can request a refund by contacting our support team.</p>
          <h3>Exclusions</h3>
          <p>Refunds do not apply to promotional offers or discounts.</p>
        </div>
      </section>
    </div>
  );
};

export default RefundPage;

