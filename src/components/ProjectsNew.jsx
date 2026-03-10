import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../data/projectsData';
import { X } from 'lucide-react';

const ProjectsNew = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const builtProjects = projects.filter(project => project.category === 'built');
  const qaProjects = projects.filter(project => project.category === 'qa');
  const allProjects = projects;

  const getCurrentProjects = () => {
    switch (activeTab) {
      case 'Built':
        return builtProjects;
      case 'QA':
        return qaProjects;
      default:
        return allProjects;
    }
  };

  const currentProjects = getCurrentProjects();

  const openDrawer = (project) => {
    setSelectedProject(project);
  };

  const closeDrawer = () => {
    setSelectedProject(null);
  };

  // 3D Card Component
  const ProjectCard = ({ project, index }) => {
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
        layout
        initial={{ opacity: 0, scale: 0.8 }}
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
        className="bg-neutral-900 rounded-lg overflow-hidden cursor-pointer group relative"
        onClick={() => openDrawer(project)}
      >
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-400 transition-colors">
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
    <div id="projects" className="section-spacing border-b border-neutral-900">
      {/* Section Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="section-heading-spacing text-center"
      >
            <h2 className="section-heading-tone mb-4">Projects.</h2>
            <p className="body-text-tone">Explore my recent work in development and QA.</p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 flex justify-center"
      >
        <div className="flex bg-neutral-900 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 sm:px-6 py-3 rounded-md transition-all duration-300 ${
              activeTab === 'All'
                ? 'bg-teal-400 text-neutral-900 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('Built')}
            className={`px-4 sm:px-6 py-3 rounded-md transition-all duration-300 ${
              activeTab === 'Built'
                ? 'bg-teal-400 text-neutral-900 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Built
          </button>
          <button
            onClick={() => setActiveTab('QA')}
            className={`px-4 sm:px-6 py-3 rounded-md transition-all duration-300 ${
              activeTab === 'QA'
                ? 'bg-teal-400 text-neutral-900 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            QA
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence>
          {currentProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

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
              className="fixed right-0 top-0 h-full w-full sm:max-w-2xl bg-neutral-900 z-50 overflow-y-auto"
            >
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedProject.title}</h2>
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
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                      {selectedProject.gallery.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-40 sm:w-48 rounded-xl overflow-hidden bg-neutral-800 hover:bg-neutral-700 transition-colors"
                        >
                          <img
                            src={imgSrc}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
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
                        className="w-full max-w-[90%] mx-auto rounded-xl shadow-lg object-contain aspect-video transition-all duration-300 hover:shadow-xl"
                      />
                    </div>
                  )}
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">About</h3>
                  <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.about}
                  </p>
                </div>

                {/* Build / Impact Section (optional) */}
                {selectedProject.build && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">Build</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.build}
                    </p>
                  </div>
                )}

                {/* Testing Focus (QA-specific, optional) */}
                {selectedProject.testingFocus && selectedProject.testingFocus.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">Testing Focus</h3>
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
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Platforms</h3>
                        <p className="text-neutral-300 text-sm sm:text-base">
                          {selectedProject.platforms}
                        </p>
                      </div>
                    )}
                    {selectedProject.devices && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Devices</h3>
                        <p className="text-neutral-300 text-sm sm:text-base">
                          {selectedProject.devices}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Technologies Used</h3>
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
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Links</h3>
                  {selectedProject.links && selectedProject.links.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
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
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-teal-400 text-neutral-900 font-semibold rounded-lg hover:bg-teal-300 transition-colors text-sm sm:text-base"
                    >
                      Open Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsNew;
