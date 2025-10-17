import { useEffect } from 'react'

function SolutionsCard({ title, description, imageAlt, imageSrc }) {
  return (
    <div className="solution-card">
      <div className="solution-card-media">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <h3 className="solution-card-title">{title}</h3>
      <p className="solution-card-desc">{description}</p>
    </div>
  )
}

function SolutionsGrid() {
  const cards = [
    {
      title: 'VR Training',
      description:
        'Empower employees with immersive learning experiences using Virtual Reality.',
      imageSrc: '/VR.png',
      imageAlt: 'VR headset',
    },
    {
      title: 'Instructional Design',
      description:
        'Deliver impactful instructor-led and eLearning courses for foundational learning.',
      imageSrc: '/instruction_design.png',
      imageAlt: 'Instructional design screen',
    },
    {
      title: 'XR Data & Analytics',
      description:
        'Unify and optimize your training programs with our advanced data and analytics platform.',
      imageSrc: '/XR.png',
      imageAlt: 'Analytics donut chart',
    },
    {
      title: 'AR Training',
      description:
        'Enhance reality with interactive features at your fingertips for seamless on-the-job training.',
      imageSrc: '/AR.png',
      imageAlt: 'AR glasses',
    },
  ]

  return (
    <div className="solutions-grid">
      {cards.map((card) => (
        <SolutionsCard key={card.title} {...card} />
      ))}
    </div>
  )
}

function HomePage() {
  useEffect(() => {
    let currentSlide = 0;
    const totalSlides = 3;
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    const updateSlider = () => {
      if (track) {
        const translateX = -currentSlide * (100 / totalSlides);
        track.style.transform = `translateX(${translateX}%)`;
      }
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    };

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
    }

    // Auto-slide every 5 seconds
    const autoSlide = setInterval(nextSlide, 5000);

    return () => {
      if (prevBtn && nextBtn) {
        prevBtn.removeEventListener('click', prevSlide);
        nextBtn.removeEventListener('click', nextSlide);
      }
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <>
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

      {/* Solutions Section */}
      <section className="solutions" id="solutions">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-copy">
              <h2>Custom Training Content</h2>
              <p className="solutions-subtitle">Achieving Your Goals, On Your Terms</p>
              <p className="solutions-body">
                Our solutions start with your learning objectives, not the latest trend. Whether it's XR,
                eLearning, or classroom learning, our in-house Instructional Designers determine the best fit for your
                corporate training needs, and our developers bring it to life.
              </p>
              <p className="solutions-body">
                And when it's done, it's yours. No strings attached. <strong>You own your training content</strong>,
                giving you full control to use it however you need. We're here to create impactful corporate training,
                not lock you into a product.
              </p>
              <a href="#solutions" className="btn btn-primary solutions-cta">Find Your Solution</a>
            </div>

            <SolutionsGrid />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-content">
            <div className="video-container">
              <div className="video-wrapper">
                <iframe
                  className="video-iframe"
                  src="https://www.youtube.com/embed/2iMhvFNm-hY?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1"
                  title="VR Training for Powered Industrial Trucks | PIT Trainer XR Forklift Experience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="video-text">
              <div className="pit-logo">
                <img src="/PIT-Trainer-XR.png" alt="PIT Trainer XR" className="pit-logo-image" />
              </div>
              <h2 className="video-title">VR Training for Power Industrial Trucks</h2>
              <p className="video-description">
                Built for today's fast-paced distribution centers, PIT Trainer XR teaches the fundamentals of forklift operations.
              </p>
              <a href="#learn-more" className="btn btn-primary video-cta">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="awards-grid">
            <img src="https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/2025-Top20-Web-Medium_ELT-rb9yofs9knlb86wd5j23kpp4tjj3oa9ewf581ghmgw.png.webp" alt="2025 Top20 Web Medium_ELT" className="award-badge" />
            <img src="https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/TTC-Web-Med_ELT-qvcst7utny2ucj9eoc1sl21fjqx1cig3qmzauzy9kw.png.webp" alt="TTC Web Med_ELT" className="award-badge" />
            <img src="https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/2023-Top20-Web-Medium_experiential-learning-technologies-qvct1gvtnldg9b9yhwfwgz339i90wv7a7h4qifpuyo.png.webp" alt="2023 Top20 Web Medium_experiential learning technologies" className="award-badge" />
            <img src="https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/2022-Top20-Wordpress_Experiential-Learning-Technologies-1-qvr2qoo7856xowuj3p1ky9xjfrjhhbzm4ec817n474.png.webp" alt="2022-Top20-WordPress_Experiential-Learning-Technologies-1" className="award-badge" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">Award Winning Corporate Training Solutions</h2>
          
          <div className="testimonials-slider">
            <div className="testimonials-track">
              <div className="testimonial-slide">
                <div className="testimonial-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 1-1 2-2 2s-1.008-.5-1-1c0-1 0-1 1-1 1.25 0 2-.75 2-2V6.972c0-1.25.75-2 2-2h4c1.25 0 2 .75 2 2v8c0 7-4 8-7 8s-7-1-7-8z"/>
                  </svg>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Trane Technologies</div>
                  <p>"We are receiving amazing feedback from all over the world and hearing that it is a great tool for existing employees as well as new ones."</p>
                </div>
              </div>
              
              <div className="testimonial-slide">
                <div className="testimonial-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 1-1 2-2 2s-1.008-.5-1-1c0-1 0-1 1-1 1.25 0 2-.75 2-2V6.972c0-1.25.75-2 2-2h4c1.25 0 2 .75 2 2v8c0 7-4 8-7 8s-7-1-7-8z"/>
                  </svg>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Varian</div>
                  <p>"It has been very well received. Everyone loved the look and feel of the project and appreciated the advanced interactivity. Most importantly, it will replace a 2 hour instructor lead presentation, and has proven to provide better knowledge retention."</p>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 1-1 2-2 2s-1.008-.5-1-1c0-1 0-1 1-1 1.25 0 2-.75 2-2V6.972c0-1.25.75-2 2-2h4c1.25 0 2 .75 2 2v8c0 7-4 8-7 8s-7-1-7-8z"/>
                  </svg>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Walmart</div>
                  <p>"Your teams are the best partners that we have in the virtual reality space. They are outstandingly reliable, undoubtedly top-talent, and have created the best content that we have ever seen."</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </>
  )
}

export default HomePage
