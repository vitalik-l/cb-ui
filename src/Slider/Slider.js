import React from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import './styles/default.scss';

const Slider = React.forwardRef((props, ref) => {
  const {
    className,
    min,
    max,
    value,
  } = props;

  return (
    <div className={classNames("cb-Slider", className)}>
      <div className="cb-Slider__fill" />
    </div>
  )
});

Slider.displayName = 'Slider';

Slider.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
};

export { Slider };
