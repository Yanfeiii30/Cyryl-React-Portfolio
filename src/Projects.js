import React from 'react';
import './Projects.css'; // Import styles for this component

function Projects() {
  return (
    <section id="projects" className="projects-section card">
      <h2 className="section-title">My Projects</h2>
      <p>Here are a few projects I've worked on as I learn web development.</p>

      {/* This is the project grid */}
      <div className="projects-grid">

        {/* --- Project 1: This Portfolio --- */}
        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            The very website you are looking at! I built this to practice my React skills and create a place to show my work.
          </p>
          <p>
            <strong>Technologies used:</strong> React, HTML, CSS, and Git.
          </p>
          <a 
            href="https://github.com/Yanfeiii30/Cyryl-React-Portfolio.git" 
            className="button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* --- Project 2: Calculator App --- */}
        <div className="project-card">
          <h3>Simple Calculator App</h3>
          <p>
            A basic calculator built for one of my classes. It helped me learn the fundamentals of JavaScript logic and handling user input.
          </p>
          <p>
            <strong>Technologies used:</strong> HTML, CSS, and vanilla JavaScript.
          </p>
          {/* This link just goes to your main GitHub for now. You can change it later! */}
          <a 
            href="https://github.com/Yanfeiii30" 
            className="button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* --- Project 3: To-Do List App --- */}
        <div className="project-card">
          <h3>To-Do List App</h3>
          <p>
            A simple app where you can add and remove tasks. This project taught me about managing "state" in an application.
          </p>
          <p>
            <strong>Technologies used:</strong> React (useState hook) and CSS.
          </p>
          {/* This link also goes to your main GitHub for now. */}
          <a 
            href="https://github.com/Yanfeiii30" 
            className="button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;