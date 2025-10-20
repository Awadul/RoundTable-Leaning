import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function AboutMegaMenu({ open, onClose }) {
  const overlayRef = useRef(null)
  const [topOffset, setTopOffset] = useState(72)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const syncTop = () => {
      const header = document.querySelector('.header')
      if (header) {
        const rect = header.getBoundingClientRect()
        setTopOffset(rect.bottom)
      }
    }
    syncTop()
    window.addEventListener('resize', syncTop)
    return () => window.removeEventListener('resize', syncTop)
  }, [open])

  if (!open) return null

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose?.()
    }
  }

  return (
    <div
      className="mega-menu-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      aria-hidden
    >
      <div
        className="mega-menu"
        role="menu"
        aria-label="About menu"
        style={{ top: `${topOffset}px` }}
        onMouseLeave={() => onClose?.()}
      >
        <div className="container">
          <div className="mega-header">
            <h2 className="mega-title">About</h2>
            <p className="mega-subtitle">Empowering organizations with innovative, outcome-driven solutions.</p>
          </div>

          <div className="mega-grid about-grid">
            <Link className="mega-card about hoverable" to="/who-we-are" onClick={onClose}>
              <div className="about-card-content">
                <h3 className="mega-card-title">Who We Are</h3>
                <p className="mega-card-desc">We are the Future of Learning.</p>
              </div>
              <img src="/r.png" alt="Roundtable Logo" className="about-card-image" />
            </Link>

            <a className="mega-card about hoverable" href="https://roundtablelearning.com/case-studies/">
              <div className="about-card-content">
                <h3 className="mega-card-title">Case Studies</h3>
                <p className="mega-card-desc">Proven Results: How we transform training into tangible success.</p>
              </div>
              <img src="/tab-hand.png" alt="Tablet with hand" className="about-card-image" />
            </a>

            <a className="mega-card about hoverable" href="https://roundtablelearning.com/news/">
              <div className="about-card-content">
                <h3 className="mega-card-title">News</h3>
                <p className="mega-card-desc">The latest headlines from our team and industry thought leaders.</p>
              </div>
              <img src="/speaker.png" alt="Megaphone" className="about-card-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMegaMenu
