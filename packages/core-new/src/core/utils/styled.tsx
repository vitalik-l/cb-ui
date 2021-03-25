import React from 'react';
import clsx from 'clsx';

type Styles<T extends React.ElementType> = (
  (props: React.ComponentProps<T>) => string | Array<any>
) | string | { [key: string]: any };

export function styled<T extends React.ElementType>(styles: Styles<T>): React.FunctionComponent<React.ComponentProps<'div'>>;
export function styled<T extends React.ElementType>(Component: T, styles: Styles<T>): React.FunctionComponent<React.ComponentProps<T>>;
export function styled(...args: any) {
  let styles: any, Component: React.ElementType = 'div';

  if (args.length > 1) {
    [Component, styles] = args;
  } else {
    styles = args[0];
  }

  return React.forwardRef((props: React.ComponentProps<typeof Component>, ref: any) => {
    const {className, ...restProps} = props;
    const customProps: any = {};
    let stylesToApply;
    if (typeof styles === 'object') {
      customProps.classes = styles;
    } else {
      stylesToApply = typeof styles === 'function' ? styles(props) : styles;
    }

    return (
      <Component
        className={clsx(stylesToApply, className)}
        {...customProps}
        {...restProps}
        ref={ref}
      />
    );
  }) as any;
}