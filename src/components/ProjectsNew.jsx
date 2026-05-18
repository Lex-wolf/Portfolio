import { useEffect, useState } from "react";
import { projects } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import ProjectModal from "./ProjectModal";

/** Matches `@media (max-width: 720px)` in `index.css` (single-column project grid). */
const MOBILE_BREAKPOINT_PX = 720;
const MOBILE_PROJECT_PREVIEW_COUNT = 4;

/** Older personal projects — always shown last (must match `projectsData.js` titles). */
const BOTTOM_PROJECT_TITLES = new Set(["Portfolio Website", "Weather App", "To Do App"]);
const BOTTOM_PROJECT_ORDER = ["Portfolio Website", "Weather App", "To Do App"];

const compareProjects = (a, b) => {
  const aBottom = BOTTOM_PROJECT_TITLES.has(a.title);
  const bBottom = BOTTOM_PROJECT_TITLES.has(b.title);
  if (aBottom !== bBottom) return aBottom ? 1 : -1;
  if (aBottom && bBottom) {
    return BOTTOM_PROJECT_ORDER.indexOf(a.title) - BOTTOM_PROJECT_ORDER.indexOf(b.title);
  }
  return b.id - a.id;
};

const ProjectsNew = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("qa");
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const [mobileListExpanded, setMobileListExpanded] = useState(false);
  const filteredProjects = (filter === "all" ? projects : projects.filter((p) => p.category === filter))
    .slice()
    .sort(compareProjects);
  const openProject = (project) => setSelectedProject(project);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`);
    const sync = () => setIsMobileLayout(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setMobileListExpanded(false);
  }, [filter]);

  const mobileTruncates =
    isMobileLayout && !mobileListExpanded && filteredProjects.length > MOBILE_PROJECT_PREVIEW_COUNT;
  const visibleProjects = mobileTruncates
    ? filteredProjects.slice(0, MOBILE_PROJECT_PREVIEW_COUNT)
    : filteredProjects;

  return (
    <section id="projects" className="projects reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">02 / Projects</div>
            <h2>{t("projects.heading")}</h2>
            <p>{t("projects.subheading")}</p>
          </div>
          <div className="proj-tabs">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>{t("projects.tabs.all")}</button>
            <button className={filter === "built" ? "active" : ""} onClick={() => setFilter("built")}>{t("projects.tabs.built")}</button>
            <button className={filter === "qa" ? "active" : ""} onClick={() => setFilter("qa")}>{t("projects.tabs.qa")}</button>
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((p) => (
            <button type="button" key={p.id} className="proj-card" onClick={() => openProject(p)}>
              <div className="proj-thumb">
                <img src={p.image} alt={p.title} />
                <div className="proj-arrow">↗</div>
              </div>
              <div className="proj-body">
                <div className="proj-icon-row">
                  <div className="proj-icon">{p.category === "qa" ? "QA" : "//"}</div>
                  <div className="proj-cat">{p.category}</div>
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <span className="proj-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {isMobileLayout && filteredProjects.length > MOBILE_PROJECT_PREVIEW_COUNT ? (
          <div className="proj-expand-row">
            {mobileListExpanded ? (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setMobileListExpanded(false)}
              >
                {t("projects.loadLess")}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setMobileListExpanded(true)}
              >
                {t("projects.seeMore")}
              </button>
            )}
          </div>
        ) : null}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
    </section>
  );
};

export default ProjectsNew;
