import clsx from 'clsx';
import React from 'react';
import { useClasses } from '../hooks/useClasses';
import { useButtonBase } from './ButtonBaseProvider';
import styles from './CoreButtonBase.module.scss';

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
  clickSound?: (() => void) | false;
  tabIndex?: null | number;
  disabled?: boolean;
} & Omit<React.ComponentPropsWithRef<T>, 'tabIndex'>;

export const ButtonBase = React.forwardRef(
  <T extends React.ElementType>(props: ButtonBaseProps<T>, ref: any) => {
    const {
      children,
      className,
      component = 'button',
      href,
      disabled,
      type,
      tabIndex = 0,
      onClick,
      onKeyDown,
      classes: classesProp,
      selected,
      clickSound: clickSoundProp,
      ...buttonProps
    } = props;
    const classes: ClassesType = useClasses(styles, classesProp);
    const ComponentProp: React.ElementType = component === 'button' && href ? 'a' : component;
    const otherProps: any = {};
    const context = useButtonBase();
    const clickSound = clickSoundProp === false ? clickSoundProp : context.clickSound;

    if (ComponentProp === 'button') {
      otherProps.type = type === undefined ? 'button' : type;
      otherProps.disabled = disabled;
    } else {
      if (ComponentProp !== 'a' || !href) {
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
          ComponentProp !== 'button' &&
          ComponentProp !== 'a' &&
          (event.key === 'Enter' || event.key === ' ') &&
          !disabled
        ) {
          event.preventDefault();
          if (onClick) {
            onClick(event);
          }
        }
      },
      [onClick, onKeyDown, ComponentProp, disabled],
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
      <ComponentProp
        type={ComponentProp === 'button' ? 'button' : null}
        tabIndex={disabled ? -1 : tabIndex}
        className={clsx(
          classes.root,
          className,
          disabled && classes.disabled,
          selected && classes.selected,
        )}
        role={ComponentProp === 'button' ? undefined : 'button'}
        ref={ref}
        href={href}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...buttonProps}
        {...otherProps}
      >
        {!!classes.label ? <span className={classes.label}>{children}</span> : children}
      </ComponentProp>
    );
  },
);

(ButtonBase as any).defaultProps = {
  component: 'button',
  tabIndex: 0,
};
