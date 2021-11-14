import clsx from 'clsx';
import React from 'react';
import { BosStylesProps, useBoxStyles, removeBoxProps } from './useBoxStyles';

type Props<T extends React.ElementType = 'div'> = React.ComponentPropsWithRef<T> & {
  as?: T;
} & BosStylesProps;

export const Box = React.forwardRef((props: Props, ref: any) => {
  const { className, as: Component = 'div', style, ...restProps } = props;
  const { boxClassName, boxStyle } = useBoxStyles(restProps);

  return (
    <Component
      className={clsx(className, boxClassName)}
      style={{ ...style, ...boxStyle }}
      {...removeBoxProps(restProps)}
      ref={ref}
    />
  );
});
