import React from 'react';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>About AI Job Chommie</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            AI Job Chommie was born from the heart of Port Elizabeth to help South Africans find meaningful 
            employment using cutting-edge AI technology while keeping costs minimal.
          </p>
          <h3>Our Story</h3>
          <p>Born from the heart of Port Elizabeth, AI Job Chommie was created to help South Africans
            find meaningful employment using cutting-edge AI technology while keeping costs minimal.</p>
          <h3>Our Mission</h3>
          <p>To democratize job searching through affordable AI technology, helping every South African
            find their perfect job match.</p>
          <h3>Meet the Founder</h3>
          <p>Fernando Steyn - "As a welder who faced unemployment, I understand the struggle. 
            This app is my way of giving back to the community."</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

