import { useEffect } from 'react'
import './BlogPage.css'

function BlogPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-background">
          <img src="/keyboard.jpeg" alt="Keyboard background" />
        </div>
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <div className="thegem-te-post-title">
              <h1 className="post-title title-xlarge">
                <span>Blog</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="blog-intro-section">
        <div className="blog-intro-wrapper">
            {/* Left Column - Text Content */}
            <div className="blog-intro-left">
              <div className="blog-intro-heading">
                <h2 className="title-h2">Quick reads. Real insights. No buzzwords.</h2>
              </div>
              <div className="blog-intro-text">
                <p>This is where we share what we're learning in real time. Tips from our instructional designers and XR developers, trends we're seeing in VR and AR training, and honest takes on what works (and what doesn't) in corporate learning.</p>
                <p><em>If you're looking for grounded advice from people who live this work every day, you're in the right place.</em></p>
              </div>
            </div>

            {/* Right Column - Subscription Form */}
            <div className="blog-intro-right">
              <div className="blog-subscribe-heading">
                <h5 className="subscribe-title">Subscribe to Tips for Trainers!</h5>
              </div>
              <div className="blog-subscribe-form">
                <form className="subscribe-form">
                  <div className="form-field">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                  <button type="submit" className="subscribe-btn">Sign Me Up!</button>
                </form>
              </div>
            </div>
          </div>
      </section>

      {/* Background Section */}
      <div className="blog-content-section">
        <div className="container">
          <div className="blog-listing-wrapper">
            {/* Left Column - Blog Listings */}
            <div className="blog-list-column">
              <div className="blog-list">
                {/* Real blog posts from Elementor */}
                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2021/11/AdobeStock_1430326108-thegem-blog-compact.jpeg" alt="Training needs analysis framework" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">08 Oct: </span>
                            <span className="light">Is A Training Needs Analysis Really Worth It? 3 Reasons To Conduct A TNA</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>Your team is under performing. Safety incidents are climbing. Customer satisfaction scores are dropping. The knee-jerk reaction? "We need more…</p>
                      </div>
                      <div className="blog-post-meta">
                        <div className="blog-entry-meta">
                          <div className="blog-meta-left">
                            <span className="blog-meta-author">By Hanna Liszniansky</span>
                          </div>
                          <div className="blog-meta-right">
                            <span className="blog-meta-likes">
                              <a href="#" className="zilla-likes">
                                <i className="default"></i>
                                <span className="zilla-likes-count">0</span>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2025/04/PIT-Trainer-XR_Frame-0361_Small-thegem-blog-compact.jpg" alt="Choosing Between Custom and Off-the-Shelf VR Training Solutions" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">03 Oct: </span>
                            <span className="light">Custom VR Training vs Off-the-Shelf Solutions: Our Comparison</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>Virtual reality (VR) is transforming corporate training by offering immersive experiences that engage employees like never before. Organizations face a…</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">0</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2025/09/Screenshot-2025-08-27-at-10.42.27-AM-thegem-blog-compact.jpg" alt="What is Phygital Training?" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">19 Sep: </span>
                            <span className="light">What Is Phygital?</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>Stop separating training from work. That's the core problem with most corporate learning programs – they pull employees away from their…</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">0</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2024/06/The-Future-of-Immersive-Learning-Trends-Innovations--scaled-thegem-blog-compact.jpeg" alt="Car service manager uses virtual reality" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">17 Sep: </span>
                            <span className="light">The Future of Immersive Learning: Trends and Innovations in XR Training Solutions</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>When we talk about XR trends, we're covering the whole field of virtual reality, augmented reality and their hybrid called…</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">2</span>
                            </a>
                          </span>
                        </div>
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2025/09/What-is-Microlearning-Roundtable-Learning-thegem-blog-compact.jpeg" alt="man using mouse and keyboard for streaming" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">05 Sep: </span>
                            <span className="light">What Is Microlearning And Why Does It Matter? Examples And Best Practices</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>Microlearning is learning content, delivered in a small chunks to address a clearly-identified gap in knowledge, skills or attitudes (KSAs)….</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">0</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2023/11/5-Benefits-to-Microlearning-scaled-thegem-blog-compact.jpg" alt="5 Benefits to Microlearning" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">05 Sep: </span>
                            <span className="light">10 Benefits of Microlearning Based Training</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>What Is Microlearning? Microlearning benefits are many, but what is microlearning itself? There's no dictionary definition, but microlearning courses share…</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">0</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2023/07/photo-1574689049868-e94ed5301745-768x528-1-thegem-blog-compact.jpg" alt="Industrial warehouse training" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">11 Jul: </span>
                            <span className="light">3 Biggest Benefits of VR In Warehousing</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>Industrial VR Training for a Warehouse that Runs Smoothly What Are We Looking at Here? Modern warehousing relies on numerous…</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">0</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="blog-post-item">
                  <div className="blog-post-container">
                    <div className="blog-post-image">
                      <a href="#">
                        <img src="https://roundtablelearning.com/wp-content/uploads/2023/08/1_X1YtJ3WJxwFgUkYdonu3hA-thegem-blog-compact.png" alt="AR vs. VR Training" />
                      </a>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-title">
                        <h5 className="blog-entry-title">
                          <a href="#">
                            <span className="blog-entry-date">08 Jul: </span>
                            <span className="light">AR vs VR Training: How to Choose the Best Technology</span>
                          </a>
                        </h5>
                      </div>
                      <div className="blog-post-text">
                        <p>While Virtual Reality (VR) and Augmented Reality (AR) aren't the same, AR vs VR have a lot in common. They…</p>
                      </div>
                    </div>
                    <div className="blog-post-meta">
                      <div className="blog-entry-meta">
                        <div className="blog-meta-left">
                          <span className="blog-meta-author">By Hanna Liszniansky</span>
                        </div>
                        <div className="blog-meta-right">
                          <span className="blog-meta-likes">
                            <a href="#" className="zilla-likes">
                              <i className="default"></i>
                              <span className="zilla-likes-count">0</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Pagination */}
              <div className="blog-pagination">
                <div className="pagination-links">
                  <span className="page-numbers current">1</span>
                  <a href="#page-2" className="page-numbers">2</a>
                  <span className="page-numbers dots">…</span>
                  <a href="#page-35" className="page-numbers">35</a>
                  <a href="#page-2" className="next page-numbers">
                    <i className="default"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="blog-sidebar-column">
              <div className="blog-sidebar">
                {/* Search Bar */}
                <div className="sidebar-search">
                  <form className="search-form" method="get">
                    <input className="search-field" type="search" name="s" placeholder="Search..." />
                    <button className="search-submit" type="submit">
                      <span className="search-submit-icon">
                        <svg aria-hidden="true" className="search-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>

                {/* In the News Section */}
                <div className="sidebar-section">
                  <h5 className="sidebar-section-title">In the News</h5>
                  <div className="sidebar-news-list">
                    <article className="sidebar-news-item">
                      <div className="sidebar-news-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2025/07/Roundtable-Learning-corporate-training-solutions.jpg" alt="" />
                        </a>
                      </div>
                      <div className="sidebar-news-content">
                        <div className="sidebar-news-title">
                          <a href="#">Roundtable Learning Recognized as a Top Experiential Learning Technologies Company for 2023</a>
                        </div>
                        <div className="sidebar-news-date">December 7, 2023</div>
                      </div>
                    </article>

                    <article className="sidebar-news-item">
                      <div className="sidebar-news-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2024/04/00021566-1-thegem-news-carousel.jpg" alt="VR welding training" />
                        </a>
                      </div>
                      <div className="sidebar-news-content">
                        <div className="sidebar-news-title">
                          <a href="#">Roundtable Learning Spotlighted in Crain's for Collaboration with Lincoln Electric on VR Welding Training</a>
                        </div>
                        <div className="sidebar-news-date">April 10, 2024</div>
                      </div>
                    </article>

                    <article className="sidebar-news-item">
                      <div className="sidebar-news-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2023/08/Awards-Gold-Leadership-2022-01-01-thegem-news-carousel.png" alt="Awards Gold Leadership" />
                        </a>
                      </div>
                      <div className="sidebar-news-content">
                        <div className="sidebar-news-title">
                          <a href="#">Walmart & Roundtable Learning win Gold in Best Use of Virtual Worlds for Learning</a>
                        </div>
                        <div className="sidebar-news-date">August 18, 2023</div>
                      </div>
                    </article>

                    <article className="sidebar-news-item">
                      <div className="sidebar-news-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2024/03/rt-vrtraining-story-hero-thegem-news-carousel.jpg" alt="VR training story" />
                        </a>
                      </div>
                      <div className="sidebar-news-content">
                        <div className="sidebar-news-title">
                          <a href="#">Roundtable Learning's Collaboration with BNSF Railway Garners Recognition on Yahoo Finance and Business Wire</a>
                        </div>
                        <div className="sidebar-news-date">March 29, 2024</div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Free eBooks Section */}
                <div className="sidebar-section">
                  <h5 className="sidebar-section-title">Free eBooks</h5>
                  <div className="sidebar-ebooks-list">
                    <article className="sidebar-ebook-item">
                      <div className="sidebar-ebook-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2023/08/2-thegem-news-carousel.jpg" alt="Blended Learning Guide" />
                        </a>
                      </div>
                      <div className="sidebar-ebook-content">
                        <div className="sidebar-ebook-title">
                          <a href="#">6 Step Guide to Blended Learning</a>
                        </div>
                        <div className="sidebar-ebook-date">August 19, 2023</div>
                      </div>
                    </article>

                    <article className="sidebar-ebook-item">
                      <div className="sidebar-ebook-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2023/11/5-Things-to-Know-Feature-Image-thegem-news-carousel.png" alt="5 Things to Know Feature Image" />
                        </a>
                      </div>
                      <div className="sidebar-ebook-content">
                        <div className="sidebar-ebook-title">
                          <a href="#">5 Things to Know Before Starting Your First VR Program</a>
                        </div>
                        <div className="sidebar-ebook-date">November 3, 2023</div>
                      </div>
                    </article>

                    <article className="sidebar-ebook-item">
                      <div className="sidebar-ebook-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2023/08/3-Easy-Ways-to-Adopt-VR-Training-2-thegem-news-carousel.png" alt="3 Easy Ways to Adopt VR Training" />
                        </a>
                      </div>
                      <div className="sidebar-ebook-content">
                        <div className="sidebar-ebook-title">
                          <a href="#">3 Easy Ways to Adopt VR Training</a>
                        </div>
                        <div className="sidebar-ebook-date">August 2, 2023</div>
                      </div>
                    </article>

                    <article className="sidebar-ebook-item">
                      <div className="sidebar-ebook-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2023/09/Comprehensive-Guide-to-VRAR-Warehouse-Training-Feature-Image-thegem-news-carousel.png" alt="Comprehensive Guide to VRAR Warehouse Training" />
                        </a>
                      </div>
                      <div className="sidebar-ebook-content">
                        <div className="sidebar-ebook-title">
                          <a href="#">Comprehensive Guide to VR/AR Warehouse Training</a>
                        </div>
                        <div className="sidebar-ebook-date">September 1, 2023</div>
                      </div>
                    </article>

                    <article className="sidebar-ebook-item">
                      <div className="sidebar-ebook-image">
                        <a href="#">
                          <img src="https://roundtablelearning.com/wp-content/uploads/2023/08/6-thegem-news-carousel.jpg" alt="Modern Manufacturing Training" />
                        </a>
                      </div>
                      <div className="sidebar-ebook-content">
                        <div className="sidebar-ebook-title">
                          <a href="#">A Comprehensive Guide To Modern Manufacturing Training</a>
                        </div>
                        <div className="sidebar-ebook-date">May 31, 2023</div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="blog-newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper">
            {/* Left Column - Newsletter Icon and Title */}
            <div className="newsletter-left">
              <div className="newsletter-icon-wrapper">
                <div className="newsletter-icon">
                  <img src="https://roundtablelearning.com/wp-content/uploads/2023/05/blocks-image-235.png" alt="Newsletter" />
                </div>
              </div>
              <div className="newsletter-text-wrapper">
                <h3 className="newsletter-title-small">SUBSCRIBE TO OUR</h3>
                <div className="newsletter-title-large">
                  <h1 className="newsletter-main-title">NEWSLETTER</h1>
                </div>
              </div>
            </div>

            {/* Right Column - Newsletter Form */}
            <div className="newsletter-right">
              <div className="newsletter-form-container">
                {/* HubSpot Form placeholder */}
                <div className="newsletter-form">
                  <p>Get News and Resources Straight To Your Inbox!</p>
                  <form className="newsletter-form-element">
                    <div className="form-group">
                      <label htmlFor="newsletter-email" className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <div className="form-input-group">
                        <input 
                          type="email" 
                          id="newsletter-email" 
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
        </div>
      </section>
    </div>
  )
}

export default BlogPage

