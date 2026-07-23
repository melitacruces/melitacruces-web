import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Panel({ children, className = '', padding = 'md', ...props }) {
  const [isHovering, setIsHovering] = useState(false);
  const paddingMap = {
    none: 'p-0',
    sm: 'p-5 sm:p-6',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-12',
  };
  const paddingClass = paddingMap[padding] || paddingMap.md;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      450px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.40),
      rgba(59, 130, 246, 0.15) 45%,
      transparent 72%
    )
  `;

  const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isTouchDevice()) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleMouseEnter = () => {
    if (isTouchDevice()) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice()) return;
    setIsHovering(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      className={`base-panel group relative flex flex-col overflow-hidden ${paddingClass} ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: isHovering ? 0.3 : 0 }}
        style={{ background: spotlightBackground }}
      />

      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
