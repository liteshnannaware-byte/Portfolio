import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const Contact = () => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please check the permission box to confirm contact consent.");
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Ignore if canvas-confetti is not loaded
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    }, 4000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col justify-end pt-32 pb-0 border-t border-gray-900">
      
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/95 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Main Container Overlay */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-end items-end max-w-7xl mx-auto px-6 md:px-12 mb-8 gap-8">
        
        {/* Direct Contact Info Card (Floating left/above) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[35%] bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white shadow-2xl self-stretch flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff2a2a] uppercase">
              Get In Touch
            </span>
            <h3 className="text-3xl font-black mt-2 mb-4">Let's collaborate on data.</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8">
              Whether you need automated Power BI dashboards, complex SQL queries, Python data automation, or data-driven consultation, feel free to reach out.
            </p>

            <div className="space-y-5">
              <a 
                href="mailto:liteshnannaware@gmail.com" 
                className="flex items-center gap-4 text-xs sm:text-sm font-semibold hover:text-[#ff2a2a] transition-colors group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/10 group-hover:bg-[#ff2a2a] flex items-center justify-center text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono">Email Directly</div>
                  <div className="text-white font-medium">liteshnannaware@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:7499601615" 
                className="flex items-center gap-4 text-xs sm:text-sm font-semibold hover:text-[#ff2a2a] transition-colors group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/10 group-hover:bg-[#ff2a2a] flex items-center justify-center text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono">Phone / WhatsApp</div>
                  <div className="text-white font-medium">+91 7499601615</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono">Location</div>
                  <div className="text-white font-medium">Maharashtra, India (Open to Remote)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/litesh-nannaware-665165280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/liteshnannaware-byte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Form Card Overlay (Black & Red Cyberpunk Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#16161c] via-[#101015] to-[#08080c] border border-red-500/40 w-full lg:w-[65%] p-8 sm:p-12 md:p-16 text-white flex flex-col justify-between rounded-3xl shadow-[0_0_50px_rgba(255,42,42,0.25)]"
        >
          <div className="flex justify-between items-center mb-10 md:mb-14">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff2a2a] uppercase">
              Drop A Message
            </div>
            <span className="text-xs font-mono bg-red-950/60 border border-red-500/30 text-red-300 px-3 py-1 rounded-full font-bold">
              Response within 24h
            </span>
          </div>

          {submitted ? (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-16 h-16 text-white mb-4 animate-bounce" />
              <h3 className="text-3xl font-black text-white mb-2">Message Sent!</h3>
              <p className="text-white/90 text-sm max-w-md">
                Thank you, {formData.firstName || 'there'}! Your message has been received. Litesh will get back to you shortly at {formData.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
                
                {/* Left Inputs */}
                <div className="flex-1 flex flex-col gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name *" 
                      required
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *" 
                      required
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                    />
                  </div>
                </div>

                {/* Right Textarea */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, dataset, or role... *" 
                      required
                      className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pt-2 border-t border-white/20">
                <div className="flex items-start gap-3 text-xs sm:text-sm font-medium text-white/90">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    checked={formData.permission}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 cursor-pointer" 
                    style={{ accentColor: "white" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-xs leading-snug">
                    I give permission to contact me regarding opportunities and project inquiries.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="px-9 py-3.5 rounded-full bg-[#ff2a2a] text-white font-extrabold flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300 group whitespace-nowrap self-stretch md:self-auto shadow-[0_0_25px_rgba(255,42,42,0.45)] cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;