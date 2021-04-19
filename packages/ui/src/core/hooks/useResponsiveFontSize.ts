import React from 'react';
import { calcFontSize } from '../utils/calcFontSize';

type Params = {
  baseFontSize?: number;
  maxFontSize?: number;
  minFontSize?: number;
  baseWidth: number;
  baseHeight: number;
  timeout?: number;
  viewportWidth?: number;
  viewportHeight?: number;
};

export const useResponsiveFontSize = ({
  baseFontSize = 10,
  maxFontSize = 1000,
  minFontSize = 0,
  baseWidth,
  baseHeight,
  timeout = 100,
  viewportWidth = 0,
  viewportHeight = 0,
}: Params) => {
  const [fontSize, setFontSize] = React.useState(0);

  React.useEffect(() => {
    const callback = () => {
      setFontSize(
        calcFontSize({
          baseFontSize,
          maxFontSize,
          minFontSize,
          baseWidth,
          baseHeight,
          viewportWidth,
          viewportHeight,
        }),
      );
    };

    if (baseWidth && baseHeight && viewportHeight && viewportWidth) {
      const tId = setTimeout(callback, timeout);

      return () => {
        clearTimeout(tId);
      };
    }

    return undefined;
  }, [
    viewportHeight,
    viewportWidth,
    timeout,
    baseFontSize,
    baseWidth,
    baseHeight,
    maxFontSize,
    minFontSize,
  ]);

  return fontSize;
};
