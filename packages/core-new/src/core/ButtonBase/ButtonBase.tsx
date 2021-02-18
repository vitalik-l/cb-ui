import React from 'react';
import PropsTypes from 'prop-types';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './ButtonBase.scss';

export const ButtonBase = React.forwardRef((props: any, ref) => {
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
    ...buttonProps
  } = props;

  const ComponentProp = component === 'button' && href ? 'a' : component;

  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !href) {
      buttonProps.role = 'button';
    }
    buttonProps['aria-disabled'] = disabled;
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
      className={clsx(classes.ButtonBase, className, {
        [`${classes.ButtonBase}_disabled`]: disabled,
      })}
      role={ComponentProp === 'button' ? undefined : 'button'}
      ref={ref}
      href={href}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...buttonProps}
    >
      {children}
    </ComponentProp>
  );
});

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {
  component: 'button',
  tabIndex: 0,
};

ButtonBase.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
  component: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.element]),
  href: PropsTypes.string,
  disabled: PropsTypes.bool,
  type: PropsTypes.string,
  tabIndex: PropsTypes.number,
  onClick: PropsTypes.func,
  onKeyDown: PropsTypes.func,
};
