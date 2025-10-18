import React from 'react';
import './MixedRealityTraining.css';

const MixedRealityTraining = () => {
  return (
    <main className="xr-page">
      {/* XR Hero Section */}
      <section className="xr-hero-section">
        <div className="xr-hero-container">
          <div className="xr-hero-inner">
            <div className="xr-hero-content-wrapper">
              <div className="xr-hero-text-content">
                <h1 className="xr-main-title">
                  Mixed Reality (MR) Training Solutions: Where Physical Meets Digital for Maximum Impact
                </h1>
                
                <h2 className="xr-subtitle">
                  Transform Your Workforce with Corporate Immersive Training – Hands-On Learning with Digital Assets and Real-World Context
                </h2>
                
                <div className="xr-button-group">
                  <a href="/contact-us/" className="xr-button xr-button-primary">
                    GET YOUR MIXED REALITY DEMO
                  </a>
                  <a href="/case-studies/" className="xr-button xr-button-secondary">
                    SEE MR TRAINING IN ACTION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Mixed Reality Training? */}
      <section className="mr-what-section">
        <div className="mr-what-container">
          <h2 className="mr-what-title">What Is Mixed Reality Training?</h2>
          <div className="mr-what-body">
            <p>Mixed Reality (MR) training seamlessly blends physical and digital worlds for the ultimate immersive learning experience. Unlike VR’s fully digital environments or AR’s simple overlays, mixed reality lets learners manipulate holograms with their hands, practice on virtual equipment, and receive contextual guidance, all in their actual workplace.</p>
            <p>Your team learns by doing. Digital mentors guide complex procedures. Interactive 3D models appear alongside real machinery. Workflows adapt to each learner’s pace. It’s training that feels natural because it bridges the gap between simulation and reality.</p>
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

      {/* Why MR Delivers the Best Training Results */}
      <section className="mr-why-section">
        <div className="mr-why-container">
          <h2 className="mr-why-title"><span>Why MR Delivers the Best Training Results</span></h2>
          <div className="mr-why-body">
            <p>Traditional training struggles with the gap between classroom learning and real-world application. Mixed reality training solutions eliminate this disconnect by placing learning directly in context. Your employees don’t just read about procedures—they perform them with guided precision.</p>
            <p>Our corporate immersive training approach combines the safety of simulation with the authenticity of real-world environments. Learners practice on expensive equipment without risk, receive instant feedback on their technique, and build muscle memory through repetitive hands-on practice. The result? Faster competency development, higher confidence levels, and dramatically reduced errors when transitioning to independent work.</p>
          </div>

          <div className="mr-why-stats">
            <div className="mr-why-stat">
              <div className="mr-why-value">53%</div>
              <div className="mr-why-caption">faster learning</div>
            </div>
            <div className="mr-why-stat">
              <div className="mr-why-value">$2M</div>
              <div className="mr-why-caption">cost savings</div>
            </div>
            <div className="mr-why-stat">
              <div className="mr-why-value">97%</div>
              <div className="mr-why-caption">reduction in training time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="xr-cta-section">
        <div className="xr-cta-container">
          <div className="xr-cta-inner">
            <div className="xr-cta-header">
              <h3 className="xr-cta-title">Ready to Experience Mixed Reality Training?</h3>
              <a href="/contact-us/" className="xr-cta-button-desktop">
                BOOK MY DEMO
              </a>
            </div>
            <p className="xr-cta-description">
                See firsthand how mixed reality can revolutionize your training programs, accelerate skill development, and deliver measurable business results.
            </p>
            <a href="/contact-us/" className="xr-cta-button-mobile">
              BOOK A DEMO
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="vr-industries-section">
        <div className="vr-industries-container">
          <h2 className="vr-industries-title">Industries We Serve</h2>
          
          <div className="vr-industries-card">
            <div className="vr-industries-grid">
              {/* Industry 1 - Enterprise Operations */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/MixedReality/manufacturing.png" alt="Enterprise Operations" />
                </div>
                <h3 className="vr-industry-name">Manufacturing & Industrial</h3>
                <p className="vr-industry-description">
                  Complex assembly procedures, equipment maintenance, and safety protocols with interactive 3D guidance and error prevention.
                </p>
              </div>

              {/* Industry 2 - Healthcare */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/MixedReality/healthcare-and-medical.png" alt="Environmental Health and Safety" />
                </div>
                <h3 className="vr-industry-name">Healthcare & Medical</h3>
                <p className="vr-industry-description">
                    Surgical training, patient care scenarios, and medical device operation with realistic anatomy models and procedure guidance.
                </p>
              </div>

              {/* Industry 3 - Field Service */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/MixedReality/field-service-and-maintenance.png" alt="Field Service" />
                </div>
                <h3 className="vr-industry-name">Field Service & Maintenance</h3>
                <p className="vr-industry-description">
                  Equipment repair, diagnostic procedures, and technical installations with contextual information and remote expert support.
                </p>
              </div>

              {/* Industry 4 - Retail */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/MixedReality/logistics.png" alt="Logistics & Warehousing" />
                </div>
                <h3 className="vr-industry-name">Logistics & Warehousing</h3>
                <p className="vr-industry-description">
                  Inventory management, quality control, and order fulfillment with spatial computing and workflow optimization.
                </p>
              </div>

              {/* Industry 5 - Energy */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/MixedReality/energy-and-utilities.png" alt="Energy" />
                </div>
                <h3 className="vr-industry-name">Energy & Utilities</h3>
                <p className="vr-industry-description">
                  Safety procedures, equipment operation, and emergency response with high-fidelity simulations and compliance tracking.
                </p>
              </div>

              {/* Industry 6 - Retail & Hospitality */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/MixedReality/retail.png" alt="Retail & Hospitality" />
                </div>
                <h3 className="vr-industry-name">Retail & Hospitality</h3>
                <p className="vr-industry-description">
                  Customer service excellence, product knowledge, and operational procedures with interactive scenarios and performance analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MR Training Section */}
      <section className="xr-types-section">
        <div className="xr-types-container">
          <div className="xr-types-header">
            <h2 className="xr-types-title">Why Choose Our MR Training Solutions?</h2>
            <p className="xr-types-intro">
                Not all mixed reality training is created equal. Generic solutions 
                lack the depth and customization needed for enterprise-level results. 
                We build mixed reality training solutions specifically for your workflows, 
                equipment, and performance goals.
            </p>
            <p className="xr-types-intro">
                Our team combines instructional design expertise with cutting-edge MR development 
                capabilities. We don’t just deploy technology, we craft learning 
                experiences that drive measurable behavior change. From initial strategy 
                through ongoing support, we ensure your immersive learning for enterprise 
                investment delivers sustained ROI.
            </p>
          </div>

          <div className="xr-types-grid">
            {/* Virtual Reality Card */}
            <a className="xr-type-card">
              <h3 className="xr-type-card-title">Custom-Built Solutions</h3>
              <p className="xr-type-card-description">
                Every mixed reality training program is tailored to your specific procedures, equipment, and learning objectives—no generic templates or vendor lock-in.
              </p>
              <div className="xr-type-card-image">
                <img 
                  src="https://roundtablelearning.com/wp-content/uploads/2025/09/person-who-is-virtual-reality-training-1024x686.jpg" 
                  alt="Person who is virtual reality training"
                />
              </div>
            </a>

            {/* Augmented Reality Card */}
            <a className="xr-type-card">
              <h3 className="xr-type-card-title">Proven Learning Science</h3>
              <p className="xr-type-card-description">
                Our instructional designers apply evidence-based learning principles to maximize knowledge retention and skill transfer to real-world performance.
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
              <h3 className="xr-type-card-title">Complete Setup Support</h3>
              <p className="xr-type-card-description">
                From hardware selection to trainer certification to ongoing content updates, we handle the entire lifecycle of your MR training program.
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

      {/* FAQ Section */}
      <section className="xr-faq-section">
        <div className="xr-faq-container">
          <h2 className="xr-faq-title">FAQ's</h2>
          
          <div className="xr-faq-accordion">
            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>What makes Mixed Reality different from VR or AR training?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  Mixed reality training combines the best of both worlds—the full immersion of VR with the real-world context of AR. Learners can manipulate holographic objects with their hands while remaining aware of their physical environment, creating the most natural and intuitive learning experience possible.
                </p>
              </div>
            </details>

            <details className="xr-faq-item" open>
              <summary className="xr-faq-question">
                <h3>What equipment is needed for Mixed Reality training?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  Modern MR training typically uses devices like Magic Leap 2, or similar mixed reality headsets. These devices track hand movements, eye gaze, and spatial positioning to create seamless interactions between digital content and the physical world.
                </p>
              </div>
            </details>

            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>How long does it take to develop custom Mixed Reality training?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  Development timelines vary based on complexity, but most custom mixed reality training solutions take 3–6 months from initial design to deployment. We work in iterative phases, allowing you to test and refine the experience throughout development.
                </p>
              </div>
            </details>

            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>What kind of ROI can I expect from Mixed Reality training?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  Our clients typically see ROI within 6 months through reduced training time, fewer errors, improved safety compliance, and decreased equipment downtime. The exact ROI depends on your specific use case, but immersive learning for enterprise consistently delivers measurable business value.
                </p>
              </div>
            </details>

            <details className="xr-faq-item">
              <summary className="xr-faq-question">
                <h3>Can Mixed Reality integrate with our existing training programs?</h3>
                <span className="xr-faq-icon">
                  <i className="icon-chevron-down"></i>
                </span>
              </summary>
              <div className="xr-faq-answer">
                <p>
                  Yes! Our mixed reality training solutions are designed to complement and enhance your current training ecosystem. We can integrate with your LMS, align with existing curricula, and provide analytics that feed into your broader learning and development metrics.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="vr-contact-form-section">
        <div className="vr-contact-form-container">
          <div className="vr-contact-form-image">
            <img src="/virtual-reality-training-contact.jpg" alt="Training Team" />
          </div>
          
          <div className="vr-contact-form-wrapper">
            <div className="vr-contact-form-content">
              <h2 className="vr-contact-form-title">Ready to Train Smarter, Not Harder?</h2>
              <p className="vr-contact-form-subtitle">
                Stop wasting time on training that doesn't stick. Our custom solutions deliver real results. 
                Let's create something that actually moves the needle.
              </p>
              
              <form className="vr-contact-form">
                <div className="vr-form-row">
                  <div className="vr-form-field">
                    <label htmlFor="firstname">First Name*</label>
                    <input 
                      type="text" 
                      id="firstname" 
                      name="firstname" 
                      required 
                      autoComplete="given-name"
                    />
                  </div>
                  
                  <div className="vr-form-field">
                    <label htmlFor="lastname">Last Name*</label>
                    <input 
                      type="text" 
                      id="lastname" 
                      name="lastname" 
                      required 
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                
                <div className="vr-form-row">
                  <div className="vr-form-field">
                    <label htmlFor="company">Company Name*</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      required 
                      autoComplete="organization"
                    />
                  </div>
                  
                  <div className="vr-form-field">
                    <label htmlFor="jobtitle">Job Title*</label>
                    <input 
                      type="text" 
                      id="jobtitle" 
                      name="jobtitle" 
                      required 
                      autoComplete="organization-title"
                    />
                  </div>
                </div>
                
                <div className="vr-form-row">
                  <div className="vr-form-field vr-form-field-full">
                    <label htmlFor="email">Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      autoComplete="email"
                    />
                  </div>
                </div>
                
                <div className="vr-form-progress">
                  <span className="vr-form-progress-text">1/2</span>
                  <div className="vr-form-progress-bar">
                    <div className="vr-form-progress-fill" style={{width: '50%'}}></div>
                  </div>
                </div>
                
                <div className="vr-form-submit">
                  <button type="submit" className="vr-form-submit-btn">Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MixedRealityTraining;
