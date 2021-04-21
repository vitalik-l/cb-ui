import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function MenuPanel({ onRequestHide, open, children }) {
  function onOverlayClick() {
    if (onRequestHide) onRequestHide();
  }

  return (
    <div className={classNames('cb-demo-menu', { open })}>
      <div className="cb-demo-menu__overlay" onClick={onOverlayClick} />
      <div className="cb-demo-menu__content">{children}</div>
    </div>
  );
}

MenuPanel.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool,
  onRequestHide: PropTypes.func,
};

export default MenuPanel;
