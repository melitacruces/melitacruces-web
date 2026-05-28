# 💼 Portafolio de Luis Andrés Melita Cruces

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFDF00)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> **Este es mi sitio web e interfaz de portafolio profesional: interactivo, rápido y con un diseño Liquid Glass, donde expongo mi trayectoria, proyectos y habilidades como Ingeniero Civil Industrial y Desarrollador Full Stack.**

---

## ▶️ Live Preview

**🔗 [Visitar Sitio Web](https://mc.dhreian.com)**

---

## 📋 Tabla de Contenidos

- [🔍 ¿Qué es este proyecto?](#-qué-es-este-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [🎨 Estilo y Diseño](#-estilo-y-diseño)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Requisitos e Instalación](#-requisitos-e-instalación)
- [📦 Scripts y Comandos](#-scripts-y-comandos)
- [🌐 Despliegue](#-despliegue)
- [📧 Contacto](#-contacto)

---

## 🔍 ¿Qué es este proyecto?

Este proyecto es mi portafolio digital profesional, diseñado para centralizar e ilustrar de forma interactiva mi perfil híbrido como Ingeniero Civil Industrial y Desarrollador Full Stack. El propósito del sitio es ofrecer una experiencia de usuario fluida y visualmente atractiva en la que reclutadores, socios de negocio y colaboradores puedan explorar mi trayectoria académica, certificaciones profesionales, habilidades técnicas en frontend, backend y ciencia de datos, y proyectos reales desarrollados.

---

## ✨ Características Principales

- **Diseño "Liquid Glass" & Interactividad:** Paneles de vidrio translúcidos y difuminados con un efecto de halo radial interactivo que sigue el movimiento del cursor (`GlassCard.jsx`), y un cursor interactivo personalizado (`GlobalCursor.jsx`).
- **Rendimiento y Animaciones Fluidas:** Uso eficiente de CSS para orbes de fondo animados en GPU, transiciones suaves con Framer Motion 12 y control automático de preferencias de movimiento reducido (`prefers-reduced-motion: reduce`) para mejorar la accesibilidad y reducir la carga de procesamiento.
- **Arquitectura Declarativa basada en Datos:** Todo el contenido, proyectos, tecnologías, educación e historial laboral del sitio están declarados en un único archivo de datos centralizado (`src/data/portfolioData.js`), permitiendo actualizar toda la web con facilidad.
- **Scripts de Utilidades Automatizados:** Integración de scripts dedicados para optimizar imágenes y formatos (usando `sharp`) y corregir de manera automática metadatos de archivos PDF de certificados (usando `pdf-lib`).

---

## 🛠️ Tecnologías Utilizadas

### Frontend (Interfaz de Usuario)

- **Core:** HTML5, CSS3, JavaScript (ES6+), React 19, Vite 8
- **Estilos:** Tailwind CSS 3
- **Otras librerías:** Framer Motion 12 (animaciones), React Icons 5 (iconografía de múltiples familias como Simple Icons, Remix Icons y Phosphor Icons)

---

## 🎨 Estilo y Diseño

El portafolio implementa un estilo visual moderno de tipo "Liquid Glass", caracterizado por un fondo oscuro profundo nativo (`#080808`), tarjetas y contenedores de vidrio templado translúcido con desenfoque de fondo y bordes muy sutiles, y halos radiales interactivos de color azul y azul claro. Toda la tipografía está configurada en base a la fuente Montserrat importada desde Google Fonts para ofrecer una experiencia estética premium y legible.

### Paleta de Colores

| Color             | Hexadecimal | Uso principal                                                                                |
| :---------------- | :---------- | :------------------------------------------------------------------------------------------- |
| **Primario**      | `#080808`   | Color de fondo principal de la aplicación (`bg-background`)                                  |
| **Secundario**    | `#3b82f6`   | Acentos visuales, bordes interactivos, sombras "glass" y scrollbar (`bg-blue`, `text-blue`)  |
| **Acento/Alerta** | `#93c5fd`   | Color azul brillante en gradientes de títulos y orbes flotantes de fondo (`text-blue-light`) |
| **Texto Base**    | `#f3f4f6`   | Texto principal de párrafos y elementos de lectura (`text-foreground`)                       |

### Tipografía

- **Títulos:** Montserrat (via `--font-montserrat` y Tailwind `fontFamily.sans`)
- **Cuerpo de texto:** Montserrat

---

## 📁 Estructura del Proyecto

```text
📂 melitacruces-web
 ┣ 📂 public                   # Archivos estáticos
 ┃ ┣ 📂 certificates           # Certificados en formato PDF
 ┃ ┣ 📂 documents              # Documento del Currículum Vitae (cv.pdf)
 ┃ ┗ 📂 images                 # Imágenes de proyectos y fotografía de perfil
 ┣ 📂 scripts                  # Scripts de automatización
 ┃ ┣ 📜 fix-pdf-metadata.cjs   # Script para corregir metadatos de archivos PDF
 ┃ ┗ 📜 optimize-images.cjs    # Script para optimizar y comprimir imágenes (sharp)
 ┣ 📂 src                      # Código fuente principal
 ┃ ┣ 📂 components             # Componentes de interfaz reutilizables (Button, GlassCard, etc.)
 ┃ ┣ 📂 data                   # Archivo central de datos del portafolio (portfolioData.js)
 ┃ ┣ 📂 layout                 # Estructura principal del sitio (Header, Footer)
 ┃ ┣ 📂 sections               # Secciones de la página de portafolio (Hero, About, Skills, etc.)
 ┃ ┣ 📜 App.jsx                # Componente raíz del portafolio
 ┃ ┣ 📜 index.css              # Directivas de Tailwind CSS, variables de diseño y clases utilitarias
 ┃ ┗ 📜 main.jsx               # Punto de entrada de Vite y montaje de React
 ┣ 📜 eslint.config.mjs        # Configuración de ESLint 10 para código fuente y scripts
 ┣ 📜 index.html               # Plantilla HTML base y configuración de fuentes/metatags SEO
 ┣ 📜 jsconfig.json            # Configuración de alias de ruta y JS para el editor
 ┣ 📜 package.json             # Gestión de dependencias y scripts de ejecución
 ┣ 📜 postcss.config.cjs       # Configuración de PostCSS para procesar Tailwind
 ┣ 📜 tailwind.config.cjs      # Configuración de estilos, colores y animaciones de Tailwind
 ┗ 📜 vite.config.js           # Configuración del empaquetador Vite (con alias @)
```

---

## 🚀 Requisitos e Instalación

### Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu máquina:

- **Node.js** (versión 18 o superior recomendada)
- **npm** (incluido por defecto con Node.js)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/melitacruces/melitacruces-web.git
   cd melitacruces-web
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 📦 Scripts y Comandos

El proyecto incluye diversos scripts en `package.json` para facilitar el desarrollo y mantenimiento:

| Comando                    | Descripción                                                                                  |
| :------------------------- | :------------------------------------------------------------------------------------------- |
| `npm run dev`              | Inicia el servidor de desarrollo local de Vite en `http://localhost:5173`.                   |
| `npm run build`            | Compila y empaqueta el portafolio para producción, generando la carpeta `dist/`.             |
| `npm run preview`          | Levanta un servidor local para previsualizar la compilación de producción generada.          |
| `npm run lint`             | Analiza el código fuente con ESLint 10 para detectar errores o malas prácticas.              |
| `npm run fix-pdf-metadata` | Ejecuta el script para normalizar los metadatos (Título, Autor, Asunto) de los archivos PDF. |
| `npm run optimize-images`  | Optimiza y comprime las imágenes PNG/JPG en `public/images/` usando la librería `sharp`.     |

---

## 🌐 Despliegue

La compilación generada en la carpeta `dist/` es puramente estática, lo que permite desplegar la web de manera ágil en cualquier proveedor de hosting moderno:

### Despliegue en Vercel (Recomendado)

1. Instala la CLI de Vercel (si no la tienes instalada):
   ```bash
   npm install -g vercel
   ```
2. Ejecuta el comando de despliegue en la raíz del proyecto:
   ```bash
   vercel
   ```
3. Sigue las instrucciones interactivas de la consola para completar la publicación.

### Despliegue en GitHub Pages

Para desplegar en GitHub Pages se puede configurar una GitHub Action que compile y publique automáticamente la rama `main` en `gh-pages`, o compilar localmente y subir el contenido de `dist/` a una rama de publicación.

---

## 📧 Contacto

Si tienes alguna pregunta o deseas colaborar en algún proyecto, no dudes en ponerte en contacto:

- **Nombre:** Luis Andrés Melita Cruces
- **Email:** [melitacruces@gmail.com](mailto:melitacruces@gmail.com)
- **LinkedIn:** [linkedin.com/in/melitacruces](https://linkedin.com/in/melitacruces)
- **GitHub:** [github.com/melitacruces](https://github.com/melitacruces)
- **Ubicación:** Concepción, Chile
