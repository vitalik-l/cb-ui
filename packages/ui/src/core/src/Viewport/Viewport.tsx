import React from 'react';
import { CalculatedViewport, CalculatedViewportProps } from './CalculatedViewport';
import { ViewportRenderer, ViewportRendererProps } from './ViewportRenderer';

export type ViewportProps = ViewportRendererProps & Omit<CalculatedViewportProps, 'children'>;

export const Viewport = (props: ViewportProps) => {
  const { width, height, minRatio, maxRatio, vertical, horizontal, timeout, ...restProps } = props;
  const isControlled = width !== undefined && height !== undefined;

  if (isControlled) {
    return <ViewportRenderer width={width} height={height} {...restProps} />;
  }

  return (
    <CalculatedViewport
      minRatio={minRatio}
      maxRatio={maxRatio}
      vertical={vertical}
      horizontal={horizontal}
      timeout={timeout}
    >
      {(width, height) => <ViewportRenderer width={width} height={height} {...restProps} />}
    </CalculatedViewport>
  );
};
