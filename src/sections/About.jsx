import { portfolioData } from '@/data/portfolioData';
import { Panel, SectionTitle } from '@/components';

export default function About() {
  return (
    <section className="container section" id="about">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle>Sobre Mí</SectionTitle>
        </div>
        <Panel className="mt-10 max-w-5xl mx-auto overflow-hidden">
          <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed">
            {portfolioData.about}
          </p>
        </Panel>
      </div>
    </section>
  );
}
