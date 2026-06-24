import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { SectionTitle, ProjectCard, CollapsibleProjectCard } from '@/components';


export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="container section" id="projects">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle>Proyectos Destacados</SectionTitle>
          <p className="section-lead">
            Una selección de mis proyectos.
          </p>
        </div>

        {}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {portfolioData.projects.map((proj, index) => (
            <ProjectCard key={index} proj={proj} />
          ))}
        </div>

        {}
        {portfolioData.otherProjects && portfolioData.otherProjects.length > 0 && (
          <div className="mt-16 w-full">
            <div className="mb-10 mt-16 flex justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">
                Otros Proyectos
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
              {portfolioData.otherProjects.map((proj, index) => (
                <CollapsibleProjectCard
                  key={`other-${index}`}
                  proj={proj}
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
