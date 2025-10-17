import { useEffect } from 'react'
import './VirtualRealityTraining.css'

function VirtualRealityTraining() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vr-training-page">
      {/* Hero Section */}
      <section className="vr-hero-section">
        <div className="vr-hero-container">
          <div className="vr-hero-inner">
            <div className="vr-hero-content">
              <h1 className="vr-hero-title">
                Virtual Reality Training to Engage, Enhance and Teach
              </h1>
              <h2 className="vr-hero-subtitle">
                Strategic training solutions for Fortune 500 Leaders with VR content that{' '}
                <span className="vr-hero-emphasis">actually</span> works.
              </h2>
              <div className="vr-hero-buttons">
                <a 
                  href="https://roundtablelearning.com/contact-us/" 
                  className="vr-button vr-button-primary"
                >
                  <span className="vr-button-text">SEE VR TRAINING IN ACTION</span>
                </a>
                <a 
                  href="https://roundtablelearning.com/5-things-to-know-before-starting-your-first-vr-program/" 
                  className="vr-button vr-button-secondary"
                >
                  <span className="vr-button-text">DOWNLOAD OUR VR TRAINING GUIDE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic VR Section */}
      <section className="vr-strategic-section">
        <div className="vr-strategic-container">
          <div className="vr-strategic-content">
            <h2 className="vr-strategic-title">
              <span className="vr-strategic-highlight">VR Training isn't just immersive</span> — it's strategic.
            </h2>
            <p className="vr-strategic-description">
              At Roundtable Learning, we only build VR training if it will actually make a difference at your organization. 
              Whether you're leading learning, operations, or safety, our job is to help your people build skills that stick. 
              Designed to reduce risk on the floor and boost employee performance, so they can do their jobs better, safer, 
              and more confidently. <span className="vr-strategic-emphasis">And yes, we measure the results so you know it's 
              worth the investment.</span>
            </p>

            {/* Stats Grid */}
            <div className="vr-stats-grid">
              <div className="vr-stat-card">
                <p className="vr-stat-number">90%</p>
                <p className="vr-stat-text">more upsells by sales associates after just two sessions in VR</p>
              </div>

              <div className="vr-stat-card">
                <p className="vr-stat-number">$1M</p>
                <p className="vr-stat-text">saved by replacing physical training facilities with VR simulations</p>
              </div>

              <div className="vr-stat-card">
                <p className="vr-stat-number">80%</p>
                <p className="vr-stat-text">reduction in machine crashes after launching VR machine operator training</p>
              </div>

              <div className="vr-stat-card">
                <p className="vr-stat-number">$800K</p>
                <p className="vr-stat-text">saved in workplace accidents</p>
              </div>

              <div className="vr-stat-card">
                <p className="vr-stat-number">4.79+/5</p>
                <p className="vr-stat-text">avg. learner confidence ratings</p>
              </div>

              <div className="vr-stat-card">
                <p className="vr-stat-number">100%</p>
                <p className="vr-stat-text">of learners believe VR improved their understanding of key safety skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="vr-clients-section">
        <div className="vr-clients-container">
          <p className="vr-clients-title">Making an impact at 50+ Fortune 500 Organizations</p>
          <div className="vr-clients-logo">
            <img 
              src="/Roundtable-Learning-Clients-e1758130577398.png" 
              alt="Roundtable Learning Client Logos" 
              className="vr-clients-image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default VirtualRealityTraining
