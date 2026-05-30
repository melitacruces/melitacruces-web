import { useEffect, useRef } from 'react';

// Detecto si el usuario prefiere menos movimiento para respetar la accesibilidad.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Hook propio de animación de aparición al hacer scroll.
//
// Por qué no uso el `whileInView` de Framer Motion: cuando una tarjeta animaba
// su entrada y, a la vez, sus hijos animaban la suya, los desplazamientos se
// sumaban (los hijos se movían al doble de velocidad y luego frenaban) y las
// opacidades se multiplicaban (parpadeo). Aquí cada elemento se anima UNA sola
// vez, de forma independiente, con la misma curva y duración. El resultado es
// un movimiento uniforme y sin parpadeo.
//
// `delay` (ms) permite escalonar elementos hermanos (efecto cascada) sin
// cambiar la velocidad de cada animación, solo su instante de inicio.
export function useReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin animación: mostramos el elemento de inmediato.
    if (prefersReducedMotion()) {
      el.classList.add('is-revealed');
      return;
    }

    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);

    const reveal = () => {
      el.classList.add('is-revealed');
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          reveal();
          obs.disconnect(); // se anima una sola vez
        }
      },
      // Dispara cuando el borde superior cruza el 85% del viewport: el elemento
      // aparece un poco antes de entrar del todo, lo que se siente más ágil, y
      // es independiente del alto del elemento.
      { threshold: 0.01, rootMargin: '0px 0px -15% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
