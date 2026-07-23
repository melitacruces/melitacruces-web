import { FaCss, FaHtml5, FaJs, FaMicrochip, FaReact, FaWaveSquare } from 'react-icons/fa6';
import {
  SiArduino,
  SiAstro,
  SiCplusplus,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiSupabase,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { techColors, FALLBACK_TECH_COLOR } from '@/data/techColors';
import ResendIcon from '@/components/ResendIcon';

const TECH_CONFIG = {
  Arduino: { icon: SiArduino, colorKey: 'arduino' },
  Astro: { icon: SiAstro, colorKey: 'astro' },
  'C++': { icon: SiCplusplus, colorKey: 'cpp' },
  CSS: { icon: FaCss, colorKey: 'css' },
  HTML: { icon: FaHtml5, colorKey: 'html' },
  JavaScript: { icon: FaJs, colorKey: 'js' },
  MySQL: { icon: SiMysql, colorKey: 'mysql' },
  'Next.js': { icon: SiNextdotjs, colorKey: 'nextjs' },
  PostgreSQL: { icon: SiPostgresql, colorKey: 'postgresql' },
  Python: { icon: SiPython, colorKey: 'python' },
  React: { icon: FaReact, colorKey: 'react' },
  Resend: { icon: ResendIcon, colorKey: 'resend' },
  Supabase: { icon: SiSupabase, colorKey: 'supabase' },
  Tailwind: { icon: SiTailwindcss, colorKey: 'tailwind' },
  Vite: { icon: SiVite, colorKey: 'vite' },
  'Web Audio API': { icon: FaWaveSquare, colorKey: 'webaudio' },
};

export default function TechBadge({ tech }) {
  const { icon: Icon, colorKey } = TECH_CONFIG[tech] || {
    icon: FaMicrochip,
    colorKey: null,
  };
  const color = techColors[colorKey] || FALLBACK_TECH_COLOR;

  return (
    <div
      className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border overflow-hidden shadow-sm"
      style={{ backgroundColor: '#121216', borderColor: `${color}30` }}
    >
      <Icon style={{ color }} className="text-xs" />
      <span className="text-xs font-semibold tracking-wider" style={{ color }}>
        {tech}
      </span>
    </div>
  );
}
