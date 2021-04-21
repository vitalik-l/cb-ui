import React from 'react';

// local
import { useWindowSize } from '../WindowResizeListener';
import { calcViewport, CalcViewportParams } from '../utils/calcViewport';

export const useViewportByRatio = ({
  min = 0,
  max = 0,
  horizontal,
  vertical,
  timeout = 100,
}: { timeout?: number } & Omit<CalcViewportParams, 'windowHeight' | 'windowWidth'>) => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [viewport, setViewport] = React.useState([] as number[]);
  const firstCall = React.useRef(true);

  React.useEffect(() => {
    const callback = () => {
      setViewport(calcViewport({ windowWidth, windowHeight, min, max, horizontal, vertical }));
    };
    if (firstCall.current) {
      callback();
      firstCall.current = false;
      return;
    }
    const tId = setTimeout(callback, timeout);
    return () => {
      clearTimeout(tId);
    };
  }, [windowWidth, windowHeight, min, max, horizontal, vertical, timeout]);

  return viewport;
};
