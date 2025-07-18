import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Broad Peak Systems",
      location: "Remote",
      period: "08/2024 - Present",
      achievements: [
        "Built and deployed data dashboards using Tableau and Python (Plotly, Matplotlib) to visualize operational KPIs and customer behavior metrics, enabling leadership to identify trends and make faster, informed decisions.",
        "Developed and optimized complex SQL queries and stored procedures across MySQL and SQL Server databases, enabling accurate extraction and transformation of multi-source datasets for reporting automation.",
        "Created end-to-end ETL workflows using Python and Pandas to clean, merge, and prepare large-scale datasets from internal systems and third-party APIs, reducing manual data processing time by 60%.",
        "Automated reporting pipelines using Python and scheduling tools, delivering weekly and monthly analytics reports to stakeholders, and minimizing reporting errors.",
        "Performed root cause analysis on data anomalies and business issues through correlation studies and trend modeling, uncovering insights that led to a 20% improvement in sales forecasting accuracy.",
        "Collaborated with data engineers, product managers, and UX designers to define metrics, gather business requirements, and translate analytics findings into actionable business strategies.",
        "Implemented data integrity and version control best practices using Git and documentation via Confluence, supporting transparent and reproducible analytics processes.",
        "Utilized AWS services (S3, EC2, Lambda) for storing and processing large datasets in the cloud, enabling on-demand scalability for analytics workloads and improving data availability across departments."
      ]
    },
    {
      title: "Data Engineer",
      company: "Cognizant Technology Solutions Pvt. Ltd.",
      location: "Hyderabad, IN",
      period: "07/2020 - 07/2022",
      achievements: [
        "Designed and maintained SQL queries and stored procedures to extract and validate large datasets from MySQL and SQL Server, supporting business performance dashboards used by leadership for strategic decisions.",
        "Developed automated ETL pipelines using Python (Pandas, NumPy) to cleanse, transform, and merge structured/unstructured data, reducing manual data preparation time by 50% and improving accuracy in monthly reports.",
        "Created dynamic Tableau dashboards to visualize key business metrics such as customer churn, revenue trends, and sales performance, resulting in a 25% improvement in data-driven decision-making speed across departments.",
        "Conducted exploratory data analysis (EDA) and statistical modeling using Python (Seaborn, Matplotlib, Scikit-learn) to uncover trends and anomalies in product usage data, informing UX design changes that boosted engagement by 15%.",
        "Led data quality audits and implemented validation checks using SQL scripts and conditional logic, identifying data inconsistencies and improving overall reporting accuracy by 30%.",
        "Collaborated with cross-functional teams (product managers, marketing, and IT) to gather data requirements, develop KPIs, and deliver customized visualizations and reports that aligned with operational goals.",
        "Deployed and monitored data analysis solutions on AWS (EC2, S3) to ensure scalability and security of data reporting pipelines, supporting remote data access for analytics teams across multiple geographies.",
        "Documented data definitions, report specifications, and process workflows in Confluence and Jira, standardizing knowledge transfer and enabling quicker onboarding of new analysts."
      ]
    },
    {
      title: "Java Full Stack Intern",
      company: "Cognizant Technology Solutions Pvt. Ltd.",
      location: "Hyderabad, IN",
      period: "07/2019 - 05/2020",
      achievements: [
        "Contributed to all stages of the SDLC, from requirements gathering and design to deployment and maintenance, ensuring smooth delivery of software features. Applied Java and Spring Boot for backend development and feature implementation.",
        "Utilized SQL and Hibernate ORM frameworks to design, query, and manage databases, enabling efficient data storage and retrieval. Developed database schemas and optimized queries for improved application performance.",
        "Implemented automated build and deployment pipelines using Jenkins and GitLab CI, enabling smooth integration and faster delivery cycles. Ensured code integrity through automated tests during the CI process.",
        "Managed source code using Git, performing tasks like branching, merging, and resolving conflicts to maintain organized and clean code repositories. Collaborated with team members on GitHub or GitLab to review code and manage pull requests."
      ]
    }
  ];

  return (
    <section className="section-padding bg-netflix-black">
      <div className="container-custom text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-netflix-red">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-netflix-red"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 text-left"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-netflix-red rounded-full border-4 border-netflix-black z-10 ${
                index % 2 === 0 ? 'md:-translate-x-2' : 'md:translate-x-2'
              }`}></div>

              {/* Content */}
              <div className="ml-12 md:ml-0">
                <div className="glass-effect p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-netflix-red mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <span className="text-netflix-light-gray text-sm">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <p className="text-xl text-netflix-white font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-netflix-gray">
                      {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-netflix-gray leading-relaxed flex items-start"
                      >
                        <span className="text-netflix-red mr-2 mt-1">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 