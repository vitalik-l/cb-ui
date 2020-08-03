import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from '../utils/omit';

export default class RadiogroupButton extends PureComponent {
  render() {
    const {
      children, active, value, className,
    } = this.props;
    return (
      <li className={classNames(className, { active })} data-value={value} {...omit(this.props, ['className', 'value', 'children', 'active'])}>
        {children}
      </li>
    );
  }
}

RadiogroupButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
