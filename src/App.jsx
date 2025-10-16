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
              <img src="/hero.png" alt="Training visual" className="hero-image" />
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
