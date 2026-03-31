import React from "react";
import "./Contact.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Contact() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="contact" id="contact">
      <div
        ref={headerRef}
        className={`contact-header animate-on-scroll slide-up ${headerVisible ? 'visible' : ''}`}
      >
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new projects and opportunities</p>
      </div>

      <div
        ref={gridRef}
        className={`contact-grid ${gridVisible ? 'visible' : ''}`}
      >
      
        <a
          href="mailto:rutujavekhande707@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">✉️</div>
          <h3>Email</h3>
          <p>rutujavekhande707@gmail.com</p>
        </a>

        <a
          href="tel:+919699201765"
          className="contact-card"
        >
          <div className="contact-icon">📱</div>
          <h3>Phone</h3>
          <p>+91 9699201765</p>
        </a>

       
        <a
          href="#"
          className="contact-card"
        >
          <div className="contact-icon">🔗</div>
          <h3>Portfolio</h3>
          <p>View Portfolio</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
