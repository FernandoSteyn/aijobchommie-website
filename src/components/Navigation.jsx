import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <Link to="/">
            <Logo size={50} />
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
