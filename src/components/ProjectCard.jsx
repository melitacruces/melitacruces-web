import Panel from '@/components/Panel';
import ProjectActions from '@/components/ProjectActions';
import TechBadge from '@/components/TechBadge';

export default function ProjectCard({ project }) {
  return (
    <Panel padding="none" className="overflow-hidden group h-full flex flex-col">
      <div className="relative w-full aspect-video overflow-hidden bg-black rounded-t-2xl transform-gpu">
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
          <span className="px-3 py-1.5 bg-black border border-white/10 rounded-2xl text-xs text-blue-light uppercase font-bold tracking-widest shadow-lg">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow relative gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground/90 group-hover:text-blue-light transition-colors leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <ProjectActions project={project} />
      </div>
    </Panel>
  );
}
