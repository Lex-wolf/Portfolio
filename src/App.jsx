import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import { ImOpera } from "react-icons/im";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      // style={{ height: "150%" }}
      className="inset-0 -z-10 h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
        <div className="fixed top-0 -z-10 h-full w-full"></div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;

//https://www.youtube.com/watch?v=_63mEm3AMSY&list=PLht1XLyOVKfeJ6RlbF70gfcWG23Z1dWqk&index=10
//me quede en about section
//time 51:12
