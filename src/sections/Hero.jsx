import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components';
import { whatsappUrl } from '@/lib/contactLinks';
import { navigateToSection } from '@/lib/sectionNav';
import HeroBackground from '@/sections/HeroBackground';

export default function Hero() {
  return (
    <section
      className="hero-fullscreen flex items-center justify-center pt-32 pb-20 relative overflow-hidden w-full"
      id="home"
    >
      <HeroBackground />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full relative">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 px-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold mb-4 tracking-tight leading-[1.15] lg:-ml-1 lg:pr-2">
              <span className="block text-foreground">Hola, soy</span>
              <span className="block bg-gradient-to-r from-blue-light to-white bg-clip-text text-transparent pr-1 lg:pr-2">
                {portfolioData.hero.name}
              </span>
            </h1>

            <div className="flex flex-col gap-2 mb-6 w-full items-center lg:items-start">
              {portfolioData.hero.roles.map((role) => (
                <h3
                  key={role}
                  className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-foreground/80"
                >
                  {role}
                </h3>
              ))}
            </div>

            <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {portfolioData.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start w-full mb-10">
              <Button
                href="/projects"
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection('/projects');
                }}
                variant="primary"
                fullWidth
                className="sm:w-auto"
              >
                Explorar Proyectos
              </Button>
              <Button
                href={portfolioData.hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                fullWidth
                className="sm:w-auto"
              >
                Descargar CV
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start w-full">
              <div className="flex gap-4 items-center justify-center">
                <Button
                  href={portfolioData.hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="icon"
                  icon={FaLinkedin}
                  aria-label="LinkedIn"
                />
                <Button
                  href={portfolioData.hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="icon"
                  icon={FaGithub}
                  aria-label="GitHub"
                />
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="icon"
                  icon={FaWhatsapp}
                  aria-label="WhatsApp"
                />
              </div>
              <Button href={`mailto:${portfolioData.hero.email}`} variant="iconText">
                <FaEnvelope className="flex-none text-xl" />
                <span className="text-sm font-medium truncate">{portfolioData.hero.email}</span>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-md relative mx-auto lg:mx-0">
            <div className="relative aspect-square w-full">
              <motion.div
                animate={{ rotate: [6, 12, 6], scale: [1.05, 1.1, 1.05] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-blue-light to-blue rounded-2xl opacity-30 blur-sm"
              />
              <motion.div
                animate={{ rotate: [-3, -9, -3], scale: [1.05, 1.1, 1.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-tl from-blue to-transparent rounded-2xl opacity-40 blur-sm"
              />

              <div className="relative w-full h-full rounded-2xl border-2 border-blue-light/30 overflow-hidden bg-background shadow-[0_0_30px_rgba(59,130,246,0.3)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 opacity-60" />
                <img
                  src="/images/profile.jpg"
                  alt={`${portfolioData.hero.name} - ${portfolioData.hero.title}`}
                  width="512"
                  height="512"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      'https://ui-avatars.com/api/?name=Luis+Melita&size=512&background=0D0D0D&color=3B82F6&rounded=false&bold=true';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
