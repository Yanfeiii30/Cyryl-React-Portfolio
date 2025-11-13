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
        {/* This link is fine */}
        <a href="mailto:cyryl.palisoc@example.com" className="button">
          Email Me
        </a>
        
        {/* THE FIX: 
          We replaced href="#" with your real GitHub URL.
          (I saw your username "Yanfeiii30" in the Vercel log!)
          This makes the link valid and removes the warning.
          We also add target="_blank" to open in a new tab.
        */}
        <a 
          href="https://github.com/Yanfeiii30" 
          className="button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        
        {/* THE FIX: 
          We replaced href="#" with a placeholder for your LinkedIn.
          Just change "your-profile" to your real LinkedIn username.
        */}
        <a 
          href="https://www.linkedin.com/in/your-profile" 
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