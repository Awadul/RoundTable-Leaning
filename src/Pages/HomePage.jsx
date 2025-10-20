import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

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
    let isPaused = false;
    let animationFrameId = null; // Move this to the top
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides ? slides.length : 0;
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const slider = document.querySelector('.testimonials-slider');

    const updateSlider = () => {
      if (slides && totalSlides > 0) {
        // Ensure currentSlide is within bounds
        if (currentSlide >= totalSlides) {
          currentSlide = 0;
        } else if (currentSlide < 0) {
          currentSlide = totalSlides - 1;
        }
        
        // Remove active class from all slides
        slides.forEach((slide, index) => {
          if (slide) {
            slide.classList.remove('active');
          }
        });
        
        // Add active class to current slide
        if (slides[currentSlide]) {
          slides[currentSlide].classList.add('active');
        }
        
        console.log(`Testimonial: currentSlide=${currentSlide}, totalSlides=${totalSlides}`);
      }
    };

    const nextSlide = () => {
      if (totalSlides > 0) {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      }
    };

    const prevSlide = () => {
      if (totalSlides > 0) {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      }
    };

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
    }

    // Auto-slide function with pause support
    let autoSlideInterval;
    
    const startAutoSlide = () => {
      // Only start if we have slides and track
      if (totalSlides > 0 && track) {
        autoSlideInterval = setInterval(() => {
          if (!isPaused && totalSlides > 0) {
            nextSlide();
          }
        }, 8000);
      }
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };

    // Pause on hover
    if (slider) {
      slider.addEventListener('mouseenter', () => {
        isPaused = true;
      });
      
      slider.addEventListener('mouseleave', () => {
        isPaused = false;
      });
    }

    // Initialize the slider
    updateSlider();
    
    // Start auto-slide with a small delay to ensure DOM is ready
    setTimeout(() => {
      startAutoSlide();
    }, 1000);

    // Cleanup function
    return () => {
      if (prevBtn && nextBtn) {
        prevBtn.removeEventListener('click', prevSlide);
        nextBtn.removeEventListener('click', nextSlide);
      }
      if (slider) {
        slider.removeEventListener('mouseenter', () => {});
        slider.removeEventListener('mouseleave', () => {});
      }
      stopAutoSlide();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    // Timeline scroll effect
    const handleTimelineScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        const timelineFill = document.getElementById('timeline-fill');
        const timelineContainer = document.querySelector('.timeline-container');
        
        console.log('Timeline elements found:', {
          timelineFill: !!timelineFill,
          timelineContainer: !!timelineContainer
        });
        
        if (timelineFill && timelineContainer) {
          const containerRect = timelineContainer.getBoundingClientRect();
          const containerTop = containerRect.top;
          const containerHeight = containerRect.height;
          const windowHeight = window.innerHeight;
          const currentScroll = window.scrollY;
          
          // Debug logging
          console.log('Scroll debug:', {
            containerTop,
            containerHeight,
            windowHeight,
            currentScroll,
            containerBottom: containerTop + containerHeight
          });
          
          // Calculate progress based on scroll position through the timeline
          let scrollProgress = 0;
          
          // Get the timeline section for reference
          const timelineSection = document.querySelector('.journey-section');
          if (timelineSection) {
            const sectionRect = timelineSection.getBoundingClientRect();
            const sectionTop = sectionRect.top;
            const sectionHeight = sectionRect.height;
            
            // Start filling when section enters viewport (sectionTop <= windowHeight)
            // Finish filling when section completely leaves viewport (sectionTop + sectionHeight <= 0)
            const fillStart = sectionTop;
            const fillEnd = sectionTop + sectionHeight;
            
            if (fillStart <= windowHeight && fillEnd >= 0) {
              // Section is in viewport - calculate progress
              const scrolledPastStart = Math.max(0, windowHeight - fillStart);
              const totalFillDistance = fillEnd - fillStart;
              scrollProgress = Math.min(1, scrolledPastStart / totalFillDistance);
            } else if (fillEnd < 0) {
              // Section is completely above viewport - fully filled
              scrollProgress = 1;
            }
            
            console.log('Timeline section debug:', {
              sectionTop,
              sectionHeight,
              fillStart,
              fillEnd,
              scrolledPastStart: Math.max(0, windowHeight - fillStart),
              totalFillDistance: fillEnd - fillStart,
              scrollProgress
            });
          }
          
          const fillHeight = scrollProgress * containerHeight;
          
          console.log('Timeline fill calculation:', {
            scrollProgress,
            fillHeight,
            containerTop,
            containerHeight
          });
          
          // Update the fill height with smooth transition
          timelineFill.style.height = `${fillHeight}px`;
          timelineFill.style.backgroundColor = '#008080';
          
          // Force a repaint
          timelineFill.style.display = 'block';
        } else {
          console.log('Timeline elements not found!');
        }
      });
    };

    // Add scroll event listener for timeline
    window.addEventListener('scroll', handleTimelineScroll);
    handleTimelineScroll(); // Initial call

    return () => {
      if (prevBtn && nextBtn) {
        prevBtn.removeEventListener('click', prevSlide);
        nextBtn.removeEventListener('click', nextSlide);
      }
      clearInterval(autoSlide);
      window.removeEventListener('scroll', handleTimelineScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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
              <div className="hero-logo-slider" aria-label="Client Logos Carousel">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  loop={true}
                  speed={2000}
                  slidesPerView={'auto'}
                  spaceBetween={16}
                  allowTouchMove={false}
                >
                  {[
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Amazon-1-qvcrfvbuv2iccxlmhxgg5ei8fnp3yok8cwhrt2ldz4.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Walmart-qun3msazag2h1hdciddvxpn3ibmqdw8rxmbb1h7chs.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/BNSF-qun5n16el0yveiffn3ml2zbj7hjd0e2277fty4308w.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Kellanova-Logo-qun2uat2672n6wqxuk3wvef7ey1a445mcmkkglfv28.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Lincoln_Electric_logo-qvcsa0zg4psiujsnegqjnajmjp21x3a7i5zl3nvocg.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/COX-qun2rhaho37od0uebc87e41f9bxn0sylyo44mpmdq8.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Compass-Digital_Primary_Full-Color-qun2ta5crnogm486sm9go5o88x1yrx437l4mqsy7sw.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/AmerisourceBergen_logo-qvcs3xz1wbgppemrxc2h0bt84x1j3m4r01zga6wem8.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Avery_Dennison_Logo-qvcs4zklhow6lt45tsbjs2bnwbw7nia0h82vh9cnpc.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Burger-King-Logo-1994-qvcs68oulqly33amibtn3qxsetptwz94nfe6ijhreo.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Coca-Cola_logo.svg-qvcs78eptfyuc9uqpr9gqhxazgts1h6xgc6mr20su8.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/CSX-qvcs8n602hwbr7t0hd7bh54729vll4sfnbeunzxji8.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Georgia-Pacific_logo.svg-qvcs9359aoi78l5sw23z5j315tou7zjvdii3tp9ukg.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/manpowergroup-qvcsbesw6xopxvsabk9rtfz2148i91rzd0kbjbtt6o.png',
                    'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Air-Products-qvw0jbq3dp65lg7witzvqhn5r75dx33z752c8ctlvk.png',
                  ].map((src, idx) => (
                    <SwiperSlide key={idx} className="hero-logo-slide">
                      <figure className="hero-logo-figure">
                        <img src={src} alt="client logo" className="hero-logo-image" />
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
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
                <div className="testimonial-icon"><img src="/logo1.png" alt="Client logo 1" style={{width:'100%',height:'100%',objectFit:'contain'}} /></div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Cox Communications</div>
                  <p>"They have been such a great partner when it comes to working with our budget and project teams. Roundtable’s design team is able to come up with great quality programs that are as good, if not better, than any other ones I have seen in the industry. The values Roundtable has aligns with those at Cox."</p>
                </div>
              </div>
              
              <div className="testimonial-slide">
                <div className="testimonial-icon"><img src="/logo2.png" alt="Client logo 2" style={{width:'100%',height:'100%',objectFit:'contain'}} /></div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Trane Technologies</div>
                  <p>"We are receiving amazing feedback from all over the world and hearing that it is a great tool for existing employees as well as new ones."</p>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-icon"><img src="/logo3.png" alt="Client logo 3" style={{width:'100%',height:'100%',objectFit:'contain'}} /></div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Varian</div>
                  <p>"It has been very well received. Everyone loved the look and feel of the project and appreciated the advanced interactivity. Most importantly, it will replace a 2 hour instructor lead presentation, and has proven to provide better knowledge retention."</p>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-icon"><img src="/logo4.png" alt="Client logo 4" style={{width:'100%',height:'100%',objectFit:'contain'}} /></div>
                <div className="testimonial-content">
                  <div className="testimonial-company">Walmart</div>
                  <p>"Your teams are the best partners that we have in the virtual reality space. They are outstandingly reliable, undoubtedly top-talent, and have created the best content that we have ever seen."</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>

      {/* Portfolio Slider Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-slider">
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="https://roundtablelearning.com/wp-content/uploads/2025/08/AmerisourceBergin-Customer-Serivce-Empathy-eLearning-thegem-product-justified-square-s.jpg" alt="AmerisourceBergen's Customer Service eLearning" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-title">AmerisourceBergen's Customer Service eLearning: Customer Support Training for Empathy</div>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="https://roundtablelearning.com/wp-content/uploads/2025/04/Roundtable-Learning-Warehouse-VR-Training-thegem-product-justified-square-s.jpg" alt="VR Warehouse Training" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-title">VR Warehouse Training: Cutting Turnover While Saving Time & Money</div>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="https://roundtablelearning.com/wp-content/uploads/2025/02/Compass-Digital_Handwashing_B-Roll_4K_01-thegem-product-justified-square-s.jpg" alt="Custom VR Handwashing" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-title">Custom VR Handwashing with Advanced Hand Tracking</div>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="https://roundtablelearning.com/wp-content/uploads/2024/07/BNSFlead2-thegem-product-justified-square-s.png" alt="BNSF Train Engine Maintenance" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-title">BNSF Train Engine Maintenance VR Training with Haptic Gloves</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="portfolio-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training Content Section */}
      <section className="training-content-section">
        <div className="container">
          <div className="training-content-header">
            <h2>Corporate Training Content</h2>
            <p>Your one-stop shop for all things training. Any modality – any learner.</p>
          </div>
          
          <div className="training-tabs-container">
            <div className="training-tabs-nav">
              <button className="training-tab active" data-tab="elearning">
                ELEARNING
                <span className="tab-icon">→</span>
              </button>
              <button className="training-tab" data-tab="ilt">
                INSTRUCTOR-LED TRAINING
                <span className="tab-icon">→</span>
              </button>
              <button className="training-tab" data-tab="vilt">
                VIRTUAL INSTRUCTOR-LED TRAINING
                <span className="tab-icon">→</span>
              </button>
              <button className="training-tab" data-tab="vr">
                VIRTUAL REALITY TRAINING
                <span className="tab-icon">→</span>
              </button>
              <button className="training-tab" data-tab="ar">
                AUGMENTED REALITY TRAINING
                <span className="tab-icon">→</span>
              </button>
              <button className="training-tab" data-tab="mr">
                MIXED REALITY TRAINING
                <span className="tab-icon">→</span>
              </button>
              <button className="training-tab" data-tab="simulation">
                LEARNING SIMULATION
                <span className="tab-icon">→</span>
              </button>
            </div>
            
            <div className="training-content-panel">
              <div className="training-content-card">
                <div className="training-content-left">
                  <h3>eLearning</h3>
                  <p>Flexible, scalable, and engaging—eLearning delivers training anytime, anywhere. Empower your team with custom courses tailored to their needs, using Articulate 360.</p>
                  
                  <ul className="training-benefits">
                    <li>
                      <span className="check-icon">✓</span>
                      <span>25–60% higher employee retention</span>
                    </li>
                    <li>
                      <span className="check-icon">✓</span>
                      <span>40–60% less training time needed</span>
                    </li>
                    <li>
                      <span className="check-icon">✓</span>
                      <span>Boost productivity by 72%</span>
                    </li>
                  </ul>
                  
                  <button className="training-cta-btn">LEARN MORE</button>
                </div>
                <div className="training-content-right">
                  <div className="training-image">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="eLearning Training" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercury XRS Section */}
      <section className="mercury-section">
        <div className="container">
          <div className="mercury-header">
            <div className="mercury-logo">
              <img src="https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Copy-of-mercury-xrs_horizontal_w_tag-qun3gkle3vkiil2fyq0wpu0ebjhh4vk91lsnu3oirk.png" alt="Mercury XRS Logo" />
            </div>
            <div className="mercury-monitor">
              <img src="https://roundtablelearning.com/wp-content/uploads/2024/09/Mercury-Dashboard-2-1-1024x790.png" alt="Mercury Dashboard" />
            </div>
            <h2 className="mercury-title">Virtual Training's Most Advanced Data & Analytics Reporting Software</h2>
          </div>
          
          <div className="mercury-content">
            <div className="mercury-left">
              <div className="mercury-video">
                <iframe
                  src="https://www.youtube.com/embed/Ckn8iav17Ws?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1"
                  title="Mercury XRS | Rich Metrics For Your XR Training"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mercury-description">
                <p>
                  XR Training's first LMS allows you to see the true impact of training with measurable business outcomes and effortless ROI. Roundtable Learning's <strong style={{color: '#008080'}}>Mercury XRS</strong> empowers you to deliver a consistent, high-quality corporate training experience to your employees.
                </p>
              </div>
            </div>
            
            <div className="mercury-right">
              <div className="mercury-accordion">
                <div className="accordion-item active">
                  <div className="accordion-header">
                    <span className="accordion-title">Advanced Data Analytics</span>
                    <span className="accordion-icon">▼</span>
                  </div>
                  <div className="accordion-content">
                    <p>Track learner performance, measure effectiveness, and refine corporate training programs with data-driven insights.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span className="accordion-title">LMS Integration</span>
                    <span className="accordion-icon">▶</span>
                  </div>
                  <div className="accordion-content">
                    <p>Seamlessly connect with your existing LMS to streamline reporting and consolidate training metrics.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span className="accordion-title">Immersive Learning Integration</span>
                    <span className="accordion-icon">▶</span>
                  </div>
                  <div className="accordion-content">
                    <p>Centralize data from VR, AR, and MR training programs in one user-friendly platform.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span className="accordion-title">Flexibility and Scalability</span>
                    <span className="accordion-icon">▶</span>
                  </div>
                  <div className="accordion-content">
                    <p>Enjoy subscription-based pricing per headset, with unlimited users and scalable solutions for any organization.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span className="accordion-title">Customizable Solutions</span>
                    <span className="accordion-icon">▶</span>
                  </div>
                  <div className="accordion-content">
                    <p>Tailored to your unique training objectives, supported by our in-house experts.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span className="accordion-title">Enhanced Learning Outcomes</span>
                    <span className="accordion-icon">▶</span>
                  </div>
                  <div className="accordion-content">
                    <p>Focus on retention and real-world skill application to achieve meaningful training results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mercury-cta">
            <button className="mercury-btn">Start Collecting</button>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="journey-section">
        <div className="container">
          <h2 className="journey-title">Your Journey to Learning Excellence Starts Here</h2>
          
          <div className="timeline-wrapper">
            <div className="timeline-container">
              <div className="timeline-line">
                <div className="timeline-fill" id="timeline-fill"></div>
              </div>
              
              <div className="timeline-entries">
                <article className="timeline-entry left-aligned">
                  <div className="timeline-node">
                    <div className="timeline-circle">
                      <span className="timeline-icon">!</span>
                    </div>
                    <div className="timeline-step-label">Step 1</div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <h3 className="timeline-title">Identify Your Learning Pain Points</h3>
                      <p className="timeline-description">
                        We start by understanding your team's challenges. Together, we'll pinpoint the gaps and plan the best way forward.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="timeline-entry right-aligned">
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <h3 className="timeline-title">Collaborate with Instructional Design Experts</h3>
                      <p className="timeline-description">
                        Our Instructional Designers guide you every step of the way. We'll work with you to find the best learning approach—whether it's VR Training, eLearning, or something else entirely—so your program fits your goals perfectly.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-node">
                    <div className="timeline-circle">
                      <span className="timeline-icon">💡</span>
                    </div>
                    <div className="timeline-step-label">Step 2</div>
                  </div>
                </article>

                <article className="timeline-entry left-aligned">
                  <div className="timeline-node">
                    <div className="timeline-circle">
                      <span className="timeline-icon">⚙️</span>
                    </div>
                    <div className="timeline-step-label">Step 3</div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <h3 className="timeline-title">Onsite Observation & Custom Development</h3>
                      <p className="timeline-description">
                        Our developers create engaging content, and we visit your site to capture the details that make your training effective. With rounds of feedback, Q&A, and testing, we fine-tune everything all from our home office in Ohio.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="timeline-entry right-aligned">
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <h3 className="timeline-title">Seamless Rollout & Continuous Improvement</h3>
                      <p className="timeline-description">
                        After a successful pilot, we launch your Corporate Training Solution. Our Mercury XRS software tracks learner performance, allowing you to continuously improve.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-node">
                    <div className="timeline-circle">
                      <span className="timeline-icon">🧠</span>
                    </div>
                    <div className="timeline-step-label">Step 4</div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready To Start Learning?</h2>
            <h3 className="cta-subtitle">Book A Demo!</h3>
            <div className="cta-buttons">
              <button className="cta-btn cta-btn-primary">Get Started</button>
              <button className="cta-btn cta-btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="youtube-section">
        <div className="container">
          <div className="youtube-content">
            <div className="youtube-left">
              <div className="youtube-text">
                <h2 className="youtube-heading">Browse.</h2>
                <h2 className="youtube-heading">Learn.</h2>
                <h2 className="youtube-heading">Innovate.</h2>
                <p className="youtube-description">
                  Join us and explore learning excellence on the<br />
                  Training & Development Channel on YouTube and<br />
                  browsing our blog.
                </p>
                <a href="https://www.youtube.com/channel/UCk2RDjH_Hlb-1d1wwdfsiHg" target="_blank" rel="nofollow" className="youtube-btn">
                  <svg className="youtube-icon" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                  <span>Visit Us On YouTube</span>
                </a>
              </div>
            </div>
            <div className="youtube-right">
              <div className="youtube-main-video">
                <iframe
                  className="youtube-iframe"
                  src="https://www.youtube.com/embed/HcxSJ9IJiGg?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1"
                  title="Utilizing HaptX Gloves in VR Training | BNSF Mechanical GEVO Tier IV Training Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="youtube-thumbnails">
                <div className="youtube-thumbnail">
                  <div className="thumbnail-overlay">
                    <svg className="play-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>
                  </div>
                  <img src="https://roundtablelearning.com/wp-content/uploads/2025/01/Why-AR-VR-Projects-Fail_YouTube-Thumbnail.jpg" alt="Why AR & VR Projects Fail" />
                </div>
                <div className="youtube-thumbnail">
                  <div className="thumbnail-overlay">
                    <svg className="play-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>
                  </div>
                  <img src="https://roundtablelearning.com/wp-content/uploads/2025/01/VR-Demo_Georgia-Pacific_Bridge-Crane_YouTube-Thumbnail.jpg" alt="Virtual Reality Bridge Crane" />
                </div>
                <div className="youtube-thumbnail">
                  <div className="thumbnail-overlay">
                    <svg className="play-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>
                  </div>
                  <img src="https://roundtablelearning.com/wp-content/uploads/2025/01/Use-Case_Compass-Digital_Handwashing_YouTube-Thumbnail_02.jpg" alt="Wash Hands Better with VR!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h2 className="blog-title">Explore Our Blog for Helpful Training Tips</h2>
          
          <div className="blog-filters">
            <button className="blog-filter active" data-filter="all">SHOW ALL</button>
            <button className="blog-filter" data-filter="augmented-reality">AUGMENTED REALITY</button>
            <button className="blog-filter" data-filter="corporate-training">CORPORATE TRAINING</button>
            <button className="blog-filter" data-filter="elearning">ELEARNING</button>
            <button className="blog-filter" data-filter="virtual-reality">VIRTUAL REALITY</button>
            <button className="blog-filter" data-filter="xrs">XRS</button>
          </div>

          <div className="blog-grid">
            <article className="blog-post">
              <div className="blog-image">
                <img src="https://roundtablelearning.com/wp-content/uploads/2021/11/AdobeStock_1430326108-thegem-portfolio-metro.jpeg" alt="Training needs analysis framework" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="https://roundtablelearning.com/wp-content/uploads/2025/06/Hanna-Liszniansky_Roundtable-Learning-Headshot_Circle-Crop_07-150x150.png" alt="Hanna Liszniansky" className="author-avatar" />
                    <span className="author-name">By Hanna Liszniansky</span>
                  </div>
                  <span className="blog-date">October 8, 2025</span>
                </div>
                <h3 className="blog-post-title">
                  <a href="https://roundtablelearning.com/is-a-training-needs-analysis-really-worth-it-3-reasons-to-conduct-a-tna/">Is A Training Needs Analysis Really Worth It? 3 Reasons To Conduct A TNA</a>
                </h3>
              </div>
            </article>

            <article className="blog-post">
              <div className="blog-image">
                <img src="https://roundtablelearning.com/wp-content/uploads/2025/04/PIT-Trainer-XR_Frame-0361_Small-thegem-portfolio-metro.jpg" alt="Custom VR Training Solutions" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="https://roundtablelearning.com/wp-content/uploads/2025/06/Hanna-Liszniansky_Roundtable-Learning-Headshot_Circle-Crop_07-150x150.png" alt="Hanna Liszniansky" className="author-avatar" />
                    <span className="author-name">By Hanna Liszniansky</span>
                  </div>
                  <span className="blog-date">October 3, 2025</span>
                </div>
                <h3 className="blog-post-title">
                  <a href="https://roundtablelearning.com/custom-vs-off-the-shelf-training-content-which-is-best-for-your-organization/">Custom VR Training vs Off-the-Shelf Solutions: Our Comparison</a>
                </h3>
              </div>
            </article>

            <article className="blog-post">
              <div className="blog-image">
                <img src="https://roundtablelearning.com/wp-content/uploads/2025/09/Screenshot-2025-08-27-at-10.42.27-AM-thegem-portfolio-metro.jpg" alt="What is Phygital Training" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="https://roundtablelearning.com/wp-content/uploads/2025/06/Hanna-Liszniansky_Roundtable-Learning-Headshot_Circle-Crop_07-150x150.png" alt="Hanna Liszniansky" className="author-avatar" />
                    <span className="author-name">By Hanna Liszniansky</span>
                  </div>
                  <span className="blog-date">September 19, 2025</span>
                </div>
                <h3 className="blog-post-title">
                  <a href="https://roundtablelearning.com/what-is-phygital/">What Is Phygital?</a>
                </h3>
              </div>
            </article>
          </div>

          <div className="blog-cta">
            <a href="https://roundtablelearning.com/resource-center/blog/" className="blog-read-more-btn">READ MORE</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-logo">
              <img src="/tips-4-trainers-5-1024x1024.gif" alt="Tips 4 Trainers Logo" />
            </div>
            <div className="newsletter-form">
              <h5 className="newsletter-title">Subscribe to our Newsletter</h5>
              <div className="newsletter-form-container">
                <form className="newsletter-form-element">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span className="required">*</span>
                    </label>
                    <div className="form-input-group">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your email address"
                        required 
                      />
                      <button type="submit" className="form-submit-btn">
                        Sign Me Up!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
