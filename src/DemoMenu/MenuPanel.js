import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuPanel extends Component {
    onOverlayClick = () => {
      const { onRequestHide } = this.props;
      if (onRequestHide) {
        onRequestHide();
      }
    };

    render() {
      const { open, children } = this.props;

      return (
        <div className={classNames('cb-demo-menu', { open })}>
          <div className="cb-demo-menu__overlay" onClick={this.onOverlayClick} />
          <div className="cb-demo-menu__content">
            {children}
          </div>
        </div>
      );
    }
}

MenuPanel.propTypes = {
  children: PropTypes.element,
  // links: PropTypes.array,
  open: PropTypes.bool,
  onRequestHide: PropTypes.func,
};

export default MenuPanel;
