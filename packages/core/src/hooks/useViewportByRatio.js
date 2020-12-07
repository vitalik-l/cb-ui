import { useMemo } from 'react';

function useViewportByRatio({ windowWidth, windowHeight, min, max, horizontal, vertical }) {
  return useMemo(() => {
    if (windowHeight && windowWidth) {
      const curRatio = windowWidth / windowHeight;
      const orientation = curRatio > 1 ? horizontal : vertical;
      const maxRatio = orientation ? orientation.max || max : max;
      const minRatio = orientation ? orientation.min || min : min;
      const viewportWidth = curRatio > maxRatio ? maxRatio * windowHeight : windowWidth;
      const viewportHeight = curRatio < minRatio ? windowWidth / minRatio : windowHeight;
      return [viewportWidth, viewportHeight];
    }
    return [];
  }, [windowWidth, windowHeight, min, max, horizontal, vertical]);
}

export default useViewportByRatio;
