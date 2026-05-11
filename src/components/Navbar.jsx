import { useEffect, useState } from "react";

function applyThemeFavicon(theme) {
  const el = document.getElementById("portfolio-favicon");
  if (!el) return;
  el.href = theme === "light" ? "/favicon-light.svg" : "/favicon-dark.svg";
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.dataset.theme = storedTheme;
    applyThemeFavicon(storedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    applyThemeFavicon(nextTheme);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#top" className="logo">
          alex<span className="dot">.</span>curiel
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#technologies" className="nav-link" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
          </button>

          <button type="button" className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen((prev) => !prev)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
