import React from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import { clamp, capitalize } from './utils';

const Slider = (props) => {
  const { className, min, max, value, step, onChange } = props;
  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const [thumbPosition, setThumbPosition] = React.useState(0);

  const fillWidth = React.useMemo(() => {
    return thumbRef.current ? thumbPosition + thumbRef.current.offsetWidth / 2 : 0;
  }, [thumbPosition]);

  const getLimit = React.useCallback(() => {
    return sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
  }, []);

  React.useEffect(() => {
    const getPositionFromValue = () => {
      const limit = getLimit();
      const clampValue = clamp(value, min, max);
      const diffMaxMin = max - min;
      const diffValMin = clampValue - min;
      const percentage = diffValMin / diffMaxMin;
      return Math.round(percentage * limit);
    };

    setThumbPosition(getPositionFromValue());
  }, [value, max, min, getLimit]);

  const getValueFromPosition = (pos) => {
    const limit = getLimit();
    const percentage = clamp(pos, 0, limit) / (limit || 1);
    const baseVal = step * Math.round((percentage * (max - min)) / step);
    const result = baseVal + min;
    return clamp(result, min, max);
  };

  /**
   * Calculate position of slider based on value
   * @param  {Object} event - Event object
   * @return {number} value - Slider value
   */
  const position = (event) => {
    const node = sliderRef.current;
    const coordinateStyle = 'x';
    const directionStyle = 'left';
    const clientCoordinateStyle = `client${capitalize(coordinateStyle)}`;
    const coordinate = !event.touches
      ? event[clientCoordinateStyle]
      : event.touches[0][clientCoordinateStyle];
    const direction = node.getBoundingClientRect()[directionStyle];
    const pos = coordinate - direction - thumbRef.current.offsetWidth / 2;
    return getValueFromPosition(pos);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!onChange) return;

    const newValue = position(event);

    if (onChange) {
      onChange(newValue, event);
    }
  };

  /**
   * Detach event listeners to mousemove/mouseup events
   * @return {void}
   */
  const handleEnd = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', handleEnd);
  };

  /**
   * Attach event listeners to mousemove/mouseup events
   * @return {void}
   */
  const handleStart = (event) => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('touchend', handleEnd);
    handleDrag(event);
  };

  return (
    <div
      className={classNames('cb-Slider', className)}
      ref={sliderRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseUp={handleEnd}
      onTouchEnd={handleEnd}
      onBlur={handleEnd}
    >
      <div className="cb-Slider__fill" style={{ width: fillWidth }} />
      <div className="cb-Slider__thumb" ref={thumbRef}>
        <svg
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateX(${thumbPosition}px)` }}
        >
          <rect
            x="1"
            y="1.5"
            width="25"
            height="25"
            rx="6"
            fill="#C4C4C4"
            stroke="#222324"
            strokeWidth="2"
          />
          <rect x="12" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="12" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="12" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="12" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="12" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="8" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="8" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="8" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="8" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="8" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="16" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="16" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="16" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="16" y="9.5" width="2" height="10" fill="#222324" />
          <rect x="16" y="9.5" width="2" height="10" fill="#222324" />
        </svg>
      </div>
    </div>
  );
};

Slider.displayName = 'Slider';

Slider.defaultProps = {
  min: 1,
  max: 100,
  step: 1,
};

Slider.propTypes = {
  className: PropsTypes.string,
  min: PropsTypes.number,
  max: PropsTypes.number,
  value: PropsTypes.number,
  step: PropsTypes.number,
  onChange: PropsTypes.func,
};

export { Slider };
