import { FaReact, FaCss, FaHtml5, FaJs, FaServer, FaMicrochip } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiVite, SiPostgresql } from 'react-icons/si';

const ResendIcon = (props) => (
  <img src="https://cdn.resend.com/brand/resend-icon-white.svg" alt="Resend" {...props} style={{ width: '1em', height: '1em', display: 'inline-block', ...props.style }} />
);

export default function TechBadge({ tech }) {



  const tMap = {
    "Vite": { icon: SiVite, color: "#646CFF" },
    "React": { icon: FaReact, color: "#61DAFB" },
    "CSS": { icon: FaCss, color: "#1572B6" },
    "HTML": { icon: FaHtml5, color: "#E34F26" },
    "JavaScript": { icon: FaJs, color: "#F7DF1E" },
    "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
    "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
    "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
    "Neon DB": { icon: FaServer, color: "#00e599" },
    "Resend": { icon: ResendIcon, color: "#FFFFFF" }
  };

  const config = tMap[tech] || { icon: FaMicrochip, color: "#f3f4f6" };
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border overflow-hidden shadow-sm" style={{ backgroundColor: '#121216', borderColor: `${config.color}30` }}>
      <Icon style={{ color: config.color }} className="text-xs" />
      <span className="text-xs font-semibold tracking-wider" style={{ color: config.color }}>{tech}</span>
    </div>
  );
}
