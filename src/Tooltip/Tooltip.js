import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getPosition from '../utils/getPosition';

const styles = {
  zIndex: 999,
  position: 'absolute',
  left: 0,
  top: 0,
  pointerEvents: 'none',
};

class Tooltip extends Component {
  static calculatePosition = (element) => {
    const targetElement = typeof element === 'string' ? document.getElementById(element) : element;
    if (!targetElement) return {};
    const elementPosition = getPosition(targetElement);
    // centering
    return {
      left: elementPosition.x + targetElement.offsetWidth / 2,
      top: elementPosition.y,
    };
  };

  constructor(props) {
    super(props);
    this.position = props.position || Tooltip.calculatePosition(props.element);

    this.state = {
      show: props.show,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show });
    if (nextProps.timeout) {
      if (nextProps.show) {
        this.timeoutId = setTimeout(() => this.setState({ show: false }), nextProps.timeout);
      }
      if (!nextProps.show) clearTimeout(this.timeoutId);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps) {
    this.position = nextProps.position || Tooltip.calculatePosition(nextProps.element);
  }

  render() {
    const {
      className,
      renderTo,
      style,
      children,
    } = this.props;
    const { show } = this.state;
    const newStyle = {
      ...styles,
      left: this.position.left || 0,
      top: this.position.top || 0,
      ...style,
    };
    if (show === false) return null;

    const tooltip = (
      <div className={classNames('cb-Tooltip', className)} style={newStyle}>
        {children}
      </div>
    );

    return renderTo ? createPortal(
      <span>
        {tooltip}
      </span>,
      renderTo,
    ) : tooltip;
  }
}

Tooltip.propTypes = {
  show: PropTypes.bool,
  element: PropTypes.node,
  position: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  timeout: PropTypes.number,
  renderTo: PropTypes.node,
  style: PropTypes.shape({}),
};

Tooltip.defaultProps = {
  show: false,
  renderTo: document.body,
};

export default Tooltip;
