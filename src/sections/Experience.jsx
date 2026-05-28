import { FaCalendarDays } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import GlassCard from '@/components/GlassCard';
import SectionTitle from '@/components/SectionTitle';

export default function Experience() {
  return (
    <section className="container section" id="experience">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle>Experiencia Profesional</SectionTitle>
        </div>
        <div className="mt-10 max-w-5xl mx-auto border-l border-blue-light/20 relative pl-8 sm:pl-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative mb-14 last:mb-0">
              <div className="absolute -left-[41px] sm:-left-[57px] top-6 w-4 h-4 rounded-full bg-blue border-4 border-background shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10"></div>
              <GlassCard className="w-full relative overflow-hidden group" delay={100 * index}>
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
