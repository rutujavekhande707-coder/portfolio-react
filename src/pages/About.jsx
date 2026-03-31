import React from "react";
import "./About.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function About() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [textRef, textVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cardRef, cardVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="about" id="about">
      <div
        ref={headerRef}
        className={`about-header animate-on-scroll slide-up ${headerVisible ? 'visible' : ''}`}
      >
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-content">

        <div
          ref={textRef}
          className={`about-text animate-on-scroll slide-in-left ${textVisible ? 'visible' : ''}`}
        >
          <p>
            I am a dedicated <strong>Frontend Developer</strong> with a strong foundation
            in building responsive and user-friendly web applications.
          </p>

          <p>
            I work with <strong>HTML, CSS, JavaScript, and React.js</strong> to develop
            clean and maintainable interfaces.
          </p>

          <p>
            I have completed multiple projects that demonstrate my ability to create
            interactive and well-structured UI components.  I am also familiar with <strong>Tailwind CSS</strong> for building modern and
            consistent designs efficiently.
          </p>

          <p>
            I am continuously improving my skills and staying updated with modern
            frontend technologies.
          </p>

          <p>
            I aim to contribute to impactful projects while growing as a web developer.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`edu-card animate-on-scroll scale-up ${cardVisible ? 'visible' : ''}`}
        >


          <div className="edu-content">
            <h3> 🎓B.Sc. in Information Technoloy</h3>

            <p className="edu-university">
              Shantarambhau Gholap College, Shivle
            </p>

            <p className="edu-meta">
              2022 – 2025 <span>|</span> CGPA: 8.50 / 10
            </p>
          </div>
          <div className="certifications">
            <h3 className="cert-title">Certifications</h3>

            <ul className="cert-list">
              <li className="cert-item">
                <span className="check">✓</span>
                Web design
              </li>

              <li className="cert-item">
                <span className="check">✓</span>
                React JS
              </li>


            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
