export const menu = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' }
] as const;

export const sectionIds = menu.flatMap((link) => (link.id === 'home' ? [] : [link.id]));
