import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function RadioGroup(props) {
  const { children, value, className, onChange, ...otherProps } = props;

  function onChildClick(v) {
    return function onClick(e) {
      if (v === null || v === undefined) return;
      if (onChange) onChange(v, e);
    };
  }

  const childrenItems = React.Children.map(children, (child) => {
    const childProps = {};
    if (value && !('active' in child.props)) childProps.active = child.props.value === value;
    if (onChange && !child.props.onClick) childProps.onClick = onChildClick(child.props.value);
    return React.cloneElement(child, childProps);
  });

  return (
    <div className={classNames('cb-RadioGroup', className)} role="radiogroup" {...otherProps}>
      {childrenItems}
    </div>
  );
}

RadioGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default RadioGroup;
