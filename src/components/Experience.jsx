import { EXPERIENCES } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const experienceRoles = t("experience.roles");

  return (
    <section id="experience" className="experience reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">04 / Experience</div>
            <h2>{t("experience.heading")}</h2>
          </div>
        </div>
        <div className="exp-list">
          {experienceRoles && experienceRoles.length > 0 ? experienceRoles.map((role, index) => {
            const technologies = EXPERIENCES[index]?.technologies ?? [];
            return (
              <div key={index} className="exp-row">
                <div className="exp-year">{role.year}</div>
                <div>
                  <h3 className="exp-title">{role.title}</h3>
                  <div className="exp-company">{role.company}</div>
                  <ul className="exp-bullets">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="proj-tags">
                    {technologies.map((tech, idx) => (
                      <span key={idx} className="exp-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }) : (
            <div style={{ color: "var(--text-secondary)", padding: "1rem 0" }}>
              <p>{t("experience.empty")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
