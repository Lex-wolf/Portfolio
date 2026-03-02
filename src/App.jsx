import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ProjectsNew from "./components/ProjectsNew";
import Contact from "./components/Contact";
import { BackgroundSystem } from "./components/background/BackgroundSystem";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ scrollBehavior: "smooth" }}>
      <BackgroundSystem />
      <div className="relative z-10 overflow-x-hidden text-base-light antialiased selection:bg-accent-cyan selection:text-base-dark">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <ProjectsNew />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
