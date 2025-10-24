import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import HomePage from './Pages/HomePage.jsx'
import ExtendedRealityPage from './Pages/ExtendedRealityPage.jsx'
import VirtualRealityTraining from './Pages/VirtualRealityTraining.jsx'
import AugmentedRealityTraining from './Pages/AugmentedRealityTraining.jsx'
import MixedRealityTraining from './Pages/MixedRealityTraining.jsx'
import DataAnalysis from './Pages/DataAnalysis.jsx'
import Elearning from './Pages/Elearning.jsx'
import WhoWeAre from './Pages/WhoWeAre.jsx'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SolutionsMegaMenu from './components/SolutionsMegaMenu.jsx'
import ResourceCenterMegaMenu from './components/ResourceCenterMegaMenu.jsx'
import AboutMegaMenu from './components/AboutMegaMenu.jsx'
import Footer from './components/Footer.jsx'

function App({ children }) {
  const location = useLocation()
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourceOpen, setResourceOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const solutionsBtnRef = useRef(null)
  const resourceBtnRef = useRef(null)
  const aboutBtnRef = useRef(null)

  // Close menus on route change
  useEffect(() => {
    setSolutionsOpen(false)
    setResourceOpen(false)
    setAboutOpen(false)
  }, [location])

  // Close on scroll
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
            <Link to="/" className="logo">
              <img src="/logo.jpg" alt="Roundtable Learning" className="logo-image" />
            </Link>

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
              {/* Temporarily hidden RESOURCE CENTER link */}
              {/* <a
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
              </a> */}
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

      {/* Page Content */}
      {children}

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/extended-reality-training" element={<ExtendedRealityPage />} />
          <Route path="/vr-training" element={<VirtualRealityTraining />} />
          <Route path="/ar-training" element={<AugmentedRealityTraining />} />
          <Route path="/mr-training" element={<MixedRealityTraining />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
          <Route path="/elearning" element={<Elearning />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
)
