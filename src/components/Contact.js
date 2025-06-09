import React from 'react';
import './Contact.css'; // Link to a CSS file for styling

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact</h2>
    <p>
      <strong>Email:</strong>{' '}
      <a href="mailto:your.email@example.com" className="contact-link">
        your.email@example.com
      </a>
    </p>
    <p>
      <strong>LinkedIn:</strong>{' '}
      <a
        href="https://linkedin.com/in/yourname"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        linkedin.com/in/yourname
      </a>
    </p>
  </section>
);

export default Contact;
