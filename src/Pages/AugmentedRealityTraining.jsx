import React, { useState, useEffect, useRef } from 'react';
import './AugmentedRealityTraining.css';

const arTabs = [
  {
    label: 'How AR Works',
    heading: 'How Does AR Training Work?',
    content: (
      <>
        <p>Augmented reality adds interactive, digital elements to a live, real-world environment through a smartphone, tablet, or headset. Use your device to manipulate computer-generated objects in a 3D space, experiencing everything as though it were physically in front of you.</p>
        <p>Whether your organization needs to develop technical skills or is looking for interactive onboarding activities, there are three types of AR technology to help reach your goals:</p>
        <div className="ar-tab-features">
          <div className="ar-tab-feature">
            <h5>Image Recognition</h5>
            <p>Image Target AR overlays videos, text, images, or 3D objects on a real-world 2D image. Learners can focus their device on a poster about safety to generate a video about your organization’s safety procedures.</p>
          </div>
          <div className="ar-tab-feature">
            <h5>Object Recognition</h5>
            <p>Object Recognition AR attaches a digital 3D model to a real-world object that learners can pick up and manipulate. Learners can target a piece of equipment to create a digital model to practice taking apart and reassembling.</p>
          </div>
          <div className="ar-tab-feature">
            <h5>Plane Detection</h5>
            <p>Plane Detection AR places a digital 3D model to a real-world flat surface. Learners can point their device at the ground in front of them to produce a full-scale model of a large machine that they can walk around, inspect, and practice operating.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    label: 'Training Solutions',
    heading: 'Can AR Train Employees?',
    content: (
      <>
        <p>AR training solutions are most efficient when addressing one skill, topic, or process at a time. By enhancing reality with digital elements, draw your learners’ attention to exactly what they need to learn. AR training may be less practical for topics that require a broader, dynamic environment to make sense of them. For soft skills training, we recommend virtual reality or instructor-led training.</p>
        <div className="ar-tab-solutions">
          <div className="ar-tab-solution">
            <h5>Technical</h5>
            <p>Manufacturing, Repair, Assembly</p>
            <a href="#" className="ar-tab-case-study">Case Study</a>
          </div>
          <div className="ar-tab-solution">
            <h5>Operations</h5>
            <p>Machine operation, logistics, Point-of-sale transactions</p>
            <a href="#" className="ar-tab-case-study">Case Study</a>
          </div>
          <div className="ar-tab-solution">
            <h5>Safety</h5>
            <p>Protocol, equipment handling, or materials</p>
            <a href="#" className="ar-tab-case-study">Case Study</a>
          </div>
          <div className="ar-tab-solution">
            <h5>Product Knowledge</h5>
            <p>Retail associates, Sales teams, Educating customers</p>
            <a href="#" className="ar-tab-case-study">Case Study</a>
          </div>
          <div className="ar-tab-solution">
            <h5>Onboarding</h5>
            <p>Introduce new hires to company culture and prepare them for the workplace.</p>
            <a href="#" className="ar-tab-case-study">Case Study</a>
          </div>
        </div>
      </>
    ),
  },
  {
    label: 'The Cost of AR',
    heading: 'How Much Does AR Training Cost?',
    content: (
      <>
        <p>Custom learning and development content does not have a set price. Depending on the type of interactions, instructional design, and 3D modeling hours required, custom AR can cost from $25,000 to $50,000 or more.</p>
        <p>Roundtable Learning will work with your training team to evaluate your current training materials and adapt your materials for a virtual audience through activities, scheduling updates, assignments, technology, and facilitator training.</p>
      </>
    ),
  },
];

const AugmentedRealityTraining = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Lightweight HubSpot form component
  const HubSpotForm = ({ portalId, formId, targetId }) => {
    const containerRef = useRef(null);
    useEffect(() => {
      let cancelled = false;
      const ensureScript = () =>
        new Promise((resolve, reject) => {
          if (window.hbspt) return resolve();
          const s = document.createElement('script');
          s.src = 'https://js.hsforms.net/forms/embed/v2.js';
          s.async = true;
          s.onload = () => resolve();
          s.onerror = reject;
          document.body.appendChild(s);
        });

      ensureScript()
        .then(() => {
          if (cancelled || !window.hbspt) return;
          // Clear previous render if any
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.innerHTML = '';
          window.hbspt.forms.create({
            portalId,
            formId,
            target: `#${targetId}`,
            css: `
              :root { 
                --ar-color-primary: #00bfae; 
                --ar-color-primary-600: #00a495; 
                --ar-color-bg: #ffffff; 
                --ar-color-border: #d7dee3; 
                --ar-color-border-strong: #94a3b8; 
                --ar-color-muted: #607182; 
                --ar-color-error: #d92d20; 
              }

              .hs-form { --gap: 14px; font-family: inherit; }
              .hs-form fieldset { max-width: 100% !important; margin: 0; padding: 0; border: 0; }
              .hs-form .hs-form-field { margin: 0 0 var(--gap); }

              /* Force single-column layout for built-in multi-column fieldsets */
              .hs-form fieldset.form-columns-2,
              .hs-form fieldset.form-columns-3 { display: block; }
              .hs-form fieldset.form-columns-2 .hs-form-field,
              .hs-form fieldset.form-columns-3 .hs-form-field { width: 100% !important; padding-right: 0 !important; }

              /* Labels and descriptions */
              .hs-form label, .hs-form legend { display: block; font-weight: 600; font-size: .95rem; color: #0f172a; margin: 0 0 6px; letter-spacing: .01em; }
              .hs-form .hs-field-desc { font-size: .85rem; color: var(--ar-color-muted); margin-top: 6px; }
              .hs-form .hs-required { color: var(--ar-color-primary); }

              /* Text inputs, selects, textareas */
              .hs-form input[type=text],
              .hs-form input[type=email],
              .hs-form input[type=tel],
              .hs-form input[type=url],
              .hs-form input[type=number],
              .hs-form select,
              .hs-form textarea {
                width: 100%;
                padding: 16px 18px; /* Larger padding */
                border: 1px solid var(--ar-color-border);
                border-radius: 10px;
                background: var(--ar-color-bg);
                color: #0f172a;
                line-height: 1.5;
                font-size: 1.05rem; /* Slightly larger text */
                box-shadow: 0 0 0 0 rgba(0,191,174,0);
                transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
              }
              .hs-form input::placeholder, .hs-form textarea::placeholder { color: #94a3b8; }
              .hs-form input:focus, .hs-form select:focus, .hs-form textarea:focus {
                outline: none; border-color: var(--ar-color-primary-600); box-shadow: 0 0 0 3px rgba(0,191,174,.2);
              }
              .hs-form select {
                appearance: none;
                background-image: linear-gradient(45deg, transparent 50%, #64748b 50%), linear-gradient(135deg, #64748b 50%, transparent 50%);
                background-position: calc(100% - 18px) calc(50% - 3px), calc(100% - 13px) calc(50% - 3px);
                background-size: 6px 6px, 6px 6px;
                background-repeat: no-repeat;
                padding-right: 42px; /* Account for larger padding & chevron */
              }
              .hs-form textarea { min-height: 140px; resize: vertical; }

              /* Checkbox and Radio groups - single column ALWAYS */
              .hs-form .hs-fieldtype-checkbox .inputs-list,
              .hs-form .hs-fieldtype-radio .inputs-list {
                display: grid; grid-template-columns: 1fr; gap: 8px; list-style: none; margin: 6px 0 0; padding: 0;
              }
              .hs-form .hs-fieldtype-checkbox .inputs-list > li,
              .hs-form .hs-fieldtype-radio .inputs-list > li { margin: 0; }
              .hs-form .hs-checkbox-display, .hs-form .hs-radio-display {
                display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border: 1px solid var(--ar-color-border);
                border-radius: 12px; background: #fff; transition: background .18s ease, border-color .18s ease, transform .18s ease;
              }
              .hs-form .hs-checkbox-display:hover, .hs-form .hs-radio-display:hover { background: #f6fbfc; border-color: #b9dbe0; }
              .hs-form .hs-checkbox-display label, .hs-form .hs-radio-display label { margin: 0; font-size: .95rem; line-height: 1.35; }
              .hs-form input[type=checkbox], .hs-form input[type=radio] { flex: 0 0 auto; width: 18px; height: 18px; accent-color: var(--ar-color-primary); margin-top: 2px; }

              /* Error states */
              .hs-form .hs-error-msgs, .hs-form .hs-error-msg { list-style: none; margin: 6px 0 0; padding: 0; color: var(--ar-color-error); font-size: .85rem; }
              .hs-form .error input, .hs-form .error select, .hs-form .error textarea { border-color: var(--ar-color-error); box-shadow: 0 0 0 3px rgba(217,45,32,.12); }

              /* Submit button */
              .hs-form .hs-submit { margin-top: calc(var(--gap) + 2px); }
              .hs-form .hs-button {
                display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; border-radius: 999px;
                padding: 14px 22px; background: var(--ar-color-primary); color: #fff; font-weight: 700; letter-spacing: .02em; cursor: pointer; font-size: 1.05rem;
                transition: transform .15s ease, background .15s ease;
              }
              .hs-form .hs-button:hover { background: var(--ar-color-primary-600); transform: translateY(-1px); }
              .hs-form .hs-button:active { transform: translateY(0); }

              /* Ensure common fields are full width even if HubSpot applies inline styles */
              .hs-form .hs_firstname, .hs-form .hs_lastname, .hs-form .hs_email, .hs-form .hs_phone, .hs-form .hs_company { width: 100% !important; }
              .hs-form ul.no-list { margin: 0; padding: 0; }
            `,
          });
        })
        .catch(() => {/* silently ignore */});
      return () => { cancelled = true; };
    }, [portalId, formId, targetId]);

    return <div ref={containerRef} id={targetId} className="ar-hubspot-form" />;
  };
  return (
    <>
      <section className="ar-simple-hero">
        <h1 className="ar-simple-hero-title">Augmented Reality Training</h1>
      </section>

      <section className="ar-workforce-section">
        <div className="ar-workforce-container">
          <h2 className="ar-workforce-title">
            <span className="ar-workforce-title-light">AR Training for </span>workforce Development
          </h2>
          <div className="ar-workforce-desc">
            <p>With augmented reality (AR) solutions, learners can enhance their reality with interactive features at their fingertips.</p>
            <p>As a full-service learning partner, Roundtable Learning utilizes expert instructional design and technology to deliver <br />AR solutions that transform the learning experience and help your employees reach their learning objectives.</p>
          </div>
          <div className="ar-workforce-features">
            <div className="ar-workforce-feature">
              <h5>Experimental Learning</h5>
              <p>Through virtual hands-on learning, augmented reality training creates an environment without risk of damaging products or equipment. Learners can practice virtually so they are prepared to work safely in real life.</p>
            </div>
            <div className="ar-workforce-feature">
              <h5>Increased Mobility</h5>
              <p>AR technology is mobile-friendly. Your AR training content can be used across your building, at multiple locations, or even from home. Load a training program on a phone or tablet so learners can take it around with them.</p>
            </div>
            <div className="ar-workforce-feature">
              <h5>Memorable Microlearning</h5>
              <p>Microlearning is bite-sized training that focuses on one definable concept, skill, or process. Augmented reality offers self-paced, microlearning solutions that make knowledge acquisition easier for learners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ar-tabs-section">
        <div className="ar-tabs-container">
          <div className="ar-tabs-list">
            {arTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`ar-tab-btn${activeTab === idx ? ' active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="ar-tab-panel">
            <h2 className="ar-tab-heading">{arTabs[activeTab].heading}</h2>
            <div className="ar-tab-content">{arTabs[activeTab].content}</div>
          </div>
        </div>
      </section>

      {/* Work with our AR Training Experts */}
      <section className="ar-experts-section">
        <div className="ar-experts-container">
          <h2 className="ar-experts-title">
            <span className="ar-experts-title-light">Work with our</span> AR Training Experts
          </h2>
          <p className="ar-experts-lead">
            No matter your training needs, our instructional designers work closely with you to understand your audience and
            clarify your learning objectives. Our 3D modelers and immersive reality experts take it from there, building custom
            augmented reality training that engages your learners and elevates employee performance.
          </p>

          <div className="ar-experts-grid">
            <div className="ar-experts-left">
              <p className="ar-experts-paragraph">
                Our augmented reality solutions will revolutionize your job training. By leveraging existing devices like company
                tablets and learners’ smartphones, we work collaboratively to develop an augmented reality training program that’s
                easy to scale and can accommodate your entire business.
              </p>

              <div className="ar-stat-list">
                <div className="ar-stat">
                  <div className="ar-stat-header">
                    <span className="ar-stat-title">Americans are familiar with AR</span>
                    <span className="ar-stat-amount">47%</span>
                  </div>
                  <div className="ar-stat-bar"><div className="ar-stat-fill" style={{ width: '47%' }} /></div>
                </div>
                <div className="ar-stat">
                  <div className="ar-stat-header">
                    <span className="ar-stat-title">People believe AR is useful for learning</span>
                    <span className="ar-stat-amount">70%</span>
                  </div>
                  <div className="ar-stat-bar"><div className="ar-stat-fill" style={{ width: '70%' }} /></div>
                </div>
                <div className="ar-stat">
                  <div className="ar-stat-header">
                    <span className="ar-stat-title">Americans use AR every month</span>
                    <span className="ar-stat-amount">25%</span>
                  </div>
                  <div className="ar-stat-bar"><div className="ar-stat-fill" style={{ width: '25%' }} /></div>
                </div>
                <div className="ar-stat">
                  <div className="ar-stat-header">
                    <span className="ar-stat-title">Industrial companies are using VR/AR</span>
                    <span className="ar-stat-amount">75%</span>
                  </div>
                  <div className="ar-stat-bar"><div className="ar-stat-fill" style={{ width: '75%' }} /></div>
                </div>
              </div>

              <p className="ar-experts-paragraph">
                No matter your training needs, our instructional designers will work closely with you to understand your audience
                and clarify your learning objectives. Our 3D modelers and <a href="/resource-center">immersive reality experts</a>
                will take it from there, building custom augmented reality training that engages your learners and elevates
                employee performance to new heights.
              </p>
            </div>

            <div className="ar-experts-right">
              <div className="ar-video">
                <iframe
                  className="ar-video-iframe"
                  src="https://www.youtube.com/embed/3f8rKn6guVo?controls=1&rel=0&playsinline=1"
                  title="The Big 3 Augmented Reality Technologies for Training and Development"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <blockquote className="ar-quote">
                <p>
                  Everyone loved the look and feel of the project and appreciated the interactivity. Most importantly, our
                  secondary knowledge assessment has had stellar results. It will replace a 2 hour instructor-led presentation,
                  and has proven to provide better knowledge retention.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Demo */}
      <section className="ar-demo-section">
        <div className="ar-demo-container">
          <h2 className="ar-demo-title"><span className="ar-demo-title-light">BOOK YOUR </span>DEMO</h2>
          <p className="ar-demo-subtitle">Whether you want to meet in-person or virtually, our team will show you how immersive learning will transform the way you train your employees.</p>
        </div>
      </section>

      {/* Contact/Form Section */}
      <section className="ar-contact-section">
        <div className="ar-contact-container">
          <div className="ar-contact-grid">
            <div className="ar-contact-left">
              <div className="ar-form-card">
                <HubSpotForm
                  portalId="8192075"
                  formId="6b78f6e9-476d-44eb-a37e-074880067330"
                  targetId="hs-form-ar-contact"
                />
              </div>
            </div>
            <div className="ar-contact-right">
              <div className="ar-profile-card">
                <img
                  className="ar-contact-avatar"
                  src="https://roundtablelearning.com/wp-content/uploads/2024/11/Nick-Day_Roundtable-Learning-Headshot_Profile-Cropped-1-150x150.jpg"
                  alt="Nick Day headshot"
                  width="150"
                  height="150"
                  loading="lazy"
                />
                <div className="ar-contact-name">Nick Day</div>
                <div className="ar-contact-title">VP of Sales & Marketing</div>
                <div className="ar-contact-socials">
                  <a
                    className="ar-social ar-social-linkedin"
                    href="https://www.linkedin.com/in/nicholasjday/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile of Nick Day"
                  >
                    <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                      <path d="M416 32H32C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 32 480h384c17.7 0 32-14.5 32-32.3V64.3C448 46.5 433.7 32 416 32zM135.4 416H69V202.2h66.4V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zM416 416h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2H256v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AugmentedRealityTraining;
