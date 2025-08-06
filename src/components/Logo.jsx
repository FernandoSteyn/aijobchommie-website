import React from 'react';

const Logo = ({ size = 50, className = '' }) => {
  return (
    <div 
      className={`logo ${className}`}
      style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle with gradient */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#gradient)"
          stroke="#00ffff"
          strokeWidth="2"
        />
        
        {/* AI Symbol */}
        <text
          x="50"
          y="35"
          textAnchor="middle"
          fill="#000000"
          fontSize="20"
          fontFamily="Orbitron, monospace"
          fontWeight="bold"
        >
          AI
        </text>
        
        {/* Job Symbol */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill="#000000"
          fontSize="12"
          fontFamily="Rajdhani, sans-serif"
          fontWeight="600"
        >
          JOB
        </text>
        
        {/* Circuit pattern */}
        <path
          d="M20 70 L30 70 L30 75 L35 75 M35 70 L40 70 M45 75 L50 75 M55 70 L65 70 L65 75 L70 75 M75 70 L80 70"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
        />
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
