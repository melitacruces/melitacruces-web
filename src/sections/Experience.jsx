import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarDays } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import { GlassCard, SectionTitle, Reveal } from '@/components';

// Para la experiencia, quise hacer algo más especial que una simple lista.
// Construí una línea de tiempo interactiva (timeline) con un efecto de "chispa" que baja por la línea.
export default function Experience() {
  const containerRef = useRef(null);
  const [dotTops, setDotTops] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerHeight = container.offsetHeight;
        const trackHeight = containerHeight - 24; // top-6 is 24px
        
        const nodes = container.querySelectorAll('.timeline-node-wrapper');
        const tops = Array.from(nodes).map(node => {
          const nodeTop = node.getBoundingClientRect().top - container.getBoundingClientRect().top;
          // node is 16px tall (w-4 h-4). Center is nodeTop + 8.
          return Math.max(0, (nodeTop + 8 - 24) / trackHeight);
        });
        setDotTops(tops);
      }
    };
    
    const timeoutId = setTimeout(updatePositions, 100);
    window.addEventListener('resize', updatePositions);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  const DURATION = 4.5; // Average between previous 6s and 3s

  return (
    <section className="container section" id="experience">
      <div className="section-inner">
        <Reveal className="section-header">
          <SectionTitle>Experiencia Profesional</SectionTitle>
        </Reveal>
        <div className="mt-10 max-w-5xl mx-auto relative pl-8 sm:pl-12" ref={containerRef}>
          {/* Animated Glowing Timeline Track */}
          <div className="absolute left-[1px] top-6 bottom-0 w-[2px] bg-blue/10 z-0 overflow-hidden">
            {/* Use a full-height wrapper to animate Y to avoid layout thrashing and artifacts */}
            {dotTops.length > 0 && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                animate={{ y: ["0%", "100%"] }}
                transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
              >
                {/* The traveling spark */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[60px] rounded-full z-10 -mt-[60px]"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.6), #ffffff)',
                    boxShadow: '0 15px 15px -2px rgba(255,255,255,0.8)'
                  }}
                />
              </motion.div>
            )}
          </div>

          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative mb-14 last:mb-0 group/timeline">
              {/* Animated Node */}
              <div className="timeline-node-wrapper absolute -left-[32px] sm:-left-[48px] top-6 flex items-center justify-center w-4 h-4 z-20 translate-x-[-50%]">
                {/* Static Outer glow ring */}
                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue/20 blur-[1px]"></div>
                
                {/* Core dot that pops when spark passes */}
                <motion.div 
                  className="relative w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[2px]"
                  animate={dotTops.length > 0 ? {
                    boxShadow: [
                      "0 0 8px 0px rgba(59,130,246,0.4)", 
                      "0 0 20px 4px rgba(59,130,246,1)", 
                      "0 0 8px 0px rgba(59,130,246,0.4)",
                      "0 0 8px 0px rgba(59,130,246,0.4)"
                    ],
                    borderColor: ["#3b82f6", "#3b82f6", "#3b82f6", "#3b82f6"]
                  } : {}}
                  transition={{
                    duration: DURATION,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.05, 0.15, 1],
                    delay: (dotTops[index] * DURATION) || 0
                  }}
                  style={{
                    backgroundColor: "#080808",
                    borderColor: "#3b82f6",
                    boxShadow: "0 0 12px 0px rgba(59,130,246,0.5)",
                    willChange: "box-shadow, border-color"
                  }}
                />
              </div>
              <GlassCard className="w-full relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{exp.role}</h3>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1.5 bg-blue/10 text-blue-light rounded-2xl border border-blue/20 w-max flex items-center gap-2 tracking-wide">
                    <FaCalendarDays className="text-sm opacity-70" />
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg text-blue-light mb-4 relative z-10 group-hover:text-blue transition-colors">
                  {exp.company}
                </h4>
                <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed relative z-10">
                  {exp.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
