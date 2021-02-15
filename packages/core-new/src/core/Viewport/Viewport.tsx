import React from 'react';
import clsx from 'clsx';

// local files
import { useWindowSize } from '../WindowResizeListener';
import { useViewportByRatio, MinMax } from '../hooks/useViewportByRatio';
import { useResponsiveFontSize } from '../hooks/useResponsiveFontSize';
import { FontSizeContext } from './FontSizeContext';
import classes from '../styles/classes.module.scss';
import './Viewport.scss';

export type ViewportProps = {
  horizontal?: MinMax;
  vertical?: MinMax;
  children?: React.ReactNode;
  timeout?: number;
  minRatio?: number;
  maxRatio?: number;
  baseFontSize?: number;
  baseWidth: number;
  baseHeight: number;
  maxFontSize?: number;
  minFontSize?: number;
  className?: string;
  animate?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Viewport = (props: ViewportProps) => {
  const {
    animate,
    children,
    minRatio,
    maxRatio,
    vertical,
    horizontal,
    timeout,
    baseFontSize,
    baseHeight,
    baseWidth,
    maxFontSize,
    minFontSize,
    className,
    ...divProps
  } = props;
  const viewportRef = React.useRef<any>();
  const [windowWidth, windowHeight] = useWindowSize();
  const [viewportWidth, viewportHeight] = useViewportByRatio({
    windowWidth,
    windowHeight,
    min: minRatio,
    max: maxRatio,
    vertical,
    horizontal,
  });
  const fontSize = useResponsiveFontSize({
    viewportWidth,
    viewportHeight,
    baseFontSize,
    baseWidth,
    baseHeight,
    maxFontSize,
    minFontSize,
    timeout,
  });

  React.useLayoutEffect(() => {
    if (viewportWidth && viewportHeight && fontSize) {
      const viewportEl: HTMLDivElement = viewportRef.current;
      viewportEl.style.maxWidth = `${viewportWidth}px`;
      viewportEl.style.height = `${viewportHeight}px`;
      if (animate) {
        document.documentElement.style.transition = 'font-size 0.1s';
      }
      document.documentElement.style.fontSize = `${fontSize}px`;
      window.dispatchEvent(
        new CustomEvent('viewport resize', {
          detail: {
            width: viewportWidth,
            height: viewportHeight,
          },
        }),
      );

      return () => {
        viewportEl.style.maxWidth = '';
        viewportEl.style.height = '';
        document.documentElement.style.fontSize = '';
        document.documentElement.style.transition = '';
      };
    }
  }, [fontSize]); // eslint-disable-line

  if (!fontSize) return null;

  return (
    <FontSizeContext.Provider value={fontSize}>
      <div
        ref={viewportRef}
        className={clsx(classes.Viewport, className, {
          [`${classes.Viewport}_animate`]: animate,
        })}
        {...divProps}
      >
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};
