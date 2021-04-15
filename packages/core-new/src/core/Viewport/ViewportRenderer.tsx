import React from 'react';
import clsx from 'clsx';

// local files
import styles from './CoreViewport.module.scss';
import { useResponsiveFontSize } from '../hooks/useResponsiveFontSize';
import { FontSizeContext } from './FontSizeContext';
import { ViewportContext } from './ViewportContext';
import { useAppMode } from '../Root/useAppMode';

export type ViewportRendererProps = {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  timeout?: number;
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
    timeout,
    baseFontSize,
    baseHeight = 0,
    baseWidth = 0,
    maxFontSize,
    minFontSize,
    className,
    fixed: fixedProp,
    width,
    height,
    ...divProps
  } = props;
  const isMobile = useAppMode();
  const fixed = fixedProp !== undefined ? fixedProp : isMobile;
  const viewportRef = React.useRef<any>();
  const fontSizeIsResponsive = !!baseWidth && !!baseHeight;
  const fontSize = useResponsiveFontSize({
    viewportWidth: width,
    viewportHeight: height,
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

    if (viewportEl && width && height) {
      if (fontSizeIsResponsive && prevFontSize.current === fontSize) return;
      viewportEl.style.maxWidth = `${width}px`;
      viewportEl.style.height = `${height}px`;
      setViewportContext({ width, height });
      (window as any).viewportSize = { width, height };

      if (fontSize) {
        document.documentElement.style.fontSize = `${fontSize}px`;
      }

      window.dispatchEvent(
        new CustomEvent('viewport resize', {
          detail: {
            width,
            height,
          },
        }),
      );
    }
    prevFontSize.current = fontSize;
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
      <FontSizeContext.Provider value={fontSize}>
        <div
          ref={viewportRef}
          className={clsx(styles.root, className, fixed && styles.fixed, {
            [styles.animate]: animate,
          })}
          {...divProps}
        />
      </FontSizeContext.Provider>
    </ViewportContext.Provider>
  );
};
