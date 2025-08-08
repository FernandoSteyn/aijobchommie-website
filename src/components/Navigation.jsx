import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkStyle = (path) => ({
    position: 'relative',
    color: isActive(path) ? 'var(--primary-cyan)' : 'inherit',
    fontWeight: isActive(path) ? '600' : 'normal',
    textShadow: isActive(path) ? '0 0 10px var(--primary-cyan)' : 'none',
    transition: 'all 0.3s ease'
  });

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-container">
            <Link to="/" onClick={closeMobileMenu}>
              <Logo size={50} />
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="nav-links">
              <li><Link to="/" style={getLinkStyle('/')}>Home</Link></li>
              <li><Link to="/about" style={getLinkStyle('/about')}>About</Link></li>
              <li><Link to="/pricing" style={getLinkStyle('/pricing')}>Pricing</Link></li>
              <li><Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link></li>
              <li><Link to="/terms" style={getLinkStyle('/terms')}>Terms</Link></li>
              <li><Link to="/privacy" style={getLinkStyle('/privacy')}>Privacy</Link></li>
            </ul>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMobileMenu} style={getLinkStyle('/')}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu} style={getLinkStyle('/about')}>About</Link></li>
          <li><Link to="/pricing" onClick={closeMobileMenu} style={getLinkStyle('/pricing')}>Pricing</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu} style={getLinkStyle('/contact')}>Contact</Link></li>
          <li><Link to="/terms" onClick={closeMobileMenu} style={getLinkStyle('/terms')}>Terms</Link></li>
          <li><Link to="/privacy" onClick={closeMobileMenu} style={getLinkStyle('/privacy')}>Privacy</Link></li>
        </ul>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navigation;
