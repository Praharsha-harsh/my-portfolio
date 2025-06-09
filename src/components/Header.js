import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-title">Praharsha H V</h1>
      <p className="header-subtitle">Computer Science Engineering Student | Developer | Innovator</p>
      <nav className="navbar">
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;