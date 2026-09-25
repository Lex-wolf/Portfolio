import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

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

const Navbar = ({ path = "/" }) => {
  const onHome = path === "/";
  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`);
  const { lang, setLang, t } = useLanguage();
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
        <a href={onHome ? "#top" : "/"} className="logo">
          alex<span className="dot">.</span>curiel
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href={sectionHref("projects")} className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.workLink")}</a>
          <a href={sectionHref("about")} className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.about")}</a>
          <a href={sectionHref("technologies")} className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.stack")}</a>
          <a href={sectionHref("experience")} className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.experience")}</a>
          <a href={sectionHref("contact")} className="nav-link" onClick={() => setMenuOpen(false)}>{t("nav.contactLink")}</a>
          <a
            href="/websites"
            className="nav-link"
            aria-current={path === "/websites" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.websites")}
          </a>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            <span className="theme-toggle-label">{theme === "dark" ? "LIGHT" : "DARK"}</span>
          </button>

          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "active" : undefined}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "es" ? "active" : undefined}
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              aria-label="Español"
            >
              ES
            </button>
            <button
              type="button"
              className={lang === "pt" ? "active" : undefined}
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              aria-label="Português"
            >
              PT
            </button>
          </div>

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
