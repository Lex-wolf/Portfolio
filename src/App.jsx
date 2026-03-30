import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ProjectsNew from "./components/ProjectsNew";
import Contact from "./components/Contact";
import { BackgroundSystem } from "./components/background/BackgroundSystem";
import { HydrationProvider } from "./context/HydrationContext";

const App = () => {
  return (
    <HydrationProvider>
      <div className="relative min-h-screen overflow-hidden" style={{ scrollBehavior: "smooth" }}>
        <BackgroundSystem />
        <div className="relative z-10 overflow-x-hidden text-base-light antialiased selection:bg-accent-cyan selection:text-base-dark">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <ProjectsNew />
              <Contact />
            </main>
          </div>
        </div>
      </div>
    </HydrationProvider>
  );
};

export default App;
