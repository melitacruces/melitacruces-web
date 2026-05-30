/**
 * Fondo del Hero: Diseñé orbes animados con CSS (@keyframes) en lugar de usar Framer Motion.
 * Tomé esta decisión para mejorar el rendimiento; las animaciones de CSS corren nativamente 
 * en la GPU del navegador, evitando tirones al hacer scroll en móviles.
 *
 * Los @keyframes orb-float-{1,2,3} viven en src/index.css para mantener este archivo limpio.
 */
export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background"
      aria-hidden="true"
    >
      {/* Deep space base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue/20 via-background to-background z-0" />

      {/* Floating Orbs — CSS animations corriendo en GPU */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />
      <div className="hero-orb hero-orb--4" />

      {/* Elegant Grain/Dot Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] z-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Diagonal light rays */}
      <div className="absolute top-[-20%] right-[-10%] w-[150%] h-[300px] bg-gradient-to-b from-blue-light/5 via-transparent to-transparent rotate-[-35deg] blur-[50px] z-20" />

      {/* Bottom fade hacia la siguiente sección — gradient lineal de 2 stops
          para que no se vea el "inicio" del fade como línea horizontal */}
      <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-background to-transparent z-30" />
    </div>
  );
}
