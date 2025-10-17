import { useEffect, useState } from 'react'
import './VirtualRealityTraining.css'

function VirtualRealityTraining() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index)
  }

  const faqs = [
    {
      question: "What is VR Training?",
      answer: "VR Training uses virtual reality technology to immerse learners in realistic, interactive training scenarios that enhance engagement and retention. It's a more effective alternative to traditional methods like classroom training or online courses."
    },
    {
      question: "How do I implement VR Training in my organization?",
      answer: "Roundtable Learning works with your team to assess your training needs, design a VR training solution, and integrate it into your existing systems. We handle all aspects, from content creation to deployment."
    },
    {
      question: "Is VR Training suitable for all industries?",
      answer: "Yes, you can tailor VR training to fit healthcare, manufacturing, retail, and corporate operations. We design experiences for the specific challenges of each sector."
    },
    {
      question: "Can I track learner performance in VR Training?",
      answer: "Yes, our Mercury XRS platform provides detailed analytics on learner performance, allowing you to measure progress, identify areas for improvement, and track the effectiveness of your training program."
    }
  ]

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

      {/* CTA Section */}
      <section className="vr-cta-section">
        <div className="vr-cta-container">
          <div className="vr-cta-inner">
            <div className="vr-cta-header">
              <h2 className="vr-cta-title">Let's Build Something That Sticks.</h2>
              <a 
                href="https://roundtablelearning.com/contact-us/" 
                className="vr-cta-button vr-cta-button-desktop"
              >
                <span className="vr-cta-button-text">SCHEDULE A CONSULTATION</span>
              </a>
            </div>
            <p className="vr-cta-description">
              If you're ready for VR training that actually works, let's talk. We'll help you create immersive, 
              custom VR solutions that make an impact from day one. No fluff, just results.
            </p>
            <a 
              href="https://roundtablelearning.com/contact-us/" 
              className="vr-cta-button vr-cta-button-mobile"
            >
              <span className="vr-cta-button-text">SCHEDULE A CONSULTATION</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="vr-testimonial-section">
        <div className="vr-testimonial-container">
          <div className="vr-testimonial-award">
            <img 
              src="/Roundtable-Learning-Top-20-Experiential-Learning-Companies.png" 
              alt="Top 20 Experiential Learning Companies" 
              className="vr-award-image"
            />
          </div>
          <h2 className="vr-testimonial-title">
            <span className="vr-testimonial-highlight">Trusted by Industry Leaders</span>
          </h2>
          <div className="vr-testimonial-content">
            <blockquote className="vr-testimonial-quote">
              "Roundtable helped us learn how to effectively build and leverage VR training. We were new to VR learning 
              and all of our research and studies still did not prepare us to fully understand how to best use VR for 
              learning as well as all of the technology, adoption, and management needed to support it. This is where 
              Roundtable made a difference in not only building the experience but in building our expertise."
            </blockquote>
            <div className="vr-testimonial-author">
              <div className="vr-author-image">
                <img 
                  src="/cox_logo.png" 
                  alt="Cox Logo" 
                  className="vr-author-logo"
                />
              </div>
              <div className="vr-author-details">
                <div className="vr-author-name">David McGrath</div>
                <div className="vr-author-title">Learning Technology Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Virtual Reality for Training Section */}
      <section className="vr-why-section">
        <div className="vr-why-container">
          <div className="vr-why-header">
            <h2 className="vr-why-title">Why Virtual Reality for Training?</h2>
            <p className="vr-why-description">
              Virtual Reality (VR) is changing the way companies train their employees. From safety procedures to technical skills, 
              VR gives your team hands-on practice in a risk-free, virtual environment. Here's how training with Virtual Reality can 
              benefit your organization:
            </p>
          </div>

          <div className="vr-why-grid">
            {/* Card 1 - Engage Learners */}
            <div className="vr-why-card">
              <h3 className="vr-why-card-title">Engage Learners with Immersive Experiences</h3>
              <p className="vr-why-card-text">
                Unlike traditional eLearning, VR training programs put learners in realistic situations. They use all their senses, 
                which helps them learn and apply better.
              </p>
              <div className="vr-why-card-image">
                <img 
                  src="/man-training-with-virtual-reality-1024x686.jpg" 
                  alt="Man training with virtual reality" 
                />
              </div>
            </div>

            {/* Card 2 - Knowledge Retention */}
            <div className="vr-why-card">
              <h3 className="vr-why-card-title">Improve Knowledge Retention</h3>
              <p className="vr-why-card-text">
                Studies show that learners remember up to 90% of information when they practice learning with Virtual Reality. 
                In contrast, they only remember 10% from reading and 20% from listening.
              </p>
              <div className="vr-why-card-image">
                <img 
                  src="/chart-showing-90-percent-vr-training-retention-1024x686.png" 
                  alt="Chart showing 90 percent VR training retention" 
                />
              </div>
            </div>
          </div>

          <div className="vr-why-grid">
            {/* Card 3 - Safety Training */}
            <div className="vr-why-card">
              <h3 className="vr-why-card-title">Enhance Safety Training</h3>
              <p className="vr-why-card-text">
                Training in VR for dangerous situations or emergency plans helps employees learn safely. This ensures they are 
                ready for real-life events.
              </p>
              <div className="vr-why-card-image">
                <img 
                  src="/man-holding-tablet-displaying-vr-training-software-1024x686.jpg" 
                  alt="Man holding tablet displaying VR training software" 
                />
              </div>
            </div>

            {/* Card 4 - Data Analytics */}
            <div className="vr-why-card vr-why-card-with-button">
              <h3 className="vr-why-card-title">Measure Success with Data Analytics</h3>
              <p className="vr-why-card-text">
                Mercury XRS platform tracks learner performance, giving you detailed insights to continuously improve training 
                and meet your goals.
              </p>
              <a href="https://roundtablelearning.com/mercuryxrs/" className="vr-why-button">
                Explore Mercury XRS
              </a>
              <div className="vr-why-card-image">
                <img 
                  src="/computer-screen-displaying-mercury-xrs-platform-1024x686.jpg" 
                  alt="Computer screen displaying Mercury XRS platform" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we Make VR Training Work for You Section */}
      <section className="vr-process-section">
        <div className="vr-process-container">
          <h2 className="vr-process-main-title">How we Make VR Training Work for You</h2>
          
          <div className="vr-process-steps">
            {/* Step 1 */}
            <div className="vr-process-step">
              <div className="vr-process-number">01</div>
              <h3 className="vr-process-title">Consultation and Needs Assessment</h3>
              <p className="vr-process-text">
                We start by working with your team. We want to understand your training goals, challenges, and desired results. 
                Together, we'll identify key learning objectives and determine how VR can help achieve them.
              </p>
            </div>

            {/* Step 2 */}
            <div className="vr-process-step">
              <div className="vr-process-number">02</div>
              <h3 className="vr-process-title">Expert Learning Design</h3>
              <p className="vr-process-text">
                Our Instructional Designers and XR Developers help you at every step. We make sure learning happens in every 
                interaction of your VR training solution. We also tailor it to fit your team's unique needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="vr-process-step">
              <div className="vr-process-number">03</div>
              <h3 className="vr-process-title">Onsite Observation & VR Training Development</h3>
              <p className="vr-process-text">
                We visit you to capture the important details that matter in learning a new process. Then our Developers bring 
                it to life in VR. With rounds of testing, feedback, and fine-tuning, all from our home office in Ohio.
              </p>
            </div>

            {/* Step 4 */}
            <div className="vr-process-step">
              <div className="vr-process-number">04</div>
              <h3 className="vr-process-title">Seamless Integration</h3>
              <p className="vr-process-text">
                Our VR training works well with your Learning Management Systems (LMS). This keeps your learning system running smoothly.
              </p>
            </div>

            {/* Step 5 */}
            <div className="vr-process-step">
              <div className="vr-process-number">05</div>
              <h3 className="vr-process-title">Data-Driven Insights</h3>
              <p className="vr-process-text">
                Once your program is up and running, Mercury XRS gathers real-time insights on learner performance. This helps you 
                measure impact, find trends, and improve future training programs for the best ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="vr-benefits-section">
        <div className="vr-benefits-container">
          <div className="vr-benefits-content">
            <h2 className="vr-benefits-title">Key Benefits of VR Learning</h2>
            
            <div className="vr-benefits-grid">
              {/* Left Column */}
              <div className="vr-benefits-column">
                {/* Benefit 1 */}
                <div className="vr-benefit-item">
                  <div className="vr-benefit-header">
                    <svg className="vr-benefit-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-benefit-name">Scalability</h4>
                  </div>
                  <p className="vr-benefit-text">
                    With VR, your training content can be scaled across multiple locations, giving you consistency across your 
                    workforce, regardless of location.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="vr-benefit-item">
                  <div className="vr-benefit-header">
                    <svg className="vr-benefit-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-benefit-name">Cost Efficiency</h4>
                  </div>
                  <p className="vr-benefit-text">
                    Save on travel costs, training materials, production downtime and equipment with immersive training experiences 
                    that you can tap into at any time.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="vr-benefit-item">
                  <div className="vr-benefit-header">
                    <svg className="vr-benefit-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-benefit-name">Time-Saving</h4>
                  </div>
                  <p className="vr-benefit-text">
                    VR allows for shorter, more focused training sessions with immediate feedback, speeding up the learning process.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="vr-benefit-item">
                  <div className="vr-benefit-header">
                    <svg className="vr-benefit-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-benefit-name">Safety & Compliance</h4>
                  </div>
                  <p className="vr-benefit-text">
                    Practice important and stressful situations that are too risky or hard to recreate at work. Confidence comes 
                    from experience.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="vr-benefits-image-wrapper">
                <img 
                  src="/goggles-for-virtual-reality-training-1024x833.jpg" 
                  alt="Goggles for virtual reality training" 
                  className="vr-benefits-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonial Section */}
      <section className="vr-testimonial-simple-section">
        <div className="vr-testimonial-simple-container">
          <div className="vr-testimonial-simple-content">
            <blockquote className="vr-testimonial-simple-quote">
              "It has been very well received. Everyone loved the look and feel of the project and appreciated the advanced 
              interactivity. Most importantly, it will replace a 2 hour instructor lead presentation, and has proven to provide 
              better knowledge retention."
            </blockquote>
            <div className="vr-testimonial-simple-meta">
              <div className="vr-testimonial-simple-image">
                <img 
                  src="/Variancover-1.jpg" 
                  alt="Varian Medical Systems" 
                />
              </div>
              <div className="vr-testimonial-simple-details">
                <div className="vr-testimonial-simple-job">Learning Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-The-Shelf VR Forklift Training Section */}
      <section className="vr-forklift-section">
        <div className="vr-forklift-container">
          <div className="vr-forklift-card">
            <div className="vr-forklift-content">
              <h2 className="vr-forklift-title">Off-The-Shelf VR Forklift Training</h2>
              <p className="vr-forklift-description">
                PIT Trainer XR is easy to use and designed for today's busy distribution centers. It teaches your team the 
                basics of forklift operations. Place your order today!
              </p>
              <a href="https://roundtablelearning.com/pit-trainer-xr/" className="vr-forklift-button">
                LEARN MORE
              </a>
            </div>
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
                  <img src="/Enterprise-Operations.png" alt="Enterprise Operations" />
                </div>
                <h3 className="vr-industry-name">Enterprise Operations</h3>
                <p className="vr-industry-description">
                  From onboarding to advanced skills training, VR helps employees start strong in the warehouse or the office.
                </p>
              </div>

              {/* Industry 2 - EHS */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/EHS.png" alt="Environmental Health and Safety" />
                </div>
                <h3 className="vr-industry-name">EHS (Environmental Health & Safety)</h3>
                <p className="vr-industry-description">
                  Train employees for emergenciesand handling hazardous materials. Use lifelike simulations to ensure safety 
                  without real-world risk.
                </p>
              </div>

              {/* Industry 3 - Manufacturing */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/manufacturing.png" alt="Manufacturing" />
                </div>
                <h3 className="vr-industry-name">Manufacturing</h3>
                <p className="vr-industry-description">
                  Build hands-on skills for the factory floor. Safely prep employees for tools, tech, and tough environments.
                </p>
              </div>

              {/* Industry 4 - Retail */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/retail.png" alt="Retail" />
                </div>
                <h3 className="vr-industry-name">Retail</h3>
                <p className="vr-industry-description">
                  Prepare staff with product knowledge, sales techniques, and customer service scenarios, driving performance 
                  and enhancing customer satisfaction.
                </p>
              </div>

              {/* Industry 5 - Logistics */}
              <div className="vr-industry-item">
                <div className="vr-industry-icon">
                  <img src="/logistics.png" alt="Logistics" />
                </div>
                <h3 className="vr-industry-name">Logistics</h3>
                <p className="vr-industry-description">
                  From train engine maintenance to chemical transportation, teach your team how to properly handle high-stakes tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Roundtable Learning Section */}
      <section className="vr-why-choose-section">
        <div className="vr-why-choose-container">
          <div className="vr-why-choose-grid">
            {/* Left Column - Image */}
            <div className="vr-why-choose-image-wrapper">
              <img 
                src="/controllers-for-virtual-reality-training-1-838x1024.jpg" 
                alt="Controllers for virtual reality training" 
                className="vr-why-choose-image"
              />
            </div>

            {/* Right Column - Content */}
            <div className="vr-why-choose-content">
              <h2 className="vr-why-choose-title">Why Choose Roundtable Learning?</h2>
              <p className="vr-why-choose-intro">
                At Roundtable Learning, we don't just offer VR Training solutions. We work with you to create a complete 
                learning strategy that matches your business goals. Here's what sets us apart:
              </p>

              <div className="vr-why-choose-features">
                {/* Feature 1 */}
                <div className="vr-why-choose-feature">
                  <div className="vr-why-choose-feature-header">
                    <svg className="vr-why-choose-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-why-choose-feature-title">Custom Training - Enterprise-Ready</h4>
                  </div>
                  <p className="vr-why-choose-feature-text">
                    Every VR training solution we create is designed for your goals, team, and workflows—just like we've done 
                    for over 50 Fortune 500 companies.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="vr-why-choose-feature">
                  <div className="vr-why-choose-feature-header">
                    <svg className="vr-why-choose-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-why-choose-feature-title">We've Got Your Back— No Strings Attached.</h4>
                  </div>
                  <p className="vr-why-choose-feature-text">
                    From headset logistics to remote rollouts, we help you launch at scale without the headache. No lock-in, 
                    just real support and the right partners to keep things moving
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="vr-why-choose-feature">
                  <div className="vr-why-choose-feature-header">
                    <svg className="vr-why-choose-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-why-choose-feature-title">Experts in Learning</h4>
                  </div>
                  <p className="vr-why-choose-feature-text">
                    We are a learning company. Every scenario, every choice, every interaction is designed to drive real impact. 
                    Because effective training isn't just immersive, it's intentional.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="vr-why-choose-feature">
                  <div className="vr-why-choose-feature-header">
                    <svg className="vr-why-choose-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <h4 className="vr-why-choose-feature-title">You Own Your Content</h4>
                  </div>
                  <p className="vr-why-choose-feature-text">
                    You own your training content, giving you full control to use it however you need. We're here to create 
                    impactful corporate training, not lock you into a contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="vr-faq-section">
        <div className="vr-faq-container">
          <h2 className="vr-faq-title">FAQ's</h2>
          
          <div className="vr-faq-accordion">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`vr-faq-item ${openFaqIndex === index ? 'active' : ''}`}
              >
                <button
                  className="vr-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <h3 className="vr-faq-question-text">{faq.question}</h3>
                  <span className="vr-faq-icon">
                    {openFaqIndex === index ? (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </button>
                
                <div className={`vr-faq-answer ${openFaqIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
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
    </div>
  )
}

export default VirtualRealityTraining
