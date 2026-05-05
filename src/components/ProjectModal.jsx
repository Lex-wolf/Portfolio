import { useEffect } from "react";
import { createPortal } from "react-dom";

const ProjectModal = ({ project, onClose, t }) => {
  useEffect(() => {
    if (!project) return undefined;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <span className="eyebrow no-line" style={{ color: "var(--text-muted)" }}>
            {project.category === "qa" ? "QUALITY ASSURANCE" : "FRONTEND BUILD"}
          </span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="modal-content">
            <h2>{project.title}</h2>
            <div className="modal-section">
              <h4>{t("projects.drawer.about")}</h4>
              <p>{project.about}</p>
            </div>
            {project.build ? (
              <div className="modal-section">
                <h4>{t("projects.drawer.build")}</h4>
                <p>{project.build}</p>
              </div>
            ) : null}
            {project.testingFocus ? (
              <div className="modal-section">
                <h4>{t("projects.drawer.testingFocus")}</h4>
                <div className="modal-tags">
                  {project.testingFocus.map((item) => (
                    <span key={item} className="proj-tag">{item}</span>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="modal-section">
              <h4>{t("projects.drawer.technologiesUsed")}</h4>
              <div className="modal-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="proj-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="modal-section">
              <h4>{t("projects.drawer.links")}</h4>
              {project.links && project.links.length > 0 ? project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="modal-cta" style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
                  {link.label}
                </a>
              )) : (
                <a href={project.website} target="_blank" rel="noreferrer" className="modal-cta">
                  {t("projects.drawer.openProject")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
