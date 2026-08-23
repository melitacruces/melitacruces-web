import { useEffect } from 'react';
import { normalizeLegacySectionPath, scrollToPath } from '@/lib/sectionNav';

export function useSectionScrollSync() {
  useEffect(() => {
    normalizeLegacySectionPath();
    const raf = requestAnimationFrame(() => scrollToPath(window.location.pathname, 'auto'));

    const handlePopState = () => scrollToPath(window.location.pathname, 'smooth');
    window.addEventListener('popstate', handlePopState);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
