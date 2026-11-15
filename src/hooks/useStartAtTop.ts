import { useEffect } from 'react';

export function useStartAtTop() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const { pathname, search } = window.location;
    if (window.location.hash) {
      history.replaceState(null, '', `${pathname}${search}`);
    }

    window.scrollTo(0, 0);
  }, []);
}