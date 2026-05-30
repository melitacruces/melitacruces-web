// Aquí centralizo toda la información de mi portafolio (textos, links, proyectos, etc.).
// Decidí hacerlo así para que si el día de mañana necesito actualizar mi experiencia o cambiar un texto, 
// solo deba modificar este archivo en lugar de buscar por todos los componentes de React.
export const portfolioData = {
  // Datos principales de la sección Hero (la pantalla inicial).
  hero: {
    name: "Luis Andrés Melita Cruces",
    title: "Ingeniero Civil Industrial & Desarrollador Full Stack",
    roles: [
      "Ingeniero Civil Industrial",
      "Desarrollador Full Stack"
    ],
    subtitle: "Enfocado en la transformación tecnológica y la optimización de procesos empresariales, creando soluciones de alto impacto mediante el análisis de datos, la inteligencia artificial y el desarrollo web full-stack.",
    email: "melitacruces@gmail.com",
    phone: "+56953696101",
    linkedin: "https://linkedin.com/in/melitacruces",
    github: "https://github.com/melitacruces",
    location: "Concepción, Chile",
    cvUrl: "/documents/cv.pdf"
  },
  about: "Soy un Ingeniero Civil Industrial y Desarrollador Full Stack impulsado por la intersección entre la optimización de procesos, el análisis de datos y la creación de soluciones tecnológicas. Me especializo en diseñar e implementar plataformas web integrales, conectando una sólida infraestructura en el back-end con interfaces front-end modernas y funcionales. Mi enfoque combina la visión analítica y estratégica de la ingeniería con la capacidad técnica para materializar herramientas digitales que mejoran la eficiencia operativa y la toma de decisiones. Destaco por mi proactividad, adaptabilidad y una mentalidad orientada a la mejora continua y al desarrollo de productos de alto impacto.",
  education: [
    {
      degree: "Ingeniero Civil Industrial",
      institution: "Universidad de Concepción",
      secondaryDegree: "Licenciado en Ciencias de la Ingeniería",
      year: "2019 - 2024",
      description: "",
      certificates: [
        { name: "Certificado de Título", file: "/certificates/titulo.pdf" },
        { name: "Certificado de Grado", file: "/certificates/grado.pdf" }
      ]
    }
  ],
  certifications: [
    {
      name: "Microsoft Python Development",
      institution: "Microsoft / Coursera",
      year: "2026",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/QMNGIPYWX81C",
      file: "/certificates/microsoft-python-development.pdf",
      description: "Certificación profesional enfocada en el desarrollo de software y en el análisis de datos utilizando Python."
    },
    {
      name: "Google Advanced Data Analytics",
      institution: "Google / Coursera",
      year: "2026",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/TO29S7NA14A5",
      file: "/certificates/google-advanced-data-analytics.pdf",
      description: "Certificación profesional enfocada en el análisis avanzado de datos, machine learning, programación estadística y construcción de modelos predictivos."
    },
    {
      name: "Meta Front-End Developer",
      institution: "Meta / Coursera",
      year: "2026",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/PP41QMJIBJL8",
      file: "/certificates/meta-front-end-developer.pdf",
      description: "Certificación profesional enfocada en el desarrollo front-end, diseño de interfaces de usuario (UX/UI) y construcción de aplicaciones web con React."
    }
  ],
  skills: {
    hard: [
      {
        category: "Front End",
        items: [
          { name: "HTML", level: "Avanzado", iconKey: "html" },
          { name: "CSS", level: "Avanzado", iconKey: "css" },
          { name: "Tailwind CSS", level: "Avanzado", iconKey: "tailwind" },
          { name: "JavaScript", level: "Avanzado", iconKey: "js" },
          { name: "React", level: "Intermedio", iconKey: "react" },
          { name: "Next.js", level: "Intermedio", iconKey: "nextjs" }
        ]
      },
      {
        category: "Back End & Bases de Datos",
        items: [
          { name: "Node.js", level: "Intermedio", iconKey: "nodejs" },
          { name: "PHP", level: "Intermedio", iconKey: "php" },
          { name: "MySQL", level: "Avanzado", iconKey: "mysql" },
          { name: "PostgreSQL", level: "Intermedio", iconKey: "postgresql" },
          { name: "Supabase", level: "Intermedio", iconKey: "supabase" },
          { name: "SQL", level: "Avanzado", iconKey: "sql" }
        ]
      },
      {
        category: "Ciencia de Datos & IA",
        items: [
          { name: "Python", level: "Avanzado", iconKey: "python" },
          { name: "Machine Learning", level: "Intermedio", iconKey: "ml" },
          { name: "LLMs & Fine-Tuning", level: "Intermedio", iconKey: "ai" },
          { name: "Power BI", level: "Intermedio", iconKey: "powerbi" },
          { name: "Excel Avanzado", level: "Avanzado", iconKey: "excel" }
        ]
      },
      {
        category: "Ingeniería & Operaciones",
        items: [
          { name: "Control de Gestión", level: "Avanzado", iconKey: "management" },
          { name: "Gestión de Inventarios", level: "Avanzado", iconKey: "inventory" },
          { name: "AutoCAD", level: "Intermedio", iconKey: "autocad" }
        ]
      },
      {
        category: "Herramientas & Ecosistema",
        items: [
          { name: "Git", level: "Avanzado", iconKey: "git" },
          { name: "Cloudflare", level: "Intermedio", iconKey: "cloudflare" },
          { name: "Resend", level: "Intermedio", iconKey: "resend" }
        ]
      }
    ],
    soft: [
      "Trabajo en equipo",
      "Adaptabilidad y aprendizaje continuo",
      "Gestión del tiempo y organización",
      "Liderazgo y toma de decisiones",
      "Pensamiento crítico y resolución de problemas"
    ]
  },
  projects: [
    {
      title: "ValueDev | Landing Page Corporativa",
      category: "Front-End Development",
      image: "/images/valuedev.png",
      liveUrl: "https://valuedev-web.vercel.app/",
      githubUrl: "private",
      description: "Desarrollo e implementación del sitio web institucional para la empresa de soluciones tecnológicas ValueDev SpA. Diseñé e implementé una interfaz responsiva y de alto rendimiento, optimizando tiempos de carga y SEO, además de estructurar componentes modulares y reutilizables.",
      techStack: ["Vite", "React", "Tailwind"]
    }
  ],
  otherProjects: [
    {
      title: "Nanae | Portafolio Musical",
      category: "Front-End Development",
      image: "/images/nanae.png",
      liveUrl: "https://nanae.cl/",
      githubUrl: "https://github.com/melitacruces/nanae-web",
      description: "Landing page interactiva de estética Y2K para artista musical. Construida nativamente con Vanilla JS y Tailwind CSS, priorizando el máximo rendimiento, animaciones fluidas y optimización SEO orgánica.",
      techStack: ["HTML", "CSS", "Tailwind", "JavaScript"]
    },
    {
      title: "Panel de Inventario Personal",
      category: "Full Stack Development",
      image: "/images/dhreian-setup.png",
      liveUrl: "https://setup.dhreian.com/",
      githubUrl: "https://github.com/melitacruces/dhreian-setup",
      description: "Panel full-stack minimalista (Next.js, PostgreSQL) para gestionar y exhibir equipamiento de estudio. Actúa simultáneamente como vitrina pública y CMS privado, destacando por su diseño brutalista y alto rendimiento.",
      techStack: ["Next.js", "React", "Tailwind", "Neon DB", "PostgreSQL"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "ValueDev SpA",
      year: "2025 - Presente",
      description: "Desarrollé de forma integral plataformas web orientadas a la digitalización de procesos empresariales. Mi labor abarcó desde la creación de interfaces front-end responsivas (HTML, CSS, JavaScript) y la implementación de arquitectura back-end con bases de datos SQL, pasando por la gestión de la infraestructura de dominio y hosting, hasta el diseño de paneles administrativos personalizados. Además, integré principios de ingeniería industrial para optimizar flujos de trabajo mediante KPIs, logrando combinar una sólida ejecución técnica con una visión analítica enfocada en la eficiencia operativa y la experiencia del usuario final."
    },
    {
      role: "Assistant Project Manager",
      company: "Universidad de Concepción",
      year: "2024",
      description: "Como parte de un proyecto Fondecyt (IDEALab), participé en el desarrollo y ejecución de estrategias de fine-tuning para Modelos de Lenguaje de Gran Tamaño (LLMs) aplicados a la resolución de problemas matemáticos. Mi labor integral abarcó desde liderar la evaluación y selección de modelos en base a sus capacidades de razonamiento, pasando por la recopilación y procesamiento de datasets especializados, hasta el entrenamiento y validación final, logrando optimizar el desempeño de los modelos con mejoras significativas en la precisión y relevancia de sus respuestas."
    },
    {
      role: "Research Assistant",
      company: "Centro de Datos e Inteligencia Artificial, UdeC",
      year: "2024",
      description: "Formé parte de un equipo especializado en la seguridad de Modelos de Lenguaje de Gran Tamaño (LLM Security). Mi labor abarcó desde el diseño y desarrollo de mecanismos de evaluación para medir el desempeño de chatbots en entornos operativos reales, hasta la implementación técnica de Retrieval-Augmented Generation (RAG) y Fine-Tuning. Esto permitió mejorar de manera directa la precisión, seguridad y robustez de los modelos, culminando en la entrega y documentación de recomendaciones técnicas para optimizar el comportamiento de sistemas conversacionales basados en IA."
    },
    {
      role: "Programa de Vinculación Estudiante-Empresa",
      company: "IncubaUdeC",
      year: "2023",
      description: "Colaboré estrechamente con la start-up Exovet en la identificación y propuesta de mejoras para su modelo de negocio. Mi labor abarcó desde la ejecución de un estudio de mercado y análisis financiero para definir claras oportunidades de crecimiento, posicionamiento y rentabilidad, hasta la elaboración de un informe de evaluación económica y legal. Este trabajo integral proporcionó los insumos fundamentales para respaldar la toma de decisiones estratégicas de la empresa."
    }
  ]
};
