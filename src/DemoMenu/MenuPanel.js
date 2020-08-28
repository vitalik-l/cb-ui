import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function MenuPanel(props) {
  const { open, children, onRequestHide } = props;

  function onOverlayClick() {
    if (onRequestHide) onRequestHide();
  }

  return (
    <div className={classNames('cb-demo-menu', { open })}>
      <div className="cb-demo-menu__overlay" onClick={onOverlayClick} />
      <div className="cb-demo-menu__content">
        {children}
      </div>
    </div>
  );
}

MenuPanel.propTypes = {
  open: PropTypes.bool,
  onRequestHide: PropTypes.func,
  children: PropTypes.node,
};

export default MenuPanel;
