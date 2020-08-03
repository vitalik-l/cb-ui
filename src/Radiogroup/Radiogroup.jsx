import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';

class Radiogroup extends Component {
    onClick = (e) => {
      const clickedValue = e.currentTarget.getAttribute('data-value');
      if (clickedValue == null || clickedValue === this.props.value) return;
      this.props.onChange && this.props.onChange(clickedValue, e);
    };

    render() {
      const { children, value, className } = this.props;
      const childrenItems = React.Children.map(children, (child) => {
        const childProps = {};
        if (value && !child.props.hasOwnProperty('active')) childProps.active = child.props.value == value;
        if (this.props.onChange && !child.props.onClick) childProps.onClick = this.onClick;
        return React.cloneElement(child, childProps);
      });
      return (
        <ul className={className || 'cb-radiogroup'} {...omit(this.props, ['children', 'value', 'onChange'])}>
          {childrenItems}
        </ul>
      );
    }
}

Radiogroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Radiogroup;
