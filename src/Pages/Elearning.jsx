import React, { useState, useEffect } from "react";
import "./Elearning.css";

const Elearning = () => {
  const [activeTab, setActiveTab] = useState("custom");

  // Load HubSpot form
  useEffect(() => {
    const scriptId = 'hs-forms-script';
    const renderForm = () => {
      if (window.hbspt?.forms?.create) {
        try {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '8192075',
            formId: 'fa5a51c4-2790-4f9f-9edf-91d54e405156',
            target: '#hs-elearning-demo-form',
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
    <main className="elearning-page">
      <section className="elearning-hero">
        <div className="elearning-hero-bg" />
        <div className="elearning-hero-content">
          <h1 className="elearning-title">eLearning</h1>
        </div>
      </section>

      {/* Custom eLearning Content for WorkForce Development Section */}
      <section className="elearning-workforce-section">
        <div className="workforce-container">
          <h2 className="workforce-title">
            <span className="light">Custom eLearning content for </span>
            <span className="workforce-highlight">WorkForce Development</span>
          </h2>
          <h5 className="workforce-subheading">
            <span style={{ color: '#808080' }}>We Give Your Learners Flexible Pacing and Engaging Content That Lasts</span>
          </h5>
          <p className="workforce-desc">
            Bring consistent training to your learners, whether they are across the country or on-site. With custom eLearning from Roundtable, your training content will engage employees through videos, animations, and knowledge checks. At Roundtable Learning, we partner with organizations to build smart and effective training programs that utilize expert instructional design and technology. As a full-service learning partner, we deliver eLearning training content to help your employees reach their learning objectives.
          </p>
        </div>
      </section>

      {/* Tabs: Custom Training / eLearning Solutions */}
      <section className="elearning-tabs-section">
        <div className="elearning-tabs-container">
          <div className="tabs-nav" role="tablist" aria-label="eLearning Tabs">
            <button
              className={`tab-button ${activeTab === "custom" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "custom"}
              aria-controls="tab-panel-custom"
              id="tab-custom"
              onClick={() => setActiveTab("custom")}
            >
              Custom Training
            </button>
            <button
              className={`tab-button ${activeTab === "solutions" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "solutions"}
              aria-controls="tab-panel-solutions"
              id="tab-solutions"
              onClick={() => setActiveTab("solutions")}
            >
              eLearning Solutions
            </button>
          </div>

          {/* Panels */}
          <div className="tabs-panels">
            {activeTab === "custom" && (
              <div
                className="tab-panel"
                id="tab-panel-custom"
                role="tabpanel"
                aria-labelledby="tab-custom"
              >
                <p className="intro-paragraph">
                  Custom eLearning is most efficient when part of a great blended learning program that engages learners through multiple modalities and touchpoints. However, eLearning is not a solution for all training topics. This modality may be less effective for topics that require a broader, dynamic environment and hands-on practice – for those topics, we recommend a virtual reality modality.
                </p>

                <div className="training-cards">
                  <div className="training-card">
                    <div className="card-icon" aria-hidden="true">
                      {/* Clipboard List icon */}
                      <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"/></svg>
                    </div>
                    <h6 className="card-title">Operations Training</h6>
                    <p className="card-desc">Machine Operation, Logistics, Point-of-sale transactions</p>
                  </div>

                  <div className="training-card">
                    <div className="card-icon" aria-hidden="true">
                      {/* Hard Hat icon */}
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>
                    </div>
                    <h6 className="card-title">Safety Training</h6>
                    <p className="card-desc">Protocol and safe handling of delicate equipment or materials.</p>
                  </div>

                  <div className="training-card">
                    <div className="card-icon" aria-hidden="true">
                      {/* Lightbulb icon - using a simple path via emoji fallback */}
                      <svg viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M176 0C78.8 0 0 78.8 0 176c0 44.2 16.8 84.5 44.5 114.9 17.8 19.6 39.8 40.9 39.8 69.1V384c0 8.8 7.2 16 16 16H252c8.8 0 16-7.2 16-16v-24c0-28.2 22-49.5 39.8-69.1C335.2 260.5 352 220.2 352 176 352 78.8 273.2 0 176 0zm80 464H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"/></svg>
                    </div>
                    <h6 className="card-title">Product Knowledge Training</h6>
                    <p className="card-desc">Retail Associates, Sales and Customer Service</p>
                  </div>

                  <div className="training-card">
                    <div className="card-icon" aria-hidden="true">
                      {/* Person/Onboarding icon */}
                      <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"/></svg>
                    </div>
                    <h6 className="card-title">Onboarding</h6>
                    <p className="card-desc">Introducing new hires to company culture and preparing for the workplace.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "solutions" && (
              <div
                className="tab-panel"
                id="tab-panel-solutions"
                role="tabpanel"
                aria-labelledby="tab-solutions"
              >
                <p className="intro-paragraph">
                  eLearning consists of training content hosted online or through a local network and is commonly managed with a Learning Management System (LMS). Content or eLearning modules can come in a variety of formats.
                </p>
                <p className="intro-paragraph">
                  When you work with eLearning content providers, the possibilities are almost endless to engage your learners:
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Show, Try, Test */}
      <section className="show-try-test-section">
        <h2 className="stt-heading-global">Show, Try, Test</h2>
        <div className="stt-container">
          <div className="stt-text">
            <div className="stt-card">
              <h5 className="stt-title">Learning Reinforcement With Show, Try, Test eLearning</h5>
              <p className="stt-desc">
                Give your learners the ability to learn and practice learning objectives with the Show, Try, Test eLearning trend.
              </p>
              <p className="stt-desc">
                This approach effectively reinforces learning content by allowing participants to watch and then practice learning objectives, ensuring they retain key information.
              </p>
              <p className="stt-desc">
                Show, Try, Test eLearning is completely customizable. Recreate websites, software user interfaces, and more. Walk your learners through the steps, allow them to try with prompts, and test their retention.
              </p>
            </div>
          </div>
          <div className="stt-image">
            <img
              src="https://roundtablelearning.com/wp-content/uploads/2024/10/3D-eLearning-blue-and-orage-1.png"
              alt="3D eLearning illustration"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Book Your Demo CTA + Form Section */}
      <section className="elearning-book-demo">
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
              <div id="hs-elearning-demo-form" />
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

export default Elearning;
