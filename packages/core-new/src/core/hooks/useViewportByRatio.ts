import { useMemo } from 'react';

export type MinMax = {
  min?: number;
  max?: number;
};

type Params = {
  windowWidth: number;
  windowHeight: number;
  horizontal?: MinMax;
  vertical?: MinMax;
} & MinMax;

export const useViewportByRatio = ({
  windowWidth,
  windowHeight,
  min = 0,
  max = 0,
  horizontal,
  vertical,
}: Params) => {
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
