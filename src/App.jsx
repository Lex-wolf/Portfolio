import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import QAProjects from "./components/QAProjects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_50%,#000_40%,#63e_100%)]">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full"></div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Highlights />
          <Projects />
          <QAProjects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
