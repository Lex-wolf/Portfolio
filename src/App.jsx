import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ProjectsNew from "./components/ProjectsNew";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HydrationProvider } from "./context/HydrationContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AudienceViewProvider } from "./context/AudienceViewContext";

const App = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <HydrationProvider>
      <LanguageProvider>
        <AudienceViewProvider>
          <div className="relative min-h-0 w-full">
            <div className="app-shell">
              <Navbar />
              <main>
                <Hero />
                <About />
                <ProjectsNew />
                <Technologies />
                <Experience />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        </AudienceViewProvider>
      </LanguageProvider>
    </HydrationProvider>
  );
};

export default App;
