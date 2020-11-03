import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { transitionEndEvent, animationEndEvent } from '../utils/animations';

class Chip extends PureComponent {
  componentDidMount() {
    const { animate } = this.props;
    [transitionEndEvent, animationEndEvent].forEach((event) => {
      this.chip.addEventListener(event, this.handleAnimationEnd);
    });
    if (animate) {
      animate(this);
    }
  }

  componentDidUpdate(prevProps) {
    const { animate } = this.props;
    if (prevProps.animate !== animate && animate) {
      animate(this);
    }
  }

  componentWillUnmount() {
    [transitionEndEvent, animationEndEvent].forEach((event) => {
      this.chip.removeEventListener(event, this.handleAnimationEnd);
    });
  }

  handleAnimationEnd = (e) => {
    const { onAnimationEnd } = this.props;
    if (onAnimationEnd) {
      onAnimationEnd(e, this);
    }
  };

  onClick = (e) => {
    const { onClick, value } = this.props;
    if (onClick) {
      onClick(e, value);
    }
  };

  render() {
    const {
      color,
      value,
      large,
      selected,
      className,
      onMouseEnter,
      onMouseLeave,
      pos,
    } = this.props;
    if (!value) return <div />;
    let colorClass = color ? `chip--${color}` : null;

    if (color === 'random') {
      const colors = ['blue', 'red', 'white', 'black', 'green'];
      colorClass = `chip--${colors[Math.floor(Math.random() * colors.length) + 1]}`;
    }

    return (
      <div
        className={classNames(
          'chip',
          {
            selected,
            'chip--large-font': value.toString().length < 4,
            large,
            [`v${value}`]: !colorClass,
          },
          colorClass,
          className,
        )}
        style={pos ? { left: pos.left, top: pos.top } : null}
        onClick={this.onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={(node) => {
          this.chip = node;
        }}
      >
        <span>{value >= 1000 ? `${Math.round(value / 1000)}K` : value}</span>
      </div>
    );
  }
}

Chip.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selected: PropTypes.bool,
  className: PropTypes.string,
  pos: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
  }),
  animate: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  color: PropTypes.string,
  large: PropTypes.bool,
};

Chip.defaultProps = {
  value: 1,
  selected: false,
  className: '',
  pos: {},
};

export default Chip;
