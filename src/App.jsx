import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <img src="/logo.jpg" alt="Roundtable Learning" className="logo-image" />
            </div>

            {/* Navigation */}
            <nav className="nav">
              <a href="#solutions" className="nav-link">SOLUTIONS</a>
              <a href="#resources" className="nav-link">RESOURCE CENTER</a>
              <a href="#about" className="nav-link">ABOUT</a>
              <div className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </nav>

            {/* CTA Button */}
            <a href="#get-started" className="btn btn-primary header-cta">GET STARTED</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your #1 Partner for<br />
                <span className="highlight">Corporate Training Solutions</span>
              </h1>
              <h2 className="hero-subtitle">
                Transforming Corporate Training with Custom Built XR & Traditional Learning Content
              </h2>
              <p className="hero-description">
                powered by the most advanced analytics in L&D
              </p>
              <a href="#get-started" className="btn btn-primary hero-cta">
                Get Started
              </a>
              <p className="trust-indicator">
                trusted by 50+ Fortune 500 organizations
              </p>
            </div>
            
            <div className="hero-visuals">
              {/* Bar Chart Background */}
              <div className="chart-background">
                <div className="chart-title">Safe Lifting Practices 2.0 - Average Success Rate Per Activity</div>
                <div className="chart-bars">
                  <div className="chart-bar" style={{height: '70%'}}>70%</div>
                  <div className="chart-bar" style={{height: '85%'}}>85%</div>
                  <div className="chart-bar" style={{height: '60%'}}>60%</div>
                  <div className="chart-bar" style={{height: '90%'}}>90%</div>
                </div>
              </div>

              {/* Monitor Display */}
              <div className="monitor-container">
                <div className="monitor">
                  <div className="monitor-screen">
                    <div className="training-module">
                      <h3>Body Mechanics: Safe Lifting</h3>
                      <div className="training-steps">
                        <div className="step incorrect">
                          <div className="figure blue"></div>
                          <span className="checkmark">✗</span>
                          <p>Test package weight before lifting</p>
                        </div>
                        <div className="step correct">
                          <div className="figure blue"></div>
                          <span className="checkmark">✓</span>
                          <p>Hold item securely, with two hands</p>
                        </div>
                        <div className="step incorrect">
                          <div className="figure blue"></div>
                          <span className="checkmark">✗</span>
                          <p>NEVER use built-in straps/handles to lift</p>
                        </div>
                      </div>
                      <div className="module-controls">
                        <button className="module-btn">Back</button>
                        <button className="module-btn">Next</button>
                      </div>
                    </div>
                  </div>
                  <div className="monitor-stand"></div>
                </div>
              </div>

              {/* VR Headset */}
              <div className="vr-headset">
                <div className="headset-body"></div>
                <div className="headset-strap"></div>
                <div className="headset-lenses">
                  <div className="lens left"></div>
                  <div className="lens right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos">
        <div className="container">
          <div className="logos-grid">
            <div className="logo-item manpower">ManpowerGroup</div>
            <div className="logo-item airproducts">AIR PRODUCTS</div>
            <div className="logo-item amazon">amazon</div>
            <div className="logo-item walmart">Walmart</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
