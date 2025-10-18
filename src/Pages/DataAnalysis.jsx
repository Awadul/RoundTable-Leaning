import React, { useEffect } from 'react';
import './DataAnalysis.css';
import './DataAnalysis-analytics.css';

const DataAnalysis = () => {
  // Load HubSpot form once and render into target
  useEffect(() => {
    const scriptId = 'hs-forms-script';
    const renderForm = () => {
      if (window.hbspt?.forms?.create) {
        try {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '8192075',
            formId: 'fa5a51c4-2790-4f9f-9edf-91d54e405156',
            target: '#hs-demo-form',
          });
        } catch {}
      }
    };
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = 'https://js.hsforms.net/forms/embed/v2.js';
      s.async = true;
      s.onload = renderForm;
      document.body.appendChild(s);
    } else {
      renderForm();
    }
  }, []);

  return (
  <main className="data-analysis-page">
    <section className="data-analysis-hero">
      <div className="data-analysis-hero-inner">
        <div className="data-analysis-hero-left">
          <img
            src="https://roundtablelearning.com/wp-content/uploads/elementor/thumbs/Copy-of-mercury-xrs_horizontal_w_tag-qun3gkle3vksqvql4rd4zdxeigpkrtjuccjkukxzwg.png"
            alt="Mercury XRS Logo"
            className="data-analysis-logo"
            width="220"
            height="90"
            loading="lazy"
          />
          <h1 className="data-analysis-title">
            The Most Advanced Data & Analytics Reporting in XR Training
          </h1>
          <h2 className="data-analysis-subtitle">
            Say hello to XR training's first LMS. Measure ROI, track KPIs and optimize learner performance with real-time analytics and reporting.
          </h2>
          <a
            className="data-analysis-demo-btn"
            href="https://learn.roundtablelearning.com/mercury-xrs-book-a-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Demo
          </a>
        </div>
        <div className="data-analysis-hero-right">
          <div className="data-analysis-video-wrapper">
            <iframe
              className="data-analysis-video"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/Ckn8iav17Ws?controls=1&rel=0&playsinline=0"
              title="Mercury XRS | Rich Metrics For Your XR Training"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>


    {/* Analytics Section - Responsive Two Column Layout */}
    <section className="data-analysis-analytics-section">
      <div className="data-analysis-analytics-row">
        <div className="data-analysis-analytics-col-left">
          <h2 className="data-analysis-analytics-title">
            Scalable Virtual Reality Training Software - Powered by Breakthrough Analytics
          </h2>
          <p className="data-analysis-analytics-desc">
            Learn the true impact of your training with measurable business outcomes and effortless ROI. Roundtable Learning’s Mercury XRS empowers you to deliver a consistent, high-quality training experience to your employees.
          </p>
          <div className="data-analysis-dashboard-img-wrapper">
            <img
              src="https://roundtablelearning.com/wp-content/uploads/2024/09/Mercury-Dashboard-2-1.png"
              srcSet="https://roundtablelearning.com/wp-content/uploads/2024/09/Mercury-Dashboard-2-1.png.webp 1x, https://roundtablelearning.com/wp-content/uploads/2024/09/Mercury-Dashboard-2-1.png 2x"
              alt="Mercury Dashboard"
              className="data-analysis-dashboard-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="data-analysis-analytics-col-right">
          <div className="data-analysis-accordion">
            <details open>
              <summary>Boost ROI &amp; Learner Retention</summary>
              <div>
                <strong style={{ color: '#00997d' }}>Mercury XRS</strong> provides detailed data on learner performance, allowing you to track ROI, KPIs, and performance metrics with ease. Custom dashboards give you insights into user interactions, error rates, body ergonomics, and more—all in real time.
              </div>
            </details>
            <details>
              <summary>Scale Training Effortlessly</summary>
              <div>
                Deliver training to employees no matter where they are. <strong style={{ color: '#00997d' }}>Mercury XRS</strong> virtual reality training software can assign and track learning across devices. Wireless syncing ensures smooth updates and content delivery, saving time and reducing costs.
              </div>
            </details>
            <details>
              <summary>Save Time &amp; Money with Virtual Reality Training Software</summary>
              <div>
                <strong style={{ color: '#00997d' }}>Mercury XRS</strong> helps you track training outcomes and job performance to enable thorough cost-benefit analysis. Invest in what works and adjust your training to focus on the most impactful programs.
              </div>
            </details>
            <details>
              <summary>Refine Training, Maximize Learning Impact</summary>
              <div>
                Use <strong style={{ color: '#00997d' }}>Mercury</strong>’s analytics to pin down areas where learners struggle and adjust your VR training program. Improve learning outcomes by customizing training experiences based on performance and feedback.
              </div>
            </details>
            <details>
              <summary>Automate Progress Tracking</summary>
              <div>
                <strong style={{ color: '#00997d' }}>Mercury XRS</strong> is the ultimate virtual reality training software that tracks completion rates, time spent, assessment scores and other data points automatically. This tracking eliminates repetitive manual evaluations and potential errors. Get real-time updates on every learner’s progress without constant check-ins.
              </div>
            </details>
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

    {/* Features Split Section: Pie chart + copy on left, headings + image + copy on right */}
    <section className="data-analysis-feature-split">
      <div className="feature-split-container">
        <div className="feature-col-left">
          <div className="feature-media-wrapper">
            <img
              src="https://roundtablelearning.com/wp-content/uploads/2024/09/Pie-Chart_Third-Width@2x_Perspective_Left.png"
              srcSet="https://roundtablelearning.com/wp-content/uploads/2024/09/Pie-Chart_Third-Width@2x_Perspective_Left.png.webp 1x, https://roundtablelearning.com/wp-content/uploads/2024/09/Pie-Chart_Third-Width@2x_Perspective_Left.png 2x"
              alt="Login Counts Pie Chart"
              className="feature-img card-shadow rounded"
              loading="lazy"
            />
          </div>
          <h3 className="feature-heading">Watch Session Playbacks</h3>
          <p className="feature-copy">
            <strong style={{ color: '#00997d' }}>Mercury XRS</strong> allows you to watch playback sessions and spot the exact moments where things go wrong, whether it’s improper posture while lifting or a critical misstep. Pinpoint issues in real time, adjust your training, and give your learners the extra support they need to succeed.
          </p>
        </div>

        <div className="feature-col-right">
          <h3 className="feature-heading">Create Custom Dashboards</h3>
          <p className="feature-copy">
            With <strong style={{ color: '#00997d' }}>Mercury XRS</strong>, your dashboard is what <em>you</em> need it to be. Whether you’re a trainer who needs all the details or an executive who just wants high-level insights, the dashboard delivers. Our virtual reality training software has fully customizable dashboards to render exactly what you need.
          </p>
          <div className="feature-media-wrapper">
            <img
              src="https://roundtablelearning.com/wp-content/uploads/2024/09/Session-Playback_Viewer@2x_Perspective_Right.png"
              srcSet="https://roundtablelearning.com/wp-content/uploads/2024/09/Session-Playback_Viewer@2x_Perspective_Right.png.webp 1x, https://roundtablelearning.com/wp-content/uploads/2024/09/Session-Playback_Viewer@2x_Perspective_Right.png 2x"
              alt="Session Playback Viewer"
              className="feature-img card-shadow rounded"
              loading="lazy"
            />
          </div>
          <h3 className="feature-heading">Seamless LMS Integration</h3>
          <p className="feature-copy">
            <strong style={{ color: '#00997d' }}>As digital-forum training and eLearning pioneers for a quarter-century, we know Learning Management Systems. Mercury XRS</strong> integrates effortlessly with your existing LMS. From traditional courses to immersive XR training, manage it all in one place. Keep every learning path connected, compare data across platforms, and take full control of your training ecosystem.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="data-analysis-faq-section">
      <div className="faq-container">
        <h2 className="faq-title">frequently asked questions</h2>
        <div className="faq-accordion">
          <details open>
            <summary>Does Mercury XRS work with all XR training types?</summary>
            <div className="faq-content">
              <p>
                Mercury XRS currently supports virtual reality and augmented reality training material.
              </p>
              <p>
                Not sure which is right for you? Read: AR vs VR – Which is Right for You?
              </p>
            </div>
          </details>
          <details>
            <summary>Can I integrate Mercury XRS into my current LMS platform?</summary>
            <div className="faq-content">
              With the use of xAPI or AICC communication technology, Mercury XRS can connect to your LMS platform – keeping your learning paths intact. Your LMS provider will have to help configure the integration with our team.
            </div>
          </details>
          <details>
            <summary>Can I migrate my existing XR content over to Mercury XRS?</summary>
            <div className="faq-content">
              If you have VR training content developed with Unity, there are capabilities to integrate your existing material into the Mercury XRS platform through minor code changes. <em>This is dependant on an evaluation of VR content files.</em>
            </div>
          </details>
          <details>
            <summary>How much does Mercury XRS cost?</summary>
            <div className="faq-content">
              Mercury XRS is sold by licensing per headset depending on the number of locations with a baseline fee for the online account. Contact our team to get your quote.
            </div>
          </details>
          <details>
            <summary>What headsets are compatible with Mercury XRS?</summary>
            <div className="faq-content">
              Currently, Mercury is compatible with the Oculus Go, Oculus Quest, and Pico Neo 2. If you have a different headset in mind for your training program, our team will work on compatibility options for you.
            </div>
          </details>
        </div>
      </div>
    </section>
    {/* Book Your Demo CTA + Form Section */}
    <section className="data-analysis-book-demo">
      <div className="book-demo-container">
        <div className="book-demo-header">
          <h2 className="book-demo-title">
            <span className="light">BOOK YOUR </span>DEMO
          </h2>
          <p className="book-demo-subtitle">
            Whether you want to meet in-person or virtually, our team will show you how immersive learning will transform the way you train your employees.
          </p>
        </div>
        <div className="book-demo-grid">
          <div className="book-demo-form card-shadow rounded">
            <div id="hs-demo-form" />
          </div>
          <div className="book-demo-profile">
            <picture>
              <source
                srcSet="https://roundtablelearning.com/wp-content/uploads/2024/09/Vince-Radisek_01_Roundtable-Learning-Headshot_Profile-Cropped-300x300.png.webp 300w, https://roundtablelearning.com/wp-content/uploads/2024/09/Vince-Radisek_01_Roundtable-Learning-Headshot_Profile-Cropped-768x768.png.webp 768w"
                type="image/webp"
              />
              <img
                width="150"
                height="150"
                src="https://roundtablelearning.com/wp-content/uploads/2024/09/Vince-Radisek_01_Roundtable-Learning-Headshot_Profile-Cropped-150x150.png"
                alt=""
                className="profile-img"
                loading="lazy"
              />
            </picture>
            <h4 className="profile-name">Vince Radisek</h4>
            <div className="profile-role">Account Executive</div>
            <div className="profile-socials">
              <a
                className="social-link linkedin"
                href="https://www.linkedin.com/in/vince-radisek-46b03486/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 448 512" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

export default DataAnalysis;