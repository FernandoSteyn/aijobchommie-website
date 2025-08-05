import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Start spotlight effect immediately
    const spotlightTimer = setTimeout(() => {
      setShowSpotlight(true);
    }, 300);

    // Reveal logo after spotlight appears
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1200);

    // Complete loading after animations
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(spotlightTimer);
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <>
      <style>
        {`
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            overflow: hidden;
          }
          
          .spotlight {
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(0, 255, 255, 0.3) 0%,
              rgba(0, 255, 255, 0.1) 30%,
              rgba(255, 20, 147, 0.2) 60%,
              transparent 100%
            );
            transform: scale(0);
            transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .spotlight.show {
            transform: scale(1);
            animation: pulse 2s infinite alternate;
          }
          
          .logo-container {
            position: relative;
            z-index: 2;
            transform: scale(0);
            opacity: 0;
            transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            filter: brightness(0) contrast(2);
          }
          
          .logo-container.show {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1) contrast(1);
            animation: glow 2s infinite alternate;
          }
          
          .ai-logo {
            width: 120px;
            height: 120px;
            background: linear-gradient(45deg, #00ffff, #ff1493);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            color: #000;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
          }
          
          .loading-text {
            position: absolute;
            bottom: 30%;
            color: #00ffff;
            font-family: 'Orbitron', monospace;
            font-size: 18px;
            font-weight: 500;
            text-align: center;
            opacity: 0;
            animation: fadeInText 1s ease-in-out 2s forwards;
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 50px rgba(0, 255, 255, 0.3);
            }
            100% {
              box-shadow: 0 0 80px rgba(0, 255, 255, 0.6), 
                         0 0 120px rgba(255, 20, 147, 0.4);
            }
          }
          
          @keyframes glow {
            0% {
              box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
            }
            100% {
              box-shadow: 0 0 50px rgba(0, 255, 255, 0.8),
                         0 0 80px rgba(255, 20, 147, 0.6);
            }
          }
          
          @keyframes fadeInText {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div className="loading-screen">
        <div className={`spotlight ${showSpotlight ? 'show' : ''}`}></div>
        <div className={`logo-container ${showLogo ? 'show' : ''}`}>
          <div className="ai-logo">
            🧠
          </div>
        </div>
        <div className="loading-text">
          AI Job Chommie
          <br />
          <span style={{ fontSize: '14px', opacity: 0.7 }}>Initializing...</span>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;

