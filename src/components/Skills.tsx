import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "C++", "Python", "C", "TypeScript"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL Server", "JDBC", "NoSQL", "MongoDB"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML/HTML5", "CSS3", "JavaScript", "AJAX", "jQuery", "JSON", "Bootstrap"]
    },
    {
      category: "Frameworks & Back-End",
      skills: ["Spring Boot", "Angular", "Docker", "Hibernate", "Kubernetes", "Node.js", "Express.js"]
    },
    {
      category: "Cloud Platforms & Tools",
      skills: ["AWS", "Git", "GitHub", "GitLab", "Jenkins", "JIRA", "Confluence"]
    },
    {
      category: "Development Tools",
      skills: ["Visual Studio Code", "IntelliJ", "Eclipse", "Spring Tool Suite", "Postman", "SOAP UI"]
    }
  ];

  return (
    <section className="section-padding bg-netflix-dark-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-netflix-red">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-netflix-red mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-netflix-red bg-opacity-20 border border-netflix-red rounded-full text-sm text-netflix-white hover:bg-netflix-red hover:bg-opacity-30 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-netflix-white mb-6">
            Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Agile/Scrum", "Waterfall"].map((methodology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-netflix-red text-white rounded-lg font-semibold"
              >
                {methodology}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Operating Systems */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-netflix-white mb-6">
            Operating Systems
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Windows", "Mac", "Linux"].map((os, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 glass-effect border border-netflix-red rounded-lg font-semibold text-netflix-white"
              >
                {os}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 