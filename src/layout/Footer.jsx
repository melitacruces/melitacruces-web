import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot, FaUserTie } from 'react-icons/fa6';
import { portfolioData } from '@/data/portfolioData';
import Button from '@/components/Button';

// WhatsApp acepta el número en formato internacional sin "+", espacios ni guiones.
const whatsappNumber = portfolioData.hero.phone.replace(/\D/g, '');
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export default function Footer() {
  return (
    <footer className="w-full relative z-10 mt-20" id="contact">
      {/* Clean elegant top border separator for section switch */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue/30 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue/5 to-transparent pointer-events-none -z-10" />

      {/* Layout:
          - Mobile (col): identidad arriba, botones abajo a la derecha.
          - sm+ (row): identidad a la izquierda, botones al borde derecho,
            alineados al bottom del bloque de contacto (items-end). */}
      <div className="container pt-16 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 relative z-10">
        {/* Identidad + información de contacto */}
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold tracking-tighter flex items-baseline gap-2">
            <FaUserTie className="text-[0.85em] text-blue self-baseline" />
            <span>MC</span>
          </h3>
          <p className="text-foreground/70 text-sm lg:text-base lg:whitespace-nowrap">
            {portfolioData.hero.title}
          </p>
          <div className="flex flex-col gap-3 mt-4 text-sm text-foreground/60">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-light/70 text-base" /> {portfolioData.hero.email}
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-blue-light/70 text-base" /> {portfolioData.hero.phone}
            </p>
            <p className="flex items-center gap-3">
              <FaLocationDot className="text-blue-light/70 text-base" /> {portfolioData.hero.location}
            </p>
          </div>
        </div>

        {/* Botones — alineados al borde derecho.
            En mobile: justify-end empuja la fila a la derecha del container.
            En sm+: el justify-between del padre los lleva al lado derecho;
            el items-end del padre los alinea al bottom del bloque izquierdo. */}
        <div className="flex flex-wrap gap-4 justify-end">
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
