import { useEffect } from "react";
import headshot from "../assets/headshot-2026.png";
import { useLanguage } from "../context/LanguageContext";
import { useAudienceView } from "../context/AudienceViewContext";
import AudienceToggle from "./AudienceToggle";

const Hero = () => {
  const { t } = useLanguage();
  const { audience } = useAudienceView();

  useEffect(() => {
    const els = document.querySelectorAll(".hero [data-stagger]");
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-orb" />
      <div className="hero-orb b" />
      <div className="container hero-inner">
        <div className="hero-grid">
          <div>
            <div className="eyebrow hero-eyebrow" data-stagger>PORTFOLIO · 2026</div>
            <h1 data-stagger>Alejandro Curiel</h1>
            <div data-stagger>
              <AudienceToggle />
            </div>

            <p className="hero-subtitle" data-stagger>{audience === "web" ? t("hero.subtitleWeb") : t("hero.subtitleQa")}</p>
            <p className="hero-body" data-stagger>{audience === "web" ? t("hero.line1Web") : t("hero.line1")}</p>
            <p className="hero-body" data-stagger>{audience === "web" ? t("hero.line2Web") : t("hero.line2")}</p>

            <div className="chips" data-stagger>
              {(audience === "web"
                ? ["React", "Vite", "Tailwind", "Shopify Storefront API", "Node.js", "TypeScript", "Vercel"]
                : ["Playwright", "GitHub Actions", "Shopify", "WCAG 2.2", "Postman", "iOS / Android", "CPACC"]).map((chip) => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>

            <div className="cta-row" data-stagger>
              <a className="btn btn-primary" href="#projects">{t("nav.work")}</a>
              <a className="btn btn-secondary" href="#contact">{t("nav.contact")}</a>
            </div>
          </div>

          <div className="portrait">
            <img src={headshot} alt="Alejandro Curiel" className="portrait-img" />
            <div className="portrait-meta">
              <span><span className="blink" />AVAILABLE</span>
              <span>MX · REMOTE</span>
            </div>
          </div>
        </div>

        <div className="hero-stats" data-stagger>
          <div>
            <div className="stat-num">10+</div>
            <div className="stat-label">{t("hero.stats.years")}</div>
          </div>
          <div>
            <div className="stat-num">100+</div>
            <div className="stat-label">{t("hero.stats.releases")}</div>
          </div>
          <div>
            <div className="stat-num">CPACC</div>
            <div className="stat-label">{t("hero.stats.hybrid")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
