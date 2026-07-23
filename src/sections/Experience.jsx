import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarDays } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import { Panel, SectionTitle } from '@/components';

const TIMELINE_DURATION = 4.5;

export default function Experience() {
  const containerRef = useRef(null);
  const [dotTops, setDotTops] = useState([]);
  const [track, setTrack] = useState({ top: 0, height: 0 });
  const isInView = useInView(containerRef, { margin: '0px 0px -10% 0px' });
  const animateTimeline = dotTops.length > 0 && isInView;

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;

      const nodes = container.querySelectorAll('.timeline-node-wrapper');
      if (nodes.length === 0) return;

      const centers = Array.from(nodes).map((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top - containerTop + rect.height / 2;
      });

      const first = centers[0];
      const last = centers[centers.length - 1];
      const span = last - first || 1;

      setTrack({ top: first, height: last - first });
      setDotTops(centers.map((center) => (center - first) / span));
    };

    const rafId = requestAnimationFrame(updatePositions);
    const timeoutId = setTimeout(updatePositions, 200);
    window.addEventListener('resize', updatePositions);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  return (
    <section className="container section" id="experience">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle>Experiencia Profesional</SectionTitle>
        </div>
        <div className="mt-10 max-w-5xl mx-auto relative pl-8 sm:pl-12" ref={containerRef}>
          <div
            className="absolute left-[-1px] w-[2px] bg-blue/10 z-0 overflow-hidden"
            style={{ top: track.top, height: track.height }}
          >
            {animateTimeline && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: TIMELINE_DURATION, repeat: Infinity, ease: 'linear' }}
                style={{ willChange: 'transform' }}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[60px] rounded-full z-10 -mt-[60px]"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.6), #ffffff)',
                    boxShadow: '0 15px 15px -2px rgba(255,255,255,0.8)',
                  }}
                />
              </motion.div>
            )}
          </div>

          {portfolioData.experience.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative mb-14 last:mb-0 group/timeline"
            >
              <div className="timeline-node-wrapper absolute -left-[32px] sm:-left-[48px] top-6 flex items-center justify-center w-4 h-4 z-20 translate-x-[-50%]">
                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue/20 blur-[1px]" />

                <motion.div
                  className="relative w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[2px]"
                  animate={
                    animateTimeline
                      ? {
                          boxShadow: [
                            '0 0 8px 0px rgba(59,130,246,0.4)',
                            '0 0 20px 4px rgba(59,130,246,1)',
                            '0 0 8px 0px rgba(59,130,246,0.4)',
                            '0 0 8px 0px rgba(59,130,246,0.4)',
                          ],
                          borderColor: ['#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6'],
                        }
                      : {}
                  }
                  transition={{
                    duration: TIMELINE_DURATION,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [0, 0.05, 0.15, 1],
                    delay: dotTops[index] * TIMELINE_DURATION || 0,
                  }}
                  style={{
                    backgroundColor: '#080808',
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 12px 0px rgba(59,130,246,0.5)',
                    willChange: 'box-shadow, border-color',
                  }}
                />
              </div>
              <Panel className="w-full relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {experience.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1.5 bg-[#16223a] text-blue-light rounded-2xl border border-blue/20 w-max flex items-center gap-2 tracking-wide">
                    <FaCalendarDays className="text-sm opacity-70" />
                    {experience.year}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg text-blue-light mb-4 relative z-10 group-hover:text-blue transition-colors">
                  {experience.company}
                </h4>
                <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed relative z-10">
                  {experience.description}
                </p>
              </Panel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
