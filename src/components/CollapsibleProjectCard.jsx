import { FaGithub, FaUpRightFromSquare, FaChevronDown, FaLock } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import TechBadge from './TechBadge';
import GlassCard from './GlassCard';
import Button from './Button';

export default function CollapsibleProjectCard({ proj, index, isExpanded, onToggle }) {
  return (
    <GlassCard
      delay={index * 150}
      padding="none"
      onClick={onToggle}
      className="overflow-hidden group transition-all duration-500 flex flex-col cursor-pointer"
    >
      {/* Preload image eagerly so it's ready when card expands */}
      {proj.image && (
        <img
          src={proj.image}
          alt=""
          aria-hidden="true"
          className="sr-only"
          loading="eager"
          decoding="async"
        />
      )}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full overflow-hidden"
          >
            <div className="relative w-full aspect-video bg-black">
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  decoding="async"
                />
              )}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl text-xs text-blue-light uppercase font-bold tracking-widest shadow-lg">
                  {proj.category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-5 sm:p-6 flex flex-col flex-grow relative gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground/90 group-hover:text-blue-light transition-colors leading-tight tracking-tight line-clamp-2">
          {proj.title}
        </h3>

        <p
          className={`text-sm md:text-base font-light text-foreground/70 leading-relaxed ${
            isExpanded ? '' : 'line-clamp-2'
          }`}
        >
          {proj.description}
        </p>

        <div className="flex flex-col mt-auto w-full">
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                animate={{ height: 'auto', opacity: 1, marginBottom: 20 }}
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, i) => (
                    <TechBadge key={i} tech={tech} />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 w-full" onClick={(e) => e.stopPropagation()}>
                  {proj.githubUrl === 'private' ? (
                    <Button
                      variant="secondary"
                      icon={FaLock}
                      className="h-10 px-4 sm:px-6 shrink-0 opacity-50 cursor-not-allowed pointer-events-none"
                      disabled
                      noShadow
                      noHover
                    >
                      Privado
                    </Button>
                  ) : (
                    <Button
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      icon={FaGithub}
                      className="h-10 px-4 sm:px-6 shrink-0"
                    >
                      Código
                    </Button>
                  )}
                  {proj.liveUrl !== '#' && (
                    <Button
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      icon={FaUpRightFromSquare}
                      className="h-10 px-4 sm:px-6 shrink-0"
                    >
                      Preview
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-full flex items-center justify-center text-foreground/50 transition-colors">
            <FaChevronDown
              className={`transition-transform duration-500 ease-[0.04,0.62,0.23,0.98] ${
                isExpanded ? 'rotate-180 text-blue-light' : 'rotate-0 group-hover:text-blue-light'
              } text-xl`}
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
