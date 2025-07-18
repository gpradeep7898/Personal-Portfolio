import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const summary = "Analytical and results-driven Data Analyst with 4.5+ years of experience transforming raw data into actionable business insights. Skilled in SQL, Python, Tableau, and Excel to conduct data wrangling, statistical analysis, and dynamic visualization. Adept at designing ETL pipelines, developing interactive dashboards, and translating complex datasets into clear narratives for decision-makers. Proficient in working with relational and NoSQL databases (MySQL, SQL Server, MongoDB) and deploying analytics solutions on cloud platforms like AWS. Proven success collaborating with cross-functional teams in Agile environments to support data-driven strategies that improve operational efficiency and business outcomes. Tableau Specialist certified, with a strong foundation in programming and a passion for converting data into strategic value.";

  const education = [
    {
      degree: "Master of Science in Information Systems",
      school: "Stevens Institute of Technology, USA",
      year: "05/2024"
    },
    {
      degree: "B. Tech in Information Technology",
      school: "Sree Vidyanikethan Engineering College, India",
      year: "09/2020"
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
            <span className="text-netflix-red">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-netflix-white">
              Professional Summary
            </h3>
            <p className="text-netflix-gray leading-relaxed text-lg">
              {summary}
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-netflix-white">
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-netflix-red mb-2">
                  {edu.degree}
                </h4>
                <p className="text-netflix-gray mb-1">
                  {edu.school}
                </p>
                <p className="text-netflix-light-gray text-sm">
                  {edu.year}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center glass-effect p-6 rounded-lg">
            <div className="text-4xl font-bold text-netflix-red mb-2">4.5+</div>
            <p className="text-netflix-gray">Years of Experience</p>
          </div>
          <div className="text-center glass-effect p-6 rounded-lg">
            <div className="text-4xl font-bold text-netflix-red mb-2">60%</div>
            <p className="text-netflix-gray">Data Processing Time Reduction</p>
          </div>
          <div className="text-center glass-effect p-6 rounded-lg">
            <div className="text-4xl font-bold text-netflix-red mb-2">20%</div>
            <p className="text-netflix-gray">Sales Forecasting Improvement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 