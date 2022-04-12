import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../hooks';
import { useButtonBase } from './ButtonBaseProvider';
import defaultStyles from './CoreButtonBase.module.scss';

declare module 'react' {
  // For TS playground, type imports need to be used to make the sample compile.
  // In local dev, you can use ForwardedRef, ReactElement, RefAttributes directly.
  function forwardRef<T, P = {}>(
    render: (props: P, ref: import('react').ForwardedRef<T>) => import('react').ReactElement | null,
  ): (props: P & import('react').RefAttributes<T>) => import('react').ReactElement | null;
}

type ClassesType = {
  root?: string;
  disabled?: string;
  label?: string;
  selected?: string;
};

export type ButtonBaseProps<T extends React.ElementType = 'button'> = {
  component?: T;
  href?: string;
  selected?: boolean;
  classes?: ClassesType;
  styles?: ClassesType;
  clickSound?: (() => void) | false;
  tabIndex?: null | number;
  disabled?: boolean;
} & Omit<React.ComponentPropsWithRef<T>, 'tabIndex'>;

export const ButtonBase = React.forwardRef(
  <T extends React.ElementType>(props: ButtonBaseProps<T>, ref: any) => {
    const {
      children,
      className,
      component: componentProp = 'button',
      href,
      disabled,
      type,
      tabIndex = 0,
      onClick,
      onKeyDown,
      classes: classesProp,
      styles,
      selected,
      clickSound: clickSoundProp,
      ...buttonProps
    } = props;
    const classes: ClassesType = useStyles(defaultStyles, styles ?? classesProp);
    const Component: React.ElementType = componentProp === 'button' && href ? 'a' : componentProp;
    const otherProps: any = {};
    const context = useButtonBase();
    const clickSound = clickSoundProp === false ? clickSoundProp : context.clickSound;

    if (Component === 'button') {
      otherProps.type = type === undefined ? 'button' : type;
      otherProps.disabled = disabled;
    } else {
      if (Component !== 'a' || !href) {
        otherProps.role = 'button';
      }
      otherProps['aria-disabled'] = disabled;
    }

    const handleKeyDown = React.useCallback(
      (event) => {
        if (onKeyDown) {
          onKeyDown(event);
        }

        // Keyboard accessibility for non interactive elements
        if (
          event.target === event.currentTarget &&
          Component !== 'button' &&
          Component !== 'a' &&
          (event.key === 'Enter' || event.key === ' ') &&
          !disabled
        ) {
          event.preventDefault();
          if (onClick) {
            onClick(event);
          }
        }
      },
      [onClick, onKeyDown, Component, disabled],
    );

    const handleClick = React.useCallback(
      (event) => {
        if (clickSound) {
          clickSound();
        }
        if (onClick) onClick(event);
      },
      [clickSound, onClick],
    );

    return (
      <Component
        type={Component === 'button' ? 'button' : null}
        tabIndex={disabled ? -1 : tabIndex}
        className={clsx(
          classes.root,
          className,
          disabled && classes.disabled,
          selected && classes.selected,
        )}
        role={Component === 'button' ? undefined : 'button'}
        ref={ref}
        href={href}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...buttonProps}
        {...otherProps}
      >
        {!!classes.label ? <span className={classes.label}>{children}</span> : children}
      </Component>
    );
  },
);

(ButtonBase as any).defaultProps = {
  component: 'button',
  tabIndex: 0,
};
