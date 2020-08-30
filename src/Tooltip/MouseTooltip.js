import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import getPosition from '../utils/getPosition';

class MouseTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      content: 'Tooltip',
      x: 0,
      y: 0,
    };
    this.hideTimeoutId = null;
  }

  static show(eventOrTarget) {
    if (!MouseTooltip.ref) return;
    const target = eventOrTarget.target || eventOrTarget;
    const {
      tooltipTimeout = 500,
      tooltipAlign = 'center',
      tooltipPosition = 'top',
    } = target.dataset;

    clearTimeout(MouseTooltip.showTimeoutId);
    MouseTooltip.showTimeoutId = setTimeout(() => {
      MouseTooltip.ref.show(target, {
        position: tooltipPosition,
        align: tooltipAlign,
      });
    }, tooltipTimeout);
  }

  static hide() {
    if (!MouseTooltip.ref) return;
    clearTimeout(MouseTooltip.showTimeoutId);
    MouseTooltip.ref.hide();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentDidMount() {
    MouseTooltip.ref = this;
    document.addEventListener('mousemove', this.onMouseMove);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentDidUpdate(prevProps, prevState) {
    const { init, x, y } = this.state;
    if ((init && !prevState.init) || x !== prevState.x || y !== prevState.y) {
      this.setState({
        visible: true,
      });
    }
  }

  onMouseMove = () => {
    document.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      MouseTooltip.mouseX = pageX;
      MouseTooltip.mouseY = pageY;
    });
  };

  show = (target, { position, align }) => {
    const targetPosition = getPosition(target);
    const coordinates = {};

    switch (position) {
      case 'top':
        coordinates.x = align === 'center'
          ? targetPosition.x + target.offsetWidth / 2
          : MouseTooltip.mouseX;
        coordinates.y = targetPosition.y;
        break;
      case 'left':
        coordinates.x = targetPosition.x;
        coordinates.y = align === 'center'
          ? targetPosition.y + target.offsetHeight / 2
          : MouseTooltip.mouseY;
        break;
      default: break;
    }

    clearTimeout(this.hideTimeoutId);
    this.setState({
      init: true,
      visible: false,
      content: target.dataset.tooltip,
      x: coordinates.x,
      y: coordinates.y,
      position,
      // wtf?
      align,
    }, () => {
      this.hideTimeoutId = setTimeout(() => {
        this.hide();
      }, 2000);
    });
  };

  hide = () => {
    this.setState({
      init: false,
      visible: false,
    });
  };

  render() {
    const { className } = this.props;
    const {
      visible, content, x, y, init, position,
    } = this.state;
    let coordinates = {};

    if (visible) {
      switch (position) {
        case 'top':
          coordinates = {
            left: `${x - this.tooltipNode.offsetWidth / 2}px`,
            top: `${y - this.tooltipNode.offsetHeight}px`,
          };
          break;
        case 'left':
          coordinates = {
            left: `${x - this.tooltipNode.offsetWidth}px`,
            top: `${y - this.tooltipNode.offsetHeight / 2}px`,
          };
          break;
        default: break;
      }
    }

    return createPortal(
      <div
        className={classNames('cb-MouseTooltip', { 'cb-MouseTooltip--init': init, 'cb-MouseTooltip--visible': visible, [`cb-MouseTooltip--${position}`]: position }, className)}
        onClick={this.onClick}
        style={coordinates}
        ref={(el) => {
          this.tooltipNode = el;
        }}
      >
        <div className="cb-MouseTooltip__content">
          {content}
        </div>
      </div>,
      document.body,
    );
  }
}

MouseTooltip.propTypes = {
  className: PropTypes.string,
};

export default MouseTooltip;
