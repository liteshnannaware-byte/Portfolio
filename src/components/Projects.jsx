import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BarChart3, Database, Eye, CheckCircle2, X, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

import flipkartImg from '../assets/projects/flipkart_sales.png';
import bmwImg from '../assets/projects/bmw_sales.jpg';
import companyImg from '../assets/projects/company_reports.jpg';
import safeviewImg from '../assets/projects/safeview.jpg';
import hyundaiImg from '../assets/projects/hyundai_sales.jpg';
import movieImg from '../assets/projects/movie_sales.png';

const allProjectsData = [
  {
    id: 1,
    title: 'Flipkart Smartphone Sales & Web Scraping',
    category: 'Power BI',
    categoryLabel: 'Power BI & Python',
    tagline: 'End-to-end e-commerce smartphone sales analysis, automated web scraper & interactive BI dashboard',
    image: flipkartImg,
    techStack: ['Power BI', 'DAX Measures', 'Python', 'BeautifulSoup', 'Power Query', 'Data Cleaning', 'EDA'],
    metrics: [
      { label: 'Avg Price', val: '₹20.69K' },
      { label: 'Total Reviews', val: '512K' },
      { label: 'Avg Rating', val: '4.26 ★' }
    ],
    highlights: [
      'Built an automated web scraper in Python using BeautifulSoup to extract live mobile phone pricing, specifications, and customer ratings from Flipkart across 397 products.',
      'Constructed a clean tabular dataset categorized into Budget, Mid-Range, Premium, and Flagship tiers.',
      'Developed an interactive Microsoft Power BI dashboard featuring dynamic DAX measures for Average Price (₹20.69K) and Total Reviews (512K).',
      'Visualized Price by Storage capacity, Model counts by Brand (Realme, Samsung, Vivo, Motorola), and Rating distributions.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Flipkart-Smartphone-Data-Analysis'
  },
  {
    id: 2,
    title: 'BMW Sales Data Analysis (2010–2024)',
    category: 'SQL',
    categoryLabel: 'SQL & Database',
    tagline: 'Comprehensive multi-tier SQL analytics across 50,000+ BMW global sales and performance records',
    image: bmwImg,
    techStack: ['SQL', 'CTEs', 'Window Functions', 'Multi-Table Joins', 'Subqueries', 'Aggregate Functions', 'Data Modeling'],
    metrics: [
      { label: 'Records', val: '50,000+ Rows' },
      { label: 'Timeframe', val: '2010 – 2024' },
      { label: 'Focus', val: 'Fuel, Price & Mileage' }
    ],
    highlights: [
      'Engineered complex SQL queries with CTEs and window functions to extract deep vehicle sales insights from a 50,000-record dataset.',
      'Analyzed sales performance metrics across global geographic regions, fuel types (Electric, Hybrid, Petrol, Diesel), and transmission variants.',
      'Conducted pricing volatility and depreciation trend analysis correlated with vehicle mileage and model release years.',
      'Created optimized reporting views for executive management to identify high-margin vehicle segments.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Bwm-Sales-Analysis'
  },
  {
    id: 3,
    title: 'Hyundai Automatic Parts Sales & Profit Analysis',
    category: 'Power BI',
    categoryLabel: 'Power BI & Analytics',
    tagline: 'Executive Power BI dashboard with Pareto 80/20 analysis, currency conversion & profit margin KPIs',
    image: hyundaiImg,
    techStack: ['Power BI', 'DAX Measures', 'Pareto 80/20 Rule', 'Currency Conversion', 'KPI Cards', 'Drill-Downs'],
    metrics: [
      { label: 'Methodology', val: 'Pareto 80/20' },
      { label: 'Financials', val: 'Multi-Currency' },
      { label: 'Domain', val: 'Automotive Parts' }
    ],
    highlights: [
      'Developed an executive Microsoft Power BI dashboard for Hyundai automobile spare parts sales and profitability.',
      'Implemented dynamic currency conversion switchers (USD, EUR, GBP, JPY) allowing multi-national financial analysis.',
      'Integrated a Pareto 80/20 contribution chart to isolate the vital 20% of parts generating 80% of total revenue.',
      'Configured hierarchical drill-downs to track sales trends by part category, quarterly margin fluctuations, and regional volume.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Hyundai_Automatic_Parts_Sales_Analysis'
  },
  {
    id: 4,
    title: 'SafeView Smart Civilian Surveillance',
    category: 'Python',
    categoryLabel: 'Python & Video Analytics',
    tagline: 'Computer vision video analytics pipeline for automated anomaly detection and surveillance monitoring',
    image: safeviewImg,
    techStack: ['Python', 'OpenCV', 'Computer Vision', 'Video Analytics', 'Real-Time Processing', 'Anomaly Detection'],
    metrics: [
      { label: 'Language', val: 'Python & OpenCV' },
      { label: 'Latency', val: 'Real-Time Alert' },
      { label: 'Pipeline', val: 'Video Analytics' }
    ],
    highlights: [
      'Engineered an automated anomaly detection system for surveillance analytics capable of recognizing irregular activity.',
      'Processed high-throughput video streams using OpenCV frame transformations and motion tracking.',
      'Implemented automated event alert dispatching to accelerate critical incident notifications.',
      'Optimized multi-frame buffering pipelines for smooth, real-time edge computing.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Safe-View-Smart-Surveillance'
  },
  {
    id: 5,
    title: 'Company Reports Management System in SQL',
    category: 'SQL',
    categoryLabel: 'SQL & Database',
    tagline: 'Normalized relational database schema managing student, tutor, attendance & QA scorecards',
    image: companyImg,
    techStack: ['SQL', 'Relational Schema', 'JOINs', 'Database Views', 'GROUP BY', 'QA Auditing', 'Query Optimization'],
    metrics: [
      { label: 'Architecture', val: 'Relational DB' },
      { label: 'Data Points', val: 'Attendance & Mastery' },
      { label: 'Output', val: 'Executive SQL Views' }
    ],
    highlights: [
      'Designed a relational database schema to manage student academic evaluations, tutor session performance, and compliance metrics.',
      'Implemented advanced SQL queries using multi-table JOINs, GROUP BY, and aggregate functions for QA scorecard audits.',
      'Formulated custom database views to evaluate student subject-wise mastery trends and session completion rates.',
      'Streamlined institutional reporting, providing administrators with real-time insight into performance trends.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Company-Reports-Management-System-in-SQL'
  },
  {
    id: 6,
    title: 'Movie Sales & Box Office Analysis Dashboard',
    category: 'Power BI',
    categoryLabel: 'Power BI & Analytics',
    tagline: 'Interactive Power BI dashboard analyzing box office revenues, genre profitability & director performance',
    image: movieImg,
    techStack: ['Power BI', 'DAX Measures', 'Time Intelligence', 'Director Ranking', 'Revenue Forecasting', 'Combo Charts'],
    metrics: [
      { label: 'Avg Revenue', val: '$87.49M' },
      { label: 'Movies Count', val: '999 Films' },
      { label: 'Avg Metascore', val: '59.03' }
    ],
    highlights: [
      'Built an executive Microsoft Power BI dashboard analyzing box office revenues, ratings, and runtime for 999 global movies.',
      'Engineered director revenue rankings (millions) featuring top grossing filmmakers like J.J. Abrams, David Yates, and Christopher Nolan.',
      'Constructed dual-axis time intelligence trendlines tracking Average Ratings and Title counts across release years (2006 to 2014+).',
      'Implemented correlation models comparing Average Revenue and Ratings across movie runtime (minutes) with dynamic Category and Director slicers.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Movie-Sales-Analysis'
  },
  {
    id: 7,
    title: 'E-Commerce Sales Analysis Dashboard in Excel',
    category: 'Excel',
    categoryLabel: 'Excel & BI',
    tagline: 'Dynamic Excel executive dashboard with Pivot Tables, timeline slicers & sales forecasting',
    image: companyImg,
    techStack: ['Advanced Excel', 'Pivot Tables', 'Interactive Slicers', 'Formula Modeling', 'Sales Forecasting', 'KPI Cards'],
    metrics: [
      { label: 'Tool', val: 'Advanced Excel' },
      { label: 'Techniques', val: 'Pivot & Slicers' },
      { label: 'Outcome', val: 'Executive Reporting' }
    ],
    highlights: [
      'Developed an end-to-end commercial sales dashboard in Microsoft Excel for e-commerce performance tracking.',
      'Utilized advanced formula modeling (INDEX-MATCH, SUMIFS, XLOOKUP) and Pivot Tables for automated summary reports.',
      'Integrated interactive timeline slicers and category filters for real-time exploratory analysis.',
      'Visualized revenue trajectories, order fulfillment efficiency, customer retention, and regional sales distribution.'
    ],
    github: 'https://github.com/liteshnannaware-byte/E-Commerce-Sales-Analysis-Dashboard-using-Excel-'
  },
  {
    id: 8,
    title: 'Student Academic Performance Dashboard in Excel',
    category: 'Excel',
    categoryLabel: 'Excel & BI',
    tagline: 'Academic scorecards, attendance analytics & automated grading models built in Advanced Excel',
    image: companyImg,
    techStack: ['Advanced Excel', 'Conditional Formatting', 'Pivot Charts', 'Nested Formulas', 'KPI Tracking'],
    metrics: [
      { label: 'Domain', val: 'Education Analytics' },
      { label: 'Automation', val: 'Grading Models' },
      { label: 'Visuals', val: 'Conditional KPI Cards' }
    ],
    highlights: [
      'Created a comprehensive student performance tracking workbook in Excel with automated score computation and grading bands.',
      'Implemented conditional formatting rules to immediately flag at-risk students and attendance discrepancies.',
      'Designed visual summary cards displaying average GPA, top-performing courses, and teacher feedback indicators.',
      'Structured standardized data input tables for accurate long-term academic record maintenance.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Student-Performance-Dadhboard-in-Excel'
  },
  {
    id: 9,
    title: 'Grocery Store Management System',
    category: 'SQL',
    categoryLabel: 'SQL & Python',
    tagline: 'Database-driven store management software managing inventory, suppliers & customer transactions',
    image: bmwImg,
    techStack: ['SQL', 'Python', 'Relational Schema', 'Inventory Management', 'Transaction Processing', 'CRUD Queries'],
    metrics: [
      { label: 'Language', val: 'Python & SQL' },
      { label: 'Scope', val: 'Inventory & POS' },
      { label: 'System', val: 'Store Operations' }
    ],
    highlights: [
      'Constructed a database-driven grocery store management system to streamline inventory tracking, orders, and sales checkout.',
      'Structured normalized relational tables for products, categories, suppliers, employees, and order line items.',
      'Implemented secure SQL queries for real-time stock level decrementing, supplier purchase order tracking, and receipt generation.',
      'Engineered analytical queries providing store managers with daily revenue summaries and fast-moving product reports.'
    ],
    github: 'https://github.com/liteshnannaware-byte/grocery_store_management'
  },
  {
    id: 10,
    title: 'Sarkar Hotel - Restaurant Management & POS',
    category: 'Web',
    categoryLabel: 'Full-Stack Web & POS',
    tagline: 'Full-stack restaurant management, Live Kitchen Order Ticketing (KOT), dynamic UPI QR invoicing',
    image: safeviewImg,
    techStack: ['JavaScript', 'React', 'POS System', 'Kitchen Ticketing (KOT)', 'UPI QR Billing', 'WhatsApp Receipts'],
    metrics: [
      { label: 'Stack', val: 'Full-Stack JavaScript' },
      { label: 'Features', val: 'Live KOT & Billing' },
      { label: 'Payment', val: 'Dynamic UPI QR' }
    ],
    highlights: [
      'Engineered a complete restaurant point-of-sale (POS) web application featuring floor layout management and table lifecycles.',
      'Integrated real-time Kitchen Order Ticketing (KOT) workflow syncing front-of-house orders instantly to kitchen staff.',
      'Developed dynamic UPI QR code generator for contactless payments and instant WhatsApp digital bill sharing.',
      'Built financial end-of-day revenue reports, tax breakdown summaries, and item popularity analytics.'
    ],
    github: 'https://github.com/liteshnannaware-byte/Hotel-Management'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Power BI', 'SQL', 'Excel', 'Python', 'Web'];

  const filteredProjects = activeTab === 'All' 
    ? allProjectsData 
    : allProjectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="bg-[#0b0c10] text-white py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Background Red Ambiance Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-red-400 uppercase tracking-widest mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub Showcase ({allProjectsData.length} Projects)</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Projects & Repositories
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Every project from my official GitHub account across Power BI, Advanced SQL, Excel Business Dashboards, and Python Data Pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#ff2a2a] text-white shadow-[0_4px_20px_rgba(255,42,42,0.4)]'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-[#14161d] border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 hover:shadow-[0_20px_50px_rgba(255,42,42,0.18)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Container */}
                <div 
                  className="relative aspect-video overflow-hidden bg-black/60 cursor-pointer" 
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#ff2a2a] text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Preview Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-full bg-white text-black font-extrabold text-xs flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" /> View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors tracking-tight mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs font-medium leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Highlights Bullet point */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#ff2a2a] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.highlights[0]}</span>
                    </p>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-gray-400 bg-white/5">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-red-400" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#14161d] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff2a2a] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff2a2a] text-white shadow-lg">
                    {selectedProject.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <h3 className="text-3xl font-black mb-2 tracking-tight">{selectedProject.title}</h3>
                <p className="text-red-400 text-sm font-semibold mb-6">{selectedProject.tagline}</p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
                  {selectedProject.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-[10px] font-mono uppercase text-gray-400">{m.label}</div>
                      <div className="text-sm font-extrabold text-white mt-1">{m.val}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 mb-3">Key Project Deliverables & Architecture:</h4>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#ff2a2a] shrink-0 mt-1" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 mb-3">Technologies Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-gray-400">
                    Repo: <span className="text-white font-bold">{selectedProject.github.split('/').pop()}</span>
                  </span>
                  
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
