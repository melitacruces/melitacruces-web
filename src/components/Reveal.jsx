import { useReveal } from '@/hooks';

// Pequeño envoltorio para animar la aparición de cualquier bloque al hacer scroll
// (títulos de sección, encabezados sueltos, etc.) sin tener que repetir la lógica.
// Reutiliza el hook useReveal, que garantiza una animación uniforme y sin parpadeo.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useReveal(delay);
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </Tag>
  );
}
