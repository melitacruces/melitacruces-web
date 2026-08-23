import { FaGithub, FaLock, FaUpRightFromSquare } from 'react-icons/fa6';
import Button from '@/components/Button';

export default function ProjectActions({ project, onClick }) {
  return (
    <div className="flex items-center justify-between gap-3 w-full" onClick={onClick}>
      {project.githubUrl === 'private' ? (
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
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          icon={FaGithub}
          className="h-10 px-2 sm:px-4 flex-1"
        >
          Código
        </Button>
      )}

      {project.liveUrl !== '#' && (
        <Button
          href={project.liveUrl}
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
  );
}
