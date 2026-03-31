import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

import useTypingEffect from '../hooks/useTypingEffect';

function Home() {
  const navigate = useNavigate()
  const typedText = useTypingEffect(["Frontend Developer",  "UI Creator","Web Developer"], 100, 2000);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>

        <h1 className="hero-name gradient-text">Rutuja Vekhande</h1>

        <h2 className="hero-role">
          {typedText}<span className="cursor">|</span>
        </h2>

        <p className="hero-desc">I create modern, clean, and interactive web experiences using <br />
          HTML, CSS, JavaScript, and React, focusing on performance and usability. <br />
          Passionate about building responsive and scalable front-end applications.</p>

        <button className="btn primary" onClick={() => navigate("/projects")}>View My Work</button>
      </div>

    </section>

  );
}
export default Home