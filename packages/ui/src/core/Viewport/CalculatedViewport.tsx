import { useViewportByRatio } from '../hooks/useViewportByRatio';
import { MinMax } from '../utils/calcViewport';

export type CalculatedViewportProps = {
  horizontal?: MinMax;
  vertical?: MinMax;
  minRatio?: number;
  maxRatio?: number;
  children?: (width: number, height: number) => any;
};

export const CalculatedViewport = (props: CalculatedViewportProps) => {
  const { children, minRatio, maxRatio, vertical, horizontal } = props;
  const [viewportWidth, viewportHeight] = useViewportByRatio({
    min: minRatio,
    max: maxRatio,
    vertical,
    horizontal,
  });

  if (!children) return null;

  return children(viewportWidth, viewportHeight);
};
