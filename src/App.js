import React from 'react';
import './App.css'; // Main styles (layout, shared styles)

// Import all your new components
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// App.js is now just an "assembler."
// It puts all the other components together.
function App() {
  return (
    <div className="App">
      <Header />

      {/* Main content container */}
      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;