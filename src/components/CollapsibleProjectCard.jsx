import { FaChevronDown } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';
import Panel from '@/components/Panel';
import ProjectActions from '@/components/ProjectActions';
import TechBadge from '@/components/TechBadge';

export default function CollapsibleProjectCard({
  project,
  isExpanded,
  collapsedDescriptionLines = 2,
  collapsedMinHeight,
  onCollapseComplete,
  onToggle,
}) {
  const collapsedDescriptionStyle = isExpanded
    ? undefined
    : {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: collapsedDescriptionLines,
      };

  return (
    <Panel
      as="article"
      padding="none"
      onClick={onToggle}
      data-collapsible-project-card
      className="overflow-hidden group flex flex-col cursor-pointer"
      style={!isExpanded && collapsedMinHeight ? { minHeight: collapsedMinHeight } : undefined}
    >
      {project.image && (
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          className="sr-only"
          loading="lazy"
          decoding="async"
        />
      )}
      <AnimatePresence initial={false} onExitComplete={onCollapseComplete}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full overflow-hidden rounded-t-2xl transform-gpu"
          >
            <div className="relative w-full aspect-video bg-black">
              {project.image && (
                <img
                  src={project.image}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="absolute left-3 bottom-3 z-20">
                <span className="px-3 py-1.5 bg-black border border-white/10 rounded-2xl text-xs text-tag-light uppercase font-bold tracking-widest shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        data-collapsible-project-content
        className="p-5 sm:p-6 flex flex-col flex-grow relative gap-4"
      >
        <h3
          data-collapsible-project-title
          className="text-xl sm:text-2xl font-bold text-foreground/90 group-hover:text-white transition-colors leading-tight tracking-tight line-clamp-3"
        >
          {project.title}
        </h3>

        <p
          data-collapsible-project-description
          className="text-sm md:text-base font-light text-foreground/70 leading-relaxed"
          style={collapsedDescriptionStyle}
        >
          {project.description}
        </p>

        <div data-collapsible-project-footer className="flex flex-col mt-auto w-full">
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
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>

                <ProjectActions
                  project={project}
                  onClick={(event) => event.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-full flex items-center justify-center text-foreground/50 transition-colors">
            <FaChevronDown
              className={`transition-transform duration-500 ease-[0.04,0.62,0.23,0.98] ${
                isExpanded ? 'rotate-180 text-white' : 'rotate-0 group-hover:text-white'
              } text-xl`}
            />
          </div>
        </div>
      </div>
    </Panel>
  );
}
