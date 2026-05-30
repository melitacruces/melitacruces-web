import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// Creé este cursor global para darle una experiencia más interactiva y fluida al usuario,
// reemplazando el puntero por defecto de los navegadores de escritorio.
export default function GlobalCursor() {
  const [isHovered, setIsHovered] = useState(false); // Detecto si el cursor está sobre un elemento interactivo
  const [isClicked, setIsClicked] = useState(false); // Detecto si el usuario está haciendo click
  const [isVisible, setIsVisible] = useState(false); // Para ocultar el cursor si sale de la ventana
  const [isOverInput, setIsOverInput] = useState(false); // Oculto este cursor si el usuario está escribiendo
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Utilizo un useEffect para configurar todos los listeners necesarios para rastrear el movimiento del ratón.
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInput = target.closest('input, textarea, select, iframe');
      setIsOverInput(!!isInput);
      
      const isInteractive = target.closest('a, button, [role="button"], .interactive-hover, .cursor-pointer');
      if (isInteractive) {
        setIsHovered(true);
      }
    };
    
    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = target.closest('a, button, [role="button"], .interactive-hover, .cursor-pointer');
      if (isInteractive) {
        setIsHovered(false);
      }
    };
    
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible || isOverInput) return null;

  return (
    <>
      {/* 1. Background Glow without CSS blur filter to avoid Chromium backdrop-filter bugs */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden sm:block w-32 h-32 -ml-[64px] -mt-[64px] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
        }}
      />

      {/* 2. Custom Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[101] hidden sm:block w-9 h-9 -ml-[18px] -mt-[18px] border-2 border-blue-light/75 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0)',
          borderColor: isHovered ? '#60A5FA' : 'rgba(147, 197, 253, 0.75)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </>
  );
}
