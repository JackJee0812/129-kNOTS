import React, { useEffect, useState } from 'react';
import use3DTilt from '../hooks/use3DTilt';
import Footer from './Footer';

export default function Home({ navbar }) {
  // --- Parallax Effect Logic (from Hero.jsx) ---
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const titleStyle = isDesktop && scrollY < 600 ? { transform: `translateY(${scrollY * 0.2}px)` } : {};
  const subtitleStyle = isDesktop && scrollY < 600 ? { transform: `translateY(${scrollY * 0.15}px)` } : {};

  // --- 3D Tilt Logic (from CardHeader and CardBody) ---
  const tiltHeader = use3DTilt();
  const tiltBody = use3DTilt();

  return (
    <>
      <div className="hero-section">
        <div className="hero-bg-overlay"></div>
        <img 
          src="/assets/mockup.png" 
          className="hero-bg-image" 
          alt="Background mockup" 
        />

        {/* Navigation Header passed from parent */}
        {navbar}

        {/* Main Hero Content */}
        <main className="hero-content">
          <h1 className="hero-title" style={titleStyle}>
            Bunker As A Service (BAAS)
          </h1>
          
          <div className="hero-subtitle-container" style={subtitleStyle}>
            <p className="hero-subtitle">
              BAAS brings the marine fuel industry onto one blockchain-backed workflow, enabling buyers and suppliers to raise enquiries, participate in trades, manage execution, and access operational support through a governed ecosystem.
            </p>
          </div>

          {/* Unified Mockup & Cards Container */}
          <div className="mockup-wrapper">
            {/* Floating Side Panels */}
            <div className="floating-group">
              {/* Card Header */}
              <div 
                className="card-header" 
                ref={tiltHeader.ref}
                style={tiltHeader.style}
                onMouseMove={tiltHeader.handleMouseMove}
                onMouseLeave={tiltHeader.handleMouseLeave}
              >
                <div className="arrow-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="card-header-text">MORE POWER TO YOU</span>
              </div>

              {/* Card Body */}
              <div 
                className="card-body"
                ref={tiltBody.ref}
                style={tiltBody.style}
                onMouseMove={tiltBody.handleMouseMove}
                onMouseLeave={tiltBody.handleMouseLeave}
              >
                {/* Phone mockup */}
                <div className="phone-mockup">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="baas-bg-text-left">→BAAS</div>
                    {/* <div className="baas-bg-text-right"></div> */}
                    <img 
                      src="/assets/whatsapp-phone.png" 
                      alt="WhatsApp Enquiry Notification" 
                      className="whatsapp-img" 
                    />
                  </div>
                </div>

                {/* Alert Description */}
                <div className="alert-info">
                  <p className="alert-text">Instant alerts on the 129Knots platform & WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">What BAAS Enables</h2>
          <p className="features-subtitle">
            Our ecosystem connects every touchpoint of the trade lifecycle into a single, high-fidelity digital layer.
          </p>

          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="15" x2="23" y2="15" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="15" x2="4" y2="15" />
                  </svg>
                </div>
                <h3 className="feature-card-title">Connected Trade Ecosystem</h3>
              </div>
              <p className="feature-card-desc">
                BAAS connects buyers, suppliers, operations, execution workflows, and liquidity infrastructure into one structured platform layer.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <h3 className="feature-card-title">Structured Enquiry Workflows</h3>
              </div>
              <p className="feature-card-desc">
                Raise, manage, compare, and execute bunker enquiries through one governed ecosystem designed for marine fuel trade execution.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="feature-card-title">WhatsApp-Backed Participation</h3>
              </div>
              <p className="feature-card-desc">
                Buyers and suppliers can participate through industry-native communication workflows while maintaining structure and visibility underneath.
              </p>
            </div>

            {/* Card 4 */}
            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="feature-card-title">Blockchain-Backed Transparency</h3>
              </div>
              <p className="feature-card-desc">
                Every enquiry, quote, confirmation and execution step is recorded through an immutable audit trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="support-container">
          <div className="support-circle">
            <div className="support-pill">
              <span className="support-pill-text">
                HOW BAAS<br />SUPPORTS THE<br />INDUSTRY
              </span>
              <button className="support-plus-btn">
                <span>+</span>
              </button>
            </div>
          </div>

          <div className="support-cards-container">
            {/* Card 1 */}
            <div className="support-row-card">
              <div className="support-card-left">
                <div className="support-arrow-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="support-card-text">
                  BAAS gives buyers a more structured and transparent way to manage bunker procurement workflows
                </p>
              </div>
              <button className="support-know-more-btn">Know More</button>
            </div>

            {/* Card 2 */}
            <div className="support-row-card">
              <div className="support-card-left">
                <div className="support-arrow-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="support-card-text">
                  BAAS enables suppliers to access structured bunker demand directly through the 129Knots ecosystem
                </p>
              </div>
              <button className="support-know-more-btn">Know More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="onboarding-section">
        <div className="onboarding-container">
          <h2 className="onboarding-title">The Industry Is Evolving. Move With It.</h2>
          <p className="onboarding-subtitle">
            Connect with our team to explore structured bunker workflows & book a demo
          </p>
          <button className="onboarding-btn">
            <div className="onboarding-btn-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="onboarding-btn-text">Get Onboarded Today!</span>
          </button>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  );
}
