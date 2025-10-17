import { useEffect, useRef } from 'react'

function ExtendedRealityPage() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="xr-page">
      {/* Hero Section */}
      <section className="xr-hero" ref={heroRef}>
        <div className="xr-hero-overlay"></div>
        <div className="container">
          <div className="xr-hero-content">
            <div className="xr-hero-text">
              <h1 className="xr-hero-title">
                Extended Reality (XR) Training Solutions: <span className="highlight">Transform How Your Workforce Learns</span>
              </h1>
              
              <h2 className="xr-hero-subtitle">
                Empower Your Workforce with Immersive Training – Virtual Reality, Augmented Reality, and Mixed Reality
              </h2>
              
              <div className="xr-hero-buttons">
                <a href="/contact-us/" className="btn btn-primary xr-cta-primary">
                  Request an XR Training Demo
                </a>
                <a href="/case-studies/" className="btn btn-secondary xr-cta-secondary">
                  Explore Our Use Cases
                </a>
              </div>

              <div className="xr-hero-features">
                <div className="xr-feature-badge">
                  <svg className="xr-badge-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Proven ROI Results</span>
                </div>
                <div className="xr-feature-badge">
                  <svg className="xr-badge-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Trusted by Fortune 500</span>
                </div>
                <div className="xr-feature-badge">
                  <svg className="xr-badge-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Rapid Deployment</span>
                </div>
              </div>
            </div>

            <div className="xr-hero-visual">
              <div className="xr-visual-card xr-card-vr">
                <div className="xr-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M8 3V5M8 3H16M16 3H19C20.1046 3 21 3.89543 21 5V8M16 3V5M3 8V16M3 8H5M21 8V16M21 8H19M3 16V19C3 20.1046 3.89543 21 5 21H8M3 16H5M8 21H16M8 21V19M16 21H19C20.1046 21 21 20.1046 21 19V16M16 21V19M21 16H19M19 5H16M19 5V8M16 5H8M16 5V8M8 5V8M5 8V16M5 8H8M19 8V16M19 8H16M8 8V16M8 8H16M16 8V16M5 16V19M5 16H8M19 16V19M19 16H16M8 16V19M8 16H16M16 16V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Virtual Reality</h3>
                <p>Full immersion learning</p>
              </div>

              <div className="xr-visual-card xr-card-ar">
                <div className="xr-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Augmented Reality</h3>
                <p>Enhanced real-world training</p>
              </div>

              <div className="xr-visual-card xr-card-mr">
                <div className="xr-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Mixed Reality</h3>
                <p>Blend virtual and physical</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExtendedRealityPage
