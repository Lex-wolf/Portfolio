import { useEffect, useState } from "react";
import { projects } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import { useAudienceView } from "../context/AudienceViewContext";
import ProjectModal from "./ProjectModal";

/** Matches `.projects-grid` breakpoints in `index.css`. */
const GRID_BREAKPOINTS = {
  tablet: 900,
  mobile: 720,
};
const PREVIEW_ROWS = 4;

function getProjectGridColumns(width) {
  if (width <= GRID_BREAKPOINTS.mobile) return 1;
  if (width <= GRID_BREAKPOINTS.tablet) return 2;
  return 3;
}

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
  const { audience } = useAudienceView();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState(() => (audience === "web" ? "built" : "all"));
  const [gridColumns, setGridColumns] = useState(() =>
    getProjectGridColumns(typeof window !== "undefined" ? window.innerWidth : 1200),
  );
  const [listExpanded, setListExpanded] = useState(false);
  const filteredProjects = (filter === "all" ? projects : projects.filter((p) => p.category === filter))
    .slice()
    .sort(compareProjects);
  const openProject = (project) => setSelectedProject(project);

  useEffect(() => {
    const sync = () => setGridColumns(getProjectGridColumns(window.innerWidth));
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    setFilter(audience === "web" ? "built" : "all");
  }, [audience]);

  useEffect(() => {
    setListExpanded(false);
  }, [filter]);

  const previewCount = gridColumns * PREVIEW_ROWS;
  const canExpand = filteredProjects.length > previewCount;
  const visibleProjects =
    canExpand && !listExpanded ? filteredProjects.slice(0, previewCount) : filteredProjects;

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

        {canExpand ? (
          <div className="proj-expand-row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setListExpanded((prev) => !prev)}
            >
              {listExpanded ? t("projects.loadLess") : t("projects.loadMore")}
            </button>
          </div>
        ) : null}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
    </section>
  );
};

export default ProjectsNew;
