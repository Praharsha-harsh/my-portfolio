import React from 'react';
import './Projects.css'; // Create this CSS file in the same folder

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>A clean and responsive personal portfolio built using React and hosted on GitHub Pages.</p>
    </div>

    {/* Add more projects here */}
    {/* 
    <div className="project-card">
      <h3>Project Title</h3>
      <p>Short description of the project.</p>
    </div>
    */}
  </section>
);

export default Projects;
