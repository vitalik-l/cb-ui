import clsx from 'clsx';
import React from 'react';
import { BosStylesProps, useBoxStyles, removeBoxProps } from './useBoxStyles';

type BoxProps<T extends React.ElementType = 'div'> = React.ComponentPropsWithRef<T> & {
  as?: T;
} & BosStylesProps;

const BoxInternal = React.forwardRef(
  <T extends React.ElementType>(props: BoxProps<T>, ref: any) => {
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
  },
);

export const Box = React.memo(BoxInternal) as typeof BoxInternal;
(Box as any).displayName = 'Box';
