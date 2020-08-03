import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// .firefox
let isFF = true;
const addRule = (function (style) {
  const { sheet } = document.head.appendChild(style);
  return function (selector, css) {
    if (isFF) {
      if (sheet.cssRules.length > 0) {
        sheet.deleteRule(0);
      }

      try {
        sheet.insertRule(`${selector}{${css}}`, 0);
      } catch (ex) {
        isFF = false;
      }
    }
  };
}(document.createElement('style')));

class InputRange extends PureComponent {
    static propTypes = {
      disabled: PropTypes.bool,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      renderOutputValue: PropTypes.func,
    };

    static defaultProps = {
      disabled: false,
      min: 0,
      max: 5,
      step: 1,
    };

    componentDidMount() {
      this.handleSliderChange();
    }

    /**
     IE10+ doesn't fire React onChange event. Substitute for this is onMouseMove and onClick events
     * */
    onMouseMove = (e) => {
      if (e.buttons !== 1 && e.which !== 1) return;
      this.handleSliderChange(e);
    };

    onClick = (e) => {
      this.handleSliderChange(e);
    };

    getOutputValue(value) {
      if (this.props.renderOutputValue) return this.props.renderOutputValue(value);
      return value;
    }

    handleSliderChange = (e) => {
      // fire change only if value is really was changed
      if (this.sliderValue === this.sliderNode.value) return;

      // HTML range input decoration - value bubble, progress bar etc.
      const slider = this.sliderNode;
      const inputRangeOutputElement = this.outputNode;
      const sliderWidth = slider.offsetWidth;
      const sliderVal = slider.value;
      const newPoint = (sliderVal - this.props.min) / (this.props.max - this.props.min);
      let newPlacePx; let
        renderValue;

      this.sliderValue = sliderVal;
      renderValue = this.getOutputValue(sliderVal);
      inputRangeOutputElement.textContent = renderValue;
      if (newPoint <= 0) {
        newPlacePx = 0;
      } else {
        newPlacePx = newPoint * (sliderWidth - inputRangeOutputElement.offsetWidth);
      }
      inputRangeOutputElement.style.left = `${newPlacePx}px`;

      slider.style.background = `linear-gradient(to right, transparent 0%, transparent ${newPoint * 100}%, #111 ${newPoint * 100}%, #111 100%)`;

      if (this.props.disabled || !e) return;
      const changeHandler = this.props.onChange;
      changeHandler && changeHandler(sliderVal);
    };

    render() {
      const {
        className,
        label,
        name,
        min,
        max,
        step,
        value,
        disabled,
      } = this.props;

      return (
        <div className={className || 'input-range'}>
          <div className="input-range-label">
            <span>{`${min}s`}</span>
            {label ? <label>{label}</label> : null}
            <span>{`${max}s`}</span>
          </div>
          <div className="input-range-group">
            <input
              name={name}
              type="range"
              min={min}
              max={max}
              step={step}
              defaultValue={value}
              disabled={!!disabled}
              ref={(node) => this.sliderNode = node}
              onChange={this.handleSliderChange}
              onClick={this.onClick}
              onMouseMove={this.onMouseMove}
            />
            <div className="input-range-content">
              <div className="input-range-output" ref={(node) => this.outputNode = node} />
              <div className="input-range-track-active" ref={(node) => this.trackNode = node} />
            </div>
          </div>
        </div>
      );
    }
}

export default InputRange;
