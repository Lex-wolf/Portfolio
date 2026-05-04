import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../data/projectsData';
import { X } from 'lucide-react';
import { useHydrated } from '../context/HydrationContext';
import { useLanguage } from '../context/LanguageContext';
import { useAudienceView } from '../context/AudienceViewContext';
import {
  QA_AUDIENCE_PROJECT_TITLES,
  WEB_AUDIENCE_PROJECT_TITLES,
} from '../constants/audienceFilters';

const MOBILE_PROJECTS_INITIAL = 4;

const ProjectsNew = () => {
  const hydrated = useHydrated();
  const { t } = useLanguage();
  const { audience } = useAudienceView();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const audienceProjects = useMemo(() => {
    const set = audience === 'qa' ? QA_AUDIENCE_PROJECT_TITLES : WEB_AUDIENCE_PROJECT_TITLES;
    return projects.filter((p) => set.has(p.title));
  }, [audience]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setMobileExpanded(false);
  }, [audience]);

  useEffect(() => {
    if (!selectedProject) return;
    if (!audienceProjects.some((p) => p.id === selectedProject.id)) {
      setSelectedProject(null);
    }
  }, [audience, audienceProjects, selectedProject]);

  const drawerScrollLockKey = selectedProject ? "open" : "closed";

  useEffect(() => {
    if (drawerScrollLockKey === "closed") {
      return undefined;
    }

    const scrollY = window.scrollY;
    document.body.dataset.scrollY = String(scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const savedY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, savedY);
    };
  }, [drawerScrollLockKey]);

  const currentProjects = audienceProjects;

  const visibleProjects =
    isMobile && !mobileExpanded
      ? currentProjects.slice(0, MOBILE_PROJECTS_INITIAL)
      : currentProjects;

  const showMobileLoadControls =
    isMobile && currentProjects.length > MOBILE_PROJECTS_INITIAL;

  const openDrawer = (project) => {
    setSelectedProject(project);
  };

  const closeDrawer = () => {
    setSelectedProject(null);
  };

  // 3D Card Component
  const ProjectCard = ({ project, index }) => {
    const cardHydrated = useHydrated();
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 10 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 10 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
      if (!cardRef.current || isMobile) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        x.set(0);
        y.set(0);
      }
    };

    return (
      <motion.div
        ref={cardRef}
        layout={!isMobile}
        initial={cardHydrated ? { opacity: 0, scale: 0.8 } : false}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ 
          scale: isMobile ? 1.03 : 1.03,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
        style={!isMobile ? {
          rotateY: rotateY,
          rotateX: rotateX,
          transformStyle: "preserve-3d",
        } : {}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900"
        onClick={() => openDrawer(project)}
      >
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-base font-semibold transition-colors group-hover:text-teal-400 sm:text-lg">
            {project.title}
          </h3>
          <p className="body-text-tone overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {project.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-spacing border-b border-neutral-900">
      {/* Section Header */}
      <motion.div
        whileInView={hydrated ? { opacity: 1, y: 0 } : undefined}
        initial={hydrated ? { opacity: 0, y: -100 } : false}
        animate={!hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5 }}
        className="section-heading-spacing text-center"
      >
            <h2 className="section-heading-tone mb-4">{t('projects.heading')}</h2>
            <p className="body-text-tone">{t('projects.subheading')}</p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout={!isMobile}
        className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {showMobileLoadControls ? (
        <div className="mt-8 flex justify-center md:hidden">
          {!mobileExpanded ? (
            <button
              type="button"
              onClick={() => setMobileExpanded(true)}
              className="min-h-[48px] rounded-lg border border-white/15 bg-neutral-900/80 px-6 py-3 text-sm font-semibold text-base-light transition-colors hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
            >
              {t('projects.loadMore')}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setMobileExpanded(false)}
              className="min-h-[48px] rounded-lg border border-white/15 bg-neutral-900/80 px-6 py-3 text-sm font-semibold text-base-light transition-colors hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
            >
              {t('projects.loadLess')}
            </button>
          )}
        </div>
      ) : null}

      {/* Side Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeDrawer}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-neutral-900 sm:max-w-2xl"
            >
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div className="flex-1 pr-4">
                    <h2 className="mb-2 text-xl font-bold sm:text-3xl">{selectedProject.title}</h2>
                    <p className="text-teal-400 text-base sm:text-lg">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="p-2 hover:bg-neutral-800 rounded-full transition-colors flex-shrink-0"
                  >
                    <X size={24} className="text-neutral-400" />
                  </button>
                </div>

                {/* Gallery or Single Image */}
                <div className="mb-6">
                  {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <div className="-mx-2 flex gap-3 overflow-x-auto px-2 pb-2">
                      {selectedProject.gallery.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="w-32 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-800 transition-colors hover:bg-neutral-700 sm:w-48"
                        >
                          <img
                            src={imgSrc}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={384}
                            height={216}
                            sizes="(max-width: 640px) 8rem, 12rem"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        width={800}
                        height={450}
                        sizes="(max-width: 640px) 100vw, 36rem"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="mx-auto aspect-video w-full max-w-full rounded-xl object-contain shadow-lg transition-all duration-300 hover:shadow-xl sm:max-w-[90%]"
                      />
                    </div>
                  )}
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{t('projects.drawer.about')}</h3>
                  <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.about}
                  </p>
                </div>

                {/* Build / Impact Section (optional) */}
                {selectedProject.build && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{t('projects.drawer.build')}</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.build}
                    </p>
                  </div>
                )}

                {/* Testing Focus (QA-specific, optional) */}
                {selectedProject.testingFocus && selectedProject.testingFocus.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{t('projects.drawer.testingFocus')}</h3>
                    <ul className="list-disc list-inside space-y-1 text-neutral-300 text-sm sm:text-base">
                      {selectedProject.testingFocus.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Platforms & Devices (optional) */}
                {(selectedProject.platforms || selectedProject.devices) && (
                  <div className="mb-6 grid gap-4 sm:grid-cols-2">
                    {selectedProject.platforms && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('projects.drawer.platforms')}</h3>
                        <p className="text-neutral-300 text-sm sm:text-base">
                          {selectedProject.platforms}
                        </p>
                      </div>
                    )}
                    {selectedProject.devices && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('projects.drawer.devices')}</h3>
                        <p className="text-neutral-300 text-sm sm:text-base">
                          {selectedProject.devices}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{t('projects.drawer.technologiesUsed')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-800 text-teal-400 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{t('projects.drawer.links')}</h3>
                  {selectedProject.links && selectedProject.links.length > 0 ? (
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {selectedProject.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors sm:px-6 sm:text-base ${
                            link.primary
                              ? "bg-teal-400 text-neutral-900 hover:bg-teal-300"
                              : "bg-neutral-800 text-teal-400 hover:bg-neutral-700"
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-4 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-teal-300 sm:px-6 sm:text-base"
                    >
                      {t('projects.drawer.openProject')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsNew;
