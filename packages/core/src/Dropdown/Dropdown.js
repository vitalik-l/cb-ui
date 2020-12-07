import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';
import getPosition from '../utils/getPosition';

function calculatePosition(element, display) {
  if (!element) return {};
  const elementPosition = getPosition(element);
  // centering
  if (display === 'top') {
    return {
      x: elementPosition.x + element.offsetWidth,
      y: elementPosition.y,
    };
  }
  return {
    x: elementPosition.x + element.offsetWidth,
    y: elementPosition.y + element.offsetHeight,
  };
}

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.position = calculatePosition(props.element, props.display);
    this.state = {
      show: props.show,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { show } = this.props;
    if (show !== nextProps.show) {
      if (nextProps.show) {
        this.position = calculatePosition(nextProps.element, nextProps.display);
      }
      this.setState({ show: nextProps.show }, () => {
        document[nextProps.show ? 'addEventListener' : 'removeEventListener'](
          'click',
          this.clickEventListener,
        );
      });
    }
  }

  clickEventListener = () => {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  };

  onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  onChange = (id) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(id);
    }
  };

  render() {
    const { className, options, value, display } = this.props;
    const { show } = this.state;

    if (!show) return null;

    const style = {
      left: this.position.x,
      top: this.position.y,
      transform: display === 'top' ? 'translate(-100%, -100%)' : 'translateX(-100%)',
    };

    return createPortal(
      <div className={classNames('cb-dropdown', className)} onClick={this.onClick} style={style}>
        {options.map(({ id, label }) => (
          <DropdownItem active={id === value} id={id} onClick={this.onChange} key={id}>
            {label}
          </DropdownItem>
        ))}
      </div>,
      document.body,
    );
  }
}

Dropdown.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({})]),
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
  display: PropTypes.string,
};

Dropdown.defaultProps = {
  display: 'bottom',
};

export default Dropdown;
