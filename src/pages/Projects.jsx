import React from "react";
import "./Projects.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Projects() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="projects" id="projects">
      <div
        ref={headerRef}
        className={`projects-header animate-on-scroll slide-up ${headerVisible ? 'visible' : ''}`}
      >
        <h2>Key Projects</h2>
        <p>Some of the projects I have built while learning frontend development</p>
      </div>

      <div
        ref={gridRef}
        className={`projects-grid ${gridVisible ? 'visible' : ''}`}
      >
        <div className="project-card card-hover-3d">
          <h3>Guessing Number Game</h3>
          <p>
            A simple interactive game where users guess a random number with
            instant feedback.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-card card-hover-3d">
          <h3>E-Commerce Website</h3>
          <p>
            A frontend shopping website with product listing, cart UI, and
            responsive design.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-card card-hover-3d">
          <h3>Todo App</h3>
          <p>
            A task management app to add, delete, and manage daily tasks
            efficiently.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card card-hover-3d">
          <h3>Weather App</h3>
          <p>
            Displays real-time weather information using an external API based
            on user location.
          </p>
          <div className="project-tags">
            <span>JavaScript</span>
            <span>API</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card card-hover-3d">
          <h3>Quote Generator</h3>
          <p>
            Generates random inspirational quotes with a clean and simple UI.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="project-card card-hover-3d">
          <h3>Tic Tac Toe Game</h3>
          <p>
            A two-player interactive game with turn-based logic, win detection,
            and clean user interface.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
