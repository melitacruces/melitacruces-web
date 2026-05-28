import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function GlassCard({ children, className = "", delay = 0, noHover = false, padding = "md", ...props }) {
  const paddingMap = {
    none: "p-0",
    sm: "p-5 sm:p-6",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-12",
  };
  
  const paddingClass = paddingMap[padding] || paddingMap["md"];

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (noHover) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleMouseEnter = () => {
    if (noHover) return;
    document.body.classList.add('hovering-card');
  };

  const handleMouseLeave = () => {
    if (noHover) return;
    document.body.classList.remove('hovering-card');
  };

  // Prevents cursor getting stuck 
  useEffect(() => {
    return () => document.body.classList.remove('hovering-card');
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      className={`glass-panel group relative flex flex-col overflow-hidden ${paddingClass} ${className}`}
    >
      {/* Internal Flare Spotlight — kept subtle so foreground content (tags, buttons, text) isn't washed out by the blue wash */}
      {!noHover && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
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
    </motion.div>
  );
}
