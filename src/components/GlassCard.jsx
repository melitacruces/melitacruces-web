import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useReveal } from '@/hooks';

// Este componente es la base visual de mi diseño.
// GlassCard aplica el efecto "glassmorphism" translúcido a los contenedores,
// que le da ese toque premium y moderno al portafolio.
export default function GlassCard({ children, className = "", delay = 0, noHover = false, padding = "md", ...props }) {
  const [isHovering, setIsHovering] = useState(false);
  // Defino distintos tamaños de padding para no repetir clases de Tailwind en cada uso.
  const paddingMap = {
    none: "p-0",
    sm: "p-5 sm:p-6",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-12",
  };

  const paddingClass = paddingMap[padding] || paddingMap["md"];

  // Animación de aparición al hacer scroll. Antes la hacía con `whileInView` de
  // Framer Motion, pero al anidar tarjetas y contenido ambos se animaban a la
  // vez: los desplazamientos se sumaban (velocidad despareja) y las opacidades
  // se multiplicaban (parpadeo). Ahora cada tarjeta se anima una sola vez, de
  // forma independiente y con la misma curva. Ver src/hooks/useReveal.js.
  const revealRef = useReveal(delay);

  // Configuro variables de movimiento para el efecto de iluminación (spotlight) al pasar el cursor.
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  // Reviso si estoy en un dispositivo móvil para desactivar los hover interactivos,
  // así evito glitches visuales cuando la pantalla se toca para hacer scroll.
  const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

  // Calculo las coordenadas relativas del ratón sobre la tarjeta.
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (noHover || isTouchDevice()) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleMouseEnter = () => {
    if (noHover || isTouchDevice()) return;
    document.body.classList.add('hovering-card');
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (noHover || isTouchDevice()) return;
    document.body.classList.remove('hovering-card');
    setIsHovering(false);
  };

  // Prevents cursor getting stuck
  useEffect(() => {
    return () => document.body.classList.remove('hovering-card');
  }, []);

  return (
    <div
      ref={revealRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      className={`reveal glass-panel group relative flex flex-col overflow-hidden ${paddingClass} ${className}`}
    >
      {/* Internal Flare Spotlight — kept subtle so foreground content (tags, buttons, text) isn't washed out by the blue wash */}
      {!noHover && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: isHovering ? 0.3 : 0 }}
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.16),
                transparent 70%
              )
            `,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
}
