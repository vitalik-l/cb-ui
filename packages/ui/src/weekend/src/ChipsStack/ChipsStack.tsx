import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ChipsStack.module.scss';

type Props = React.ComponentProps<'div'> & {
  offsetTop: number;
  offsetLeft: number;
};

export const ChipsStack = (props: Props) => {
  const { className, children, offsetTop, offsetLeft, ...restProps } = props;
  const offsetRef = React.useRef({ top: offsetTop, left: offsetLeft });

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { className: childClassName, ...childProps } = child.props;

    if (childIndex > 0) {
      if (childIndex === 1) {
        offsetRef.current = { top: offsetTop, left: offsetLeft };
      } else {
        offsetRef.current.top += offsetTop;
        offsetRef.current.left += offsetLeft;
      }
      if (offsetRef.current.top && offsetRef.current.left) {
        childProps.style = {
          ...childProps.style,
          top: `${offsetRef.current.top}%`,
          left: `${offsetRef.current.left}%`,
        }
      }
    }

    return React.cloneElement(child, {
      className: clsx(styles.chip, childClassName),
      ...childProps,
    });
  });

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      {childrenItems}
    </div>
  );
};

ChipsStack.defaultProps = {
  offsetTop: -5,
  offsetLeft: 4,
} as Partial<Props>;
