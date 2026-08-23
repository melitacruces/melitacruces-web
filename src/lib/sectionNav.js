const SECTION_IDS = {
  '/': 'home',
  '/about': 'about',
  '/education': 'education',
  '/skills': 'skills',
  '/projects': 'projects',
  '/experience': 'experience',
};

export function scrollToPath(pathname, behavior = 'smooth') {
  const hashSectionId = window.location.hash.slice(1);
  const sectionId = Object.values(SECTION_IDS).includes(hashSectionId)
    ? hashSectionId
    : SECTION_IDS[pathname];
  const section = sectionId && document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior });
  }
}

export function navigateToSection(path) {
  const sectionId = SECTION_IDS[path];
  const targetUrl = path === '/' ? '/' : `/#${sectionId}`;

  if (`${window.location.pathname}${window.location.hash}` !== targetUrl) {
    window.history.pushState(null, '', targetUrl);
  }
  scrollToPath(path, 'smooth');
}

export function normalizeLegacySectionPath() {
  const sectionId = SECTION_IDS[window.location.pathname];

  if (window.location.pathname !== '/' && sectionId && !window.location.hash) {
    window.history.replaceState(null, '', `/#${sectionId}`);
  }
}
