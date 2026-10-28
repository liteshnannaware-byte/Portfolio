import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Data Analyst Intern',
      company: 'Aeromotive Technologies',
      period: '03/2026 – 09/2026',
      type: 'Internship',
      points: [
        'Extracted, cleaned, transformed, and analyzed relational datasets using high-performance SQL queries.',
        'Engineered dynamic Microsoft Power BI dashboards featuring multi-tier KPI cards, custom visualizations, and DAX measures.',
        'Leveraged Python (Pandas/NumPy) for automated data munging, exploratory analysis, and stakeholder reporting.',
        'Identified emerging business and sales trends to generate actionable intelligence for management.'
      ],
      skills: ['SQL', 'Power BI', 'DAX', 'Python', 'Pandas', 'Business Intelligence', 'KPI Dashboards']
    }
  ];

  const education = [
    {
      degree: 'B.Tech – Computer Science and Engineering',
      institution: 'G.H. Raisoni College of Engineering and Management, Jalgaon',
      period: '2022 – 2026',
      score: 'CGPA: 7.24 / 10.0',
      description: 'Comprehensive study of Computer Science fundamentals, Database Management Systems (DBMS), Data Structures, Algorithms, Advanced SQL, and Analytical Problem Solving.'
    }
  ];

  return (
    <section id="experience" className="bg-[#08080c] text-white py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-red-500/10">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <span className="inline-block text-xs font-bold text-[#ff2a2a] uppercase tracking-widest px-4 py-1.5 bg-red-950/60 border border-red-800/40 rounded-full mb-3">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
            My professional background in data analytics alongside academic foundations in Computer Science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-[#ff2a2a] flex items-center justify-center text-white shadow-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#171923] border border-white/10 rounded-3xl p-7 relative hover:border-red-500/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-xl font-black text-white">{exp.role}</h4>
                      <p className="text-red-400 font-bold text-sm">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-gray-300">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mt-5 mb-6">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#ff2a2a] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#171923] border border-white/10 rounded-3xl p-7 relative hover:border-red-500/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-xl font-black text-white">{edu.degree}</h4>
                      <p className="text-gray-300 font-semibold text-xs sm:text-sm mt-1">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff2a2a] text-white">
                      {edu.period}
                    </span>
                  </div>

                  <div className="inline-block my-3 px-3 py-1 rounded-lg bg-white/10 text-red-300 font-mono text-xs font-bold border border-white/10">
                    {edu.score}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2">
                    {edu.description}
                  </p>
                </motion.div>
              ))}

              {/* Analytical Highlights Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-red-950/40 via-black to-[#171923] border border-red-500/20">
                <div className="flex items-center gap-2 text-sm font-black text-white mb-2">
                  <Award className="w-4 h-4 text-[#ff2a2a]" />
                  <span>Key Strengths & Approach</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Passionate about end-to-end data pipelines: exploring raw sources, structuring SQL models, defining calculated DAX metrics, and translating findings into intuitive visual stories that executives love.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
