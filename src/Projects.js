import React from 'react';
import './Projects.css'; // Import styles for this component

function Projects() {
  return (
    // This <section> is what gets imported into App.js
    <section id="projects" className="projects-section card">
      <h2 className="section-title">My Projects</h2>
      <p>Here are a few projects I've worked on.</p>

      {/* This is the container for all your project cards */}
      <div className="projects-grid">
        
        {/* --- Project 1 --- */}
        <div className="project-card">
          <h3>Project Title 1</h3>
          <p>
            A brief description of the project. What problem did it solve?
            What technologies did you use?
          </p>
          <div className="project-links">
            <a href="https://github.com/your-username/project-1" className="button">GitHub</a>
            {/* <a href="#" className="button">Live Demo</a> */}
          </div>
        </div>

        {/* --- Project 2 --- */}
        <div className="project-card">
          <h3>Project Title 2</h3>
          <p>
            A brief description of the project. What problem did it solve?
            What technologies did you use?
          </p>
          <div className="project-links">
            <a href="https://github.com/your-username/project-2" className="button">GitHub</a>
            {/* <a href="#" className="button">Live Demo</a> */}
          </div>
        </div>
        
        {/* --- Project 3 --- */}
        <div className="project-card">
          <h3>Project Title 3</h3>
          <p>
            A brief description of the project. What problem did it solve?
            What technologies did you use?
          </p>
          <div className="project-links">
            <a href="https://github.com/your-username/project-3" className="button">GitHub</a>
            {/* <a href="#" className="button">Live Demo</a> */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
