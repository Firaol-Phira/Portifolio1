import React from "react";
import "./Contact.css";

import {
  EnvelopeFill,
  TelephoneFill,
  Linkedin,
  Github,
  Telegram,
  ArrowRight,
} from "react-bootstrap-icons";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="contact-subtitle">GET IN TOUCH</p>

          <h2 className="contact-title">
            Let's <span>work together.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind or want to discuss an opportunity? I'd love
            to hear from you.
          </p>
        </div>

        {/* Main Row */}
        <div className="row g-4">
          {/* ================= LEFT ================= */}
          <div className="col-12 col-lg-5">
            {/* Direct Channels */}
            <div className="contact-info">
              <h3 className="contact-label">DIRECT CHANNELS</h3>

              {/* Email */}
              <a href="mailto:firaolnegewo8@gmail.com" className="contact-card">
                <div className="contact-icon">
                  <EnvelopeFill />
                </div>

                <div className="EmailD">
                  <small>EMAIL ME</small>
                  <strong>firaolnegewo8@gmail.com</strong>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+251935568164" className="contact-card">
                <div className="contact-icon">
                  <TelephoneFill />
                </div>

                <div className="phoneD">
                  <small>CALL DIRECTLY</small>
                  <strong>+251 935568164</strong>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="social-section mt-5">
              <h3 className="contact-label">SOCIAL PRESENCE</h3>

              <div className="d-flex gap-3">
                <a
                  href="https://www.linkedin.com/in/firaol-negewo-0a87863b5/"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://github.com/Firaol-Phira"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href="https://t.me/@fira21723"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <Telegram />
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="col-12 col-lg-7">
            <div className="contact-form">
              <form>
                {/* Name + Email */}
                <div className="row g-4 formE">
                  <div className="col-12 col-md-6 ">
                    <label htmlFor="name">Full Name</label>

                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Daniel Morgan"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="email">Email Address</label>

                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="daniel@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mt-4 formE">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="+251 000 000 000"
                  />
                </div>

                {/* Project Details */}
                <div className="mt-4 formE">
                  <label htmlFor="message">Project Details</label>

                  <textarea
                    id="message"
                    className="form-control message-box"
                    placeholder="Briefly describe your project or inquiry..."
                  />
                </div>

                {/* Button */}
                <button type="submit" className="btn contact-button w-100 mt-4">
                  Send Message
                  <ArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


