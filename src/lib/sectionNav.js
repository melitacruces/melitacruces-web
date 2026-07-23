const SECTION_IDS = {
  '/': 'home',
  '/about': 'about',
  '/education': 'education',
  '/skills': 'skills',
  '/projects': 'projects',
  '/experience': 'experience',
};

export function scrollToPath(pathname, behavior = 'smooth') {
  const sectionId = SECTION_IDS[pathname];
  const section = sectionId && document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior });
  }
}

export function navigateToSection(path) {
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
  }
  scrollToPath(path, 'smooth');
}
