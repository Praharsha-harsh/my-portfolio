import React from 'react';
// import profile from '../assets/profile.jpg'; // Uncomment if you add a profile image
import './About.css'; // Link to CSS (you'll create this)

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      {/* <img src={profile} alt="Profile" className="about-image" /> */}
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a passionate <strong>React developer</strong> who loves building
          beautiful, fast, and functional web apps. I enjoy turning ideas into real-life projects
          that help people and businesses.
        </p>
      </div>
    </div>
  </section>
);

export default About;
