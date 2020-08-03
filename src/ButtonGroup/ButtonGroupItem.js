import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from '../utils/omit';

const ButtonGroupItem = memo((props) => {
  const {
    children, active, value, className,
  } = props;

  return (
    <li className={classNames(className, { active })} data-value={value} {...omit(props, ['className', 'value', 'children', 'active'])}>
      {children}
    </li>
  );
});

ButtonGroupItem.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  value: PropTypes.any,
};

ButtonGroupItem.displayName = 'ButtonGroupItem';

export default ButtonGroupItem;
