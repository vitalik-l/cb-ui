import React from 'react';
import clsx from 'clsx';

// local files
import styles from './CoreViewport.module.scss';
import { useWindowSize } from '../WindowResizeListener';
import { useViewportByRatio, MinMax } from '../hooks/useViewportByRatio';
import { useResponsiveFontSize } from '../hooks/useResponsiveFontSize';
import { FontSizeContext } from './FontSizeContext';
import { ViewportContext } from './ViewportContext';
import { useAppMode } from '../Root/useAppMode';

export type ViewportProps = {
  horizontal?: MinMax;
  vertical?: MinMax;
  children?: React.ReactNode;
  timeout?: number;
  minRatio?: number;
  maxRatio?: number;
  baseFontSize?: number;
  baseWidth?: number;
  baseHeight?: number;
  maxFontSize?: number;
  minFontSize?: number;
  className?: string;
  animate?: boolean;
  fixed?: boolean;
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
    baseHeight = 0,
    baseWidth = 0,
    maxFontSize,
    minFontSize,
    className,
    fixed: fixedProp,
    ...divProps
  } = props;
  const isMobile = useAppMode();
  const fixed = fixedProp !== undefined ? fixedProp : isMobile;
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
  const fontSizeIsResponsive = baseWidth && baseHeight;
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
  const prevFontSize = React.useRef(0);
  const [viewportContext, setViewportContext] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (animate) {
      document.documentElement.style.transition = 'font-size 0.1s';
      return () => {
        document.documentElement.style.transition = '';
      };
    }
  }, [animate]);

  React.useLayoutEffect(() => {
    const viewportEl: HTMLDivElement = viewportRef.current;

    if (viewportEl && viewportWidth && viewportHeight) {
      if (fontSizeIsResponsive && prevFontSize.current === fontSize) return;
      viewportEl.style.maxWidth = `${viewportWidth}px`;
      viewportEl.style.height = `${viewportHeight}px`;
      setViewportContext({ width: viewportWidth, height: viewportHeight });
      (window as any).viewportSize = { width: viewportWidth, height: viewportHeight };

      if (fontSize) {
        document.documentElement.style.fontSize = `${fontSize}px`;
      }

      window.dispatchEvent(
        new CustomEvent('viewport resize', {
          detail: {
            width: viewportWidth,
            height: viewportHeight,
          },
        }),
      );
    }
    prevFontSize.current = fontSize;
  }, [fontSize, fontSizeIsResponsive, viewportWidth, viewportHeight]);

  React.useEffect(() => {
    const viewportEl: HTMLDivElement = viewportRef.current;

    return () => {
      document.documentElement.style.fontSize = '';
      if (viewportEl) {
        viewportEl.style.maxWidth = '';
        viewportEl.style.height = '';
      }
    };
  }, []);

  if (fontSizeIsResponsive && !fontSize) return null;

  return (
    <ViewportContext.Provider value={viewportContext}>
      <FontSizeContext.Provider value={fontSize}>
        <div
          ref={viewportRef}
          className={clsx(styles.root, className, fixed && styles.fixed, {
            [styles.animate]: animate,
          })}
          {...divProps}
        >
          {children}
        </div>
      </FontSizeContext.Provider>
    </ViewportContext.Provider>
  );
};
