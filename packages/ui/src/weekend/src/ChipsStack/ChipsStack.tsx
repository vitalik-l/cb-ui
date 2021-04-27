import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ChipsStack.module.scss';

type Props = React.ComponentProps<'div'> & {
  offsetTop: number;
  offsetLeft: number;
  animate?: 'target' | 'fadeOut';
};

export const ChipsStack = (props: Props) => {
  const { className, children, offsetTop, offsetLeft, animate, ...restProps } = props;
  const offsetRef = React.useRef({ top: offsetTop, left: offsetLeft });
  const childrenRef: any = React.useRef([]);
  const animationDelay = React.useRef(0);
  let targetElement: HTMLElement | null, targetElementPosition: any;

  if (animate) {
    if (animate === 'target') {
      targetElement = document.getElementById('chipsAnimationTarget');
      if (targetElement) {
        targetElementPosition = targetElement.getBoundingClientRect();
      }
    }
  }

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

    if (animate) {
      if (animate === 'target' && targetElementPosition) {
        const delay = animationDelay.current + childIndex * 100;
        const currentChip = childrenRef.current[childIndex];
        const currentChipClientRect = currentChip.getBoundingClientRect();
        const newPos = {x: (targetElementPosition.left - currentChipClientRect.left), y: (targetElementPosition.top - currentChipClientRect.top)};
        childProps.style = {
          ...childProps.style,
          transition: 'transform ease-out, opacity cubic-bezier(1,0,.79,.1)',
          transitionDuration: '1s, 1.1s',
          transitionDelay: delay + 'ms',
          transform: 'translate('+newPos.x+'px,'+newPos.y+'px)',
          opacity: 0,
        }
      }
    }

    return React.cloneElement(child, {
      className: clsx(styles.chip, childClassName),
      ...childProps,
      ref: (ref: any) => (childrenRef.current[childIndex] = ref),
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
