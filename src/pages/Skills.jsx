import React from "react";
import "./Skills.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Skills() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="skills" id="skills">
      <div
        ref={headerRef}
        className={`skills-header animate-on-scroll slide-up ${headerVisible ? 'visible' : ''}`}
      >
        <h2>Technical Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div
        ref={gridRef}
        className={`skills-grid ${gridVisible ? 'visible' : ''}`}
      >
       
        <div className="skill-card card-hover-3d">
          <div className="skill-title">
            🎨 <h3>Frontend</h3>
          </div>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript ES6+</span>
            <span>React.js</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      
        <div className="skill-card card-hover-3d">
          <div className="skill-title">
            🛠️ <h3>Tools & Platforms</h3>
          </div>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>

       
        <div className="skill-card card-hover-3d">
          <div className="skill-title">
            ☁️ <h3>DevOps</h3>
          </div>

          <div className="skill-tags">
            <span>Netlify</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
