import { useLanguage } from "../context/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();
  const categories = [
    {
      name: "Development",
      items: [
        { abbr: "Re", name: "React" },
        { abbr: "Vt", name: "Vite" },
        { abbr: "Tw", name: "Tailwind" },
        { abbr: "Ts", name: "TypeScript" },
        { abbr: "Js", name: "JavaScript" },
        { abbr: "Nd", name: "Node.js" },
      ],
    },
    {
      name: "QA & Automation",
      items: [
        { abbr: "Pw", name: "Playwright" },
        { abbr: "Pm", name: "Postman" },
        { abbr: "Gh", name: "GitHub Actions" },
        { abbr: "Jr", name: "JIRA" },
        { abbr: "Cu", name: "ClickUp" },
        { abbr: "Tf", name: "TestFlight" },
      ],
    },
    {
      name: "Accessibility",
      items: [
        { abbr: "Ax", name: "axe-core" },
        { abbr: "Vo", name: "VoiceOver" },
        { abbr: "Lh", name: "Lighthouse" },
        { abbr: "Wc", name: "WCAG 2.2" },
        { abbr: "Cp", name: "CPACC" },
        { abbr: "Sc", name: "Screen Readers" },
      ],
    },
    {
      name: "Backend",
      items: [
        { abbr: "Sh", name: "Shopify" },
        { abbr: "Sa", name: "Storefront API" },
        { abbr: "Sq", name: "SQL" },
        { abbr: "Xc", name: "Xcode" },
        { abbr: "Ve", name: "Vercel" },
        { abbr: "Fm", name: "Framer Motion" },
      ],
    },
  ];

  return (
    <section id="technologies" className="tech-section reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">03 / Technologies</div>
            <h2>{t("technologies.heading")}</h2>
          </div>
          <p>{t("technologies.subheading")}</p>
        </div>
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="tech-cat">{cat.name}</div>
            <div className="tech-grid">
              {cat.items.map((item) => (
                <div className="tech-item" key={item.name}>
                  <div className="tech-icon">{item.abbr}</div>
                  <div className="tech-label">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
