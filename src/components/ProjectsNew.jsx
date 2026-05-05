import { useState } from "react";
import { projects } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import ProjectModal from "./ProjectModal";

const ProjectsNew = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const openProject = (project) => setSelectedProject(project);

  return (
    <section id="projects" className="projects reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">02 / Projects</div>
            <h2>{t("projects.heading")}</h2>
          </div>
          <div className="proj-tabs">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>{t("projects.tabs.all")}</button>
            <button className={filter === "built" ? "active" : ""} onClick={() => setFilter("built")}>{t("projects.tabs.built")}</button>
            <button className={filter === "qa" ? "active" : ""} onClick={() => setFilter("qa")}>{t("projects.tabs.qa")}</button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p) => (
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
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
    </section>
  );
};

export default ProjectsNew;
