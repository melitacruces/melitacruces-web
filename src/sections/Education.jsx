import { FaUpRightFromSquare, FaCalendarDays } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import { Panel, SectionTitle } from '@/components';

export default function Education() {
  return (
    <section className="container section" id="education">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle>Formación y Certificaciones</SectionTitle>
        </div>
        <div className="mt-10 w-full max-w-5xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {portfolioData.education.map((education) => (
              <Panel key={education.degree} className="w-full relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-blue-light transition-colors">
                      {education.degree}
                    </h3>
                    {education.secondaryDegree && (
                      <span className="text-sm md:text-base font-medium text-foreground/50 block mb-1">
                        {education.secondaryDegree}
                      </span>
                    )}
                    <h4 className="text-base sm:text-lg text-blue-light font-medium">
                      {education.institution}
                    </h4>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1.5 bg-[#16223a] text-blue-light rounded-2xl border border-blue/20 w-max flex items-center gap-2 tracking-wide flex-none">
                    <FaCalendarDays className="text-sm opacity-70" />
                    {education.year}
                  </span>
                </div>
                {education.description && (
                  <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed mb-6">
                    {education.description}
                  </p>
                )}

                {education.certificates?.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-0 pt-6 border-t border-blue/30 relative z-20">
                    {education.certificates.map((certificate) => (
                      <a
                        key={certificate.name}
                        href={certificate.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold px-4 py-2 bg-background border border-blue/30 rounded-2xl text-blue-light hover:bg-blue/20 hover:text-blue hover:border-blue/50 transition-all flex items-center gap-2"
                      >
                        {certificate.name} <FaUpRightFromSquare className="text-sm" />
                      </a>
                    ))}
                  </div>
                )}
              </Panel>
            ))}
          </div>

          <Panel padding="md" className="w-full overflow-hidden group">
            <div className="mb-6 flex justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">
                Certificaciones Destacadas
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioData.certifications.map((certificate) => (
                <div
                  key={certificate.name}
                  className="group/cert flex flex-col p-5 sm:p-6 rounded-2xl bg-background border border-panel-border shadow-[0_1px_2px_rgba(59,130,246,0.14),0_4px_12px_rgba(59,130,246,0.10)] hover:bg-blue/14 hover:border-blue-light/45 hover:shadow-[0_0_20px_rgba(59,130,246,0.32)] transition-all duration-300 min-h-[140px] relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold mb-1 group-hover/cert:text-blue-light transition-colors leading-snug">
                        {certificate.name}
                      </h4>
                      <span className="text-sm text-blue-light/80 font-medium block">
                        {certificate.institution}
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-blue/30">
                    <div className="flex flex-wrap gap-3 relative z-20">
                      {certificate.file && (
                        <a
                          href={certificate.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-4 py-2 bg-background border border-blue/30 rounded-2xl text-blue-light hover:bg-blue/20 hover:text-blue hover:border-blue/50 transition-all flex items-center gap-2"
                        >
                          Certificado <FaUpRightFromSquare className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
