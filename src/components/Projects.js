import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Featured Projects</h2>
    <div className="projects-grid">
      
      <div className="project-card">
        <span className="project-year">2023</span>
        <h3>Atmospheric Water Generator</h3>
        <p>
          Researched and developed solutions for energy efficiency and scalability challenges in atmospheric water generation. 
          This project focuses on addressing global water challenges through technological advancements and making these 
          systems more widespread and impactful.
        </p>
      </div>

      <div className="project-card">
        <span className="project-year">2023</span>
        <h3>Apple Vision Pro Analysis</h3>
        <p>
          Comprehensive analysis of Apple Vision Pro technology, exploring how it marks a new chapter in augmented reality evolution. 
          The project examines how this technology unlocks possibilities where virtual and physical realities seamlessly merge.
        </p>
      </div>

      <div className="project-card">
        <span className="project-year">2022</span>
        <h3>Hybrid Electric Car Design</h3>
        <p>
          Designed an innovative hybrid electric vehicle that operates on both electric energy and fuel (petrol). 
          The car features self-charging capability using solar panels placed on the roof, making it an eco-friendly 
          and sustainable transportation solution.
        </p>
      </div>

    </div>
  </section>
);

export default Projects;