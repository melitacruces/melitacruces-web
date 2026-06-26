import { FaReact, FaCss, FaHtml5, FaJs, FaServer, FaMicrochip } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiVite, SiPostgresql, SiArduino, SiCplusplus, SiMysql, SiPython } from 'react-icons/si';
import { techColors, FALLBACK_TECH_COLOR } from '@/data/techColors';

const ResendIcon = (props) => (
  <img src="https://cdn.resend.com/brand/resend-icon-white.svg" alt="Resend" {...props} style={{ width: '1em', height: '1em', display: 'inline-block', ...props.style }} />
);

export default function TechBadge({ tech }) {



  const tMap = {
    "Vite": { icon: SiVite, key: 'vite' },
    "React": { icon: FaReact, key: 'react' },
    "CSS": { icon: FaCss, key: 'css' },
    "HTML": { icon: FaHtml5, key: 'html' },
    "JavaScript": { icon: FaJs, key: 'js' },
    "Tailwind": { icon: SiTailwindcss, key: 'tailwind' },
    "Next.js": { icon: SiNextdotjs, key: 'nextjs' },
    "PostgreSQL": { icon: SiPostgresql, key: 'postgresql' },
    "Neon DB": { icon: FaServer, key: 'neon' },
    "Resend": { icon: ResendIcon, key: 'resend' },
    "Arduino": { icon: SiArduino, key: 'arduino' },
    "C++": { icon: SiCplusplus, key: 'cpp' },
    "MySQL": { icon: SiMysql, key: 'mysql' },
    "Python": { icon: SiPython, key: 'python' }
  };

  const config = tMap[tech] || { icon: FaMicrochip, key: null };
  const Icon = config.icon;
  const color = techColors[config.key] || FALLBACK_TECH_COLOR;

  return (
    <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border overflow-hidden shadow-sm" style={{ backgroundColor: '#121216', borderColor: `${color}30` }}>
      <Icon style={{ color }} className="text-xs" />
      <span className="text-xs font-semibold tracking-wider" style={{ color }}>{tech}</span>
    </div>
  );
}
