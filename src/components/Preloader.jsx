import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.6s) + pause (0.5s) before shutter lifts smoothly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#050505] border-b-2 border-[#ff2a2a] z-[100000] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#ff2a2a]/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col items-center z-10"
          >
            {/* Main Brand Text Container */}
            <div className="relative text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-center px-4">
              {/* Background text (empty ghost state) */}
              <div className="text-neutral-800 font-black">
                LITESH<span className="text-neutral-800">.</span>
              </div>

              {/* Foreground text (liquid water fill state) */}
              <motion.div 
                className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap text-center w-full px-4"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              >
                LITESH<span className="text-[#ff2a2a] drop-shadow-[0_0_25px_rgba(255,42,42,0.9)]">.</span>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-red-400 font-mono text-xs md:text-sm tracking-widest uppercase mt-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-ping" />
              <span>DATA ANALYST &bull; POWER BI &bull; SQL &bull; PYTHON</span>
            </motion.p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
