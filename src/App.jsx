import './App.css'
import { useEffect, useRef, useState } from 'react'
import SolutionsMegaMenu from './components/SolutionsMegaMenu.jsx'
import ResourceCenterMegaMenu from './components/ResourceCenterMegaMenu.jsx'
import AboutMegaMenu from './components/AboutMegaMenu.jsx'

function App() {
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourceOpen, setResourceOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const solutionsBtnRef = useRef(null)
  const resourceBtnRef = useRef(null)
  const aboutBtnRef = useRef(null)

  // Close on route hash change or click outside handled by overlay; ensure focus returns
  useEffect(() => {
    if (!solutionsOpen) return
    const onScroll = () => setSolutionsOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [solutionsOpen])

  const toggleSolutions = (e) => {
    e.preventDefault()
    setSolutionsOpen((v) => {
      const next = !v
      if (next) {
        setResourceOpen(false)
        setAboutOpen(false)
      }
      return next
    })
  }

  useEffect(() => {
    if (!resourceOpen) return
    const onScroll = () => setResourceOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [resourceOpen])

  const toggleResource = (e) => {
    e.preventDefault()
    setResourceOpen((v) => {
      const next = !v
      if (next) {
        setSolutionsOpen(false)
        setAboutOpen(false)
      }
      return next
    })
  }

  useEffect(() => {
    if (!aboutOpen) return
    const onScroll = () => setAboutOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [aboutOpen])

  const toggleAbout = (e) => {
    e.preventDefault()
    setAboutOpen((v) => {
      const next = !v
      if (next) {
        setSolutionsOpen(false)
        setResourceOpen(false)
      }
      return next
    })
  }

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
              <a
                href="#solutions"
                ref={solutionsBtnRef}
                className={`nav-link ${solutionsOpen ? 'active' : ''}`}
                onClick={toggleSolutions}
                onMouseEnter={() => {
                  setSolutionsOpen(true)
                  setResourceOpen(false)
                  setAboutOpen(false)
                }}
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
                role="button"
              >
                SOLUTIONS
              </a>
              <a
                href="#resources"
                ref={resourceBtnRef}
                className={`nav-link ${resourceOpen ? 'active' : ''}`}
                onClick={toggleResource}
                onMouseEnter={() => {
                  setResourceOpen(true)
                  setSolutionsOpen(false)
                  setAboutOpen(false)
                }}
                aria-haspopup="menu"
                aria-expanded={resourceOpen}
                role="button"
              >
                RESOURCE CENTER
              </a>
              <a
                href="#about"
                ref={aboutBtnRef}
                className={`nav-link ${aboutOpen ? 'active' : ''}`}
                onClick={toggleAbout}
                onMouseEnter={() => {
                  setAboutOpen(true)
                  setSolutionsOpen(false)
                  setResourceOpen(false)
                }}
                aria-haspopup="menu"
                aria-expanded={aboutOpen}
                role="button"
              >
                ABOUT
              </a>
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

      {/* Solutions Mega Menu */}
      <SolutionsMegaMenu open={solutionsOpen} onClose={() => setSolutionsOpen(false)} />
      {/* Resource Center Mega Menu */}
      <ResourceCenterMegaMenu open={resourceOpen} onClose={() => setResourceOpen(false)} />
      {/* About Mega Menu */}
      <AboutMegaMenu open={aboutOpen} onClose={() => setAboutOpen(false)} />

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
