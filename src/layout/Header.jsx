import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaUserTie, FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';

// Limpio el número de teléfono para que la API de WhatsApp lo reconozca correctamente,
// eliminando espacios y el signo +.
const whatsappNumber = portfolioData.hero.phone.replace(/\D/g, '');
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// Este es el encabezado principal de la página, diseñado para ser un menú flotante con efecto glassmorphism.
export default function Header() {
  // Manejo el estado de si el usuario ha hecho scroll para cambiar el estilo del header.
  const [scrolled, setScrolled] = useState(false);

  // Valores de movimiento para el efecto visual interactivo (spotlight) que sigue al cursor.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // Esta función calcula la posición exacta del cursor relativa al header.
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Defino el gradiente radial que actuará como el "reflejo" o "spotlight" en el header.
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      700px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.25),
      transparent 80%
    )
  `;

  // Agrego un listener al evento scroll para detectar cuándo aplicar el efecto "scrolled" (cuando bajo más de 20px).
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Utilizo framer-motion para darle una animación de entrada suave cuando carga la página.
    <motion.header
      className={`fixed top-4 py-3 left-0 right-0 mx-auto max-w-6xl z-50 transition-[background-color,border-color,box-shadow] duration-300 rounded-2xl px-6 flex justify-between items-center group overflow-hidden border ${
        scrolled
          ? 'border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.6)] bg-background/60 backdrop-blur-xl'
          : 'bg-transparent border-transparent shadow-none backdrop-blur-none'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        // Añado una clase al body para interactuar con mi cursor global personalizado.
        document.body.classList.add('hovering-card');
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        document.body.classList.remove('hovering-card');
        setIsHovering(false);
      }}
    >
      {/* Spotlight Interno: Solo se muestra si he hecho scroll y el ratón está encima. Da una sensación premium. */}
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

      {/* Mi logotipo o iniciales en el lado izquierdo. Un diseño minimalista que identifica mi marca personal. */}
      <a
        href="#home"
        className="text-xl sm:text-2xl font-bold tracking-tighter hover:text-blue-light transition-colors flex items-center gap-2 z-10 relative"
      >
        <FaUserTie className="text-[1em] text-blue transition-colors group-hover:text-blue-light" />
        <span>MC</span>
      </a>

      {/* Navegación central (oculta en móviles, visible en pantallas medianas hacia arriba) */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 text-sm lg:text-base font-medium text-foreground/80 pointer-events-auto whitespace-nowrap">
        <a href="#about" className="hover:text-blue transition-colors">Sobre Mí</a>
        <a href="#education" className="hover:text-blue transition-colors">Formación</a>
        <a href="#skills" className="hover:text-blue transition-colors">Habilidades</a>
        <a href="#projects" className="hover:text-blue transition-colors">Proyectos</a>
        <a href="#experience" className="hover:text-blue transition-colors">Experiencia</a>
      </nav>

      {/* Enlaces a mis redes sociales y métodos de contacto, alineados a la derecha. */}
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
    </motion.header>
  );
}
