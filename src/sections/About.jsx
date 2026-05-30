import { portfolioData } from '@/data/portfolioData';
import { GlassCard, SectionTitle, Reveal } from '@/components';

// Aquí presento un resumen sobre mí. Es una sección sencilla,
// pero crucial para que los visitantes entiendan mi perfil rápidamente.
export default function About() {
  return (
    <section className="container section" id="about">
      <div className="section-inner">
        <Reveal className="section-header">
          <SectionTitle>Sobre Mí</SectionTitle>
        </Reveal>
        <GlassCard delay={100} className="mt-10 max-w-5xl mx-auto overflow-hidden">
          <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed">
            {portfolioData.about}
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
