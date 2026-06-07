import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-left-top">
            <h2 className="footer-headline">DROP US A LINE AND WE'LL GET IN TOUCH</h2>
            <a href="#schedule" className="footer-schedule-link">SCHEDULE A CALL</a>
          </div>
          <div className="footer-address">
            <p>10 ANSON RD, #16-22</p>
            <p>INTERNATIONAL PLAZA,</p>
            <p>SINGAPORE 079903</p>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">LINKEDIN</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">X</a>
          </div>
          
          <div className="footer-email-container">
            <a href="mailto:business@129knots.com" className="footer-email">
              <span>BUSINESS@129KNOTS.COM</span>
              <svg className="footer-email-arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <a href="#tribal-knots" className="footer-link">TRIBAL KNOTS</a>
              <a href="#solutions" className="footer-link">SOLUTIONS</a>
              <a href="#industries" className="footer-link">INDUSTRIES</a>
            </div>
            <div className="footer-links-col">
              <a href="#careers" className="footer-link">CAREERS</a>
              <a href="#contact" className="footer-link">CONTACT</a>
              <a href="#about" className="footer-link">ABOUT 129KNOTS</a>
            </div>
            <div className="footer-links-col">
              <a href="#videos" className="footer-link">VIDEOS</a>
              <a href="#blogs" className="footer-link">BLOGS</a>
              <a href="#news" className="footer-link">NEWS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
