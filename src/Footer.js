import React from 'react';
import './Footer.css'; // Import styles for this component

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cyryl P. Palisoc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
