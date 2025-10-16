import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import ProjectsNew from "./components/ProjectsNew";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full bg-base-dark" style={{ scrollBehavior: 'smooth' }}>
      <div className="overflow-x-hidden text-base-light antialiased selection:bg-accent-cyan selection:text-base-dark">
        {/* Animated gradient background */}
        <div 
          className="fixed top-0 -z-10 h-full w-full bg-gradient-to-r from-base-dark via-base-darker to-base-dark bg-[length:200%_200%] animate-gradient-move"
          style={{ willChange: 'background-position' }}
        ></div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Highlights />
          <ProjectsNew />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
