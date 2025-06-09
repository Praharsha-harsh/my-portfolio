import React from 'react';
import './Footer.css'; // Add this CSS file in the same folder

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Praharsha Harsh. All rights reserved.</p>
  </footer>
);

export default Footer;
