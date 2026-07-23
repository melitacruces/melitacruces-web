# Portafolio de Luis Melita

Sitio web de portafolio profesional desarrollado como una aplicación front-end de una sola página. Presenta experiencia, formación, habilidades y proyectos mediante una interfaz responsiva, animada y orientada al rendimiento.

[Preview](https://melitacruces.com)

## Tecnologías

- React 19 y JavaScript.
- Vite 8.
- Tailwind CSS 4.
- Framer Motion 12.
- React Icons 5.
- ESLint 10.

El proyecto no necesita un backend ni una base de datos propios. El contenido se mantiene en archivos JavaScript y los recursos públicos se sirven de forma estática.

## Características

- Diseño responsivo para dispositivos móviles y escritorio.
- Navegación por secciones sincronizada con la URL mediante History API.
- Animaciones y transiciones con soporte para `prefers-reduced-motion`.
- Contenido centralizado y reutilizable.
- Metadatos SEO, Open Graph, Twitter Cards y datos estructurados.
- Scripts locales para optimizar imágenes y normalizar metadatos PDF.

## Estructura

```text
melitacruces-web/
|-- public/
|   |-- certificates/    Certificados en formato PDF.
|   |-- documents/       Currículum en formato PDF.
|   |-- fonts/           Fuente Montserrat y su licencia.
|   `-- images/          Imágenes del perfil y los proyectos.
|-- scripts/             Utilidades de mantenimiento de recursos.
|-- src/
|   |-- components/      Componentes reutilizables de interfaz.
|   |-- data/            Contenido y configuración visual centralizados.
|   |-- hooks/           Hooks personalizados.
|   |-- layout/          Encabezado y pie de página.
|   |-- lib/             Navegación y enlaces compartidos.
|   |-- sections/        Secciones principales del portafolio.
|   |-- App.jsx          Componente raíz.
|   |-- index.css        Tema, estilos globales y animaciones.
|   `-- main.jsx         Punto de entrada de React.
|-- eslint.config.mjs    Configuración de ESLint.
|-- index.html           Documento base y metadatos SEO.
|-- jsconfig.json        Alias y configuración de JavaScript.
|-- package.json         Dependencias y comandos.
|-- vercel.json          Reescritura de rutas para la SPA.
`-- vite.config.js       Configuración de Vite y Tailwind CSS.
```

## Organización del contenido

La información visible del portafolio está centralizada en `src/data/portfolioData.js`. Para actualizar textos, proyectos, habilidades, certificados, experiencia o enlaces personales, modifica ese archivo.

Los colores de las tecnologías están definidos en `src/data/techColors.js` y se comparten entre la sección de habilidades y las etiquetas de los proyectos.

## Requisitos

- Node.js 20.19 o superior, o Node.js 22.12 o superior.
- npm.

## Instalación

```bash
git clone https://github.com/melitacruces/melitacruces-web.git
cd melitacruces-web
npm install
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`.

## Comandos

| Comando                    | Descripción                                             |
| -------------------------- | ------------------------------------------------------- |
| `npm run dev`              | Inicia el servidor de desarrollo.                       |
| `npm run build`            | Genera la compilación de producción en `dist/`.         |
| `npm run preview`          | Previsualiza localmente la compilación de producción.   |
| `npm run lint`             | Analiza el código JavaScript y JSX con ESLint.          |
| `npm run optimize-images`  | Optimiza las imágenes compatibles de `public/images/`.  |
| `npm run fix-pdf-metadata` | Normaliza los metadatos de los documentos configurados. |

## Despliegue

El repositorio incluye una configuración para Vercel que dirige las rutas de la aplicación hacia `index.html`. La compilación de producción se genera con:

```bash
npm run build
```

## Contacto

- Nombre: Luis Melita.
- Correo: [melitacruces@gmail.com](mailto:melitacruces@gmail.com).
- LinkedIn: [linkedin.com/in/melitacruces](https://linkedin.com/in/melitacruces).
- GitHub: [github.com/melitacruces](https://github.com/melitacruces).
- Ubicación: Concepción, Chile.
