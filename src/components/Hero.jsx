import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight, Database, BarChart3, TrendingUp, CheckCircle2, Layers, Cpu, Activity, Code2 } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white flex flex-col justify-between pt-24 md:pt-28 pb-8">
      
      {/* Sleek Pure Cyberpunk Grid Background & Crimson Lighting (No Video, No Audio) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff2a2a0a_1px,transparent_1px),linear-gradient(to_bottom,#ff2a2a0a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#ff2a2a]/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#ff2a2a]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050505]/75 to-[#050505] pointer-events-none z-0" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-8">
        
        {/* Top Status Bar */}
        <div 
          data-aos="fade-down"
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] -ml-4" />
            <span className="text-gray-300 font-bold uppercase tracking-wider">STATUS:</span>
            <span className="text-emerald-400 font-bold">AVAILABLE FOR WORK</span>
            <span className="text-white/30">|</span>
            <span className="text-gray-400">DATA ANALYST &bull; INDIA</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-[11px] uppercase tracking-widest text-red-400 font-bold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#ff2a2a]" />
              SQL &bull; POWER BI &bull; PYTHON &bull; DATA ANALYTICS
            </span>
          </div>
        </div>

        {/* Split Grid: Left Content & Right Data Terminal Card (No Person Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headlines, Pills, Bio, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Tag: Data Analyst Only */}
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="px-2.5 py-1 rounded-md bg-[#ff2a2a] text-black font-black text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(255,42,42,0.6)]">
                TOP 1%
              </span>
              <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
                DATA ANALYST & PROBLEM SOLVER
              </span>
            </div>

            {/* Main Cyberpunk Heading: DATA ANALYST */}
            <h1 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95] mb-5 select-none"
            >
              <span className="text-white block">LITESH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] via-[#ff4a4a] to-white block drop-shadow-[0_0_35px_rgba(255,42,42,0.5)]">
                DATA ANALYST
              </span>
            </h1>

            {/* Tech Stack Pills: Data Analyst Stack */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-md bg-red-600/20 border border-red-500/40 text-red-400 font-mono text-xs font-black uppercase tracking-wider">
                [DATA STACK]
              </span>
              <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide">
                SQL &bull; Microsoft Power BI (DAX) &bull; Python (Pandas/NumPy) &bull; Data Modeling
              </span>
            </div>

            {/* Subtitle Bio Focused Purely on Data Analysis */}
            <p 
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-gray-300 text-sm sm:text-base font-medium leading-relaxed max-w-xl mb-8"
            >
              Transforming complex raw datasets into interactive Power BI dashboards, extracting actionable business insights using advanced SQL queries, and optimizing decision-making for stakeholders.
            </p>

            {/* Action Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full bg-[#111] border border-white/20 text-white font-black text-xs uppercase tracking-wider hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-lg"
              >
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Live Data Analytics Terminal Card (No Person Photo) */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Ambient Red Glow behind card */}
            <div className="absolute inset-0 bg-[#ff2a2a]/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* Cyber Glass Analytics Terminal Card */}
            <div className="relative w-full max-w-[360px] bg-gradient-to-b from-[#18181f]/95 via-[#0e0e13]/95 to-[#050507] border border-red-500/40 rounded-3xl p-6 shadow-[0_20px_60px_rgba(255,42,42,0.25)] backdrop-blur-2xl transform lg:rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
              
              {/* Card Terminal Header */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-red-400 font-bold uppercase tracking-wider">ANALYST.CORE</span>
              </div>

              {/* Data Engine Identity */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">PRIMARY ROLE</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ff2a2a] text-black uppercase font-mono">CERTIFIED</span>
                </div>
                <div className="text-xl font-black text-white tracking-tight">Litesh Nannaware</div>
                <div className="text-xs text-red-400 font-mono font-bold mt-0.5">Professional Data Analyst</div>
              </div>

              {/* Key Analytics Metrics */}
              <div className="space-y-2.5 mb-4 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-gray-300">
                    <Database className="w-4 h-4 text-[#ff2a2a]" />
                    <span>SQL Data Querying</span>
                  </div>
                  <span className="text-emerald-400 font-bold">50K+ Records</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-gray-300">
                    <BarChart3 className="w-4 h-4 text-[#ff2a2a]" />
                    <span>Power BI (DAX)</span>
                  </div>
                  <span className="text-white font-bold">Interactive KPIs</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-gray-300">
                    <Code2 className="w-4 h-4 text-[#ff2a2a]" />
                    <span>Python (Pandas/NumPy)</span>
                  </div>
                  <span className="text-white font-bold">EDA & Automation</span>
                </div>
              </div>

              {/* Mini Stats Footer */}
              <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs pt-1 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <div className="text-white font-black text-base">10+</div>
                  <div className="text-[9px] text-gray-400 uppercase">Data Repositories</div>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <div className="text-[#ff2a2a] font-black text-base">7.24</div>
                  <div className="text-[9px] text-gray-400 uppercase">B.Tech CGPA</div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#ff2a2a]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#ff2a2a]" />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Running Ticker */}
      <div className="relative z-10 w-full pt-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          <span>DATA ANALYST &bull; BUSINESS INTELLIGENCE &bull; SQL ETL &bull; POWER BI DAX</span>
          <span className="text-red-400 font-bold">&bull; 10+ ANALYTICS REPOSITORIES &bull;</span>
          <span>&copy; {new Date().getFullYear()} LITESH NANNAWARE</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;