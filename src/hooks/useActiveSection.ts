import { useEffect, useState } from 'react';

const HOME_THRESHOLD = 80;
const BOTTOM_THRESHOLD = 80;
export const ACTIVE_SECTION_TRIGGER_RATIO = 0.4;

export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const updateActive = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY < HOME_THRESHOLD) {
        setActive('home');
        return;
      }

      const atPageBottom =
        scrollY + viewportHeight >= document.documentElement.scrollHeight - BOTTOM_THRESHOLD;

      const lastSection = sectionIds.at(-1);
      if (atPageBottom && lastSection) {
        setActive(lastSection);
        return;
      }

      const line = viewportHeight * ACTIVE_SECTION_TRIGGER_RATIO;
      let current = 'home';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.getBoundingClientRect().top;
        if (top > line) break;

        current = id;
        if (top > 0) break;
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sectionIds]);

  return active;
}
