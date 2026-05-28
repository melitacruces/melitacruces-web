import {
  FaReact, FaNodeJs, FaPython, FaCss, FaHtml5, FaSquareJs,
  FaDatabase, FaServer, FaRobot, FaCodeBranch, FaGears, FaMicrochip,
} from 'react-icons/fa6';
import { SiPytorch, SiHuggingface, SiTailwindcss, SiNextdotjs, SiVite, SiPostgresql } from 'react-icons/si';

export default function TechBadge({ tech }) {
  const tMap = {
    "Vite": { icon: SiVite, color: "#646CFF", bg: "rgba(100, 108, 255, 0.1)" },
    "React": { icon: FaReact, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)" },
    "Node.js": { icon: FaNodeJs, color: "#339933", bg: "rgba(51, 153, 51, 0.1)" },
    "Python": { icon: FaPython, color: "#3776AB", bg: "rgba(55, 118, 171, 0.1)" },
    "PyTorch": { icon: SiPytorch, color: "#EE4C2C", bg: "rgba(238, 76, 44, 0.1)" },
    "Hugging Face": { icon: SiHuggingface, color: "#FFD21E", bg: "rgba(255, 210, 30, 0.1)" },
    "CSS Vanilla": { icon: FaCss, color: "#1572B6", bg: "rgba(21, 114, 182, 0.1)" },
    "CSS": { icon: FaCss, color: "#1572B6", bg: "rgba(21, 114, 182, 0.1)" },
    "HTML": { icon: FaHtml5, color: "#E34F26", bg: "rgba(227, 79, 38, 0.1)" },
    "JavaScript": { icon: FaSquareJs, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.1)" },
    "Tailwind": { icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.1)" },
    "Next.js": { icon: SiNextdotjs, color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)" },
    "PostgreSQL": { icon: SiPostgresql, color: "#4169E1", bg: "rgba(65, 105, 225, 0.1)" },
    "Neon DB": { icon: FaServer, color: "#00e599", bg: "rgba(0, 229, 153, 0.1)" },
    "SQL": { icon: FaDatabase, color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" },
    // Nombres abstractos sin un logo específico claro
    "LLMs": { icon: FaRobot, color: "#93c5fd", bg: "rgba(147, 197, 253, 0.1)" },
    "RAG": { icon: FaCodeBranch, color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" },
    "LangChain": { icon: FaGears, color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" }
  };

  const config = tMap[tech] || { icon: FaMicrochip, color: "#f3f4f6", bg: "rgba(243, 244, 246, 0.1)" };
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border overflow-hidden shadow-sm" style={{ backgroundColor: config.bg, borderColor: `${config.color}30` }}>
      <Icon style={{ color: config.color }} className="text-xs" />
      <span className="text-xs font-semibold tracking-wider" style={{ color: config.color }}>{tech}</span>
    </div>
  );
}
