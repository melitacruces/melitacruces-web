import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function GlobalCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 40); // 40 is half of 80px (w-20)
      cursorY.set(e.clientY - 40);
    };
    
    // Only track if it's a non-touch device
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", moveCursor);
    }
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div id="cursor-flare" className="pointer-events-none fixed inset-0 z-[100] transition-all duration-300 ease-in-out hidden sm:block mix-blend-screen">
      <motion.div
        className="absolute rounded-full bg-blue blur-[30px] w-20 h-20"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  );
}
