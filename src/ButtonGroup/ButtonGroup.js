import React, { memo } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';

const ButtonGroup = memo((props) => {
  const { children, value, className } = props;

  function onClick(e) {
    const clickedValue = e.currentTarget.getAttribute('data-value');
    if (clickedValue == null) return;
    props.onChange && props.onChange(clickedValue, e);
  }

  const childrenItems = React.Children.map(children, (child) => {
    const childProps = {};
    if (value && !child.props.hasOwnProperty('active')) childProps.active = child.props.value == value;
    if (props.onChange && !child.props.onClick) childProps.onClick = onClick;
    return React.cloneElement(child, childProps);
  });

  return (
    <ul className={className || 'cb-ButtonGroup'} {...omit(props, ['children', 'value', 'onChange'])}>
      {childrenItems}
    </ul>
  );
});

ButtonGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
