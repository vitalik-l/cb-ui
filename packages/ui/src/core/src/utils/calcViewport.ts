export type MinMax = {
  min?: number;
  max?: number;
};

export type CalcViewportParams = {
  horizontal?: MinMax;
  vertical?: MinMax;
  windowHeight: number;
  windowWidth: number;
} & MinMax;

export const calcViewport = ({
  windowWidth = 0,
  windowHeight = 0,
  min = 0,
  max = 0,
  horizontal,
  vertical,
}: CalcViewportParams) => {
  if (windowWidth && windowHeight) {
    const curRatio = windowWidth / windowHeight;
    const orientation = curRatio > 1 ? horizontal : vertical;
    const maxRatio = orientation?.max || max;
    const minRatio = orientation?.min || min;
    const viewportWidth = curRatio > maxRatio ? maxRatio * windowHeight : windowWidth;
    const viewportHeight = curRatio < minRatio ? windowWidth / minRatio : windowHeight;
    return [viewportWidth, viewportHeight];
  }
  return [];
};
