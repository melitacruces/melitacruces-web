// Fuente única de verdad para los colores de marca de cada tecnología.
// La importan tanto la sección de Habilidades Técnicas (Skills) como las
// insignias de los proyectos (TechBadge), de modo que el color de una
// tecnología sea idéntico en todo el sitio y nunca se desincronice.
//
// Las claves coinciden con los `iconKey` usados en portfolioData / Skills.
export const techColors = {
  // Front End
  html: '#E34F26',
  css: '#3E9BE0',
  tailwind: '#06B6D4',
  js: '#F7DF1E',
  react: '#61DAFB',
  nextjs: '#FFFFFF',
  vite: '#646CFF',

  // Back End & Bases de Datos
  cpp: '#659AD2',
  nodejs: '#339933',
  php: '#777BB4',
  mysql: '#5FAAD4',
  postgresql: '#4169E1',
  neon: '#00E599',
  supabase: '#3ECF8E',
  sql: '#CC2927',

  // Ciencia de Datos & IA
  python: '#5A9FD4',
  ml: '#EE4C2C',
  ai: '#FFD21E',
  powerbi: '#F2C811',
  excel: '#217346',

  // Ingeniería & Operaciones
  autocad: '#DF222A',
  management: '#93C5FD',
  inventory: '#93C5FD',

  // Herramientas & Ecosistema
  arduino: '#1FBDC4',
  cloudflare: '#F38020',
  git: '#F05032',
  resend: '#FFFFFF',
};

// Color de respaldo cuando una tecnología no está registrada (= foreground).
export const FALLBACK_TECH_COLOR = '#f3f4f6';
