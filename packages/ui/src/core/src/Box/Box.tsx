import clsx from 'clsx';
import React from 'react';
import styles from './Box.module.scss';

type Props<T extends React.ElementType = 'div'> = React.ComponentPropsWithRef<T> & {
  as?: T;
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
};

export const Box = React.forwardRef((props: Props, ref: any) => {
  const {
    className,
    as: Component = 'div',
    style: styleProp,
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
    ...restProps
  } = props;

  const style = React.useMemo(() => {
    const vars: any = {};

    if (width !== undefined) vars['--box-width'] = typeof width === 'number' ? `${width}px` : width;

    if (height !== undefined)
      vars['--box-height'] = typeof height === 'number' ? `${height}px` : height;

    if (size !== undefined) vars['--box-size'] = typeof size === 'number' ? `${size}px` : size;

    if (maxHeight !== undefined)
      vars['--box-maxHeight'] = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;

    if (maxWidth !== undefined)
      vars['--box-maxWidth'] = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;

    if (color !== undefined) vars['--box-color'] = color;

    if (fontSize !== undefined)
      vars['--box-fontSize'] = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;

    if (fontFamily !== undefined) vars['--box-fontFamily'] = fontFamily;

    if (p !== undefined) vars['--box-p'] = typeof p === 'number' ? `${p}px` : p;

    return {
      ...styleProp,
      ...vars,
    };
  }, [
    styleProp,
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
  ]);

  return (
    <Component
      className={clsx(
        className,
        width !== undefined && styles.width,
        !!color && styles.color,
        p !== undefined && styles.p,
        fontSize !== undefined && styles.fontSize,
      )}
      style={style}
      {...restProps}
      ref={ref}
    />
  );
});
