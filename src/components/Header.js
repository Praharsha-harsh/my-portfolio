import React from 'react';
import './Header.css'; // Link to the CSS file

const Header = () => (
  <header className="header">
    <h1 className="header-title">Praharsha Harsh</h1>
    <nav className="navbar">
      <a href="#about" className="nav-link">About</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  </header>
);

export default Header;
