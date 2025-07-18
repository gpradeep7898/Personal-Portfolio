import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Illegal Drone Tracking",
      description: "Built Python pipeline analyzing 100K+ GPS logs to detect altitude/speed anomalies; achieved 98% detection accuracy via geospatial analysis.",
      technologies: ["Python", "Pandas", "GeoPandas"],
      type: "project",
      link: "https://github.com/gpradeep7898/illegal-drone-tracking"
    },
    {
      title: "MindWell Health Application",
      description: "Developed a mental health tracking platform integrating SQL insights with Tableau dashboards to visualize mood trends and care effectiveness.",
      technologies: ["SQL", "Python", "Tableau"],
      type: "project",
      link: "https://mindwell-capstone-f.onrender.com/auth"
    },
    {
      title: "Customer Segmentation KMeans",
      description: "Leveraged machine learning to segment restaurant customers into groups based on demographics, dining preferences, and spending, enabling targeted marketing strategies.",
      technologies: ["Python", "Jupyter Notebook", "scikit-learn", "KMeans"],
      type: "project",
      link: "https://github.com/gpradeep7898/customer-segmentation-kmeans"
    }
  ];

  const certifications = [
    {
      title: "Tableau Desktop Specialist",
      description: "Created KPI dashboards that improved decision-making speed by 20%.",
      technologies: ["Tableau", "Data Visualization"],
      type: "certification"
    },
    {
      title: "PMP - Project Management Professional (PMI)",
      description: "Led cross-functional analytics projects, boosting delivery efficiency by 40%.",
      technologies: ["Project Management", "Agile"],
      type: "certification"
    },
    {
      title: "Java Developer Certification",
      description: "Applied backend logic to support data workflows and integration.",
      technologies: ["Java", "Backend Development"],
      type: "certification"
    }
  ];

  const allItems = [...projects, ...certifications];

  return (
    <section className="section-padding bg-netflix-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & <span className="text-netflix-red">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto"></div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-netflix-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-netflix-red">
                    {project.title}
                  </h4>
                  <span className="px-3 py-1 bg-netflix-red text-white text-xs rounded-full">
                    Project
                  </span>
                </div>
                <p className="text-netflix-gray mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-netflix-red bg-opacity-20 border border-netflix-red rounded text-xs text-netflix-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-netflix-red hover:text-red-400 transition-colors duration-300"
                  >
                    View Live Demo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-netflix-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-lg text-center"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-netflix-red text-white text-xs rounded-full">
                    Certification
                  </span>
                </div>
                <h4 className="text-lg font-bold text-netflix-red mb-3">
                  {cert.title}
                </h4>
                <p className="text-netflix-gray text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {cert.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-netflix-red bg-opacity-20 border border-netflix-red rounded text-xs text-netflix-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-netflix-red">
                    {projects[selectedProject!].title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-netflix-gray hover:text-netflix-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-netflix-gray mb-6 leading-relaxed">
                  {projects[selectedProject!].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject!].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-netflix-red bg-opacity-20 border border-netflix-red rounded text-sm text-netflix-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {projects[selectedProject!].link && (
                  <a
                    href={projects[selectedProject!].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="netflix-button inline-flex items-center"
                  >
                    View Live Demo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 