import { useEffect, useRef, useState } from 'react'

function ResourceCenterMegaMenu({ open, onClose }) {
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
        aria-label="Resource Center menu"
        style={{ top: `${topOffset}px` }}
        onMouseLeave={() => onClose?.()}
      >
        <div className="container">
          <div className="mega-header">
            <h2 className="mega-title">Resource Center</h2>
            <p className="mega-subtitle">Dive deep into the immersive world of corporate learning.</p>
          </div>

          <div className="mega-grid rc-grid">
            <a className="mega-card rc hoverable" href="https://roundtablelearning.com/resource-center/blog/">
              <div className="rc-card-content">
                <h3 className="mega-card-title">Blog</h3>
                <p className="mega-card-desc">Your source for expert knowledge in learning innovation.</p>
              </div>
              <img src="/keyboard.png" alt="Keyboard" className="rc-card-image" />
            </a>

            <a className="mega-card rc hoverable" href="https://roundtablelearning.com/ebooks">
              <div className="rc-card-content">
                <h3 className="mega-card-title">E-Books</h3>
                <p className="mega-card-desc">Detailed insights to help you implement effective training programs.</p>
              </div>
              <img src="/tablet.png" alt="Tablet" className="rc-card-image" />
            </a>

            <a className="mega-card rc hoverable" href="https://roundtablelearning.com/case-studies/">
              <div className="rc-card-content">
                <h3 className="mega-card-title">Use Cases</h3>
                <p className="mega-card-desc">Real-world applications of immersive learning in action.</p>
              </div>
              <img src="/mask.png" alt="Welding mask" className="rc-card-image" />
            </a>

            <a className="mega-card rc hoverable" href="https://roundtablelearning.com/join-the-community/">
              <div className="rc-card-content">
                <h3 className="mega-card-title">Newsletters</h3>
                <p className="mega-card-desc">Stay informed with news, tips, and strategies for learning &amp; development.</p>
              </div>
              <img src="/plane.png" alt="Paper plane" className="rc-card-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCenterMegaMenu
