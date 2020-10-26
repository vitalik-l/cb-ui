import React from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import './styles/default.scss';

const ButtonBase = React.forwardRef((props, ref) => {
  const {
    children, className, component, href, ...buttonProps
  } = props;

  const ComponentProp = component === 'button' && href ? 'a' : component;

  return (
    <ComponentProp
      type={ComponentProp === 'button' ? 'button' : null}
      tabIndex={0}
      className={classNames('cb-ButtonBase', className)}
      role={ComponentProp === 'button' ? undefined : 'button'}
      ref={ref}
      href={href}
      {...buttonProps}
    >
      {children}
    </ComponentProp>
  );
});

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {
  component: 'button',
};

ButtonBase.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
  component: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.element]),
  href: PropsTypes.string,
};

export { ButtonBase };
