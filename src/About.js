import React from 'react';
import './About.css'; 
import profilePhoto from './2by2.jpg'; 

function About() {
  return (
    <section id="about" className="about-section card">
      <img
        src={profilePhoto} 
        alt="Cyryl P. Palisoc"
        className="profile-photo"
      />
      <div className="about-text">
        <h2 className="section-title">Hi, I'm Cyryl P. Palisoc</h2>
        <p className="subtitle">
          Computer Science Student - 3CS-B
        </p>
        <p>
          Welcome to my personal portfolio! I am a passionate Computer Science student learning to build modern and responsive web applications with React.
        </p>
      </div>
    </section>
  );
}

export default About;