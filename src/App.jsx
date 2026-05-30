import { Header, Footer } from '@/layout';
import { GlobalCursor } from '@/components';
import { Hero, About, Education, Skills, Projects, Experience } from '@/sections';

// Este es el componente principal de mi aplicación. 
// Aquí estoy estructurando la vista general de la web, manteniendo un diseño limpio y ordenado.
export default function App() {
  return (
    // Agregué clases base de Tailwind para configurar la fuente, colores principales y altura mínima.
    <div className="font-sans antialiased text-foreground bg-background min-h-screen">
      {/* El cursor global personalizado le da un toque distintivo a la interacción */}
      <GlobalCursor />
      
      {/* Contenedor principal en columna que empuja el Footer hacia abajo si hay poco contenido */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        {/* Aquí van todas las secciones principales del portafolio. Oculto el overflow-x para evitar scroll horizontal indeseado */}
        <main className="flex-1 w-full relative overflow-x-hidden">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
