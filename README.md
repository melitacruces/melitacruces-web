# melitacruces-web

Portafolio personal y profesional de Luis Melita Cruces.

[Abrir Portafolio](https://melitacruces.com)

## Descripción

`melitacruces-web` presenta el perfil profesional, la formación, las habilidades, los proyectos y
la experiencia de Luis Melita Cruces, Ingeniero Civil Industrial y Desarrollador Full Stack.

El sitio está construido como una experiencia de una sola página con React y Vite. Su contenido se
prerenderiza durante la compilación para entregar HTML indexable y luego se hidrata en el navegador
para habilitar la navegación, las animaciones y las interacciones de la interfaz.

## Características

- Presentación profesional con enlaces directos de contacto y descarga del currículum.
- Formación académica y certificaciones con acceso a los documentos correspondientes.
- Habilidades técnicas agrupadas por área y competencias profesionales complementarias.
- Proyectos destacados y adicionales con descripción, tecnologías, demostración y repositorio.
- Línea de experiencia profesional con responsabilidades y resultados de cada cargo.
- Navegación fluida entre secciones y compatibilidad con las rutas históricas del sitio.
- Diseño responsivo con paneles interactivos, animaciones y soporte para movimiento reducido.
- Metadatos SEO, Open Graph, Twitter Cards, Schema.org, `robots.txt` y sitemap XML.

## Secciones

| Sección       | Contenido                                                                  |
| ------------- | -------------------------------------------------------------------------- |
| Inicio        | Presentación, especialidades, ubicación, contacto y currículum.            |
| Sobre mí      | Perfil profesional y enfoque de trabajo.                                   |
| Formación     | Título universitario, grado académico y certificaciones.                   |
| Habilidades   | Tecnologías, herramientas, áreas de conocimiento y habilidades blandas.    |
| Proyectos     | Casos de desarrollo web, inteligencia artificial, datos e IoT.             |
| Experiencia   | Trayectoria profesional, investigación y colaboración con organizaciones.  |

## Arquitectura

El contenido principal se mantiene separado de la presentación. `src/data/portfolioData.js`
centraliza los textos, enlaces, proyectos, habilidades, formación y experiencia; las secciones
consumen esos datos y los componentes compartidos resuelven los patrones visuales reutilizables.

```text
Datos del portafolio
└── src/data/portfolioData.js
    ├── src/sections             Secciones principales de la página
    ├── src/components           Paneles, botones, tarjetas y etiquetas reutilizables
    └── src/layout               Encabezado y pie de página

Compilación de producción
├── Vite                         Genera los recursos del cliente en dist/
├── React DOM Server             Renderiza la aplicación como HTML
├── scripts/prerender.mjs        Inserta el HTML en dist/index.html
└── React DOM Client             Hidrata la interfaz en el navegador
```

- `src/App.jsx` define el orden de las secciones y la estructura general de la página.
- `src/index.css` contiene la fuente local, los tokens visuales, los estilos compartidos y el
  comportamiento adaptable.
- `src/hooks/useSectionScrollSync.js` sincroniza la navegación y el desplazamiento entre secciones.
- `public/` distribuye imágenes, certificados, currículum, tipografía, favicon y archivos SEO.
- `index.html` contiene los metadatos sociales, canónicos y estructurados del perfil.
- `vercel.json` redirige las antiguas rutas por sección hacia sus anclas equivalentes.

## Tecnologías

- [React 19](https://react.dev/) para la interfaz y su hidratación.
- [Vite 8](https://vite.dev/) para desarrollo, compilación del cliente y bundle SSR.
- [Tailwind CSS 4](https://tailwindcss.com/) para utilidades y tokens visuales.
- [Framer Motion](https://motion.dev/) para animaciones e interacciones.
- [React Icons](https://react-icons.github.io/react-icons/) para la iconografía.
- JavaScript y JSX con módulos ES.
- Sharp y pdf-lib para tareas locales de mantenimiento de recursos.
- ESLint para análisis estático del código.

## Estructura del proyecto

```text
melitacruces-web/
├── public/
│   ├── certificates/            Certificados académicos y profesionales
│   ├── documents/               Currículum en PDF
│   ├── fonts/                   Tipografía distribuida localmente
│   ├── images/                  Perfil y capturas de proyectos
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/                     Prerenderizado y mantenimiento de recursos
├── src/
│   ├── components/              Componentes reutilizables de interfaz
│   ├── data/                    Contenido y configuración visual de tecnologías
│   ├── hooks/                   Comportamiento de navegación
│   ├── layout/                  Encabezado y pie de página
│   ├── lib/                     Enlaces de contacto y utilidades de secciones
│   ├── sections/                Bloques principales del portafolio
│   ├── App.jsx                  Composición de la aplicación
│   ├── entry-server.jsx         Entrada de renderizado para el prerender
│   ├── index.css                Tema y estilos globales
│   └── main.jsx                 Entrada e hidratación del cliente
├── index.html                   Documento base y metadatos SEO
├── package.json
├── vercel.json
└── vite.config.js
```

## Contacto

- **Nombre:** Luis Melita Cruces.
- **Correo:** [melitacruces@gmail.com](mailto:melitacruces@gmail.com).
- **LinkedIn:** [linkedin.com/in/melitacruces](https://linkedin.com/in/melitacruces).
- **GitHub:** [github.com/melitacruces](https://github.com/melitacruces).
- **Ubicación:** Concepción, Chile.
