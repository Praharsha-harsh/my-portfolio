import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <h2>About Me</h2>
      <div className="about-text">
        <p>
          I'm a passionate <strong>Computer Science Engineering</strong> student at Malnad College of Engineering, 
          currently in my 4th semester with a CGPA of 6.2. I love building innovative solutions and turning 
          creative ideas into real-world applications.
        </p>
        <p>
          With expertise in multiple programming languages and a keen interest in emerging technologies, 
          I'm always eager to take on new challenges and contribute to meaningful projects.
        </p>
      </div>
      
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <p>C, Python, Java, HTML - Building robust applications with clean, efficient code</p>
        </div>
        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <p>Figma, GitHub, Microsoft Office, Google Drive - Streamlining development workflow</p>
        </div>
        <div className="skill-card">
          <h3>Leadership & Mentoring</h3>
          <p>Academic club leadership, tutoring experience, and voluntary NSS activities</p>
        </div>
        <div className="skill-card">
          <h3>Event Management</h3>
          <p>Successfully conducted national level technical events and participated in various competitions</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;