import React from 'react';
import clsx from 'clsx';

// local files
import styles from './CoreViewport.module.scss';
import { ViewportContext } from './ViewportContext';
import { useAppMode } from '../Root/useAppMode';
import { calcFontSize } from '../utils/calcFontSize';

export type ViewportRendererProps = {
  children?: React.ReactNode;
  breakpoint?: (width: number, height: number) => number | false | true | undefined;
  width?: number;
  height?: number;
  baseFontSize?: number;
  baseWidth?: number;
  baseHeight?: number;
  maxFontSize?: number;
  minFontSize?: number;
  className?: string;
  animate?: boolean;
  fixed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const ViewportRenderer = (props: ViewportRendererProps) => {
  const {
    animate,
    baseFontSize,
    baseHeight = 0,
    baseWidth = 0,
    maxFontSize,
    minFontSize,
    className,
    fixed: fixedProp,
    width,
    height,
    breakpoint,
    ...divProps
  } = props;
  const isMobile = useAppMode();
  const fixed = fixedProp !== undefined ? fixedProp : isMobile;
  const viewportRef = React.useRef<any>();
  const fontSizeIsResponsive = !!baseWidth && !!baseHeight;
  const [viewportContext, setViewportContext] = React.useState({
    width: 0,
    height: 0,
    fontSize: 0,
  });
  const prevFontSize = React.useRef(0);
  const fontSize = React.useMemo(() => {
    if (width && height && breakpoint) {
      const breakpointResult = breakpoint(width, height);
      if (breakpointResult === false) return prevFontSize.current;
      if (typeof breakpointResult === 'number' && breakpointResult >= 0) return breakpointResult;
    }
    return calcFontSize({
      viewportWidth: width,
      viewportHeight: height,
      baseFontSize,
      baseWidth,
      baseHeight,
      maxFontSize,
      minFontSize,
    });
  }, [width, height, baseFontSize, baseWidth, baseHeight, maxFontSize, minFontSize, breakpoint]);
  prevFontSize.current = fontSize;

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

    if (viewportEl && width && height) {
      viewportEl.style.maxWidth = `${width}px`;
      viewportEl.style.height = `${height}px`;

      if (fontSize) {
        document.documentElement.style.fontSize = `${fontSize}px`;
      }

      setViewportContext({ width, height, fontSize });

      (window as any).viewportSize = { width, height };
      window.dispatchEvent(
        new CustomEvent('viewport resize', {
          detail: {
            width,
            height,
            fontSize,
          },
        }),
      );
    }
  }, [fontSize, fontSizeIsResponsive, width, height]);

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
      <div
        ref={viewportRef}
        className={clsx(styles.root, className, fixed && styles.fixed, {
          [styles.animate]: animate,
        })}
        {...divProps}
      />
    </ViewportContext.Provider>
  );
};
