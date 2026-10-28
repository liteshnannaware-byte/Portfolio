import React from 'react';
import { ExternalLink, GraduationCap, Award, Sparkles, Database, FileSpreadsheet, BarChart2, Binary, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[#080808] text-white pt-24 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-red-500/10">
      
      {/* Background Cyberpunk Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff2a2a06_1px,transparent_1px),linear-gradient(to_bottom,#ff2a2a06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-10">
        
        {/* Left Side: 3D Hanging ID Badge with Dark & Crimson Aesthetic (No Profile Picture) */}
        <div className="flex flex-col items-center w-full lg:w-[360px] shrink-0 mt-8 lg:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-4 h-40 bg-[#121212] border-x border-red-500/20 transform -translate-x-1/2 shadow-inner z-0 flex items-center justify-center">
              <div className="w-[1.5px] h-full bg-[#ff2a2a]"></div>
            </div>
            
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-8 h-12 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] rounded-md border border-red-500/40 transform -translate-x-1/2 z-10 shadow-[0_4px_15px_rgba(255,42,42,0.3)] flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full border border-red-500 bg-[#ff2a2a]/40"></div>
            </div>
            
            {/* Badge Card */}
            <div className="bg-gradient-to-b from-[#161616] via-[#0d0d0d] to-[#050505] w-full max-w-[310px] rounded-3xl p-5 shadow-[0_25px_60px_rgba(255,42,42,0.25)] relative z-20 transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 border border-red-500/40">
              
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#161616] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-red-500/40">
                <div className="w-8 h-2 bg-black rounded-full shadow-inner border border-white/5"></div>
              </div>

              {/* Badge Header */}
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 pt-2 pb-3 px-1 border-b border-white/10 mb-4">
                <span className="font-bold text-[#ff2a2a] tracking-widest uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff2a2a]" />
                  ANALYST PASS
                </span>
                <span className="text-gray-500">ID: LN-2026</span>
              </div>
              
              {/* Holographic Cyber Analytics Monogram Display (Replaces Human Photo) */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#121218] via-black to-[#1a0a0a] border border-red-500/30 relative overflow-hidden p-4 flex flex-col justify-between shadow-inner">
                {/* Tech grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff2a2a0a_1px,transparent_1px),linear-gradient(to_bottom,#ff2a2a0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                <div className="flex justify-between items-center relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
                  <span className="text-[9px] font-mono font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40 uppercase">
                    DATA.ANALYST
                  </span>
                </div>

                <div className="relative z-10 text-center py-2">
                  <div className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff4a4a] to-[#ff2a2a] drop-shadow-[0_0_15px_rgba(255,42,42,0.6)]">
                    LN
                  </div>
                  <div className="text-xs font-black text-white tracking-wider uppercase mt-1">
                    Litesh Nannaware
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#ff2a2a]">
                    Verified Data Analyst
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 relative z-10 pt-1 border-t border-white/10">
                  <span>SQL &bull; BI &bull; PYTHON</span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
              </div>

              {/* Verified Metrics Chips */}
              <div className="mt-4 space-y-2 font-mono text-[10px]">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-400">CORE FOCUS:</span>
                  <span className="text-white font-bold">SQL &bull; Power BI &bull; Python</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-400">DATASET SCALE:</span>
                  <span className="text-emerald-400 font-bold">50K+ Rows Analyzed</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-400">AVAILABILITY:</span>
                  <span className="text-[#ff2a2a] font-bold">OPEN FOR ROLES</span>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col items-center">
                <div className="w-full h-5 flex justify-between items-center gap-[2px] opacity-70">
                  {[...Array(26)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-full bg-white ${i % 3 === 0 ? 'w-[3px]' : i % 2 === 0 ? 'w-[1.5px]' : 'w-[1px]'}`} 
                    />
                  ))}
                </div>
                <span className="text-[8px] font-mono text-gray-500 tracking-[0.3em] mt-1 uppercase">LN-DATA-ANALYST-2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Bio and Credentials */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-bold text-red-400 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a2a]" />
            <span>Profile & Background</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-white">Litesh Nannaware</span>
          </h2>

          <p className="text-base sm:text-lg font-medium mb-6 leading-relaxed text-gray-300">
            A results-driven <span className="text-white font-bold bg-red-950/80 px-2.5 py-1 rounded border border-red-500/40">Data Analyst</span> dedicated to transforming complex raw datasets into clear executive dashboards, actionable KPI metrics, and high-impact business insights.
          </p>

          <p className="text-sm sm:text-base font-normal mb-8 leading-relaxed text-gray-400 max-w-2xl">
            Proficient in <strong className="text-white">SQL</strong>, <strong className="text-white">Microsoft Power BI (DAX)</strong>, and <strong className="text-white">Python (Pandas, NumPy, Matplotlib)</strong>. Experienced in exploratory data analysis (EDA), automated ETL pipelines, data wrangling, sales trend modeling, and executive KPI visualization to guide strategic business decisions.
          </p>

          {/* Education Card */}
          <div className="bg-[#121216] border border-red-500/20 rounded-2xl p-5 mb-8 max-w-2xl shadow-xl hover:border-red-500/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/30 text-[#ff2a2a] shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="font-extrabold text-base text-white">B.Tech – Computer Science and Engineering</h4>
                  <span className="text-xs font-mono text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded-full border border-red-500/20">2022 – 2026</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">G.H. Raisoni College of Engineering and Management, Jalgaon</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-md bg-black/60 text-[#ff2a2a] font-mono text-xs font-bold border border-red-500/30">
                  CGPA: 7.24 / 10.0
                </div>
              </div>
            </div>
          </div>

          {/* Core Analytics Toolkit Chips */}
          <div className="mb-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Core Analytics Toolkit:</h4>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: 'Power BI', tag: 'DAX & Modeling' },
                { name: 'SQL', tag: 'Queries & ETL' },
                { name: 'Python', tag: 'Pandas & NumPy' },
                { name: 'Data Wrangling', tag: 'Cleaning & EDA' },
                { name: 'Business Intelligence', tag: 'KPIs & Dashboards' }
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className="px-4 py-2 rounded-xl bg-[#141414] border border-white/10 hover:border-[#ff2a2a] text-white transition-all duration-300 shadow-md cursor-default transform hover:-translate-y-1"
                >
                  <div className="text-xs font-black">{tech.name}</div>
                  <div className="text-[10px] text-red-400 font-mono">{tech.tag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/litesh-nannaware-665165280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white hover:bg-white hover:text-black transition-all font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,42,42,0.4)] inline-flex items-center gap-2"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a 
              href="https://github.com/liteshnannaware-byte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-black border border-white/20 text-white hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all font-black text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
