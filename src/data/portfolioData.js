export const portfolioData = {
  hero: {
    name: "Luis Melita",
    title: "Ingeniero Civil Industrial & Desarrollador Full Stack",
    roles: [
      "Ingeniero Civil Industrial",
      "Desarrollador Full Stack"
    ],
    subtitle: "Enfocado en la transformación tecnológica y la optimización de procesos empresariales, creando soluciones de alto impacto mediante el análisis de datos, la inteligencia artificial y el desarrollo web full stack.",
    email: "melitacruces@gmail.com",
    phone: "+56953696101",
    linkedin: "https://linkedin.com/in/melitacruces",
    github: "https://github.com/melitacruces",
    location: "Concepción, Chile",
    cvUrl: "/documents/cv.pdf"
  },
  about: "Soy Ingeniero Civil Industrial y Desarrollador Full Stack, impulsado por la intersección entre la optimización de procesos, el análisis de datos y la creación de soluciones tecnológicas. Me especializo en diseñar e implementar plataformas web integrales, conectando una sólida infraestructura en el back-end con interfaces front-end modernas y funcionales. Mi enfoque combina la visión analítica y estratégica de la ingeniería con la capacidad técnica para materializar herramientas digitales que mejoran la eficiencia operativa y la toma de decisiones. Destaco por mi proactividad, adaptabilidad y una mentalidad orientada a la mejora continua y al desarrollo de productos de alto impacto.",
  education: [
    {
      degree: "Ingeniero Civil Industrial",
      institution: "Universidad de Concepción",
      secondaryDegree: "Licenciado en Ciencias de la Ingeniería",
      year: "2019 - 2024",
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
      file: "/certificates/microsoft-python-development.pdf"
    },
    {
      name: "Google Advanced Data Analytics",
      institution: "Google / Coursera",
      file: "/certificates/google-advanced-data-analytics.pdf"
    },
    {
      name: "Meta Front-End Developer",
      institution: "Meta / Coursera",
      file: "/certificates/meta-front-end-developer.pdf"
    }
  ],
  skills: {
    hard: [
      {
        category: "Front-End",
        items: [
          { name: "Astro", iconKey: "astro" },
          { name: "CSS", iconKey: "css" },
          { name: "HTML", iconKey: "html" },
          { name: "JavaScript", iconKey: "js" },
          { name: "Next.js", iconKey: "nextjs" },
          { name: "React", iconKey: "react" },
          { name: "Tailwind CSS", iconKey: "tailwind" }
        ]
      },
      {
        category: "Back-End & Bases de Datos",
        items: [
          { name: "C++", iconKey: "cpp" },
          { name: "MySQL", iconKey: "mysql" },
          { name: "Node.js", iconKey: "nodejs" },
          { name: "PHP", iconKey: "php" },
          { name: "PostgreSQL", iconKey: "postgresql" },
          { name: "SQL", iconKey: "sql" },
          { name: "Supabase", iconKey: "supabase" }
        ]
      },
      {
        category: "Ciencia de Datos & IA",
        items: [
          { name: "Excel Avanzado", iconKey: "excel" },
          { name: "LLMs & Fine-Tuning", iconKey: "ai" },
          { name: "Machine Learning", iconKey: "ml" },
          { name: "Power BI", iconKey: "powerbi" },
          { name: "Python", iconKey: "python" }
        ]
      },
      {
        category: "Ingeniería & Operaciones",
        items: [
          { name: "AutoCAD", iconKey: "autocad" },
          { name: "Control de Gestión", iconKey: "management" },
          { name: "Gestión de Inventarios", iconKey: "inventory" }
        ]
      },
      {
        category: "Herramientas & Ecosistema",
        items: [
          { name: "Arduino", iconKey: "arduino" },
          { name: "Cloudflare", iconKey: "cloudflare" },
          { name: "Git", iconKey: "git" },
          { name: "Resend", iconKey: "resend" }
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
      title: "auroLab - Herramientas de Producción Musical",
      category: "Desarrollo Full Stack",
      image: "/images/aurolab.png",
      liveUrl: "https://aurolab.dhreian.com",
      githubUrl: "https://github.com/melitacruces/aurolab",
      description: "Desarrollo de una suite web para producción musical que convierte el BPM en valores precisos de delay y reverb, e integra un metrónomo interactivo, tap tempo y análisis local de BPM y tonalidad. Implementé el procesamiento de audio directamente en el navegador con Web Audio API, priorizando precisión, respuesta inmediata y privacidad.",
      techStack: ["Astro", "CSS", "JavaScript", "React", "Web Audio API"]
    },
    {
      title: "Control de Acceso Biométrico con Arduino",
      category: "IoT y Sistemas Embebidos",
      image: "/images/arduino-biometric.png",
      liveUrl: "https://youtube.com/watch?v=JEN6ze8029M",
      githubUrl: "https://github.com/melitacruces/arduino-biometric-access",
      description: "Sistema de control de acceso de doble factor que combina hardware Arduino con una aplicación de escritorio en Python. Diseñé e implementé la autenticación por huella dactilar y PIN, gestionando los datos de los usuarios en una base de datos MySQL mediante comunicación serial entre el firmware y la interfaz.",
      techStack: ["Arduino", "C++", "MySQL", "Python"]
    },
    {
      title: "Landing Page Corporativa (ValueDev)",
      category: "Desarrollo Front-End",
      image: "/images/valuedev.png",
      liveUrl: "https://valuedev-web.vercel.app/",
      githubUrl: "private",
      description: "Desarrollo e implementación del sitio web institucional para la empresa de soluciones tecnológicas ValueDev SpA. Diseñé e implementé una interfaz responsiva y de alto rendimiento, optimizando tiempos de carga y SEO, además de estructurar componentes modulares y reutilizables.",
      techStack: ["React", "Tailwind", "Vite"]
    }
  ],
  otherProjects: [
    {
      title: "MiSetup - Panel de Inventario Personal",
      category: "Desarrollo Full Stack",
      image: "/images/setup.png",
      liveUrl: "https://misetup.melitacruces.com/demo",
      githubUrl: "https://github.com/melitacruces/setup",
      description: "Panel full stack. Un dashboard dinámico y minimalista para la gestión de equipamiento, optimizado para ofrecer la mejor experiencia visual y organizativa.",
      techStack: ["Next.js", "PostgreSQL", "React", "Tailwind"]
    },
    {
      title: "Plataforma Artística y Portafolio Musical",
      category: "Desarrollo Full Stack",
      image: "/images/dhreian.png",
      liveUrl: "https://dhreian.com",
      githubUrl: "private",
      description: "Desarrollo de plataforma web full stack para artista musical. Diseñé e implementé una interfaz front-end responsiva de alto rendimiento, integrada a un back-end con Supabase para almacenar datos de los usuarios que interactúan con la web, y Resend para enviar correos transaccionales automatizados.",
      techStack: ["PostgreSQL", "React", "Resend", "Supabase", "Tailwind", "Vite"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "ValueDev SpA",
      year: "2025 - 2026",
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
