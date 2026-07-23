import {
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCloudflare,
  FaCode,
  FaCss,
  FaDatabase,
  FaFileExcel,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRobot,
} from 'react-icons/fa6';
import {
  SiArduino,
  SiAstro,
  SiAutocad,
  SiCplusplus,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';
import { Panel, SectionTitle } from '@/components';
import ResendIcon from '@/components/ResendIcon';
import { portfolioData } from '@/data/portfolioData';
import { FALLBACK_TECH_COLOR, techColors } from '@/data/techColors';

// Este mapa centraliza los componentes de íconos, mientras los colores se comparten desde techColors.
const skillIcons = {
  astro: SiAstro,
  html: FaHtml5,
  css: FaCss,
  tailwind: SiTailwindcss,
  js: FaJs,
  react: FaReact,
  nextjs: SiNextdotjs,
  nodejs: FaNodeJs,
  php: SiPhp,
  python: FaPython,
  git: FaGitAlt,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  sql: FaDatabase,
  cloudflare: FaCloudflare,
  resend: ResendIcon,
  ml: FaBrain,
  ai: FaRobot,
  powerbi: FaChartBar,
  excel: FaFileExcel,
  arduino: SiArduino,
  cpp: SiCplusplus,
  autocad: SiAutocad,
  management: FaChartLine,
  inventory: FaLayerGroup,
};

export default function Skills() {
  return (
    <section className="container section" id="skills">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle>Habilidades y Competencias</SectionTitle>
          <p className="section-lead">
            Herramientas, tecnologías y aptitudes que he cultivado para resolver problemas complejos y aportar valor estructural.
          </p>
        </div>

        <div className="mt-10 w-full max-w-5xl mx-auto flex flex-col gap-8">
          <Panel padding="md" className="w-full overflow-hidden group">
            <div className="mb-6 flex justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">
                Habilidades Técnicas
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              {portfolioData.skills.hard.map((categoryGroup) => (
                <div key={categoryGroup.category} className="flex flex-col gap-3 items-center">
                  <h4 className="text-xs sm:text-sm font-bold text-blue-light/80 uppercase tracking-widest text-center mb-1">
                    {categoryGroup.category}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {categoryGroup.items.map((skill) => {
                      const Icon = skillIcons[skill.iconKey] || FaCode;
                      const iconColor = techColors[skill.iconKey] || FALLBACK_TECH_COLOR;

                      return (
                        <div
                          key={skill.name}
                          className="group flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-background border border-panel-border shadow-[0_1px_2px_rgba(59,130,246,0.14),0_4px_12px_rgba(59,130,246,0.10)] hover:bg-blue/14 hover:border-blue-light/45 hover:shadow-[0_0_20px_rgba(59,130,246,0.32)] transition-all duration-300 cursor-default w-auto min-w-[120px]"
                        >
                          <Icon className="text-lg" style={{ color: iconColor }} />
                          <span className="text-sm font-semibold tracking-wide text-foreground/90 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel padding="md" className="w-full overflow-hidden group mt-2">
            <div className="mb-6 flex justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">
                Habilidades Blandas
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
              {portfolioData.skills.soft.map((skill) => (
                <div
                  key={skill}
                  className="group flex flex-row items-center justify-center px-6 py-3.5 rounded-2xl bg-background border border-panel-border shadow-[0_1px_2px_rgba(59,130,246,0.14),0_4px_12px_rgba(59,130,246,0.10)] hover:bg-blue/14 hover:border-blue-light/45 hover:shadow-[0_0_20px_rgba(59,130,246,0.32)] transition-all duration-300 cursor-default w-auto min-w-[140px]"
                >
                  <span className="text-sm font-semibold tracking-wide text-foreground/90 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
