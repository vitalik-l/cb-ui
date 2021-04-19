import { useMemo } from 'react';

// local
import { useWindowSize } from '../WindowResizeListener';
import { calcViewport, CalcViewportParams } from '../utils/calcViewport';

export const useViewportByRatio = ({
  min = 0,
  max = 0,
  horizontal,
  vertical,
}: Omit<CalcViewportParams, 'windowHeight' | 'windowWidth'>) => {
  const [windowWidth, windowHeight] = useWindowSize();

  return useMemo(() => {
    return calcViewport({ windowWidth, windowHeight, min, max, horizontal, vertical });
  }, [windowWidth, windowHeight, min, max, horizontal, vertical]);
};
