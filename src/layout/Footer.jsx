import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot, FaUserTie } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components'; // Update import per new barrel file

// Limpio el número de teléfono para asegurar compatibilidad con la API de WhatsApp,
// removiendo cualquier caracter que no sea numérico.
const whatsappNumber = portfolioData.hero.phone.replace(/\D/g, '');
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// Aquí defino el Footer de mi portafolio. He querido darle un cierre elegante a la página,
// con mi información de contacto siempre accesible.
export default function Footer() {
  return (
    <footer className="w-full relative z-10 mt-20" id="contact">
      {/* Un separador limpio y sutil con gradiente que divide visualmente el contenido anterior del footer */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue/30 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue/5 to-transparent pointer-events-none -z-10" />

      {/* Contenedor principal:
          - En móviles (columna): centro la identidad arriba y botones de contacto abajo.
          - En pantallas medianas (fila): identidad a la izquierda y botones alineados a la derecha y abajo. */}
      <div className="container pt-16 pb-12 flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-end sm:justify-between gap-10 relative z-10">
        
        {/* Identidad de marca personal y resumen de mi información de contacto */}
        <div className="flex flex-col items-center sm:items-start gap-5">
          <h3 className="text-4xl font-bold tracking-tighter flex items-center gap-2">
            <FaUserTie className="text-[1em] text-blue" />
            <span>MC</span>
          </h3>
          <p className="text-foreground/70 text-sm lg:text-base lg:whitespace-nowrap">
            {portfolioData.hero.title}
          </p>
          <div className="flex flex-col gap-3 mt-4 text-sm text-foreground/60">
            <p className="flex items-center justify-center sm:justify-start gap-3">
              <FaEnvelope className="text-blue-light/70 text-base" /> {portfolioData.hero.email}
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-3">
              <FaPhone className="text-blue-light/70 text-base" /> {portfolioData.hero.phone}
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-3">
              <FaLocationDot className="text-blue-light/70 text-base" /> {portfolioData.hero.location}
            </p>
          </div>
        </div>

        {/* Grupo de botones para mis redes sociales. Los he alineado al borde derecho
            para mantener el equilibrio visual en pantallas grandes. */}
        <div className="flex flex-wrap gap-4 justify-center sm:justify-end w-full sm:w-auto">
          <Button
            href={portfolioData.hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label="LinkedIn"
            icon={FaLinkedin}
          />
          <Button
            href={portfolioData.hero.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label="GitHub"
            icon={FaGithub}
          />
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label="WhatsApp"
            icon={FaWhatsapp}
          />
          <Button
            href={`mailto:${portfolioData.hero.email}`}
            variant="icon"
            aria-label="Correo"
            icon={FaEnvelope}
          />
        </div>
      </div>
    </footer>
  );
}
