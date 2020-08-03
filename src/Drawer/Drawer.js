import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Drawer extends Component {
    static propTypes = {
      open: PropTypes.boolean,
      onRequestHide: PropTypes.func,
      position: PropTypes.oneOf(['left', 'right']),
      children: PropTypes.any,
    };

    static defaultProps = {
      position: 'left',
      open: false,
    };

    onOverlayClick = () => {
      this.props.onRequestHide && this.props.onRequestHide();
    };

    render() {
      const { open, children, position } = this.props;
      const classes = open ? 'cb-Drawer cb-Drawer--open' : 'cb-Drawer';

      return (
        <div className={classes}>
          <div className="cb-Drawer__overlay" onClick={this.onOverlayClick} />
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
}

export default Drawer;
