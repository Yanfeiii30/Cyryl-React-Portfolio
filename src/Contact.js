import React from 'react';
import './Contact.css'; // Import styles for this component

function Contact() {
  return (
    <section id="contact" className="contact-section card">
      <h2 className="section-title">Get In Touch</h2>
      <p>
        I'm always open to discussing new ideas or opportunities.
        Feel free to reach out!
      </p>
      
      <div className="contact-links">
        {}
        <a href="mailto:cyryl.palisoc.com" className="button">
          Email Me
        </a>
        
        {

        }
        <a 
          href="https://github.com/Yanfeiii30" 
          className="button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        
        {}
        <a 
          href="https://www.linkedin.com/in/cyryl/" 
          className="button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;