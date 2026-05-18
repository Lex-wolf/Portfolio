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
        { abbr: "Fm", name: "Framer Motion" },
      ],
    },
    {
      name: "QA & Automation",
      items: [
        { abbr: "Pw", name: "Playwright" },
        { abbr: "Ap", name: "Appium" },
        { abbr: "Pm", name: "Postman" },
        { abbr: "Gh", name: "GitHub Actions" },
        { abbr: "Tf", name: "TestFlight" },
        { abbr: "Ax", name: "axe-core" },
        { abbr: "Vo", name: "VoiceOver" },
        { abbr: "Lh", name: "Lighthouse" },
        { abbr: "Wc", name: "WCAG 2.2" },
        { abbr: "Cp", name: "CPACC" },
        { abbr: "Sc", name: "Screen Readers" },
        { abbr: "Xc", name: "Xcode" },
      ],
    },
    {
      name: "Tools & Deployment",
      items: [
        { abbr: "Sh", name: "Shopify" },
        { abbr: "Sa", name: "Storefront API" },
        { abbr: "Sb", name: "Supabase" },
        { abbr: "Sq", name: "SQL" },
        { abbr: "Ve", name: "Vercel" },
        { abbr: "Cf", name: "Cloudflare" },
        { abbr: "Gh", name: "GitHub Actions" },
        { abbr: "Jr", name: "JIRA" },
        { abbr: "Cu", name: "ClickUp" },
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
          <div className="tech-group" key={cat.name}>
            <div className="tech-cat">{cat.name}</div>
            <div className="tech-grid">
              {cat.items.map((item) => (
                <div className="tech-item" key={`${cat.name}-${item.name}`}>
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
