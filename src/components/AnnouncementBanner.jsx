import React from 'react';

const AnnouncementBanner = () => {
  return (
    <div style={{
      background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))',
      color: 'var(--bg-primary)',
      padding: '15px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1rem',
      animation: 'pulse 2s infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        animation: 'shimmer 3s infinite'
      }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
         <strong>COMING SOON:</strong> AI Job Chommie PWA App - Currently in final testing & refinement phase! 
        <span style={{ margin: '0 10px', fontSize: '1.2rem' }}>🇿🇦</span>
        A revolution in South African job searching launches in the next few weeks!
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;
