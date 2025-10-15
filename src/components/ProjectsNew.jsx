import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectsData';
import { X } from 'lucide-react';

const ProjectsNew = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [selectedProject, setSelectedProject] = useState(null);

  const frontendProjects = projects.filter(project => project.category === 'Frontend');
  const qaProjects = projects.filter(project => project.category === 'QA');

  const currentProjects = activeTab === 'Frontend' ? frontendProjects : qaProjects;

  const openDrawer = (project) => {
    setSelectedProject(project);
  };

  const closeDrawer = () => {
    setSelectedProject(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center"
      >
        <h2 className="text-4xl mb-4">Projects.</h2>
        <p className="text-neutral-400 text-lg">Explore my recent work in development and QA.</p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="flex bg-neutral-900 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('Frontend')}
            className={`px-6 py-3 rounded-md transition-all duration-300 ${
              activeTab === 'Frontend'
                ? 'bg-teal-400 text-neutral-900 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Frontend Projects
          </button>
          <button
            onClick={() => setActiveTab('QA')}
            className={`px-6 py-3 rounded-md transition-all duration-300 ${
              activeTab === 'QA'
                ? 'bg-teal-400 text-neutral-900 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            QA Projects
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
      >
        <AnimatePresence mode="wait">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-neutral-900 rounded-lg overflow-hidden cursor-pointer group"
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
                <p className="text-neutral-400 text-sm overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {project.description}
                </p>
              </div>
            </motion.div>
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
              className="fixed right-0 top-0 h-full w-full max-w-2xl bg-neutral-900 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-teal-400 text-lg">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                  >
                    <X size={24} className="text-neutral-400" />
                  </button>
                </div>

                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">About</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedProject.about}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-800 text-teal-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Links</h3>
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-teal-400 text-neutral-900 font-semibold rounded-lg hover:bg-teal-300 transition-colors"
                  >
                    Open Project
                  </a>
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
