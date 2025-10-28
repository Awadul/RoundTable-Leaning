import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import './BlogDetail.css'
import blogsData from '../data/blogs.json'

function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // Get the current page from the referrer URL
  const getCurrentPageFromReferrer = () => {
    if (location.state?.currentPage) {
      return location.state.currentPage
    }
    // Try to get from document.referrer if available
    if (typeof document !== 'undefined' && document.referrer) {
      const url = new URL(document.referrer)
      const pageParam = url.searchParams.get('page')
      return pageParam ? parseInt(pageParam, 10) : 1
    }
    return 1
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Find the blog post by slug
    const foundBlog = blogsData.find(b => b.slug === slug)
    
    if (foundBlog) {
      setBlog(foundBlog)
      setLikes(foundBlog.likes)
      
      // Get related blog posts
      const related = blogsData.filter(b => 
        foundBlog.relatedPosts.includes(b.id) && b.id !== foundBlog.id
      ).slice(0, 5)
      setRelatedBlogs(related)
      
      // Check if user has already liked this post
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]')
      setHasLiked(likedPosts.includes(foundBlog.id))
    }
    
    setLoading(false)
  }, [slug])

  const handleLike = () => {
    if (!hasLiked && blog) {
      setLikes(likes + 1)
      setHasLiked(true)
      
      // Save to localStorage
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]')
      likedPosts.push(blog.id)
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts))
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="spinner"></div>
        <p>Loading blog post...</p>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h1>Blog Post Not Found</h1>
        <button onClick={() => navigate(`/blog${getCurrentPageFromReferrer() > 1 ? `?page=${getCurrentPageFromReferrer()}` : ''}`)} className="back-to-blog-btn">
          Back to Blog
        </button>
      </div>
    )
  }

  return (
    <div className="blog-detail-page">
      {/* Hero Section with Background Image and Overlay */}
      <section className="blog-hero-section">
        <div className="blog-hero-background">
          <img src={blog.heroImages[0]} alt={blog.title} />
        </div>
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <div className="thegem-te-post-title">
              <h1 className="post-title title-xlarge">
                <span>{blog.title}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Overlapping Card */}
      <section className="blog-intro-section">
        <div className="blog-intro-wrapper">
          {/* Left Column - Blog Meta & Description */}
          <div className="blog-intro-left">
            <div className="blog-meta-info">
              <div className="meta-item author">
                <span className="label">by</span>
                <span className="value">{blog.author.name}</span>
              </div>
              <div className="meta-item date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="value">{formatDate(blog.date)}</span>
              </div>
              <div className="meta-item time">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="value">{blog.time}</span>
              </div>
              <div className="meta-item read-time">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span className="value">{blog.readTime}</span>
              </div>
            </div>
            <div className="blog-intro-text">
              <p>{blog.excerpt}</p>
            </div>
            <div className="blog-meta-actions">
              <button 
                className={`like-btn ${hasLiked ? 'liked' : ''}`}
                onClick={handleLike}
                disabled={hasLiked}
                title={hasLiked ? 'Already liked' : 'Like this post'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={hasLiked ? 'currentColor' : 'none'} stroke="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span className="value">{likes}</span>
                <span className="label">Likes</span>
              </button>
              <div className="meta-item comments">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="value">{blog.comments}</span>
                <span className="label">Comments</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="blog-intro-right">
            <div className="blog-quick-actions">
              <h5 className="quick-actions-title">Quick Actions</h5>
              <button 
                onClick={() => navigate(`/blog${getCurrentPageFromReferrer() > 1 ? `?page=${getCurrentPageFromReferrer()}` : ''}`)} 
                className="back-to-blog-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Blog
              </button>
              <div className="share-actions">
                <span className="share-label">Share:</span>
                <div className="social-buttons-compact">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="social-btn-compact facebook" title="Share on Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`} target="_blank" rel="noopener noreferrer" className="social-btn-compact twitter" title="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title}`} target="_blank" rel="noopener noreferrer" className="social-btn-compact linkedin" title="Share on LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={`https://reddit.com/submit?url=${window.location.href}&title=${blog.title}`} target="_blank" rel="noopener noreferrer" className="social-btn-compact reddit" title="Share on Reddit">
                    <i className="fab fa-reddit-alien"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="blog-content-section">
        <div className="elementor-container">
          <div className="elementor-row">
            {/* Left Column - Main Content (50%) */}
            <div className="elementor-column elementor-col-50 main-content-column">
              {/* Breadcrumbs */}
              <nav className="breadcrumbs">
                <Link to="/">Home</Link>
                <span className="separator"> / </span>
                <Link to="/blog">{blog.category}</Link>
                <span className="separator"> / </span>
                <span className="current">{blog.title}</span>
              </nav>

              {/* Article Content */}
              <article className="blog-article">
                <div className="elementor-text-editor elementor-clearfix">
                  <p>{blog.content.introduction}</p>

                  {/* Main Sections */}
                  {blog.content.sections.map((section, index) => (
                    <div key={index}>
                      <h2>{section.heading}</h2>
                      <p>{section.content}</p>
                      
                      {/* Section-level video embed */}
                      {section.videoEmbed && (
                        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: '1.5rem 0'}}>
                          <iframe 
                            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                            src={section.videoEmbed.includes('http') ? section.videoEmbed : `https://www.youtube.com/embed/${section.videoEmbed}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={section.heading}
                          />
                        </div>
                      )}
                      
                      {section.list && (
                        <>
                          <ul>
                            {section.list.map((item, i) => (
                              <li key={i} aria-level="1"><b>{item.split(':')[0]}:</b> {item.split(':').slice(1).join(':') || item}</li>
                            ))}
                          </ul>
                          {section.additionalContent && <p>{section.additionalContent}</p>}
                        </>
                      )}

                      {section.subsections && section.subsections.map((subsection, i) => (
                        <div key={i}>
                          <h3>{subsection.subheading}</h3>
                          <p>{subsection.content}</p>
                          {subsection.videoEmbed && (
                            <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: '1.5rem 0'}}>
                              <iframe 
                                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                                src={subsection.videoEmbed.includes('http') ? subsection.videoEmbed : `https://www.youtube.com/embed/${subsection.videoEmbed}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={subsection.subheading}
                              />
                            </div>
                          )}
                          {subsection.list && (
                            <>
                              <ul>
                                {subsection.list.map((item, idx) => (
                                  <li key={idx} aria-level="1">{item}</li>
                                ))}
                              </ul>
                            </>
                          )}
                          {subsection.ctaImage && (
                            <a href={blog.ctaLink}>
                              <img src={subsection.ctaImage} alt={subsection.subheading} style={{maxWidth: '100%', height: 'auto', margin: '1rem 0'}} />
                            </a>
                          )}
                        </div>
                      ))}

                      {section.comparisonTable && (
                        <div style={{overflowX: 'auto', margin: '2rem 0'}}>
                          <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
                            <thead>
                              <tr style={{backgroundColor: '#f8f9fa'}}>
                                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'left', fontWeight: '700'}}>Feature</th>
                                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'left', fontWeight: '700'}}>Custom VR Training</th>
                                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'left', fontWeight: '700'}}>Off-the-Shelf VR Training</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.comparisonTable.map((row, i) => (
                                <tr key={i} style={{backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa'}}>
                                  <td style={{padding: '12px', border: '1px solid #ddd', fontWeight: '600'}}>{row.feature}</td>
                                  <td style={{padding: '12px', border: '1px solid #ddd'}}>{row.custom}</td>
                                  <td style={{padding: '12px', border: '1px solid #ddd'}}>{row.offTheShelf}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {section.steps && section.steps.map((step, i) => (
                        <div key={i}>
                          <h3>{step.step}</h3>
                          <p>{step.description}</p>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Case Study */}
                  {blog.content.caseStudy && (
                    <>
                      <h2>{blog.content.caseStudy.title}</h2>
                      <p><b>They identified the root problem</b> by going beyond incident counts to investigate the "why." {blog.content.caseStudy.problem}</p>
                      <p><b>They defined clear learning goals</b> by uncovering a secondary issue: {blog.content.caseStudy.solution}</p>
                      <p><b>They ensured efficiency</b> by gathering data about the learners themselves. {blog.content.caseStudy.results}</p>
                    </>
                  )}

                  {/* Conclusion */}
                  {blog.content.conclusion && (
                    <>
                      <h2>Conclusion</h2>
                      <p>{blog.content.conclusion}</p>
                    </>
                  )}

                  {/* CTA */}
                  {blog.ctaImage && (
                    <a href={blog.ctaLink}>
                      <img src={blog.ctaImage} alt="Book a Demo" width="600" height="200" />
                    </a>
                  )}

                  {/* Tags */}
                  <p>
                    <strong>Tags:</strong>{' '}
                    {blog.tags.map((tag, index) => (
                      <span key={index}>
                        {index > 0 && ', '}
                        <span className="tag">{tag}</span>
                      </span>
                    ))}
                  </p>
                </div>
              </article>              {/* Social Sharing */}
              <div className="social-sharing">
                <div className="socials-sharing">
                  <ul>
                    <li>
                      <a className="socials-item facebook" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} title="Share on Facebook">
                        <i className="fab fa-facebook-f socials-item-icon"></i>
                      </a>
                    </li>
                    <li>
                      <a className="socials-item twitter" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`} title="Share on Twitter">
                        <i className="fab fa-twitter socials-item-icon"></i>
                      </a>
                    </li>
                    <li>
                      <a className="socials-item linkedin" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title}`} title="Share on LinkedIn">
                        <i className="fab fa-linkedin-in socials-item-icon"></i>
                      </a>
                    </li>
                    <li>
                      <a className="socials-item reddit" target="_blank" rel="noopener noreferrer" href={`https://reddit.com/submit?url=${window.location.href}&title=${blog.title}`} title="Share on Reddit">
                        <i className="fab fa-reddit-alien socials-item-icon"></i>
                      </a>
                    </li>
                    <li>
                      <a className="socials-item threads" target="_blank" rel="noopener noreferrer" href={`https://www.threads.net/intent/post?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}`} title="Share on Threads">
                        <i className="fab fa-threads socials-item-icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Post Navigation */}
              {blog.id > 1 && (
                <div className="post-navigation">
                  <Link to={`/blog/${blogsData.find(b => b.id === blog.id - 1)?.slug}`} className="nav-link prev">
                    <i className="meta-icon"></i>
                    <span className="meta-nav">
                      <span className="post-title">
                        <span className="title-text-body">
                          {blogsData.find(b => b.id === blog.id - 1)?.title}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Sidebar - Sticky (50%) */}
            <aside className="elementor-column elementor-col-50 sidebar-column thegem-column-sticky">
              {/* Search */}
              <div className="sidebar-widget search-widget">
                <form className="gem-search-form" role="search">
                  <input 
                    type="search" 
                    className="search-field" 
                    placeholder="Search..." 
                  />
                  <button className="search-submit" type="submit">
                    <span className="search-submit-icon">
                      <svg aria-hidden="true" className="search-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>

              {/* Author Info */}
              <div className="sidebar-widget author-widget">
                <h5 className="title-h5">Written By</h5>
                <div className="post-author">
                  <div className="post-author__avatar">
                    <img src={blog.author.avatar} alt={blog.author.name} width="75" height="75" />
                  </div>
                  <div className="post-author__info">
                    <div className="post-author__name">
                      <span>{blog.author.name}</span>
                    </div>
                    <div className="post-author__desc">
                      <p className="title-text-body-tiny">{blog.author.bio}</p>
                    </div>
                    <div className="post-author__link">
                      <a href="#">More posts by {blog.author.name}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedBlogs.length > 0 && (
                <div className="sidebar-widget related-posts-widget">
                  <h5 className="title-h5">Most Popular Posts</h5>
                  <div className="bloglist">
                    {relatedBlogs.map((relatedBlog) => (
                      <article key={relatedBlog.id} className="post-item with-separator">
                        <div className="gem-compact-tiny-left">
                          <div className="gem-news-item-image">
                            <Link to={`/blog/${relatedBlog.slug}`}>
                              <img src={relatedBlog.featuredImage} alt={relatedBlog.title} width="144" height="144" />
                            </Link>
                          </div>
                        </div>
                        <div className="gem-compact-tiny-right">
                          <div className="gem-compact-item-content">
                            <div className="tiny-post-title gem-news-item-title text-body-tiny">
                              <Link className="reverse-link-color" to={`/blog/${relatedBlog.slug}`}>
                                {relatedBlog.title}
                              </Link>
                            </div>
                          </div>
                          <div className="post-meta">
                            <div className="entry-meta text-body-tiny">
                              <div className="post-meta-left gem-news-item-date">
                                <span className="post-meta-date tiny-post-date">{formatDate(relatedBlog.date)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Free eBook */}
              <div className="sidebar-widget ebook-widget">
                <h5 className="title-h5">Download Our Free ebook</h5>
                <div className="styled-image-wrapper">
                  <a href="https://roundtablelearning.com/7-step-guide-to-creating-your-first-vr-training-program/">
                    <img 
                      src="https://roundtablelearning.com/wp-content/uploads/2023/05/Manufacturing-Guide-Graphic-3.png" 
                      alt="Free eBook" 
                      className="ebook-image"
                    />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

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

export default BlogDetail
