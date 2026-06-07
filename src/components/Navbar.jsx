import React, { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ['Home', 'Products', 'About', 'News', 'Careers'];

  return (
    <header className="header">
      {/* Logo */}
      <a href="#" className="logo" onClick={(e) => e.preventDefault()}>
        <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="18" r="8" fill="#FF3366" fillOpacity="0.75" style={{ mixBlendMode: 'screen' }} />
          <circle cx="22" cy="18" r="8" fill="#33CC99" fillOpacity="0.75" style={{ mixBlendMode: 'screen' }} />
          <circle cx="18" cy="24" r="8" fill="#0099FF" fillOpacity="0.75" style={{ mixBlendMode: 'screen' }} />
        </svg>
        <span className="logo-text">129<span className="logo-text-light">KNOTS</span></span>
      </a>

      {/* Toggle Button */}
      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navbar Links */}
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-link ${activeItem === item ? 'active' : ''}`}
            onClick={() => {
              setActiveItem(item);
              setIsOpen(false);
            }}
          >
            {item}
          </button>
        ))}
        {/* Connect CTA Button for mobile dropdown */}
        <a href="#" className="connect-btn mobile-only-connect" onClick={(e) => { e.preventDefault(); setIsOpen(false); }}>
          <svg className="connect-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Let's Connect</span>
        </a>
      </nav>

      {/* Connect CTA Button for desktop */}
      <a href="#" className="connect-btn desktop-only-connect" onClick={(e) => e.preventDefault()}>
        <svg className="connect-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Let's Connect</span>
      </a>
    </header>
  );
}
