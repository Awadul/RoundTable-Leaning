import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function SolutionsMegaMenu({ open, onClose }) {
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
        aria-label="Solutions menu"
        style={{ top: `${topOffset}px` }}
        onMouseLeave={() => onClose?.()}
      >
        <div className="container">
          <div className="mega-header">
            <h2 className="mega-title">Solutions</h2>
            <p className="mega-subtitle">Designed for learning success, matched with the perfect modality.</p>
          </div>

          <div className="mega-grid">
            <div className="mega-card gradient-a">
              <h3 className="mega-card-title">
                <Link to="/extended-reality-training" onClick={() => onClose?.()}>
                  Extended Reality
                </Link>
              </h3>
              <p className="mega-card-desc">Explore, engage and enhance skills in an immersive, risk-free environment.</p>
              <ul className="mega-links">
                <li>
                  <Link to="/vr-training" onClick={() => onClose?.()}>
                    Virtual Reality Training
                  </Link>
                </li>
                <li>
                  <Link to="/ar-training" onClick={() => onClose?.()}>
                    Augmented Reality Training
                  </Link>
                </li>
                <li><a href="https://roundtablelearning.com/mixed-reality-training/">Mixed Reality Training</a></li>
                <li><a href="https://roundtablelearning.com/mercuryxrs/">Data &amp; Analytics</a></li>
              </ul>
            </div>

            <div className="mega-card gradient-b">
              <h3 className="mega-card-title">Instructional Design</h3>
              <p className="mega-card-desc">Scalable learning solutions designed to meet your specific goals.</p>
              <ul className="mega-links">
                <li><a href="https://roundtablelearning.com/elearning/">eLearning</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionsMegaMenu
