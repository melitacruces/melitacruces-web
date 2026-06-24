import { FaGithub, FaUpRightFromSquare, FaLock } from 'react-icons/fa6';
import { TechBadge, Panel, Button } from '@/components';


export default function ProjectCard({ proj }) {
  return (
    <Panel
      padding="none"
      className="overflow-hidden group h-full flex flex-col"
    >
      <div className="relative w-full aspect-video overflow-hidden bg-black rounded-t-2xl transform-gpu">
        {proj.image && (
          <img
            src={proj.image}
            alt={proj.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        )}
        {}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-black border border-white/10 rounded-2xl text-xs text-blue-light uppercase font-bold tracking-widest shadow-lg">
            {proj.category}
          </span>
        </div>
      </div>


      {}
      <div className="p-5 sm:p-6 flex flex-col flex-grow relative gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground/90 group-hover:text-blue-light transition-colors leading-tight tracking-tight">
          {proj.title}
        </h3>

        <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed">{proj.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {proj.techStack.map((tech, i) => (
            <TechBadge key={i} tech={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 w-full">
          {proj.githubUrl === 'private' ? (
            <Button
              variant="secondary"
              icon={FaLock}
              className="h-10 px-2 sm:px-4 flex-1 opacity-50 cursor-not-allowed pointer-events-none"
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
              className="h-10 px-2 sm:px-4 flex-1"
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
              className="h-10 px-2 sm:px-4 flex-1"
            >
              Preview
            </Button>
          )}
        </div>
      </div>
    </Panel>
  );
}
