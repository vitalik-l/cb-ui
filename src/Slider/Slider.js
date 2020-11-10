import React from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import { clamp, capitalize } from './utils';
import './styles/default.scss';

const Slider = React.forwardRef((props, ref) => {
  const {
    className,
    min,
    max,
    value,
    step = 1,
    onChange,
  } = props;
  const sliderRef = React.useRef();
  const [fillWidth, setFillWidth] = React.useState(0);

  React.useEffect(() => {
    const getPositionFromValue = () => {
      const limit = sliderRef.current.offsetWidth;
      const diffMaxMin = max - min;
      const diffValMin = value - min;
      const percentage = diffValMin / diffMaxMin;
      return Math.round(percentage * limit);
    };

    setFillWidth(getPositionFromValue());
  }, [value]);

  const getValueFromPosition = (pos) => {
    const limit = sliderRef.current.offsetWidth;
    const percentage = clamp(pos, 0, limit) / (limit || 1);
    const baseVal = step * Math.round((percentage * (max - min)) / step);
    const value = baseVal + min;
    return clamp(value, min, max);
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
    const coordinate = !event.touches ? event[clientCoordinateStyle] : event.touches[0][clientCoordinateStyle];
    const direction = node.getBoundingClientRect()[directionStyle];
    const pos = coordinate - direction;
    return getValueFromPosition(pos);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!onChange) return;

    const value = position(event);

    if (onChange) {
      onChange(value, event);
    }
  };

  return (
    <div
      className={classNames("cb-Slider", className)}
      ref={sliderRef}
      onMouseDown={handleDrag}
    >
      <div className="cb-Slider__fill" style={{width: fillWidth}} />
    </div>
  )
});

Slider.displayName = 'Slider';

Slider.defaultProps = {
  min: 1,
  max: 100,
};

Slider.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
};

export { Slider };
