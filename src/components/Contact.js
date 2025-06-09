import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Get In Touch</h2>
    <div className="contact-info">
      <div className="contact-card">
        <h3>📧 Email</h3>
        <p>
          <a href="mailto:praharshahvp@gmail.com" className="contact-link">
            praharshahvp@gmail.com
          </a>
        </p>
      </div>
      
      <div className="contact-card">
        <h3>📱 Phone</h3>
        <p>
          <a href="tel:+918317494212" className="contact-link">
            +91 8317494212
          </a>
        </p>
      </div>
      
      <div className="contact-card">
        <h3>💼 LinkedIn</h3>
        <p>
          <a href="https://www.linkedin.com/in/praharsha-h-v-03b89225a" target="_blank" rel="noopener noreferrer" className="contact-link">
            Connect with me
          </a>
        </p>
      </div>
      
      <div className="contact-card">
        <h3>💻 GitHub</h3>
        <p>
          <a href="https://github.com/Praharsha-harsh" target="_blank" rel="noopener noreferrer" className="contact-link">
            View my projects
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;