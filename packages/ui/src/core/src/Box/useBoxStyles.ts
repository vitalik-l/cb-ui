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
};

export type BoxStyle = { [key in `--box-${keyof BosStylesProps}`]?: string | number };

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
}: BosStylesProps) => {
  return React.useMemo(() => {
    const boxStyle: BoxStyle = {};
    const classNames = [];

    if (width !== undefined) {
      boxStyle['--box-width'] = typeof width === 'number' ? `${width}px` : width;
      classNames.push(styles.width);
    }
    if (height !== undefined) {
      boxStyle['--box-height'] = typeof height === 'number' ? `${height}px` : height;
      classNames.push(styles.height);
    }
    if (size !== undefined) {
      boxStyle['--box-size'] = typeof size === 'number' ? `${size}px` : size;
      classNames.push(styles.size);
    }
    if (maxHeight !== undefined) {
      boxStyle['--box-maxHeight'] = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
      classNames.push(styles.maxHeight);
    }
    if (maxWidth !== undefined) {
      boxStyle['--box-maxWidth'] = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
      classNames.push(styles.maxWidth);
    }
    if (minWidth !== undefined) {
      boxStyle['--box-minWidth'] = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
      classNames.push(styles.minWidth);
    }
    if (minHeight !== undefined) {
      boxStyle['--box-minHeight'] = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
      classNames.push(styles.minHeight);
    }
    if (color !== undefined) {
      boxStyle['--box-color'] = color;
      classNames.push(styles.color);
    }
    if (fontSize !== undefined) {
      boxStyle['--box-fontSize'] = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
      classNames.push(styles.fontSize);
    }
    if (fontFamily !== undefined) {
      boxStyle['--box-fontFamily'] = fontFamily;
      classNames.push(styles.fontFamily);
    }
    if (p !== undefined) {
      boxStyle['--box-p'] = typeof p === 'number' ? `${p}px` : p;
      classNames.push(styles.p);
    }
    if (px !== undefined) {
      boxStyle['--box-px'] = typeof px === 'number' ? `${px}px` : px;
      classNames.push(styles.px);
    }
    if (py !== undefined) {
      boxStyle['--box-py'] = typeof py === 'number' ? `${py}px` : py;
      classNames.push(styles.py);
    }
    if (pb !== undefined) {
      boxStyle['--box-pb'] = typeof pb === 'number' ? `${pb}px` : pb;
      classNames.push(styles.pb);
    }
    if (pt !== undefined) {
      boxStyle['--box-pt'] = typeof pt === 'number' ? `${pt}px` : pt;
      classNames.push(styles.pt);
    }
    if (pl !== undefined) {
      boxStyle['--box-pl'] = typeof pl === 'number' ? `${pl}px` : pl;
      classNames.push(styles.pl);
    }
    if (pr !== undefined) {
      boxStyle['--box-pr'] = typeof pr === 'number' ? `${pr}px` : pr;
      classNames.push(styles.pr);
    }
    if (m !== undefined) {
      boxStyle['--box-m'] = typeof m === 'number' ? `${m}px` : m;
      classNames.push(styles.m);
    }
    if (mx !== undefined) {
      boxStyle['--box-mx'] = typeof mx === 'number' ? `${mx}px` : mx;
      classNames.push(styles.mx);
    }
    if (my !== undefined) {
      boxStyle['--box-my'] = typeof my === 'number' ? `${my}px` : my;
      classNames.push(styles.my);
    }
    if (mt !== undefined) {
      boxStyle['--box-mt'] = typeof mt === 'number' ? `${mt}px` : mt;
      classNames.push(styles.mt);
    }
    if (mb !== undefined) {
      boxStyle['--box-mb'] = typeof mb === 'number' ? `${mb}px` : mb;
      classNames.push(styles.mb);
    }
    if (ml !== undefined) {
      boxStyle['--box-ml'] = typeof ml === 'number' ? `${ml}px` : ml;
      classNames.push(styles.ml);
    }
    if (mr !== undefined) {
      boxStyle['--box-mr'] = typeof mr === 'number' ? `${mr}px` : mr;
      classNames.push(styles.mr);
    }
    if (opacity !== undefined) {
      boxStyle['--box-opacity'] = opacity;
      classNames.push(styles.opacity);
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
  ]);
};
