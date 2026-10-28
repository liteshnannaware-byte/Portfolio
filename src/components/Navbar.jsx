import React, { useState, useEffect } from 'react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Brand Logo (Matching Screenshot LITESH.) */}
        <div className="flex items-center">
          <a 
            href="#home" 
            className="text-2xl font-black tracking-tight text-white transition-all duration-300 hover:opacity-90 flex items-center"
          >
            LITESH<span className="text-[#ff2a2a] text-3xl font-black leading-none">.</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-7 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-semibold text-xs uppercase tracking-wider relative group transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              {/* Animated underline highlight */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Socials & CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/litesh-nannaware-665165280/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com/liteshnannaware-byte" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff2a2a] text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(255,42,42,0.35)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <a 
            href="#contact" 
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase bg-[#ff2a2a] text-white hover:bg-white hover:text-black transition-all"
          >
            Contact
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 text-white transition-colors"
            aria-label="Toggle navigation drawer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] py-6 opacity-100 bg-black/95 backdrop-blur-2xl border-b border-red-500/30 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#ff2a2a] font-bold text-base border-b border-white/10 pb-2.5 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs text-white/40">&rarr;</span>
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://www.linkedin.com/in/litesh-nannaware-665165280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#ff2a2a] transition-all"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a 
              href="https://github.com/liteshnannaware-byte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#ff2a2a] transition-all"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;