import React from 'react';

const Logo = ({ size = 50, className = '' }) => {
  return (
    <img 
      src="/logos/logo-96.png"
      alt="AI Job Chommie"
      className={`logo ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Logo;
