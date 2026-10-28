import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#0c0d12] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold">Litesh Nannaware</p>
          <p className="text-red-400 font-bold">Data Analyst</p>
          <p className="text-gray-400">SQL &bull; Power BI &bull; Python (Pandas/NumPy)</p>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center">
          <p className="text-white font-bold">B.Tech in CSE (2022 – 2026)</p>
          <a href="#projects" className="underline hover:text-red-400 transition-colors mt-1 underline-offset-4 decoration-1">
            Explore Portfolio Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-end">
          <p className="text-white font-bold">Open to Opportunities</p>
          <p className="text-gray-400">Remote & On-Site &bull; {new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Brand Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-24 overflow-hidden select-none">
        <h2 className="text-[17vw] md:text-[15vw] leading-none font-sans font-black tracking-tighter uppercase text-white w-full text-center hover:text-[#ff2a2a] hover:drop-shadow-[0_0_40px_rgba(255,42,42,0.6)] transition-all duration-700">
          LITESH
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full items-end font-medium pt-8 border-t border-white/10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/litesh-nannaware-665165280/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/liteshnannaware-byte" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="mailto:liteshnannaware@gmail.com" 
              aria-label="Email"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-white/50 text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Litesh Nannaware &bull; Designed with precision
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a 
            href="mailto:liteshnannaware@gmail.com" 
            className="underline hover:text-red-400 transition-colors underline-offset-4 decoration-1 lowercase text-white"
          >
            liteshnannaware@gmail.com
          </a>
          <span className="text-gray-400 text-[10px] mt-1">+91 7499601615</span>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            Back to Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
