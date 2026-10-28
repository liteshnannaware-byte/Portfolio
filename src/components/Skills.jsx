import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'Data Analytics & Visualization',
      skills: ['Microsoft Power BI', 'DAX Measures', 'Power Query ETL', 'Data Storytelling', 'Data Modeling', 'Interactive KPI Dashboards', 'Calculated Columns', 'Executive Reports'],
    },
    {
      category: 'SQL & Database Querying',
      skills: ['SQL', 'MySQL', 'Data Cleaning', 'Data Transformation', 'CTEs', 'Subqueries', 'Multi-Table Joins', 'Window Functions', 'Database Views', 'Relational Schemas'],
    },
    {
      category: 'Python for Data Analysis',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'BeautifulSoup', 'Exploratory Data Analysis (EDA)', 'Web Scraping', 'Data Cleaning Scripts'],
    },
    {
      category: 'ETL & Data Modeling',
      skills: ['Star Schema', 'Data Normalization', 'Automated Data Refresh', 'KPI Frameworks', 'Data Quality Validation', 'Business Logic Mapping', 'Aggregations'],
    },
    {
      category: 'Business Intelligence Strategy',
      skills: ['Executive Reporting', 'Sales Performance Tracking', 'Cohort Analysis', 'Customer Segmentation', 'Stakeholder Communication', 'Analytical Problem Solving', 'Decision Support'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skillPillVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const SkillCard = ({ category, skills, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -6,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
        className="group relative bg-[#121217] border border-white/10 rounded-3xl p-6 h-fit shadow-xl hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(255,42,42,0.18)] transition-all duration-500"
      >
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none" />

        {/* Card content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-black text-white tracking-tight group-hover:text-red-400 transition-colors">
              {category}
            </h3>
            <span className="text-[10px] font-mono font-bold text-[#ff2a2a] bg-red-950/60 px-2.5 py-0.5 rounded-full border border-red-500/30">
              {skills.length} Skills
            </span>
          </div>

          {/* Skills pills container */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <motion.button
                key={idx}
                variants={skillPillVariants}
                initial="initial"
                whileHover="hover"
                className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-black/60 hover:bg-[#ff2a2a] hover:text-white border border-white/10 hover:border-[#ff2a2a] rounded-full transition-all duration-300 cursor-default select-none shadow-sm"
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative w-full bg-[#08080c] py-20 md:py-28 overflow-hidden text-white border-t border-white/5">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,42,42,.02)_25%,rgba(255,42,42,.02)_26%,transparent_27%,transparent_74%,rgba(255,42,42,.02)_75%,rgba(255,42,42,.02)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(255,42,42,.02)_25%,rgba(255,42,42,.02)_26%,transparent_27%,transparent_74%,rgba(255,42,42,.02)_75%,rgba(255,42,42,.02)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-mono font-bold text-[#ff2a2a] uppercase tracking-widest px-4 py-1.5 bg-red-950/60 border border-red-500/30 rounded-full">
              Technical Stack & Domain Knowledge
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Tools & Technical Competencies
          </h2>

          <p className="text-sm md:text-base text-gray-400 font-medium max-w-2xl">
            From raw database extraction with SQL to analytical modeling in Python and executive Power BI dashboards.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard
              key={idx}
              category={item.category}
              skills={item.skills}
              index={idx}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-48 h-48 bg-[#ff2a2a] rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-5 w-56 h-56 bg-[#ff2a2a] rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default Skills;