import { useEffect } from 'react';

export function useScrollReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [selector]);
}
