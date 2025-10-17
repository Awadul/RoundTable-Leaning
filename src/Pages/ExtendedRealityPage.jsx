import { useEffect } from 'react'

function ExtendedRealityPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Load HubSpot form script
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/8192075.js'
    script.defer = true
    script.fetchpriority = 'high'
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="xr-page">
      {/* Hero Section - Image as Container Background */}
      <section className="xr-hero-section">
        <div className="xr-hero-container">
          <div className="xr-hero-inner">
            <div className="xr-hero-content-wrapper">
              <div className="xr-hero-text-content">
                <h1 className="xr-main-title">
                  Extended Reality (XR) Training Solutions: Transform How Your Workforce Learns
                </h1>
                
                <h2 className="xr-subtitle">
                  Empower Your Workforce with Immersive Training – Virtual Reality, Augmented Reality, and Mixed Reality
                </h2>
                
                <div className="xr-button-group">
                  <a href="/contact-us/" className="xr-button xr-button-primary">
                    REQUEST AN XR TRAINING DEMO
                  </a>
                  <a href="/case-studies/" className="xr-button xr-button-secondary">
                    EXPLORE OUR USE CASES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Extended Reality Section */}
      <section className="xr-what-is-section">
        <div className="xr-what-is-container">
          <div className="xr-what-is-inner">
            <h2 className="xr-what-is-title">What Is Extended Reality (XR) Training?</h2>
            <div className="xr-what-is-content">
              <p>
                Extended Reality (XR) is an umbrella term encompassing Virtual Reality (VR), 
                Augmented Reality (AR), and Mixed Reality (MR). It represents a revolutionary 
                leap in corporate training, blending the digital and physical worlds to create 
                highly immersive, interactive, and effective learning environments.
              </p>
              <p>
                Unlike traditional methods, XR technology immerses learners in realistic simulations. 
                It adds important information to real-world tasks. It also lets users interact with 
                virtual objects in their physical space. This powerful combination delivers experiential 
                learning that drives real behavior change and significantly improves job performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Extended Reality Section */}
      <section className="xr-types-section">
        <div className="xr-types-container">
          <div className="xr-types-header">
            <h2 className="xr-types-title">Types of Extended Reality</h2>
            <p className="xr-types-intro">
              Dive deeper into the specific types of immersive learning that can empower your organization. 
              VR, AR, and MR each deliver unique value to enterprise learning. We build all three in-house, 
              ensuring your corporate XR training program uses the best modality for your learning goals.
            </p>
          </div>

          <div className="xr-types-grid">
            {/* Virtual Reality Card */}
            <a href="/virtual-reality-training/" className="xr-type-card">
              <h3 className="xr-type-card-title">Virtual Reality Training</h3>
              <p className="xr-type-card-description">
                Fully immersive simulations for high-stakes practice in a safe environment.
              </p>
              <div className="xr-type-card-image">
                <img 
                  src="https://roundtablelearning.com/wp-content/uploads/2025/09/person-who-is-virtual-reality-training-1024x686.jpg" 
                  alt="Person who is virtual reality training"
                />
              </div>
            </a>

            {/* Augmented Reality Card */}
            <a href="/augmented-reality-training/" className="xr-type-card">
              <h3 className="xr-type-card-title">Augmented Reality Training</h3>
              <p className="xr-type-card-description">
                Contextual overlays and step-by-step guidance in real-world settings.
              </p>
              <div className="xr-type-card-image">
                <img 
                  src="https://roundtablelearning.com/wp-content/uploads/2025/09/person-using-augmented-reality-software-1024x686.jpg" 
                  alt="Person using augmented reality software"
                />
              </div>
            </a>

            {/* Mixed Reality Card */}
            <div className="xr-type-card">
              <h3 className="xr-type-card-title">Mixed Reality Training</h3>
              <p className="xr-type-card-description">
                Blending physical and digital worlds for hands-on practice with interactive holograms.
              </p>
              <div className="xr-type-card-image">
                <img 
                  src="https://roundtablelearning.com/wp-content/uploads/2025/09/two-individuals-using-mixed-reality-technology-1024x686.jpg" 
                  alt="Two individuals using mixed reality technology"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="xr-testimonials-section">
        <div className="xr-testimonials-container">
          {/* Awards Gallery */}
          <div className="xr-awards-gallery">
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/bhg-award-gold-2024-300x300.png" 
              alt="BHG Award - Gold 2024"
              className="xr-award-badge"
            />
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/top-20-company-award-2024-300x300.png" 
              alt="Top 20 Company Award - 2024"
              className="xr-award-badge"
            />
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/bhg-award-gold-2023-300x300.png" 
              alt="BHG Award - Gold 2023"
              className="xr-award-badge"
            />
          </div>

          {/* Testimonials Content */}
          <h2 className="xr-testimonials-title">What Our Clients Say About Our Training</h2>
          
          <div className="xr-testimonial-card">
            <div className="xr-testimonial-content">
              <p className="xr-testimonial-quote">
                "The quality of the VR content is extraordinary. For us, we learned the best way to promote 
                and educate our leaders about VR is just to have them take the experience. Several times, 
                a leader would put on the headset and just say, 'Wow.'"
              </p>
            </div>
            <div className="xr-testimonial-meta">
              <div className="xr-testimonial-image">
                <img 
                  src="https://roundtablelearning.com/wp-content/uploads/2024/12/cox_logo.png" 
                  alt="Cox Communications"
                />
              </div>
              <div className="xr-testimonial-author">
                <div className="xr-testimonial-name">David McGrath</div>
                <div className="xr-testimonial-job">Learning Technology Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose XR Section */}
      <section className="xr-why-choose-section">
        <div className="xr-why-choose-container">
          <h2 className="xr-why-choose-title">
            <span className="xr-title-highlight">Why Choose XR for Your Corporate Training?</span>
          </h2>
          
          <div className="xr-why-choose-content">
            <p>
              In today's fast-evolving business landscape, traditional training methods often fall short. 
              We design extended reality training programs that deliver measurable results in real-world 
              environments. With immersive training powered by augmented, virtual, and mixed reality, your 
              team gets the right knowledge at the right time.
            </p>
            <p>
              Our extended reality solutions offer step-by-step guidance, interactive simulations, and live 
              expert support. You can find them in factories, retail stores, and healthcare facilities.
            </p>
            <p>
              No generic off-the-shelf courses. No vendor lock-in. Just XR training solutions built for your 
              specific workflows that improve performance, reduce errors, and accelerate learning.
            </p>
          </div>

          <div className="xr-stats-grid">
            <div className="xr-stat-card">
              <div className="xr-stat-number">4X</div>
              <div className="xr-stat-label">faster learning</div>
            </div>
            <div className="xr-stat-card">
              <div className="xr-stat-number">$2M</div>
              <div className="xr-stat-label">cost savings</div>
            </div>
            <div className="xr-stat-card">
              <div className="xr-stat-number">90%</div>
              <div className="xr-stat-label">higher knowledge retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Enterprises Section */}
      <section className="xr-enterprises-section">
        <div className="xr-enterprises-container">
          <h2 className="xr-enterprises-title">
            <span className="xr-title-highlight">Trusted by Leading Enterprises</span>
          </h2>
          
          <div className="xr-client-logos">
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/amazon-logo@2x.png" 
              alt="Amazon"
              className="xr-client-logo"
            />
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/walmart-logo@2x.png" 
              alt="Walmart"
              className="xr-client-logo"
            />
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/kellanova-logo@2x.png" 
              alt="Kellanova"
              className="xr-client-logo"
            />
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/lincoln-electric-logo@2x.png" 
              alt="Lincoln Electric"
              className="xr-client-logo"
            />
            <img 
              src="https://roundtablelearning.com/wp-content/uploads/2025/09/bnsf-logo@2x.png" 
              alt="BNSF"
              className="xr-client-logo"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="xr-faq-section">
        <div className="xr-faq-container">
          <h2 className="xr-faq-title">FAQ's</h2>
          
          <div className="xr-faq-accordion">
            <details className="xr-faq-item" open>
              <summary className="xr-faq-question">
                <h3>What is XR Training?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  Extended Reality (XR) Training combines virtual, augmented, and mixed reality into 
                  immersive learning experiences. Extended Reality solutions allow learners to engage 
                  with realistic simulations and contextual overlays directly in their work environment, 
                  improving retention and performance.
                </p>
              </div>
            </details>

            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>How does XR Training work?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  XR technology uses devices like VR headsets, AR glasses, or mobile devices to deliver 
                  interactive training. Learners can perform virtual tasks, follow guided workflows, or 
                  receive real-time remote support without leaving their work area.
                </p>
              </div>
            </details>

            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>What industries benefit from XR Training?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  XR Training is highly effective in manufacturing, healthcare, logistics, retail, safety 
                  compliance, and corporate operations. It's especially impactful for complex, high-risk, 
                  or high-cost training needs.
                </p>
              </div>
            </details>

            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>How can I start using XR Technology?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  We start with a discovery call to understand your training goals, audience, and technical 
                  environment. Our instructional designers choose the best XR type—VR, AR, MR, or a mix.
                </p>
                <p>
                  They then create a detailed learning plan. Our development team then builds your custom 
                  content, testing it with your team to ensure usability and effectiveness.
                </p>
                <p>
                  Once approved, we launch the program on our XR training platform, Mercury XRS. We also 
                  offer ongoing support, updates, and performance analytics. This way, your training keeps 
                  delivering results.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="xr-cta-section">
        <div className="xr-cta-container">
          <div className="xr-cta-inner">
            <div className="xr-cta-header">
              <h3 className="xr-cta-title">Ready to Redefine Your Corporate Training?</h3>
              <a href="/contact-us/" className="xr-cta-button-desktop">
                BOOK MY DEMO
              </a>
            </div>
            <p className="xr-cta-description">
              Discover how Extended Reality can revolutionize your learning programs, boost employee 
              performance, and deliver significant ROI.
            </p>
            <a href="/contact-us/" className="xr-cta-button-mobile">
              BOOK A DEMO
            </a>
          </div>
        </div>
      </section>

      {/* HubSpot Form Section */}
      <section className="xr-form-section">
        <div className="xr-form-container">
          <div 
            className="hs-form-frame" 
            data-region="na1" 
            data-form-id="7ef2296d-650b-4e31-a2ac-04635173843f" 
            data-portal-id="8192075"
          >
            <iframe 
              src="https://js.hsforms.net/ui-forms-embed-components-app/frame.html?_hsPortalId=8192075&_hsFormId=7ef2296d-650b-4e31-a2ac-04635173843f&_hsIsQa=false&_hsHublet=na1&_hsDisableScriptloader=true&_hsDisableRedirect=true&_hsInstanceId=a199ef6f-214c-4314-969d-7cd71b5281a9&_hsUtk=99d049c4974b2c3954f182d0cfaf6978" 
              data-test-id="embedded-form-7ef2296d-650b-4e31-a2ac-04635173843f" 
              title="Contact Form" 
              scrolling="no"
              className="xr-form-iframe"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExtendedRealityPage
