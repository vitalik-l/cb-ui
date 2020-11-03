import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Drawer(props) {
  const { open, children, position, onRequestHide } = props;
  const classes = open ? 'cb-Drawer cb-Drawer--open' : 'cb-Drawer';

  function onOverlayClick() {
    if (onRequestHide) onRequestHide();
  }

  return (
    <div className={classes}>
      <div className="cb-Drawer__overlay" onClick={onOverlayClick} />
      <div
        className={classNames(
          'cb-Drawer__content',
          { 'cb-Drawer__content--left': position === 'left' },
          { 'cb-Drawer__content--right': position === 'right' },
        )}
      >
        {children}
      </div>
    </div>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool,
  onRequestHide: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
};

Drawer.defaultProps = {
  position: 'left',
  open: false,
};

export default Drawer;
