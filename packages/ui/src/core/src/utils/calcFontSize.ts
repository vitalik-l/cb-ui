export type CalcFontSizeParams = {
  baseWidth?: number;
  baseHeight?: number;
  viewportWidth?: number;
  viewportHeight?: number;
  baseFontSize?: number;
  maxFontSize?: number;
  minFontSize?: number;
};

export const calcFontSize = (params: CalcFontSizeParams) => {
  const {
    baseWidth,
    baseHeight,
    viewportHeight = 0,
    viewportWidth = 0,
    baseFontSize = 10,
    maxFontSize = 1000,
    minFontSize = 0,
  } = params;
  if (!baseWidth || !baseHeight) return 0;
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
      (100 * (baseViewport[calculateParam] - currentViewportParam)) / baseViewport[calculateParam]);
  return Math.max(
    minFontSize,
    Math.min(maxFontSize, baseFontSize - baseFontSize * (changeValuePercent / 100)),
  ); // fontSize between min and max
};
