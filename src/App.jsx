import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ProjectsNew from "./components/ProjectsNew";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Websites from "./components/Websites";
import "./websites.css";
import { HydrationProvider } from "./context/HydrationContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AudienceViewProvider } from "./context/AudienceViewContext";

function normalizePath(path) {
  if (!path) return "/";
  const clean = path.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean || "/";
}

const App = ({ url }) => {
  const pathname = normalizePath(
    url ?? (typeof window !== "undefined" ? window.location.pathname : "/"),
  );
  const isWebsites = pathname === "/websites";

  useEffect(() => {
    document.documentElement.classList.toggle("on-websites", isWebsites);
    document.body.classList.toggle("on-websites", isWebsites);
    return () => {
      document.documentElement.classList.remove("on-websites");
      document.body.classList.remove("on-websites");
    };
  }, [isWebsites]);

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
            <div className={`app-shell${isWebsites ? " websites-route" : ""}`}>
              {isWebsites ? (
                <a className="skip-link" href="#websites-main">
                  Skip to content
                </a>
              ) : null}
              <Navbar path={pathname} />
              {isWebsites ? (
                <main id="websites-main">
                  <Websites />
                </main>
              ) : (
                <main>
                  <Hero />
                  <About />
                  <ProjectsNew />
                  <Technologies />
                  <Experience />
                  <Contact />
                </main>
              )}
              <Footer path={pathname} />
            </div>
          </div>
        </AudienceViewProvider>
      </LanguageProvider>
    </HydrationProvider>
  );
};

export default App;
