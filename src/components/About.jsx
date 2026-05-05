import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const skills = [
    { name: "Playwright Automation", pct: 95 },
    { name: "Mobile QA · iOS / Android", pct: 92 },
    { name: "WCAG 2.2 / Accessibility", pct: 90 },
    { name: "React + Vite Frontends", pct: 88 },
    { name: "GitHub Actions / CI", pct: 85 },
    { name: "Shopify QA & Storefront API", pct: 82 },
  ];

  return (
    <section id="about" className="about reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">01 / About</div>
            <h2>{t("about.heading")}</h2>
          </div>
          <p>QA contracts and web development clients. The same person, two outputs.</p>
        </div>
        <div className="about-grid">
          <div className="about-body">
            <p>{t("about.body")}</p>
            <div className="about-meta">
              <div><span className="k">BASED</span><strong>MEXICO CITY</strong></div>
              <div><span className="k">WORKING</span><strong>WORLDWIDE · REMOTE</strong></div>
              <div><span className="k">LANGUAGES</span><strong>EN · ES · PT</strong></div>
              <div><span className="k">CERT</span><strong>CPACC · WCAG 2.2</strong></div>
            </div>
          </div>
          <div className="skill-list">
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>SKILLS</div>
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <span className="label">{s.name}</span>
                <span className="pct">{s.pct}%</span>
                <div className="bar"><span style={{ width: `${s.pct}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
