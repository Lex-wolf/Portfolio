import React from "react";
import { QA_PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useHydrated } from "../context/HydrationContext";

const QAProjects = () => {
  const hydrated = useHydrated();
  // If no QA projects exist
  if (!QA_PROJECTS || QA_PROJECTS.length === 0) {
    return (
      <section className="my-20 text-center">
        <h2 className="text-4xl">
          QA <span className="text-neutral-500">Projects</span>
        </h2>
        <p className="mt-4 text-neutral-400">No QA projects to display yet.</p>
      </section>
    );
  }

  return (
    <section className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={hydrated ? { opacity: 1, y: 0 } : undefined}
        initial={hydrated ? { opacity: 0, y: -100 } : false}
        animate={!hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-neutral-500 text-white"> QA Projects</span>
      </motion.h2>

      <div>
        {QA_PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              whileInView={hydrated ? { opacity: 1, x: 0 } : undefined}
              initial={hydrated ? { opacity: 0, x: -100 } : false}
              animate={!hydrated ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded object-cover"
                  style={{ width: "180px", height: "150px" }}
                />
              </a>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={hydrated ? { opacity: 1, x: 0 } : undefined}
              initial={hydrated ? { opacity: 0, x: 100 } : false}
              animate={!hydrated ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies &&
                  project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QAProjects;
