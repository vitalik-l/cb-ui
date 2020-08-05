import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({
  element, custom, className, onClick, children, ...props
}) {
  const onKeyDown = useCallback((event) => {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      if (onClick) onClick(event);
    }
  }, [onClick]);

  const injectProps = {
    className: classNames({ 'cb-Button': !custom, className }),
    onClick,
    children,
  };

  if (element !== 'button') {
    injectProps.role = 'button';
    injectProps.tabIndex = 0;
    injectProps.onKeyDown = onKeyDown;
  }

  return React.createElement(element, {
    ...injectProps,
    ...props,
  });
}

Button.propTypes = {
  /** Click handler */
  onClick: PropTypes.func,
  element: PropTypes.string,
  custom: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  element: 'button',
};

export default Button;
