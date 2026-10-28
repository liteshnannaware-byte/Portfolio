import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    // Trigger when the line reaches 50px into card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-84 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.03] transition-all duration-700 z-10 ${className} ${
        isActive 
          ? 'bg-[#ff2a2a] border border-red-400 shadow-[0_0_50px_rgba(255,42,42,0.55)]' 
          : 'bg-[#121216] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)]'
      }`}
    >
      {/* Hole punch with metallic finish */}
      <div className="w-5 h-5 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] absolute top-4 border border-white/20 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-black rounded-full opacity-60"></div>
      </div>

      {/* Inner container */}
      <div 
        className={`w-full h-full rounded-[1.5rem] mt-8 p-7 flex flex-col min-h-[220px] transition-colors duration-700 ${
          isActive ? 'bg-[#991111]' : 'bg-[#0a0a0d]'
        }`}
      >
        <span 
          className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
            isActive ? 'text-red-100 font-mono' : 'text-red-500/80 font-mono'
          }`}
        >
          {number}
        </span>

        <h3 
          className={`text-xl md:text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
            isActive ? 'text-white' : 'text-gray-100'
          }`}
        >
          {title}
        </h3>

        <p 
          className={`text-xs md:text-sm leading-relaxed font-medium transition-colors duration-700 ${
            isActive ? 'text-red-50' : 'text-gray-400'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const Expertise = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-[#050505] text-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff2a2a08_1px,transparent_1px),linear-gradient(to_bottom,#ff2a2a08_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[460px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-xs text-red-400 font-mono font-bold uppercase tracking-wider mb-8 shadow-sm bg-red-950/40">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight relative">
            Empowering Decisions with Data & Analytics
            {/* Hand-drawn neon red arrow */}
            <svg className="absolute -bottom-10 right-6 w-12 h-12 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
            Bridging raw multi-table architectures, high-performance SQL extraction, and modern executive dashboards to generate actionable business intelligence.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Faint guide path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#1f232b"
            strokeWidth="2.5"
            strokeDasharray="8 10"
          />

          {/* Mask to reveal active path */}
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="24"
              style={{ pathLength }}
            />
          </mask>

          {/* Glowing neon red active path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="3.5"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-[0_0_12px_rgba(255,42,42,0.8)]"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#222"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="6"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

          <TagCard
            number="01"
            title="BI & Interactive Dashboards"
            text="Designing interactive Microsoft Power BI dashboards with DAX calculated measures, Power Query ETL, and dynamic KPIs for cross-functional business stakeholders."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[8%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="02"
            title="SQL & Database Engineering"
            text="Writing high-performance SQL scripts with subqueries, CTEs, JOINs, aggregate functions, and relational schema designs for reliable data extraction and analysis."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[8%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="03"
            title="Statistical EDA & Modeling"
            text="Conducting exploratory data analysis (EDA), statistical variance modeling, correlation studies, and trend forecasting to uncover core business growth drivers."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[12%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="04"
            title="Python Pipelines & ETL"
            text="Automating end-to-end data workflows, web data extraction (BeautifulSoup), tabular transformation with Pandas & NumPy, and automated reporting scripts."
            className="md:absolute md:top-[1050px] md:left-[12%] lg:left-[22%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end signature note */}
          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[55%] font-['Caveat',cursive] text-3xl text-red-400 rotate-6 drop-shadow-[0_0_10px_rgba(255,42,42,0.4)]"
          >
            Turning raw data into business growth! 🚀
          </div>

        </div>

      </div>
    </section>
  );
};

export default Expertise;
