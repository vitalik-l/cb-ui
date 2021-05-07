import React from 'react';
import clsx from 'clsx';

// local files
import { useClasses } from '../hooks/useClasses';
import styles from './CoreButtonBase.module.scss';

type ClassesType = {
  root?: string;
  disabled?: string;
  label?: string;
  selected?: string;
};

type Props<T extends React.ElementType> = {
  component?: T;
  href?: string;
  selected?: boolean;
  classes?: ClassesType;
} & React.ComponentPropsWithRef<T>;

export const ButtonBase = React.forwardRef(
  <T extends React.ElementType>(props: Props<T>, ref: any) => {
    const {
      children,
      className,
      component,
      href,
      disabled,
      type,
      tabIndex,
      onClick,
      onKeyDown,
      classes: classesProp,
      selected,
      ...buttonProps
    } = props;
    const classes: ClassesType = useClasses(styles, classesProp);
    const ComponentProp = component === 'button' && href ? 'a' : component;
    const otherProps: any = {};

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
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...buttonProps}
        {...otherProps}
      >
        {!!classes.label ? <span className={classes.label}>{children}</span> : children}
      </ComponentProp>
    );
  },
);

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {
  component: 'button',
  tabIndex: 0,
};
