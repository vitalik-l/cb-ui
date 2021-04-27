import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ChipsStack.module.scss';

type Props = React.ComponentProps<'div'> & {
  offsetTop?: number;
  offsetLeft?: number;
  animate?: 'target' | 'fadeOut' | 'none';
  animationDelay?: number;
  onAnimationEnd?: any;
};

export const ChipsStack = React.forwardRef((props: Props, ref: any) => {
  const {
    className,
    children,
    offsetTop = 0,
    offsetLeft = 0,
    animate,
    onAnimationEnd,
    animationDelay: animationDelayProp = 800,
    ...restProps
  } = props;
  const offsetRef = React.useRef({ top: offsetTop, left: offsetLeft });
  const childrenRef: any = React.useRef([]);
  const animationDelay = React.useRef(animationDelayProp);
  const animated = React.useRef(false);
  React.useImperativeHandle(
    ref,
    () => ({
      animated,
    }),
    [],
  );
  let targetElement: HTMLElement | null, targetElementPosition: any;

  if (animate) {
    if (animate === 'target') {
      targetElement = document.getElementById('chipsAnimationTarget');
      if (targetElement) {
        targetElementPosition = targetElement.getBoundingClientRect();
      }
    }
  }

  const onTransitionEnd = React.useCallback(
    (event: TransitionEvent) => {
      if (onAnimationEnd && event.propertyName === 'opacity') {
        animated.current = true;
        onAnimationEnd();
      }
    },
    [onAnimationEnd],
  );

  const childLength = React.Children.count(children);
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
        };
      }
    }

    if (animate) {
      if (animate === 'target' && targetElementPosition) {
        const delay = animationDelay.current + childIndex * 100;
        const currentChip = childrenRef.current[childIndex];
        const currentChipClientRect = currentChip.getBoundingClientRect();
        const newPos = {
          x: targetElementPosition.left - currentChipClientRect.left,
          y: targetElementPosition.top - currentChipClientRect.top,
        };
        childProps.style = {
          ...childProps.style,
          transition: 'transform ease-out, opacity cubic-bezier(1,0,.79,.1)',
          transitionDuration: '1s, 1.1s',
          transitionDelay: delay + 'ms',
          transform: 'translate(' + newPos.x + 'px,' + newPos.y + 'px)',
          opacity: 0,
        };
      } else if (animate === 'fadeOut') {
        childProps.style = {
          ...childProps.style,
          transition: 'transform, opacity linear',
          transitionDuration: '1s, 1.1s',
          transitionDelay: animationDelay.current + 'ms',
          transform: 'translateY(-10em)',
          opacity: 0,
        };
      }
      if (childIndex === childLength - 1) {
        childProps.onTransitionEnd = onTransitionEnd;
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
});

ChipsStack.defaultProps = {
  offsetTop: -5,
  offsetLeft: 4,
};
