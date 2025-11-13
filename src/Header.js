import React from 'react';
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Cyryl P. Palisoc</h1>
        <nav className="main-nav">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
