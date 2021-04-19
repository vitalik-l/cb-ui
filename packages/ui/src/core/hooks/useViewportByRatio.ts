import { useMemo } from 'react';

// local
import { useWindowSize } from '../WindowResizeListener';

export type MinMax = {
  min?: number;
  max?: number;
};

type Params = {
  horizontal?: MinMax;
  vertical?: MinMax;
} & MinMax;

export const useViewportByRatio = ({ min = 0, max = 0, horizontal, vertical }: Params) => {
  const [windowWidth, windowHeight] = useWindowSize();

  return useMemo(() => {
    if (windowHeight && windowWidth) {
      const curRatio = windowWidth / windowHeight;
      const orientation = curRatio > 1 ? horizontal : vertical;
      const maxRatio = orientation?.max || max;
      const minRatio = orientation?.min || min;
      const viewportWidth = curRatio > maxRatio ? maxRatio * windowHeight : windowWidth;
      const viewportHeight = curRatio < minRatio ? windowWidth / minRatio : windowHeight;
      return [viewportWidth, viewportHeight];
    }
    return [];
  }, [windowWidth, windowHeight, min, max, horizontal, vertical]);
};
