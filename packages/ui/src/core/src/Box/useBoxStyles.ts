import React from 'react';
import styles from './Box.module.scss';

export type BosStylesProps = {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  mx?: string | number;
  my?: string | number;
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  px?: string | number;
  py?: string | number;
  color?: string;
  fontFamily?: string;
  fontSize?: string | number;
  opacity?: string | number;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  lineHeight?: string | number;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderX?: string;
  borderY?: string;
  borderRadius?: string;
  backgroundColor?: string;
  transition?: string;
  transform?: string;
};

export type BoxStyle = { [key in `--Box-${keyof BosStylesProps}`]?: string | number };

export const removeBoxProps = ({
  width,
  size,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  color,
  fontSize,
  fontFamily,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  opacity,
  top,
  bottom,
  left,
  right,
  lineHeight,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderX,
  borderY,
  borderRadius,
  backgroundColor,
  transition,
  transform,
  ...rest
}: BosStylesProps) => rest;

export const useBoxStyles = ({
  width,
  size,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  color,
  fontSize,
  fontFamily,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  opacity,
  top,
  left,
  bottom,
  right,
  lineHeight,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderX,
  borderY,
  borderRadius,
  backgroundColor,
  transition,
  transform,
}: BosStylesProps) => {
  return React.useMemo(() => {
    const boxStyle: BoxStyle = {};
    const classNames = [];

    if (width !== undefined) {
      boxStyle['--Box-width'] = typeof width === 'number' ? `${width}px` : width;
      classNames.push(styles.width);
    }
    if (height !== undefined) {
      boxStyle['--Box-height'] = typeof height === 'number' ? `${height}px` : height;
      classNames.push(styles.height);
    }
    if (size !== undefined) {
      boxStyle['--Box-size'] = typeof size === 'number' ? `${size}px` : size;
      classNames.push(styles.size);
    }
    if (maxHeight !== undefined) {
      boxStyle['--Box-maxHeight'] = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
      classNames.push(styles.maxHeight);
    }
    if (maxWidth !== undefined) {
      boxStyle['--Box-maxWidth'] = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
      classNames.push(styles.maxWidth);
    }
    if (minWidth !== undefined) {
      boxStyle['--Box-minWidth'] = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
      classNames.push(styles.minWidth);
    }
    if (minHeight !== undefined) {
      boxStyle['--Box-minHeight'] = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
      classNames.push(styles.minHeight);
    }
    if (color !== undefined) {
      boxStyle['--Box-color'] = color;
      classNames.push(styles.color);
    }
    if (fontSize !== undefined) {
      boxStyle['--Box-fontSize'] = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
      classNames.push(styles.fontSize);
    }
    if (fontFamily !== undefined) {
      boxStyle['--Box-fontFamily'] = fontFamily;
      classNames.push(styles.fontFamily);
    }
    if (p !== undefined) {
      boxStyle['--Box-p'] = typeof p === 'number' ? `${p}px` : p;
      classNames.push(styles.p);
    }
    if (px !== undefined) {
      boxStyle['--Box-px'] = typeof px === 'number' ? `${px}px` : px;
      classNames.push(styles.px);
    }
    if (py !== undefined) {
      boxStyle['--Box-py'] = typeof py === 'number' ? `${py}px` : py;
      classNames.push(styles.py);
    }
    if (pb !== undefined) {
      boxStyle['--Box-pb'] = typeof pb === 'number' ? `${pb}px` : pb;
      classNames.push(styles.pb);
    }
    if (pt !== undefined) {
      boxStyle['--Box-pt'] = typeof pt === 'number' ? `${pt}px` : pt;
      classNames.push(styles.pt);
    }
    if (pl !== undefined) {
      boxStyle['--Box-pl'] = typeof pl === 'number' ? `${pl}px` : pl;
      classNames.push(styles.pl);
    }
    if (pr !== undefined) {
      boxStyle['--Box-pr'] = typeof pr === 'number' ? `${pr}px` : pr;
      classNames.push(styles.pr);
    }
    if (m !== undefined) {
      boxStyle['--Box-m'] = typeof m === 'number' ? `${m}px` : m;
      classNames.push(styles.m);
    }
    if (mx !== undefined) {
      boxStyle['--Box-mx'] = typeof mx === 'number' ? `${mx}px` : mx;
      classNames.push(styles.mx);
    }
    if (my !== undefined) {
      boxStyle['--Box-my'] = typeof my === 'number' ? `${my}px` : my;
      classNames.push(styles.my);
    }
    if (mt !== undefined) {
      boxStyle['--Box-mt'] = typeof mt === 'number' ? `${mt}px` : mt;
      classNames.push(styles.mt);
    }
    if (mb !== undefined) {
      boxStyle['--Box-mb'] = typeof mb === 'number' ? `${mb}px` : mb;
      classNames.push(styles.mb);
    }
    if (ml !== undefined) {
      boxStyle['--Box-ml'] = typeof ml === 'number' ? `${ml}px` : ml;
      classNames.push(styles.ml);
    }
    if (mr !== undefined) {
      boxStyle['--Box-mr'] = typeof mr === 'number' ? `${mr}px` : mr;
      classNames.push(styles.mr);
    }
    if (opacity !== undefined) {
      boxStyle['--Box-opacity'] = opacity;
      classNames.push(styles.opacity);
    }
    if (top !== undefined) {
      boxStyle['--Box-top'] = typeof top === 'number' ? `${top}px` : top;
      classNames.push(styles.top);
    }
    if (bottom !== undefined) {
      boxStyle['--Box-bottom'] = typeof bottom === 'number' ? `${bottom}px` : bottom;
      classNames.push(styles.bottom);
    }
    if (left !== undefined) {
      boxStyle['--Box-left'] = typeof left === 'number' ? `${left}px` : left;
      classNames.push(styles.left);
    }
    if (right !== undefined) {
      boxStyle['--Box-right'] = typeof right === 'number' ? `${right}px` : right;
      classNames.push(styles.right);
    }
    if (lineHeight !== undefined) {
      boxStyle['--Box-lineHeight'] =
        typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight;
      classNames.push(styles.lineHeight);
    }
    if (border !== undefined) {
      boxStyle['--Box-border'] = border;
      classNames.push(styles.border);
    }
    if (borderTop !== undefined) {
      boxStyle['--Box-borderTop'] = borderTop;
      classNames.push(styles.borderTop);
    }
    if (borderBottom !== undefined) {
      boxStyle['--Box-borderBottom'] = borderBottom;
      classNames.push(styles.borderBottom);
    }
    if (borderLeft !== undefined) {
      boxStyle['--Box-borderLeft'] = borderLeft;
      classNames.push(styles.borderLeft);
    }
    if (borderRight !== undefined) {
      boxStyle['--Box-borderRight'] = borderRight;
      classNames.push(styles.borderRight);
    }
    if (borderX !== undefined) {
      boxStyle['--Box-borderX'] = borderX;
      classNames.push(styles.borderX);
    }
    if (borderY !== undefined) {
      boxStyle['--Box-borderY'] = borderY;
      classNames.push(styles.borderY);
    }
    if (borderRadius !== undefined) {
      boxStyle['--Box-borderRadius'] = borderRadius;
      classNames.push(styles.borderRadius);
    }
    if (backgroundColor !== undefined) {
      boxStyle['--Box-backgroundColor'] = backgroundColor;
      classNames.push(styles.backgroundColor);
    }
    if (transition !== undefined) {
      boxStyle['--Box-transition'] = transition;
      classNames.push(styles.transition);
    }
    if (transform !== undefined) {
      boxStyle['--Box-transform'] = transform;
      classNames.push(styles.transform);
    }

    return { boxStyle, boxClassName: classNames.filter(Boolean).join(' ') };
  }, [
    width,
    size,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    color,
    fontSize,
    fontFamily,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    opacity,
    top,
    bottom,
    left,
    right,
    lineHeight,
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    borderX,
    borderY,
    borderRadius,
    backgroundColor,
    transition,
    transform,
  ]);
};
