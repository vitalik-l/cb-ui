import cx from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalize, clamp } from './utils';

/**
 * Predefined constants
 * @type {Object}
 */
const constants = {
  orientation: {
    horizontal: {
      dimension: 'width',
      direction: 'left',
      reverseDirection: 'right',
      coordinate: 'x',
    },
    vertical: {
      dimension: 'height',
      direction: 'top',
      reverseDirection: 'bottom',
      coordinate: 'y',
    },
  },
};

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      limit: 0,
      grab: 0,
    };
  }

  componentDidMount() {
    this.handleUpdate();
  }

  /**
   * Prevent default event and bubbling
   * @param  {Object} e - Event object
   * @return {void}
   */
  handleNoop = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  /**
   * Format label/tooltip value
   * @param  {Number} value - value
   * @return {Number} formatted
   */
  handleFormat = (value) => {
    const { format } = this.props;
    return format ? format(value) : value;
  };

  /**
   * Update slider state on change
   * @return {void}
   */
  handleUpdate = () => {
    if (!this.slider) {
      // for shallow rendering
      return;
    }
    const { orientation } = this.props;
    const dimension = capitalize(constants.orientation[orientation].dimension);
    const sliderPos = this.slider[`offset${dimension}`];
    const handlePos = this.handle[`offset${dimension}`];

    this.setState({
      limit: sliderPos - handlePos,
      grab: handlePos / 2,
    });
  };

  /**
   * Attach event listeners to mousemove/mouseup events
   * @return {void}
   */
  handleStart = (e) => {
    const { onChangeStart } = this.props;
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
    document.addEventListener('touchmove', this.handleDrag);
    document.addEventListener('touchend', this.handleEnd);
    if (onChangeStart) {
      onChangeStart(e);
    }
  };

  /**
   * Handle drag/mousemove event
   * @param  {Object} e - Event object
   * @return {void}
   */
  handleDrag = (e) => {
    this.handleNoop(e);
    const { onChange } = this.props;
    const { target } = e;
    if (!onChange) return;

    let value = this.position(e);
    if (target.classList.contains('rangeslider__label') && target.dataset.value) {
      value = parseFloat(target.dataset.value);
    }

    if (onChange) {
      onChange(value, e);
    }
  };

  /**
   * Detach event listeners to mousemove/mouseup events
   * @return {void}
   */
  handleEnd = (e) => {
    const { onChangeComplete } = this.props;
    if (onChangeComplete) {
      onChangeComplete(e);
    }
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleEnd);
    document.removeEventListener('touchmove', this.handleDrag);
    document.removeEventListener('touchend', this.handleEnd);
  };

  /**
   * Calculate position of slider based on its value
   * @param  {number} value - Current value of slider
   * @return {position} pos - Calculated position of slider based on value
   */
  getPositionFromValue = (value) => {
    const { limit } = this.state;
    const { min, max } = this.props;
    const diffMaxMin = max - min;
    const diffValMin = value - min;
    const percentage = diffValMin / diffMaxMin;
    const pos = Math.round(percentage * limit);

    return pos;
  };

  /**
   * Translate position of slider to slider value
   * @param  {number} pos - Current position/coordinates of slider
   * @return {number} value - Slider value
   */
  getValueFromPosition = (pos) => {
    const { limit } = this.state;
    const { orientation, min, max, step } = this.props;
    const percentage = clamp(pos, 0, limit) / (limit || 1);
    const baseVal = step * Math.round((percentage * (max - min)) / step);
    const value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

    return clamp(value, min, max);
  };

  /**
   * Calculate position of slider based on value
   * @param  {Object} e - Event object
   * @return {number} value - Slider value
   */
  position = (e) => {
    const { grab } = this.state;
    const { orientation, reverse } = this.props;

    const node = this.slider;
    const coordinateStyle = constants.orientation[orientation].coordinate;
    const directionStyle = reverse
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction;
    const clientCoordinateStyle = `client${capitalize(coordinateStyle)}`;
    const coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
    const direction = node.getBoundingClientRect()[directionStyle];
    const pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;
    return this.getValueFromPosition(pos);
  };

  /**
   * Grab coordinates of slider
   * @param  {Object} pos - Position object
   * @return {Object} - Slider fill/handle coordinates
   */
  coordinates = (pos) => {
    const { limit, grab } = this.state;
    const { orientation } = this.props;
    const value = this.getValueFromPosition(pos);
    const handlePos = this.getPositionFromValue(value);
    const sumHandleposGrab = orientation === 'horizontal' ? handlePos + grab : handlePos;
    const fillPos = orientation === 'horizontal' ? sumHandleposGrab : limit - sumHandleposGrab;

    return {
      fill: fillPos,
      handle: handlePos,
      label: handlePos,
    };
  };

  render() {
    const { value, orientation, className, tooltip, reverse, labels } = this.props;
    const { dimension } = constants.orientation[orientation];
    const direction = reverse
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction;
    const position = this.getPositionFromValue(value);
    const coords = this.coordinates(position);
    const fillStyle = { [dimension]: `${coords.fill}px` };
    // const handleStyle = { [direction]: `${coords.handle}px` };
    const handleStyle = { transform: `translateX(${coords.handle}px)` };
    let labelsComp = null;
    let labelKeys = Object.keys(labels);

    if (labelKeys.length > 0) {
      const items = [];

      labelKeys = labelKeys.sort((a, b) => (reverse ? a - b : b - a));

      for (const key of labelKeys) {
        const labelPosition = this.getPositionFromValue(key);
        const labelCoords = this.coordinates(labelPosition);
        const labelStyle = { [direction]: `${labelCoords.label}px` };
        items.push(
          <li
            key={key}
            className={cx('rangeslider__label')}
            data-value={key}
            onMouseDown={this.handleDrag}
            style={labelStyle}
          >
            {labels[key]}
          </li>,
        );
      }

      labelsComp = (
        <ul
          ref={(sl) => {
            this.labels = sl;
          }}
          className={cx('rangeslider__label-list')}
        >
          {items}
        </ul>
      );
    }

    return (
      <div
        ref={(s) => {
          this.slider = s;
        }}
        className={cx(
          'rangeslider',
          `rangeslider-${orientation}`,
          { 'rangeslider-reverse': reverse },
          className,
        )}
        onMouseDown={this.handleDrag}
        onMouseUp={this.handleEnd}
        onTouchStart={this.handleDrag}
        onTouchEnd={this.handleEnd}
      >
        <div className="rangeslider__fill" style={fillStyle} />
        <div
          ref={(sh) => {
            this.handle = sh;
          }}
          className="rangeslider__handle"
          onMouseDown={this.handleStart}
          onTouchStart={this.handleStart}
          style={handleStyle}
        >
          {tooltip && (
            <div
              ref={(st) => {
                this.tooltip = st;
              }}
              className="rangeslider__tooltip"
            >
              <span>{this.handleFormat(value)}</span>
            </div>
          )}
        </div>
        {labelsComp}
      </div>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  orientation: PropTypes.string,
  className: PropTypes.string,
  tooltip: PropTypes.bool,
  reverse: PropTypes.bool,
  labels: PropTypes.shape({}),
  format: PropTypes.func,
  onChangeStart: PropTypes.func,
  onChange: PropTypes.func,
  onChangeComplete: PropTypes.func,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: 'horizontal',
  tooltip: true,
  reverse: false,
  labels: {},
};

export default Slider;
