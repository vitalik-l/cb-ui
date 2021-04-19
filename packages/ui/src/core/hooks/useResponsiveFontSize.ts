import React from 'react';

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
    const calcFontSize = () => {
      const baseViewport = { width: baseWidth, height: baseHeight };
      const goodRatio = baseViewport.width / baseViewport.height;
      const currentRatio = viewportWidth / viewportHeight;
      const calculateParam = goodRatio >= currentRatio ? 'height' : 'width';
      const currentViewportParam = Math.floor(
        calculateParam === 'width' ? viewportHeight * goodRatio : viewportWidth / goodRatio,
      );
      const changeValuePercent =
        100 -
        (100 -
          (100 * (baseViewport[calculateParam] - currentViewportParam)) /
            baseViewport[calculateParam]);
      const newFontSize = Math.max(
        minFontSize,
        Math.min(maxFontSize, baseFontSize - baseFontSize * (changeValuePercent / 100)),
      ); // fontSize between min and max

      setFontSize(newFontSize);
    };

    if (baseWidth && baseHeight && viewportHeight && viewportWidth) {
      const tId = setTimeout(calcFontSize, timeout);

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
