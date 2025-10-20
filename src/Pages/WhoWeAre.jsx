import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import './WhoWeAre.css'

function WhoWeAre() {
  const swiperRef = useRef(null)
  const statsRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [animatedValues, setAnimatedValues] = useState([])

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    interests: [],
    message: '',
    hearAbout: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Thank you for your submission! We will contact you soon.')
  }

  const slides = [
    {
      id: 1,
      image: 'https://roundtablelearning.com/wp-content/uploads/2025/03/P1030752-Edit.jpg',
      alt: 'Roundtable Learning Team'
    },
    {
      id: 2,
      image: 'https://roundtablelearning.com/wp-content/uploads/2024/11/2024-Mercury-XRS_Ad_Final_Screenshot_03_03_02_Small-e1732291178416.jpg',
      alt: 'Mercury XRS Platform'
    },
    {
      id: 3,
      image: 'https://roundtablelearning.com/wp-content/uploads/2024/11/Roundtable-Learning-Team-3.jpg',
      alt: 'Roundtable Learning Team 3'
    },
    {
      id: 4,
      image: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Sales-Golf-outing-2025.jpg',
      alt: 'Sales Golf Outing 2025'
    },
    {
      id: 5,
      image: 'https://roundtablelearning.com/wp-content/uploads/2025/03/P1030458_Small.jpg',
      alt: 'Roundtable Learning Team 2'
    },
    {
      id: 6,
      image: 'https://roundtablelearning.com/wp-content/uploads/2024/07/Collecting-Data-from-your-VR-Training-Program-How-and-why-its-important_01.png',
      alt: 'VR Training Data Collection'
    },
    {
      id: 7,
      image: 'https://roundtablelearning.com/wp-content/uploads/2024/11/Roundtable-Learning-Team-1.jpg',
      alt: 'Roundtable Learning Team 1'
    },
    {
      id: 8,
      image: 'https://roundtablelearning.com/wp-content/uploads/2024/03/Roundtable-Learning-VR-1789.png',
      alt: 'Roundtable Learning VR Training'
    }
  ]

  const awards = [
    {
      id: 1,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/2025-Top20-Web-Medium_ELT-rb9yofs9knl0zw87zhpvb5s4mmb01c9tloeb0z85c0.png',
      alt: '2025 Top20 Web Medium_ELT'
    },
    {
      id: 2,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/TTC-Web-Med_ELT-qvcst7utny2k48l9iapkbi4fctoxpkgifw8duiosg0.png',
      alt: 'TTC Web Med_ELT'
    },
    {
      id: 3,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/2023-Top20-Web-Medium_experiential-learning-technologies-qvct1gvtnld610ltbv3o7f632l0x9x7owqdthygdts.png',
      alt: '2023 Top20 Web Medium_experiential learning technologies'
    },
    {
      id: 4,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/2022-Top20-Wordpress_Experiential-Learning-Technologies-1-qvr2qoo7856ngm6dxnpcoq0j8ubdue00tnlb0qdn28.png',
      alt: '2022-Top20-Wordpress_Experiential-Learning-Technologies-1'
    },
    {
      id: 5,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/BH-Award-Tech_Gold-2023-qvcsv88ea6tmy7o4rnzu5hux3hs769fudugrstph4w.png',
      alt: 'BH Award Tech_Gold 2023'
    },
    {
      id: 6,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/BH-Award-Tech_Silver-2023-qvcswovcwwtp0djo8aqy14kqd2kr5b8t92zyobjfgg.png',
      alt: 'BH Award Tech_Silver 2023'
    },
    {
      id: 7,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/BH-Award-Tech_Bronze-2023-qvcsy2osz4pw3pjb5ea67a05uhr7h9ql3xkp3zhkao.png',
      alt: 'BH Award Tech_Bronze 2023'
    },
    {
      id: 8,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Awards-Gold-Leadership-2022-01-01-qunfx62hsfnxezgfh4q374qwgmerolgjpy9y54jj7k.png',
      alt: 'Awards-Gold-Leadership-2022-01-01'
    },
    {
      id: 9,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Silver_Tech_Award_2022-1-qunfvw0ehjwvm3bby2tdaydbcqps7fdp7mb5mkftog.png',
      alt: 'Silver_Tech_Award_2022'
    },
    {
      id: 10,
      image: 'https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/BH-LD-Bronze-Award-2022-1-qujo3r1biuf54dlw8nj25yjbzxq6cct6tkybja4phc.webp',
      alt: 'BH-LD-Bronze-Award-2022-1'
    }
  ]

  const statistics = [
    {
      id: 1,
      icon: 'trophy',
      number: 30,
      label: 'Awards',
      color: '#009688'
    },
    {
      id: 2,
      icon: 'check',
      number: 300,
      label: 'Completed Projects',
      color: '#666666'
    },
    {
      id: 3,
      icon: 'brain',
      number: 5000000,
      label: 'Learners',
      color: '#009688'
    },
    {
      id: 4,
      icon: 'thumbs-up',
      number: 100,
      label: 'Happy Clients',
      color: '#2196F3'
    }
  ]

  // Counter animation when statistics grid comes into view
  useEffect(() => {
    if (!statsRef.current || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const targets = statistics.map((s) => s.number)
            const start = performance.now()
            const duration = 1600

            const tick = (now) => {
              const t = Math.min(1, (now - start) / duration)
              const current = targets.map((to) => Math.floor(to * t))
              setAnimatedValues(current)
              if (t < 1) requestAnimationFrame(tick)
              else setAnimatedValues(targets)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [hasAnimated, statistics])

  return (
    <div className="who-we-are-page">
      {/* Background Slideshow Section */}
      <section className="hero-slideshow-section">
        <div className="elementor-background-slideshow">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress"
            dir="rtl"
          >
            <div className="swiper-wrapper" id="swiper-wrapper-a86ad11cedc67d7c" aria-live="off">
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={slide.id}
                  className="elementor-background-slideshow__slide swiper-slide"
                  data-swiper-slide-index={index}
                  role="group"
                  aria-label={`${index + 1} / ${slides.length}`}
                >
                  <div 
                    className="elementor-background-slideshow__slide__image elementor-ken-burns elementor-ken-burns--active"
                    style={{
                      backgroundImage: `url("${slide.image}")`
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </Swiper>
        </div>

        {/* Content Overlay */}
        <div className="who-we-are-content">
          <div className="content-container">
            <div className="text-content">
              <h1 className="main-heading">
                <span className="small-text">We Are</span>
                <span className="large-text">The Future Of</span>
                <span className="large-text">Learning</span>
              </h1>
              <div className="description">
                <p>
                  As a full-service learning company, we apply our expertise to innovative technology, 
                  partnering with organizations to deliver transformative training programs that change 
                  the way people learn.
                </p>
                <p>
                  By blending expert instructional design with cutting-edge technology, we develop 
                  strategies that reflect your brand, address your training needs, and prepare your 
                  workforce to step confidently into their roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How are we different? Section */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-41ac49e1 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no" data-id="41ac49e1" data-element_type="section" data-settings='{"background_background":"classic"}'>
        <div className="elementor-container elementor-column-gap-thegem">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2fa98fab" data-id="2fa98fab" data-element_type="column" data-settings='{"thegem_inline_elements":"yes"}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-5ae5ed19 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no who-different" data-id="5ae5ed19" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-thegem">
                    <div className="elementor-row">
                      {/* Left Column - Text and Awards */}
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2b85e03c" data-id="2b85e03c" data-element_type="column" data-settings='{"thegem_inline_elements":"yes"}'>
                        <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
                          <div className="elementor-element elementor-element-6e14d18 flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-heading animated fadeInUp" data-id="6e14d18" data-element_type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="heading.default">
                            <div className="title-h1 elementor-heading-title elementor-size-default">How are we different?</div>
                          </div>
                          <div className="elementor-element elementor-element-25089af flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-text-editor" data-id="25089af" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-text-editor elementor-clearfix">
                              <p><strong>Everything we do is rooted in <em>learning.</em></strong> The latest technologies represent an exciting shift in the culture of corporate training. As partners to Fortune 500 companies, we deliver innovative solutions with a core foundation in learning.</p>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9382cd4 elementor-widget__width-initial flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-image-carousel e-widget-swiper awards-strip" data-id="9382cd4" data-element_type="widget" data-settings='{"slides_to_scroll":"3","navigation":"none","speed":1000,"autoplay":"yes","pause_on_hover":"yes","autoplay_speed":5000,"infinite":"yes"}' data-widget_type="image-carousel.default">
                            <div className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
                              <div className="elementor-image-carousel swiper-wrapper" aria-live="off" id="swiper-wrapper-046a22bad244c0510">
                                {awards.map((award, index) => (
                                  <div key={award.id} className="swiper-slide" role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${awards.length}`} data-swiper-slide-index={index}>
                                    <figure className="swiper-slide-inner">
                                      <img className="swiper-slide-image" src={award.image} alt={award.alt} />
                                    </figure>
                                  </div>
                                ))}
                              </div>
                              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Statistics */}
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-62c203" data-id="62c203" data-element_type="column" data-settings='{"thegem_inline_elements":"yes"}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-77f1c50 e-grid thegem-e-con-layout-thegem e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent" data-id="77f1c50" data-element_type="container" data-settings='{"thegem_container_layout":"thegem"}'>
                            <div className="e-con-inner">
                              <div className="statistics-grid" ref={statsRef}>
                                {statistics.map((stat, idx) => (
                                  <div key={stat.id} className="elementor-element elementor-element-c549c34 flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-thegem-counter" data-id="c549c34" data-element_type="widget" data-settings='{"thegem_elementor_preset":"counter-preset1","counter_animation_enabled":"yes"}' data-widget_type="thegem-counter.default">
                                    <div className="elementor-widget-container">
                                      <div className="counter-preset1">
                                        <div className="gem-counter-container">
                                          <div className="gem-counter-box">
                                            <div className="gem-counter">
                                              <div className="gem-counter-inner">
                                                <div className="gem-counter-icon">
                                                  <div className="gem-icon gem-icon-pack-material gem-icon-shape-circle lazy-loading-item lazy-loading-item-fading">
                                                    <div className="gem-icon-inner">
                                                      <div className="icon-hover-bg"></div>
                                                      <div className="wrapper-icon-inner">
                                                        {stat.icon === 'trophy' && (
                                                          <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="gem-svg-trophy">
                                                            <path d="M19 3h-2V2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a1 1 0 0 0-1 1v2a5 5 0 0 0 4 4.9V12a3 3 0 0 0-3 3v1h14v-1a3 3 0 0 0-3-3V10.9A5 5 0 0 0 20 6V4a1 1 0 0 0-1-1Zm-2 5a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V5h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5h2v3Z"/>
                                                          </svg>
                                                        )}
                                                        {stat.icon === 'check' && <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>}
                                                        {stat.icon === 'brain' && <svg aria-hidden="true" className="e-font-icon-svg e-fas-brain" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path></svg>}
                                                        {stat.icon === 'thumbs-up' && <svg aria-hidden="true" className="e-font-icon-svg e-fas-thumbs-up" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path></svg>}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="gem-counter-number">
                                                  <div className="gem-counter-odometer odometer odometer-auto-theme" data-to={stat.number}>
                                                    {(animatedValues[idx] ?? 0).toLocaleString()}
                                                  </div>
                                                </div>
                                                <div className="gem-counter-text styled-subtitle" style={{ color: stat.color }}>
                                                  {stat.label}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story + Leadership Section */}
      <section className="elementor-section elementor-top-section who-story-section" data-id="36a7028f" data-element_type="section">
        <div className="elementor-container elementor-column-gap-thegem">
          <div className="elementor-row">
            {/* Left column - Our Story timeline */}
            <div className="elementor-column elementor-col-50 elementor-top-column" data-id="4f70080" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-heading animated fadeInUp" data-id="b33d10c" data-widget_type="heading.default">
                  <div className="title-h2 elementor-heading-title elementor-size-xl">Our Story</div>
                </div>
                <div className="story-timeline">
                  <div className="story-item">
                    <div className="story-icon brain" aria-hidden="true"></div>
                    <div className="story-content">
                      <h4 className="quickfinder-title title-h4 bold">2015</h4>
                      <div className="quickfinder-description gem-text-output">
                        <h5><span style={{ color: '#004359' }}>Experts in Learning</span></h5>
                        <p>
                          Learning is central to our beginning. Roundtable Learning started as a Learning Design
                          company providing best-in-class LMS, eLearning, Instructor Led Training, and custom learning
                          content for businesses throughout the United States.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="story-item">
                    <div className="story-icon tools" aria-hidden="true"></div>
                    <div className="story-content">
                      <h4 className="quickfinder-title title-h4 bold">2019</h4>
                      <div className="quickfinder-description gem-text-output">
                        <h5><span style={{ color: '#004359' }}>Strictly Custom</span></h5>
                        <p>
                          We took on the challenge to give companies exactly what they want. Through thoughtful
                          collaboration, our team of experts delivered custom, award-winning learning solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="story-item">
                    <div className="story-icon bulb" aria-hidden="true"></div>
                    <div className="story-content">
                      <h4 className="quickfinder-title title-h4 bold">2020</h4>
                      <div className="quickfinder-description gem-text-output">
                        <h5><span style={{ color: '#004359' }}>The Future of Learning</span></h5>
                        <p>
                          We shifted gears and never looked back. By honing our expertise in learning & development, we
                          reimagined the future of corporate training and created our first VR & AR projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="story-item">
                    <div className="story-icon trophy" aria-hidden="true"></div>
                    <div className="story-content">
                      <h4 className="quickfinder-title title-h4 bold">2023</h4>
                      <div className="quickfinder-description gem-text-output">
                        <h5><span style={{ color: '#004359' }}>A leader in XR Training</span></h5>
                        <p>
                          With 70+ clients, 7 industry awards, and hundreds of projects in our portfolio, we continue
                          to honor our roots in learning as a leader in custom VR, AR, and eLearning content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right column - Leadership grid */}
            <div className="elementor-column elementor-col-50 elementor-top-column" data-id="58b3f26c" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-thegem-animated-heading">
                  <h3 className="thegem-heading thegem-animated-heading title-h5">Leadership</h3>
                </div>
                <div className="leadership-grid">
                  {[
                    { name: 'Dan Grajzl', title: 'President', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Dan-Grajzl_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
                    { name: 'Bob Baskette', title: 'Founder & CTO', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Bob-Baskette_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
                    { name: 'Nicholas Day', title: 'VP of Sales & Marketing', img: 'https://roundtablelearning.com/wp-content/uploads/2023/06/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
                    { name: 'Scott Stachiw', title: 'VP of XR Design & Development', img: 'https://roundtablelearning.com/wp-content/uploads/2023/09/Scott-Stachiw_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
                    { name: 'Rose Robertson', title: 'VP of Learning & Design', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Rose-Robertson_Roundtable-Learning-Headshot_Circle-Crop_03-thegem-person-160.png' },
                    { name: 'Hanna Liszniansky', title: 'Marketing Manager', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Hanna-Liszniansky_Roundtable-Learning-Headshot_Circle-Crop_09-thegem-person-160.png' },
                    { name: 'Vic Peroni', title: 'Business Consultant', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Vic-Peroni_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
                    { name: 'Melissa Lynch', title: 'Office Administrator', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Melissa-Lynch_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
                  ].map((person) => (
                    <div key={person.name} className="leader-card">
                      <img src={person.img} alt={person.name} className="leader-avatar" />
                      <div className="leader-info">
                        <div className="leader-name">{person.name}</div>
                        <div className="leader-title">{person.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="teams-section">
        <div className="elementor-container">
          {/* Team Leads */}
          <h2 className="team-heading">Team Leads</h2>
          <div className="team-grid team-grid-3">
            {[
              { name: 'Stephen Smole', title: 'Sales Team Lead', img: 'https://roundtablelearning.com/wp-content/uploads/2023/06/Stephen-Smole_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Jeff Suchan', title: 'Sales Team Lead', img: 'https://roundtablelearning.com/wp-content/uploads/2023/06/Jeffrey-Suchan_01_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Tammy Trudell', title: 'Project Manager', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Tammy-Trudell_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Sara Horoiwa', title: '3D Designer Team Lead', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Sara-Horoiwa_Roundtable-Learning-Headshot_Circle-Crop_02-thegem-person-160.png' },
              { name: 'Edwin Almaraz', title: 'XR Dev Team Lead', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Edwin-Almaraz_01_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Olivia Breger', title: 'Project Manager', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Olivia-Breger_Roundtable-Learning-Headshot_Circle-Crop_01-thegem-person-160.png' },
            ].map((p) => (
              <div key={p.name} className="leader-card">
                <img src={p.img} alt={p.name} className="leader-avatar" />
                <div className="leader-info">
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Team */}
          <h2 className="team-heading">Learning Team</h2>
          <div className="team-grid team-grid-4">
            {[
              { name: 'Maria Pappas', title: 'Senior Instructional Designer', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Maria-Pappas_Roundtable-Learning-Headshot_Circle-Crop_03-thegem-person-160.png' },
              { name: 'Sean Waters', title: 'Instructional Designer', img: 'https://roundtablelearning.com/wp-content/uploads/2023/09/Sean-Waters_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Kaitie Conrad', title: 'Instructional Designer', img: 'https://roundtablelearning.com/wp-content/uploads/2024/07/Kaitie-Conrad_Roundtable-Learning-Headshot_Profile-Cropped-scaled-thegem-person-160.jpg' },
              { name: 'Lauren Jacobson', title: 'Instructional Designer', img: 'https://roundtablelearning.com/wp-content/uploads/2024/11/Lauren-Jacobson_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.jpg' },
            ].map((p) => (
              <div key={p.name} className="leader-card">
                <img src={p.img} alt={p.name} className="leader-avatar" />
                <div className="leader-info">
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* XR & Design Team */}
          <h2 className="team-heading">XR & Design Team</h2>
          <div className="team-grid team-grid-3">
            {[
              { name: 'Kaitlynn Dallas', title: '3D Designer', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Kaitlynn-Dallas_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Max Calhoun', title: 'Senior XR Developer', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Max-Calhoun_01_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Ryan Wagner', title: '3D Designer', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Ryan-Wagner_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'James Nunes', title: 'XR Developer II', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/James-Nunes_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Allie Wygonik', title: '3D Animator', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Allie-Wygonik_Roundtable-Learning-Headshot_Circle-Crop_02-thegem-person-160.png' },
              { name: 'Colin Garvey', title: 'XR Developer II', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Colin-Garvey_Roundtable-Learning-Headshot_Circle-Crop_02-thegem-person-160.png' },
            ].map((p) => (
              <div key={p.name} className="leader-card">
                <img src={p.img} alt={p.name} className="leader-avatar" />
                <div className="leader-info">
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Sales Team */}
          <h2 className="team-heading">Sales</h2>
          <div className="team-grid team-grid-3">
            {[
              { name: 'Vince Radisek', title: 'Account Executive', img: 'https://roundtablelearning.com/wp-content/uploads/2023/06/Vince-Radisek_01_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Samuel Forbes', title: 'Business Development Representative', img: 'https://roundtablelearning.com/wp-content/uploads/2023/05/Sam-Forbes_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'William Cunneen', title: 'Business Development Representative', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Bill-Cunneen_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Dominic Demarco', title: 'Account Executive', img: 'https://roundtablelearning.com/wp-content/uploads/2024/09/Dominic-DeMarco_Roundtable-Learning-Headshot_Profile-Cropped_Web-thegem-person-160.jpg' },
              { name: 'Paul Marotta', title: 'Business Development Representative', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Paul-Marotta_Roundtable-Learning-Headshot_Circle-Crop_06-thegem-person-160.png' },
              { name: 'Daniel Kelley', title: 'Account Executive', img: 'https://roundtablelearning.com/wp-content/uploads/2024/11/Daniel-Kelley_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.jpg' },
            ].map((p) => (
              <div key={p.name} className="leader-card">
                <img src={p.img} alt={p.name} className="leader-avatar" />
                <div className="leader-info">
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mercury XRS Team */}
          <h2 className="team-heading">Mercury XRS Team</h2>
          <div className="team-grid team-grid-3">
            {[
              { name: 'Ethan Voss', title: 'Software Developer', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Ethan-Voss_02_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.png' },
              { name: 'Bryan Liedke', title: 'Technical Support Specialist', img: 'https://roundtablelearning.com/wp-content/uploads/2023/08/Uncle-B-thegem-person-160.jpg' },
              { name: 'Kyle Ondecker', title: 'Software Developer', img: 'https://roundtablelearning.com/wp-content/uploads/2025/05/Kyle-Ondecker_Roundtable-Learning-Headshot_Profile-Cropped-thegem-person-160.jpg' },
            ].map((p) => (
              <div key={p.name} className="leader-card">
                <img src={p.img} alt={p.name} className="leader-avatar" />
                <div className="leader-info">
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Marketing Team */}
          <h2 className="team-heading">Marketing</h2>
          <div className="team-grid team-grid-3">
            {[
              { name: `Callahan O'Brien`, title: 'Video Marketing Specialist', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Callahan-OBrien_Roundtable-Learning-Headshot_Circle-Crop_02-thegem-person-160.png' },
              { name: 'Isaac Peterson', title: 'Content Strategist & Copywriter', img: 'https://roundtablelearning.com/wp-content/uploads/2024/11/Isaac-Peterson_Roundtable-Learning-Headshot_Profile-Cropped_02-thegem-person-160.jpg' },
              { name: 'Morgan Sebastian', title: 'Marketing Coordinator', img: 'https://roundtablelearning.com/wp-content/uploads/2025/06/Morgan-Sebastian_Roundtable-Learning-Headshot_Circle-Crop_02-thegem-person-160.png' },
            ].map((p) => (
              <div key={p.name} className="leader-card">
                <img src={p.img} alt={p.name} className="leader-avatar" />
                <div className="leader-info">
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Demo Section */}
      <section className="book-demo-section">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-96c3360 e-con-full thegem-e-con-layout-thegem e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-child" data-id="96c3360" data-element_type="container" data-settings='{"thegem_container_layout":"thegem"}'>
            <div className="elementor-element elementor-element-e145733 flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-text-editor" data-id="e145733" data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-text-editor elementor-clearfix">
                <div className="title-h1"><span className="light">BOOK YOUR </span>DEMO</div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c893677 elementor-widget__width-initial flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-text-editor" data-id="c893677" data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-text-editor elementor-clearfix">
                <p className="styled-subtitle">Whether you want to meet in-person or virtually, our team will show you how immersive learning will transform the way you train your employees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="elementor-section elementor-inner-section elementor-element elementor-element-2ee6e00 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no contact-form-section" data-id="2ee6e00" data-element_type="section" data-settings='{"background_background":"classic"}'>
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7313812" data-id="7313812" data-element_type="column" data-settings='{"thegem_inline_elements":"yes"}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-09989aa flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-html" data-id="09989aa" data-element_type="widget" data-widget_type="html.default">
                  <div className="custom-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                      {/* Row 1: First Name and Last Name */}
                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="firstName">First name<span className="required">*</span></label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="lastName">Last name<span className="required">*</span></label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 2: Email and Job Title */}
                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="email">Email<span className="required">*</span></label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="jobTitle">Job title<span className="required">*</span></label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 3: Company Name (full width) */}
                      <div className="form-row">
                        <div className="form-field full-width">
                          <label htmlFor="company">Company name<span className="required">*</span></label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 4: Interests and Message */}
                      <div className="form-row">
                        <div className="form-field">
                          <label>I am interested in utilizing<span className="required">*</span></label>
                          <div className="checkbox-group">
                            {[
                              'Virtual Reality',
                              'Augmented Reality', 
                              'XR Analytics & Reporting',
                              'eLearning',
                              'Video Learning',
                              'Instructor Led Training'
                            ].map((interest) => (
                              <label key={interest} className="checkbox-label">
                                <input
                                  type="checkbox"
                                  name="interests"
                                  value={interest}
                                  checked={formData.interests.includes(interest)}
                                  onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                {interest}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="form-field">
                          <label htmlFor="message">Tell Us About Your Project</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="6"
                          />
                        </div>
                      </div>

                      {/* Row 5: How did you hear about us */}
                      <div className="form-row">
                        <div className="form-field full-width">
                          <label htmlFor="hearAbout">How did you hear about us?<span className="required">*</span></label>
                          <select
                            id="hearAbout"
                            name="hearAbout"
                            value={formData.hearAbout}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Please Select</option>
                            <option value="google">Google Search</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="referral">Referral</option>
                            <option value="event">Event/Conference</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="form-submit">
                        <button type="submit" className="submit-btn">
                          Book Your Demo!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0e5fa4e" data-id="0e5fa4e" data-element_type="column" data-settings='{"thegem_inline_elements":"yes"}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-15bdf62 flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-image" data-id="15bdf62" data-element_type="widget" data-widget_type="image.default">
                  <picture>
                    <source data-lazy-srcSet="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg.webp 150w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-300x300.jpg.webp 300w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-1024x1024.jpg.webp 1024w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-768x768.jpg.webp 768w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-256x256.jpg.webp 256w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1.jpg.webp 1500w" sizes="(max-width: 150px) 100vw, 150px" type="image/webp" srcSet="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg.webp 150w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-300x300.jpg.webp 300w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-1024x1024.jpg.webp 1024w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-768x768.jpg.webp 768w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-256x256.jpg.webp 256w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1.jpg.webp 1500w" />
                    <img width="150" height="150" src="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-42519 webpexpress-processed entered lazyloaded" alt="" data-lazy-srcSet="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg 150w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-300x300.jpg 300w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-1024x1024.jpg 1024w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-768x768.jpg 768w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-256x256.jpg 256w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1.jpg 1500w" data-lazy-sizes="(max-width: 150px) 100vw, 150px" data-lazy-src="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg" data-ll-status="loaded" sizes="(max-width: 150px) 100vw, 150px" srcSet="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg 150w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-300x300.jpg 300w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-1024x1024.jpg 1024w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-768x768.jpg 768w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-256x256.jpg 256w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1.jpg 1500w" />
                    <noscript>
                      <img width="150" height="150" src="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-42519 webpexpress-processed" alt="" srcSet="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg 150w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-300x300.jpg 300w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-1024x1024.jpg 1024w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-768x768.jpg 768w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-256x256.jpg 256w, https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1.jpg 1500w" sizes="(max-width: 150px) 100vw, 150px" />
                    </noscript>
                  </picture>
                </div>
                <div className="elementor-element elementor-element-124fe61 flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-heading" data-id="124fe61" data-element_type="widget" data-widget_type="heading.default">
                  <div className="title-h4 elementor-heading-title elementor-size-default">Nick Day</div>
                </div>
                <div className="elementor-element elementor-element-92a66f2 flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-text-editor" data-id="92a66f2" data-element_type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-text-editor elementor-clearfix">
                    <div className="small-body">VP of Sales & Marketing</div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-14251b2 elementor-shape-circle elementor-grid-0 e-grid-align-center flex-horizontal-align-default flex-horizontal-align-tablet-default flex-horizontal-align-mobile-default flex-vertical-align-default flex-vertical-align-tablet-default flex-vertical-align-mobile-default elementor-widget elementor-widget-social-icons" data-id="14251b2" data-element_type="widget" data-widget_type="social-icons.default">
                  <div className="elementor-social-icons-wrapper elementor-grid">
                    <span className="elementor-grid-item">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-2854f4d" href="https://www.linkedin.com/in/nicholasjday/" target="_blank" rel="noopener noreferrer">
                        <span className="elementor-screen-only">Linkedin</span>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre
