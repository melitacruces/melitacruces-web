import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa6';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [noHover, setNoHover] = useState(true);

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed left-0 right-0 mx-auto max-w-6xl z-50 transition-all duration-500 rounded-2xl px-6 flex justify-between items-center group overflow-hidden border ${
        scrolled
          ? 'top-4 py-3 border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.6)] bg-background/60 backdrop-blur-xl'
          : 'top-6 py-4 bg-transparent border-transparent shadow-none backdrop-blur-none'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        document.body.classList.add('hovering-card');
        setNoHover(false);
      }}
      onMouseLeave={() => {
        document.body.classList.remove('hovering-card');
        setNoHover(true);
      }}
    >
      {/* Massive Internal Flare Spotlight (Only visible when scrolled and not transparent) */}
      {!noHover && scrolled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: spotlightBackground,
          }}
        />
      )}

      {/* Absolute positioning of inner nav ensures perfect geometric centering */}
      <a
        href="#home"
        className="text-xl sm:text-2xl font-bold tracking-tighter hover:text-blue-light transition-colors flex items-baseline gap-1.5 z-10 relative"
      >
        <FaUserTie className="text-[0.85em] text-blue transition-colors group-hover:text-blue-light self-baseline" />
        <span>MC</span>
      </a>

      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 text-sm lg:text-base font-medium text-foreground/80 pointer-events-auto whitespace-nowrap">
        <a href="#about" className="hover:text-blue transition-colors">Sobre Mí</a>
        <a href="#education" className="hover:text-blue transition-colors">Formación</a>
        <a href="#skills" className="hover:text-blue transition-colors">Habilidades</a>
        <a href="#projects" className="hover:text-blue transition-colors">Proyectos</a>
        <a href="#experience" className="hover:text-blue transition-colors">Experiencia</a>
      </nav>
    </motion.header>
  );
}
