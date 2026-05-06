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
    const reveal = (target) => {
      target.classList.add("in", "reveal-in");
    };

    const elements = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // iOS Safari: address bar / visual viewport can delay or skip callbacks with a single strict threshold.
        threshold: [0, 0.08, 0.15],
        rootMargin: "0px 0px 20% 0px",
      }
    );

    const runFallback = () => {
      elements.forEach((el) => {
        if (!el.classList.contains("in")) reveal(el);
      });
    };

    let raf1 = requestAnimationFrame(() => {
      elements.forEach((el) => observer.observe(el));
    });

    // Failsafe if IntersectionObserver never fires (mobile Safari edge cases).
    const fallbackTimer = window.setTimeout(runFallback, 4500);

    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <HydrationProvider>
      <LanguageProvider>
        <AudienceViewProvider>
          <div className="relative isolate z-[1] w-full min-h-full">
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
