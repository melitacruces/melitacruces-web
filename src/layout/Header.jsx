import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaUserTie, FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';


const whatsappNumber = portfolioData.hero.phone.replace(/\D/g, '');
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      700px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.25),
      transparent 80%
    )
  `;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 py-3 left-0 right-0 mx-auto max-w-6xl z-50 transition-[background-color,border-color,box-shadow] duration-300 rounded-2xl px-6 flex justify-between items-center group overflow-hidden border ${
        scrolled
          ? 'border-panel-border shadow-[0_8px_32px_rgba(0,0,0,0.6)] bg-background/60 backdrop-blur-xl'
          : 'border-transparent bg-transparent shadow-none backdrop-blur-none'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {}
      {scrolled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: isHovering ? 0.3 : 0 }}
          style={{
            background: spotlightBackground,
          }}
        />
      )}

      {}
      <a
        href="#home"
        className="text-xl sm:text-2xl font-bold tracking-tighter hover:text-blue-light transition-colors flex items-center gap-2 z-10 relative"
      >
        <FaUserTie className="text-[1em] text-blue transition-colors group-hover:text-blue-light" />
        <span>MC</span>
      </a>

      {}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 text-sm lg:text-base font-medium text-foreground/80 pointer-events-auto whitespace-nowrap">
        <a href="#about" className="hover:text-blue transition-colors">Sobre Mí</a>
        <a href="#education" className="hover:text-blue transition-colors">Formación</a>
        <a href="#skills" className="hover:text-blue transition-colors">Habilidades</a>
        <a href="#projects" className="hover:text-blue transition-colors">Proyectos</a>
        <a href="#experience" className="hover:text-blue transition-colors">Experiencia</a>
      </nav>

      {}
      <div className="flex gap-3 sm:gap-4 items-center z-10 relative text-foreground/80">
        <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors" aria-label="LinkedIn">
          <FaLinkedin className="text-lg sm:text-xl" />
        </a>
        <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors" aria-label="GitHub">
          <FaGithub className="text-lg sm:text-xl" />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors" aria-label="WhatsApp">
          <FaWhatsapp className="text-lg sm:text-xl" />
        </a>
        <a href={`mailto:${portfolioData.hero.email}`} className="hover:text-blue transition-colors" aria-label="Correo">
          <FaEnvelope className="text-lg sm:text-xl" />
        </a>
      </div>
    </header>
  );
}
